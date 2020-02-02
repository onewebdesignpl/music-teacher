import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import GMaj from '../chord_carts/GMaj';
import GMin from '../chord_carts/GMin';
import G7 from '../chord_carts/G7';
import GMin7 from '../chord_carts/GMin7';

function ChordG () {

    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY G</h6>
                <p className="p-bold">Akordy w tonacji G wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/GMaj`}>G</Link></li>
                    <li><Link to={`${match.url}/GMin`}>Gm</Link></li>
                    <li><Link to={`${match.url}/G7`}>G7</Link></li>
                    <li><Link to={`${match.url}/GMin7`}>Gm7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/GMaj`}>
                            < GMaj />
                        </Route>
                        <Route path={`${match.path}/GMin`}>
                            < GMin />
                        </Route>
                        <Route path={`${match.path}/G7`}>
                            < G7 />
                        </Route>
                        <Route path={`${match.path}/GMin7`}>
                            < GMin7 />
                        </Route>
                </Switch>
            </article>
        </Router>
        )
}
 
export default ChordG;

