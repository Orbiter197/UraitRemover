function replace(){
	try{
	var a = document.getElementsByClassName("feedback-hotline jivo-desktop")
	a[0].parentNode.removeChild(a[0])
	} catch(e) {}
	

	try{
	a = document.getElementsByClassName("feedback-hotline-mobile")
	a[0].parentNode.removeChild(a[0])
	} catch(e) {}

	try{
	a = document.getElementsByClassName("globalClass_c876")
	a[0].parentNode.removeChild(a[0])
	} catch(e) {}
}

setInterval(replace, 200);