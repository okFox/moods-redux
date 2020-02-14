import React, { createContext, useState, useReducer, useContext } from 'react';
import reducer from '../reducers/reducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/actions';
import { getEmoji } from '../selectors/selector';

const moodContext = createContext();

