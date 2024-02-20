class HundredBarChart { //initialising the class
	constructor(obj){//Initialising the constructor within the barchart class. Declaring variables that are called within the file and assigning them an object from the sketch.js file.
		this.data = obj.data;//declaring the variables required for positioning and measurements
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
		this.axisLabelRotation = obj.axisLabelRotation;
		this.textSizing = obj.textSizing;
		this.tickTextSize = obj.tickTextSize;
		this.titleSize = obj.titleSize;
		this.textSizeSmall = obj.textSizeSmall;
		//declaring the values for the labels for the axis through the index of the data
		this.titleLabel = this.data[0][obj.titleLabel];
		this.yAxisLabel = this.data[0][obj.yAxisLabel];
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
		
		push();
		translate(this.xPos, this.yPos);//translating the chart from the origin to the center 
		//creating text with properties that are declared within the sketch.js file
		textAlign(LEFT, BOTTOM);
		fill(255);
		textSize(this.titleSize);
		textFont(fontBold);
		text(this.titleLabel, 0, -this.chartHeight - 130, 480);

		push();//pushing to prevent the rotate function from affecting other parts of code
		rotate(this.axisLabelRotation);//using strings to create the labels for the axis pulling the property name from the object.
		text("Value as " + this.yAxisLabel, this.chartWidth/2 - 50, this.chartHeight/this.chartHeight - 50, 200);
		pop();

		text("Value as " + this.xAxisLabel, this.chartWidth/2-50, this.chartHeight/this.chartHeight + 120, 200);


		fill(255);//creating the chart x and y axis lines
		stroke(this.axisLineColour);
		line(0,0,0,-this.chartHeight);
		line(0,0,this.chartWidth,0);
		//creating the number of ticks along the desired axis
		for(let i = 0; i < this.numTicks; i++){
			push();
			translate(0,i*(-this.chartHeight/this.numTicks))
			stroke(this.tickColour);
			line(0,0,-5,0)
			pop();
		};
		//declaring a tickValue to find the values to be displayed and rounded using parseFloat to the axis
		for(let i = 0; i < this.numTicks; i++){
			push();
			translate(0,i*(-this.chartHeight/this.numTicks))
			stroke(this.tickColour);
			line(0,0,-5,0)
			pop();
		};
		let tickValue= this.maxValue/this.numTicks
		for(let i = 0; i < this.numTicks; i++){
			push();
			noStroke();
			fill(this.tickColour);
			textFont(fontBold);
			textSize(this.tickTextSize)
			textAlign(RIGHT, CENTER);
			translate(0,i*(-this.chartHeight/this.numTicks))
			text(parseFloat(i*tickValue).toFixed(0),-10,0);
			pop();
		}
		// line(0,0,-10,0)
		// line(0,10,0,-10)
		// line(0,-10,-10,-10)
		noStroke();
		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1); //declaring the gap variable and its formula to create the gap between bars
		push()
		let xLabels = this.data.map(d => d[this.xValue]);//mapping the xValue data to assigned to a  variable
		translate(gap, 0);
		for(let i = 0; i < this.data.length; i++) {//initialising a loop to find the number of bars required
			fill(this.barColour);
			rect(0,0,this.barWidth,-this.data[i][this.yValue]*this.scale);   //string to property use [] and remove dot.
			noStroke();
			fill(this.labelColour);
			textFont(fontReg);
			if (this.labelRotation == 0){
				textAlign(CENTER, CENTER);
			} else {
				textAlign(LEFT, CENTER);
			}

			textSize(this.textSizing);

			push();
			stroke(this.axisLineColour);
			translate(this.barWidth/2, this.labelPadding);//translating the labels to align with the ticks
			rotate(this.labelRotation);
			noStroke();
			text(xLabels[i], 0, 0);
			pop();

			push();
			textFont(fontReg);
			textSize(this.textSizeSmall);
			translate(this.labelPadding,-this.data[i][this.yValue]*this.scale - 5);
			rotate(this.axisLabelRotation);
			text(this.barLabelValue[i],0,0);
			pop();
			translate(gap+this.barWidth,0);
		}
		pop()

		pop();
	}

}