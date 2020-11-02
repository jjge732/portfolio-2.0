import React from 'react';

import Container from './Container';
import '../styles/App.css';

const sections = [
  "landing",
  "objective",
  "recentWork",
  "links",
  "contact"
]
export default function App() {

  return (
    <>
      {sections.map((sectionName, sectionIndex) => <Container sectionName={sectionName} sectionIndex={sectionIndex}/>)}
    </>
  );
}