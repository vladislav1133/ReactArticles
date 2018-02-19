import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayPicker, {DateUtils} from 'react-day-picker'
import {changeDateRange} from "../../AC";
import {connect} from 'react-redux'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
    
    }

    handleDayClick = day => {
        const {changeDateRange, range} = this.props
        changeDateRange(DateUtils.addDayToRange(day, range))
    }

    render() {
        const { from, to } = this.props.range
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
            )
    }
    
}

export default connect(state => ({
    range: state.filters.dateRange
}), {changeDateRange})(DateRange)