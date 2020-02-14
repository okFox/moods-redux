import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, takeNap, eatSnack, study } from '../actions/actions';



export default function Moods() {
  const dispatch = useDispatch();
 const state = useSelector(state => state);
// export default class Moods extends Component {
  // state = {
  //   coffees: 0,
  //   snacks: 0,
  //   naps: 0,
  //   studies: 0
  // }

  // handleSelection = action => {
  //   switch(action.type) {
  //     case 'DRINK_COFFEE':
  //       this.setState(state => ({ coffees: state.coffees + 1 }));
  //       break;
  //     case 'EAT_SNACK':
  //       this.setState(state => ({ snacks: state.snacks + 1 }));
  //       break;
  //     case 'TAKE_NAP':
  //       this.setState(state => ({ naps: state.naps + 1 }));
  //       break;
  //     case 'STUDY':
  //       this.setState(state => ({ studies: state.studies + 1 }));
  //       break;
  //     default:
  //       console.log(`unhandled type: ${action.type}`);
  //   }
  // }

  // render() {
  //   const { coffees, snacks, naps, studies } = this.state;
  //   const face = getFace(this.state);

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

