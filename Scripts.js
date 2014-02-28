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

//I am adding a function here that will retrieve the data. The name of my data is joblessInfo.
//I must remember to check the web page only in Firefox and not Chrome to ensure the data has been loaded.

function infoLoaded(joblessInfo){
	
	console.log(joblessInfo);
	
	//I will add a variable to put a lable on "Observations" in the data in my JSON file.
	
	var observationsArray = joblessInfo.observations;
	
		console.log(joblessInfo.observations);
		
	//Now I'm going to create a container to hold all the other lists.
	
	var masterList = [];
	
	//I must create a var with a "new header" list to adjust the "Unknown header type 548" 
	//line error that appears in Firefox.
	var newHeader = ["Date", "Jobless Data"];
	
	masterList.push(newHeader);
	
		
	//To create my visualiazation, I need to convert my JSON data to an array of arrays.
	//To do this, I will have to use for loops to loop individual data point arrays
	//from the "date" and "value" data and use it to drive the visualization. 
	//I'm using the length prperty of the array to make sure the "observations" cycles 
	//through all the data. 
	//Then I will add a var to tell the computer to get the apropriate object.
	//Next, I'll create a little array with just "date" and "value."
	//Final thing is to put the data array into the data list.
	//Then the masterList should be populated with an array of arrays that is all
	//the observations containing only the "date" and "value."
	
	for(var i=0; i<observationsArray.length; i++) {
		var indieObject = observationsArray[i];	
		var mainDataArray = [indieObject.date, Number(indieObject.value)];	
		masterList.push(mainDataArray);
}
	//I am creating an object to onvert a string to a number.
	var num = new Number(100);

	console.log(masterList);
		
	//I am creating a variable for the chart title with a title property.
	//This will be the header of my chart.
	var options = {
		title: "Acme Shoe Company Performance"
	};
		
	console.log(masterList);
	
	//Now I am going to use an array to data table function and pass the set of arrays 
	//I created to generate the data table to pass to the visualization function.
	
	var mainDataTable = google.visualization.arrayToDataTable(masterList);
	//I'm going to create a chart variable. The document.getElementByID is the 
	//equivalent of the jQuery $("#divName"). I must add the raw JavaScript command
	//"mainChartDiv" here.
	var mainChart = new google.visualization.LineChart(document.getElementById("mainChartDiv"));
	mainChart.draw(mainDataTable, options);
}
          

//I am adding a function here that is the "Polo" of the google name "Marco."*/

function googleProjectLoaded(){
	console.log("my project loaded");
/*I'm going to set up my jQuery call with a get command to get the data.
 "$.get is the "Marco" and "infoLoaded"" is the "Polo."
 */
		$.get("GoogleChart.json", infoLoaded, "json");	
		
}


/*I am adding a function  here that is the "Polo."*/
function pageReady(){
	console.log("page done")
	//Step 1 is now done. Next step is to load the Google charting package. Write the "google load" function
	//followed by a list of parameters. The google name is the "Marco" and the function name is the "Polo."
	google.load("visualization", "1", {packages:["corechart"], "callback":googleProjectLoaded})

	
}

/*I will add a callback name via a document ready function.
Document ready is the "Marco" and the function is the "Polo."*/
$(document).ready(pageReady)

console.log("js loaded");

