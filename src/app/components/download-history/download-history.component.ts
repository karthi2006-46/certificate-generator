import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { DownloadHistory } from '../../models/student.model';

@Component({
  selector: 'app-download-history',
  templateUrl: './download-history.component.html',
  styleUrls: ['./download-history.component.scss']
})
export class DownloadHistoryComponent implements OnInit {
  history: DownloadHistory[] = [];
  displayedColumns: string[] = ['studentName', 'registrationNumber', 'documentType', 'generatedDate', 'actions'];
  searchText = '';
  filteredHistory: DownloadHistory[] = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyService.history$.subscribe(history => {
      this.history = history;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    if (this.searchText.trim() === '') {
      this.filteredHistory = this.history;
    } else {
      const searchLower = this.searchText.toLowerCase();
      this.filteredHistory = this.history.filter(record =>
        record.studentName.toLowerCase().includes(searchLower) ||
        record.registrationNumber.toLowerCase().includes(searchLower) ||
        record.documentType.toLowerCase().includes(searchLower)
      );
    }
  }

  deleteRecord(id: string | undefined): void {
    if (id && confirm('Are you sure you want to delete this record?')) {
      this.historyService.deleteRecord(id);
    }
  }

  clearHistory(): void {
    if (confirm('Are you sure you want to clear all history?')) {
      this.historyService.clearHistory();
    }
  }

  getDocumentTypeLabel(type: string): string {
    return type === 'offer-letter' ? 'Offer Letter' : 'Certificate';
  }
  getCertificateCount(): number {
  return this.history.filter(
    item => item.documentType === 'certificate'
  ).length;
}

getOfferLetterCount(): number {
  return this.history.filter(
    item => item.documentType === 'offer-letter'
  ).length;
}

  exportAsCSV(): void {
    const headers = ['Student Name', 'Registration Number', 'Document Type', 'Generated Date'];
    const rows = this.filteredHistory.map(record => [
      record.studentName,
      record.registrationNumber,
      this.getDocumentTypeLabel(record.documentType),
      new Date(record.generatedDate).toLocaleString()
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `download_history_${new Date().getTime()}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
  }
}
