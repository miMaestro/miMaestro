import {Switch,Route} from 'react-router-dom'
import React from 'react'
import Dashboard from '../components/Dashboard'
import Chat from '../components/Chat'
import VideoChat from '../components/VideoChat'

export default (
    <Switch>
    <Route exact path='/teacher' component={Dashboard}/>
    <Route path='/Chat' component={Chat}/>
    <Route path='/VideoChat' component={VideoChat}/>
    </Switch>
)