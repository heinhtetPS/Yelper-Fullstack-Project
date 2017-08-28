import { connect } from 'react-redux';

// import { updateFilter } from '../../actions/filter_actions';
// import { asArray } from '../../reducers/selectors';
import ResultsShow from './results_show';

const mapStateToProps = state => ({
  //look up what we should put here
  // benches: asArray(state),
  // minSeating: state.filters.minSeating,
  // maxSeating: state.filters.maxSeating
  state
});

const mapDispatchToProps = dispatch => ({
  // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsShow);
