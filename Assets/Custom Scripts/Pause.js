#pragma strict

var myLevel0 : String;



function Update() {
    
    if(Input.GetButtonUp("Pause")){

        	Application.LoadLevel(myLevel0);

        }

 }
  	
 		
        
 
/* function Unpause() {
	    if(Input.GetButtonUp("Pause")){
         	if ( pause === true) {
         	
         	Application.LoadLevel("tuts");
         	pause = false;
 			}
 		}
}
*/