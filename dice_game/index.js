
    // Function to generate a random number between 1 and 6
    function getRandomDiceNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Function to set the dice image source
    function setDiceImage(playerClass, diceNumber) {
        document.querySelector(playerClass).setAttribute("src", "dice_img/dice-" + diceNumber + ".png");
    }

    // Get random dice numbers for both players
    const randomNumber1 = getRandomDiceNumber();
    const randomNumber2 = getRandomDiceNumber();

    // Set dice images for both players
    setDiceImage(".img1", randomNumber1);
    setDiceImage(".img2", randomNumber2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Win";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Win"; 
    }
    else {
        document.querySelector("h1").innerHTML = "Draw"; 
    }