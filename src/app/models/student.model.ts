export interface Student {
  firstName: string;
  lastName: string;
  fullName?: string;
  registration_Number: string;
  college_Name: string;
  domain_Name: string;
  starting_Date: string;
  ending_Date: string;
  duration: string;
  mode: string;
  project_Title: string;
}

export interface DownloadHistory {
  id?: string;
  studentName: string;
  registrationNumber: string;
  documentType: 'offer-letter' | 'certificate';
  generatedDate: Date;
  fileName: string;
}

export interface CertificateSettings {
  logoUrl: string;
  ceoSignatureUrl: string;
  managerSignatureUrl: string;
  footerPhone: string;
  footerWebsite: string;
  footerEmail: string;
  certificateText: string;
}
