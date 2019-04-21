var inject = function(css_code){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css_code;
    document.getElementsByTagName('head')[0].appendChild(style);
};
var code = "span.label, div.css-14oi08n, div.css-dcmtd5, div.css-t42afm {display:none}"
inject(code);

