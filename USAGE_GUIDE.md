# Usage Guide

## Getting Started

### 1. Dashboard Overview

When you first open the application, you'll see the dashboard with:

- **Total Students** - Count of uploaded students
- **Generated Certificates** - Total certificates created
- **Generated Offer Letters** - Total offer letters created
- **Recent Downloads** - Latest 5 generated documents
- **Quick Actions** - Shortcuts to main features

### 2. Uploading Student Data

**Step-by-Step:**

1. Click "Generate Documents" in the navigation
2. Select document type:
   - "Internship Offer Letter" or
   - "Internship Completion Certificate"
3. Click the upload area or drag & drop your Excel file
4. File must contain these columns:
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
5. Click "Upload & Process"

**Supported Formats:**
- .xlsx (Excel 2007+)
- .xls (Excel 97-2003)

### 3. Managing Student Records

**Search:**
- Type student name or registration number in search box
- Results filter in real-time

**Sort:**
- Click column header to sort ascending/descending
- Multiple column sorting available

**Pagination:**
- Choose rows per page (10, 25, or 50)
- Navigate between pages

**Selection:**
- Click checkbox to select individual students
- Check header checkbox to select all on current page

### 4. Generating Documents

**Individual Document:**

1. Find student in table
2. Click action icons:
   - 👁️ Preview - See before downloading
   - 📄 Generate - Create PDF
   - ⬇️ Download - Save to computer

**Bulk Generation:**

1. Select multiple students using checkboxes
2. Click bulk action buttons
3. All PDFs download as ZIP file

### 5. Previewing Documents

**Preview Modal:**

1. Click preview icon in student row
2. Review document layout
3. Options:
   - **Print** - Print directly from preview
   - **Download** - Save as PDF
   - **Close** - Exit preview

### 6. Download History

**Features:**

- **Search** - Find specific downloads
- **Filter** - By document type or date
- **Export** - Download history as CSV
- **Delete** - Remove individual records
- **Clear All** - Remove all history

**Statistics:**

- Total downloads count
- Certificate count
- Offer letter count

## Document Templates

### Internship Offer Letter

**Includes:**

- TVK Technologies logo
- Student details (name, registration, college)
- Internship information (domain, dates, duration)
- Terms and conditions
- Professional conduct requirements
- CEO signature
- Contact information footer

**Format:**
- A4 Portrait
- Print-ready
- High-resolution output

### Internship Completion Certificate

**Includes:**

- TVK Technologies logo
- Student name prominently displayed
- Achievement statement
- Internship details
- Performance appreciation
- Project title
- Certificate number (TVK-CERT-YYYY-XXXX)
- QR code for verification
- Dual signatures (CEO & Manager)
- Contact information footer

**Format:**
- A4 Portrait
- Print-ready
- Verification via QR code

## File Naming Convention

**Offer Letters:**
```
OfferLetter_<RegistrationNumber>.pdf
Example: OfferLetter_210924149040.pdf
```

**Certificates:**
```
Certificate_<RegistrationNumber>.pdf
Example: Certificate_210924149040.pdf
```

## Excel File Format Example

| firstName | lastName | registration_Number | college_Name | domain_Name | starting_Date | ending_Date | duration | mode | project_Title |
|-----------|----------|---------------------|--------------|-------------|---------------|-------------|----------|------|---------------|
| John | Doe | 210924149040 | ABC College | Web Development | 01-01-2024 | 31-03-2024 | 3 Months | Full-time | E-Commerce Platform |
| Jane | Smith | 210924149041 | XYZ University | Mobile Development | 15-01-2024 | 15-04-2024 | 3 Months | Full-time | Banking App |

## Tips & Best Practices

### Excel File Preparation

1. **Column Names** - Match exactly (case-sensitive)
2. **Date Format** - Use consistent format (MM-DD-YYYY or YYYY-MM-DD)
3. **No Empty Rows** - Remove blank rows before uploading
4. **No Extra Columns** - Remove unnecessary columns
5. **Data Validation** - Check for typos and formatting

### PDF Generation

1. **Batch Processing** - Generate all at once for efficiency
2. **Preview First** - Always preview before bulk download
3. **Save Locally** - Use "Downloads" folder organization
4. **Verify QR Codes** - Test certificate verification
5. **Print Test** - Print one copy first to verify quality

### Performance

1. **Large Files** - Break into 500-1000 student batches
2. **Browser Tabs** - Limit open tabs during generation
3. **Clear History** - Periodically clear download history
4. **Cache Clear** - Clear browser cache if issues occur

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl/Cmd + S | Save/Download |
| Ctrl/Cmd + P | Print |
| Ctrl/Cmd + F | Search in table |
| Tab | Navigate between elements |
| Enter | Submit form |
| Escape | Close dialog |

## Troubleshooting

### Upload Issues

**Problem:** "Invalid file format"
- **Solution:** Ensure file is .xlsx or .xls format

**Problem:** "No student records found"
- **Solution:** Check column names match exactly

**Problem:** File not loading
- **Solution:** Verify file is not corrupted; try smaller file

### PDF Generation Issues

**Problem:** "Failed to generate PDF"
- **Solution:** Check internet connection; refresh page

**Problem:** Images not showing in PDF
- **Solution:** Ensure images are accessible online

**Problem:** PDF is blank
- **Solution:** Check browser console for errors; try different browser

### Display Issues

**Problem:** Content cut off on mobile
- **Solution:** Rotate device to landscape; use larger screen

**Problem:** Fonts not displaying correctly
- **Solution:** Check browser font support; clear cache

## Contact & Support

- **Issues:** Report on GitHub
- **Questions:** Check documentation
- **Feedback:** Open an issue

## FAQ

**Q: Can I use my own logo?**
A: Yes, update the logo URL in certificate settings.

**Q: How many students can I process?**
A: Supports 1000+ students; recommended batch size is 500.

**Q: Can I customize the certificate text?**
A: Yes, edit in the CertificateService configuration.

**Q: Are documents saved online?**
A: No, everything is stored locally; downloads to your computer.

**Q: Can I edit PDFs after generation?**
A: Use any PDF editor; recommended: Adobe Acrobat or Preview.

**Q: How do I verify certificates?**
A: Scan QR code on the certificate with a smartphone camera.

**Q: Is my data secure?**
A: All data is processed locally; nothing is sent to servers.

**Q: Can I use on mobile?**
A: Yes, responsive design works on tablets and phones.
