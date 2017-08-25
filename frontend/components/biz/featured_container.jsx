import { connect } from 'react-redux';

import Featured from './featured';
import { fetchABusiness, fetchBusinesses } from '../../actions/business_actions';
import { selectAllbiz } from '../../reducers/selectors';

const mapStateToProps = ({ session, biz }) => {
  return {
    //this checks for currentUser and puts true or false inside the
    //loggedin key of session obj, also errors
    //we added current user to use in the dropdown
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser,
    biz: selectAllbiz(biz)
  }
};
//put selector up here and it will turn it into an array

const mapDispatchToProps = (dispatch, { location }) => {
  // see what you'll need here
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);
