import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

const Cn_Content = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(1);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle topic selection
  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
    setIsSidebarOpen(false);
  };
  const goToPreviousTopic = () => {
    if (selectedTopic > 1) {
      setSelectedTopic(selectedTopic - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Function to handle selecting the next topic
  const goToNextTopic = () => {
    if (selectedTopic < importantTopics.length) {
      setSelectedTopic(selectedTopic + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const importantTopics = 
  [
    {
      "id": 1,
      "topic": "Introduction to Computer Networks",
      "description": `<strong>Introduction to Computer Networks</strong> <br/>

      Computer networks are essential components of modern communication systems, enabling the exchange of data and resources between devices located across various geographical locations. An understanding of computer networks is crucial in today's interconnected world, where businesses, organizations, and individuals rely heavily on networked systems for communication, collaboration, and access to information.
      
      At its core, a computer network is a collection of interconnected devices, such as computers, servers, routers, switches, and other networked devices, that communicate with each other to share resources and information. These devices are connected through various networking technologies, such as wired or wireless connections, and they follow standardized protocols to facilitate communication and data exchange.
      
      The importance of computer networks cannot be overstated, as they serve as the backbone of the internet and enable a wide range of applications and services, including email, web browsing, social media, video streaming, online gaming, and more. Businesses rely on computer networks for internal communication, data sharing, and collaboration among employees, while organizations leverage networks to provide services to customers and clients worldwide.
      
      Key concepts in computer networks include:
      
      1. <strong>Networking Devices:</strong> Devices such as routers, switches, hubs, and modems play critical roles in network communication, facilitating the routing, switching, and transmission of data packets across networks.
      
      2. <strong>Network Topologies:</strong> Network topologies define the physical or logical layout of devices and connections in a network. Common topologies include bus, star, ring, mesh, and hybrid topologies, each with its advantages and limitations.
      
      3. <strong>Communication Protocols:</strong> Communication protocols define the rules and standards for data exchange between devices on a network. Protocols such as TCP/IP (Transmission Control Protocol/Internet Protocol) govern internet communication, while others, like HTTP (Hypertext Transfer Protocol) and SMTP (Simple Mail Transfer Protocol), are used for specific applications.
      
      4. <strong>Network Layers:</strong> The OSI (Open Systems Interconnection) model and the TCP/IP protocol suite define layered architectures that organize network functions into logical layers. Each layer performs specific tasks related to data transmission, addressing, routing, and error detection and correction.
      
      5. <strong>Network Security:</strong> Security is a critical concern in computer networks, with measures such as encryption, firewalls, intrusion detection systems (IDS), and virtual private networks (VPNs) employed to protect data and systems from unauthorized access and cyber threats.
      
      Understanding the basics of computer networks is essential for anyone working in the field of information technology, telecommunications, or networking. Whether you're a network administrator, systems engineer, software developer, or IT professional, knowledge of computer networks is indispensable for designing, implementing, and maintaining robust and secure network infrastructures.
      
      In summary, computer networks form the foundation of modern communication and information exchange, enabling seamless connectivity and collaboration across diverse devices and platforms. By mastering the fundamentals of computer networks, individuals and organizations can harness the power of networked systems to achieve their goals and objectives in today's digital world.
      `
    }, {
        "id": 2,
        "topic": "Network Protocols",
        "description": `<strong>Network Protocols</strong> <br/>
        Network protocols are sets of rules and conventions that govern the communication and data exchange between devices on a computer network. These protocols define the format, timing, sequencing, and error handling of data packets transmitted over the network, ensuring reliable and efficient communication. There are numerous network protocols, each serving specific purposes and operating at different layers of the OSI (Open Systems Interconnection) model or the TCP/IP (Transmission Control Protocol/Internet Protocol) protocol suite. <br/><br/>
        Examples of common network protocols include:
        <ul>
          <li><strong>Transmission Control Protocol (TCP):</strong> TCP is a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of data packets between devices. It establishes a virtual connection between sender and receiver, ensuring that data is delivered intact and in the correct order.</li>
          <li><strong>User Datagram Protocol (UDP):</strong> UDP is a connectionless protocol that provides fast and lightweight communication between devices. Unlike TCP, UDP does not guarantee delivery or order of packets, making it suitable for applications where speed is prioritized over reliability.</li>
          <li><strong>Internet Protocol (IP):</strong> IP is a network layer protocol responsible for addressing and routing data packets across the network. It defines the format of IP addresses used to identify devices and the routing mechanisms used to forward packets to their destination.</li>
          <li><strong>HTTP (Hypertext Transfer Protocol):</strong> HTTP is an application layer protocol used for transmitting hypertext documents on the World Wide Web. It defines the rules for requesting and delivering web pages, enabling web browsers to retrieve and display content from web servers.</li>
          <li><strong>SMTP (Simple Mail Transfer Protocol):</strong> SMTP is an application layer protocol used for sending and receiving email messages over the internet. It defines the format and transmission of email messages between mail servers, allowing users to exchange electronic mail.</li>
          <li><strong>FTP (File Transfer Protocol):</strong> FTP is an application layer protocol used for transferring files between devices on a network. It provides commands for uploading, downloading, and managing files on remote servers, facilitating file sharing and remote file access.</li>
        </ul>
        Understanding network protocols is essential for network administrators, systems engineers, and IT professionals involved in designing, implementing, and maintaining computer networks. By familiarizing themselves with various protocols and their functionalities, network professionals can troubleshoot network issues, optimize network performance, and ensure the secure and efficient operation of networked systems.
        `
    },{
      "id": 3,
      "topic": "OSI Model",
      "description": "Explanation of the OSI (Open Systems Interconnection) model, its layers, and their functions."
    },{
        "id": 4,
        "topic": "Network Architecture",
        "description": `<strong>Network Architecture</strong> <br/>
        Network architecture refers to the design and structure of a computer network, including its physical layout, logical organization, and communication protocols. It encompasses various components and layers that work together to enable communication and data exchange between devices on the network. Network architecture plays a crucial role in determining the performance, scalability, and reliability of a network, influencing factors such as data transmission speed, network bandwidth, and fault tolerance. <br/><br/>
        Key components of network architecture include:
        <ul>
          <li><strong>Physical Infrastructure:</strong> The physical infrastructure of a network comprises the hardware components, such as routers, switches, cables, and network interface cards (NICs), that facilitate the transmission of data between devices. It includes both wired and wireless technologies and encompasses the physical connections and devices used to interconnect networked devices.</li>
          <li><strong>Network Topology:</strong> Network topology defines the physical or logical layout of devices and connections in a network. Common network topologies include bus, star, ring, mesh, and hybrid topologies, each with its advantages and limitations. Network topology influences factors such as scalability, fault tolerance, and data transmission efficiency.</li>
          <li><strong>Network Protocols:</strong> Network protocols are sets of rules and conventions that govern the communication and data exchange between devices on a network. Protocols such as TCP/IP (Transmission Control Protocol/Internet Protocol) define the format, timing, sequencing, and error handling of data packets transmitted over the network, ensuring reliable and efficient communication.</li>
          <li><strong>Network Services:</strong> Network services provide various functionalities and capabilities that enable users to access resources and services on the network. Examples of network services include file sharing, printing, email, web browsing, remote access, and video conferencing. Network services rely on protocols and standards to facilitate communication and data exchange between devices.</li>
          <li><strong>Network Security:</strong> Network security encompasses measures and mechanisms designed to protect the confidentiality, integrity, and availability of data and resources on the network. Security technologies such as firewalls, intrusion detection systems (IDS), virtual private networks (VPNs), and encryption protocols are employed to safeguard against unauthorized access, data breaches, and cyber attacks.</li>
        </ul>
        Network architecture plays a critical role in modern computing environments, providing the foundation for communication and collaboration among devices and users. By designing and implementing robust network architectures, organizations can ensure the reliability, scalability, and security of their networked systems, enabling seamless connectivity and data exchange in today's digital world.
        `
    },{
      "id": 5,
      "topic": "Ethernet and LAN Technologies",
      "description": "Explanation of Ethernet technology and LAN (Local Area Network) technologies, such as Ethernet standards, LAN architectures, and protocols."
    },
    {
      "id": 6,
      "topic": "Wireless Networks",
      "description": "Discussion on wireless networking technologies, including WiFi, Bluetooth, cellular networks, and their protocols."
    },
    {
      "id": 7,
      "topic": "Network Devices",
      "description": "Overview of network devices, including routers, switches, hubs, repeaters, and their functions in a network."
    },
    {
      "id": 8,
      "topic": "IP Addressing and Subnetting",
      "description": "Explanation of IP addressing, subnetting, subnet masks, and CIDR (Classless Inter-Domain Routing)."
    },
    {
      "id": 9,
      "topic": "Routing Protocols",
      "description": "Discussion on routing protocols used in computer networks, such as RIP (Routing Information Protocol), OSPF (Open Shortest Path First), BGP (Border Gateway Protocol), and their operation."
    },
    {
      "id": 10,
      "topic": "Transport Layer Protocols",
      "description": "Overview of transport layer protocols, including TCP (Transmission Control Protocol) and UDP (User Datagram Protocol), their features, and differences."
    },
    {
      "id": 11,
      "topic": "Application Layer Protocols",
      "description": "Explanation of application layer protocols used in networking, such as HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), and their functions."
    },
    {
      "id": 12,
      "topic": "Network Security and Cryptography",
      "description": "Discussion on network security mechanisms, cryptography techniques, encryption algorithms, and security protocols used to secure computer networks."
    },
    {
      "id": 13,
      "topic": "DNS (Domain Name System)",
      "description": "Overview of the Domain Name System (DNS), its role in translating domain names to IP addresses, DNS hierarchy, and resolution process."
    },
    {
      "id": 14,
      "topic": "DHCP (Dynamic Host Configuration Protocol)",
      "description": "Explanation of the Dynamic Host Configuration Protocol (DHCP), its role in dynamically assigning IP addresses and network configuration to devices."
    },
    {
      "id": 15,
      "topic": "Network Performance and Quality of Service (QoS)",
      "description": "Discussion on network performance optimization techniques, quality of service (QoS) mechanisms, bandwidth management, and traffic shaping."
    }
  ]
  ;


  useEffect(() => {
    if (selectedTopic) {
      const topicName = importantTopics.find(topic => topic.id === selectedTopic)?.topic;
      if (topicName) {
        document.title = `${topicName} | Codesaarthi`;
        document.querySelector('meta[property="og:title"]').setAttribute("content", `${topicName} | Codesaarthi`);
      } else {
        document.querySelector('meta[property="og:title"]').setAttribute("content", "Codesaarthi");
        document.title = "Codesaarthi";
      }
    } else {
      document.querySelector('meta[property="og:title"]').setAttribute("content", "Codesaarthi");
      document.title = "Codesaarthi";
    }
  }, [selectedTopic]);

  return (
    <>
      <Helmet>
        <meta name="keywords" content="DBMS , learn dbms from scratch , DBMS for begineers , Interview preparation for DBMS" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Read-Content" />
        <meta name="description" content="Learn Dbms for interview as short and important concept . DBMS Architecture and Working in SQL and No Sql" />
        <title></title>
        <meta property="og:title" content="" />
        <meta property="og:description" content="Learn Dbms for interview as short and important concept . DBMS Architecture and Working in SQL and No Sql" />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/Read-Content" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
      <div className="container-fluid design g-0" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container">
        <div className=" d-lg-none d-block">
          <button
            onClick={toggleSidebar}
            className=" navbar-toggler  shadow-0 d-lg-none  d-block"
            style={{ color: "#FFE164", fontSize: "1.8rem" }}
          >
            <i className="fi fi-br-align-justify ps-2"></i>
          </button>
        </div>
        <h1 className='py-2 text-success text-decoration-underline'>Let's Learn React in the New Version</h1>
        <div className="row g-0 p-lg-2 p-0 border border-dark">

          <div className="col-lg-3 col-0 p-lg-2 p-0 d-lg-block d-none border border-dark"style={{ backgroundColor: '#262626' }} >
            {/* Rendering topic titles */}
            {importantTopics.map(topic => (
              <div key={topic.id} onClick={() => handleTopicClick(topic.id)} style={{ cursor: 'pointer' }}>
                <p className='text-capitalize' style={{ color: '#FFE164' }}>{topic.topic}</p>
                <hr />
              </div>
            ))}
          </div>
          {isSidebarOpen ?
            <>
              <div className="d-lg-none d-block">


                <div className="container-fluid  g-0 d-lg-none d-block">
                  <div
                    style={{ zIndex: "99" }}
                    className={`sidebar3 ${isSidebarOpen ? "show" : ""
                      } d-lg-none d-md-none d-sm-block`}
                  >
                    {/* Rendering topic titles */}
                    {importantTopics.map((topic) => (
                      <div
                        key={topic.id}
                        onClick={() => handleTopicClick(topic.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <small className="text-capitalize">
                          {topic.topic}
                        </small>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </> : " "}
          <div className="col-lg-9 col-12 ">
            {/* Rendering corresponding descriptions */}
            {selectedTopic !== null && (
              <div className='p-2'>
                <h3 className='text-capitalize text-warning'>{importantTopics[selectedTopic - 1].topic}</h3>
                <div className='text-light p-2' dangerouslySetInnerHTML={{ __html: importantTopics[selectedTopic - 1].description }}></div>
                <div className="row">
                  <div className="col-6 text-start">
                    <div className="btn border text-capitalize text-warning" onClick={goToPreviousTopic}><i className="fi fi-rr-angle-small-left"></i>previous</div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="btn  border text-capitalize text-warning" onClick={goToNextTopic}>Next <i className="fi fi-rr-angle-small-right"></i></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cn_Content;
