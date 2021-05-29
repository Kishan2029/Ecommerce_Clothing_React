import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header'
import SignInAndSignUp from './Pages/SignUp-SignIn/SignUp-SignIn'
import CheckoutPage from './Pages/Checkout/Checkout'

import {auth,createUserProfileDocument} from './Firebase/Firebase'
import {setCurrentUser} from './Redux/User/User-action'
import {selectCurrentUser} from './Redux/User/User-selector' 


import './App.css'


class App extends React.Component {
  

  unsubscribeFromAuth=null

  componentDidMount(){
    const {setCurrentUser} = this.props;

     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
        setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            
          })
       
          
        })
      }
      else{
       
        setCurrentUser(userAuth)
      }
     })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' 
            render={() => this.props.currentUser ? 
              (<Redirect to='/'/>) 
              :
              (<SignInAndSignUp/>) 
            }/>
        </Switch>
          
      </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
