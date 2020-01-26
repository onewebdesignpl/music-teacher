import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordG extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY G</h6>
                <p className="p-bold">Akordy w tonacji G wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">G</Link></li>
                    <li><Link to="#">Gm</Link></li>
                    <li><Link to="#">G7</Link></li>
                    <li><Link to="#">Gm7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordG;