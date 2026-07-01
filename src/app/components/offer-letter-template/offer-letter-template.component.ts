import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.model';
import { CertificateService } from '../../services/certificate.service';
import { CertificateSettings } from '../../models/student.model';

@Component({
  selector: 'app-offer-letter-template',
  templateUrl: './offer-letter-template.component.html',
  styleUrls: ['./offer-letter-template.component.scss']
})
export class OfferLetterTemplateComponent {
  @Input() student: Student | null = null;

  settings: CertificateSettings;

  constructor(private certificateService: CertificateService) {
    this.settings = this.certificateService.getSettings();
  }
  today = new Date();
}
