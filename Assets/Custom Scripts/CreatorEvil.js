var distanceMultiplier : float = 2;
var speed : float = 5.0;
var clone : GameObject[];
var myPrefab : GameObject;
var count : int = 0;
var Timer = 0.0;
var RandomTime : float;



function Start(){

	clone = new GameObject[3];
	RandomTime = Random.Range(5,10);
}


function Update(){
 
    var pos : Vector3 = transform.position;
    var i : int;
    var temp : float = pos.y+Random.Range(0.5f,2.5f);
	if (count < 3 && Timer >= RandomTime)
	{
		if (clone[count] == null)
		{
			// please note that the rotation changes the axes
			// in smiley axes, y is towards the user, z is down
			clone[count] = Instantiate(myPrefab, Vector3(pos.x, temp, pos.z), Quaternion.Euler(90,180,0));
			Debug.Log("start : " + pos.x + " " + temp + " " + pos.z);
		}
    	count++;
    }
    
    if (Timer > RandomTime)
    {
    	Timer = 0.0;
    	RandomTime = 1;
    } else if ( Timer < RandomTime)
    {
        Timer += Time.deltaTime;
	}
	
    
    for(i=0;i<3;i++)
	{
		if (clone[i] != null && clone[i].transform.position.x < -10)
		{
    			Debug.Log("end : " + pos.x + " " + temp + " " + pos.z);
    			Destroy(clone[i]);
    	}
    }
    if (count >= 3)
    {
    	count = 0;
    }
    
}
