import {
  DRINK_COFFEE,
  drinkCoffee,
  EAT_SNACK,
  eatSnack,
  TAKE_NAP,
  takeNap,
  STUDY,
  study
} from '../actions/actions';

export default function reducer(state, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    case STUDY:
      return { ...state, studies: state.studies + 1 };
    default:
      return state;
  }
}
