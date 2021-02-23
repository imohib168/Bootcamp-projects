import React from 'react';

import Typical from 'react-typical';
import Svg from './../SvgImage/bikeSvg';

import './Body.css';

const Body = () => {
    return (
        <div className="content">
            <div className="svgImage">
                <Svg />
            </div>
            <div className="about">
                <Typical
                    steps={
                        [
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sint in corporis quaerat delectus ipsam', 500,
                            'Excepturi, sit architecto illo, aliquam inventore praesentium itaque laboriosam qui! Magni ipsum illo aperiam animi', 500,
                        ]
                    }
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
        </div>
    )
}

export default Body
