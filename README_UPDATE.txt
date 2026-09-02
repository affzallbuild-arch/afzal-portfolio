AFZAL.BUILD — GITHUB PAGES UPDATE PACKAGE

WHY THE OLD SITE SHOWED CRASHED IMAGES:
Your GitHub Pages screenshot showed that Pages is publishing from:
main branch → /docs folder

If website files are uploaded to repository root instead of /docs, GitHub Pages continues serving the old /docs files. This update is intentionally packaged with a docs folder.

HOW TO UPDATE WITHOUT DELETING YOUR CURRENT REPOSITORY:
1. Extract this ZIP.
2. Upload the included docs folder to the ROOT of your existing GitHub repository.
3. Allow GitHub to replace/overwrite files with the same names.
4. Do NOT delete unrelated repository files.
5. Keep GitHub Pages setting: main branch + /docs folder.
6. Wait 1–3 minutes, then hard refresh the website.

IMAGE FIX:
Profile image is inside docs/assets/profile-afzal.jpg and all HTML uses:
./assets/profile-afzal.jpg
This matches GitHub Pages /docs deployment.

CONTACT FORM:
Open docs/app.js and replace:
YOUR_EMAIL_HERE@example.com
with the email address where you want enquiries to arrive.

The form then opens the visitor's email application with the entire enquiry pre-filled.
A static GitHub Pages site cannot silently send an email by itself; true automatic delivery needs a backend or form/email service.

