'use strict';

/********************
 * Google Analytics *
 ********************/

// Note that loading this file synchronously may cause issues w/ the below analytics
( function( i, s, o, g, r, a, m )
{
	i[ 'GoogleAnalyticsObject' ] = r;
	i[ r ] = i[ r ] || function()
	{
		( i[ r ].q = i[ r ].q || [] ).push( arguments )
	}, i[ r ].l = 1 * new Date();
	a = s.createElement( o ),
		m = s.getElementsByTagName( o )[ 0 ];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore( a, m )
} )( window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga' );
ga( 'create', 'UA-102679857-1', 'auto' );
ga( 'send', 'pageview' );
/** End of Google Analytics logic **/

/* Ensure the script fires even if the DOM is already loaded */
if ( document.readyState !== "loading" )
{
	templateLogic();
}
else
{
	document.addEventListener( 'DOMContentLoaded', function()
	{
		templateLogic();
	} );
}

function templateLogic()
{
	// Ensure we have an up-to-date copyright year in the footer
	let date = new Date;
	let copyrightYear = document.getElementById( "current-year" );
	if ( copyrightYear !== undefined )
	{
		document.getElementById( "current-year" ).innerHTML = date.getFullYear();
	}

	// Expandable attribution area
	let attributionExpando = document.getElementById( "attribution-heading" );
	if ( attributionExpando !== undefined )
	{
		attributionExpando.addEventListener( 'click', function( event )
		{
			if ( attributionExpando.classList )
			{
				attributionExpando.classList.toggle( "active" );
			}
			else
			{
				// For IE9
				const classes = attributionExpando.className.split( " " );
				let i = classes.indexOf( "active" );

				if ( i >= 0 )
					classes.splice( i, 1 );
				else
					classes.push( "active" );
				attributionExpando.className = classes.join( " " );
			}

		}, false );
	}

	// Navbar collapser
	let navbarCollapser = document.getElementById( "navbar-collapser" );
	let navbarWrapper = document.getElementById( "navbar-wrapper" );
	if ( navbarCollapser !== undefined )
	{
		navbarCollapser.addEventListener( 'click', function( event )
		{
			if ( navbarCollapser.classList )
			{
				navbarCollapser.classList.toggle( "collapsed" );
			}
			else
			{
				// For IE9
				const classes = navbarCollapser.className.split( " " );
				let i = classes.indexOf( "collapsed" );

				if ( i >= 0 )
					classes.splice( i, 1 );
				else
					classes.push( "collapsed" );
				navbarCollapser.className = classes.join( " " );
			}

			if ( navbarWrapper.classList )
			{
				navbarWrapper.classList.toggle( "collapsed" );
			}
			else
			{
				// For IE9
				const classes = navbarWrapper.className.split( " " );
				let i = classes.indexOf( "collapsed" );

				if ( i >= 0 )
					classes.splice( i, 1 );
				else
					classes.push( "collapsed" );
				navbarWrapper.className = classes.join( " " );
			}

		}, false );
	}
}