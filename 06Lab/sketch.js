let barCharts = [];

function setup(){
	createCanvas(500,500);
	for(let i = 0; i < 10; i++){
		let xPos = random(0,500);
		let yPos = random(0,500);
		let chartHeight = random(30,70);
		let chartWidth = random(30,70);
		barCharts.push(new BarChart(180, 180, 50, 50));
		barCharts.push(new BarChart(180, 180, 250, 50));
		barCharts.push(new BarChart(180, 180, 50, 250));
		barCharts.push(new BarChart(180, 180, 250, 250));
	};
};

function draw(){
	background(225);

	// for(let i = 0; i < barCharts.length; i++){
	// 	barCharts[i].render();
	// };

	barCharts.forEach(bar => bar.render());   //neater version

};