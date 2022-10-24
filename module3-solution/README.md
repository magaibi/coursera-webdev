Module 3 Assignment Conditions:
	- For this assignment, you are to use Twitter Bootstrap CSS Framework as much 
	  as possible. I suggest you start with copying the starter bootstrap files
	  and folders we discussed in Lecture 25 part 2.
	  If you've cloned/downloaded the code example repository, it should be in the 
	  examples/Lecture25 folder. Copy the contents of examples/Lecture25 to your 
	  solution container folder (e.g., module3-solution) as a starting point.

	- Since we are using Bootstrap for this assignment, instead of specifying pixel
	  ranges, I will define our desktop, tablet, and mobile views in terms of 
	  Bootstrap CSS class prefixes, i.e., "md", "sm", and "xs":
	  1. Desktop mockup illustration should correspond to Bootstrap "md-based" classes
	  2. Tablet mockup illustration should correspond to Bootstrap  "sm-based" classes
	  3. Mobile mockup illustration should correspond to Bootstrap  "xs-based" classes

	- Navbar:
	  1. Create a navbar that scrolls away together with the page (the navbar should 
	     become invisible and is not fixed to the top when you scroll the page down). 
	     The navbar should have a company name (i.e., navbar-brand class) called "Food, LLC" 
	     that is aligned to the left side of the navbar.
	     (See https://getbootstrap.com/docs/3.3/components/#navbar. 
	     Make the browser window narrower to see the mobile menu button appear in the 
	     first example shown at the provided link.)
	  2. For desktop and tablet view, the navbar should not contain anything else.
	     No other buttons should be visible. (Hint: use 'visible-xs' class.)
	  3. Mobile View: Create a simple menu button (3 horizontal bars). When the user
	     clicks that button, a dropdown menu should appear (as illustrated in Mobile
	     Open Menu illustration below.):
	     - The dropdown menu should contain 3 items: Chicken, Beef, and Sushi.
	     - The dropdown menu should take up the entire width of the browser window.
	       Make sure the dropdown menu has a background color set that distinguishes it
	       from the rest of the content.
	       (Hint: See: https://getbootstrap.com/docs/3.3/components/#navbar and
                  Lecture 31 for examples on how to accomplish this.)

	- Page Heading:
	  The page heading that says Our Menu should be centered within the browser window.
	  You must use a Bootstrap class to accomplish this.
	  (Hint: look for a Bootstrap class that centers text, see:
	  https://getbootstrap.com/docs/3.3/css/#type-alignment.)

	- Create a single really tall section that will use the Bootstrap Grid and take up
	  the entire width of the browser window (minus some margins, of course) for all
	  views: desktop, tablet, and mobile.
	  To make the section really tall, you can either:
	  1. fill it out with a LOT of text or
	  2. simply set its height to something like 1000px.
	  * Must be tall enough to cause scrolling down to be required to view the
	    bottom of the section.
	  * Background color is set such that it is distinguishable from the rest of the 
	    content.
	    (Hint: don't forget to have an element with a class='container' or 
	     class='container-fluid' wrapping your grid. Remember that to have the grid
		 do something "always", i.e., no matter what browser window size, use the 
	     col-xs-... classes.
	     In this case, since we want the section to take up the entire row, use:
		 col-xs-12.)

