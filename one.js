window.onload=function()
{
	
	var width=null
	var height=null
	var h1FONTSIZE=null
	var h1LEFT=null
	var h1TOP=null
	var AND=null
	var tkHEIGHT=null
	var tkWIDTH=null
	var tkTOP=null
	var tkLEFT=null
	var tkBR=null
	var jdt=null
	var tkFT=null
if (/(Android)/i.test(navigator.userAgent))
{
        //alert('安卓端')
		var meta = document.querySelector("meta")
		meta.charset="utf-8" 
		meta.name="viewport"
		meta.content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
		h1TOP=240
		width=100
		height=100
		h1FONTSIZE=20
		h1LEFT=80
		tkHEIGHT=50
		tkWIDTH=350
		tkLEFT=2
		tkTOP=300
		tkBR=80
		AND="安卓端"
		jdt=0
		tkFT=10
    } 
	else 
	{
		// alert('PC端')
		h1TOP=300
		width=100
		height=100
		h1FONTSIZE=7
		h1LEFT=550
		tkHEIGHT=80
		tkWIDTH=600
		tkLEFT=400
		tkTOP=300
		tkBR=50
        AND="PC端"	
		jdt=0
		tkFT=3.5
	}
		var black = document.createElement("div")
		black.style.width=width+"%"
		black.style.height=height+"vh"
		black.style.background="black"
		var h1 = document.createElement("h1")
		h1.style.fontSize=h1FONTSIZE+"vw"
		h1.style.position="absolute"
		h1.style.left=h1LEFT+"px"
		h1.style.top=h1TOP+"px"
		h1.style.textShadow="5px 5px 5px red"
		h1.innerHTML=AND
		h1.style.color="white"
		document.body.appendChild(black)
		document.body.appendChild(h1)
		
    var timert=  setTimeout(()=>{
		  
		   document.body.removeChild(h1)
		   document.body.removeChild(black)
		   var tk=document.createElement("div")
		   var tkpd=document.createElement("div")
		   tkpd.id="tkpd"
		   tk.id="tk"
		   tk.style.width=tkWIDTH+"px"
		   tk.style.height=tkHEIGHT+"px"
		   tk.style.border="2px solid yellow"
		   tk.style.position="absolute"
		   tk.style.left=tkLEFT+"px"
		   tk.style.top=tkTOP+"px"
		   tk.style.background="rgba(0,0,0,0.3)"
		   tk.style.borderRadius=tkBR+"px"
		   tk.innerHTML="加载中"+jdt+"%"
		   tk.style.textAlign="center"
		  tk.style.color="rgba(255,88,98,0.7)"
		   tk.style.fontSize=tkFT+"vw"
		   
		   
		   tkpd.style.height=tkHEIGHT+"px"
		   tkpd.style.position="absolute"
		   tkpd.style.left=tkLEFT+"px"
		   tkpd.style.top=tkTOP+2+"px"
		   tkpd.style.background="green"
		   tkpd.style.zIndex=-1
		   tkpd.style.borderRadius=tkBR+"px"
		   document.body.appendChild(tk)
		   document.body.appendChild(tkpd)
		   jdt1()
		   clearTimeout(timert)
	   },2000)
	   function jdt1()
	   {
	   var  jdt1=document.querySelector("#tk")
	   var  jdt2 = document.querySelector("#tkpd")
     var timer=   setInterval(()=>{
			var ok =Math.floor(Math.random()*4)
			jdt+=ok
			var fast = tkWIDTH*(jdt/100)
			if(jdt>=100)
			{
				jdt=100
			tk.innerHTML="加载中"+jdt+"%"
			document.body.removeChild(tk)
			document.body.removeChild(tkpd)
			clearInterval(timer)
			}
			tk.innerHTML="加载中"+jdt+"%"
			tkpd.style.width=fast+"px"
		},130)
		}
		var body = document.querySelector("body")
		var bodyColor=["#fa8072","#fa807252","#f31900cc","#64f5f2c4","#64f5f273","#5c69f973","#5c69f929"]
		var i = null
		var time = setInterval(()=>{
			i++
			i=i%bodyColor.length
			body.style.background=bodyColor[i]
			if(jdt>=93)
			{
				
				body.style.background="rgb(239,183,183)"
				
				clearInterval(time)
				game()
			}
		},3000)

	}
