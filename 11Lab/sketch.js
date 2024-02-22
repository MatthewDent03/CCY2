let barCharts = [];
let data;
let cleanData=[];
let numRows;
let randomBarColour = ["#ea5545", "#f46a9b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"]

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
	createCanvas(1200,1400);
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
		xPos:700,
		yPos:550,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue: "Not Very Effective",
		barColour:random(randomBarColour),
		labelColour: "#ede15b",
		labelRotation: 90,
		labelPadding: 25,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 16,
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
		xPos:80,
		yPos:550,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue:"Very Effective",
		barColour:random(randomBarColour),
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
		xPos:100,
		yPos:1200,
		axisLineColour:"#edbf33",
		barWidth:25,
		yValue:"Quite Effective",
		yValues:["Quite Effective", "Not Effective At All"],
		barColour:random(randomBarColour),
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
		xAxisLabel: "Age Group",
		barLabelValue: ["Quite Effective", "Not Effective At All"],
		textSizeSmall: 15,
	}
	//avgStacked
	let barChart04 = {
		data:cleanData, 
		chartHeight:350,
		chartWidth:350, 
		xPos:680,
		yPos:1200,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue:"TOTAL",
		barColour:random(randomBarColour),
		labelColour: "#ede15b",
		labelRotation: 45,
		labelPadding: 10,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 16,
		tickColour: "#ef9b20",
		titleLabel: "Statistic Label",
		titleSize: 20,
		tickTextSize: 15,
		yAxisLabel: "UNIT",
		axisLabelRotation: 270,
		xAxisLabel: "Level of Effectiveness",
		barLabelValue: "Level of Effectiveness",
		textSizeSmall: 15,
	}

	barCharts.push(new BarChart(barChart02));
	barCharts.push(new HorizontalBarChart(barChart01));
	barCharts.push(new StackedBarChart(barChart03));
	// barCharts.push(new StackedAvgChart(barChart04));
};

function draw(){

	background(20);
	barCharts.forEach(bar => bar.render());

};