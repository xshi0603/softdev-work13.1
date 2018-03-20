var svg = document.getElementById("svgg");

var createCircle = function (x, y, r, color) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", r);
	c1.setAttribute("fill", color);
	return c1;

};

var data = [
	    [1.7, 4], [3.3, 8], [5, 13], [6.7, 20], [8.3, 28], [10, 39],
	    [11.7, 53], [13.3, 68], [15, 86], [16.7, 106] ];

var plot = function() {
    var container = d3.select("svg");
    var circles = container.selectAll("circle").data(data).enter();    
    circles.append("circle")
    .attr("cx", function(d) { return 27 * d[0] + 40; })
    .attr("cy", function(d) { return 465 - d[1] * 4; })
    .attr("r", 10)
    .attr("fill", "pink");
    svg.append(circles);
};

plot();