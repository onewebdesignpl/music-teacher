import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import BMaj from '../chord_carts/BMaj';
import BMin from '../chord_carts/BMin';
import B7 from '../chord_carts/B7';
import BMin7 from '../chord_carts/BMin7';

function ChordB () {

    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY B</h6>
                <p className="p-bold">Akordy w tonacji B wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/BMaj`}>B</Link></li>
                    <li><Link to={`${match.url}/BMin`}>Bm</Link></li>
                    <li><Link to={`${match.url}/B7`}>B7</Link></li>
                    <li><Link to={`${match.url}/BMin7`}>Bm7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/BMaj`}>
                            < BMaj />
                        </Route>
                        <Route path={`${match.path}/BMin`}>
                            < BMin />
                        </Route>
                        <Route path={`${match.path}/B7`}>
                            < B7 />
                        </Route>
                        <Route path={`${match.path}/BMin7`}>
                            < BMin7 />
                        </Route>
                </Switch>
            </article>
        </Router>  
        )
}
 
export default ChordB;

