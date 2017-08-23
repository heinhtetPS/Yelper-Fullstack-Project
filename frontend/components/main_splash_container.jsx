import { connect } from 'react-redux';

// import { loginUser, logoutUser, createNewUser } from '../actions/session_actions';
import MainSplash from './main_splash';

const mapStateToProps = ({ session }) => {
  return {
    //this checks for currentUser and puts true or false inside the
    //loggedin key of session obj, also errors
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  // change this later, probably to search stuff
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? loginUser : createNewUser;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSplash);
