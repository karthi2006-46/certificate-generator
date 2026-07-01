# Certificate & Offer Letter Generator - Developer Guide

## Project Overview

This is a modern Angular 16+ web application for generating professional internship certificates and offer letters from Excel student data.

## Architecture

### Component Structure

```
AppComponent (Root)
├── DashboardComponent
├── PdfGeneratorComponent
│   ├── UploadExcelComponent
│   ├── StudentTableComponent
│   ├── OfferLetterTemplateComponent
│   ├── CompletionCertificateTemplateComponent
│   └── PreviewDialogComponent
└── DownloadHistoryComponent
```

### Service Architecture

1. **ExcelService** - Handles Excel file parsing
2. **StudentService** - Manages student data state
3. **PdfService** - Handles PDF generation
4. **HistoryService** - Manages download history
5. **CertificateService** - Manages certificate settings
6. **QrCodeService** - Generates QR codes

## Data Flow

1. User uploads Excel file
2. ExcelService parses the file
3. StudentService stores student data
4. Templates are dynamically populated
5. PdfService generates PDFs from templates
6. HistoryService logs the download

## Key Implementation Details

### Excel Parsing

```typescript
// ExcelService
parsing flow:
1. Read file as ArrayBuffer
2. Use XLSX library to parse
3. Extract data from first sheet
4. Sanitize and format data
5. Return Student array
```

### PDF Generation

```typescript
// PdfService
generation flow:
1. Convert HTML element to canvas (html2canvas)
2. Convert canvas to image data
3. Create PDF with jsPDF
4. Add image to PDF
5. Handle multi-page PDFs
6. Download file
```

### Certificate Number Generation

```typescript
Format: TVK-CERT-<YEAR>-<4-DIGIT-RANDOM>
Example: TVK-CERT-2026-0001
```

### QR Code Generation

```typescript
Data: <registration_number>-<certificate_number>
Example: 210924149040-TVK-CERT-2026-0001
```

## Styling Strategy

- **Color Scheme:** Blue-based (Primary: #1a3a8a, Secondary: #3b82f6)
- **Responsive:** Mobile-first approach
- **Print-Friendly:** Special print styles for PDF export

## State Management

Using RxJS BehaviorSubjects for state:

```typescript
// StudentService
students$: Observable<Student[]>
generatedCertificates$: Observable<number>
generatedOfferLetters$: Observable<number>
```

## Local Storage

- `downloadHistory` - Array of download records
- `certificateCount` - Total certificates generated
- `offerLetterCount` - Total offer letters generated
- `certificateSettings` - Custom certificate settings

## Development Workflow

### Adding a New Component

1. Generate component: `ng generate component components/my-component`
2. Add to AppModule declarations
3. Create corresponding styles
4. Add to appropriate parent component
5. Implement functionality

### Adding a New Service

1. Generate service: `ng generate service services/my-service`
2. Add providedIn: 'root' decorator
3. Implement business logic
4. Export types/interfaces
5. Use in components

### Testing

1. Create `.spec.ts` files for components/services
2. Use Jasmine and Karma
3. Mock dependencies
4. Test component behavior
5. Test service methods

## Performance Considerations

### Optimization Techniques

1. **OnPush Change Detection** - Reduce change detection runs
2. **Lazy Loading** - Load modules only when needed
3. **Virtual Scrolling** - For large tables (future enhancement)
4. **Memoization** - Cache expensive computations
5. **Tree Shaking** - Remove unused code

### Bundle Size

Target: < 1MB (gzip)

- Angular Core: ~200KB
- Material: ~300KB
- Dependencies: ~200KB
- Application: ~100KB

## Security Considerations

1. **XSS Protection** - Angular built-in sanitization
2. **CSRF Protection** - N/A for SPA
3. **File Upload** - Validate file type and size
4. **Local Storage** - No sensitive data stored
5. **Input Validation** - Sanitize all user inputs

## Accessibility (a11y)

1. ARIA labels on form inputs
2. Keyboard navigation support
3. Color contrast compliance
4. Screen reader friendly
5. Focus management

## Common Tasks

### Adding a New Template Field

1. Update Student model if needed
2. Add field to Excel parsing
3. Update template HTML
4. Add to display table
5. Test PDF generation

### Customizing Colors

1. Edit `src/styles.scss` variables
2. Update component SCSS files
3. Test in all themes

### Changing PDF Format

1. Edit PdfService
2. Modify jsPDF orientation/format
3. Adjust template dimensions

## Deployment

### Production Build

```bash
npm run build:prod
```

### Deployment Targets

- **GitHub Pages** - Static hosting
- **Firebase Hosting** - Google's platform
- **Netlify** - Easy deployment
- **AWS S3 + CloudFront** - Scalable
- **Docker** - Containerized deployment

### Environment Configuration

```typescript
// environment.ts (development)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};

// environment.prod.ts (production)
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com'
};
```

## Debugging

### Browser DevTools

1. **Elements Panel** - Inspect HTML
2. **Console** - View logs and errors
3. **Network** - Monitor API calls
4. **Application** - Check local storage
5. **Performance** - Profile performance

### Angular DevTools

- Component tree inspection
- Service tracking
- Change detection profiling

## Future Enhancements

1. **Backend Integration** - API for data persistence
2. **User Authentication** - Login/logout
3. **Role-Based Access** - Admin/user roles
4. **Email Integration** - Send certificates via email
5. **Email Notifications** - Notify students
6. **Certificate Verification** - Online verification system
7. **Templates Library** - Multiple template designs
8. **Batch Processing** - Queue for bulk operations
9. **Analytics Dashboard** - Usage statistics
10. **Multi-Language Support** - i18n

## Resources

- [Angular Documentation](https://angular.io)
- [Angular Material](https://material.angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [XLSX Documentation](https://github.com/SheetJS/sheetjs)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [html2canvas Documentation](https://html2canvas.hertzen.com/)

## Troubleshooting Guide

### Common Issues

1. **Module not found** - Run `npm install`
2. **PDF generation fails** - Check image URLs
3. **Excel parsing error** - Verify column names
4. **Styles not loading** - Clear Angular cache: `ng cache clean`
5. **Performance issues** - Profile with DevTools

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/xyz`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature/xyz`
5. Submit pull request

## Code Style

- Follow Angular style guide
- Use TypeScript strict mode
- Format with Prettier
- Document complex logic
- Write meaningful commit messages

## License

MIT License - See LICENSE file for details
