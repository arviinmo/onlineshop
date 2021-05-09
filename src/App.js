import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './App.css';
import SignInAndSignUppage from './pages/sign-in-and-rejester/sign-in-and-rejester'
import Header from './components/header-component/header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import CheckoutPage from './pages/checkout/checkout';
import {} from './redux/shop/shop.selector';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser, collectionsArray} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            })
          }); 
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items}) ));
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/shop' />) : (<SignInAndSignUppage />)} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: addCollectionAndDocuments
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);