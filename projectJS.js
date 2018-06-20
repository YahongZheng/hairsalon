/* Yahong Zheng
 * Individual Project
 * ISTE-340
 */

// to start the page
function start(){
	questionOne();
	//submitForm();
	checkBrowser();
}  // end start


// dynamically creating form elements depending upon the answer
// of the previous question
 function createQuestions(choice){
	var opt = data[choice];
	
	if(opt === undefined)
	{
		display();
	}
	else{
		var div = document.createElement('div');
		
		// create new prompt and text 
		var newPrompt = document.createElement('h2');
		var text = document.createTextNode(opt[0]);
		newPrompt.appendChild(text);
		
		div.appendChild(newPrompt);
		
		// create select list of options
		var newSelect = document.createElement('select');
		newSelect.setAttribute('onchange','choiceSelect(this,this.value)');
		
		for(var i = 1; i < opt.length; i++)
		{
			var options = document.createElement('option');
			options.setAttribute('value', opt[i]);
			
			var label = document.createTextNode(opt[i]);
			options.appendChild(label);
			
			if(opt[i] == 'Choose one option')
			{
				options.setAttribute('select', true);
			}
			
			newSelect.appendChild(options);
		}
		
		div.appendChild(newSelect);
		
		document.getElementById('mainDiv').appendChild(div);
	
	} // end else
 } // end createQuestions


// to check the previous choice
function remove(choice){

	while(choice.parentNode != choice.parentNode.parentNode.lastChild)
	{
		choice.parentNode.parentNode.removeChild(choice.parentNode.parentNode.lastChild);
	}
} // end remove


// create first question
function questionOne(){
	createQuestions(firstChoice);
} // end questionOne


// run the choice once selected
function choiceSelect(options, index){
	remove(options);
	
	var choice = options.value;
	
	if(choice != 'Choose one option')
	{
		createQuestions(choice);
	}
} // end selectChoice


// display the choices
function display(){
	var disp = document.createElement('div');
	var para = document.createElement('h3');
	
	var selected = document.getElementsByTagName('select');
	var message = document.createTextNode("You choose " + selected[0].value
			+ " and you want " + selected[1].value + ", one of our hairstylist "
			+ selected[2].value + " will be your hairstylist. Thank you!");
	para.appendChild(message);
	document.getElementById('mainDiv').appendChild(para);
	
} // end display

// slide show
var img_num = 0;
slidshow();

function slidshow(){
	// get all pictures from images class
	var slides = document.getElementsByClassName('images');
	
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	img_num++;
	
	// return to first picture after all six pictures are finish display
	if(img_num > slides.length){
		img_num = 1;
	}
	slides[img_num-1].style.display = "block";
	setTimeout(slidshow, 2000);
} // end slidshow

//Identifies which browser the user is using
function checkBrowser(){
	if(document.getElementById && document.attachEvent){	
		//modern IE
		browser = 'modIE';
	}
	else if(document.getElementById){	
		//modern, non-IE
		browser = 'gecko';
	}
	else{		
		//ask to download new browser
		window.location = "browser.html";
	}
}


//Validates the form and stores responses
function submitForm(){
	var name = document.getElementById('name');
var number = document.getElementById('number');
	console.log('name: ' + name.value);
	console.log('phone number: ' + number.value);

} // end submitForm

// delete cookie
function deleteCookie(){
	DeleteCookie(name);
	DeleteCookie(number);
	location.reload();
} // end delete cookie












