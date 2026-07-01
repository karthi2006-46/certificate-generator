# TVK Technologies Certificate & Offer Letter Generator

## Quick Setup

### 1. Clone Repository
```bash
git clone https://github.com/karthi2006-46/certificate-generator.git
cd certificate-generator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Angular Material
```bash
ng add @angular/material
```

### 4. Run Application
```bash
npm start
```

Open `http://localhost:4200` in your browser.

## Features

✅ **Excel Upload** - Import student data from .xlsx/.xls files  
✅ **Dynamic Templates** - Professional offer letters and certificates  
✅ **PDF Generation** - High-quality A4 print-ready PDFs  
✅ **Bulk Processing** - Generate multiple documents at once  
✅ **QR Verification** - Certificate verification via QR codes  
✅ **Download History** - Track all generated documents  
✅ **Search & Filter** - Find students quickly  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Material Design** - Modern professional UI  

## Project Structure

```
src/app
├── components/
│   ├── dashboard/
│   ├── upload-excel/
│   ├── student-table/
│   ├── offer-letter-template/
│   ├── completion-certificate-template/
│   ├── pdf-generator/
│   ├── preview-dialog/
│   └── download-history/
├── services/
│   ├── excel.service.ts
│   ├── pdf.service.ts
│   ├── history.service.ts
│   ├── student.service.ts
│   ├── certificate.service.ts
│   └── qr-code.service.ts
├── models/
│   └── student.model.ts
├── app.module.ts
├── app-routing.module.ts
└── app.component.ts
```

## Technology Stack

- **Frontend:** Angular 16+, TypeScript, HTML5, CSS3/SCSS
- **UI Library:** Angular Material
- **PDF:** jsPDF, html2canvas
- **Excel:** XLSX
- **QR Code:** qrcode
- **Build Tool:** Angular CLI

## Available Scripts

```bash
# Development server
npm start

# Build for production
npm run build:prod

# Run tests
npm test

# Lint code
npm run lint
```

## Excel File Format

Expected columns:
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

## Usage

1. **Upload Excel** - Navigate to "Generate Documents"
2. **Select Type** - Choose Offer Letter or Certificate
3. **Upload File** - Add your Excel file
4. **Review Data** - Check student table
5. **Generate PDFs** - Click generate or bulk process
6. **Download** - Save to your computer
7. **View History** - Track downloads in "Download History"

## Configuration

### Custom Certificate Settings

Edit `src/app/services/certificate.service.ts`:

```typescript
private defaultSettings: CertificateSettings = {
  logoUrl: 'assets/images/tvk-logo.png',
  ceoSignatureUrl: 'assets/images/ceo-signature.png',
  managerSignatureUrl: 'assets/images/manager-signature.png',
  footerPhone: '+91 9123456789',
  footerWebsite: 'www.tvktechnologies.com',
  footerEmail: 'info@tvktechnologies.com',
  certificateText: 'Custom text here'
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Supports 1000+ students
- Optimized PDF generation
- Fast Excel parsing
- Lazy-loaded modules

## Security

- Local data processing (no server upload)
- XSS protection built-in
- Input validation on all forms
- No sensitive data stored online

## Documentation

- [Installation Guide](./INSTALLATION.md)
- [Usage Guide](./USAGE_GUIDE.md)
- [Developer Guide](./DEVELOPER_GUIDE.md)

## Troubleshooting

### PDF Generation Fails
- Check internet connection
- Verify image URLs are accessible
- Try a different browser
- Clear browser cache

### Excel Won't Upload
- Verify column names match exactly
- Check file is not corrupted
- Ensure file is .xlsx or .xls format
- Try smaller file first

### Styles Not Loading
```bash
ng cache clean
npm start
```

## Support

For issues or questions:
1. Check [Documentation](./INSTALLATION.md)
2. Review [Troubleshooting Guide](./DEVELOPER_GUIDE.md)
3. Open an [Issue on GitHub](https://github.com/karthi2006-46/certificate-generator/issues)

## License

MIT License - See LICENSE file

## Contributing

Contributions welcome! Please:
1. Fork repository
2. Create feature branch
3. Submit pull request

## Deployment

### Build Production Bundle
```bash
npm run build:prod
```

### Deploy to GitHub Pages
```bash
ng deploy --base-href=/certificate-generator/
```

### Deploy to Other Platforms
- Firebase Hosting
- Netlify
- Vercel
- AWS S3 + CloudFront
- Docker Container

## Acknowledgments

- TVK Technologies
- Angular Team
- Material Design
- Open Source Community

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** 2026-07-01
