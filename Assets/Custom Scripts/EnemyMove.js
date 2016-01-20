//Basic movement of an object with Translate
var speedx : float = 5.0;
var speedy : float = 5.0;
var timetrack : float = 0.0;
var temp: int = 1;
var multiplier : int;


function Start() {
	 multiplier = Random.Range(0.8f,3.0f);
}


function Update () {

	timetrack += Time.deltaTime;
	
	// please note that the rotation changes the axes
	// in smiley axes, y is towards the user, z is down
	speedy = -multiplier*Mathf.Sin(timetrack * Mathf.PI);
	transform.Translate(Vector3(speedx,0,-speedy) * Time.deltaTime);	
	
}

/*
function OnTriggerEnter (myTrigger : Collider) {
 if(myTrigger.gameObject.name == "Enemy"){
  Debug.Log("Box went through!");
 }
}*/