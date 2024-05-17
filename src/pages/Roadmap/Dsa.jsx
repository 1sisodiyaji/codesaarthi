import React from 'react';
import './Roadmap.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const StepperSection = ({ title, items }) => (
  <section>
    <h3 className='text-success '>{title}</h3>
    <ul className='text-light'>
      {items.map((item, index) => (
        <li key={index}>{item}
        </li>
      ))}
    </ul>
  </section>
);

const Dsa = () => {
  return (
    <>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Recover password " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/dsa" />
        <meta name="description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <title>Kreeda fantasy app  Projects | CodeSaarthi</title>
        <meta property="og:title" content="Kreeda fantasy app  Projects | CodeSaarthi" />
        <meta property="og:description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/dsa" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
      <div className="container-fluid design  py-3" style={{ backgroundColor: '#031A33' }}>
        <h1 style={{ color: '#FFE164' }}>Data Structures and Algorithms Roadmap</h1>
        <div className="container">
        <div className="row py-3">
          <div className="col-12">
            <div className="stepper">
                <Link to= "/array">
              <StepperSection 
              title="Arrays" 
              items={['Dynamic Arrays (std::vector)', 'Static Arrays (std::array)']} />
              </Link>
            </div>
            <div className="stepper">
              <StepperSection title="Searching Algorithms" items={['Linear Search', 'Binary Search']} />
            </div>
            <div className="stepper">
              <StepperSection
                title="Sorting Algorithms"
                items={['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort']}
              />
            </div>
            <div className="stepper">
              <StepperSection title="Strings" items={['String Operations', 'String Searching and Manipulation']} />
            </div>
            <div className="stepper">
              <StepperSection
                title="Introduction to Data Structures"
                items={['Singly Linked List', 'Doubly Linked List', 'Circular Linked List', 'Stacks', 'Queues', 'Hash Tables']}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Advanced Data Structures"
                items={['Binary Trees', 'Binary Search Trees', 'AVL Trees', 'B-trees', 'Heaps', 'Graphs']}
              />
            </div>
            
            
            <div className="stepper">
              <StepperSection
                title="STL (Standard Template Library) of C++"
                items={[
                  'Array',
                  'Vectors',
                  'Lists',
                  'Stacks',
                  'Queues',
                  'Sets',
                  'Maps',
                  'Priority Queues',
                  'Algorithms (e.g., sorting, searching)',
                  'Graphs',
                ]}
              />

            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Dsa;