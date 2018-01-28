import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
        id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    componentWillReceiveProps(nextProps) {
        //console.log('---', this.props.isOpen, nextProps.isOpen);
    }
    
    componentWillMount() {
      //  console.log('mounting');
    }

    render() {

        const {article, isOpen, toggleOpen} = this.props


        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref
        console.log('---', ref);
    }

    componentDidMount() {
        //console.log('mounted');
    }
    getBody() {

        const {article, isOpen} = this.props

        if(!isOpen) return null

        return (
            <section>
                <p>{article.text}</p>
                <CommentList comments = {article.comments} ref = {this.CommentsRef}/>
            </section>
        )
    }

    setCommentsRef = ref => {
        console.log('---', ref)
    }
}

export default toggleOpen(Article)
