window.onload=function(){
	var oP=document.getElementById('p1');
	var oBtn=document.getElementById('go_btn');	
	
	oBtn.style.display='none';
	var str='Hi,Would you like to know about me?';
	
	var arr=[];
	for(var i=0;i<str.length;i++)
	{
		var oSpan=document.createElement('span');
		oSpan.innerHTML=str.charAt(i);
		oP.appendChild(oSpan);
		arr.push(oSpan)	
	}
	//alert(str.length)
	var n=0;
	var timer=setInterval(function(){
		(function(index){
			move(arr[n],{opacity:1},{
				complete:function(){
					if(index==str.length-1){	
						oBtn.style.display='block';
					}	
				}	
			})
		})(n)
		n++;
		
		if(n == str.length){
			clearInterval(timer)	
		}	
	},100)
};