

class Card{
	constructor(data, clickCallback){
		this.data = data;
		this.clickCallback = clickCallback;
		this.handleClick = this.handleClick.bind(this);
		this.domElements = {
			container: null,
			cost: null,
			yields: null
		}
	}
	displaySpiceCounts(amounts){
		var output = [];
		for( var key in amounts){
			output.push( $("<div>",{
				text: key+':'+amounts[key]
			}))
		}
		return output;
	}
	handleClick(){
		debugger;
		console.log('handling click in card');
		this.clickCallback( this );
	}
	render(){
		this.domElements.container = $("<div>",{
			'class': 'cardContainer',
			on: {
				click: this.handleClick
			}
		})
		this.domElements.cost = $("<div>",{
			'class': 'cardCost',
			html: this.displaySpiceCounts(this.data.cost)
		})
		this.domElements.yields = $("<div>",{
			'class': 'yields',
			html: this.displaySpiceCounts(this.data.yields)
		})
		this.domElements.container.append(this.domElements.cost,this.domElements.yields);
		return this.domElements.container;
	}
}