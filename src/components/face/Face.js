import React from 'react';
import styles from './Face.css';
import { useSelector } from 'react-redux';
import { getEmoji } from '../../selectors/selector';

const Face = () => {
  const emoji = useSelector(getEmoji);
  return <p className={styles.Face}>{emoji}</p>;
};

export default Face;
