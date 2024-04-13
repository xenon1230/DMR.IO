let strength1 = 100;
let strength2 = 100;

function attack(player) {
    const opponent = player === 1 ? 2 : 1;
    const attackStrength = Math.floor(Math.random() * 20) + 1; // Random strength between 1 and 20
    const currentStrength = player === 1 ? strength1 : strength2;
    
    const updatedStrength = Math.max(currentStrength - attackStrength, 0);
    
    if (player === 1) {
        strength1 = updatedStrength;
        document.getElementById('strength1').innerText = strength1;
    } else {
        strength2 = updatedStrength;
        document.getElementById('strength2').innerText = strength2;
    }
    
    if (updatedStrength === 0) {
        endGame(player);
    }
}

function endGame(winner) {
    alert(`Player ${winner} wins!`);
}
