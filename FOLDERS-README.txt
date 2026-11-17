IMAGE FOLDERS (this file now sits next to index.html) - where to change each picture
(Keep the same file name when you replace a picture, or edit the path in the file listed.)

about/             About Me slider            -> script.js (ABOUT_SLIDES)
home/              Home hero pictures          -> script.js (HERO list "hero-1".."hero-4")
sketchbook/        Home "Sketchbook" strip     -> script.js (SKETCHBOOK)
design/            F1 posters (Graphic Design strip, gallery and Shop) -> script.js (ARTWORKS, cat "design")
gallery/anime/     Art Gallery - Anime fan art -> script.js (ARTWORKS, cat "anime")
gallery/portrait/  Art Gallery - Pencil portraits -> script.js (ARTWORKS, cat "portrait")
(unused pictures were removed to keep the file count low)
social/instagram/  Blog - Instagram tiles      -> posts.json
social/tiktok/     Blog - TikTok tiles         -> posts.json
social/facebook/   Blog - Facebook Photos and Reels -> blog.html
social/threads/    Blog - Threads cards        -> blog.html
social/youtube/    Blog - YouTube Shorts       -> blog.html

UPLOADING TO GITHUB / VERCEL (important)
GitHub's web uploader accepts at most 100 files at a time, so upload in two steps:
  1) the images folder (81 pictures) - drag the whole "images" folder, then Commit
  2) everything else (the .html, .js, .css, .json and favicon files) - then Commit
Check that images/design has design-1.jpg ... design-17.jpg (17 files).
