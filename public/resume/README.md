# Resume

Drop your resume PDF in this folder as:

    public/resume/Khandokar-Riajul-Islam-Resume.pdf

It is then served at `/resume/Khandokar-Riajul-Islam-Resume.pdf`.

The Hero "Download Resume" button HEAD-checks this path first: if the file is
missing it shows an inline "request it by email" notice instead of sending
visitors to a 404 page (this was the original Vercel 404 problem).

To use a different filename, update `resumeUrl` in `src/data/site.js`.
