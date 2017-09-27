import { connect } from 'react-redux';

import Featured from './featured';
import { fetchABusiness, fetchBusinesses } from '../../actions/business_actions';
import { selectAllbiz } from '../../reducers/selectors';

const mapStateToProps = ({ session, biz }) => {
  return {
    //the biz selection is a temp fix, make selector that selects 3 randoms
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser,
    biz: selectAllbiz(biz).slice(0, 3)
  };
};
//the selector up here will turn it into an array

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);
