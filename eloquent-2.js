//Looping a triangle exercise
var triangles = "#";
for (var i = 0; i < 7; i++) {
    console.log(triangles);
    triangles += "#";
}

// I spent one hour on the last line of code to make it work. 

//FIZZBUZZ
var number = 100;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else if (i %  3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ")
    } else {
        console.log(i)
    }
}

//Chessboard
var square = "";
for(var i = 0; i < 8; i++){
 for(var a = 0; a < 8; a++){
  square += (a % 2) == (i % 2) ? " " : "#";
 }
 square += "\n";
}


