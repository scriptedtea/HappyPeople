using UnityEngine;
using System.Collections;

public class background : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}

    public Vector2 scrollSpeed;             // Speed to scroll the material in each direction

    // Update is called once per frame

    void Update () 

    {

        renderer.material.mainTextureOffset += scrollSpeed * Time.deltaTime;

    }

}

