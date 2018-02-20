import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

const idGetter = (state, props) => props.id
const commentsGetter = state => state.comments

export const filtrateArticlesSelector = createSelector(articlesGetter,filtersGetter,(articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    console.log('recompute')
    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})


export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---','getting comment', id)
    return comments.find(comment => comment.id === id)
})