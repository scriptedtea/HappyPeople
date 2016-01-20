var normalTex : Texture2D;
var hoverTex : Texture2D;
var myLevel0: String;

function OnMouseEnter () {
 	guiTexture.texture = hoverTex;
}
 
function OnMouseExit(){
 	guiTexture.texture = normalTex;
}

function OnMouseDown() {
	Application.LoadLevel(myLevel0);
}