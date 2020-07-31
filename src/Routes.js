import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Users from './views/Users'

const Routes = () => {
    return (
        <Switch>
           <Route exact component={Home} path="/" />
           <Route exact component={About} path="/about" />
           <Route exact component={Users} path="/users" />
        </Switch>
    )
}

export default Routes
