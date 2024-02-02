//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
	//callback
	let para = document.createElement("p");
	let textN = document.createTextNode("DOM load success");
	para.appendChild(textN); // Append the text node to the paragraph element
    document.body.appendChild(para)
});