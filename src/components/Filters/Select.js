import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import  'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        selected: []
    }

    handleChange = selected => this.setState({selected})

    
    render() {
        const { selected } = this.state
        const { articles } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id

        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
    
}

export default SelectFilter