import React, { useState, useContext } from 'react';
import rentAlert from './components/rentAlert.js';

const Parent = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const onRentAlert = () => {
    setOpenAlert(!openAlert);
  };

  return <>{openAlert && <rentAlert onOpenAlert={onRentAlert} />}</>;
};

export default Parent;
