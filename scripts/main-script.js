/* jslint browser: true, devel: true, maxlen: 85 */
/* global window */

window.onload = function(){
	'use strict';

	//////////////////////// getElementById //////////////////////////
	/*==============================================================*/	
	// Create a chat area.
	var chatContent = document.getElementById("chatContent");
	var firstCommentContainer = document.getElementById('user_1stComment_container')
	var userComment = document.getElementById("userComment");
	var secondCommentContainer = document.getElementById('user_2ndComment_container')
	var userComment2 = document.getElementById("userComment2");

	var troll1 = document.getElementById("troll_1");
	var troll2 = document.getElementById("troll_2");
	var troll3 = document.getElementById("troll_3");
	var troll4 = document.getElementById("troll_4");

	/*==============================================================*/	
	// Array to store the user comments.
	var commentArray = [];

	/*==============================================================*/
	// Input form 1.
	var msgForm = document.getElementById('message');
	var userInput = document.getElementById('usermsg'); //input box.
	var buttons = document.getElementById('buttons'); //buttons container.
		var userCancel = document.getElementById('cancelmsg'); //comment button.
		var userSubmit = document.getElementById('commentmsg'); //comment button.
	
	// Input form 2.
	var msgForm2 = document.getElementById('message_2');
	var userInput2 = document.getElementById('usermsg_2'); //input box -2.
	var userCancel2 = document.getElementById('cancelmsg_2'); //comment button -2.
	var userSubmit2 = document.getElementById('commentmsg_2'); //comment button -2.
	var userCheck2 = document.getElementById('checkmsg_2'); //check button.

	/*==============================================================*/
	// modifier modal pop up after comment button2.
	var modifyModal = document.getElementById('modifyModal'); // modify modal container.
	var userInput2_modify = document.getElementById('usermsg_2_modify'); // input box in modify modal - 3rd Input.

	// last confirm buttons.
	var cancelPost = document.getElementById('cancelPost'); // cancel button in modify modal.
	var confirmPost = document.getElementById('confirmPost'); // confrim button in modify modal.



    /////////////////////////// functions ////////////////////////////
	/*==============================================================*/	
	// Input form 1: functions run here.

	// when the Input box first get focuesd, the two buttons(cancel & comment) show.
	var clickShowbuttons = function(){
		buttons.style.display = 'block';
	}

	// add contents function.
	var addComment = function(){
		clearAndShow(); //run function to show comments and clear input field.
	}

	// clear input box field.
	var clear = function(){
		userInput.value = "";	
	}

	// clear input box field and show the comment in the chat area.	
	var clearAndShow = function(){

		var c = confirm("Are you sure you want to submit this post?");
		if(c == true){
			
			//push value to the commentArray.
			commentArray.push(userInput.value);

			//clear userInput.
			userInput.value = "";

			//show the comment in the chat area. 
			userComment.innerHTML = "";
			userComment.innerHTML += commentArray.join("<br/>") + "<br/>";
			firstCommentContainer.style.display = 'block';

			addTrolls(); //add troll comments to the chat area.
			switchForm(); //change message forms display.

		}else{
			//clear comment box field.			
			userComment.innerHTML = "";

		};

		console.log(commentArray);
	}

	/*==============================================================*/
	// switch Input forms' display.
	var switchForm = function(){
			msgForm.style.display = 'none';
			msgForm2.style.display = 'block';		
	}

	/*==============================================================*/
	// troll goes here.

	// add troll comments to the chat area.
	var addTrolls = function(){

		setTimeout(function(){
			troll1.style.display ='block';
		},3000)
		setTimeout(function(){
			troll2.style.display ='block';
		},5000)
		setTimeout(function(){
			troll3.style.display ='block';
		},6000)
		setTimeout(function(){
			troll4.style.display ='block';
		},6500)
	}

	/*==============================================================*/
	// Input form 2: functions run here.

	// when the user type in th Input2 box, the check box will show.
	var showCheck = function(){
		userCheck2.style.display = 'block';
	}

	var hideCheck = function(){
		userCheck2.style.display = 'none';
	}

	// when click on userSubmit button: 
	// 1) add the text to commentArray. 2) show check box.  3) show the confirm boxs. 4) show the modify modal when c3 is true.
	var clickToReply = function(){
		//push value to the commentArray.
		commentArray.push(userInput2.value);
		userInput2_modify.value = commentArray[1];

		showCheck();
		
		var c2 = confirm("Are you sure you want to submit this post?\nThough there are many ways to react, your use of words may result in different outcomes.");
		if(c2 == true){
			var c3 = confirm("It seems like you could use some help here...\nSpeak wisely and we can have a better social environment.\nLet's take a look at your sentence, shall we?");
			if (c3 == true) {
				showModifyModal();
			}else{
				walkAwayAlert();			
			}
		}else{
			walkAwayAlert();		
		}
	}

	var walkAwayAlert = function(){
		alert("Nice!\nBeing strong doesn’t always mean you have to fight the battle. True strength is being adult enough to walk away from the nonsense with your head held high.");
	}

	/*==============================================================*/
	// modify modal & contents.

	// show modify modal when c3 == true.
	var showModifyModal = function(){
		modifyModal.style.display = 'block';
	}

	var confirmModify = function(){

		secondCommentContainer.style.display = 'block';

		//push value to the commentArray.
		commentArray.push(userInput2_modify.value);
		userComment2.innerHTML = commentArray[2]; //show array value to comment area.

		alert("Good Job!\nOne of the greatest victories you can gain over someone is to beat him at politeness.");

		modifyModal.style.display = 'none'; // hide the modify modal.
		userInput2.value = ""; // clear the userInput2 box.

	}

	var cancelModify = function(){
		walkAwayAlert();		
		
		modifyModal.style.display = 'none'; // hide the modify modal.
		commentArray.splice(1,2);
		userInput2.value = ""; // clear the userInput2 box.
		
		userInput2_modify.value = ""; //clear the value in userInput2_modify.
		hideCheck(); // hide the checkbox.
	}

    //////////////////////// addEventListener ////////////////////////
	/*==============================================================*/
	// Input form 1: clicks.
	userInput.addEventListener('click', clickShowbuttons, false);
	userSubmit.addEventListener('click', addComment, false);
	userCancel.addEventListener('click', clear, false);

	// userInput2.addEventListener('keydown', showCheck, false);
	// Input form 2: clicks.
	userSubmit2.addEventListener('click', clickToReply, false);
	userCheck2. addEventListener('click', showModifyModal, false);

	// modify modal: clicks.
	cancelPost.addEventListener('click', cancelModify, false);
	confirmPost.addEventListener('click', confirmModify, false);
};

