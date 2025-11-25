const gulp = require("gulp");
const path = require("path");
const browserSync = require("browser-sync").create();

const autoprefixer = require("gulp-autoprefixer");

//Import sass - Build scss to css
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

// postcss
const sortMediaQueries = require("postcss-sort-media-queries");
const postcss = require("gulp-postcss");
const flatten = require("gulp-flatten");

//dirname
const root = 'D:\\laragon\\www\\bmm\\wp-content\\themes\\yasuda-finete';
// const root = 'E:\\laragon\\www\\yasuda-finete\\wp-content\\themes\\yasuda-finete';

const devDir = "./public/";
const src = "./src/";

async function style() {
  let processors = [
    sortMediaQueries({
      sort: "desktop-first",
    }),
  ];
  return (
    gulp
      //1. Where is my scss file
      .src(src + "scss/**/*.scss")

      //2. sourceMap scss
      .pipe(sourcemaps.init())

      //3. pass that file through sass compilier
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))

      //4. auto prefix
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(postcss(processors))

      //5. source map css

      .pipe(flatten())
      .pipe(sourcemaps.write("./maps"))
      //6. Where do I save the compiled CSS?
      .pipe(gulp.dest(devDir + "assets/css"))
      .pipe(browserSync.stream())
  );
}
// gulp.task('watch', function () {
//     gulp.watch(devDir + 'scss/**/*.scss', gulp.parallel(style));
// });

gulp.task("serve", function () {
  browserSync.init({
    server: devDir,
  });

  gulp.watch(src + "scss/**/*.scss", gulp.parallel(style));
  // gulp.watch(`${devDir}**/*.html`).on("change", browserSync.reload);
  // gulp.watch(`${devDir}assets/css/**/*.css`).on("change", browserSync.reload);
  gulp.watch(`${devDir}assets/images/**/*.*`).on("change", browserSync.reload);
  gulp.watch(`${devDir}**/*.js`).on("change", browserSync.reload);
  gulp.watch([`${devDir}**/*.html`, src + "scss/**/*.scss"]).on(
        'change',
        browserSync.reload
    );
});

gulp.task("default", gulp.series("serve"));

async function scss() {
  let processors = [
    sortMediaQueries({
      sort: "desktop-first",
    }),
  ];
  return (
    gulp
      //1. Where is my scss file
      .src(src + "scss/**/*.scss")

      //2. sourceMap scss
      .pipe(sourcemaps.init())

      //3. pass that file through sass compilier
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))

      //4. auto prefix
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(postcss(processors))

      //5. source map css

      .pipe(flatten())
      .pipe(sourcemaps.write("./maps"))
      //6. Where do I save the compiled CSS?
      .pipe(gulp.dest(root + "/assets/css"))
    // .pipe(browserSync.stream())
  );
}

async function js() {
  return (
    gulp
      //1. Where is my scss file
      .src(devDir + "assets/js/**/*.js")
      .pipe(gulp.dest(root + "/assets/js"))
  );
}

async function img() {
  return (
    gulp
      //1. Where is my scss file
      .src(devDir + "assets/images/**/*")
      .pipe(gulp.dest(root + "/assets/images"))
  );
}

async function php() {
  return (
    gulp
      //1. Where is my scss file
      .src(src + "php/**/*")
      .pipe(gulp.dest(root))
  );
}

async function vendor() {
  return (
    gulp
      //1. Where is my scss file
      .src(devDir + "assets/vendor/**/*")
      .pipe(gulp.dest(root + "/assets/vendor"))
  );
}

gulp.task("wp", function () {
  style();
  js();
  img();
  php();
  vendor();
  // gulp.parallel(['style', 'js']);
  gulp.watch(src + "scss/**/*.scss", gulp.parallel(scss));
  gulp.watch(`${devDir}assets/js/**/*`).on("change", gulp.parallel(js));
  gulp.watch(`${devDir}assets/images/**/*`).on("change", gulp.parallel(img));
  gulp.watch(`${src}php/**/*`).on("change", gulp.parallel(php));
  // return gulp.parallel();
});

// gulp.task('img', async function () {
//     const imagemin = (await import('gulp-imagemin')).default;
//     const mozjpeg = (await import('imagemin-mozjpeg')).default;
//     const pngquant = (await import('imagemin-pngquant')).default;
//     return gulp.src(src + 'images/**/*.{jpg,png}')
//     .pipe(imagemin([
//       mozjpeg({ quality: 80, progressive: true }),
//       pngquant({ quality: [0.75, 0.8] }),
//     ]))
//     .pipe(gulp.dest(devDir + 'assets/images'));
// });

//convert image to webp
gulp.task("convertwebp", async function () {
  const webp = (await import("gulp-webp")).default;
  return gulp
    .src(src + "images/**/*.{jpg,jpeg,png}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(devDir + "assets/images/"));
});

//copy svg
gulp.task("copysvg", function () {
  return gulp
    .src(src + "images/**/*.svg")
    .pipe(gulp.dest(devDir + "assets/images/"));
});

async function webpImg(path) {
  const webp = (await import("gulp-webp")).default;
  return gulp
    .src(path, { base: "src/images/" })
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(devDir + "assets/images/"));
}

async function svgImg(path) {
  return gulp
    .src(path, { base: "src/images/" })
    .pipe(gulp.dest(devDir + "assets/images/"));
}

// watcher.on('unlink', function(path, stats) {
//   console.log(`File ${path} was removed`);
// });

gulp.task("watcherimg", function () {
  gulp.watch("src/images/**/*").on("add", function (filepath) {
    let pathImg = path.relative("src/images/", filepath);
    if (path.extname(pathImg) === ".svg") {
      svgImg(filepath);
    } else {
      webpImg(filepath);
    }
    console.log(`File ${pathImg} was added`);
    return;
  });
  gulp
    .watch("src/images/**/*")
    .on("change", function (filepath) {
      let pathImg = path.relative("src/images/", filepath);
      if (path.extname(pathImg) === ".svg") {
        svgImg(filepath);
      } else {
        webpImg(filepath);
      }
      console.log(`File ${pathImg} was added`);
      return;
    });
});

gulp.task("img", gulp.series("convertwebp", "copysvg", "watcherimg"));
