var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  
  return ("Welcome, " + name + ". You are number " + line.length + " in line"); 

}

function nowServing(){
  if (line.length == 0){
    return "There is nobody waiting to be served!"
  } else {
  console.log(line[0]);
  line.shift();
  }
}