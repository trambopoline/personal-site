'use strict';

/* Ensure the script fires even if the DOM is already loaded */
if ( document.readyState !== "loading" )
{
	homepageLogic();
}
else
{
	document.addEventListener( 'DOMContentLoaded', function()
	{
		homepageLogic();
	} );
}

function homepageLogic()
{
	let date = new Date,
		slideIn_1 = document.getElementById( "slide-in-1" ),
		slideIn_2 = document.getElementById( "slide-in-2" ),
		slideIn_3 = document.getElementById( "slide-in-3" ),
		// slideUp_1 = document.getElementById( "hero-button" ),
		peek_1 = document.getElementById( "peek-1" ),
		siteLogo = document.getElementById( "site-logo" ),
		eye_left = document.getElementById( "eye-left" ),
		eye_right = document.getElementById( "eye-right" ),
		timeHeading = slideIn_1;

	// Display a greeting that is dependent on the time of day
	if( timeHeading )
	{
		timeHeading.innerHTML = getTimeGreeting( date );
	}

	if( peek_1 )
	{
		// Return Octocat to his starting location when the user scrolls
		document.addEventListener( "scroll", function()
		{
			peek_1.classList.add( "scrolled" );
			peek_1.classList.remove( "peek" );
		}, true );
	}

	/*	INTRO ANIMATION FUN */
	addClass( slideIn_1, "slide-from-right" );
	addClass( slideIn_2, "slide-from-left" );
	addClass( slideIn_3, "slide-from-right" );
	// addClass( slideUp_1, "slideUp" );
	addClass( peek_1, "peek" );
	addClass( eye_left, "blink" );
	addClass( eye_right, "blink" );
	addClass( siteLogo, "fade-in" );

	function addClass( element, classToAdd )
	{
		try
		{
			element.classList.add( classToAdd );
		}
		catch(error)
		{
		}
	}

	function getTimeGreeting( currentTime )
	{
		let appropriateGreeting = "Hi there!";

		/*	Setting a time window that bridges between days (e.g., 11:59 PM to 12:30 AM)
		 	will short-circuit the date comparison later, so watch out for that.
		*/
		const greetings = {
			"morning":
			{
				"start": "04:31 AM",
				"end": "11:59 AM",
				"message": "Good Morning!"
			},
			"afternoon":
			{
				"start": "12:00 PM",
				"end": "05:31 PM",
				"message": "Good Afternoon!"
			},
			"evening":
			{
				"start": "05:31 PM",
				"end": "11:59 PM",
				"message": "Good Evening!"
			},
			"night":
			{
				"start": "12:00 AM",
				"end": "04:30 AM",
				"message": "A Spooky Nighttime Greeting to You!"
			}
		}

		for( let greeting in greetings )
		{
			// I don't need the date for this computation, but it's required by the JavaScript Date constructor
			const start = new Date( currentTime.toDateString() + " " + greetings[ greeting ].start );
			const end = new Date( currentTime.toDateString() + " " + greetings[ greeting ].end );

			// console.debug( greeting, " : ", "starts at ", start, ", and ends at ", end );
			if( currentTime >= start && currentTime <= end )
			{
				// console.log( greeting );
				appropriateGreeting = greetings[ greeting ].message;
			}
		}


		return appropriateGreeting;

	}
}
