let sound = new Audio('Sounds/backgroundmusic.mp3');
sound.play().catch(error => console.log('Error playing sound: ' + error));