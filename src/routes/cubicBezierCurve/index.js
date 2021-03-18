import React from "react";
import './index.css'

class Cubic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { xIndex: 0, yIndex: 0 };
    }


    _onMouseMove(e) {
        this.setState({ xIndex: e.nativeEvent.offsetX, yIndex: e.nativeEvent.offsetY });
    }



    render() {
        const { xIndex, yIndex } = this.state;
       
        const rectangle = (
            <rect
                x={xIndex} y={yIndex}
                width={30} height={65}
                fill="lightsalmon"
            />
        );

        return <div className="container" onClick={this._onMouseMove.bind(this)}>

            {/* <h1>{xIndex} {yIndex}</h1><br /> */}
            <svg
                style={{
                    background: '#000',
                    width: '100%',
                    height: '80%'
                }}

            >
                {rectangle}

            </svg>
        </div>;
    }

}

export default Cubic;