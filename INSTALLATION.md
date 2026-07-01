# Installation Guide

## Prerequisites

- Node.js 18+ and npm
- Angular CLI 16+
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/karthi2006-46/certificate-generator.git
cd certificate-generator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Angular Material

```bash
ng add @angular/material
```

When prompted, select:
- Theme: Indigo/Pink (or your preference)
- Typography: Yes
- Animations: Yes

### 4. Start Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build for Production

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/` directory.

## Testing

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── upload-excel/
│   │   ├── student-table/
│   │   ├── offer-letter-template/
│   │   ├── completion-certificate-template/
│   │   ├── pdf-generator/
│   │   ├── preview-dialog/
│   │   └── download-history/
│   ├── services/
│   │   ├── excel.service.ts
│   │   ├── pdf.service.ts
│   │   ├── history.service.ts
│   │   ├── student.service.ts
│   │   ├── certificate.service.ts
│   │   └── qr-code.service.ts
│   ├── models/
│   │   └── student.model.ts
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.scss
├── assets/
│   ├── images/
│   │   ├── tvk-logo.png
│   │   ├── ceo-signature.png
│   │   └── manager-signature.png
│   └── templates/
│       ├── offer-letter.html
│       └── completion-certificate.html
├── styles.scss
├── styles.css
├── index.html
└── main.ts
```

## Features

### 1. Dashboard
- Display statistics (total students, generated certificates, offer letters)
- Recent downloads history
- Quick action cards for document generation

### 2. Excel Upload
- Support for .xlsx and .xls files
- Automatic parsing of student records
- Error handling and validation

### 3. Student Management
- Search functionality
- Sort by any column
- Pagination
- Row selection (individual and bulk)

### 4. Document Templates
- Professional offer letter design
- Certificate of completion design
- Dynamic field replacement
- QR code for certificate verification

### 5. PDF Generation
- High-quality PDF export
- A4 Portrait format
- Print-ready output
- Individual and bulk generation

### 6. Download History
- Local storage persistence
- Search and filter
- Export as CSV
- Delete individual records

## Usage

### 1. Upload Student Data
- Navigate to "Generate Documents"
- Click "Upload & Process"
- Select an Excel file with student records
- Click "Upload & Process" button

### 2. Generate Documents
- Select document type (Offer Letter or Certificate)
- Review student table
- Click on individual student actions or bulk generate
- Choose to preview or directly download

### 3. View Download History
- Navigate to "Download History"
- Search or filter downloads
- Export history as CSV
- Delete individual records

## Configuration

### Certificate Settings
You can customize certificate settings by editing the `CertificateService`:

```typescript
private defaultSettings: CertificateSettings = {
  logoUrl: 'assets/images/tvk-logo.png',
  ceoSignatureUrl: 'assets/images/ceo-signature.png',
  managerSignatureUrl: 'assets/images/manager-signature.png',
  footerPhone: '+91 9123456789',
  footerWebsite: 'www.tvktechnologies.com',
  footerEmail: 'info@tvktechnologies.com',
  certificateText: 'This is to certify that...'
};
```

## Troubleshooting

### PDF Generation Issues
- Ensure all images (logo, signatures) are accessible
- Check browser console for errors
- Verify HTML structure in templates

### Excel Upload Issues
- Ensure column names match the expected format
- Check date format consistency
- Verify file is not corrupted

### Performance Issues
- For large files (1000+ students), consider pagination
- Use browser DevTools to monitor memory usage
- Clear browser cache if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Frontend Framework:** Angular 16+
- **Language:** TypeScript
- **Styling:** SCSS/CSS3
- **UI Components:** Angular Material
- **PDF Generation:** jsPDF, html2canvas
- **Excel Parsing:** XLSX
- **QR Code:** qrcode
- **File Management:** jszip, file-saver

## Performance Optimization

- Lazy loading of modules
- OnPush change detection strategy
- Optimized PDF generation
- Efficient Excel parsing
- Local storage caching

## License

MIT

## Support

For issues or feature requests, please open an issue on GitHub.

## Contributors

Contributions are welcome! Please follow the existing code style and submit pull requests.
