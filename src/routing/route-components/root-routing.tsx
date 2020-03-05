import React from 'react';
// import { GlobalProps } from '../../App';
import {Redirect, Route, Switch} from 'react-router';
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import Clothing from '../../components/Clothing/Clothing';
import Kids from '../../components/Kids/Kids';
import Men from '../../components/Men/Men';
import Landing from '../../components/Landing/Landing';
import {RouteUtils} from '../route-utils';
import {RoutePath} from '../routes';
import Women from '../../components/Women/Women';
import SecondInnings from '../../components/Second_Innings/Second_Innings';
import Cosmetics from '../../components/Cosmetics/Cosmetics';
import Cart from '../../components/Cart/Cart';


export const RootRouting: React.FC<any> = (props) => {
    return (
        <Switch>
            <Route exact path='/'>
                <Redirect to={RouteUtils.getPath(RoutePath.home)}/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.login)}>
                <Login/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.register)}>
                <Register/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.home)}>
                <Landing/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.clothing)}>
                <Clothing/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.kids)}>
                <Kids/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.men)}>
                <Men/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.women)}>
                <Women/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.secondInnings)}>
                <SecondInnings/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.cosmetics)}>
                <Cosmetics/>
            </Route>
            <Route path={RouteUtils.getPath(RoutePath.cart)}>
                <Cart/>
            </Route>
        </Switch>
    );
};
