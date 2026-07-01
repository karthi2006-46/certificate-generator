import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PdfService } from '../../services/pdf.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss']
})
export class PreviewDialogComponent {
  student: Student;
  documentType: 'offer-letter' | 'certificate';
  isDownloading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pdfService: PdfService,
    public dialogRef: MatDialogRef<PreviewDialogComponent>
  ) {
    this.student = data.student;
    this.documentType = data.documentType;
  }

  async downloadPdf(): Promise<void> {
    this.isDownloading = true;
    try {
      const templateElement = document.getElementById(
        `${this.documentType}-preview-${this.student.registration_Number}`
      );

      if (templateElement) {
        const fileName = this.documentType === 'certificate'
          ? `Certificate_${this.student.registration_Number}.pdf`
          : `OfferLetter_${this.student.registration_Number}.pdf`;

        await this.pdfService.generatePdfFromHtml(templateElement, fileName);
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      this.isDownloading = false;
    }
  }

  print(): void {
    window.print();
  }

  close(): void {
    this.dialogRef.close();
  }
}
