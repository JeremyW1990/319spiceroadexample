
class CardHandler{
	constructor(containerDom, cardData, cardClickCallback){
		this.containerDom = containerDom;
		this.handleCardClick = this.handleCardClick.bind(this);
		for( var i = 0; i < cardData.length; i++){
			this.makeCard( cardData[i], this.handleCardClick );
		}
	}
	handleCardClick( clickedCard ){
		console.log('card handler receiving click from card');
		console.log(clickedCard);
		this.purchaseCallback( this, clickedCard );
	}
	changeCardClickHanlder( newHandler ){
		this.carcClickCallback = newHandler
	}
	getCostFromClickedCard(){

	}
	getCostFromCardPosition(){

	}
	makeCard( cardData ){
		var card = new Card( cardData, this.handleCardClick );
		var cardDom = card.render();
		this.containerDom.append(cardDom);
	}
}