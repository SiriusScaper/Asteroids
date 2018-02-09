var game = {
	words: ["test",
			"second test",
			"final test"],
	currentWord: "",
	guesses: [];
	guessCount: 0
	guessWord: [],
	key: null,

	begin: function(){
		this.guesses = 10;
		this.setWord();
	},

	setWord: function(){
		this.currentWord = this.words[Math.floor(Math.random()*this.words.length)];
		for(var i = 0; i < currentWord.length; i++){
			if(this.currentWord[i] == " "){
				this.guessWord[i] = " ";
			}
			else
				this.guessWord[i] = "_";
		}

	}

	update: function(){
		//update the game
	}

}

var interface = {
	keyup: function(event){
		game.key = event.key;
		game.update();
	}
}


document.onkeyup = interface.keyup;