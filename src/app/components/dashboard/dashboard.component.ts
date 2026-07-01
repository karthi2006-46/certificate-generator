import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { HistoryService } from '../../services/history.service';
import { DownloadHistory } from '../../models/student.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalStudents: number = 0;
  generatedCertificates$: Observable<number>;
  generatedOfferLetters$: Observable<number>;
  recentDownloads: DownloadHistory[] = [];

  constructor(
    private studentService: StudentService,
    private historyService: HistoryService
  ) {
    this.generatedCertificates$ = this.studentService.generatedCertificates$;
    this.generatedOfferLetters$ = this.studentService.generatedOfferLetters$;
  }

  ngOnInit(): void {
    this.studentService.students$.subscribe(students => {
      this.totalStudents = students.length;
    });

    this.historyService.history$.subscribe(history => {
      this.recentDownloads = history.slice(0, 5);
    });
  }

  getDocumentTypeLabel(type: string): string {
    return type === 'offer-letter' ? 'Offer Letter' : 'Certificate';
  }
}
