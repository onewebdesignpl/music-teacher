import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import FSharpMaj from '../chord_carts/FSharpMaj';
import FSharpMin from '../chord_carts/FSharpMin';
import FSharp7 from '../chord_carts/FSharp7';
import FSharpMin7 from '../chord_carts/FSharpMin7';

function ChordFSharp () {

    let match = useRouteMatch();

        return ( 
            <Router>
                <article>
                    <h6>AKORDY F#</h6>
                    <p className="p-bold">Akordy w tonacji F# wraz ze zdjęciami i krótką teorią.</p>
                    <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                    <h6>Kategorie:</h6>
                    <ul>
                        <li><Link to={`${match.url}/FSharpMaj`}>F#</Link></li>
                        <li><Link to={`${match.url}/FSharpMin`}>F#m</Link></li>
                        <li><Link to={`${match.url}/FSharp7`}>F#7</Link></li>
                        <li><Link to={`${match.url}/FSharpMin7`}>F#m7</Link></li>
                    </ul>
                    <Switch>
                        <Route path={`${match.path}/FSharpMaj`}>
                            < FSharpMaj />
                        </Route>
                        <Route path={`${match.path}/FSharpMin`}>
                            < FSharpMin />
                        </Route>
                        <Route path={`${match.path}/FSharp7`}>
                            < FSharp7 />
                        </Route>
                        <Route path={`${match.path}/FSharpMin7`}>
                            < FSharpMin7 />
                        </Route>
                </Switch>
                </article>
            </Router>
         )
}
 
export default ChordFSharp;



