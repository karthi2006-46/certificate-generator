import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.model';
import { CertificateService } from '../../services/certificate.service';
import { QrCodeService } from '../../services/qr-code.service';
import { CertificateSettings } from '../../models/student.model';

@Component({
  selector: 'app-completion-certificate-template',
  templateUrl: './completion-certificate-template.component.html',
  styleUrls: ['./completion-certificate-template.component.scss']
})
export class CompletionCertificateTemplateComponent {
  @Input() student: Student | null = null;

  settings: CertificateSettings;
  certificateNumber = '';
  qrCodeUrl = '';

  constructor(
    private certificateService: CertificateService,
    private qrCodeService: QrCodeService
  ) {
    this.settings = this.certificateService.getSettings();
  }

  async ngOnInit(): Promise<void> {
    this.certificateNumber = this.certificateService.generateCertificateNumber();
    if (this.student) {
      this.qrCodeUrl = await this.qrCodeService.generateQRCode(
        `${this.student.registration_Number}-${this.certificateNumber}`
      );
    }
  }
}
