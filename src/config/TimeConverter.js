// TimeConverter.js
import React from 'react';

const TimeConverter = ({ date }) => {
  return (
    <p className="pe-2">
      {new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
    </p>
  );
};

export default TimeConverter;
