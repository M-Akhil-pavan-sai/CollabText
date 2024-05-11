import React, { useCallback, useEffect, useState } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import {io} from 'socket.io-client';

export default function EditorDocument() {

    const [socket,setSocket] = useState();
    const [quill,setQuill] = useState();
    useEffect(()=>{
        const s = io("http://localhost:3001");
        setSocket(s);

        return ()=>{
            s.disconnect();
        }
    },[])

    useEffect(()=>{
        if(socket==null ||quill ==null) return;
        const handler = (delta,oldDetla,source)=>{
            if(source!=="user") return;
            socket.emit("send-changes",delta)
        };
        quill.on("text-change",handler)

        return  ()=>{
            quill.of("text-change",handler)
        }
    },[socket,quill])



    useEffect(()=>{
        if(socket==null ||quill ==null) return;
        const handler = (delta)=>{
           quill.updateContents(delta)
        };
        socket.on("receive-changes",handler)

        return  ()=>{
            quill.of("receive-changes",handler)
        }
    },[socket,quill])





    const wrapperRef = useCallback((wrapper)=>{
        if (wrapper === null) return;
        wrapper.innerHTML="";
        const innerEditor = document.createElement("div");
       wrapper.append(innerEditor);
        const q = new Quill(innerEditor,{theme:"snow"});
        setQuill(q);

    },[])
//asd
  
    return (
    <div class="container" ref={wrapperRef}></div>
  )
}
