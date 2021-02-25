import logo from './logo.svg';
import './App.css'
import {Header} from './components/header'
import {Balance} from './components/balance'
import {AccountSummery} from './components/AccountSummery'
import{History} from './components/history'
import {AddTransaction} from'./components/AddTransaction'
import { GlobalProvider } from './ContextApi/GlobalContext';


function App() {
  return (
    <GlobalProvider>
    <div className="main">
    <div className="container main-inner">
    <Header/>
    <Balance/>
    <AccountSummery/>
    <History/>
    <AddTransaction/>
    </div>
    </div>
    </GlobalProvider>
  
  
 
  

  );
}

export default App;
