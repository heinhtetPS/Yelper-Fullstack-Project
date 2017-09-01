import { connect } from 'react-redux';

import { createNewBusiness } from '../../actions/business_actions';
import BusinessNewForm from './business_new_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    errors: session.errors,
  }
};

//chose form submit method according to current URL
const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createNewBusiness: biz => dispatch(createNewBusiness(biz))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessNewForm);
