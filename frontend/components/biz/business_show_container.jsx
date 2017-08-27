import { connect } from 'react-redux';

import BusinessShowMain from './business_show_main';
import { fetchABusiness } from '../../actions/business_actions';

const mapStateToProps = ({ session }) => {
  return {
    //here we have to receive the business info somehow
    //based on the user's click on the business box
    //try to get location info from url 
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
