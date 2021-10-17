"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("libs", () => {
    return gulp.src(paths.libs.src)
        .pipe(gulp.dest(paths.libs.dist))
        .pipe(debug({
            "title": "libs"
        }));
});