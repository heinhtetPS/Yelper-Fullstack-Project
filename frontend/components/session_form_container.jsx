import { connect } from 'react-redux';

import { loginUser, logoutUser, createNewUser } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    //this checks for currentUser and puts true or false inside the
    //loggedin key of session obj, also errors
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? loginUser : createNewUser;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
  debugger
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
