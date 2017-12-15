import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import ShelfA from './components/shelfa';
import ShelfB from './components/shelfb';
import ShelfC from './components/shelfc';
import ShelfD from './components/shelfd';

export default (
    <Switch>
        <Route exact path='/' component={ShelfA} />
        <Route path='/shelfb' component={ShelfB} />
        <Route path='/shelfc' component={ShelfC} />
        <Route path='/shelfd' component={ShelfD} />
    </Switch>              
)