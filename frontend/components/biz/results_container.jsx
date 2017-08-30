import { connect } from 'react-redux';

// import { updateFilter } from '../../actions/filter_actions';
import { selectAllbiz } from '../../reducers/selectors';
import { fetchBusinesses } from '../../actions/business_actions';
import ResultsShow from './results_show';

const mapStateToProps = ({session, biz}) => ({
  //look up what we should put here
  // benches: asArray(state),
  // minSeating: state.filters.minSeating,
  // maxSeating: state.filters.maxSeating
  businesses: selectAllbiz(biz)
});

const mapDispatchToProps = dispatch => ({
  // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsShow);
