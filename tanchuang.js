function yangtao(yang)
{
	
                //窗口边距
				 var WINDOWtop;
				var WTNDOWleft;
				//窗口大小
				var WW;
				var WH;
				//按钮大小
				var BW;
				var BH;
				//按钮边距
				var BT;
				var BL;
				var BF;
				//内容
				var H1vw;
				var H1MT;
				
				
				//客户端识别
				if (/(Android)/i.test(navigator.userAgent))
				{
				    //alert('安卓端')
					WW=300
					WH=250
					WINDOWtop=35
					WTNDOWleft=13
					
					BW=230
					BH=60
					BT=65
					BL=10
					BF=11
					
					H1MT=20
					H1vw=8
				}
				else 
				{
					//alert('PC端')
				  WW=450
				   WH=300
				   WINDOWtop=30
				   WTNDOWleft=30
				   
				   BW=100
				   BH=50
				   BL=38
				   BT=67
				   BF=2.5
				   
				   H1MT=20
				   H1vw=3
				}
                 var ALERT = document.createElement("div")
             var WINDOW = document.createElement("div")
             var BUTTON = document.createElement("div")
			 var H1 = document.createElement("h1")
	  //背景
          ALERT.style.width=100+"%"
		  ALERT.style.height=100+"vh"
		  ALERT.style.background="rgba(0,0,0,0.5)"
		  ALERT.style.zIndex=3
		  ALERT.style.position="absolute"
		  ALERT.style.top=0
		  ALERT.id="ALERT"
		//窗口  
		  WINDOW.style.width=WW+"px"
		  WINDOW.style.height=WH+"px"
		  WINDOW.style.background="#fff"
		  WINDOW.style.zIndex=4
		  WINDOW.style.position="absolute"
		  WINDOW.id="WINDOW"
		  WINDOW.style.borderRadius=25+"px";
		  WINDOW.style.top=WINDOWtop+"%"
		  WINDOW.style.left=WTNDOWleft+"%"
		//内容
		  H1.style.fontSize=H1vw+"vw"
		 // H1.style.position="absolute"
		  H1.style.color="indianred"
		  H1.innerHTML=yang
		  H1.style.zIndex=5
		  H1.style.textAlign="center"
		  H1.style.marginTop=H1MT+"%"
		

        //按钮/*
		BUTTON.id="BUTTON"
		BUTTON.style.width=BW+"px"
		BUTTON.style.height=BH+"px"
		BUTTON.style.background="#ed964a"
		BUTTON.style.zIndex=5
		BUTTON.style.position="absolute"
		BUTTON.style.left=BL+"%"
		BUTTON.style.top=BT+"%"
		BUTTON.style.fontSize=BF+"vw"
		BUTTON.style.textAlign="center"
		BUTTON.style.borderRadius=10+"px";
		BUTTON.innerHTML="确定"
		
		  document.body.appendChild(ALERT)
		  document.body.appendChild(WINDOW)
		  WINDOW.appendChild(BUTTON)
		  WINDOW.appendChild(H1)
		  BUTTON.addEventListener("click",function()
		  {
			  document.body.removeChild(ALERT)
			  document.body.removeChild(WINDOW)
			  return true;
			  
		  },false)

}
