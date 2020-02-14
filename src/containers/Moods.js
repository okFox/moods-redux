import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, takeNap, eatSnack, study } from '../actions/actions';

export default function Moods() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {state.coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {state.snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {state.naps}</button>
        <button onClick={() => dispatch(study())}>studies - {state.studies}</button>
      </Controls>
      <Face />
    </>
  );
}

