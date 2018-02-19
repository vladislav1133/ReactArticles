import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

export const filtrateArticlesSelector = createSelector(articlesGetter,filtersGetter,(articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    console.log('recompute')
    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})
