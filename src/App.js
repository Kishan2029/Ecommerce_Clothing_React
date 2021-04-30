import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header'
import SignInAndSignUp from './Pages/SignUp-SignIn/SignUp-SignIn'
import {auth} from './Firebase/Firebase'



import './App.css'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  componentDidMount(){
     auth.onAuthStateChanged(user => {
       this.setState({currentUser:user})
       console.log(user);
     })
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
          
      </div>
    );
  }
 
}

export default App;
