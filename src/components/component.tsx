import React from "react";

export class Component extends React.Component {
    render () {
        return (
            React.createElement('div', null, 'Hello, World!')
        )
    }
}