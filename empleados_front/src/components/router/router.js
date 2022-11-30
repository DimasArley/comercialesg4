import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import Inicio from '../index/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons"

export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/login"]} component={Login}/>
                <Route exact path={["/home"]} component={Inicio}/>
                <Route exact path={["/"]} component={Inicio}/>
                <Route path={'*'} component={() => (
                    <h1 style={{ marginTop: 300}}>
                        404
                        <br/>
                        Página no encontrada
                        <br/>
                        <FontAwesomeIcon icon={faPersonThroughWindow} />
                    </h1>
                )}
                />
            </Switch>
        </Router>
    )
}
