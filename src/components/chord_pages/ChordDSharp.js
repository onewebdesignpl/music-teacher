import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import DSharpMaj from '../chord_carts/DSharpMaj';
import DSharpMin from '../chord_carts/DSharpMin';
import DSharp7 from '../chord_carts/DSharp7';
import DSharpMin7 from '../chord_carts/DSharpMin7';

function ChordDSharp () {

    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY D#</h6>
                <p className="p-bold">Akordy w tonacji D# wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/DSharpMaj`}>D#</Link></li>
                    <li><Link to={`${match.url}/DSharpMin`}>D#m</Link></li>
                    <li><Link to={`${match.url}/DSharp7`}>D#7</Link></li>
                    <li><Link to={`${match.url}/DSharpMin7`}>Dm7</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/DSharpMaj`}>
                        < DSharpMaj />
                    </Route>
                    <Route path={`${match.path}/DSharpMin`}>
                        < DSharpMin />
                    </Route>
                    <Route path={`${match.path}/DSharp7`}>
                        < DSharp7 />
                    </Route>
                    <Route path={`${match.path}/DSharpMin7`}>
                        < DSharpMin7 />
                    </Route>
                </Switch>
            </article>
        </Router>
    )
}
 
export default ChordDSharp;

