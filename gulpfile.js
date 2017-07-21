'use strict'

const gulp = require( 'gulp' ),
    plumber = require( 'gulp-plumber' ),
    gutil = require( 'gulp-util' ),
    sass = require( 'gulp-sass' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    useref = require( 'gulp-useref' ),
    uglify = require( 'gulp-uglify' ),
    gulpIf = require( 'gulp-if' ),
    cache = require( 'gulp-cache' ),
    del = require( 'del' ),
    runSequence = require( 'run-sequence' ).use( gulp ),
    realFavicon = require( 'gulp-real-favicon' ),
    fs = require( 'fs' ),
    handlebars = require( 'gulp-hb' ),
    rename = require( 'gulp-rename' ),
    shell = require( 'child_process' ),
    browserSync = require( 'browser-sync' ).create(),
    sourceFolder = 'source',
    buildFolder = 'build',
    FAVICON_DATA_FILE = `./${sourceFolder}/faviconData.json`; // Favicon configuration file

// Overriding gulp.src to get some more robust error handling
// https://www.timroes.de/2015/01/06/proper-error-handling-in-gulp-js/
const gulp_src = gulp.src;
gulp.src = function()
{
    return gulp_src.apply( gulp, arguments )
        .pipe( plumber( function( error )
        {
            // Output an error message
            gutil.log( gutil.colors.red( `Error ( ${error.plugin} ): ${error.message}` ) );
            // emit the end event, to properly end the task
            this.emit( 'end' );
        } ) );
};


/*****************************************
 *    Building, watching, and serving    *
 *****************************************/

// Run the usual dev tasks, file watchers, and browsersync.
gulp.task( 'default', function()
{
    runSequence( 'mirror', [ 'sass',
            'handlebars'
        ],
        'autoprefixer',
        'browserSync',
        'watch' );
} );

// "quick" build; doesn't generate favicon data, since it is time-consuming and shouldn't need to be updated much.
gulp.task( 'build', function()
{
    return runSequence(
        'clean',
        'mirror', [ 'sass', 'handlebars' ],
        'autoprefixer',
        'inject-favicon-markups'
    );
} );

// Same as regular build, but also generates favicon data
gulp.task( 'full-build', function()
{
    runSequence(
        'full-clean',
        'mirror', [ 'sass', 'generate-favicon', 'handlebars' ],
        'autoprefixer',
        'inject-favicon-markups'

    );
} );

// File watchers
gulp.task( 'watch', function()
{
    gulp.watch( `${sourceFolder}/**/*`, function()
    {
        runSequence(
            'mirror', [ 'sass', 'handlebars' ],
            'autoprefixer',
            'browserSync-updateStream'

        );
    } );
} );

// Browsersync
gulp.task( 'browserSync', function()
{
    browserSync.init(
    {
        server:
        {
            baseDir: buildFolder
        },
        open: false
    } );
} );
// Browsersync
gulp.task( 'browserSync-updateStream', function()
{
    return browserSync.reload();
} );

// Clean the build folder out, but leave the favicon data ( this takes a while to generate and is rarely changed )
gulp.task( 'clean', function()
{
    return del.sync( [ `${buildFolder}/**/*`,
        `!${buildFolder}/_icons`,
        `!${buildFolder}/_icons/*`
    ],
    {
        dot: true
    } );
} );

// Full clean-out of the build folder
gulp.task( 'full-clean', function()
{
    return del.sync( [ `${buildFolder}/**/*` ],
    {
        dot: true
    } );
} );

/*********************************************
 *    Individual build/optimization tasks    *
 *********************************************/

//https://github.com/shannonmoeller/gulp-hb
gulp.task( 'handlebars', function()
{
    return gulp.src( [ `${sourceFolder}/**/*.hbs`, `!${sourceFolder}/_templates`, `!${sourceFolder}/_templates/**/*` ],
        {
            base: sourceFolder
        } )
        .pipe( handlebars(
        {
            partials: `${sourceFolder}/_templates/layouts/**/*.hbs`,
            helpers: `${sourceFolder}/_templates/layouts/*.js`,
            data: `${sourceFolder}/_templates/data/**/*.{js,json}`
        } ) )
        .pipe( rename(
        {
            extname: '.html'
        } ) )
        .pipe( gulp.dest( buildFolder ) );
    // .pipe( browserSync.stream() );
} );

// Sassy
gulp.task( 'sass', function()
{
    return gulp.src( `${sourceFolder}/**/*.scss`,
        {
            base: sourceFolder
        } )
        .pipe( sass() ) // Passes it through a gulp-sass, log errors to console
        .pipe( gulp.dest( buildFolder ) );
    // .pipe( browserSync.stream() );
} );

// Run autoprefixer on the build files in-place
gulp.task( 'autoprefixer', function()
{
    return gulp.src( [ `${buildFolder}/**/*.css`, `!${buildFolder}/_styles/normalize.css` ],
        {
            base: buildFolder
        } )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( buildFolder ) );
    // .pipe( browserSync.stream() );
} );

// Optimizing CSS and JavaScript
gulp.task( 'useref', function()
{

    return gulp.src( `${sourceFolder}/**/*.html`,
        {
            base: sourceFolder
        } )
        .pipe( useref(
        {
            searchPath: sourceFolder
        } ) )
        .pipe( gulpIf( '*.js', uglify() ) )
        .pipe( gulpIf( '*.css', cssnano() ) )
        .pipe( gulp.dest( buildFolder ) );
} );

// Mirror source folder structure to build folder
gulp.task( 'mirror', function()
{
    return gulp.src( [ `${sourceFolder}/**/*`,
            `!${sourceFolder}/initial-logo-2_optimized.svg`,
            `!${sourceFolder}/**/*.scss`,
            `!${sourceFolder}/**/*.hbs`,
            `!${sourceFolder}/_templates`,
            `!${sourceFolder}/_templates/**/*`,
            `!${sourceFolder}/**/*.json`,
        ],
        {
            base: sourceFolder,
            dot: true
        } )
        .pipe( gulp.dest( buildFolder ) );
} );



/******************************************************************
 * Gulp FAVICON code generated at http://realfavicongenerator.net *
 ******************************************************************/

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task( 'generate-favicon', function( done )
{
    realFavicon.generateFavicon(
    {
        masterPicture: `${sourceFolder}/initial-logo-2_optimized.svg`,
        dest: `${buildFolder}/_icons`,
        iconsPath: '/_icons/',
        design:
        {
            ios:
            {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '18%',
                assets:
                {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                }
            },
            desktopBrowser:
            {},
            windows:
            {
                pictureAspect: 'whiteSilhouette',
                backgroundColor: '#603cba',
                onConflict: 'override',
                assets:
                {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles:
                    {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false
                    }
                }
            },
            androidChrome:
            {
                pictureAspect: 'noChange',
                themeColor: '#ffffff',
                manifest:
                {
                    name: "Devin Dodson's Site",
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets:
                {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab:
            {
                pictureAspect: 'silhouette',
                themeColor: '#5bbad5'
            }
        },
        settings:
        {
            compression: 3,
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile: FAVICON_DATA_FILE
    }, function()
    {
        done();
    } );
} );

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task( 'inject-favicon-markups', function()
{
    return gulp.src( [ `${buildFolder}/**/*.html` ],
        {
            base: buildFolder
        } )
        .pipe( realFavicon.injectFaviconMarkups( JSON.parse( fs.readFileSync( FAVICON_DATA_FILE ) ).favicon.html_code ) )
        .pipe( gulp.dest( buildFolder ) );
} );

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task( 'check-for-favicon-update', function( done )
{
    var currentVersion = JSON.parse( fs.readFileSync( FAVICON_DATA_FILE ) ).version;
    realFavicon.checkForUpdates( currentVersion, function( err )
    {
        if ( err )
        {
            throw err;
        }
    } );
} );