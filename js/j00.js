




function a(){
	// var a1 = document.getElementById(in001).value;
	// var a2 = document.getElementById(in002).value;
	var a1 = document.getElementById("in001").value
	var a2 = document.getElementById("in002").value
	
	alert(a1+" "+a2)
	if(a1=="123"&&a2=="123"){
		window.location.href="html/00.html"
	}else{
		alert("不正确")
		document.getElementById("in001").value="";
		document.getElementById("in002").value="";
	}
	
	// var a11=
	// if (a1.toString()=="asd") {
	// 		alert(a1);
	// }
}