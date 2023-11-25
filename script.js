const diceButtonGenerator = document.getElementById("dice-generator");
const diceContainer = document.querySelector(".dice-container");

let dices = [];
for (let dice = 0; dice <= 6; dice++) {
	dices[dice - 1] = document.getElementById(`dice${dice}`);
}
function generateAmountOfDices() {
	const minNumber = 1;
	const maxNumber = 6;
	let randomNumber =
		Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	return randomNumber;
}

function generateDicesPicks() {
	const minNumber = 1;
	const maxNumber = 6;
	let randomNumber =
		Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	return randomNumber;
}

diceButtonGenerator.addEventListener("click", () => {
	const dicesAmount = generateAmountOfDices();
	let dicesToAdd = [];

	for (let totalDices = 0; totalDices < dicesAmount; totalDices++) {
		let dicesPicks = generateDicesPicks();
		switch (dicesPicks) {
			case 1:
				dicesToAdd.push(dices[0].cloneNode(true));
				break;
			case 2:
				dicesToAdd.push(dices[1].cloneNode(true));
				break;
			case 3:
				dicesToAdd.push(dices[2].cloneNode(true));
				break;
			case 4:
				dicesToAdd.push(dices[3].cloneNode(true));

				break;
			case 5:
				dicesToAdd.push(dices[4].cloneNode(true));

				break;
			case 6:
				dicesToAdd.push(dices[5].cloneNode(true));
				break;
			default:
				break;
		}
	}
    diceContainer.innerHTML = ""
    for(let dice = 0; dice < dicesToAdd.length; dice++){
        const diceElement = dicesToAdd[dice]
        diceElement.style.display = "flex"
        diceContainer.appendChild(diceElement);
    }

});
