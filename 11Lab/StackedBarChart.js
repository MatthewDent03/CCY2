class StackedBarChart {
	constructor(obj){ //Initialising the constructor within the barchart class. Declaring variables that are called within the file and assigning them an object from the sketch.js file.
		this.data = obj.data;   //declaring the variables required for positioning and measurements
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos; 
		this.yPos = obj.yPos; 
		//declaring the colour variables for the objects that are defined within the sketch.js file
		this.axisLineColour = obj.axisLineColour;
		this.labelColour = obj.labelColour;
		this.barColour = obj.barColour;
		//declaring the barWidth and assigning it the object within the sketch.js
		this.barWidth = obj.barWidth;
		//declaring the data variables which are set to the data columns within the sketch.js file
		this.yValues = obj.yValues;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		this.zValue = obj.zValue;
		console.log()

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

		this.yAxisLabel = obj.yAxisLabel;
		this.xAxisLabel = obj.xAxisLabel;
		//mapping the data to create a separate list of the object properties 
		this.barLabelValue = this.data.map(d=> d[obj.barLabelValue]);
		// console.log(this.barLabelValue);
		//declaring the tick properties
		this.numTicks = obj.numTicks;
		this.tickColour = obj.tickColour;
		//creating a variable assigned the max of the mapped data of the yValue
		this.maxValue = max(this.data.map((d) => d[this.zValue]));
		//creating the scale using the maxValue
		this.scale = this.chartHeight / this.maxValue;

		this.type = obj.type;
		this.stackedPos = obj.stackedPos;
		// console.log(this.yValue);

	}

	render(){
		noLoop();
		push();
		//translating the chart from the origin to the center 
		translate(this.xPos, this.yPos);
		//creating text with properties that are declared within the sketch.js file
		textAlign(LEFT, BOTTOM);
		fill(255);
		textSize(this.titleSize);
		textFont(fontBold);
		text(this.titleLabel, 0, -this.chartHeight-160, 480);

		if(this.stackedPos == "REG"){
			push();//pushing to prevent the rotate function from affecting other parts of code
			rotate(this.axisLabelRotation);//using strings to create the labels for the axis pulling the property name from the object.
			text("Value as " + this.yAxisLabel, this.chartWidth/2 - 50, this.chartHeight/this.chartHeight - 120, 250);
			pop();

			text("Value as " + this.xAxisLabel, this.chartWidth/2-50, this.chartHeight/this.chartHeight + 120, 200);
		}
		else if(this.stackedPos == "HZT"){
			push();//pushing to prevent the rotate function from affecting other parts of code
			rotate(this.axisLabelRotation);//using strings to create the labels for the axis pulling the property name from the object.
			text("Value as " + this.xAxisLabel, this.chartWidth/2 - 100, this.chartHeight/this.chartHeight - 100, 250);
			pop();

			text("Value as " + this.yAxisLabel, this.chartWidth/2-50, this.chartHeight/this.chartHeight + 80, 200);
		}

			fill(255);//creating the chart x and y axis lines
			stroke(this.axisLineColour);
			line(0,0,0,-this.chartHeight);
			line(0,0,this.chartWidth,0);

			if(this.stackedPos == "REG"){

			//creating the number of ticks along the desired axis
			for(let i = 0; i < this.numTicks; i++){
				push();
				translate(0,i*(-this.chartHeight/this.numTicks))
				stroke(this.tickColour);
				line(0,0,-5,0)
				pop();
			};
			//declaring a tickValue to find the values to be displayed and rounded using parseFloat to the axis
			// console.log(this.maxValue);


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
		}
		else if(this.stackedPos == "HZT"){
			for(let i = 0; i < this.numTicks; i++){
				push();
				translate(-(i*(-this.chartHeight/this.numTicks)),5)
				stroke(this.tickColour);
				line(0,0,0,-5)
				pop();
			};

			let tickValue= this.maxValue/this.numTicks
			for(let i = 0; i < this.numTicks; i++){ //initialising a loop to find the number of bars required
				push();
				fill(this.tickColour)
				stroke(this.axisLineColour);
				rotate(this.xaxisLabelRotation);
				textSize(this.tickTextSize)
				noStroke();
				translate(i*(this.chartWidth/this.numTicks),this.labelPadding*1.5)  //translating the labels to align with the ticks
				text(parseFloat(i*tickValue).toFixed(0),-10,0);
				//text(yLabelValues,gap,0);
				pop();
			}
		}
		// line(0,0,-10,0)
		// line(0,10,0,-10)
		// line(0,-10,-10,-10)
		noStroke(); //Declaring a gap variable.
		if (this.stackedPos == "REG"){

			let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1);
			let totalAdded = 0;
			push()
			let xLabels = this.data.map(d => d[this.xValue]); //assigned the mapped values of the property xValue to the variable xLabels
				translate(gap, 0); //translating the origin of the bars by the gap
				for(let i = 0; i < this.data.length; i++){
					stroke(0);
					push();
					for(let j = 0; j < this.yValues.length; j++) {
						let addedValues = parseFloat(this.data[i][this.yValues[j]]);
						totalAdded += addedValues
						fill(this.barColour[j])
						rect(0,0,this.barWidth,-this.data[i][this.yValues[j]] * this.scale);
						console.log(this.scale)
						push();
						textFont(fontBold);
						fill(this.labelColour)
						textSize(this.textSizeSmall);
						translate(this.labelPadding,-this.data[i][this.yValues[j]]*this.scale);
						text(this.data[i][this.yValues[j]],-10,20); //displaying the age groups along the bars end
						pop();
					}
					console.log(this.scale)
					pop();
					translate(0,this.data[i][this.yValues]);
				

					noStroke();
					fill(this.labelColour);
					textFont(fontReg);
					if (this.labelRotation == 0){
						textAlign(CENTER, CENTER);
					} else {
						textAlign(LEFT, CENTER);
					}

					textSize(this.textSizing);

					push();//pushing to prevent the translate from affecting other code
					textFont(fontBold);
					translate(this.barWidth/2, this.labelPadding);
					rotate(this.labelRotation);
					fill(this.tickColour)
					noStroke();
					text(xLabels[i], 0, 10); //displaying the xValues along the axis 
					pop();
					translate(gap+this.barWidth,0); //translating the bars origin
				}
				pop()
			if (this.type == "REG"){
				//no change
			
			} else if (this.type == "AVG")
			{
				let average = totalAdded / (this.data.length * this.yValues.length);	
				console.log(average);
				stroke(255,0,0);
				line(0, -average * this.scale, this.chartWidth, -average * this.scale);
				pop()
			}; 
		} else if(this.stackedPos == "HZT") {
			let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1);
			let totalAdded = 0;
			push()
			let xLabels = this.data.map(d => d[this.xValue]); //assigned the mapped values of the property xValue to the variable xLabels
				translate(1,-1); //translating the origin of the bars by the gap
				for(let i = 0; i < this.data.length; i++){
					stroke(0);
					push();
					for(let j = 0; j < this.yValues.length; j++) {
						let addedValues = parseFloat(this.data[i][this.yValues[j]]);
						totalAdded += addedValues
						fill(this.barColour[j])
						rect(0,0,this.data[i][this.yValues[j]] * this.scale,-this.barWidth);
						console.log(this.scale)
						push();
						textFont(fontBold);
						fill(this.labelColour)
						textSize(this.textSizeSmall);
						translate(this.data[i][this.yValues[j]]*this.scale,-this.labelPadding*this.scale);
						text(this.data[i][this.yValues[j]],-10,20); //displaying the age groups along the bars end
						pop();
					}
					console.log(this.scale)
					pop();
					translate(0,this.data[i][this.yValues]);
				

					noStroke();
					fill(this.labelColour);
					textFont(fontReg);
					if (this.labelRotation == 0){
						textAlign(CENTER, CENTER);
					} else {
						textAlign(LEFT, CENTER);
					}

					textSize(this.textSizing);

					push();//pushing to prevent the translate from affecting other code
					textFont(fontBold);
					textSize(this.tickTextSize);
					translate(this.labelPadding,this.barHeight);
					fill(this.tickColour)
					noStroke();
					text(xLabels[i], -60, -15); //displaying the xValues along the axis 
					pop();
					translate(0,-(gap+this.barWidth)); //translating the bars origin
				}
				pop()
			if (this.type == "REG"){
				//no change
			
			} else if (this.type == "AVG")
			{
				if(this.stackedPos == "REG"){
					let average = totalAdded / (this.data.length * this.yValues.length);	
					console.log(average);
					stroke(255,0,0);
					line(0, -average * this.scale, this.chartWidth, -average * this.scale);
					pop()
				}
				else if(this.stackedPos == "HZT"){
					let average = totalAdded / (this.data.length * this.yValues.length);	
					console.log(average);
					stroke(255,0,0);
					line(average * this.scale,0 , average * this.scale, -this.chartHeight );
					pop()
				}
			}; 
		}
		pop();
	}

}