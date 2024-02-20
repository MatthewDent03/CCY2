let barCharts = [];
let data;
let cleanData=[];
let numRows;

function preload(){

	data = loadTable("data/combined.csv", "csv", "header");

}

function setup(){
	createCanvas(500,500);

	for(let i = 0; i < 10; i++){

		numRows = data.rows.length;
		for(let i = 0; i < numRows; i++){
			cleanData.push(data.rows[i].obj);
			// console.log(cleanData);
		}

		// barCharts.push(new BarChart(cleanData, 200, 200, 50, 350, "#ff0000"));
		barCharts.push(new BarChart(cleanData, 400, 400, 50, 450, "#d9d9d9"));
	};
};

function draw(){
	background(20);

	// for(let i = 0; i < barCharts.length; i++){
	// 	barCharts[i].render();
	// };

	barCharts.forEach(bar => bar.render());   //neater version

};