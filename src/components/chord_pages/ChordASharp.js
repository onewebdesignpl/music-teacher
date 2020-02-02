import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import ASharpMaj from '../chord_carts/ASharpMaj';
import ASharpMin from '../chord_carts/ASharpMin';
import ASharp7 from '../chord_carts/ASharp7';
import ASharpMin7 from '../chord_carts/ASharpMin7';

function ChordASharp () {

    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY A#</h6>
                <p className="p-bold">Akordy w tonacji A# wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/ASharpMaj`}>A#</Link></li>
                    <li><Link to={`${match.url}/ASharpMin`}>A#m</Link></li>
                    <li><Link to={`${match.url}/ASharp7`}>A#7</Link></li>
                    <li><Link to={`${match.url}/ASharpMin7`}>A#m7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/ASharpMaj`}>
                            < ASharpMaj />
                        </Route>
                        <Route path={`${match.path}/ASharpMin`}>
                            < ASharpMin />
                        </Route>
                        <Route path={`${match.path}/ASharp7`}>
                            < ASharp7 />
                        </Route>
                        <Route path={`${match.path}/ASharpMin7`}>
                            < ASharpMin7 />
                        </Route>
                </Switch>
            </article>
        </Router>
        )
}
 
export default ChordASharp;





