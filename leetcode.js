var foo = function(){
    var l = document.getElementsByClassName('label');
    var easy = document.getElementsByClassName('css-14oi08n');
    var medium = document.getElementsByClassName('css-dcmtd5');
    var hard = document.getElementsByClassName('css-t42afm');
	for(var i = 0;i<l.length;i++){
        l[i].style.display = 'none';	
	}
	if(medium.length >0){
		medium[0].style.display = 'none';
	}
	if(easy.length >0){
		easy[0].style.display = 'none';
	}
	if(hard.length >0){
		hard[0].style.display = 'none';
	}  
};

for(var i =0;i<100;i++){
    window.setTimeout(foo,100*i);
}


