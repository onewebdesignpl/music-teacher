import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import '../../sass/_chordPages.scss';

import CSharpMaj from '../chord_carts/CSharpMaj';
import CSharpMin from '../chord_carts/CSharpMin';
import CSharp7 from '../chord_carts/CSharp7';
import CSharpMin7 from '../chord_carts/CSharpMin7';

function ChordCSharp () {
     
    let match = useRouteMatch();

    return ( 
        <Router>
            <article>
                <h6>AKORDY C#</h6>
                <p className="p-bold">Akordy w tonacji C# wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6 className="categories">Kategorie:</h6>
                <ul>
                    <li><Link to={`${match.url}/csharpmaj`}>C#</Link></li>
                    <li><Link to={`${match.url}/csharpmin`}>C#m</Link></li>
                    <li><Link to={`${match.url}/csharp7`}>C#7</Link></li>
                    <li><Link to={`${match.url}/csharpmin7`}>C#m7</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.path}/csharpmaj`}>
                        < CSharpMaj />
                    </Route>
                    <Route path={`${match.path}/csharpmin`}>
                        < CSharpMin />
                    </Route>
                    <Route path={`${match.path}/csharp7`}>
                        < CSharp7 />
                    </Route>
                    <Route path={`${match.path}/csharpmin7`}>
                        < CSharpMin7 />
                    </Route>
                </Switch>
            </article>
        </Router>
    )
}
 
export default ChordCSharp;