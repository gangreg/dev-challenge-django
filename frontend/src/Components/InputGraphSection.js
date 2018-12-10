import React, { Component } from "react"
import CurrencyInput from "./CurrencyInput"
import SliderInput from "./SliderInput"
import DisplayGraph from "./DisplayGraph"
import Select from './Select';
import "./InputGraphSection.css"

export default class InputGraphSection extends Component {
  componentDidMount() {
    this.props.intialCalculation()
  }

  render() {
    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput 
            value={this.props.savingsAmount}
            updateField={(value) => this.props.updateField('savingsAmount', value)}
          />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput 
            value={this.props.monthlySavings} 
            updateField={(value) => this.props.updateField('monthlySavings', value)}
          />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput 
            value={this.props.interestRate} 
            updateSlider={(value) => this.props.updateField('interestRate', value)}
          />
          <p className="input-label">
            Select how often interest is paid
          </p>
          <Select
            value={this.props.payoutFrequency}
            updateField={(value) => this.props.updateField('payoutFrequency', value)}
            options={[
              {value: '12', label: 'Monthly'},
              {value: '4', label: 'Quarterly'},
              {value: '1', label: 'Yearly'},
            ]}
          />
        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph
            data={this.props.monthlyData}
          />
        </div>
      </div>
    )
  }
}
