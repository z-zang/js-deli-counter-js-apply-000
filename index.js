var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " +line.length +" in line"); 

}

function nowServing(){
  console.log(line[0]);
  line.shift()
}