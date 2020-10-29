
let lever = false;
let fusitoncore = false;
let nuclerpower = false;


//ska gör en do while som ska gör en koden tills person skriver yes

alert('hello traveler big disaster has happened and you need solve this big problem')
alert('you see a strange man lying next to house')
speak();

function speak() {
    let talk
    do {
// spara vädert i en varibale och och gör en elese if stamtet och skriv att spelet är sluts
        talk = prompt("do you want talk to the man yes/no");
        talk = talk.toLowerCase();
        if (talk === 'yes') {
            alert('hello there this world has gone under from last war that happened here from all of the nuclear attacks')
            alert('To save the world, you need to find the part for the time machine and give them also when you have found all the parts')
        }
        else if (talk === 'no') {
            alert('should talk to the man')
        }
    } while (talk !== 'yes');

}
let walk1
let walk2
let walk3
let walk4

do {
    
    const walk1 = prompt("do what go to house yes/no");
 if ( walk1 === 'yes') {
    
    if (lever) {
        alert ('when you took the item the house collapsed and you cant go back there')
    } 
    else {
        partrom();
    } 
}
const walk2 = prompt("house2");
 if (walk2 === 'yes') {
    if (fusitoncore) {
        alert ('when you took the item the house collapsed and you cant go back there')
    } 
    else {
        place2();
    } 
  
}
 const walk3 = prompt("house3");
 if (walk3 === 'yes') {
    if (nuclerpower) {
        alert ('when you took the item the house collapsed and you cant go back there')
    } 
    else {
        place3();
    } 
    
}

const walk4 = prompt("do have all items for time machine")    
if ( !lever || !fusitoncore || !nuclerpower ) {
        alert(' the strange man saye that, you dont have the itemns')
    }
 if (lever&& fusitoncore && nuclerpower && walk4 === 'yes') {

    endroom();
    break
}
} while( walk1 !== 'yes'|| walk2 !== 'yes' || walk3 !== 'yes');



function partrom() {
        alert("you ennter house next to strange man and onley thing you can see is faint ligt in rooms");
         let talk1 = prompt("you see box on table do want to put hand in too it, type yes/no")
      if (talk1 === 'yes') {
        alert('you get biten by a posised spider and fell much worst')
      
      }  
       talk1 = prompt("you can see there a chest on floor do whant too open it ? yes/no ")
       if ( talk1=== 'yes') {
        alert('you find gold in chest and you take it')
      }
    talk1 = prompt("test holder")
     if (talk1=== 'yes'){
          alert('t')
    }
    talk1 = prompt("do what take upp the item? take/no")
    if (talk1 === 'take') {
        lever = true;
        
        
        
    }  
        else (talk1 === 'no') 
            alert ('you go back to the strange man next too the house')
        
} 
function place2() {
    let talk2 = prompt("text holder")
   if (talk2 === 'yes' ) {
    alert('t')
    talk2 = prompt("text holder")
   } else if(talk2 === 'yes'){
       alert('t')
   }
   talk2 = prompt("you strange item on the ground do what take it?")
    if(talk2 === 'take'){
        fusitoncore = true;
        //take item här
   }else (talk2 === 'no')
            alert('you go back to the strange man')
}

function place3() {
    let talk3 = prompt("text holder")
    if (talk3 === 'yes' ) {
     alert('t')
     talk3 = prompt("text holder")
    } else if(talk3 === 'yes'){
        alert('t')
    }
    talk3 = prompt("you strange item on the ground do what take it?")
     if(talk3 === 'take'){
        nuclerpower = true;
         //take item här
    }else (talk3 === 'no')
             alert('you go back to the strange man')
}

function endroom() {
    alert ('you turn on machin and you go back to 2020 and you killa buterfly and ')
    
}
