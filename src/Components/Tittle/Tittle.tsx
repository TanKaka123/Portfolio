import React from 'react';
import { Link } from 'react-router-dom';
import './Tittle.css'

function Tittle() {
    return (
        <div>
             <div className="title" >   
                <Link className='logo-tittle' to="/"><h1 className="">Nguyen Hong Tan</h1></Link>
        </div>
        </div>
    );
}

export default Tittle;