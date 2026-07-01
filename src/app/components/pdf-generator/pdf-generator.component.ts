import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { PdfService } from '../../services/pdf.service';
import { HistoryService } from '../../services/history.service';
import { Student } from '../../models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.scss']
})
export class PdfGeneratorComponent implements OnInit {
  students: Student[] = [];
  documentType: 'offer-letter' | 'certificate' = 'offer-letter';
  selectedStudent: Student | null = null;
  isGenerating = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private studentService: StudentService,
    private pdfService: PdfService,
    private historyService: HistoryService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.studentService.students$.subscribe(students => {
      this.students = students;
    });
  }

  async generatePdf(student: Student): Promise<void> {
    this.isGenerating = true;
    this.errorMessage = '';

    try {
      // Get the template component
      const templateElement = document.getElementById(`${this.documentType}-${student.registration_Number}`);

      if (!templateElement) {
        throw new Error('Template element not found');
      }

      // Generate PDF
      const fileName = this.getFileName(student);
      await this.pdfService.generatePdfFromHtml(templateElement, fileName);

      // Add to history
      this.historyService.addToHistory({
        studentName: student.fullName || '',
        registrationNumber: student.registration_Number,
        documentType: this.documentType,
        generatedDate: new Date(),
        fileName: fileName
      });

      // Update counts
      if (this.documentType === 'certificate') {
        this.studentService.incrementCertificateCount();
      } else {
        this.studentService.incrementOfferLetterCount();
      }

      this.successMessage = `${this.getDocumentTypeName()} generated successfully!`;
    } catch (error) {
      this.errorMessage = `Failed to generate ${this.getDocumentTypeName()}`;
      console.error('Error generating PDF:', error);
    } finally {
      this.isGenerating = false;
    }
  }

  private getFileName(student: Student): string {
    if (this.documentType === 'certificate') {
      return `Certificate_${student.registration_Number}.pdf`;
    } else {
      return `OfferLetter_${student.registration_Number}.pdf`;
    }
  }

  private getDocumentTypeName(): string {
    return this.documentType === 'certificate' ? 'Certificate' : 'Offer Letter';
  }

  openPreview(student: Student): void {
    this.dialog.open(PreviewDialogComponent, {
      width: '90%',
      height: '90%',
      data: {
        student,
        documentType: this.documentType
      }
    });
  }
}
