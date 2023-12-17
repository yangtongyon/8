//游戏主程序
function playgame()
{
	var A = ''
	var B = !A
	var C = !!A
	if(B)C=(A>B)?9:5
	if(B)A=(A>B)?5:9
	var D = A*C-9-9
	var SSID=""+A+C+D
	var KZTS=1
	var playersd=10//玩家速度
	var playerTOP=null
	var playerLEFT=null
	var playerWIDTH=null
	var playerHEIGHT=null
	var playerBorderRadius=null
	var playerFontSize=null
	var playerBorder="5px solid chocolate"
	var playerBackground="navajowhite"
	var playerMASS=100//玩家血量
	//AI
	var wqhsd=1
	var wldsd=1
	var newwldsd=1
	var AIsd=5
	var wqhTOP=null
	var wldTOP=null
	var wqhLEFT=null
	var wldLEFT=null
	var wqhWIDTH=null
	var wldWIDTH=null
	var wqhHEIGHT=null
	var wldHEIGHT=null
	var AiFontSize=null
	var AiBackground="navajowhite"
	var wqhgjsize=null
	var gamekd="none"
	var gameks="block"
	var  wqhgjkd=false//特定
	//出口设置
	var chukoWidth=null
	var chukoHeight=null
	var chukoLeft=null
	var chukoTop=null
	var chuko2Width=null
	var chuko2Height=null
	var chuko2Left=null
	var chuko2Top=null
	var chuko3Width=null
	var chuko3Height=null
	var chuko3Left=null
	var chuko3Top=null
	
	var zhailaiTOP=null
	var zhailaiLEFT=null
	var zhailaiSIZE=null
	
	var zhailaiH1TOP=null
	var zhailaiH1LEFT=null
	var zhailaiH1SIZE=null
	if (/(Android)/i.test(navigator.userAgent)) {
	        //console.log('安卓端')
			//玩家
			var playButton=document.createElement("table")
			playButton.id="Button"
			playButton.innerHTML="<td id='TOPpy'>上</td><td id='BOTTOMpy'>下</td><td id='LEFTpy'>左</td><td id='RIGHTpy'>右</td>"
			playButton.style.position="absolute"
			playButton.style.bottom=0
            playButton.style.left=3+"px"
			playButton.style.fontSize=9+"vw"
			playButton.style.borderSpacing=40+"px"
			playButton.style.background="rgba(66,66,66,0.5)"
			document.body.appendChild(playButton)
			playerLEFT=50
			playerTOP=160
			playerHEIGHT=40
			playerWIDTH=40
			playerBorderRadius=50
			playerFontSize=7
			//AI
			wqhTOP=0
			wldTOP=70
			wqhLEFT=270
			wldLEFT=270
			wqhWIDTH=40
			wldWIDTH=40
			wqhHEIGHT=15
			wldHEIGHT=15
			AiFontSize=3
			wqhgjsize=5
			//出口
			chukoHeight=80
			chukoWidth=80
			chukoTop=40
			chukoLeft=80
			
			chuko2Height=20
			chuko2Width=80
			chuko2Top=40+80+10
			chuko2Left=80
			
			chuko3Width=0
			chuko3Height=20
			chuko3Left=85
			chuko3Top=40+80+10+5
			
		
		zhailaiH1LEFT=125
		zhailaiH1TOP=190
		zhailaiLEFT=160
		zhailaiTOP=280
		zhailaiH1SIZE=8.5
		zhailaiSIZE=8
	    } else {
	        //console.log('PC端')
			//玩家
			playerLEFT=300
			playerTOP=300
			playerHEIGHT=50
			playerWIDTH=50
			playerBorderRadius=50
			playerFontSize=2.5
			//AI
			 wqhTOP=0
			 wldTOP=70
			 wqhLEFT=0
			 wldLEFT=0
			 wqhWIDTH=100
			 wldWIDTH=100
			 wqhHEIGHT=40
			 wldHEIGHT=40
			 AiFontSize=2
			 wqhgjsize=3
			 //出口
			 chukoHeight=80
			 chukoWidth=80
			 chukoTop=400
			 chukoLeft=800
			 
			 chuko2Height=20
			 chuko2Width=80
			 chuko2Top=400+80+10
			 chuko2Left=800
			 
			  chuko3Width=0
			  chuko3Height=20
			  chuko3Left=805
			  chuko3Top=400+80+10+5
			  
		zhailaiH1LEFT=500
		zhailaiH1TOP=300
		zhailaiLEFT=570
		zhailaiTOP=450
		zhailaiH1SIZE=4.5
		zhailaiSIZE=4
	    }
//绘制游戏画面
var pyH1=document.querySelector("#h1")	
var pyTABLE=document.querySelector("#table")
	pyH1.style.display="none"
	pyTABLE.style.display="none"
var Mass=document.createElement("div")
Mass.style.position="absolute"
Mass.style.bottom=0+"px"
Mass.style.left=0+"px"
Mass.style.width=playerMASS+"%"
Mass.style.background="yellow"
Mass.style.height=20+"px"
//生成玩家
var player=document.createElement("div")
//生成AI
var wqh=document.createElement("div")
var wld=document.createElement("div")
var wqhgjTOP=document.createElement("div")
var wqhgjBOTTOM=document.createElement("div")
var wqhgjLEFT=document.createElement("div")
var wqhgjRIGHT=document.createElement("div")
//生成出口
var chuko=document.createElement("div")
var chuko2=document.createElement("div")
var chuko3=document.createElement("div")
//玩家
player.style.position="absolute"
player.style.left=playerLEFT+"px"
player.style.top=playerTOP+"px"
player.style.width=playerWIDTH+"px"
player.style.height=playerHEIGHT+"px"
player.style.background=playerBackground
player.style.border=playerBorder
player.style.borderRadius=playerBorderRadius+"px"
player.style.fontSize=playerFontSize+"vw"
player.style.color="coral"
player.style.textAlign="center"
player.style.zIndex=3
player.innerHTML="你"
player.id="player"
//AI吴启航
wqh.style.position="absolute"
wqh.style.left=wqhLEFT+"px"
wqh.style.top=wqhTOP+"px"
wqh.style.width=wqhWIDTH+"px"
wqh.style.height=wqhHEIGHT+"px"
wqh.style.background=AiBackground
wqh.style.border=playerBorder
wqh.style.fontSize=AiFontSize+"vw"
wqh.style.color="coral"
wqh.style.textAlign="center"
wqh.style.zIndex=2
wqh.innerHTML="吴启航"
wqh.id="wqh"
//AI吴良鼎
wld.style.position="absolute"
wld.style.left=wldLEFT+"px"
wld.style.top=wldTOP+"px"
wld.style.width=wldWIDTH+"px"
wld.style.height=wldHEIGHT+"px"
wld.style.background=AiBackground
wld.style.border=playerBorder
wld.style.fontSize=AiFontSize+"vw"
wld.style.color="coral"
wld.style.textAlign="center"
wld.style.zIndex=2
wld.innerHTML="吴良鼎"
wld.id="wld"
//wqhgjTOP
wqhgjTOP.style.position="absolute"
wqhgjTOP.style.top=0+"px"
wqhgjTOP.style.left=wqhLEFT+(wqhWIDTH/2)+"px"
wqhgjTOP.style.background="red"
wqhgjTOP.style.height=wqhTOP+"px"
wqhgjTOP.style.width=wqhgjsize+"px"
wqhgjTOP.style.zIndex=4
wqhgjTOP.style.display=gamekd
wqhgjTOP.id="wqhgjTOP"
//wqhgjBOTTOM
wqhgjBOTTOM.style.position="absolute"
wqhgjBOTTOM.style.top=wqhTOP+wqhHEIGHT+10+"px"
wqhgjBOTTOM.style.left=wqhLEFT+(wqhWIDTH/2)+"px"
wqhgjBOTTOM.style.background="red"
wqhgjBOTTOM.style.height=300+"vh"
wqhgjBOTTOM.style.width=wqhgjsize+"px"
wqhgjBOTTOM.style.zIndex=4
wqhgjBOTTOM.style.display=gamekd
wqhgjBOTTOM.id="wqhgjBOTTOM"
//wqhgjLEFT
wqhgjLEFT.style.position="absolute"
wqhgjLEFT.style.top=wqhTOP+(wqhHEIGHT/2)+"px"
wqhgjLEFT.style.left=0+"px"
wqhgjLEFT.style.background="red"
wqhgjLEFT.style.width=wqhLEFT+"px"
wqhgjLEFT.style.height=wqhgjsize+"px"
wqhgjLEFT.style.zIndex=4
wqhgjLEFT.style.display=gamekd
wqhgjLEFT.id="wqhgjLEFT"
//wqhgjRIGHT
wqhgjRIGHT.style.position="absolute"
wqhgjRIGHT.style.top=wqhTOP+(wqhHEIGHT/2)+"px"
wqhgjRIGHT.style.left=wqhLEFT+wqhWIDTH+10+"px"
wqhgjRIGHT.style.background="red"
wqhgjRIGHT.style.width=300+"vh"
wqhgjRIGHT.style.height=wqhgjsize+"px"
wqhgjRIGHT.style.zIndex=4
wqhgjRIGHT.style.display=gamekd
wqhgjRIGHT.id="wqhgjRIGHT"
//出口
chuko.style.position="absolute"
chuko.style.width=chukoWidth+"px"
chuko.style.height=chukoHeight+"px"
chuko.style.top=chukoTop+'px'
chuko.style.left=chukoLeft+"px"
chuko.style.border="5px solid red"
chuko2.style.position="absolute"
chuko2.style.width=chuko2Width+"px"
chuko2.style.height=chuko2Height+"px"
chuko2.style.top=chuko2Top+'px'
chuko2.style.left=chuko2Left+"px"
chuko2.style.border="5px solid coral"
chuko3.style.position="absolute"
chuko3.style.width=chuko3Width+"px"
chuko3.style.height=chuko3Height+"px"
chuko3.style.top=chuko3Top+'px'
chuko3.style.left=chuko3Left+"px"
chuko3.style.background="green"
	document.body.appendChild(player)
	document.body.appendChild(wqh)
	document.body.appendChild(wld)
	document.body.appendChild(wqhgjTOP)
	document.body.appendChild(wqhgjBOTTOM)
	document.body.appendChild(wqhgjLEFT)
	document.body.appendChild(wqhgjRIGHT)
	document.body.appendChild(chuko)
	document.body.appendChild(chuko2)
	document.body.appendChild(chuko3)
	document.body.appendChild(Mass)
	//游戏开始
	var ksgame=setInterval(()=>{
		chuko3.style.width=chuko3Width+"px"
		Mass.style.width=playerMASS+"%"
		if(wqhTOP<playerTOP){
			if(wqhLEFT<playerLEFT){
				if(playerTOP-wqhTOP<playerLEFT-wqhLEFT){
					wqhTOP+=wqhsd
				}else{
					wqhLEFT+=wqhsd
				}
			}else{
				if(playerTOP-wqhTOP<wqhLEFT-playerLEFT){
					wqhTOP+=wqhsd
				}else{
					wqhLEFT-=wqhsd
				}
			}
		}else{
			if(wqhLEFT<playerLEFT){
				if(wqhTOP-playerTOP<playerLEFT-wqhLEFT){
					wqhTOP-=wqhsd
				}else{
					wqhLEFT+=wqhsd
				}
			}else{
				if(wqhTOP-playerTOP<wqhLEFT-playerLEFT){
					wqhTOP-=wqhsd
				}else{
					wqhLEFT-wqhsd
				}
			}
		}
		if(wldTOP<playerTOP){
			wldTOP+=wldsd
		}else{
			wldTOP-=wldsd
		}
		if(wldLEFT<playerLEFT){
			wldLEFT+=wldsd
		}else{
			wldLEFT-=wldsd
		}
		wqh.style.top=wqhTOP+"px"
		wqh.style.left=wqhLEFT+"px"
		wld.style.top=wldTOP+"px"
		wld.style.left=wldLEFT+"px"
	},20)
	var kdgame=setInterval(()=>{
	if(playerLEFT-wqhLEFT<20&&wqhLEFT-playerLEFT<20){
		if(playerTOP>wqhTOP){
			wqhgjRIGHT.style.display=gamekd
			wqhgjLEFT.style.display=gamekd
			wqhgjTOP.style.display=gamekd
			wqhgjBOTTOM.style.display=gameks
	       wqhgjkd=true
		}else  if(wqhTOP>playerTOP){
			wqhgjRIGHT.style.display=gamekd
			wqhgjLEFT.style.display=gamekd
			wqhgjTOP.style.display=gameks
			wqhgjBOTTOM.style.display=gamekd
			wqhgjkd=true
		
		}
		}else if(playerTOP-wqhTOP<20&&wqhTOP-playerTOP<20){
		if(playerLEFT>wqhLEFT){
			wqhgjRIGHT.style.display=gameks
			wqhgjLEFT.style.display=gamekd
			wqhgjTOP.style.display=gamekd
			wqhgjBOTTOM.style.display=gamekd
			wqhgjkd=true
			
		}else  if(wqhLEFT>playerLEFT){
			wqhgjRIGHT.style.display=gamekd
			wqhgjLEFT.style.display=gameks
			wqhgjTOP.style.display=gamekd
			wqhgjBOTTOM.style.display=gamekd
            wqhgjkd=true
		}
	}else{
		wqhgjkd=false
		wqhgjRIGHT.style.display=gamekd
		wqhgjLEFT.style.display=gamekd
		wqhgjTOP.style.display=gamekd
		wqhgjBOTTOM.style.display=gamekd
	}
		wqhgjRIGHT.style.top=wqhTOP+(wqhHEIGHT/2)+"px"
		wqhgjRIGHT.style.left=wqhLEFT+wqhWIDTH+10+"px"
		
		wqhgjLEFT.style.top=wqhTOP+(wqhHEIGHT/2)+"px"
		wqhgjLEFT.style.left=0+"px"
		wqhgjLEFT.style.width=wqhLEFT+"px"
		wqhgjLEFT.style.height=wqhgjsize+"px"
		
		wqhgjBOTTOM.style.top=wqhTOP+wqhHEIGHT+10+"px"
		wqhgjBOTTOM.style.left=wqhLEFT+(wqhWIDTH/2)+"px"
		
		wqhgjTOP.style.top=0+"px"
		wqhgjTOP.style.left=wqhLEFT+(wqhWIDTH/2)+"px"
		wqhgjTOP.style.height=wqhTOP+"px"
		wqhgjTOP.style.width=wqhgjsize+"px"
		if(((playerTOP>chukoTop-5)&&(playerTOP-chukoTop<40))&&((playerLEFT>chukoLeft-5)&&(playerLEFT-chukoLeft<40)))
		{
		wldsd=2.5
		chuko3Width+=0.01
		chuko3.style.width=chuko3Width+"px"
		if(chuko3Width>chuko2Width){
		chuko3Width-=0.01
		ztyouxi("再来","游戏胜利")
		clearInterval(pdTime)
		clearInterval(ksgame)
		clearInterval(kdgame)
		clearInterval(YXPD)
		}
	
		}else{
			wldsd=newwldsd
		}
	if(playerMASS<=0){
		ztyouxi("重开","游戏失败")
		clearInterval(pdTime)
		clearInterval(ksgame)
		clearInterval(kdgame)
		clearInterval(YXPD)
	}
	
	},1)
	var pdTime=setInterval(()=>{
		if(wqhgjkd){
			wqhTOP=playerTOP
			wqhLEFT=playerLEFT
			wqh.style.top=wqhTOP+"px"
			wqh.style.left=wqhLEFT+"px"
			wqhgjkd=false
			clearTimeout(pdTimes)
		}
	},3000)
	
var YXPD=setInterval(()=>{
	if(((playerTOP>wqhTOP-5)&&(playerTOP-wqhTOP<10))&&((playerLEFT>wqhLEFT-5)&&(playerLEFT-wqhLEFT<10)))
	{
		playerMASS-=5
		Mass.style.width=playerMASS+"%"
	}
	if(((playerTOP>wldTOP-5)&&(playerTOP-wldTOP<10))&&((playerLEFT>wldLEFT-5)&&(playerLEFT-wldLEFT<10)))
	{
		playerMASS-=3
		Mass.style.width=playerMASS+"%"
	}
},200)
	
	//pc端控制
	window.addEventListener("keydown",function(e){
		if(e.keyCode==38){
			playerTOP-=playersd
			if(playerTOP<0){//防止高于屏幕边距
				playerTOP+=playersd
			}
			player.style.top=playerTOP+"px"
		}else if(e.keyCode==40){ 		
			playerTOP+=playersd
			if(playerTOP>690){//防止底于屏幕边距
				playerTOP-=playersd
			}
			player.style.top=playerTOP+"px"
		}else if(e.keyCode==39){
			playerLEFT+=playersd
			if(playerLEFT>1420){//防止超出屏幕右边
				playerLEFT-=playersd
			}
		    player.style.left=playerLEFT+"px"
		}else if(e.keyCode==37){
			playerLEFT-=playersd
			if(playerLEFT<0){////防止超出屏幕左边
				playerLEFT+=playersd
			}
	        	player.style.left=playerLEFT+"px"
		}else if(e.keyCode==192){
			openkzt()
		}
	},false)
	//安卓向上
	var TOPpy=document.querySelector("#TOPpy")
	var TOPpytime=null
    TOPpy.addEventListener("touchstart",function(event){
		TOPpytime=setInterval(()=>{
			playerTOP-=playersd
			if(playerTOP<0){playerTOP+=playersd}
		player.style.top=playerTOP+"px"
		},50)
	},false);
    TOPpy.addEventListener("touchmove",function(event){
		event.preventDefault();
		clearTimeout(TOPpytime);
        TOPpytime=null;
	},false);
    TOPpy.addEventListener("touchend",function(event){
		event.preventDefault();
		clearTimeout(TOPpytime);
        return false;
	},false);
	
	//安卓向下
      var BOTTOMpy=document.querySelector("#BOTTOMpy")
      var BOTTOMpytime=null
      BOTTOMpy.addEventListener("touchstart",function(event){
      	BOTTOMpytime=setInterval(()=>{
      		playerTOP+=playersd
			if(playerTOP>430){playerTOP-=playersd}
      	player.style.top=playerTOP+"px"
      	},50)
      },false);
      BOTTOMpy.addEventListener("touchmove",function(event){
      	event.preventDefault();
      	clearTimeout(BOTTOMpytime);
          BOTTOMpytime=null;
      },false);
      BOTTOMpy.addEventListener("touchend",function(event){
      	event.preventDefault();
      	clearTimeout(BOTTOMpytime);
          return false;
      },false);     
	
//安卓向左
	var LEFTpy=document.querySelector("#LEFTpy")
	var LEFTtime=null
	LEFTpy.addEventListener("touchstart",function(event){
		LEFTpytime=setInterval(()=>{
			playerLEFT-=playersd
			if(playerLEFT<0){playerLEFT+=playersd}
		player.style.left=playerLEFT+"px"
		},50)
	},false);
	LEFTpy.addEventListener("touchmove",function(event){
		event.preventDefault();
		clearTimeout(LEFTpytime);
	    LEFTpytime=null;
	},false);
	LEFTpy.addEventListener("touchend",function(event){
		event.preventDefault();
		clearTimeout(LEFTpytime);
	    return false;
	},false);       
	
	//安卓向右
		var RIGHTpy=document.querySelector("#RIGHTpy")
		var RIGHTpytime=null
		RIGHTpy.addEventListener("touchstart",function(event){
			RIGHTpytime=setInterval(()=>{
				playerLEFT+=playersd
				if(playerLEFT>300){playerLEFT-=playersd}
			player.style.left=playerLEFT+"px"
			},50)
		},false);
		RIGHTpy.addEventListener("touchmove",function(event){
			event.preventDefault();
			clearTimeout(RIGHTpytime);
		    RIGHTpytime=null;
		},false);
		RIGHTpy.addEventListener("touchend",function(event){
			event.preventDefault();
			clearTimeout(RIGHTpytime);
		    return false;
		},false);  
	
	function ztyouxi(nr,jg){
		var zhailai=document.createElement("div")
		var zhailaiH1=document.createElement("h1")
		zhailai.style.position="absolute"
		zhailai.style.top=zhailaiTOP+"px"
		zhailai.style.left=zhailaiLEFT+"px"
		zhailai.style.fontSize=zhailaiSIZE+"vw"
		zhailai.innerHTML=nr+""
		zhailai.style.background="coral"
		zhailai.style.borderRadius="10px"
		
		zhailaiH1.style.position="absolute"
		zhailaiH1.style.top=zhailaiH1TOP+"px"
		zhailaiH1.style.left=zhailaiH1LEFT+"px"
		zhailaiH1.style.fontSize=zhailaiH1SIZE+"vw"
		zhailaiH1.innerHTML=jg+""
		zhailaiH1.style.color="coral"
		document.body.removeChild(player)
		document.body.removeChild(wqh)
		document.body.removeChild(wld)
		document.body.removeChild(wqhgjTOP)
		document.body.removeChild(wqhgjBOTTOM)
		document.body.removeChild(wqhgjLEFT)
		document.body.removeChild(wqhgjRIGHT)
		document.body.removeChild(chuko)
		document.body.removeChild(chuko2)
		document.body.removeChild(chuko3)
		document.body.appendChild(zhailai)
		document.body.appendChild(zhailaiH1)
		document.body.removeChild(Mass)
		if (/(Android)/i.test(navigator.userAgent)) {
		        document.body.removeChild(playButton)
		    }
		zhailai.onclick=function(){
			document.body.removeChild(zhailai)
			document.body.removeChild(zhailaiH1)
			pyH1.style.display="block"
			pyTABLE.style.display="block"
		}
	}
	player.addEventListener("click",function(){
		KZTS++
		if(KZTS%5==0){
			openkzt()
		}    
	},false)
	 
}
        function openkzt(){
			
				wqhsd=0
				wldsd=0
				newwldsd=0
		var inputTop=null
		var inputButtonTop=null
		var inputbackTop=null
		var quxiaoTop=null
		
		var inputLeft=null
		var inputButtonLeft=null
		var inputbackLeft=null
		var quxiaoLeft=null
		
		var inputWidth=null
		var inputButtonFontSize=null
		var inputbackWidth=null
		var quxiaoFontSize=null
		
		var inputHeight=null
		var inputFontSize=null
		var inputbackHeight=null
		var inputbackFontSize=null
		
	   var input = document.createElement("input")
		var inputButton=document.createElement("button")
		var inputback=document.createElement("div")
		 var  quxiao=document.createElement("div")
		 input.type="text"
		 quxiao.innerHTML="X"
		 inputButton.innerHTML="确定"
		 input.style.position="absolute"
		 inputButton.style.position="absolute"
		 inputback.style.position="absolute"
		 quxiao.style.position="absolute"
		 input.id="kzt"
		 inputButton.id="kztbutton"
		if (/(Android)/i.test(navigator.userAgent)) {
		      //  console.log('安卓端')
			  inputTop=160
			   inputButtonTop=160
			   inputbackTop=0
			   quxiaoTop=0
			  
			   inputLeft=50
			   inputButtonLeft=300
			   inputbackLeft=50
			   quxiaoLeft=50
			  
			   inputWidth=200
			   inputButtonFontSize=20
			   inputbackWidth=300
			   quxiaoFontSize=40
			  
			   inputHeight=25
			   inputFontSize=20
			   inputbackHeight=200
			  inputbackFontSize=15
		   } else {
		       // console.log('PC端')
			   inputTop=160
			   inputButtonTop=160
			   inputbackTop=0
			   quxiaoTop=0
			  
	           inputLeft=50
			   inputButtonLeft=300
			   inputbackLeft=50
			   quxiaoLeft=50
			  
	           inputWidth=200
			   inputButtonFontSize=20
			   inputbackWidth=300
			   quxiaoFontSize=40
			  
	           inputHeight=25
			   inputFontSize=20
			   inputbackHeight=200
		      inputbackFontSize=15
		   }
		   
		   input.style.top=inputTop+"px"
		   input.style.left=inputLeft+"px"
		   input.style.width=inputWidth+"px"
		   input.style.height=inputHeight+"px"
		   input.style.fontSize=inputFontSize+"px"
		   
		   inputButton.style.top=inputButtonTop+"px"
		   inputButton.style.left=inputButtonLeft+"px"
		   inputButton.style.fontSize=inputButtonFontSize+"px"
		   
		   inputback.style.top=inputbackTop+"px"
		  inputback.style.left=inputbackLeft+"px"
		 inputback.style.width=inputbackWidth+"px"
		inputback.style.height=inputbackHeight+"px"
	  inputback.style.fontSize=inputbackFontSize+"px"
		   inputback.style.background="yellow"
		   inputback.style.zIndex=6
		   input.style.zIndex=7
		   inputButton.style.zIndex=7
		   quxiao.style.zIndex=7
		   quxiao.style.top=quxiaoTop+"px"
		  quxiao.style.left=quxiaoLeft+"px"
	  quxiao.style.fontSize=quxiaoFontSize+"px"
		   document.body.appendChild(input)
		   document.body.appendChild(inputButton)
		   document.body.appendChild(inputback)
		   document.body.appendChild(quxiao)
		   var kztid = document.querySelector("#kzt")
		   var kztbutton = document.querySelector("#kztbutton")
		   quxiao.onclick=function (){
			 document.body.removeChild(input)
			 document.body.removeChild(inputButton)
			 document.body.removeChild(inputback)
			 document.body.removeChild(quxiao)  
		   }
		   kztbutton.onclick=function (){
			   if(kztid.value=="help"){
				   alert("wqhsd='数值'//吴启航速度\n newwldsd='数值'//吴良鼎速度\n chuko3Width='数值'//进度条\n  playerMASS='数值'//玩家血量\n playersd='数值'/玩家速度")
				   kztid.value=""
			   }
			   eval(kztid.value)
			   kztid.value=""
		   }
          }
}	                        
	                        
	
