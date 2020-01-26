import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordAb extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY Ab</h6>
                <p className="p-bold">Akordy w tonacji Ab wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">Ab</Link></li>
                    <li><Link to="#">Abm</Link></li>
                    <li><Link to="#">Ab7</Link></li>
                    <li><Link to="#">Abm7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordAb;