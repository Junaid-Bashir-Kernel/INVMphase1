import {Tabs,Tab} from "@leafygreen-ui/tabs"
import {useState} from "react"
import AddItems from "../components/additems"
import ItemList from "./itemslist"
import InventoryUpdates from "../components/inventoryupdates"
import Information from "../components/information"
import dynamic from "next/dynamic"

const  DataUpdates =dynamic(()=>import("../components/dataupdates"),{ssr:false});


export default function Tabs1() {

  const [selected,setSelected]=useState(0)
  
  return (
  <div>
    <br/><br/>
   <header style={{backgroundColor:"violet",color:"white"}} className="container">Inventory Management</header>
   
   <Tabs setSelected={setSelected} selected={selected} className="container">

     <Tab name="Home" style={{backgroundColor:""}}><AddItems/></Tab>
     <Tab name="ItemList"><ItemList/></Tab>
     <Tab name="Inventory Updates"><InventoryUpdates/></Tab>
     <Tab name="Information"><Information/></Tab>
     <Tab name="Insights"><DataUpdates/></Tab>


   </Tabs>
  
   </div>
  )
  
  }