// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
//var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
//function speak(name) {
  //console.log(speakWord + " " + name);
//}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
// window.byeSpeaker = byeSpeaker;

// IIFE: Immediately Invoked Function Expression is a JavaScript function that
//       runs as soon as it is defined. Refer to: https://developer.mozilla.org.

(function (window) {   // make it accessible to the global window environ - IIFE

	var byeSpeaker = {}; // create a name space via an empty object - step 7

	byeSpeaker.speak = function (name) {  // step 8
		var speakWord = "Good Bye";         // local variable
		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;  // step 9

})(window);


// Note: Calling function in main: script.js is: helloSpeaker.speak(names[i]);