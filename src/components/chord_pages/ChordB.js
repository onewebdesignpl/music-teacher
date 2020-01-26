import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordB extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY B</h6>
                <p className="p-bold">Akordy w tonacji B wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">B</Link></li>
                    <li><Link to="#">Bm</Link></li>
                    <li><Link to="#">B7</Link></li>
                    <li><Link to="#">Bm7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordB;