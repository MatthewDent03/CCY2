class BarChart {
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
		this.axisLabelRotation = obj.axisLabelRotation;
		this.textSizing = obj.textSizing;
		this.tickTextSize = obj.tickTextSize;
		this.titleSize = obj.titleSize;
		this.textSizeSmall = obj.textSizeSmall;

		this.titleLabel = this.data[0][obj.titleLabel];
		this.yAxisLabel = this.data[0][obj.yAxisLabel];
		this.xAxisLabel = obj.xAxisLabel;

		this.barLabelValue = this.data.map(d=> d[obj.barLabelValue]);
		console.log(this.data);

		this.numTicks = obj.numTicks;
		this.tickColour = obj.tickColour;

		this.maxValue = max(this.data.map(d => d[this.yValue]));
		this.scale = int(this.chartHeight/this.maxValue);
	}

	render(){
		
		push();
		translate(this.xPos, this.yPos);
		
		textAlign(LEFT, BOTTOM);
		fill(255);
		textSize(this.titleSize);
		textFont(fontBold);
		text(this.titleLabel, 0, -this.chartHeight - 130, 480);

		push();
		rotate(this.axisLabelRotation);
		text("Value as " + this.yAxisLabel, this.chartWidth/2 - 50, this.chartHeight/this.chartHeight - 50, 200);
		pop();

		text("Value as " + this.xAxisLabel, this.chartWidth/2-50, this.chartHeight/this.chartHeight + 120, 200);


		fill(255);
		stroke(this.axisLineColour);
		line(0,0,0,-this.chartHeight);
		line(0,0,this.chartWidth,0);

		for(let i = 0; i < this.numTicks; i++){
			push();
			translate(0,i*(-this.chartHeight/this.numTicks))
			stroke(this.tickColour);
			line(0,0,-5,0)
			pop();
		};

		for(let i = 0; i < 1000; i++){
			if(this.maxValue%this.numTicks == 0){
				break;
			} else {
				this.maxValue =this.maxValue+1;
			}
		}

		for(let i = 0; i < this.numTicks; i++){
			push();
			noStroke();
			fill(this.tickColour);
			textFont(fontBold);
			textSize(this.tickTextSize)
			textAlign(RIGHT, CENTER);
			translate(0,i*(-this.chartHeight/this.numTicks))
			text(i*(this.maxValue/5),-10,0);
			pop();
		}
		// line(0,0,-10,0)
		// line(0,10,0,-10)
		// line(0,-10,-10,-10)

		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1);
		push()
		let xLabels = this.data.map(d => d[this.xValue]);
		translate(gap, 0);
		for(let i = 0; i < this.data.length; i++) {
			fill(this.barColour);
			rect(0,0,this.barWidth,-this.data[i][this.yValue]*this.scale);   //string to property use [] and remove dot.
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
			stroke(this.axisLineColour);
			translate(this.barWidth/2, this.labelPadding);
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