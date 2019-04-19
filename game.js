

class Game{
	constructor(configData, players){
		this.handleMerchantCardPurchase = this.handleMerchantCardPurchase.bind(this);
		this.handlePointCardPurchase = this.handlePointCardPurchase.bind(this);
		this.gameAreas = configData;
		this.players = [];
		for( var playerI = 0; playerI < players.length; playerI++){
			this.makePlayer( players[playerI]);
		}
		this.makeCardAreas();
	}
	makePlayer( name ){
		var player = new Player(name);
		this.players.push( player );
		var domElement = player.render();
		this.gameAreas.playerArea.append(domElement);
	}
	handleMerchantCardPurchase(cardHandler, card){
		console.log('purchasing for spice cards')
		var cost = cardHandler.getCardPosition( card );
		var money = this.players[this.currentPlayer].getSpices();
		if( this.checkForValidCount( cost, money)){

		}
	}
	handlePointCardPurchase(cardHandler, card){
		console.log('purchasing for points cards')
		var cost = card.getCost();
		var money = this.players[this.currentPlayer].getSpices();
		if(this.checkForValidCount( cost, money )){
			this.players[this.currentPlayer].addCard( card );
			//this.cardHandlers.point.removeCard( card );
			cardHandler.removeCard( card );
		}
	}
	makeCardAreas(){
		this.cardHandlers = {
			merchant: new CardHandler(this.gameAreas.cards.spice, merchantCards, this.handleMerchantCardPurchase),
			point: new CardHandler(this.gameAreas.cards.city, pointCards, this.handlePointCardPurchase)
		}
	}
}










