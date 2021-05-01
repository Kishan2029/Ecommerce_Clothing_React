import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header'
import SignInAndSignUp from './Pages/SignUp-SignIn/SignUp-SignIn'
import {auth,createUserProfileDocument} from './Firebase/Firebase'



import './App.css'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null

  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
          
        })
      }
      else{
        this.setState({currentUser : userAuth})
      }
     })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
