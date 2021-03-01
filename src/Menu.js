import React,{ Component } from 'react';
import {Link} from 'react-router-dom';



class Menu extends Component {

    render(){
        return(
            <div className="menustyle">
               <ul>
                   <li><Link to='/home'>Home</Link> </li>
                   <li><Link to='about'>About</Link></li>
                   <li><Link to='contact'>Contact</Link></li>

               </ul>
            </div>

        );
    }
}

export default Menu;