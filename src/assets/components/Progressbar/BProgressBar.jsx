import React from 'react';

const BProgressBar = ({ percentage, color, height, width }) => {
  return (
    <div className="progress" style={{ height: height, width: width }}>
      <div
        className={`progress-bar progress-bar-striped bg-${color}`}
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default BProgressBar;
