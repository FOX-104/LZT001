			var a1 = null;
			// var box = document.getElementById("id0011");
			// var p1=document.getElementById("p1");
			// var p2=document.getElementById("p2");
			// var d=document.createElement("div");
			
			// function c(){

			// 	// window.setInterval(c(),1000);
			// }
			// onmousemove = function()
			function a(e){
				a1 = e || event;
				// id0011.style.left = a1.pageX + "px";
				// id0011.style.top = a1.pageY  + "px";
				// p1.innerHTML=box.style.left;
				// p2.innerHTML=box.style.top;
				// document.body.onmousemove=function(a1){

			}
			function rand(){
				return Math.floor(8 - (Math.random()*15+1));
			}
			// var n1=Math.floor(Math.random()*10+1);
			// function b(e);
			var x11 = 0;
			var x21 = 0;
			var y11 = 0;
			var y21 = 0;
			var x12 = 0;
			var x22 = 0;
			var y12 = 0;
			var y22 = 0;
				var s = window.setInterval(function(){
					ff();
					
					gg();
					
				},250);
			// a1 = e || event;
			function ff(){
				
				// var e = evt || event;
				// if (x11 == 0 || y11 == 0 || y12 == 0 || y12 == 0) {
					var d=document.createElement("div");
					d.style.width="7px";
					d.style.height="7px";
					d.style.background="red";
					d.style.borderRadius="50%";
					d.style.position="absolute";
					// var d=document.createElement("div");
					document.getElementById("id001").appendChild(d);
					x11 = (a1.pageX + rand());
					y11 = (a1.pageY + rand());
					d.style.left = x11 + "px";
					d.style.top = y11 + "px";
				// } else{
				// 	var d=document.createElement("div");
				// 	d.style.width="7px";
				// 	d.style.height="7px";
				// 	d.style.background="red";
				// 	d.style.borderRadius="50%";
				// 	d.style.position="absolute";
				// 	// var d=document.createElement("div");
				// 	document.getElementById("id001").appendChild(d);
				// 	x12 = (a1.pageX + rand());
				// 	y12 = (a1.pageY + rand());
				// 	d.style.left = x12 + "px";
				// 	d.style.top = y12 + "px";
				// 	drawline(x11,y11,x12,y12)
				// }

			}
			function gg(){
				// if (x21 == 0 || y21 == 0 || y22 == 0 || y22 == 0) {
					var d=document.createElement("div");
					// var e = evt || event;
					d.style.width="7px";
					d.style.height="7px";
					d.style.background="red";
					d.style.borderRadius="50%";
					d.style.position="absolute";
					// var d=document.createElement("div");
					document.getElementById("id001").appendChild(d);
					x21 = (a1.pageX - rand());
					y21 = (a1.pageY - rand());
					d.style.left = x21 + "px";
					d.style.top = y21 + "px";
				// }else{
				// 	var d=document.createElement("div");
				// 	// var e = evt || event;
				// 	d.style.width="7px";
				// 	d.style.height="7px";
				// 	d.style.background="red";
				// 	d.style.borderRadius="50%";
				// 	d.style.position="absolute";
				// 	// var d=document.createElement("div");
				// 	document.getElementById("id001").appendChild(d);
				// 	x22 = (a1.pageX - rand());
				// 	y22 = (a1.pageY - rand());
				// 	d.style.left = x22 + "px";
				// 	d.style.top = y22 + "px";
				// 	drawLine(x21,y21,x22,y22);
				// }
			}
			// function drawDot(x,y){
			//     document.write( " <table   border= '0 '   margin=0   padding=0> <tr> <td   style= 'position:   absolute;   left:   "+(x)+ ";   top:   "+(y)+ ";background-color:   " red " '   width= " 1px "   height= " 1px "> </td> </tr> </table> ") 
			// } 
			
			// function drawLine(x1,y1,x2,y2){ 
			//     var   i; 
			//     var   r=Math.floor(Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))); 
			//     var   theta=Math.atan((x2-x1)/(y2-y1)); 
			//     if(((y2-y1) <0&&(x2-x1)> 0)||((y2-y1) <0&&(x2-x1) <0)) 
			//         theta=Math.PI+theta; 
			//     var   dx=Math.sin(theta);//alert(dx) 
			//     var   dy=Math.cos(theta); 
			//     for(i=0;i <r;i++){ 
			//     	drawDot(x1+i*dx,y1+i*dy); 
			//     }
			// }
			// var timer = setInterval(c,3000);