import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
    }

    remove = (id) => {
        const removedBoxes = this.state.boxes.filter(box => box.id !== id);
        this.setState(state => ({
            boxes: removedBoxes
        }));
    }
    addBox = (newBox) => {
        this.setState( {
            boxes: [...this.state.boxes, newBox]
        });
    }
    render() {
        return(
            <div>
                <h1>Color Box Maker Thingy</h1>
                <NewBoxForm addBox={this.addBox} />
                {this.state.boxes.map( box => (
                        <Box 
                            id = {box.id}
                            key={box.id}
                            height = {box.height}
                            width = {box.width}
                            color = {box.color}
                            remove = {this.remove}
                        />
                        
                        ))}
            </div>
        );
    }
}

export default BoxList;