

class Player{
	constructor(name){
		this.name = name;
		this.spiceCounts = {
			yellow: 0,
			red: 0,
			green: 0,
			brown: 0
		}
		this.areas = {
			container: null,
			name: null,
			spiceCounts: null,
			availableCards: null
		}
	}
	displaySpiceCounts(){
		var output = [];
		for( var key in this.spiceCounts){
			output.push( $("<div>",{
				text: key+':'+this.spiceCounts[key]
			}))
		}
		return output;
	}
	render(){
		this.areas.container = $("<div>",{
			'class': 'playerContainer'
		})
		this.areas.name = $("<div>",{
			'class': 'playerName',
			text: this.name
		})
		this.areas.spiceCounts = $("<div>",{
			'class': 'spiceCounts',
			html: this.displaySpiceCounts()
		})
		this.areas.availableCards = $("<div>",{
			class: 'cardArea'
		})
		this.areas.container.append(this.areas.name,this.areas.spiceCounts,this.areas.availableCards);
		return this.areas.container;
	}
}







