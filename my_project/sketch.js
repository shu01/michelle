var One = ["I","you","she","he","the","went","go","run","skip","saw","sang","jump","pick","sick","kick","walk","mock","love","skin"];
var Two = ["flower","fetish","clothing","baby","backpack","blanket","tennis","bucket","iPhone","using","jumping","design","washing","process","shoulder","leather","classic"];
var Three = ["directory",,"disestablish","indecisive","insoluble","mandatory","obligation","obviously","overwhelming","population","television","similitude"];
var Four = ["directory","disestablish","indecisive","insoluble","mandatory","obligation","obviously","overwhelming","population","television","similitude"];
var Five = ["assimilation","conscientiousness","creativity","diagnostician","electricity","humiliation","mathematical","opportunity","popularity","similarity","incredulity","pediatrician","perpendicular","unbelievable","university"];
var Six = ["personification","responsibility","revolutionary","identification","humanitarian"];
var Seven = ["individuality","oversimplification","intellectuality","adventuresomeness","imponderability"];
var Words = {1:One,2:Two,3:Three,4:Four,5:Five,6:Six,7:Seven};
var l1 = "this is a haiku";
var l2 = "I am a generator ";
var l3 = "that does not make sense";
var fSize = 12;
var col = 0;
var x = -1000;
var y = -1000;
var lx = 0;
var ly = 0;
var px = 0;
var py = 0;


function generate(numofSyl){
	var i = 0;
	var wordString = [];
	while (i < numofSyl){
		var SylLeft = numofSyl - i;
		var ranSylNum = (Math.floor(Math.random() * SylLeft))+1;
		var selWord = getWord(ranSylNum);
		i += ranSylNum;
		console.log(selWord);
		wordString.push(selWord);
	}
	return (wordString.join(" "));
}
function getWord(ranSylNum){
	var selectedList = Words[ranSylNum];
	var wordNum = (Math.floor(Math.random() * ((selectedList.length)-1)));
	console.log(ranSylNum);
	return selectedList[wordNum];
}


function setup() {
	createCanvas(windowWidth, windowHeight);
  	background(255);
	textFont("Arial");
	textAlign(CENTER, CENTER);
	text(l1,width/2,(height/2 -fSize));
	text(l2,width/2,height/2);
	text(l3,width/2,(height/2 +fSize));

}

function draw() {
	textSize(fSize)
	fill(col);
	text(l1,x,(y -fSize));
	text(l2,x,y);
	text(l3,x,(y +fSize));
	fill(255);
	stroke(255);
	var targetX =mouseX;
	lx += (targetX - lx) * 0.3;
	var targetY =mouseY;
	ly += (targetY - ly) * 0.3;
	var weight = dist(lx,ly,px,py);
	strokeWeight(weight*1.5);
	line(lx,ly,px,py);
	py = ly;
	px = lx;
	noStroke();
}

function mousePressed(){
	fSize = (Math.floor(Math.random() * 50)+10)
	col = (Math.floor(Math.random() * 255))
	x = (Math.floor(Math.random() * width))
	y = (Math.floor(Math.random() * height))
	l1 = generate(5);
	l2 = generate(7);
	l3 = generate(5);

}

