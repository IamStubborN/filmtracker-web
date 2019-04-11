import React from 'react';

import classes from './error-indicator.module.scss';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className={classes.errorIndicator}>
      <img src={icon} alt="error"/>
      <span className={classes.boom}>Ошибка!!!</span>
      <span>
        Что-то пошло не так, аяяй.
      </span>
    </div>
  );
};

export default ErrorIndicator;
