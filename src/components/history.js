import React,{useContext} from "react";
import {GlobalContext} from "../ContextApi/GlobalContext"
export const History=()=>{
const {transactions}=useContext(GlobalContext);
const {deleteTransaction}=useContext(GlobalContext)
return(
   <div className="History">
      {
         transactions.map(transaction=>
         (
         
        <div className="History">
         <div className={transaction.amount>0 ? "HistoryDetails-Income":"HistoryDetails-Expense"}>
         <button onClick={()=>deleteTransaction(transaction.id)} className="btn-delete">X</button><span>{transaction.description}</span>
         <span>{transaction.amount}</span>
         </div> </div>
       
         ))
      }     
   </div>
)
}