var gulp = require("gulp");

gulp.task("base-scss", function () {
  return gulp.src("./source/scss/base.scss").pipe(gulp.dest("./dist/scss"));
});

gulp.task("layout-scss", function () {
  return gulp.src("./source/scss/layout.scss").pipe(gulp.dest("./dist/scss"));
});

gulp.task("style-scss", function () {
  return gulp.src("./source/scss/style.scss").pipe(gulp.dest("./dist/scss"));
});

gulp.task("background", function () {
  gulp.watch("./source/scss/base.scss", ["base-scss"]);
  gulp.watch("./source/scss/layout.scss", ["layout-scss"]);
  gulp.watch("./source/scss/style.scss", ["style-scss"]);
});
