import React,{useContext} from "react";

import {GlobalContext} from "../ContextApi/GlobalContext"

export const AccountSummery=()=>{
const {transactions}=useContext(GlobalContext);
const amounts=transactions.map(transaction=>transaction.amount);
const Income=amounts
.filter(item=>item>0)
.reduce((acc,item)=>(acc+=item),0)
.toFixed(2)

const Expense=amounts
.filter(item=>item<0)
.reduce((acc,item)=>(acc+=item),0)
.toFixed(2)
return(
   <div className="Account_Summery">
        <div className="income">
        <h1><i class="fas fa-coins" ></i>&nbsp;&nbsp;<i class="fas fa-arrow-up"></i></h1>
                <h2>${Income}</h2>
        </div>
        <div class="Seprator"></div>
    <div className="expense">
            <h1><i class="fas fa-coins" ></i>&nbsp;&nbsp;<i class="fas fa-arrow-down"></i></h1>
            <h2>$ {Expense}</h2>
    </div>
   
   </div>       
)
}