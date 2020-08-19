import React, {useRef, useEffect} from 'react';
import styles from './SearchItemInput.module.css';
const SearchItemInput = ({onInput, searchEle}) => {
  useEffect(() => {
    searchEle.current.focus();
  }, [])
  return (
  <input
    type="text"
    ref={searchEle}
    placeholder="Search with Barcode or Text"
    className={styles.searchBox}
    onChange={onInput}
  />
  )
}
export default SearchItemInput;
