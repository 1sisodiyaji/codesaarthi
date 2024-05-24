import './Roadmap.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';

const StepperSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='stepper-section'>
    <div className="container-fluid-sm container">
      <div className="row  ">
        <div className="col-1 d-flex align-self-center">
          <i className="fi fi-rr-hand-back-point-right text-warning"></i>
        </div>
        <div className="col-lg-7 col-10 text-start">
        <h5 className='text-light my-2' onClick={toggleOpen} style={{ cursor: 'pointer' }}>
          {title}
          </h5>
          {isOpen && (
            <Link to = "/theory/Cn-Content">
      <ul className='text-light'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </Link>
    )}
        </div>
        <div className="col-lg-4 col-1  d-flex align-self-center justify-content-end">
          <i className="fi fi-rr-angle-small-down text-warning"></i>
        </div>
        </div>
        <hr />
      
    </div>
   
  </section>
  );
};

const Dbms = () => {
  return (
    <>
     <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Database management system roadmap , Dbms Roadmap , roadmap to learn dbms , short revision of dbms. " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Dbms" />
        <meta name="description" content="It is basically a website where we provide a roadmap for learning database management system in easy and early ." />
        <title>DBMS Roadmap | CodeSaarthi</title>
        <meta property="og:title" content="DBMS Roadmap | CodeSaarthi" />
        <meta property="og:description" content="It is basically a website where we provide a roadmap for learning database management system in easy and early ." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/Dbms" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
     <div className="container-fluid design py-3" style={{ backgroundColor: '#1E1E1E' }}>
    <h1 style={{ color: '#FFE164' }}>DBMS Roadmap</h1>
    <div className="container">
      <div className="row py-3">
        <div className="col-12">
          <StepperSection
            title="Introduction to DBMS"
            items={[
              'Definition and purpose of Database Management Systems (DBMS).',
              'Key components: data, database, database management system.',
              'Advantages and disadvantages of using DBMS.',
            ]}
          />
          <StepperSection
            title="Relational Database Management System (RDBMS)"
            items={[
              'Concepts of tables, rows, and columns.',
              'Primary keys, foreign keys, and relationships.',
              'Normalization and denormalization.',
            ]}
          />
          <StepperSection
            title="SQL (Structured Query Language)"
            items={[
              'Basic SQL commands: SELECT, INSERT, UPDATE, DELETE.',
              'Joins and subqueries.',
              'Advanced SQL concepts: views, triggers, stored procedures.',
            ]}
          />
          <StepperSection
            title="Database Design and Normalization"
            items={[
              'Entity-Relationship Diagrams (ERD).',
              'Normalization techniques (1NF, 2NF, 3NF, BCNF).',
              'Database design best practices.',
            ]}
          />
          <StepperSection
            title="Indexing and Performance Tuning"
            items={[
              'Types of indexes: clustered, non-clustered.',
              'Query optimization techniques.',
              'Performance tuning in DBMS.',
            ]}
          />
          <StepperSection
            title="Transactions and Concurrency Control"
            items={[
              'ACID properties (Atomicity, Consistency, Isolation, Durability).',
              'Concurrency control and locking.',
              'Transaction log and recovery.',
            ]}
          />
          <StepperSection
            title="Data Integrity and Constraints"
            items={[
              'Primary keys and foreign keys.',
              'Unique and check constraints.',
              'Referential integrity.',
            ]}
          />
          <StepperSection
            title="Query Optimization"
            items={[
              'Query execution plans.',
              'Indexing strategies.',
              'Cost-based optimization.',
            ]}
          />
          <StepperSection
            title="Joins and Subqueries"
            items={[
              'Types of joins: inner, outer, left, right.',
              'Subqueries and nested queries.',
              'Join optimization techniques.',
            ]}
          />
          <StepperSection
            title="Stored Procedures and Functions"
            items={[
              'Creating and using stored procedures.',
              'Functions and their use cases.',
              'Advantages of using stored procedures and functions.',
            ]}
          />
          <StepperSection
            title="Database Security"
            items={[
              'Roles and responsibilities of a database administrator.',
              'Backup and recovery strategies.',
              'Security and access control.',
            ]}
          />
          <StepperSection
            title="Backup and Recovery"
            items={[
              'Backup types: full, incremental, differential.',
              'Recovery techniques.',
              'Disaster recovery planning.',
            ]}
          />
          <StepperSection
            title="NoSQL Databases"
            items={[
              'Overview of NoSQL databases.',
              'Types: document-oriented, key-value stores, column-family stores, graph databases.',
              'Use cases and limitations of NoSQL databases.',
            ]}
          />
          <StepperSection
            title="Data Warehousing and Business Intelligence"
            items={[
              'Concepts of data warehousing.',
              'ETL (Extract, Transform, Load) processes.',
              'Business intelligence tools and applications.',
            ]}
          />
          <StepperSection
            title="Big Data and Data Mining"
            items={[
              'Introduction to big data concepts.',
              'Data mining techniques and applications.',
              'Big data technologies: Hadoop, Spark.',
            ]}
          />
        </div>
      </div>
    </div>
  </div>
  </>
)};

export default Dbms;
