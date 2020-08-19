import React from 'react';
import {connect, useStore} from 'react-redux';
import styles from './CategoryList.module.css';
const ConnectedCategoryList = ({ categories, currentCategory, dispatch, onSelect }) => {
  const store = useStore();
  const categoryList = categories.map((x => {
    return <li 
            className={(x.id === currentCategory) ? styles.currentCategory : null}
            key={x.id}
            onClick={() => {
              dispatch({
                type : "SET_CATEGORY",
                id : x.id
              })
              //clear the searchQuery on category change
              onSelect();
            }} 
            >{x.name}</li> 
  }))
  return (
    <ul className={styles.categoryList}>
      <li
        className={!currentCategory ? styles.currentCategory : ''}
        onClick={() => {
          dispatch({
            type : 'RESET_CATEGORY'
          })
        }}
      >ALL</li> 
      { categoryList }
    </ul>
  )
}
const mapStateToProps = state => {
  return {
    currentCategory : state.currentCategory
  }
}
const CategoryList = connect(mapStateToProps)(ConnectedCategoryList);
export default CategoryList;
