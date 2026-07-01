import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Student } from '../../models/student.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  @Input() students: Student[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() previewStudent = new EventEmitter<Student>();
@Output() generateStudent = new EventEmitter<Student>();
@Output() downloadStudent = new EventEmitter<Student>();

preview(student: Student): void {
  this.previewStudent.emit(student);
}

generate(student: Student): void {
  this.generateStudent.emit(student);
}

download(student: Student): void {
  this.downloadStudent.emit(student);
}

  displayedColumns: string[] = ['select', 'fullName', 'registration_Number', 'domain_Name', 'starting_Date', 'ending_Date', 'actions'];
  dataSource = new MatTableDataSource<Student>();
  selectedRows = new Set<number>();
  searchText = '';

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    this.loadData();
  }

  private loadData(): void {
    this.dataSource.data = this.students;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterData(): void {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  toggleSelection(index: number): void {
    if (this.selectedRows.has(index)) {
      this.selectedRows.delete(index);
    } else {
      this.selectedRows.add(index);
    }
  }

  toggleSelectAll(event: any): void {
    if (event.checked) {
      this.dataSource.filteredData.forEach((_, index) => {
        this.selectedRows.add(index);
      });
    } else {
      this.selectedRows.clear();
    }
  }

  isSelected(index: number): boolean {
    return this.selectedRows.has(index);
  }

  getSelectedStudents(): Student[] {
    return Array.from(this.selectedRows).map(index => this.dataSource.filteredData[index]);
  }
}
