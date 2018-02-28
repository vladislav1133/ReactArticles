import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'
import './style.css'



class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func

    }
    state = {
        updateIndex: 0
    }

    componentDidMount() {
        console.log('---', 'article mounting')
    }

    componentDidUpdate() {
        console.log('---', 'article updating')
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props

        return (
            <div>
                <h3>{article.title}</h3>

                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>delete me</button>
                <TransitionGroup>
                    {this.getBody()}
                </TransitionGroup>
            </div>
        )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
    }

    getBody() {

        const {article, isOpen} = this.props

        if (!isOpen) return null

        console.log('---------------------------ARTICLE',article)
        return (
            <CSSTransition
                in
                classNames = 'article'
                appear = {true}
                timeout = {600}

            >
            <section>
                <p>{article.text}</p>
                <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentList article={article} key={this.state.updateIndex}/>
            </section>
            </CSSTransition>
        )
    }


}

export default connect(null, {deleteArticle})(Article)
