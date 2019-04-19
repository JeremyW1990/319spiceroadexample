
$(document).ready( startApp );

var game;
function startApp(){
	var gameAreas = {
		playerArea: $('.playerArea'),
		cards: {
			city: $('.cityCards'),
			spice: $('.spiceCards')
		}
	}
	game = new Game(gameAreas, ['Jeremy','Jennifer','Paulina']);
}