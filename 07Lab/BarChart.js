class BarChart {
	constructor(_data, _chartWidth, _chartHeight, _xPos, _yPos, _axisLineColour){
		this.data = _data;
		this.chartWidth = _chartWidth;
		this.chartHeight = _chartHeight;
		this.xPos = _xPos; 
		this.yPos = _yPos; 
		this.axisLineColour = _axisLineColour;
		this.barWidth = 10;
	}

	render(){
		push();
		translate(this.xPos, this.yPos);
		stroke(this.axisLineColour);
		line(0,0,0,-this.chartHeight);
		line(0,0,this.chartWidth,0);

		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1);
		translate(gap, 0);
		for(let i = 0; i < this.data.length; i++) {
			rect(0,0,this.barWidth,-this.data[i].Total*10);
			translate(gap+this.barWidth,0);
		}


		pop();
	}

}