var game = {
	words: ["test",
			"second test",
			"final test"],
	currentWord: "",
	guesses: [];
	guessCount: 0
	guessWord: [],
	winCount,
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
		if(event.keyCode < 65 || event.keyCode > 90)
			return 0;
		game.key = event.key.toLowerCase();
		game.update();
	}
}


document.onkeyup = interface.keyup;