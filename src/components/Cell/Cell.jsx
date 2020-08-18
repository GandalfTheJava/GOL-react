import React, { Component } from 'react';
import './Cell.scss';
class Cell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alive: false
        }
    }

    render() {
        return (
            <div className='container-cell' />
        )
    }
}

export default Cell
