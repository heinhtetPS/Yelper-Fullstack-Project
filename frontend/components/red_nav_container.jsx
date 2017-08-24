import { connect } from 'react-redux';

import RedNav from './red_nav';
import { logoutUser } from '../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    //this checks for currentUser and puts true or false inside the
    //loggedin key of session obj, also errors
    //we added current user to use in the dropdown
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  // see what you'll need here
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? loginUser : createNewUser;
  return {
    logoutUser: user => dispatch(logoutUser(user)),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedNav);
