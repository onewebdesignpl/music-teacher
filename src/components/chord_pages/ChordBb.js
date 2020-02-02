import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import BbMaj from '../chord_carts/BbMaj';
import BbMin from '../chord_carts/BbMin';
import Bb7 from '../chord_carts/Bb7';
import BbMin7 from '../chord_carts/BbMin7';

function ChordBb () {

    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY Bb</h6>
                <p className="p-bold">Akordy w tonacji Bb wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/BbMaj`}>Bb</Link></li>
                    <li><Link to={`${match.url}/BbMin`}>Bbm</Link></li>
                    <li><Link to={`${match.url}/Bb7`}>Bb7</Link></li>
                    <li><Link to={`${match.url}/BbMin7`}>Bbm7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/BbMaj`}>
                            < BbMaj />
                        </Route>
                        <Route path={`${match.path}/BbMin`}>
                            < BbMin />
                        </Route>
                        <Route path={`${match.path}/Bb7`}>
                            < Bb7 />
                        </Route>
                        <Route path={`${match.path}/BbMin7`}>
                            < BbMin7 />
                        </Route>
                </Switch>
            </article>
        </Router>  
        )
}
 
export default ChordBb;







