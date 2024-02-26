let barCharts = [];
let data;
let cleanData=[];
let numRows;

let fontLight;
let fontReg;
let fontBold;



function preload(){

	data = loadTable("data/Statistics.csv", "csv", "header");
	fontLight = loadFont('Fonts/Montserrat-Thin.ttf');
	fontReg = loadFont('Fonts/Montserrat-Regular.ttf');
	fontBold = loadFont('Fonts/Montserrat-Bold.ttf');

}

function setup(){
	createCanvas(windowWidth,2050);
	angleMode(DEGREES);
	numRows = data.rows.length;
	for(let i = 0; i < numRows; i++){
		cleanData.push(data.rows[i].obj);
	}
//horizontal
	let barChart01 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:1000,
		yPos:550,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue: "Not Very Effective",
		barColour:["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
		labelColour: "#ede15b",
		labelRotation: 90,
		labelPadding: 25,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 10,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 14,
		yAxisLabel: "Not Very Effective",
		yaxisLabelRotation: 270,
		xaxisLabelRotation: 0,
		xAxisLabel: "Age Group",
		barLabelValue: "Not Very Effective",
		textSizeSmall: 15,
	}
//regular
	let barChart02 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:300,
		yPos:550,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue:"Very Effective",
		barColour:["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
		labelColour: "#ede15b",
		labelRotation: 0,
		labelPadding: 3,
		textSizing: 15,
		xValue: "Age Group",
		numTicks: 10,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 15,
		yAxisLabel: "Very Effective",
		axisLabelRotation: 270,
		xAxisLabel: "Age Group",
		barLabelValue: "Very Effective",
		textSizeSmall: 15,
	}
	//stacked
	let barChart03 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:300,
		yPos:1200,
		axisLineColour:"#edbf33",
		barWidth:25,
		zValue:"TOTAL",
		yValue:"Quite Effective",
		yValues:["Quite Effective", "Not Effective At All"],
		barColour:["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
		labelColour: "#ede15b",
		labelRotation: 45,
		labelPadding: 15,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 5,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 15,
		yAxisLabel: ["Quite Effective and Not Effective At All"],
		axisLabelRotation: 270,
		xAxisLabel: "Age Group",
		barLabelValue: ["Quite Effective", "Not Effective At All"],
		textSizeSmall: 15,
		type:"REG",
		stackedPos:"REG",
	}
	//avgStacked
	let barChart04 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:1000,
		yPos:1200,
		axisLineColour:"#edbf33",
		barWidth:25,
		zValue:"TOTAL",
		yValue:"Quite Effective",
		yValues:["Quite Effective", "Not Effective At All"],
		barColour: ["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
		labelColour: "#ede15b",
		labelRotation: 45,
		labelPadding: 15,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 5,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 15,
		yAxisLabel: ["Quite Effective and Not Effective At All"],
		axisLabelRotation: 270,
		xAxisLabel: "Age Group",
		barLabelValue: ["Quite Effective", "Not Effective At All"],
		textSizeSmall: 15,
	}

	//Bubble chart
	let barChart05 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:1000,
		yPos:1900,
		axisLineColour:"#edbf33",
		barWidth:25,
		yValue:"Quite Effective",
		yValues:["Quite Effective", "Not Effective At All", "Not Very Effective"],
		barColour:["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
		labelColour: "#ede15b",
		labelRotation: 45,
		labelPadding: 15,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 16,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 15,
		yAxisLabel: "UNIT",
		axisLabelRotation: 270,
		xAxisLabel: ["Quite Effective and Not Effective At All"],
		barLabelValue: ["Quite Effective", "Not Effective At All"],
		textSizeSmall: 8,
	}

	//2nd Barchart vertical
	let barChart06 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:300,
		yPos:1900,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue:"Not Effective At All",
		barColour:["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
		labelColour: "#ede15b",
		labelRotation: 0,
		labelPadding: 3,
		textSizing: 15,
		xValue: "Age Group",
		numTicks: 10,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 15,
		yAxisLabel: "Not Effective At All",
		axisLabelRotation: 270,
		xAxisLabel: "Age Group",
		barLabelValue: "Not Effective At All",
		textSizeSmall: 15,
	}

	let barChart07 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:1700,
		yPos:550,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue: "Quite Effective",
		barColour:["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
		labelColour: "#ede15b",
		labelRotation: 90,
		labelPadding: 25,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 10,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 14,
		yAxisLabel: "Quite Effective",
		yaxisLabelRotation: 270,
		xaxisLabelRotation: 0,
		xAxisLabel: "Age Group",
		barLabelValue: "Quite Effective",
		textSizeSmall: 15,
	}

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

};