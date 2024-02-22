class HorizontalBarChart {
	constructor(obj){ //Initialising the constructor within the barchart class. Declaring variables that are called within the file and assigning them an object from the sketch.js file.
		this.data = obj.data; //declaring the variables required for positioning and measurements
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos; 
		this.yPos = obj.yPos; 
		//declaring the colour variables for the objects that are defined within the sketch.js file
		this.axisLineColour = obj.axisLineColour;
		this.labelColour = obj.labelColour;
		//declaring the barWidth and assigning it the object within the sketch.js
		this.barWidth = obj.barWidth;
		this.barColour = obj.barColour;
		//declaring the data variables which are set to the data columns within the sketch.js file
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		//declaring the text sizes, label properties that can be changed through the sketch.js file

		this.labelPadding = obj.labelPadding;
		this.labelRotation = obj.labelRotation;
		this.yaxisLabelRotation = obj.yaxisLabelRotation;
		this.xaxisLabelRotation = obj.xaxisLabelRotation;

		this.textSizing = obj.textSizing;
		this.tickTextSize = obj.tickTextSize;
		this.titleSize = obj.titleSize;
		this.textSizeSmall = obj.textSizeSmall;
		//declaring the values for the labels for the axis through the index of the data
		this.titleLabel = this.data[0][obj.titleLabel];
		this.yAxisLabel = obj.yAxisLabel;
		this.xAxisLabel = obj.xAxisLabel;
		//mapping the data to create a separate list of the object properties 
		this.barLabelValue = this.data.map(d=> d[obj.barLabelValue]);
		// console.log(this.barLabelValue);
		//declaring the tick properties
		this.numTicks = obj.numTicks;
		this.tickColour = obj.tickColour;
		//creating a variable assigned the max of the mapped data of the yValue
		this.maxValue = max(this.data.map((d) => d[this.yValue]));
		//creating the scale using the maxValue
		this.scale = this.chartHeight / this.maxValue;
		// console.log(this.scale);
	}

	render(){
		noLoop();
		push();//translating the chart from the origin to the center 
		translate(this.xPos, this.yPos);
		//creating text with properties that are declared within the sketch.js file
		textAlign(LEFT, BOTTOM);
		fill(255);
		textSize(this.titleSize);
		textFont(fontBold);
		text(this.titleLabel, -20, -this.chartHeight - 130, 380);

		push();//pushing to prevent the rotate function from affecting other parts of code
		rotate(this.yaxisLabelRotation);//using strings to create the labels for the axis pulling the property name from the object.
		text("Value as " + this.xAxisLabel, this.chartWidth/2 - 100, this.chartHeight/this.chartHeight - 150, 300);
		pop();

		text("Value as " + this.yAxisLabel, this.chartWidth/2-50, this.chartHeight/this.chartHeight + 60, 250);


		fill(255);//creating the chart x and y axis lines
		stroke(this.axisLineColour);
		line(0,0,0,-this.chartHeight);
		line(0,0,this.chartWidth,0);
		let xLabels = this.data.map(d => d[this.xAxisLabel]);

	//creating the number of ticks along the desired axis
		for(let i = 0; i < this.numTicks; i++){
			push();
			translate(-(i*(-this.chartHeight/this.numTicks)),5)
			stroke(this.tickColour);
			line(0,0,0,-5)
			pop();
		};
		//declaring a tickValue to find the values to be displayed and rounded using parseFloat to the axis
		for(let i = 0; i < 1000; i++){
			if(this.maxValue%this.numTicks == 0){
				break;
			} else {
				this.maxValue =this.maxValue+1;
			}
		}
		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1); //declaring the gap variable and its formula to create the gap between bars
		
		let yLabelValues = this.data.map(d => d[this.yValue]); //mapping the yValue data to assigned to a  variable
		sort(yLabelValues);  //creating a sort function to order the values lowest to highest


		for(let i = 0; i < this.numTicks; i++){ //initialising a loop to find the number of bars required
			push();
			fill(this.tickColour)
			stroke(this.axisLineColour);
			rotate(this.xaxisLabelRotation);
			textSize(this.tickTextSize)
			noStroke();
			translate(i*(this.chartWidth/this.numTicks),this.labelPadding*1.5)  //translating the labels to align with the ticks
			//text(yLabelValues,gap,0);
			pop();
		}
		
		push()
		noStroke();
		translate(1, 0); //translating the origin of the bars
		for(let i = 0; i < this.data.length; i++) {//drawing the bars and each iteration of the loop will increase the gap between each bar 
			fill(this.barColour);
			rect(0,0,this.data[i][this.yValue]*this.scale,-this.barWidth);  //drawing the bars and each iteration of the loop will increase the gap between each bar 
			// noStroke();
			fill(this.labelColour);
			textFont(fontReg);
			if (this.labelRotation == 0){
				textAlign(CENTER, CENTER);
			} else {
				textAlign(LEFT, CENTER);
			}
			

			textSize(this.textSizing);

			push();//pushing to prevent the translate from affecting other code
			textSize(this.tickTextSize);
			fill(this.tickColour);
			textFont(fontBold);
			stroke(this.labelColour);
			translate(-this.chartWidth/2, -this.labelPadding+this.barWidth/1.5);

			noStroke();
			textAlign(LEFT, CENTER);
			text(xLabels[i], this.chartWidth/3, 0);//displaying the xValues along the axis 
			pop();
			
			push();//pushing to prevent the translate from affecting other code
			stroke(this.axisLineColour);
			translate(this.labelPadding + this.data[i][this.yValue] * this.scale, this.barWidth/2);
			// rotate(this.labelRotation);
			noStroke();
			text(this.data[i][this.yValue], -this.barWidth, -this.barWidth);//displaying the age groups along the bars 
			pop();

			translate(0, -(gap + this.barWidth));//translating the origin of the bars from the vertical to horizontal
		}
		pop()

		pop();
	}

}