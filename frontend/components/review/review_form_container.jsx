import { connect } from 'react-redux';

import { editReview, createNewReview } from '../../actions/review_actions';
import { fetchABusiness } from '../../actions/business_actions';
import { selectAllbiz } from '../../reducers/selectors';
import ReviewForm from './review_form';

const mapStateToProps = ({ session, biz }) => {
  return {
    //this checks for currentUser and puts true or false inside the
    //loggedin key of session obj, also errors
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    biz: selectAllbiz(biz)
  }
};

//chose form submit method according to current URL
const mapDispatchToProps = (dispatch, { location }) => {

  const formType = location.pathname.split("/")[1];
  const processForm = (formType === 'writeareview') ? createNewReview : editReview;
  return {
    fetchABusiness: id => dispatch(fetchABusiness(id)),
    processForm: review => dispatch(processForm(review)),
    formType
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
