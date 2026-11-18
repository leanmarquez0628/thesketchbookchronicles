IMAGE FOLDERS (this file now sits next to index.html) - where to change each picture
(Keep the same file name when you replace a picture, or edit the path in the file listed.)

about/             About Me slider            -> script.js (ABOUT_SLIDES)
home/              Home hero pictures          -> script.js (HERO list "hero-1".."hero-4")
sketchbook/        Home "Sketchbook" strip     -> script.js (SKETCHBOOK)
design/            F1 posters (Graphic Design strip, gallery and Shop) -> script.js (ARTWORKS, cat "design")
gallery/anime/     Art Gallery - Anime fan art -> script.js (ARTWORKS, cat "anime")
gallery/portrait/  Art Gallery - Pencil portraits -> script.js (ARTWORKS, cat "portrait")
gallery/unused/    Backup pictures not shown on the site
social/instagram/  Blog - Instagram tiles      -> posts.json
social/tiktok/     Blog - TikTok tiles         -> posts.json
social/facebook/   Blog - Facebook Photos and Reels -> blog.html
social/threads/    Blog - Threads cards        -> blog.html
social/youtube/    Blog - YouTube Shorts       -> blog.html

UPLOADING TO GITHUB / VERCEL (important)
The images folder currently contains 200 files: 99 older flat files, 83 active
subfolder files, and 18 unused backups. The site uses the active subfolders and
may use the flat files as a fallback. GitHub's web uploader accepts at most 100
files per upload, so do not upload the entire folder in one batch.

Upload in separate batches, preserving the folder names and file-name case:
  1) The 99 files directly inside images/
  2) The 83 active subfolder files (do not include gallery/unused/)
  3) All .html, .js, .css, .json and favicon files
  4) Optionally, gallery/unused/ as a separate backup batch

Before committing, check that images/design contains design-1.jpg through
design-17.jpg, and that the Facebook and YouTube image files are present under
images/social/. The website will show placeholders for files that are missing,
but the real pictures must be uploaded to appear.
