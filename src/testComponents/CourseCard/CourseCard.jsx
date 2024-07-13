import React from 'react';

const CourseCard = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;

