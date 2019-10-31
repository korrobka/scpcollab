"use strict"

window.txt = [];
function parse(data) {
	window.txt = JSON.parse(data);
}
//darken everything
header.nextElementSibling.style="opacity: 0.0";
header.nextElementSibling.nextElementSibling.style="opacity: 0.0";
//except header

parse(en)
while(window.txt.length>0){
addtile(window.txt.pop());
}

parse(cr)
while(window.txt.length>0){
addcredit(window.txt.pop());
}
// en = "@aneckdope~1123; 4443.";
// addcredit(en);
header.nextElementSibling.style=null;
header.nextElementSibling.nextElementSibling.style=null;
end.style="opacity: 1";


function addtile(entryname) {
	let a = document.createElement('a');
	let li = document.createElement('li');
	let inhtml;

	a.target = 	"_blank";
	a.href = 	"http://www.scp-wiki.net/"+
				entryname;

	inhtml = 	"<div class=\"image\"><img src=\"img/scp/"+
				entryname +
				".gif\"></div>";
	li.insertAdjacentHTML("beforeend",inhtml);
	inhtml = 	"<div class=\"overlay image\"><img src=\"img/overlay.png\"></div>";
	li.insertAdjacentHTML("beforeend",inhtml);
	a.insertAdjacentElement("beforeend",li);
	entries.prepend(a);
}

function addcredit(creditstring) {
	let link
	let tpos = creditstring.indexOf("~",0)
	if (creditstring[0]=="@") link = "href=\"https://twitter.com/"+ creditstring.slice(1,tpos) +"\"";
	else link = "";

	let li = document.createElement('li');
	let inhtml;

	inhtml = 	"<a target=\"_blank\" " +
				link + ">" +
				creditstring.slice(0, tpos ) + "</a>" +//name
				"<p>~</p> <p>" +
				creditstring.slice(tpos+1) + "</p>"; //pieces
	li.insertAdjacentHTML("beforeend",inhtml);
	collective.prepend(li);
}