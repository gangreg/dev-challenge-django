import { connect } from 'react-redux';
import InputGraphSection from './InputGraphSection';
import { updateCalculationField, calculate } from '../redux/modules/interest/actions';
import { getGraphFormattedData } from '../redux/modules/interest/selectors';

const mapStateToProps = state => ({
  savingsAmount: state.interest.savingsAmount,
  monthlySavings: state.interest.monthlySavings,
  interestRate: state.interest.interestRate,
  monthlyData: getGraphFormattedData(state),
  payoutFrequency: state.interest.payoutFrequency,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (field, value) => dispatch(updateCalculationField(field, value)),
  intialCalculation: () => dispatch(calculate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputGraphSection);
