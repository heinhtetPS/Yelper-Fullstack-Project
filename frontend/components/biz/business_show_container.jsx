import { connect } from 'react-redux';

import BusinessShowMain from './business_show_main';
import { fetchABusiness } from '../../actions/business_actions';

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
  return {
    fetchABusiness: id => dispatch(fetchABusiness(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShowMain);
