import React, { useEffect } from 'react';
import {connect, useStore} from 'react-redux';
import Item from '../Item';
import styles from './ItemList.module.css';
const ConnectedItemList = ({items, searchQuery, currentCategory, dispatch}) => {
  const store = useStore();

  let filteredItems = items;

  if(currentCategory) {
    filteredItems = items.filter(x => x.category.id === currentCategory);
    searchQuery = null;
  }
  if(searchQuery) {
    filteredItems = items.filter(x => x.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                      x.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
  const itemsList = filteredItems.map(item => {
   return <Item
          key={item.id}
          item={item}
          />
}) 
  return (
    <div className={styles.itemList}>
          <div className={styles.itemGrid}>
        
            {itemsList}
         
          </div>
    </div>
    
  )
}
const mapStateToProps = state => {
  return {
    currentCategory : state.currentCategory
  }
}
const ItemList = connect(mapStateToProps)(ConnectedItemList);
export default ItemList;
