import React from 'react';

import ('./Select.css');

const selectList = [
    {text: 'Drinks', key: 'drinks'},
    {text: 'Foods', key: 'foods'}
];

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActive: 'drinks'
        };
        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive(name) {
        this.setState(state => ({
            currentActive: name
        }));

        if (this.props.action) this.props.action(name);
    }

    render() {
        return (
            <div id="select-content">
                <ul className="select">
                    {selectList.map(((value, index) => {
                        return <li className={value.key === this.state.currentActive ? 'selected' : ''}
                                   onClick={this.toggleActive.bind(this, value.key)} key={index}>{value.text}</li>
                    }))}
                </ul>
            </div>
        )
    }
}

export default Select;