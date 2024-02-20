class StackedBarChart {
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
		this.maxValue = max(this.data.map((d) => d[this.yValue]*2)); //multiplying it by 2 to have the scale values reach the desired numbers
		//creating the scale using the maxValue
		this.scale = this.chartHeight / this.maxValue;
		// console.log(this.scale);
		
	}

	render(){
		noLoop();
		push();
		translate(this.xPos, this.yPos);//translating the chart from the origin to the center 
		//creating text with properties that are declared within the sketch.js file
		textAlign(LEFT, BOTTOM);
		fill(255);
		textSize(this.titleSize);
		textFont(fontBold);
		text(this.titleLabel, 0, -this.chartHeight-100, 480);

		push();//pushing to prevent the rotate function from affecting other parts of code
		rotate(this.axisLabelRotation);//using strings to create the labels for the axis pulling the property name from the object.
		text("Value as " + this.yAxisLabel, this.chartWidth/2 - 50, this.chartHeight/this.chartHeight - 50, 200);
		pop();

		text("Value as " + this.xAxisLabel, this.chartWidth/2-100, this.chartHeight/this.chartHeight + 80, 200);


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
		
		for(let i = 0; i < this.numTicks; i++){
			push();
			translate(0,i*(-this.chartHeight/this.numTicks))
			stroke(this.tickColour);
			line(0,0,-5,0)
			pop();
		};
		//declaring a tickValue to find the values to be displayed and rounded using parseFloat to the axis
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
		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1);//Declaring a gap variable.
		push()
		let xLabels = this.data.map(d => d[this.xValue]); //assigned the mapped values of the property xValue to the variable xLabels
		translate(gap, -1);

		for (let i = 0; i < this.data.length/2; i++) {   //initializing the loop(i) to find the iterations of the length of data to determine the number of bars. 
			//this was divided by 2 to create half the bars to then stack the other half
			for (let j = 0; j < 2; j++) {	//initialising the loop(j) to locate the bars of the index skipping the 2nd to create the x and y position variables and the x position will change its gap size with the iteration of the bars of loop(i)
				let x = (gap + this.barWidth * i); 
				let y = 0; 
				for(let k = 0; k < j; k++){  //initialising the loop(k) to find the height of the previous index of loop(j) iteration to then position the yposition of the bar to the previous bar's height
					y -= this.data[i + k][this.yValue] * this.scale; //finding the value of the bar of the previous indexes
				}
				fill(this.barColour);
				stroke(255);
				rect(x, y, this.barWidth, -this.data[i + j][this.yValue] * this.scale);  //drawing the rectangle with the variables x and y to create the iterative gap and height positions, the size of the bar and the value of the bar are determined through barwidth
				//and the value of yValue object and the height of the bar determined by the index of the data array
			}
			noStroke();
			fill(this.labelColour);
			textFont(fontReg);
			if (this.labelRotation == 0){
				textAlign(CENTER, CENTER);
			} else {
				textAlign(LEFT, CENTER);
			}

			textSize(this.textSizing);

			// push();
			// stroke(this.axisLineColour);
			// translate(this.barWidth/2, this.labelPadding); //translating the label positions on the axis
			// rotate(this.labelRotation);
			// noStroke();
			// text(xLabels[i], 0, 0);
			// pop();

			// push();
			// textFont(fontReg);
			// textSize(this.textSizeSmall);
			// translate(this.labelPadding,-this.data[i][this.yValue]*this.scale - 5);
			// rotate(this.axisLabelRotation);
			// text(this.barLabelValue[i],0,0); //displaying the age groups along the bars end
			// pop();
			translate(gap+this.barWidth,0);
		}
		pop()

		pop();
	}

}