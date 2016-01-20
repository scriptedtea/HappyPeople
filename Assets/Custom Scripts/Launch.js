#pragma strict

static var rotate_constant : float = 200; //change this for rotation speed

var increment_mode = "add";
static var total_angle_rotated : float = 0; //grab this variable for angle user rotated to use in next scene
var angle_increment : float; // rotate constant * total_angle rotated

var isLaunched :boolean = false;
static var speed_constant: int = 5;

var arrowSound : AudioClip;

static var MIN_BOUNDARY : float = 0;
static var MAX_BOUNDARY : float = 5;

function Update () {

	if (!isLaunched){
		update_rotate();
	}
	else{
		transform.Translate(Vector3(-speed_constant,0,0) * Time.deltaTime);
	}

   if(Input.GetButtonUp("Jump")){
        //Debug.Log("We Have Hit the Space Bar!");
        isLaunched = true;
        audio.PlayOneShot(arrowSound);
    }
    
    if (out_of_bounds()){
    	Application.LoadLevel("Happy_People_1");
    }
} 

function out_of_bounds(){
	if (transform.position.x < MIN_BOUNDARY || transform.position.x > MAX_BOUNDARY){
		return true;
	}
	
	else if (transform.position.z < MIN_BOUNDARY || transform.position.z > MAX_BOUNDARY){
		return true;
	}
	
	return false;

}

function update_rotate (){
	angle_increment = Time.deltaTime * rotate_constant;
   
   if (increment_mode == "add"){
   		update_rotate_add_mode(angle_increment);  
   }
   
   else if (increment_mode == "subtract"){
   		update_rotate_subtract_mode(angle_increment); 
   }
   

}

function update_rotate_add_mode(angle_increment:float){

 if (total_angle_rotated + angle_increment <= 45){
   		total_angle_rotated += angle_increment;
   		//transform.Rotate(0, 0, angle_increment, Space.Self);
   		transform.Rotate(0, angle_increment, 0, Space.Self);
   } 
 else{
 	increment_mode = "subtract";
 }
  
}

 function update_rotate_subtract_mode(angle_increment:float){
 	if (total_angle_rotated - angle_increment >= -45){
   		total_angle_rotated -= angle_increment;
   		//transform.Rotate(0, 0, -angle_increment, Space.Self);
   		transform.Rotate(0, -angle_increment, 0, Space.Self);
   } 
 else{
 	increment_mode = "add";
 }
} 
