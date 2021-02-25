import React,{useContext} from "react";
import {GlobalContext} from "../ContextApi/GlobalContext"
export const History=()=>{
const {transactions}=useContext(GlobalContext);
return(
   <div className="History">
      {
         transactions.map(transaction=>
         (
         <div class="d-flex">
         <button>X</button>
         <div className={transaction.amount>0 ? "HistoryDetails-Income":"HistoryDetails-Expense"}>
         <span>{transaction.description}</span>
         <span>{transaction.amount}</span>
         </div>
         </div>
         ))
      }     
   </div>
)
}