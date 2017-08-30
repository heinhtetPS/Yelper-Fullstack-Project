import { connect } from 'react-redux';

import { editReview, createNewReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ session }) => {
  return {
    //this checks for currentUser and puts true or false inside the
    //loggedin key of session obj, also errors
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
  }
};

//chose form submit method according to current URL
const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'edit') ? editReview : createNewReview;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
