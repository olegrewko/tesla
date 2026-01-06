// import gulp from 'gulp';
// import browserSync from 'browser-sync';

import { paths } from './gulp/config/paths.js';
import { clean } from './gulp/tasks/clean.js';
import { svgSprites } from './gulp/tasks/sprite.js';
import { styles } from './gulp/tasks/styles.js';
import { stylesBackend } from './gulp/tasks/styles-backend.js';
import { scripts } from './gulp/tasks/scripts.js';
import { scriptsBackend } from './gulp/tasks/scripts-backend.js';
import { resources } from './gulp/tasks/resources.js';
import { images } from './gulp/tasks/images.js';
import { webpImages } from './gulp/tasks/webp.js';
import { htmlInclude } from './gulp/tasks/html-include.js';
import { cacheTask } from './gulp/tasks/cache.js';
import { rewrite } from './gulp/tasks/rewrite.js';
import { htmlMinify } from './gulp/tasks/html-minify.js';
import { zipFiles } from './gulp/tasks/zip.js';

// global.app = {
//   gulp,
//   isProd: process.argv.includes('--build'),
//   paths,
// }

// const watcher = () => {
//   browserSync.init({
//     server: {
//       baseDir: `${app.paths.base.build}`
//     },
//     notify: false,
//     port: 3000,
//   });

//   gulp.watch(app.paths.srcScss, styles);
//   gulp.watch(app.paths.srcFullJs, scripts);
//   gulp.watch(`${app.paths.srcPartialsFolder}/*.html`, htmlInclude);
//   gulp.watch(`${app.paths.base.src}/*.html`, htmlInclude);
//   gulp.watch(`${app.paths.resourcesFolder}/**`, resources);
//   gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`, images);
//   gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png}`, webpImages);
//   gulp.watch(app.paths.srcSvg, svgSprites);
// }

// const dev = gulp.series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, watcher);
// const backend = gulp.series(clean, htmlInclude, scriptsBackend, stylesBackend, resources, images, webpImages, svgSprites);
// const build = gulp.series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, htmlMinify);
// const cache = gulp.series(cacheTask, rewrite);
// const zip = zipFiles;

// export { dev }
// export { build }
// export { backend }
// export { cache }
// export { zip }

// gulp.task('default', dev);
import gulp from 'gulp';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';

// Пути
const paths = {
  src: {
    html: './src/**/*.html',
    scss: './src/scss/**/*.scss',
    js: './src/js/**/*.js',
    img: './src/img/**/*.{jpg,jpeg,png,svg,gif,webp}',
    svg: './src/svg/**/*.svg',
    fonts: './src/fonts/**/*.{woff,woff2,ttf,eot}',
    resources: './src/resources/**/*'
  },
  build: {
    html: './dist/',
    css: './dist/css/',
    js: './dist/js/',
    img: './dist/img/',
    fonts: './dist/fonts/',
    resources: './dist/resources/'
  },
  watch: {
    html: './src/**/*.html',
    scss: './src/scss/**/*.scss',
    js: './src/js/**/*.js',
    img: './src/img/**/*.{jpg,jpeg,png,svg,gif,webp}',
    svg: './src/svg/**/*.svg',
    fonts: './src/fonts/**/*.{woff,woff2,ttf,eot}'
  }
};

// Инициализация BrowserSync
const server = browserSync.create();

// Очистка папки dist
export const clean = () => {
  return deleteAsync(['dist/**/*', '!dist']);
};

// Копирование HTML
export const html = () => {
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.build.html))
    .pipe(server.stream());
};

// Компиляция SCSS
export const styles = () => {
  const sass = require('gulp-sass')(require('sass'));
  const autoprefixer = require('gulp-autoprefixer');
  const cleanCSS = require('gulp-clean-css');
  const rename = require('gulp-rename');

  return gulp.src(paths.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false,
      grid: true
    }))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.build.css))
    .pipe(server.stream());
};

// Обработка JavaScript
export const scripts = () => {
  const webpack = require('webpack-stream');
  const rename = require('gulp-rename');

  return gulp.src('./src/js/main.js')
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'main.min.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(paths.build.js))
    .pipe(server.stream());
};

// Оптимизация изображений
export const images = () => {
  const imagemin = require('gulp-imagemin');

  return gulp.src(paths.src.img)
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest(paths.build.img))
    .pipe(server.stream());
};

// Создание WebP
export const webp = () => {
  const webp = require('gulp-webp');

  return gulp.src('./src/img/**/*.{jpg,jpeg,png}')
    .pipe(webp({ quality: 80 }))
    .pipe(gulp.dest(paths.build.img));
};

// SVG спрайты
export const sprite = () => {
  const svgSprite = require('gulp-svg-sprite');

  return gulp.src(paths.src.svg)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest(paths.build.img));
};

// Копирование шрифтов
export const fonts = () => {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts));
};

// Копирование ресурсов
export const resources = () => {
  return gulp.src(paths.src.resources)
    .pipe(gulp.dest(paths.build.resources));
};

// Наблюдение за файлами
export const watch = () => {
  server.init({
    server: {
      baseDir: "./dist"
    },
    notify: false,
    port: 3000,
    open: true
  });

  gulp.watch(paths.watch.html, gulp.series(html));
  gulp.watch(paths.watch.scss, gulp.series(styles));
  gulp.watch(paths.watch.js, gulp.series(scripts));
  gulp.watch(paths.watch.img, gulp.series(images));
  gulp.watch(paths.watch.svg, gulp.series(sprite));
  gulp.watch(paths.watch.fonts, gulp.series(fonts));
};

// Сборка для разработки
export const dev = gulp.series(
  clean,
  gulp.parallel(
    html,
    styles,
    scripts,
    images,
    webp,
    sprite,
    fonts,
    resources
  ),
  watch
);

// Сборка для продакшена
export const build = gulp.series(
  clean,
  gulp.parallel(
    html,
    styles,
    scripts,
    images,
    webp,
    sprite,
    fonts,
    resources
  )
);

// Создание ZIP-архива
export const zip = () => {
  const zip = require('gulp-zip');

  return gulp.src('dist/**/*')
    .pipe(zip('project.zip'))
    .pipe(gulp.dest('./'));
};

// Экспорт задач по умолчанию
export default dev;
