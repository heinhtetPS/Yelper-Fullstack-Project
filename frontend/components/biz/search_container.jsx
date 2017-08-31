import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
// import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  //put filters here
  // benches: asArray(state),
  // minSeating: state.filters.minSeating,
  categories: state.filters.categories,
  state
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
