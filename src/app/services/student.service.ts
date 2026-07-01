import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  public students$ = this.studentsSubject.asObservable();

  private generatedCertificatesSubject = new BehaviorSubject<number>(0);
  public generatedCertificates$ = this.generatedCertificatesSubject.asObservable();

  private generatedOfferLettersSubject = new BehaviorSubject<number>(0);
  public generatedOfferLetters$ = this.generatedOfferLettersSubject.asObservable();

  constructor() {
    this.loadCountsFromStorage();
  }

  setStudents(students: Student[]): void {
    this.studentsSubject.next(students);
  }

  getStudents(): Student[] {
    return this.studentsSubject.value;
  }

  incrementCertificateCount(): void {
    const current = this.generatedCertificatesSubject.value;
    this.generatedCertificatesSubject.next(current + 1);
    this.saveCountsToStorage();
  }

  incrementOfferLetterCount(): void {
    const current = this.generatedOfferLettersSubject.value;
    this.generatedOfferLettersSubject.next(current + 1);
    this.saveCountsToStorage();
  }

  private saveCountsToStorage(): void {
    localStorage.setItem('certificateCount', String(this.generatedCertificatesSubject.value));
    localStorage.setItem('offerLetterCount', String(this.generatedOfferLettersSubject.value));
  }

  private loadCountsFromStorage(): void {
    const certificateCount = localStorage.getItem('certificateCount');
    const offerLetterCount = localStorage.getItem('offerLetterCount');

    if (certificateCount) {
      this.generatedCertificatesSubject.next(parseInt(certificateCount, 10));
    }
    if (offerLetterCount) {
      this.generatedOfferLettersSubject.next(parseInt(offerLetterCount, 10));
    }
  }
}
