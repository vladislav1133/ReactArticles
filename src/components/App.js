import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from "./UserForm";
import Counter from './Counter'
import Filters from "./Filters/Index";


class App extends Component {
    static propTypes = {
    
    }

    render() {
        return (
            <div>
                <Counter/>
                <UserForm/>
                <Filters articles = {[]}/>
                <ArticleList />
            </div>
            )
    }
}

export default App