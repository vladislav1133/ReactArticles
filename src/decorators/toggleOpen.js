import React, {Component as ReactComponent} from 'react'
export default (OriginalComponent) => class WrappedComponent extends  ReactComponent {

    state = {
        isOpen: true
    }

    componentDidMount() {
        console.log('---', 'mounting')
    }

    componentDidUpdate() {
        console.log('---', 'updating')
    }
    render() {

        return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen} />
    }


    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}