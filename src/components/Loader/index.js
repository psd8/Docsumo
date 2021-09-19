import React from 'react';

function Loader(props) {
  const { classes } = props;
  return (
    <div className={classes}>
      <div className={`spinner-border`} role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Loader;
