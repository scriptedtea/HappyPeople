#pragma strict

function Start () {
	//Debug.Log(gameObject.name + "   "+gameObject.renderer.material.mainTexture);
}

var micro_move : float = 0.0000001;
var main = "Arrow";

function Update () {
gameObject.Find(main).transform.position += Vector3(micro_move, 0, 0);
gameObject.Find(main).transform.position -= Vector3(micro_move, 0, 0);
}


function OnTriggerEnter (myTrigger : Collider) {
 if(myTrigger.gameObject.name == main){
  Debug.Log(main + " went through");
  gameObject.renderer.material.mainTexture = Resources.Load("happy face") as Texture;
  heart_filljs._elapsedTime += 5.0f;
  if(heart_filljs._elapsedTime < 0.0f)
  	heart_filljs._elapsedTime = 0.0f;
 }
}