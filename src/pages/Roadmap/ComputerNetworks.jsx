import React from 'react';
import './Roadmap.css';
import { Link } from 'react-router-dom';

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

const ComputerNetworks = () => {
  return (
    <>
      <div className="container-fluid design  py-3" style={{ backgroundColor: '#031A33' }}>
        <h1 style={{ color: '#FFE164' }}>Computer Networks Roadmap</h1>
        <div className="container">
        <div className="row py-3">
          <div className="col-12">
            <div className="stepper">
              <StepperSection
                title="Introduction to Computer Networks"
                items={[
                  'Definition and purpose of computer networks.',
                  'Types of computer networks: LAN, WAN, MAN.',
                  'Network topologies and architectures.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="OSI Model and TCP/IP Protocol Suite"
                items={[
                  'Seven layers of the OSI model.',
                  'Functions of each layer.',
                  'TCP/IP protocol suite and its layers.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Physical Layer and Data Link Layer"
                items={[
                  'Transmission media and types.',
                  'Modulation and multiplexing.',
                  'Error detection and correction.',
                  'MAC addresses and framing.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Network Layer"
                items={[
                  'IP addressing and subnetting.',
                  'Routing algorithms and protocols.',
                  'IPv4 vs. IPv6.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Transport Layer"
                items={[
                  'Multiplexing and demultiplexing.',
                  'Flow control and error recovery.',
                  'TCP and UDP protocols.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Application Layer"
                items={[
                  'Client-server and peer-to-peer architectures.',
                  'HTTP, FTP, SMTP, DNS protocols.',
                  'Socket programming.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Wireless and Mobile Networks"
                items={[
                  'Wireless communication technologies.',
                  'Mobile IP and handling mobility.',
                  'Wireless security and protocols.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Network Security"
                items={[
                  'Cryptography and encryption.',
                  'Firewalls and intrusion detection systems.',
                  'Public and private key infrastructure.',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Network Management and Troubleshooting"
                items={[
                  'SNMP and network monitoring.',
                  'Troubleshooting techniques.',
                  'Quality of Service (QoS).',
                ]}
              />
            </div>
            <div className="stepper">
              <StepperSection
                title="Emerging Technologies"
                items={[
                  'Software-Defined Networking (SDN).',
                  'Internet of Things (IoT).',
                  '5G and beyond.',
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

export default ComputerNetworks;
