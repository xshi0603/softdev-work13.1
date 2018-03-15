var c = document.getElementById("svgg");
var cbutton = document.getElementById("cbutton");
var jbutton = document.getElementById("jbutton");

var createCircle = function (x, y, r, color) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", r);
	c1.setAttribute("fill", color);
	return c1;

};

var cn_scores = [11, 8, 10];
var jp_scores = [4, 5, 4];

var c1 = createCircle(100, 100, 10, "gold");
var c2 = createCircle(275, 275, 10, "gray");
var c3 = createCircle(450, 450, 10, "brown");

c.append(c1);
c.append(c2);
c.append(c3);

var change = function() {

    var circles = d3.selectAll("circle");
    circles.data(cn_scores);
    circles.attr("r", function(d) {
	return 4 * d;
	});
	
};

var change2 = function() {

    var circles = d3.selectAll("circle");
    circles.data(jp_scores);
    circles.attr("r", function(d) {
	return 4 * d;
	});
	
};

change();

cbutton.addEventListener("click", change);
jbutton.addEventListener("click", change2);