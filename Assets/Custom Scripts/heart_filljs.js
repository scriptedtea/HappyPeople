#pragma strict

function Start () {

		audio.Stop();
}

//static var _renderToChange : Renderer;
static var _alphaValue :float;
static var _timeLimit :float = 10.0f;
static var _elapsedTime : float = 0.0f;
static var levelName ;

var heartBeatSound : AudioClip;

var isSoundPlaying : boolean = false;

function Update () {


		//elapsed time
		_elapsedTime += Time.deltaTime;
		
		//elapse time / time limit
		_alphaValue = _elapsedTime/_timeLimit;
		if(_alphaValue <= 0.0f)
			_alphaValue = 0.01f;
		if ( _alphaValue > 1.0f ) {
			arrow.counter=0;
			Application.LoadLevel("game_Over");
			_elapsedTime = 0.0f;
		}
		gameObject.renderer.material.SetFloat("_Cutoff", _alphaValue);
		
		if (_alphaValue >= 0.5f) {
			//Debug.Log(" alpha value " + _alphaValue);
			playHeartSound();
		}

		if (_alphaValue < 0.5f) {	
		isSoundPlaying = false;
		audio.Stop();
		}
		

}

function playHeartSound() {
	if (!isSoundPlaying) {
		audio.PlayOneShot(heartBeatSound);
		isSoundPlaying = true;
	}



}





