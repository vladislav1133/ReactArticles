import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './article.css'



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

    render() {

        const {article, isOpen, toggleOpen} = this.props


        return (
            <div>
                <h3>{article.title}</h3>

                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <TransitionGroup>
                    {this.getBody()}
                </TransitionGroup>
            </div>
        )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    getBody() {

        const {article, isOpen} = this.props

        if (!isOpen) return null

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
                <CommentList comments={article.comments} key={this.state.updateIndex}/>
            </section>
            </CSSTransition>
        )
    }


}

export default Article
