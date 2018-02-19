import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filtrateArticlesSelector} from "../selectors";


 class ArticleList extends Component{

    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,

    }

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props
        const articleElements = articles.map((article) =>

            <li key={article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}
// Певый метод MapStateToProps хорошо подходит для что бы получить только нужную информацию
export default connect(state => {
    return {
        articles: filtrateArticlesSelector(state)
    }
})(accordion(ArticleList))