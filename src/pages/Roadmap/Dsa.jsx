import React from 'react';
import './Roadmap.css';
import { Link } from 'react-router-dom';

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