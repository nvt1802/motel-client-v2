import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import routes, { RouteWithSubRoutes } from './Routes'
import Header from '../containers/header'
import Footer from '../containers/footer'
import Search from '../containers/search'
import Login from '../containers/login'
import { connect } from 'react-redux'
import '../assets/style/index.css'

function App(props) {

  useEffect(() => {

  }, [props])

  return (
    <Router>
      <Header />
      <Search />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch >
      <Login />
      <Footer />
    </Router >
  );
}

const mapStateToProps = state => ({
  authenticate: state.authenticate,
  layout: state.layout
})

const mapDispatchToProps = dispatch => ({
  // initAuthenticate: (account) => dispatch(authenticate.initAuthenticate(account))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
