
let add=document.getElementById('inc');
let reset=document.getElementById('rst');
let sub=document.getElementById('dsc');
let n=document.getElementById('count');

var c=0;

add.addEventListener('click',function(){
	c+=1;
  	n.innerText=c;
});
reset.addEventListener('click',function(){
	c=0;
  	n.innerText=c;
});
sub.addEventListener('click',function(){
	c-=1;
  	n.innerText=c;
});