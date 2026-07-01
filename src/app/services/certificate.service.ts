import { Injectable } from '@angular/core';
import { CertificateSettings } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private readonly STORAGE_KEY = 'certificateSettings';

  private defaultSettings: CertificateSettings = {
    logoUrl: 'assets/images/tvk-logo.png',
    ceoSignatureUrl: 'assets/images/ceo-signature.png',
    managerSignatureUrl: 'assets/images/manager-signature.png',
    footerPhone: '+91 9123456789',
    footerWebsite: 'www.tvktechnologies.com',
    footerEmail: 'info@tvktechnologies.com',
    certificateText: 'This is to certify that the bearer has successfully completed an internship program at TVK Technologies.'
  };

  constructor() { }

  getSettings(): CertificateSettings {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        return { ...this.defaultSettings, ...JSON.parse(stored) };
      } catch (error) {
        console.error('Failed to load certificate settings:', error);
      }
    }
    return this.defaultSettings;
  }

  saveSettings(settings: Partial<CertificateSettings>): void {
    const current = this.getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
  }

  resetSettings(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  generateCertificateNumber(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `TVK-CERT-${year}-${random}`;
  }
}
