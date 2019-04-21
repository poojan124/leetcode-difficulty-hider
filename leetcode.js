var foo = function(){
    var l = document.getElementsByClassName('label');
	for(var i = 0;i<l.length;i++){
        l[i].style.display = 'none';	
	}
	if(document.getElementsByClassName('css-dcmtd5').length >0){
		document.getElementsByClassName('css-dcmtd5')[0].style.display = 'none';
	}
	if(document.getElementsByClassName('css-14oi08n').length >0){
		document.getElementsByClassName('css-14oi08n')[0].style.display = 'none';
	}
	if(document.getElementsByClassName('css-t42afm').length >0){
		document.getElementsByClassName('css-t42afm')[0].style.display = 'none';
	}  
}

for(var i =0;i<100;i++){
    window.setTimeout(foo,100*i);
}


