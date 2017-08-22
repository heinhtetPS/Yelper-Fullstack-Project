import React from 'react';
import { Link } from 'react-router-dom';

class RedNav extends React.Component {

  constructor(props) {
    super(props);
  }

 render() {

   return (
     //toggle class here to make invis nav effect
     <nav className="classic_red_nav">
       <Link to="/login">Log In</Link>
       <Link to="/signup">Sign Up</Link>
     </nav>
   );
 }

  //...
}

export default RedNav;
