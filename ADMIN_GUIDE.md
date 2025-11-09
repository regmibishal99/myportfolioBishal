# Admin Guide - Portfolio Customization

## How to Update Your CV/Resume

1. **Prepare your CV**: Make sure your CV is in PDF format
2. **Replace the file**: Replace `public/resume.pdf` with your actual CV PDF
3. **Keep the filename**: Either keep it as `resume.pdf` or update the link in `src/components/Hero.tsx` (line 59)
4. **Done**: The download button will automatically serve your new CV

## How to Update Your Profile Photo

1. **Prepare your photo**: Use a high-quality professional photo (recommended: square format, at least 400x400px)
2. **Replace the file**: Replace `src/assets/profile-photo.jpg` with your new photo
3. **Keep the filename**: Either keep it as `profile-photo.jpg` or update the import in `src/components/Hero.tsx` (line 5)
4. **Supported formats**: JPG, PNG, WEBP
5. **Done**: Your new photo will appear automatically

## Quick File Locations

- **CV/Resume**: `public/resume.pdf`
- **Profile Photo**: `src/assets/profile-photo.jpg`
- **Hero Component**: `src/components/Hero.tsx` (contains both references)

## Tips

- Keep file names simple and descriptive
- Optimize images before uploading (compress without losing quality)
- Test the download button after updating your CV
- Use professional, high-resolution photos for best results
