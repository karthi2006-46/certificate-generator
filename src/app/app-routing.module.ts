import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { DownloadHistoryComponent } from './components/download-history/download-history.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'generate',
    component: PdfGeneratorComponent
  },
  {
    path: 'history',
    component: DownloadHistoryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
