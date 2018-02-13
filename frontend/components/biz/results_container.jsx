import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { selectAllbiz, asArray } from '../../reducers/selectors';
import { fetchBusinesses } from '../../actions/business_actions';
import ResultsShow from './results_show';

const mapStateToProps = ({filters, biz}) => ({
  //we should put filters here
  // benches: asArray(state),
  // minSeating: state.filters.minSeating,
  searchterm: filters.searchterm,
  businesses: selectAllbiz(biz)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsShow);
