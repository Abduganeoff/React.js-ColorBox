import React, { Component } from 'react'

class Box extends Component {

    handleRemove = () => {
        this.props.remove(this.props.id);
    }

    render() {
        return (
            <div>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.height}em`,
                    backgroundColor: this.props.color
                }} />
                <button onClick={this.handleRemove}>X</button>
            </div>

                
        )
    }
}

export default Box;