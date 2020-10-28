
let lever = false;
let fusitoncore = false;
let nuclerpower = false;


//ska gör en do while som ska gör en koden tills person skriver yes

alert('hello traveler big disater has happen and you need solve this big problem')
alert('you see man in corner of the one of huse it look like it was runw donw')
speak();

function speak() {
    let talk
    do {
// spara vädert i en varibale och och gör en elese if stamtet och skriv att spelet är sluts
        talk = prompt("do what talk too the man");
        talk = talk.toLowerCase();
        if (talk === 'yes') {
            alert('hello there this wolrd whent too ruine the last war to revert all of this you need to find the time machin')
            alert('to find the time machin you need finde som part to repair machin but the part is scaterd all over the place')
        }
        else if (talk === 'no') {
            alert('should talk to the man')
        }
        else {
            alert('hint say yes')
        }
    } while (talk !== 'yes');

}
let walk1
let walk2
let walk3
let walk4

do {
 
    const walk1 = prompt("do what go to house");
 if ( walk1 === 'yes') {
    
    if (lever) {
        alert ('fell like i got item from here')
    } 
    else {
        partrom();
    } 
}
const walk2 = prompt("house2");
 if (walk2 === 'yes') {
    place2();
}
 const walk3 = prompt("house3");
 if (walk3 === 'yes') {
    place3();
}
const walk4 = prompt("end game")    
if ( !lever || !fusitoncore || !nuclerpower ) {
        alert('you dont have the itemns')
    }
 if (lever&& fusitoncore && nuclerpower && walk4 === 'yes') {

    endroom();
    break
}
} while( walk1 !== 'yes'|| walk2 !== 'yes' || walk3 !== 'yes');



function partrom() {
        alert("you ennter");
         alert('you walk in too huse next to man you can see onley see darknes')
         let talk1 = prompt("test holder")
      if (talk1 === 'yes') {
        alert('t')
      } 
       talk1 = prompt("test holder")
       if ( talk1=== 'yes') {
        alert('t')
      }
      talk1 = prompt("test holder")
       if (talk1 === 'yes') {
        alert('t')
    }
    talk1 = prompt("test holder")
     if (talk1=== 'yes'){
          alert('t')
    }
    talk1 = prompt("do what take upp the item")
    if (talk1 === 'take') {
        lever = true;
        fusitoncore = true;
        nuclerpower = true;
        
    }  
        else (talk1 === 'no') 
            alert ('you wake back to text holder')
        
} 
function place2() {
   if (condition) {
       
   } else if(walk2){
       
   }
   else if(walk2){

   }
}

function place3() {

}

function endroom() {
    alert ('game is done')
    
}
