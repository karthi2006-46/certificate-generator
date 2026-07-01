# Certificate & Offer Letter Generator

A modern web application for generating internship certificates and offer letters from Excel files using Angular 16+, TypeScript, HTML5, CSS3, XLSX, jsPDF, and html2canvas.

## Project Overview

This application is designed for TVK Technologies to manage and generate:
- Internship Offer Letters
- Internship Completion Certificates

From uploaded Excel files containing multiple student records.

## Features

### Dashboard
- Display total students, generated certificates, and offer letters
- Recent downloads history
- Modern admin dashboard UI with Material Design

### Document Management
- Select document type (Offer Letter or Certificate)
- Upload Excel files (.xlsx, .xls)
- Preview student data in table format
- Search, sort, and pagination capabilities

### Template Generation
- Dynamic offer letter templates
- Dynamic completion certificate templates
- Professional certificate layout with TVK branding
- Signature sections and footer information

### PDF Generation
- High-quality PDF export
- A4 Portrait format
- Single-click download
- Bulk PDF generation with ZIP download
- Print-ready output

### Additional Features
- PDF preview modal
- Print functionality
- Download history with local storage
- QR code verification
- Certificate number generation (TVK-CERT-2026-XXXX)
- Signature upload
- Custom certificate text editor

## Technologies

### Frontend
- Angular 16+
- TypeScript
- HTML5
- CSS3/SCSS
- Angular Material

### Libraries
- xlsx - Excel file parsing
- jspdf - PDF generation
- html2canvas - HTML to canvas conversion
- jszip - ZIP file creation
- file-saver - File download management
- qrcode - QR code generation

## Project Structure

```
src/app
├── dashboard/
├── upload-excel/
├── student-table/
├── offer-letter-template/
├── completion-certificate-template/
├── pdf-generator/
├── preview-dialog/
├── download-history/
├── services/
│   ├── excel.service.ts
│   ├── pdf.service.ts
│   ├── history.service.ts
│   └── student.service.ts
├── models/
│   └── student.model.ts
├── app-routing.module.ts
├── app.module.ts
└── app.component.ts

src/assets
├── images/
│   ├── tvk-logo.png
│   ├── ceo-signature.png
│   └── manager-signature.png
└── templates/
    ├── offer-letter.html
    └── completion-certificate.html
```

## Installation

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 16+

### Setup

```bash
# Clone the repository
git clone https://github.com/karthi2006-46/certificate-generator.git
cd certificate-generator

# Install dependencies
npm install

# Start the development server
npm start

# Navigate to http://localhost:4200
```

## Development

```bash
# Run development server
npm start

# Build for production
npm run build:prod

# Run tests
npm test
```

## Excel Upload Format

Expected columns in the Excel file:
- firstName
- lastName
- registration_Number
- college_Name
- domain_Name
- starting_Date
- ending_Date
- duration
- mode
- project_Title

## PDF File Naming

- Offer Letters: `OfferLetter_<RegistrationNo>.pdf`
- Certificates: `Certificate_<RegistrationNo>.pdf`

Example:
- `OfferLetter_210924149040.pdf`
- `Certificate_210924149040.pdf`

## Performance

- Supports 1000+ students
- Fast Excel parsing with XLSX library
- Optimized PDF generation
- Lazy-loaded modules
- Angular best practices implemented

## License

MIT

## Contact

TVK Technologies
