import { connect } from 'react-redux';
import InputGraphSection from './InputGraphSection';
import { updateCalculationField } from '../redux/modules/interest/actions';

const mapStateToProps = state => ({
  savingsAmount: state.interest.savingsAmount,
  monthlySavings: state.interest.monthlySavings,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (field, value) => dispatch(updateCalculationField(field, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputGraphSection);
