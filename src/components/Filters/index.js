import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SelectFilter from "./Select";
import DateRange from "./DateRange";

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    }

    render() {
        return (
            <div>
                <SelectFilter/>
                <DateRange/>
            </div>
            )
    }

}

export default Filters