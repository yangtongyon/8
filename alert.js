function game()
{
var play = document.querySelector(".play")
var h1 = document.querySelector("#h1")
var td1 =document.querySelectorAll("td")[0]
var td2 =document.querySelectorAll("td")[1]
var td3 =document.querySelectorAll("td")[2]
play.style.position="absolute"
h1.style.position="absolute"
var playTOP=null
var playLEFT=null
var h1TOP=null
var h1LEFT=null
var h1size=null
var tdsize=null
var RB=null
 if (/(Android)/i.test(navigator.userAgent)) {
        //console.log('安卓端')
		playLEFT=130
		playTOP=300
		h1LEFT=60
		h1TOP=150
		h1size=12
		tdsize=8
		RB=10
    } else {
       // console.log('PC端')
	   playLEFT=600
	   playTOP=300
	   h1LEFT=450
	   h1TOP=200
	   h1size=5
	   tdsize=3
	   RB=10
    }	

	td1.style.borderRadius=RB+"px"
		td2.style.borderRadius=RB+"px"
			td3.style.borderRadius=RB+"px"
	play.style.top=playTOP+"px"
	play.style.left=playLEFT+"px"
	play.style.display="block"
	play.style.fontSize=tdsize+"vw"
	//td.style.borderRadius=RB+"px"
	h1.style.display="block"
	h1.style.display="block"
	h1.style.top=h1TOP+'px'
	h1.style.left=h1LEFT+'px'
	h1.style.color="rgba(235,161,36,0.48)"
	h1.style.fontSize=h1size+"vw"
	yangtao("欢迎使用吴良启大逃杀\n2.0版本")
}
