let barCharts = [];
let data;
let cleanData=[];
let numRows;

let fontLight;
let fontReg;
let fontBold;



function preload(){
	//loading the fontstyles through the generated folders and assigning them as values 
	data = loadTable("data/Statistics.csv", "csv", "header");
	fontLight = loadFont('Fonts/Montserrat-Thin.ttf');
	fontReg = loadFont('Fonts/Montserrat-Regular.ttf');
	fontBold = loadFont('Fonts/Montserrat-Bold.ttf');

}

function setup(){
	createCanvas(windowWidth,2050); //creating the canvas with the width of the window the user is on
	angleMode(DEGREES); //declaring the angleMode to degrees instead of radians
	numRows = data.rows.length; //creating the number of rows required through counting the amount of rows in the data arrays
	for(let i = 0; i < numRows; i++){
		cleanData.push(data.rows[i].obj);  //pushing these rows of data into a variable array called clean data
	}
//horizontal
	let barChart01 = {
		data:cleanData, 
		//positions and measurements
		chartHeight:350,
		chartWidth:350, 
		xPos:1000,
		yPos:550,
		barWidth:20,
		numTicks: 10,
		//colours
		tickColour: "#ef9b20",
		axisLineColour:"#edbf33",
		barColour:["#023e8a", "#0077b6", "#00b4d8", "#48cae4"],
		labelColour: "#ede15b",
		//rotations as degrees
		labelRotation: 90,
		yaxisLabelRotation: 270,
		xaxisLabelRotation: 0,
		//sizings and padding
		labelPadding: 25,
		titleSize: 20,
		tickTextSize: 14,
		textSizing: 13,
		textSizeSmall: 15,
		//values for labels and bar data
		xValue: "Age Group",
		titleLabel: "Statistic Label",
		yAxisLabel: "Not Very Effective",
		yValue: "Not Very Effective",
		xAxisLabel: "Age Group",
		barLabelValue: "Not Very Effective",
	}
//regular
	let barChart02 = {
		data:cleanData, 
		//position and measurements
		chartHeight:350,
		chartWidth:350, 
		xPos:300,
		yPos:550,
		barWidth:20,
		numTicks: 10,
		//colours
		axisLineColour:"#edbf33",
		tickColour: "#ef9b20",
		barColour:["#023e8a", "#0077b6", "#00b4d8", "#48cae4"],
		labelColour: "#ede15b",
		//rotation
		labelRotation: 0,
		axisLabelRotation: 270,
		//padding and text sizing
		labelPadding: 3,
		textSizing: 15,
		titleSize: 20,
		tickTextSize: 15,
		textSizeSmall: 15,
		//values for labels and bars
		xValue: "Age Group",
		titleLabel: "Statistic Label",
		yAxisLabel: "Very Effective",
		xAxisLabel: "Age Group",
		yValue:"Very Effective",
		barLabelValue: "Very Effective",
	}
	//stacked
	let barChart03 = {
		data:cleanData, 
		//positions and measurements
		chartHeight:350,
		chartWidth:350, 
		xPos:300,
		yPos:1200,
		barWidth:25,
		numTicks: 5,
		//colours
		axisLineColour:"#edbf33",
		barColour:["#023e8a", "#0077b6", "#00b4d8", "#48cae4"],
		labelColour: "#ede15b",
		tickColour: "#ef9b20",
		//rotations
		labelRotation: 45,
		axisLabelRotation: 270,
		//sizes and padding for text
		labelPadding: 15,
		textSizing: 13,
		titleSize: 20,
		textSizeSmall: 15,
		tickTextSize: 15,
		//values for labels and bars
		xAxisLabel: "Age Group",
		titleLabel: "Statistic Label",
		xValue: "Age Group",
		yAxisLabel: ["Quite Effective and Not Effective At All"],
		barLabelValue: ["Quite Effective", "Not Effective At All"],
		zValue:"TOTAL",
		yValue:"Quite Effective",
		yValues:["Quite Effective", "Not Effective At All"],
		//if statement responses
		type:"REG", //REG or AVG
		stackedPos:"REG", //REG or HZT
	}
	//avgStacked
	let barChart04 = {
		data:cleanData, 
		//position and measurement
		chartHeight:350,
		chartWidth:350, 
		xPos:1000,
		yPos:1200,
		barWidth:25,
		numTicks: 5,
		//colours
		axisLineColour:"#edbf33",
		barColour: ["#023e8a", "#0077b6", "#00b4d8", "#48cae4"],
		labelColour: "#ede15b",
		tickColour: "#ef9b20",
		//rotations
		labelRotation: 45,
		axisLabelRotation: 270,
		//padding and text sizes
		labelPadding: 15,
		textSizing: 13,
		textSizeSmall: 15,
		titleSize: 20,
		tickTextSize: 15,
		//values for labels and bars
		titleLabel: "Statistic Label",
		yAxisLabel: ["Quite Effective and Not Effective At All"],
		xAxisLabel: "Age Group",
		xValue: "Age Group",
		zValue:"TOTAL",
		yValue:"Quite Effective",
		yValues:["Quite Effective", "Not Effective At All"],
		barLabelValue: ["Quite Effective", "Not Effective At All"],
	}

	//Bubble chart
	let barChart05 = {
		data:cleanData, 
		//measurements and positions
		chartHeight:350,
		chartWidth:350, 
		xPos:1000,
		yPos:1900,
		barWidth:25,
		numTicks: 16,
		//colours
		axisLineColour:"#edbf33",
		barColour:["#023e8a", "#0077b6", "#00b4d8", "#48cae4"],
		labelColour: "#ede15b",
		tickColour: "#ef9b20",
		//rotations
		axisLabelRotation: 270,
		labelRotation: 0,
		//padding and sizing texts
		labelPadding: 15,
		textSizing: 13,
		textSizeSmall: 8,
		titleSize: 20,
		tickTextSize: 15,
		//values for labels and bars
		xValue: "Age Group",
		titleLabel: "Statistic Label",
		yAxisLabel: "UNIT",
		yValue:"Quite Effective",
		yValues:["Quite Effective", "Not Effective At All", "Not Very Effective"],
		xAxisLabel: ["Quite Effective and Not Effective At All"],
		barLabelValue: ["Quite Effective", "Not Effective At All"],
	}

	//2nd Barchart vertical
	let barChart06 = {
		data:cleanData, 
		//measurements and positions
		chartHeight:350,
		chartWidth:350, 
		xPos:300,
		yPos:1900,
		barWidth:20,
		numTicks: 10,
		//colours
		axisLineColour:"#edbf33",
		barColour:["#023e8a", "#0077b6", "#00b4d8", "#48cae4"],
		labelColour: "#ede15b",
		tickColour: "#ef9b20",
		//rotations
		labelRotation: 0,
		axisLabelRotation: 270,
		//sizing and padding for texts
		labelPadding: 3,
		textSizing: 15,
		titleSize: 20,
		tickTextSize: 15,
		textSizeSmall: 15,
		//values for labels and bars
		titleLabel: "Statistic Label",
		yAxisLabel: "Not Effective At All",
		xAxisLabel: "Age Group",
		xValue: "Age Group",
		yValue:"Not Effective At All",
		barLabelValue: "Not Effective At All",
	}

	let barChart07 = {
		data:cleanData, 
		//measurements and positions
		chartHeight:350,
		chartWidth:350, 
		xPos:1700,
		yPos:550,
		barWidth:20,
		//colours
		axisLineColour:"#edbf33",
		barColour:["#023e8a", "#0077b6", "#00b4d8", "#48cae4"],
		labelColour: "#ede15b",
		tickColour: "#ef9b20",
		//rotations
		labelRotation: 90,
		yaxisLabelRotation: 270,
		xaxisLabelRotation: 0,
		//padding and sizing texts
		labelPadding: 25,
		textSizing: 13,
		numTicks: 10,
		titleSize: 20,
		textSizeSmall: 15,
		tickTextSize: 14,
		//values for labels and bars
		titleLabel: "Statistic Label",
		xValue: "Age Group",
		yAxisLabel: "Quite Effective",
		xAxisLabel: "Age Group",
		yValue: "Quite Effective",
		barLabelValue: "Quite Effective",
	}
//pushing bars to barcharts array with value of the functions/methods
	barCharts.push(new BarChart(barChart02));
	barCharts.push(new HorizontalBarChart(barChart01));
	barCharts.push(new StackedBarChart(barChart03));
	barCharts.push(new StackedAvgChart(barChart04));
	barCharts.push(new BubbleChart(barChart05));
	barCharts.push(new BarChart(barChart06));
	barCharts.push(new HorizontalBarChart(barChart07));
};

function draw(){

	background(20);
	barCharts.forEach(bar => bar.render());
	//drawing the array in a loop rendering them

};