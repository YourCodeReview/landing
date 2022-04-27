"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("docs", () => {
  return gulp.src(paths.docs.src)
    .pipe(gulp.dest(paths.docs.dist))
    .pipe(debug({
      "title": "Docs"
    }));
});