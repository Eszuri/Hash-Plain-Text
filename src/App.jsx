import crypto from "crypto-js"
import {useEffect, useRef} from 'react'

function App() {
     const hasil = useRef();
     const text = useRef();
     const text2 = useRef("");
     
     function Convert() {
     const hash = crypto.MD5(text.current.value).toString();
     hasil.current.value = hash;
     text2.current.textContent = text.current.value;
     if(text.current.value == "") {
text2.current.textContent = "(text kosong)"
     }
     }
     
     function Copy() {
     navigator.clipboard.writeText(hasil.current.value)
     .then(()=>{
          if (hasil.current.value == ""){
               alert("berhasil tersalin, tetapi text kosong. silahkan pencet convert")
          }else{
          alert("Tersalin")
          }
     })
     .catch(()=>{
          alert("gagal menyalin")
     })
     }
     
     useEffect(() => {
     document.body.classList.add("bg-gray-700");
     hasil.current.disabled=true;
     }, [])
     
  return (
    <>
    <div className={"fixed top-[40%] left-1/2 translate-x-[-50%] w-[90%] text-center"}>
    <h1 className={"text-white text-3xl mb-5"}>Plain Text to Hash MD5</h1>
    <textarea className={"w-full bg-emerald-800 text-white rounded-md p-2 focus:outline-emerald-300"} ref={text} placeholder={"Masukan text disini"}>
    </textarea>
    <button className={"bg-sky-700 w-32 h-10 text-white rounded-md hover:bg-sky-600"} onClick={Convert}>Convert</button>
    <div className={"mt-5 w-full text-left"}>
    <label className={"text-white"}>Nilai Hash dari text : <span ref={text2}> </span></label>
    <div className={"w-full flex gap-2"}>
    <input type="text" ref={hasil} className={"w-[90%] p-2 h-10 rounded-md text-white"} placeholder={"Hasil Output Disini"}/>
    <span className={"bg-sky-600 inline-block w-20 h-10 flex justify-center items-center text-white rounded-[3px] active:bg-sky-700"} onClick={Copy}>Copy</span>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
