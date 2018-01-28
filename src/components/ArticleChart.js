import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ArticleChart extends Component {
    static propTypes = {
    
    }
    
    render() {//Старый способ привязки рефа(мувитон)
        return <div ref = 'chart'/>

    }

    componentWillReceiveProps(nextProps) {
        //update chart for new articles
    }
    componentDidMount() {
        //d3 works with this.refs.chart
    }

    componentUnmount() {
        //do some cleanup
    }
}

export default ArticleChart