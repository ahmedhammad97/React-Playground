import React from 'react';

class ContainerComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount () {
        this.timerId = setInterval( () => {
            this.setState( (state, props) => ({
                date : new Date()
            }) )
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval( this.timerId )
    }

    render () {
        return (
            <p>
                <span>{this.props.label}</span>
                <span>{ this.state.date.getSeconds() }</span>
            </p>
        )
    }
}

export default ContainerComponent;
