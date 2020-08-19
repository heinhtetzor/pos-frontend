import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const visibilityReducer = (state='TRUE', action) => {
  switch(action.type) {
    case 'TOGGLE_VISIBILITY':
      return !state;
    default :
      return state;
  }
}
const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      let itemInCartIndex = state.findIndex(x => x.id === action.id);
      if(itemInCartIndex >= 0){
        //if already existing item
        state[itemInCartIndex].quantity++;
      }
      else {
        //if new item
        const newItem = {
          id : action.id,
          price : action.price,
          quantity : 1
        }
        state.push(newItem);
      }
      return [...state];

    case 'CLEAR_CART':
      return [];
    case 'CHANGE_QUANTITY':
      //action.id 
      //action.command 
      let itemIndex = state.findIndex(x => x.id === action.id);
      if(action.command === 'up') {
        state[itemIndex].quantity++;
      }
      else if(action.command === 'down') {
        let quantity = state[itemIndex].quantity;
        //edge case
        //handle hitting zero
        if(quantity === 1) {
          //remove the item
          state.splice(itemIndex, 1);
        }
        else {
          state[itemIndex].quantity--;
        }
      }
      return [...state];
    default :
      return state;
  }
}
//table no is defaulted to 1 for testing purposes
const currentTableReducer = (state=1, action) => {
  switch(action.type) {
    case 'SET_TABLE' : 
      return action.tableNo;
    case 'RESET_TABLE' : 
      return null;
    default :
      return state;
  }
}
const itemReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_ITEMS': 
      return action.items;
    default :
      return state;
  }
}
const currentCategoryReducer = (state=null, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return action.id;
    case 'RESET_CATEGORY': 
      return null;
    default : 
      return state;
  }
}
const categoryReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_CATEGORIES' :
      return action.categories;
    default : 
      return state; 
  }
}
const itemApp = combineReducers({
                  items : itemReducer,
                  cart : cartReducer,
                  categories : categoryReducer, 
                  currentCategory : currentCategoryReducer,
                  visibility : visibilityReducer,
                  currentTable : currentTableReducer 
                })
const store = createStore(itemApp, applyMiddleware(thunk));
console.log(store.getState())
export default store;
