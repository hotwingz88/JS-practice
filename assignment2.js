// Question 1

function printInt(n){
	var i = 1;
	while(i < n) {
		console.log(i);
		i++;
	}
}

// printInt(30);



// Question 2

function printIntRev(n){
	while(n > 1){
		console.log(n);
		n--;
	}	
	
}

// Question 3
 function checkInput(x){
 	// check if x is a number or a string or a boolean
 	if(typeof x == 'number'){
 		return 'number';
 	} else if (typeof x == 'string') {
 		return 'string';
 	} else if (typeof x == 'boolean') {
 		return 'boolean';
 	} else if (typeof x == Otherwise) {
 		return -1;
 	}

 }
 // console.log(checkInput([1,2,3]))

 // Question 4

 function SimpleEvenAdding(num){
	var i = 2;
	var answer = 0;
	while(i <= num){
		answer += i;
		i +=2;
		
		}
		return answer;

}

//  console.log(SimpleEvenAdding(12));

// Question 5

function letterCapitalize(str){
	// "hello world";
	//  return "hello world".split('');

// 	 "You Cannot Find the Answer Online";
// 	 return "You Cannot Find The Answer Online".split('');
}


// console.log(letterCapitalize(33));

// Question 6

// function simpleReverse(str){
// 	// return ["dlrow", "olleh"].reverse();
// 	str
// }	

// console.log(simpleReverse("I Hate Code"));


// function test(str){
// 	return "bye";
// 	console.log(str);
	
// }

// // document.write(test("hello"));

// // console.log(test("hello"));

// console.log(test("hello"));
// // console.log("bye");

// Question 7

// function findDiff(arr){
	
// 	return (Math.max - Math.min);
// }

// findDiff([1,2,4,6,21,3]);

// findDiff([1,2,4,6,20,3]);

// findDiff([1,2,4,6,19,3]);
// // Math.min([1,2,4,6,20, 3]);


// // console.log(Math.max(1,2,4,6,20, 3));
// // console.log(Math.min(20-1));
// // console.log(Math.min(24-22));
// // console.log(Math.min(1-1));
// // console.log(Math.min(1));
// // console.log(Math.min(0));

//  // console.log(Math.max.apply(null,[1,2,3,4,5]));

// // console.log(Math.max(1, 3123, 1232  ,22312));

// console.log(Math.max(34, 2, 1));

// console.log(Math.min(1, 2, 34));

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
	// var c = 0;
	// //loop through the array
	// for(var i=0;i<myArray.length;i++){
	// 	if(myArray[i] == str){
	// 		c++;
	// 	}
	// }
	var c =0
	for(var i=0; i<= long.length - str.length; i++) {

		if(long.slice(i,i + str.length) == str){
			c++;
		}
	}
	
	return c;

}

 // console.log(findStr("gh","gdhgdfjgheghghfjkhgerghigh"));

console.log(findStr("d", "daodoaoaoaoao"));


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
// return myArr;
// // is given number is selfdividing
// // return true if the given number is selfdividing
// // return false if the given number is not selfdividing

 console.log(selfDividingNumbers(1,12));
console.log(selfDividingNumbers(1,25));
console.log(selfDividingNumbers(1,35));

					
