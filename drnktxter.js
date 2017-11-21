class DrunkTexter{
	constructor(drunkenness = 0, contacts = [new Person()]){
		this.drunkenness = drunkenness
		this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$,?!&*".split("")
		this.record = []
		this.contacts = contacts
	}

	takeDrink(){
		this.drunkenness += 1
	}

	soberUp(){
		this.drunkenness = 0
	}

	textEx(){
		let text = "I'm Sorry"

		let scrambledText = this.scramble(text)
		this.record.push(scrambledText)

		let yourEx = this.contacts.find(function(person){ return person.name.includes("ex")}) 


		yourEx.receiveText(scrambledText)
	}

	sendText(text){
		let scrambledText = this.scramble(text)
		this.record.push(scrambledText)

		let personToText = this.contacts[Math.floor(Math.random()*this.contacts.length)]

		personToText.receiveText(scrambledText)
	}

	seeTexts(){
		return this.record
	}


	scramble(text){
		let scrambleTimes = Math.floor(Math.random()*this.drunkenness)
		let splitText = text.split("")



		for (let i=0; i < scrambleTimes; i++){
			let index = Math.floor(Math.random()*splitText.length)

			splitText[index] = this.alphabet[Math.floor(Math.random()*this.alphabet.length)]
		}

		return splitText.join("")
	}
}

class Person {
	constructor(name = "Your ex",phone = "555-555-5555") {
	    this.name = name
	    this.phone = phone
	}
	receiveText(text) {
	    console.log(`${this.name} received the following text: ${text}`)
	}
}


