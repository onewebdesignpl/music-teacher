import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import AbMaj from '../chord_carts/AbMaj';
import AbMin from '../chord_carts/AbMin';
import Ab7 from '../chord_carts/Ab7';
import AbMin7 from '../chord_carts/AbMin7';

function ChordAb () {

    let match = useRouteMatch();

    return ( 
           <Router>
               <article>
                <h6>AKORDY Ab</h6>
                <p className="p-bold">Akordy w tonacji Ab wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/AbMaj`}>Ab</Link></li>
                    <li><Link to={`${match.url}/AbMin`}>Abm</Link></li>
                    <li><Link to={`${match.url}/Ab7`}>Ab7</Link></li>
                    <li><Link to={`${match.url}/AbMin7`}>Abm7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/AbMaj`}>
                            < AbMaj />
                        </Route>
                        <Route path={`${match.path}/AbMin`}>
                            < AbMin />
                        </Route>
                        <Route path={`${match.path}/Ab7`}>
                            < Ab7 />
                        </Route>
                        <Route path={`${match.path}/AbMin7`}>
                            < AbMin7 />
                        </Route>
                </Switch>
            </article>
           </Router> 
        )
}
 
export default ChordAb;


