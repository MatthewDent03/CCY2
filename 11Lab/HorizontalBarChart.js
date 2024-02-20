class HorizontalBarChart {
	constructor(obj){
		this.data = obj.data;
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos; 
		this.yPos = obj.yPos; 

		this.axisLineColour = obj.axisLineColour;
		this.labelColour = obj.labelColour;

		this.barWidth = obj.barWidth;
		this.barColour = obj.barColour;

		this.yValue = obj.yValue;
		this.xValue = obj.xValue;


		this.labelPadding = obj.labelPadding;
		this.labelRotation = obj.labelRotation;
		this.yaxisLabelRotation = obj.yaxisLabelRotation;
		this.xaxisLabelRotation = obj.xaxisLabelRotation;

		this.textSizing = obj.textSizing;
		this.tickTextSize = obj.tickTextSize;
		this.titleSize = obj.titleSize;
		this.textSizeSmall = obj.textSizeSmall;

		this.titleLabel = this.data[0][obj.titleLabel];
		this.yAxisLabel = this.data[0][obj.yAxisLabel];
		this.xAxisLabel = obj.xAxisLabel;

		this.barLabelValue = this.data.map(d=> d[obj.barLabelValue]);
		// console.log(this.barLabelValue);

		this.numTicks = obj.numTicks;
		this.tickColour = obj.tickColour;

		this.maxValue = max(this.data.map((d) => d[this.yValue]));
		this.scale = this.chartHeight / this.maxValue;
		// console.log(this.scale);
	}

	render(){
		
		push();
		translate(this.xPos, this.yPos);
		
		textAlign(LEFT, BOTTOM);
		fill(255);
		textSize(this.titleSize);
		textFont(fontBold);
		text(this.titleLabel, -20, -this.chartHeight - 130, 380);

		push();
		rotate(this.yaxisLabelRotation);
		text("Value as " + this.xAxisLabel + "Throughout the " + this.xValue +"s", this.chartWidth/2 - 50, this.chartHeight/this.chartHeight - 230, 300);
		pop();

		text("Value as " + this.yAxisLabel + " rounded", this.chartWidth/2-50, this.chartHeight/this.chartHeight + 60, 250);


		fill(255);
		stroke(this.axisLineColour);
		line(0,0,0,-this.chartHeight);
		line(0,0,this.chartWidth,0);
		let xLabels = this.data.map(d => d[this.xAxisLabel]);


		for(let i = 0; i < this.numTicks; i++){
			push();
			translate(-(i*(-this.chartHeight/this.numTicks)),5)
			stroke(this.tickColour);
			line(0,0,0,-5)
			pop();
		};

		for(let i = 0; i < 1000; i++){
			if(this.maxValue%this.numTicks == 0){
				break;
			} else {
				this.maxValue =this.maxValue+1;
			}
		}
		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1);
		
		let yLabelValues = this.data.map(row => row[this.yValue]);
		yLabelValues.sort((a,b)=>a-b);


		for(let i = 0; i < this.numTicks; i++){
			push();
			fill(this.tickColour)
			stroke(this.axisLineColour);
			rotate(this.xaxisLabelRotation);
			textSize(this.tickTextSize)
			noStroke();
			translate(i*(this.chartWidth/this.numTicks),this.labelPadding*1.5)
			text(yLabelValues[i],-gap,-10);
			pop();
		}
		
		push()
		noStroke();
		translate(gap, 0);
		for(let i = 0; i < this.data.length; i++) {
			fill(this.barColour);
			rect(0,0,this.data[i][this.yValue]*this.scale,-this.barWidth);   //string to property use [] and remove dot.
			// noStroke();
			fill(this.labelColour);
			textFont(fontReg);
			if (this.labelRotation == 0){
				textAlign(CENTER, CENTER);
			} else {
				textAlign(LEFT, CENTER);
			}
			

			textSize(this.textSizing);

			push();
			textSize(this.tickTextSize);
			fill(this.tickColour);
			textFont(fontBold);
			stroke(this.labelColour);
			translate(-this.chartWidth/2, -this.labelPadding+this.barWidth/1.5);

			noStroke();
			textAlign(LEFT, CENTER);
			text(xLabels[i], 30, 0);
			pop();
			
			push();
			stroke(this.axisLineColour);
			translate(this.labelPadding + this.data[i][this.yValue] * this.scale, this.barWidth/2);
			// rotate(this.labelRotation);
			noStroke();
			text(this.data[i][this.xValue], -this.barWidth, -this.barWidth);
			pop();

			translate(0, -(gap + this.barWidth));
		}
		pop()

		pop();
	}

}