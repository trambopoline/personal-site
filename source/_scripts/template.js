'use strict'

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
}