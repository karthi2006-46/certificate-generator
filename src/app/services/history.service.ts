import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DownloadHistory } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly STORAGE_KEY = 'downloadHistory';
  private historySubject = new BehaviorSubject<DownloadHistory[]>([]);
  public history$ = this.historySubject.asObservable();

  constructor() {
    this.loadHistoryFromStorage();
  }

  addToHistory(record: DownloadHistory): void {
    const history = this.historySubject.value;
    const newRecord: DownloadHistory = {
      ...record,
      id: this.generateId()
    };
    history.unshift(newRecord);
    this.historySubject.next(history);
    this.saveHistoryToStorage();
  }

  getHistory(): DownloadHistory[] {
    return this.historySubject.value;
  }

  clearHistory(): void {
    this.historySubject.next([]);
    this.saveHistoryToStorage();
  }

  deleteRecord(id: string): void {
    const history = this.historySubject.value.filter(record => record.id !== id);
    this.historySubject.next(history);
    this.saveHistoryToStorage();
  }

  private loadHistoryFromStorage(): void {
    const history = localStorage.getItem(this.STORAGE_KEY);
    if (history) {
      try {
        this.historySubject.next(JSON.parse(history));
      } catch (error) {
        console.error('Failed to load history from storage', error);
      }
    }
  }

  private saveHistoryToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.historySubject.value));
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
