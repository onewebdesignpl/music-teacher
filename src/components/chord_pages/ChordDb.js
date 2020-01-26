import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import DbMaj from '../chord_carts/DbMaj';
import DbMin from '../chord_carts/DbMin';
import Db7 from '../chord_carts/Db7';
import DbMin7 from '../chord_carts/DbMin7';

function ChordDb () {

        let match = useRouteMatch();

        return ( 
        <Router>    
            <article>
                <h6>AKORDY Db</h6>
                <p className="p-bold">Akordy w tonacji Db wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/DbMaj`}>Db</Link></li>
                    <li><Link to={`${match.url}/DbMin`}>Dbm</Link></li>
                    <li><Link to={`${match.url}/Db7`}>Db7</Link></li>
                    <li><Link to={`${match.url}/DbMin7`}>Dbm7</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/DbMaj`}>
                        < DbMaj />
                    </Route>
                    <Route path={`${match.path}/DbMin`}>
                        < DbMin />
                    </Route>
                    <Route path={`${match.path}/Db7`}>
                        < Db7 />
                    </Route>
                    <Route path={`${match.path}/DbMin7`}>
                        < DbMin7 />
                    </Route>
                </Switch>
            </article>
        </Router>
         );
}
 
export default ChordDb;

