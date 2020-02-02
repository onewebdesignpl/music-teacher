import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import AMaj from '../chord_carts/AMaj';
import AMin from '../chord_carts/AMin';
import A7 from '../chord_carts/A7';
import AMin7 from '../chord_carts/AMin7';

function ChordA () {

    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY A</h6>
                <p className="p-bold">Akordy w tonacji A wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/AMaj`}>A</Link></li>
                    <li><Link to={`${match.url}/AMin`}>Am</Link></li>
                    <li><Link to={`${match.url}/A7`}>A7</Link></li>
                    <li><Link to={`${match.url}/AMin7`}>Am7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/AMaj`}>
                            < AMaj />
                        </Route>
                        <Route path={`${match.path}/AMin`}>
                            < AMin />
                        </Route>
                        <Route path={`${match.path}/A7`}>
                            < A7 />
                        </Route>
                        <Route path={`${match.path}/AMin7`}>
                            < AMin7 />
                        </Route>
                </Switch>
            </article>
        </Router>
        )
}
 
export default ChordA;




