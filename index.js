var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " +line.length +" in line"); 

}

function nowServing(){
  if (line.length == 0){
    return
  }
  console.log(line[0]);
  line.shift();
}