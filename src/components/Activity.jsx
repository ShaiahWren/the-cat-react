import React from 'react';
import { connect } from 'react-redux';
import { eat, play, nap, setName } from '../redux/actions';

const Activity = ({activity, eat, play, nap, name, setName}) => (
    <>
        <h1>What is the cat doing now??</h1>
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

const mapStateToProps = (state) => {
    const { activity, name } = state;
    return [{activity, name}];
}


export default connect(mapStateToProps, {eat, play, nap, setName})(Activity);
