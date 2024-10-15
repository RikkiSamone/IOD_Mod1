document.getElementById("rollButton").addEventListener("click", function () {
  const diceType = parseInt(document.getElementById("dice-select").value);
  const diceValue = Math.floor(Math.random() * diceType) + 1; // Generate a number based on selected dice type
  document.getElementById("dice").textContent = diceValue; // Display the result
  document.getElementById(
    "result"
  ).textContent = `You rolled a ${diceValue} on a d${diceType}!`; // Show the result message
});
