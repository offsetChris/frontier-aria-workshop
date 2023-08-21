function update(text, el) {
  let result_element = el.parentElement.querySelector(".highlighting-content");
  if(text[text.length-1] == "\n") {
    text += " ";
  }
  result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
  Prism.highlightElement(result_element);
}

function sync_scroll(el){
  let result_parent = el.parentElement.querySelector(".highlighting");
  result_parent.scrollTop = el.scrollTop;
  result_parent.scrollLeft = el.scrollLeft;
}

/*
Big Thank you to Oliver Green on CSS Tricks for this textarea/code editor concept.
https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/
*/

function setHighlight(){
  const allTextareas = document.querySelectorAll(".editing");
  for(let i=0;i<allTextareas.length;i++){
    const value = allTextareas[i].value;
    update(value, allTextareas[i]);
  }
}
setHighlight();