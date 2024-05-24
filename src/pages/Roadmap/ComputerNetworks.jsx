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
const ComputerNetworks = () => {
  return (
    <>
     <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Compauter Network Roadmap , CN Roadmap , Roadmap for Computer Network , Learn Computer Network easily . " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/ComputerNetwork" />
        <meta name="description" content="It is basically a website where we provide the roadmap for learning the Computer Network as easy and early as it will take less time for learn." />
        <title>CN Roadmap | CodeSaarthi</title>
        <meta property="og:title" content="CN Roadmap | CodeSaarthi" />
        <meta property="og:description" content="It is basically a website where we provide the roadmap for learning the Computer Network as easy and early as it will take less time for learn." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/ComputerNetwork" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
  <div className="container-fluid design py-3" style={{ backgroundColor: '#1E1E1E' }}>
    <h1 style={{ color: '#FFE164' }}>Computer Networks Roadmap</h1>
    <div className="container">
      <div className="row py-3">
        <div className="col-12">
          <StepperSection
            title="Introduction to Computer Networks"
            items={[
              'Definition and purpose of computer networks.',
              'Types of computer networks: LAN, WAN, MAN.',
              'Network topologies and architectures.',
            ]}
          />
          <StepperSection
            title="Network Protocols"
            items={[
              'Definition and importance of network protocols.',
              'Types of network protocols: IP, TCP, UDP, HTTP, etc.',
              'Protocol standards and organizations.',
            ]}
          />
          <StepperSection
            title="OSI Model"
            items={[
              'Seven layers of the OSI model.',
              'Functions of each layer.',
              'Comparison between OSI model and TCP/IP protocol suite.',
            ]}
          />
          <StepperSection
            title="Network Architecture"
            items={[
              'Client-server and peer-to-peer architectures.',
              'Network topologies: bus, star, ring, mesh.',
              'Layered architecture and design principles.',
            ]}
          />
          <StepperSection
            title="Ethernet and LAN Technologies"
            items={[
              'Ethernet standards and technologies.',
              'LAN components and configuration.',
              'Switching and VLANs.',
            ]}
          />
          <StepperSection
            title="Wireless Networks"
            items={[
              'Wireless communication standards (Wi-Fi, Bluetooth, etc.).',
              'Wireless network setup and security.',
              'Advantages and challenges of wireless networks.',
            ]}
          />
          <StepperSection
            title="Network Devices"
            items={[
              'Types of network devices: routers, switches, hubs, bridges.',
              'Functions and features of each device.',
              'Device configuration and management.',
            ]}
          />
          <StepperSection
            title="IP Addressing and Subnetting"
            items={[
              'IPv4 and IPv6 addressing.',
              'Subnetting and CIDR (Classless Inter-Domain Routing).',
              'Address allocation and management.',
            ]}
          />
          <StepperSection
            title="Routing Protocols"
            items={[
              'Introduction to routing and routers.',
              'Types of routing protocols: RIP, OSPF, BGP.',
              'Routing algorithms and metrics.',
            ]}
          />
          <StepperSection
            title="Transport Layer Protocols"
            items={[
              'Functions of the transport layer.',
              'TCP and UDP protocols.',
              'Flow control, error detection, and correction.',
            ]}
          />
          <StepperSection
            title="Application Layer Protocols"
            items={[
              'Common application layer protocols: HTTP, FTP, SMTP, DNS.',
              'Client-server model and web services.',
              'Protocol operation and use cases.',
            ]}
          />
          <StepperSection
            title="Network Security and Cryptography"
            items={[
              'Introduction to network security.',
              'Cryptographic techniques and protocols.',
              'Firewalls, VPNs, and intrusion detection systems.',
            ]}
          />
          <StepperSection
            title="DNS (Domain Name System)"
            items={[
              'Structure and function of DNS.',
              'DNS resolution process.',
              'DNS security and common attacks.',
            ]}
          />
          <StepperSection
            title="DHCP (Dynamic Host Configuration Protocol)"
            items={[
              'Purpose and function of DHCP.',
              'DHCP operation and message flow.',
              'Configuring and troubleshooting DHCP.',
            ]}
          />
          <StepperSection
            title="Network Performance and Quality of Service (QoS)"
            items={[
              'Measuring network performance: latency, bandwidth, throughput.',
              'QoS mechanisms and techniques.',
              'Traffic shaping and management.',
            ]}
          />
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default ComputerNetworks;
