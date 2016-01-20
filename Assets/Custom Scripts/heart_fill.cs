using UnityEngine;
using System.Collections;

public class heart_fill : MonoBehaviour {
	public Renderer	_renderToChange;
	public float	_alphaValue;
	public float	_timeLimit = 20.0f;
	public static float	_elapsedTime = 0.0f;
	public string	levelName;
	
	void Update()
	{
		//elapsed time
		_elapsedTime += Time.deltaTime;
		
		//elapse time / time limit
		_alphaValue = _elapsedTime/_timeLimit;
		
		if ( _alphaValue > 1.0f ) {
			Application.LoadLevel("game_Over");
			_elapsedTime = 0.0f;
		}
		_renderToChange.material.SetFloat("_Cutoff", _alphaValue);
	}
}
