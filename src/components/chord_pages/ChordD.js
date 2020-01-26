import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import DMaj from '../chord_carts/DMaj';
import DMin from '../chord_carts/DMin';
import D7 from '../chord_carts/D7';
import DMin7 from '../chord_carts/DMin7';

function ChordD () { 

    let match = useRouteMatch();

    return ( 
          <Router>
              <article>
                <h6>AKORDY D</h6>
                <p className="p-bold">Akordy w tonacji D wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/DMaj`}>D</Link></li>
                    <li><Link to={`${match.url}/DMin`}>Dm</Link></li>
                    <li><Link to={`${match.url}/D7`}>D7</Link></li>
                    <li><Link to={`${match.url}/DMin7`}>Dm7</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/DMaj`}>
                        < DMaj />
                    </Route>
                    <Route path={`${match.path}/DMin`}>
                        < DMin />
                    </Route>
                    <Route path={`${match.path}/D7`}>
                        < D7 />
                    </Route>
                    <Route path={`${match.path}/DMin7`}>
                        < DMin7 />
                    </Route>
                </Switch>
            </article>
          </Router>  
    )
}
 
export default ChordD;

