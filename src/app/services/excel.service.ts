import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() { }

  parseExcelFile(file: File): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        try {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const students: any[] = XLSX.utils.sheet_to_json(worksheet);

          const parsedStudents: Student[] = students.map(student => ({
            firstName: this.sanitizeValue(student.firstName),
            lastName: this.sanitizeValue(student.lastName),
            fullName: `${this.sanitizeValue(student.firstName)} ${this.sanitizeValue(student.lastName)}`,
            registration_Number: this.sanitizeValue(student.registration_Number),
            college_Name: this.sanitizeValue(student.college_Name),
            domain_Name: this.sanitizeValue(student.domain_Name),
            starting_Date: this.formatDate(student.starting_Date),
            ending_Date: this.formatDate(student.ending_Date),
            duration: this.sanitizeValue(student.duration),
            mode: this.sanitizeValue(student.mode),
            project_Title: this.sanitizeValue(student.project_Title)
          }));

          resolve(parsedStudents);
        } catch (error) {
          reject(new Error('Failed to parse Excel file'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsArrayBuffer(file);
    });
  }

  private sanitizeValue(value: any): string {
    if (value === null || value === undefined) {
      return '';
    }
    return String(value).trim();
  }

  private formatDate(date: any): string {
    if (!date) return '';

    if (typeof date === 'number') {
      // Excel serial date
      const excelDate = new Date((date - 25569) * 86400 * 1000);
      return excelDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }

    if (typeof date === 'string') {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      return date;
    }

    return '';
  }
}
