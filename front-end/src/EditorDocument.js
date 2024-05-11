import React, { useCallback } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"

export default function EditorDocument() {

    const wrapperRef = useCallback((wrapper)=>{
        if (wrapper === null) return;
        wrapper.innerHTML="";
        const innerEditor = document.createElement("div");
       wrapper.append(innerEditor);
        new Quill(innerEditor,{theme:"snow"})

    },[])
//asd
  
    return (
    <div class="container" ref={wrapperRef}></div>
  )
}
