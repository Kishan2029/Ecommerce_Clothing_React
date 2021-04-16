import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'
import './App.css'



const HatsPage= () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          {/* <Homepage/> */}
      </Switch>
        
    </div>
  );
}

export default App;
