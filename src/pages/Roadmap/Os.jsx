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

const Os = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Recover password " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Os" />
        <meta name="description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <title>Kreeda fantasy app  Projects | CodeSaarthi</title>
        <meta property="og:title" content="Kreeda fantasy app  Projects | CodeSaarthi" />
        <meta property="og:description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/Os" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
      <div className="container-fluid design  py-3" style={{ backgroundColor: '#031A33' }}>
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
                title="Types of Operating Systems"
                items={[
                  'Single-tasking vs. Multi-tasking.',
                  'Single-user vs. Multi-user.',
                  'Real-time operating systems.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Computer Architecture"
                items={['Basics of computer architecture and its relation to operating systems.']}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Basic Commands and Shell Scripting"
                items={[
                  'Introduction to command-line interfaces.',
                  'Basic commands and shell scripting for common tasks.',
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
                title="File Systems"
                items={[
                  'File system structure and organization.',
                  'File operations and directory structures.',
                  'Disk scheduling algorithms.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Device Management"
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
                title="Distributed Systems"
                items={[
                  'Concepts of distributed computing.',
                  'Distributed file systems and synchronization.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Networked Operating Systems"
                items={[
                  'Networking concepts and protocols.',
                  'Remote procedure calls and distributed file systems.',
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
                title="Cloud Computing"
                items={[
                  'Cloud service models (IaaS, PaaS, SaaS).',
                  'Virtualization in cloud environments.',
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
                title="Emerging Technologies"
                items={[
                  'Containers and container orchestration (e.g., Docker, Kubernetes).',
                  'Edge computing and IoT (Internet of Things).',
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
