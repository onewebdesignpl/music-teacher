import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import Cmaj from '../chord_carts/Cmaj';
import Cmin from '../chord_carts/Cmin';
import C7 from '../chord_carts/C7';
import Cmin7 from '../chord_carts/Cmin7';

function ChordC ()  {

        let match = useRouteMatch();

        return (  
            <Router>
                <article>
                    <h6>AKORDY C</h6>
                    <p className="p-bold">Akordy w tonacji C wraz ze zdjęciami i krótką teorią.</p>
                    <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                    <h6 className="categories">Kategorie:</h6>
                    <ul>
                        <li><Link to={`${match.url}/cmaj`}>Cmaj</Link></li>
                        <li><Link to={`${match.url}/cmin`}>Cm</Link></li>
                        <li><Link to={`${match.url}/c7`}>C7</Link></li>
                        <li><Link to={`${match.url}/cmin7`}>Cm7</Link></li>
                    </ul>
                    <Switch> 
                        <Route path={`${match.path}/cmaj`}>
                            < Cmaj />
                        </Route>
                        <Route path={`${match.path}/cmin`}>
                            < Cmin />
                        </Route>
                        <Route path={`${match.path}/c7`}>
                            < C7 />
                        </Route>
                        <Route path={`${match.path}/cmin7`}>
                            < Cmin7 />
                        </Route>
                    </Switch>
                </article>
            </Router>
         )                
} 
 
export default ChordC;