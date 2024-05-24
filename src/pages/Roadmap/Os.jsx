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

const Os = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="operating system basics , operating system learn , operating system short notes , operating system notes." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Os" />
        <meta name="description" content="This website is an edtech platform of learning operating system from scratch to end as in simple language to make it better experience of learning ." />
        <title>operating system | CodeSaarthi</title>
        <meta property="og:title" content="operating system | CodeSaarthi" />
        <meta property="og:description" content="This website is an edtech platform of learning operating system from scratch to end as in simple language to make it better experience of learning ." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/Os" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
      <div className="container-fluid design py-3" style={{ backgroundColor: '#1E1E1E' }}>
        <h1 style={{ color: '#FFE164' }}>Operating Systems Roadmap</h1>
        <div className="container">
          <div className="row py-3">
            <div className="col-12">
              <div className="stepper">
                <StepperSection
                  title="Introduction to Operating Systems"
                  items={[
                    'Definition and purpose of an operating system.',
                    'Key functions: process management, memory management, file system, and device management.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Process Management"
                  items={[
                    'Process concepts and states.',
                    'Process scheduling algorithms.',
                    'Interprocess communication and synchronization.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Memory Management"
                  items={[
                    'Memory hierarchy and virtual memory.',
                    'Paging and segmentation.',
                    'Memory allocation techniques.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="File System Management"
                  items={[
                    'File system structure and organization.',
                    'File operations and directory structures.',
                    'Disk scheduling algorithms.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="I/O System Management"
                  items={[
                    'Device drivers and I/O operations.',
                    'Interrupts and DMA (Direct Memory Access).',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Security and Protection"
                  items={[
                    'Authentication and authorization.',
                    'Security policies and mechanisms.',
                    'Cryptography basics.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Scheduling Algorithms"
                  items={[
                    'CPU scheduling algorithms.',
                    'Criteria for selecting scheduling algorithms.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Deadlock Handling"
                  items={[
                    'Conditions for deadlock.',
                    'Deadlock prevention and avoidance.',
                    'Deadlock detection and recovery.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Device Management"
                  items={[
                    'Types of devices and their management.',
                    'Device drivers and interrupt handling.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Virtualization"
                  items={[
                    'Virtual machines and their use cases.',
                    'Hypervisors and virtualization techniques.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Distributed Operating Systems"
                  items={[
                    'Concepts of distributed computing.',
                    'Distributed file systems and synchronization.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Real-Time Operating Systems"
                  items={[
                    'Characteristics and requirements of real-time systems.',
                    'Scheduling algorithms for real-time tasks.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Embedded Operating Systems"
                  items={[
                    'Characteristics of embedded systems.',
                    'Design considerations for embedded operating systems.',
                  ]}
                />
              </div>
              <div className="stepper">
                <StepperSection
                  title="Shell Programming and Scripting"
                  items={[
                    'Introduction to command-line interfaces.',
                    'Basic commands and shell scripting for common tasks.',
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

export default Os;
