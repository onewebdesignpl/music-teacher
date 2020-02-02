import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import GbMaj from '../chord_carts/GbMaj';
import GbMin from '../chord_carts/GbMin';
import Gb7 from '../chord_carts/Gb7';
import GbMin7 from '../chord_carts/GbMin7';

function ChordGb () {

    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY Gb</h6>
                <p className="p-bold">Akordy w tonacji Gb wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/GbMaj`}>Gb</Link></li>
                    <li><Link to={`${match.url}/GBMin`}>Gbm</Link></li>
                    <li><Link to={`${match.url}/GB7`}>Gb7</Link></li>
                    <li><Link to={`${match.url}/GBMin7`}>Gbm7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/GbMaj`}>
                            < GbMaj />
                        </Route>
                        <Route path={`${match.path}/GbMin`}>
                            < GbMin />
                        </Route>
                        <Route path={`${match.path}/Gb7`}>
                            < Gb7 />
                        </Route>
                        <Route path={`${match.path}/GbMin7`}>
                            < GbMin7 />
                        </Route>
                </Switch>
            </article>
        </Router>
    )
}
 
export default ChordGb;

