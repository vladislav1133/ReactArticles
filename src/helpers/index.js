
export function arrToMap(array) {

    return array.reduce((response,obj) => {
        response[obj.id] = obj
        return response
    }, {})
}

export function mapToArr(obj) {
    return Object.values(obj)
}
