import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordF extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY F</h6>
                <p className="p-bold">Akordy w tonacji F wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">F</Link></li>
                    <li><Link to="#">Fm</Link></li>
                    <li><Link to="#">F7</Link></li>
                    <li><Link to="#">Fm7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordF;