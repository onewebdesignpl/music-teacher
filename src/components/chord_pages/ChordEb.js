import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import EbMaj from '../chord_carts/EbMaj';
import EbMin from '../chord_carts/EbMin';
import Eb7 from '../chord_carts/Eb7';
import EbMin7 from '../chord_carts/EbMin7';

function ChordEb () {

    let match = useRouteMatch();

    return ( 
         <Router>
             <article>
                <h6>AKORDY Eb</h6>
                <p className="p-bold">Akordy w tonacji Eb wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/EbMaj`}>Eb</Link></li>
                    <li><Link to={`${match.url}/EbMin`}>Ebm</Link></li>
                    <li><Link to={`${match.url}/Eb7`}>Eb7</Link></li>
                    <li><Link to={`${match.url}/EbMin7`}>Ebm7</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/EbMaj`}>
                        < EbMaj />
                    </Route>
                    <Route path={`${match.path}/EbMin`}>
                        < EbMin />
                    </Route>
                    <Route path={`${match.path}/Eb7`}>
                        < Eb7 />
                    </Route>
                    <Route path={`${match.path}/EbMin7`}>
                        < EbMin7 />
                    </Route>
                </Switch>
            </article>
         </Router>   
    )
}
 
export default ChordEb;