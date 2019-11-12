import React, { Component } from 'react';

export default class TD extends Component {
    render() {
        return (
            <td>
                { this.props.value }
            </td>
        )
    }
}
