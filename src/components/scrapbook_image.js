import React from 'react';

export default props => {
    console.log('scrapbook image props:', props);
    const { src, style } = props.about;
    return (
        <img src={src} style={style} className="scrapbook-image" />
    );
}