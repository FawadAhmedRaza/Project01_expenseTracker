import React, { useContext,useState } from "react";
import {GlobalContext} from "../ContextApi/GlobalContext"
export const AddTransaction=()=>{

const[description,setDescription]=useState('')
const[amount,setAmount]=useState(0)
const{addTransaction}=useContext(GlobalContext)

const onSubmit=(e)=>{

   e.preventDefault();
   const newTransaction={
      id:Date.now(),
      description,
      amount:+amount 
   }

   addTransaction(newTransaction)
}
return(
   <div className="AddTransaction">
      <form onSubmit={onSubmit}>
      
        <div className="form-outer">
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Enter Description" required/>
        </div>   
        <div className="form-outer">
        <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} className="form-control" placeholder="Enter Amount" required/>
        </div> 
        <button  className="btn-add">Add Transaction </button> 
      </form>
   </div>
  
)
}
