var gulp = require("gulp"), smoosher = require("gulp-smoosher"),
  inlineCss = require("gulp-inline-css");

gulp.task("inline", function () {
  return gulp
    .src("index.html")
    
    .pipe(
      inlineCss({
        preserveMediaQueries: true,
        applyLinkTags: true,
        removeStyleTags: true,
      })
    )
    .pipe(gulp.dest("dist/"));
});

// var gulp = require("gulp"),
//   smoosher = require("gulp-smoosher"),
//   inlineCss = require("gulp-inline-css");

// gulp.task("default", function () {
//   return gulp
//     .src("index.html")
//     .pipe(smoosher().pipe(inlineCss({
//                 applyStyleTags: true,
//                 preserveMediaQueries: true,
//                 applyLinkTags: true,
//                 removeStyleTags: true,
//                 removeLinkTags: true,
//               })).pipe(gulp.dest("dist/")));
// });
