var game = {
	words: ["test",
			"second test",
			"final test"],
	currentWord: "",
	guesses: [],
	guessCount: 0,
	guessWord: [],
	winCount,
	key: null,

	begin: function(){
		this.setWord();
		this.winCount = 0;
	},
	
	setWord: function(){
		this.guessCount = 10;
		this.currentWord = this.words[Math.floor(Math.random()*this.words.length)];
		for(var i = 0; i < currentWord.length; i++){
			if(this.currentWord[i] == " "){
				this.guessWord[i] = " ";
			}
			else
				this.guessWord[i] = "_";
		}

	},

	update: function(){
		//update the game
		if(this.guesses.indexOf(key) != -1){
			return 0;
		} 
		var index = this.currentWord.indexOf(key);
		if (index === -1) {
			--this.guessCount;
		} else {
			this.guessWord[index] = this.currentWord[index];
		}
		if (this.currentWord === this.guessWord.join('')) {
			++this.winCount;
			this.setWord();
		} else if(this.guessCount <= 0) {
		}
	},
	// need a print function
		// call interface print function
		// each var changed that matches a dom element (div with ID)
		// call at end of setword and update

}

var interface = {
	keyup: function(event){
		if(event.keyCode < 65 || event.keyCode > 90)
			return 0;
		game.key = event.key.toLowerCase();
		game.update();
	}
}
// function for printing to inner html taking html and string as arguements

document.onkeyup = interface.keyup;