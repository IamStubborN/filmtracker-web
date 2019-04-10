import React from 'react';
import classes from './error-indicator.module.scss';

const ErrorIndicator = ({error}) => {
  return <div>Error! {error}</div>;
};

export default ErrorIndicator;
