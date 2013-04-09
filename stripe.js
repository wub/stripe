// Stripe
// Jarrod Mosen
// Working on turning this into a proper... thing

var canvas  = document.createElement("canvas"),
    context = canvas.getContext("2d"), x;

canvas.width  = 1000;
canvas.height = 50;

// random hex vals from kuler
var colours = [
	'467F71', 'D3F263', '3E8C84',
	'296B73', 'E52738', 'FEE63F',
	'3BD2CC', '2BA6E8', 'B4D455'
];

for (x = 0; x < canvas.width; x += 1) {

	var rand = Math.floor(Math.random() * 55);

	// grab random colour. shove it in.
	context.fillStyle = "#" + colours[Math.floor(Math.random() * colours.length)];
	context.fillRect((x * rand), 0, (50 * rand), 3);
}

// convert into data url and apply as css
document.body.style.background = "url(" + canvas.toDataURL("image/png") + ") repeat-x";
