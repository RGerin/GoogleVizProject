/**
 * @author Roseanne
 */
/**
 * @author Roseanne
 */

/*
 * Project steps:
 1. Set up document ready
 2. Load Google charts package
 3. Load data
 4. Render the chart
  
 */
//I am adding a function here that is the "Polo" of the google name "Marco."
function googleProjectLoaded


/*I am adding a function  here that is the "Polo."*/
function pageReady(){
	console.log("page done")
	//Step 1 is now done. Next step is to load the Google charting package. Write the "google load" function
	//followed by a list of parameters. The google name is the "Marco" and the function name is the "Polo."
	google.load("visualization", "1", {packages["corechart"], "callback":googleProjectLoaded})

	
}

/*I will add a callback name via a document ready function.
Document ready is the "Marco" and the function is the "Polo."*/
$(document).ready(pageReady)

console.log("js loaded");

