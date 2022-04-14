"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("videos", () => {
  return gulp.src(paths.videos.src)
    .pipe(gulp.dest(paths.videos.dist))
    .pipe(debug({
        "title": "videos"
    }));
});