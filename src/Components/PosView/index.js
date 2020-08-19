import React, {useState, useEffect, useRef} from 'react';
import ItemList from '../ItemList';
import Cart from '../Cart';
import CategoryList from '../CategoryList';
import SearchItemInput from '../SearchItemInput';
import styles from './Posview.module.css';
import {connect, useDispatch, useStore} from 'react-redux';
import { API } from '../../env';
const ConnectedPosView = ({items, categories, visibility}) => {
  const dispatch = useDispatch();
  const searchEle = useRef(null);
  const store = useStore();
  const [searchQuery, setSearchQuery] = useState(null);
  const handleInput = e => {
    setSearchQuery(e.target.value);
    //reset current category state on typing
    dispatch({
      type : 'RESET_CATEGORY' 
    })
  }
  const onSelectHandle = () => {
    searchEle.current.value = "";
  }

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCategories());
  }, [])

  //fetchItems thunk function 
  function fetchItems() {
    return function(dispatch, getState) {
      fetch(`${API}/items`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type : "FETCH_ITEMS",
          items : res
        })
      })
    }
  }
  //fetchCategories thunk function 
  function fetchCategories() {
    return function(dispatch) {
      fetch(`${API}/categories`)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type : "FETCH_CATEGORIES",
            categories : res
          })
        })
    } 
  }
  return (
    <div className={styles.posViewWrapper}>
      <SearchItemInput
        onInput={handleInput}
        searchEle={searchEle} 
      />
      <div className={styles.posView}> 
        <CategoryList
        categories={categories}
        onSelect={onSelectHandle}
        />
        <ItemList
        items={items}
        searchQuery={searchQuery}
        />
        <Cart/>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    visibility : state.visibility,
    items : state.items,
    categories : state.categories
  }
}
const PosView = connect(mapStateToProps)(ConnectedPosView);
export default PosView;
