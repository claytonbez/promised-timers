# promised-timers

A small collection of NodeJS modules that grants timers with the use of promises

### Installation

    npm install promised-timers

### Usage
This module was developed for NodeJS, but includes a browser version under the dist folder

    let timers = require('promised-timers');
	
	// A simple Wait and then do...
	
	timers.wait(5000)
		.then(err =>{
			console.log('Waiting Done')
		});
		
	// A Timer that passes back an object. Usefull in loops.
	
	let a = 'Hello';
	timers.waitWith(5000,a)
		.then((err,value) => {
			console.log('Waiting Done , returned value ',value);
		});
		
	// A Timer that waits until a flag changes. Requires a 'SET' and 'START' to work
	
	let c = 'Hello';
	timers.waitFor.set('labelA',c);
	timers.waitFor("labelA","==","Bye");
		.then((err) => {
			console.log('Waiting Done , returned value ',outVar);
		});
	//Now lets wait a second and set 'labelA' to 'Bye'
	timers.wait(1000)
		.then(function(err){
			if(!err){
				timers.waitFor.set('labelA','bye');
			}
		});
    //This function will not continue until the value of 'labelA' has been set to "Bye"
    
  This module is still under development use at own risk. Feel free to comment and take it apart! I can take it! I think!

