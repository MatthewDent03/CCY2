let data;
let cleanData = [];

const barWidth = 25;
const chartWidth = 400;
const chartHeight = 400;
const canvasWidth = 700;
const canvasHeight = 700;
// const barFill = "#1d2488";
// const backgroundColour = "#f7f7f7"
// const axislineColour = "#FF5E5B";
// const axisThickness = 3;

function preload(){
	data = loadTable('data/Combined.csv', 'csv', 'header');
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	for(let i = 0; i < data.rows.length; i++){
		cleanData.push(data.rows[i].obj);
	}
	noLoop();
}

function draw() {
	// background(backgroundColour);
	// stroke(axislineColour);
	// strokeWeight(axisThickness);

	push();

	let transX = (canvasWidth - chartWidth)/2;
	let transY = (canvasHeight - chartHeight)/2 + chartHeight;
	translate(transX,transY);
	line(0,0,0,-chartHeight);
	line(0,0,chartWidth,0);

	let numBars = cleanData.length;
	let gapWidth = (chartWidth - (numBars*barWidth))/(numBars + 1);

	// fill(barFill);
	// noStroke();                                                                   

	for(let i = 0; i < cleanData.length; i++){
		let jump = (i*barWidth)+((i+1)*gapWidth);
		barHeight = +cleanData[i].Total;
		rect(jump,0,barWidth,-barHeight*7);
	};

	pop();
}
