import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import GSharpMaj from '../chord_carts/GSharpMaj';
import GSharpMin from '../chord_carts/GSharpMin';
import GSharp7 from '../chord_carts/GSharp7';
import GSharpMin7 from '../chord_carts/GSharpMin7';

function ChordGSharp () {

    let match = useRouteMatch();

    return ( 
          <Router>
              <article>
                <h6>AKORDY G#</h6>
                <p className="p-bold">Akordy w tonacji G# wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/GSharpMaj`}>G#</Link></li>
                    <li><Link to={`${match.url}/GSharpMin`}>G#m</Link></li>
                    <li><Link to={`${match.url}/GSharp7`}>G#7</Link></li>
                    <li><Link to={`${match.url}/GSharpMin7`}>G#m7</Link></li>
                </ul>
                <Switch>
                        <Route path={`${match.path}/GSharpMaj`}>
                            < GSharpMaj />
                        </Route>
                        <Route path={`${match.path}/GSharpMin`}>
                            < GSharpMin />
                        </Route>
                        <Route path={`${match.path}/GSharp7`}>
                            < GSharp7 />
                        </Route>
                        <Route path={`${match.path}/GSharpMin7`}>
                            < GSharpMin7 />
                        </Route>
                </Switch>
            </article>
          </Router>  
    )
}
 
export default ChordGSharp;

