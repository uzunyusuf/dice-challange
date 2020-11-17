// 1-6 arasinda randomly sekilde sayi veren fonksiyon.
function randomNumber () {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(randomNumber());

// DOM kullanilarak HTML dosyamiza erisim sagladik. Once butona daha sonra zarlara erisim sagladik.
let startButton = document.getElementById('start');
let dice1 = document.getElementById('dice_A');
let dice2 = document.getElementById('dice_B');

// Butona .onclick methodu ekleyerek tiklanabilir hale getirdik. Daha sonra 17. ve 18. satirlarda images dosyamiza, randomNumberi ilettik. 

startButton.onclick = () => {
  let randomNumber1 = randomNumber();
  let randomNumber2 = randomNumber();
  dice1.src = 'images/dice'+randomNumber1+'.png';
  dice2.src = 'images/dice'+randomNumber2+'.png';
  
  // If-Else kullanarak kazanani belirledik. Sonuc 3 farkli sekilde cikacacagi icin 3 durumlu if-else yazdik. .classname methodlari ile css dosyasinda bulunan koda ulastik.
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!!!'
    document.getElementById('player_1').className = 'player-win';
    document.getElementById('player_2').className = ''; 
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!!!';
    document.getElementById('player_2').className = 'player-win';
    document.getElementById('player_1').className = '';
  } else {
    document.querySelector('h1').innerHTML = 'Draw !!!'
    document.getElementById('player_1').className = 'player-win';
    document.getElementById('player_2').className = 'player-win';
  }
} 

// son.