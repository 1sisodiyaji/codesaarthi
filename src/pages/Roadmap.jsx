import React from 'react';
import './Roadmap.css';

export const Roadmap = () => {
  return (
    <>
      <div className="container  my-5">
        <h1>Data Structures and Algorithms Roadmap</h1>
        <div className="row">
          <div className="col-md-8 col-sm-12 border border-danger">
            <div
              data-mdb-scrollspy-init
              data-mdb-target="#scrollspy1"
              className="scrollspy-example"
            >
              <section id="example-1" className="design stepper">
                <h3 className='text-center border'> Arrays </h3>
               
                  <li>Dynamic Arrays (std::vector)</li>
                  <li>Static Arrays (std::array)</li>
                
              </section>

              <section id="example-2" className="design stepper">
                <h3> Strings </h3>
                <ul>
                  <li>String Operations</li>
                  <li>String Searching and Manipulation</li>
                </ul>
              </section>

              <section id="example-3" className="design stepper">
                <h3> Introduction to Data Structures </h3>
                <ul>
                  <li>Singly Linked List</li>
                  <li>Doubly Linked List</li>
                  <li>Circular Linked List</li>
                  <li>Stacks</li>
                  <li>Queues</li>
                  <li>Hash Tables</li>
                </ul>
              </section>
              <section id="example-4" className="design stepper">
                <h3> Advanced Data Structures </h3>
                <ul>
                  <li>Binary Trees</li>
                  <li>Binary Search Trees</li>
                  <li>AVL Trees</li>
                  <li>B-trees</li>
                  <li>Heaps</li>
                  <li>Graphs</li>
                </ul>
              </section>

              <section id="example-5" className="design stepper">
                <h3> Sorting and Searching Algorithms </h3>
                <ul>
                  <li>Bubble Sort</li>
                  <li>Selection Sort</li>
                  <li>Insertion Sort</li>
                  <li>Merge Sort</li>
                  <li>Quick Sort</li>
                  <li>Heap Sort</li>
                </ul>
              </section>

              <section id="example-6" className="design stepper">
                <h3> Searching Algorithms </h3>
                <ul>
                  <li>Linear Search</li>
                  <li>Binary Search</li>
                </ul>
              </section>

              <section id="example-7" className="design stepper">
                <h3> STL (Standard Template Library) of C++ </h3>
                <ul>
                  <li>Array</li>
                  <li>Vectors</li>
                  <li>Lists</li>
                  <li>Stacks</li>
                  <li>Queues</li>
                  <li>Sets</li>
                  <li>Maps</li>
                  <li>Priority Queues</li>
                  <li>Algorithms (e.g., sorting, searching)</li>
                  <li>Graphs</li>
                </ul>
              </section>
            </div>
          </div>

          <div className="col-md-4 col-sm-0">
            <div id="scrollspy1" className="sticky-top">
              <ul className="nav flex-column nav-pills menu-sidebar">
                <li className="nav-item">
                  <a className="nav-link" href="#example-1">
                    Arrays
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#example-2">
                    Strings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#example-3">
                    Introduction to Data Structures
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#example-4">
                    Advanced Data Structures
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#example-5">
                    Sorting and Searching Algorithms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#example-6">
                    Searching Algorithms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#example-7">
                    STL (Standard Template Library) of C++
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
