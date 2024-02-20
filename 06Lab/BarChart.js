class BarChart {
	constructor(_chartWidth, _chartHeight, _xPos, _yPos){
		this.chartWidth = _chartWidth;
		this.chartHeight = _chartHeight;
		this.xPos = _xPos; 
		this.yPos = _yPos; 
	}

	render(){
		rect(this.xPos, this.yPos, this.chartWidth, this.chartHeight);
	}

}