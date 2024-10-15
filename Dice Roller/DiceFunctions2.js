function createDice(number) {
    const dotPositionMatrix = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80] 
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    }
}
const dice = document.createElement("div");
dice.classList.add("dice-shape-square");

for (const dotPosition of dotPositionMatrix[number]) {
    const dot = document.createElement("div");

    dot.classList.add("dice-dot-square");
    
    dice.appendChild(dot);

}
return dice;


console.log(createDice(1));
