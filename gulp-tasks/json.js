"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("json", () => {
    return gulp.src(paths.json.src)
        .pipe(gulp.dest(paths.json.dist))
        .pipe(debug({
            "title": "Json"
        }));
});