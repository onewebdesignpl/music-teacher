import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import EMaj from '../chord_carts/EMaj';
import EMin from '../chord_carts/EMin';
import E7 from '../chord_carts/E7';
import EMin7 from '../chord_carts/EMin7';

function ChordE () {

    let match = useRouteMatch();

        return ( 
            <Router>
            <article>
                <h6>AKORDY E</h6>
                <p className="p-bold">Akordy w tonacji E wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/EMaj`}>E</Link></li>
                    <li><Link to={`${match.url}/EMin`}>Em</Link></li>
                    <li><Link to={`${match.url}/E7`}>E7</Link></li>
                    <li><Link to={`${match.url}/EMin7`}>Em7</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/EMaj`}>
                        < EMaj />
                    </Route>
                    <Route path={`${match.path}/EMin`}>
                        < EMin />
                    </Route>
                    <Route path={`${match.path}/E7`}>
                        < E7 />
                    </Route>
                    <Route path={`${match.path}/EMin7`}>
                        < EMin7 />
                    </Route>
                </Switch>
            </article>
            </Router>
         )
}
 
export default ChordE;