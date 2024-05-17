import React from 'react';
import './Roadmap.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const StepperSection = ({ title, items }) => (
  <section>
    <h3 className='text-success '>{title}</h3>
    <ul className='text-light'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
);

const Dbms = () => {
  return (
    <>
     <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Recover password " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Dbms" />
        <meta name="description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <title>Kreeda fantasy app  Projects | CodeSaarthi</title>
        <meta property="og:title" content="Kreeda fantasy app  Projects | CodeSaarthi" />
        <meta property="og:description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/Dbms" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
      <div className="container-fluid design  py-3" style={{ backgroundColor: '#031A33' }}>
        <h1 style={{ color: '#FFE164' }}>Database Management Systems (DBMS) Roadmap</h1>
        <div className="container">
        <div className="row py-3">
          <div className="col-12">
            <div className="stepper">
              <StepperSection
                title="Introduction to DBMS"
                items={[
                  'Definition and purpose of Database Management Systems (DBMS).',
                  'Key components: data, database, database management system.',
                  'Advantages and disadvantages of using DBMS.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Relational Database Management System (RDBMS)"
                items={[
                  'Concepts of tables, rows, and columns.',
                  'Primary keys, foreign keys, and relationships.',
                  'Normalization and denormalization.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Database Design and Modeling"
                items={[
                  'Entity-Relationship Diagrams (ERD).',
                  'Normalization techniques (1NF, 2NF, 3NF, BCNF).',
                  'Database design best practices.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="SQL (Structured Query Language)"
                items={[
                  'Basic SQL commands: SELECT, INSERT, UPDATE, DELETE.',
                  'Joins and subqueries.',
                  'Advanced SQL concepts: views, triggers, stored procedures.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Transaction Management"
                items={[
                  'ACID properties (Atomicity, Consistency, Isolation, Durability).',
                  'Concurrency control and locking.',
                  'Transaction log and recovery.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Indexes and Query Optimization"
                items={[
                  'Types of indexes: clustered, non-clustered.',
                  'Query optimization techniques.',
                  'Performance tuning in DBMS.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="NoSQL Databases"
                items={[
                  'Overview of NoSQL databases.',
                  'Types: document-oriented, key-value stores, column-family stores, graph databases.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Data Warehousing and Data Mining"
                items={[
                  'Concepts of data warehousing.',
                  'Data mining techniques and applications.',
                  'OLAP (Online Analytical Processing).',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Database Administration"
                items={[
                  'Roles and responsibilities of a database administrator.',
                  'Backup and recovery strategies.',
                  'Security and access control.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Emerging Trends in DBMS"
                items={[
                  'Big Data and databases.',
                  'Blockchain technology in databases.',
                  'Cloud databases and serverless architecture.',
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

export default Dbms;
