import Quagga from "quagga"
import { useEffect, useState } from "react";

export default function Barcode() {
 const [start,setStart]=useState(false)

useEffect(()=>{


 Quagga.init({
  inputStream : {
    name : "Live",
    type : "LiveStream",
    target:document.getElementById("myelement"),
  },
  decoder : {
    readers : ["code_128_reader","ean_reader"]
  }
}, function(err) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
    Quagga.onDetected(data=>{
     console.log(data.codeResult)
     let codep=document.getElementById("code")
     codep.innerHTML=data.codeResult.code
     
    })
});

//}


},[])


return (
 <>
 <p id="code"></p>
 <div id="myelement" className="viewport"></div>
 </>
)



}