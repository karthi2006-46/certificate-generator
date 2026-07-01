import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() { }

  async generatePdfFromHtml(
    htmlContent: HTMLElement,
    fileName: string,
    orientation: 'portrait' | 'landscape' = 'portrait'
  ): Promise<void> {
    try {
      // Create canvas from HTML
      const canvas = await html2canvas(htmlContent, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: orientation,
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calculate image dimensions to fit page
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add image to PDF, handling multiple pages if needed
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download PDF
      pdf.save(fileName);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      throw error;
    }
  }

  async generatePdfFromUrl(url: string, fileName: string): Promise<void> {
    try {
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      await new Promise(resolve => {
        iframe.onload = resolve;
      });

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        const element = iframeDoc.body;
        await this.generatePdfFromHtml(element, fileName);
      }

      document.body.removeChild(iframe);
    } catch (error) {
      console.error('Failed to generate PDF from URL:', error);
      throw error;
    }
  }

  async canvasToImage(element: HTMLElement): Promise<Blob> {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    return new Promise(resolve => {
      canvas.toBlob(blob => {
        if (blob) {
          resolve(blob);
        }
      }, 'image/png');
    });
  }
}
