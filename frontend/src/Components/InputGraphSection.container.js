import { connect } from 'react-redux';
import InputGraphSection from './InputGraphSection';

const mapStateToProps = state => ({
  savingsAmount: state.interest.savingsAmount,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputGraphSection);
