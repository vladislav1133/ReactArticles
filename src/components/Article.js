import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

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

                <button onClick = {toggleOpen}>
                    {isOpen? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    getBody() {

        const {article, isOpen} = this.props

        if(!isOpen) return null

        return (
            <section>
                <p>{article.text}</p>
                <button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentList comments = {article.comments} key = {this.state.updateIndex}/>
            </section>
        )
    }


}

export default Article
