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
	createCanvas(800,800);
	angleMode(DEGREES);
	numRows = data.rows.length;
	for(let i = 0; i < numRows; i++){
		cleanData.push(data.rows[i].obj);
	}

	// let barChart01 = {
	// 	data:cleanData, 
	// 	chartHeight:200,
	// 	chartWidth:200, 
	// 	xPos:250,
	// 	yPos:450,
	// 	axisLineColour:"#d9d9d9",
	// 	barWidth:10,
	// 	yValue:"Total"
	// }

	let barChart02 = {
		data:cleanData, 
		chartHeight:400,
		chartWidth:400, 
		xPos:200,
		yPos:600,
		axisLineColour:"#edbf33",
		barWidth:20,
		yValue:"VALUE",
		barColour:random(randomBarColour),
		labelColour: "#ede15b",
		labelRotation: 45,
		labelPadding: 10,
		textSizing: 13,
		xValue: "Age Group",
		numTicks: 5,
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

	// barCharts.push(new BarChart(barChart01));
	barCharts.push(new BarChart(barChart02));
};

function draw(){

	background(20);
	barCharts.forEach(bar => bar.render());

};