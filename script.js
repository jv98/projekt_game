
let lever = false;
let fusitoncore = false;
let nuclerpower = false;


//ska gör en do while som ska gör en koden tills person skriver yes

alert('you were thrown into the future and you do not know where you landed in the future and all you can se is broken houses')
alert('you see a strange man lying next to a house')
speak();

function speak() {
    let talk
    do {
// spara vädert i en varibale och och gör en elese if stamtet och skriv att spelet är sluts
        talk = nicetxt("do you want to talk to the man yes/no");
        if (talk === 'yes') {
            alert('hello there this world has gone under from the last war that happened here from all of the nuclear attacks')
            alert('To save the world, you need to find the parts of the time machine and give them to me')
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
    
    const walk1 = nicetxt("do what go to the house yes/no");
 if ( walk1 === 'yes') {
    
    if (lever) {
        alert ('when you took the item the house collapsed and you cant go back there')
    } 
    else {
        partrom();
    } 
}
const walk2 = nicetxt(" do you want to enter the basement? yes/no");
 if (walk2 === 'yes') {
    if (fusitoncore) {
        alert ('when you took the item the house collapsed and you cant go back there')
    } 
    else {
        place2();
    } 
  
}
 const walk3 = nicetxt("do want enter school? yes/no");
 if (walk3 === 'yes') {
    if (nuclerpower) {
        alert ('when you took the item the house collapsed and you cant go back there')
    } 
    else {
        place3();
    } 
    
}

const walk4 = nicetxt("do have all items for the time machine")    
if ( !lever || !fusitoncore || !nuclerpower ) {
        alert(' the strange man says that, you dont have the items')
    }
 if (lever&& fusitoncore && nuclerpower && walk4 === 'yes') {

    endroom();
    break
}
} while( walk1 !== 'yes'|| walk2 !== 'yes' || walk3 !== 'yes');



function partrom() {
        alert("you enter the house next to the strange man and the only thing you can see is faint ligt in the room");
         let talk1 = nicetxt("you see a box on table do you want to put your hand into it, yes/no")
      if (talk1 === 'yes') {
        alert('you get biten by a posised spider and feel much wors')
      
      }  
       talk1 = nicetxt("you can see there is a chest on floor do whant to open it ? yes/no ")
       if ( talk1=== 'yes') {
        alert('you find gold in the chest and you take it')
      }

    talk1 = nicetxt("do you want pick upp the item? take/no")
    if (talk1 === 'take') {
        alert('you take the item on floor')
        lever = true;
        
    }  
        else (talk1 === 'no') 
            alert ('you go back to the strange man next to the house')
        
} 
function place2() {
    alert('you enter the basement of the house next to the man')
    let talk2 = nicetxt("you see a strange hole in the wall in the room do what put your hand into it? yes/no ")
   if (talk2 === 'yes' ) {
    alert('something in the hole feels hairy and you remove your hand quikly from the hole')
    talk2 = nicetxt("do want turn on the lamp yes/no")
   } else if(talk2 === 'yes'){
       alert('you try turn on the lamp nothing happens')
   }
   talk2 = nicetxt("you see a strange item on the ground do want to take it? take/no")
    if(talk2 === 'take'){
        alert('you take the item from the ground')
        fusitoncore = true;
     
   }else (talk2 === 'no')
        alert ('you go back to the strange man next too the house')
}

function place3() {
    alert('you can see different rooms thats looks like place where you study')
    let talk3 = nicetxt("do want enter one of the rooms? yes/no")
    if (talk3 === 'yes' ) {
     alert('you see a skeltons in the classroom that looks like Macbook pro')

     talk3 = nicetxt("do you want to search the kitchen? yes/no ")
    } else if(talk3 === 'yes'){
        alert('you find a old glass in sink')
    }

    talk3 = nicetxt("you see a strange item on the ground do you want to take it? take/no")
     if(talk3 === 'take'){
        alert('you take the item of ground')
        nuclerpower = true;
       
    }else (talk3 === 'no')
        alert ('you go back to the strange man next too the house')
}

function endroom() {
    alert ('the strange man puts the item on the time machine and says are you ready to travle back in time')
    alert ('you turn on the machin and you go back to 2020 and you kill a buterfly and the future has changed now')    
    alert('thank you for trying my game')
}
function nicetxt(s) {
    return prompt(s).toLocaleLowerCase();
}