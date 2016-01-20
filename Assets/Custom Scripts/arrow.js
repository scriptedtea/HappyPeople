#pragma strict

function Start () {

}

// ================== collision count ===============================

static var counter : int = 0;

//======= collective horizontal and vertical displacements per frame =================


static var vert_velo : float; // vertical speed
static var vert_constant : float = 0.3; // vertical speed constant
static var vert_displacement :float; // vertical displacement


static var horiz_velo : float; // horizontal speed
static var horiz_constant : float = 0.3; // horizontal speed constant
static var horiz_displacement :float; // horizontal displacement

static var TOP_BOUNDARY : float = 2;
static var BOTTOM_BOUNDARY : float = -2;
static var RIGHT_BOUNDARY : float = 4.2;
static var LEFT_BOUNDARY : float = -3.4;
 
function Update () {
 vertical_update();
 horizontal_update();
 
}

function vertical_update(){
vert_velo = Input.GetAxis("Vertical");
vert_displacement = vert_velo * vert_constant;
if (!out_of_bounds_v(vert_displacement)){
 transform.position += (Vector3(0,vert_displacement,0));
}
}

function horizontal_update(){
horiz_velo = Input.GetAxis("Horizontal");
horiz_displacement = horiz_velo * horiz_constant;
if (!out_of_bounds_h(horiz_displacement)){
 transform.position += (Vector3(horiz_displacement,0,0));
}
}

function out_of_bounds_v( displacement: float){

	if ((transform.position.y+displacement) > TOP_BOUNDARY || (transform.position.y+displacement) < BOTTOM_BOUNDARY){
		return true;
	}
	return false;
}

function out_of_bounds_h (displacement: float){
	if ((transform.position.x+displacement)>RIGHT_BOUNDARY || (transform.position.x+displacement)< LEFT_BOUNDARY){
		return true;
	}
	return false;
}

