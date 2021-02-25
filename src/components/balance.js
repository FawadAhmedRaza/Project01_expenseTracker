import React,{useContext} from "react";
import {GlobalContext} from "../ContextApi/GlobalContext"

export const Balance=()=>{

const {transactions}=useContext(GlobalContext);
const amounts=transactions.map(transaction=>transaction.amount);

const Income=+amounts
.filter(item=>item>0)
.reduce((acc,item)=>(acc+=item),0)
.toFixed(2)

const Expense=+amounts
.filter(item=>item<0)
.reduce((acc,item)=>(acc+=item),0)
.toFixed(2)

const Balance=Income+Expense
return(
   <div className="balance">
    <span>Your Balance</span>
    <h2>${Balance}</h2>
   </div>
  
)
}