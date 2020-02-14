import { drinkCoffee, eatSnack, takeNap, study } from '../actions/actions';
import reducer from './reducer';

describe('mood reducer',  () => {
  it('handles the drink coffee action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 2 });
  });
  it('handles the eat snack action', () => {
    const action = eatSnack();
    const initialState = { snacks: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 2 });
  });
  it('handles the take nap action', () => {
    const action = takeNap();
    const initialState = { naps: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 2 });
  });
  it('handles the study action', () => {
    const action = study();
    const initialState = { studies: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ studies: 2 });
  });

});
