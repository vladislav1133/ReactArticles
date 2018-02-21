import {normalizedComments as defaultComments} from '../fixtures'
import {} from '../constants'

const commentsMap = defaultComments.reduce((acc,comment) => {
    acc[comment.id] = comment
    return acc
}, {})

console.log('get comments', defaultComments)
console.log('---11', commentsMap)

export default (commentState = defaultComments, action) => {
    const {type, payload} = action

    switch (type) {

    }

    return commentState
}