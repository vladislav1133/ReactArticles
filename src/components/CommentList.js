import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from "./CommentForm";

function CommentList({article, isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments'

    console.log('---',article)
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({article, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOPen : PropTypes.func
}
function getBody({article: {comments = [], id}, isOpen}) {
    console.log('---','inner id ', id)
    if (!isOpen) return null
    if (!comments.length)
        return <div>
            <p>No comments yet</p>
            <CommentForm articleId={id}/>
        </div>


    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
            <CommentForm articleId={id}/>
        </div>


    )

}

export default toggleOpen(CommentList)