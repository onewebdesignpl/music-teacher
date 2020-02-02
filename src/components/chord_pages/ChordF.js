import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import FMaj from '../chord_carts/FMaj';
import FMin from '../chord_carts/FMin';
import F7 from '../chord_carts/F7';
import FMin7 from '../chord_carts/FMin7';

function ChordF () {

    let match = useRouteMatch();

    return ( 
         <Router>
              <article>
                <h6>AKORDY F</h6>
                <p className="p-bold">Akordy w tonacji F wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/FMaj`}>F</Link></li>
                    <li><Link to={`${match.url}/FMin`}>Fm</Link></li>
                    <li><Link to={`${match.url}/F7`}>F7</Link></li>
                    <li><Link to={`${match.url}/FMin7`}>Fm7</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/FMaj`}>
                        < FMaj />
                    </Route>
                    <Route path={`${match.path}/FMin`}>
                        < FMin />
                    </Route>
                    <Route path={`${match.path}/F7`}>
                        < F7 />
                    </Route>
                    <Route path={`${match.path}/FMin7`}>
                        < FMin7 />
                    </Route>
                </Switch>
            </article>
         </Router>  
    )
}
 
export default ChordF;

