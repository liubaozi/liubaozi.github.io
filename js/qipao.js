// 气泡
function qipao() {
    $('#page-header').circleMagic({
        radius: 10,
        density: .2,
        color: 'rgba(255,255,255,.4)',
        clearOffset: 0.99
    });
}!function(a){a.fn.circleMagic=function(y){var g,x,j,b,u=!0,m=[],v=a.extend({color:"rgba(255,0,0,.5)",radius:10,density:0.3,clearOffset:0.2},y),k=this[0];function w(){u=!(document.body.scrollTop>x)}function z(){g=k.clientWidth,x=k.clientHeight,k.height=x+"px",j.width=g,j.height=x}function p(){if(u){for(var c in b.clearRect(0,0,g,x),m){m[c].draw()}}requestAnimationFrame(p)}function q(){var c=this;function d(){c.pos.x=Math.random()*g,c.pos.y=x+100*Math.random(),c.alpha=0.1+Math.random()*v.clearOffset,c.scale=0.1+0.3*Math.random(),c.speed=Math.random(),"random"===v.color?c.color="rgba("+Math.floor(255*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.random().toPrecision(2)+")":c.color=v.color}c.pos={},d(),this.draw=function(){c.alpha<=0&&d(),c.pos.y-=c.speed,c.alpha-=0.0005,b.beginPath(),b.arc(c.pos.x,c.pos.y,c.scale*v.radius,0,2*Math.PI,!1),b.fillStyle=c.color,b.fill(),b.closePath()}}!function(){g=k.offsetWidth,x=k.offsetHeight,function(){var e=document.createElement("canvas");e.id="canvas",e.style.top=0,e.style.zIndex=0,e.style.position="absolute",k.appendChild(e),e.parentElement.style.overflow="hidden"}(),(j=document.getElementById("canvas")).width=g,j.height=x,b=j.getContext("2d");for(var c=0;c<g*v.density;c++){var d=new q;m.push(d)}p()}(),window.addEventListener("scroll",w,!1),window.addEventListener("resize",z,!1)}}(jQuery);
qipao()