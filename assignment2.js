// Question 1

function printInt(n){
	for(var i = 1,i<=n;i++){
	console.log(i);
		
	}
}

// printInt(30);



// Question 2

function printIntRev(n){
	for(var i=n;i>=1;i++)
		console.log(i);
		
	}	
	
}();

//printIntRev(10)

// Question 3
 function checkInput(x){
 	// check if x is a number or a string or a boolean
//  	if(typeof x == 'number'){
//  		return 'number';
//  	} else if (typeof x == 'string') {
//  		return 'string';
//  	} else if (typeof x == 'boolean') {
//  		return 'boolean';
//  	} else if (typeof x == Otherwise) {
//  		return -1;
//  	}
	 var type = typeof x;
	 if (type == 'number' || type == 'string' || type == 'boolean') {
		 return type
		 if else {
			 return -1;

//  }
 // console.log(checkInput([1,2,3]))

 // Question 4

 function SimpleEvenAdding(num){
	 //simple adding
	var result = 0;
	for (var i= 1; i <= num; i++){
		if(1 % 2 == 0) {
		answer += i;
		i +=2;
		
		}
		return answer;

}

//  console.log(SimpleEvenAdding(12));

// Question 5

function letterCapitalize(str){
	var splittedArray = str.split(" ")
	
	var newString = "";
	
	for(var i=0;i<splitedArray.length;i++){
		Console.log(splitedarray[i][0].toUpperCase() + splitedArray[i].slice(1));
	}
	
	return newString.slice(1);
	
	splitedArray
			    
	// "hello world";
	//  return "hello world".split('');

// 	 "You Cannot Find the Answer Online";
// 	 return "You Cannot Find The Answer Online".split('');
}


// console.log(letterCapitalize(33));

Question 6

function simpleReverse(str){
	var myArray = str.split("").reverse();
	var newString ="";
	for(var i=0; i< myArray.length; i++) {
		newString += myArray[i];			
}	
return newString;
	return str.split("").reverse().join('');
}

console.log(simpleReverse("welcome"))

// Question 7

// function findDiff(arr){
	if(arr.length==0){
		return 0;
// }

var max = Math.max.apply(null,arr)
var min = Math.min.apply(null,arr)
// Question 8

// function timeConvert(num){
//    return(num/60)+":" +num%60
// }

// // 80 -> 1:20
// // 80 / 60 = 1....20 remainder
// // 90 / 60 = 1....30
// // 130 / 60 = 2...10 remainder

// console.log(timeConvert(140));

// Question 9 

//  findStr(“hi”, “dasdhidasdahidashi”) => 3
// 	findStr(“o”, “daodo”) => 2
// 	findStr(“ha”,”abcde”)=> 0
// 	findStr(“h”, “hihelloho”)=> 3


function findStr(str, long){
	// var myArray = long.split("");
	// var counter = 0;
	// //loop through the array
	// for(var i=0;i<myArray.length;i++){
	// 	if(myArray[i] == str){
	// 		counter++;
	// 	}
	// }
	var counter =0
	for(var i=0; i<= long.length - str.length; i++) {

		if(long.slice(i,i + str.length) == str){
			counter++;
		}
	}
	
// 	return counter;
// 	for(var i =0;str.length + i <= long.length;i++) {
// 		if(long.slice(i,str.length + i) === str) {
// 		   counter++;
// 		}

// }
// return counter;

	return long.split(str).length - 1
}
		
 console.log(findStr("gh","gdhgdfjgheghghfjkhgerghigh"));

// console.log(findStr("d", "daodoaoaoaoao"));


// Question 10

// function selfDividingNumbers(left,right){

// 	return if (true,false)
// 	var myArray=[left,right];
// 	for(var i= left;i<=right;i++)
// 		// check if i is selfdividing number,this will call functions
// 		if(isSelfDividing (){
// 			myArr.push(i);
// 		}
// 	}
// return myArray;{
// // is given number is selfdividing
// // return true if the given number is selfdividing
// // return false if the given number is not selfdividing
}
	 
function isSelfDividing(num){
	// split num into digits
	num.toString() = num.split("")
	// use num / each digit to check if they are divisible
	for(let i = 0;i<myArray.length;i++){
	    if(num % parseInt(myArray[i]) != 0){
		    return false;
	    }
	}
	
	return true;	
}
 console.log(selfDividingNumbers(1,12));
console.log(selfDividingNumbers(1,25));
console.log(selfDividingNumbers(1,35));

					
