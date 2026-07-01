import { Component, Output, EventEmitter } from '@angular/core';
import { ExcelService } from '../../services/excel.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.scss']
})
export class UploadExcelComponent {
  @Output() studentsLoaded = new EventEmitter<Student[]>();

  isLoading = false;
  selectedFile: File | null = null;
  errorMessage = '';
  successMessage = '';

  constructor(private excelService: ExcelService) { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      if (this.isValidFile(file)) {
        this.selectedFile = file;
        this.errorMessage = '';
        this.successMessage = '';
      } else {
        this.errorMessage = 'Please select a valid Excel file (.xlsx or .xls)';
        this.selectedFile = null;
      }
    }
  }

  private isValidFile(file: File): boolean {
    const validTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
    return validTypes.includes(file.type);
  }

  async uploadFile(): Promise<void> {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a file first';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const students = await this.excelService.parseExcelFile(this.selectedFile);

      if (students.length === 0) {
        this.errorMessage = 'No student records found in the Excel file';
        return;
      }

      this.successMessage = `Successfully loaded ${students.length} student records`;
      this.studentsLoaded.emit(students);
      this.selectedFile = null;
    } catch (error) {
      this.errorMessage = 'Failed to parse Excel file. Please check the format.';
      console.error('Error parsing Excel:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
