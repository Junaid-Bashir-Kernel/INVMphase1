import { useState } from "react"
import dynamic from "next/dynamic"
import Barcode from "./barcode"

const Charrt=dynamic(()=>import("./charrt"),{ssr:false})


export default function Itemview(obj){



return (
  <div>
 <Barcode/>
 </div>
)

}