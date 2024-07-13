import React from 'react';
import CourseCard from '../CourseCard/CourseCard.jsx';

const courses = [
  { title: 'Math 101', description: 'Learn the basics of algebra, geometry, and calculus.' },
  { title: 'History 101', description: 'Explore the history of ancient civilizations.' },
  { title: 'Science 101', description: 'Discover the fundamentals of physics, chemistry, and biology.' },
];

const CourseList = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

