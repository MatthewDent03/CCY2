let barCharts = [];
let data;
let cleanData=[];
let numRows;

function preload(){

	data = loadTable("data/combined.csv", "csv", "header");

}

function setup(){
	createCanvas(500,500);
	angleMode(DEGREES);
	numRows = data.rows.length;
	for(let i = 0; i < numRows; i++){
		cleanData.push(data.rows[i].obj);
	}

	let barChart01 = {
		data:cleanData, 
		chartHeight:200,
		chartWidth:200, 
		xPos:250,
		yPos:450,
		axisLineColour:"#d9d9d9",
		barWidth:10,
		yValue:"Total"
	}

	let barChart02 = {
		data:cleanData, 
		chartHeight:400,
		chartWidth:400, 
		xPos:50,
		yPos:425,
		axisLineColour:"#d9d9d9",
		barWidth:30,
		yValue:"Female",
		barColour:"#B41CC4",
		labelColour: "#119972",
		labelRotation: 45,
		labelPadding: 10,
		textSizing: 10,
		xValue: "Age_Group",
		numTicks: 5,
	}

	// barCharts.push(new BarChart(barChart01));
	barCharts.push(new BarChart(barChart02));
};

function draw(){
	background(20);
	barCharts.forEach(bar => bar.render());

};