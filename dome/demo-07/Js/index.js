function getStyle(b,a){
	return(b.currentStyle||getComputedStyle(b,false))[a]}
function startMove(f,d,c)
{c=c||{};c.time=c.time||700;c.type=c.type||"ease-out";
var e=Math.floor(c.time/30);var h={};var a={};
for(var b in d){if(b=="opacity")
	{h[b]=Math.round(parseFloat(getStyle(f,b))*100)}else{h[b]=parseInt(getStyle(f,b))}
a[b]=d[b]-h[b]}var g=0;clearInterval(f.timer);f.timer=setInterval(function(){g++;
	for(var j in d){switch(c.type){case"linear":var i=g/e;var k=h[j]+a[j]*i;
		break;case"ease-out":var i=1-g/e;var k=h[j]+a[j]*(1-i*i*i);break;
	case"ease-in":var i=g/e;var k=h[j]+a[j]*(i*i*i);break}if(j=="opacity")
	{f.style.opacity=k/100;f.style.filter="alpha(opacity:"+k+")"
}else{f.style[j]=k+"px"}}if(g==e){clearInterval(f.timer);c.end&&c.end()}},30)}
var zIndex=2;
function drag(a,b){a.onmousedown=function(f){var c=f||event;
	var e=c.clientX-b.offsetLeft;var d=c.clientY-b.offsetTop;b.style.zIndex=zIndex++;
	b.style.opacity=0.4;b.style.filter="alpha(opacity:40)";
	document.onmousemove=function(h){var g=h||event;b.style.left=g.clientX-e+"px";
	b.style.top=g.clientY-d+"px"};
	document.onmouseup=function(){document.onmousemove=null;document.onmouseup=null;
		a.releaseCapture&&a.releaseCapture();b.style.opacity=1;b.style.filter="alpha(opacity:100)"};
		a.setCapture&&a.setCapture();return false}}
		function rnd(b,a){return parseInt(Math.random()*(a-b)+b)}
		function myWish(){var b=document.getElementById("send");var c=document.getElementById("send-form");c.style.opacity=0;c.style.filter="alpha(opacity:0)";b.onclick=function(){c.style.display="block";c.style.left="50%";c.style.top="50%";c.style.marginLeft=-c.offsetWidth/2+"px";c.style.marginTop=-c.offsetHeight/2+"px";startMove(c,{opacity:100});a()};function a(){var e=document.documentElement.clientWidth;var f=document.documentElement.clientHeight;var d=document.createElement("div");d.style.cssText="position:absolute; left:0; top:0; width:"+e+"px; height:"+f+"px; z-index:100; background:#000; opacity:0.3; filter:alpha(opacity:30);";document.body.appendChild(d)}}
	function nowDrag(){var f=document.getElementById("main");var b=f.children;var d=f.getElementsByTagName("dt");var e=document.documentElement.clientWidth-b[0].offsetWidth;var a=document.documentElement.clientHeight-b[0].offsetHeight;for(var c=0;c<d.length;c++){drag(d[c],b[c]);b[c].onclick=function(){this.style.zIndex=zIndex++};b[c].style.left=rnd(0,e)+"px";b[c].style.top=rnd(0,a-126)+"px"}}
	function checkWord(){var b=document.getElementById("content");var a=document.getElementById("font-num");var c=null;b.oninput=function(){clearInterval(c);var e=50-b.value.length;if(e<=0){e=0;var d=0;c=setInterval(function(){d++;if(d%2){b.style.background="#f60"}else{b.style.background="#fff"}if(d==6){clearInterval(c)}},100)}a.innerHTML=e}}
	function clickFace()
	{var d=document.getElementById("phiz");
	var c=document.getElementById("content");var b=d.children;
	for(var a=0;a<b.length;a++){
		b[a].onclick=function(){
			c.value+="["+this.alt+"]"}}}
			function filterFace(c,b){
				var b={"抓狂":"zhuakuang","抱抱":"baobao","害羞":"haixiu","酷":"ku","嘻嘻":"xixi","太开心":"taikaixin","偷笑":"touxiao","钱":"qian","花心":"huaxin","挤眼":"jiyan"};
				var a=c.replace(/\[[\u4e00-\u9fa5]+\]/g,
					function(d){
						d=d.substring(1,d.length-1);
						return'<img src="Images/phiz/'+b[d]+".gif"+'" />'
					}
					);
				return a};