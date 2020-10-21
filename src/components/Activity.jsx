import React, { useState } from 'react';
import { connect } from 'react-redux';
import { eat, play, nap, setName } from '../redux/actions';

const Activity = ({activity, eat, play, nap, name, setName}) => {
    const [input, setInput] = useState('');

    const _handleChange = (name) => {
        setInput(name);
    };

    const _handleClick = () => {
        setName(input)
    }

    return (
    <>
        <h1>What is the cat doing now??</h1>
        <input type="text" onChange={(e) => _handleChange(e.target.value)} value={input}/>
        <button onClick={_handleClick}>Submit</button>
        <p>{name} is { activity} </p>
        <button type="button" onClick={() => eat()}>
            Eating
        </button>

        <button type="button" onClick={() => nap()}>
            Napping
        </button>

        <button type="button" onClick={() => play()}>
            Playing
        </button>
    </>
    )
}

const mapStateToProps = state => {
    const {name, activity } = state;
    return { name: name.name, activity: activity.activity };
};


export default connect(mapStateToProps, {eat, play, nap, setName})(Activity);
