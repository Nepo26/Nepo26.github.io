var inputs = document.getElementsByClassName("option");

for (var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener("keyup", function (event) {   
	switch(event.keyCode){
	
    case 37: {
		
		inputs[0].focus();
		break;
    }
    case 39: {
		inputs[1].focus();
		break;
    }
	case 40: {
		inputs[1].focus();
		break;
	}
	
	case 38: {
		inputs[0].focus();
		break;
	}
	}
  }, false);
  
  inputs[i].addEventListener("mouseover", function(event) {
	 if(this.className == "option")
		this.focus();
  }, false);
}

