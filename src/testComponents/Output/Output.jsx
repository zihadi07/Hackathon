import React from 'react';
import Header from '../Header/Header.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import Footer from '../Footer/Footer.jsx';

function Output() {
  return (
    <div className="App">
      <Header />
      <main className="py-8">
        <CourseList />
      </main>
      <Footer />
    </div>
  );
}

export default Output;

