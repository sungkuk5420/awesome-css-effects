const mouseCursor = document.getElementById("cursor");
const navLinks = document.querySelectorAll(".nav-links li");


const handleCursorMove = e=>{
  if(mouseCursor){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }
}

const removeHoverEventToCursor = linkDom => {
  if(mouseCursor){
    mouseCursor.classList.remove("link-grow");
  }
  if(linkDom){
    linkDom.classList.remove('hovered-link');
  }
}
const addHoverEventToCursor = linkDom => {
  if(mouseCursor){
    mouseCursor.classList.add("link-grow");
    if(linkDom){
      linkDom.classList.add('hovered-link');
    }
  }
}
const cursorInit = ()=>{
  window.addEventListener("mousemove",handleCursorMove);
  if(navLinks){
    navLinks.forEach(link=>{
      link.addEventListener("mouseover",()=>{
        addHoverEventToCursor(link);
      });
      link.addEventListener("mouseleave",()=>{
        removeHoverEventToCursor(link);
      });
    })
  }
}

cursorInit();