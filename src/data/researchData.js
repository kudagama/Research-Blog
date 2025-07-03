// src/data/researchData.js
import airportevi1 from '../assets/airportevi1.jpg';
import airportevi2 from '../assets/airportevi2.jpg';
import airportevi3 from '../assets/airportevi3.jpg';
import airportevi4 from '../assets/airportevi4.jpg';
import portevi1 from '../assets/portevi1.jpg';
import portevi2 from '../assets/portevi2.jpg';
import railwayevi1 from '../assets/railwayevi1.jpg';
import railwayevi2 from '../assets/railwayevi2.jpg';
import railwayevi3 from '../assets/railwayevi3.jpg';
import portevi3 from '../assets/portevi3.jpg';
import portsol1 from '../assets/portsol1.png';
import portsol2 from '../assets/portsol2.png';

export const researchData = [
  {
    id: 1,
    title: "IoT-Based Vehicle Entry Management System",
    subtitle: "Automated Number Plate Recognition for Sri Lanka Ports Authority",
    description: "An innovative IoT solution using ANPR technology to streamline vehicle access control at high-security port facilities.",
    date: "January 2025",
    category: "IoT & Security",
    duration: "6 months",
    coverImage: portevi1,
    introduction: "Efficient and secure access control at high-security areas like ports is essential. Currently, at the main entrance gate of the Sri Lanka Ports Authority, each entering vehicle is manually inspected and its access is verified by officers. This manual method is time-consuming, causes traffic buildup, is prone to human error, and lacks real-time validation efficiency. We propose an IoT-based vehicle entry management system that uses automatic number plate recognition (ANPR) and a central vehicle registration database to streamline and secure vehicle access.",
    evidence: {
      description: "During our visit to the Sri Lanka Ports Authority, we observed the following key issues:",
      points: [
        "Each vehicle is stopped at the entrance for manual inspection",
        "Security officers manually check if the vehicle is registered for entry on that date",
        "This involves checking physical documents or contacting internal departments",
        "During busy hours, vehicles line up, creating delays and logistical issues",
        "There's no current system to automatically identify or verify vehicles",
        "This clearly highlighted the need for an automated gate access system"
      ],
      images: [portevi1, portevi2,portevi3]
    },
    research: "We explored Automatic Number Plate Recognition (ANPR) and its integration with IoT systems in other ports and smart cities. Key findings include:",
    researchPoints: [
      "ANPR systems use high-resolution cameras and AI to read license plates",
      "IoT controllers can process this data and check it against pre-registered vehicle databases",
      "Real-time feedback can be displayed on a digital screen at the gate",
      "Automated gates can allow or block vehicles based on system decisions",
      "This technology has already been successfully implemented in Singapore, Rotterdam Port, and smart toll gates in India"
    ],
    solution: "We propose an IoT-based Vehicle Entry Management System for the main gates at Sri Lanka Ports Authority. Here's how it works:",
    solutionSteps: [
      "A vehicle arrives at the entrance gate",
      "A camera captures the license plate number",
      "The system sends the number to the central access database",
      "If the vehicle is registered for that date: its details are shown on a digital screen and the gate opens automatically",
      "If the vehicle is not registered: a 'Not Authorized' message is displayed, the gate remains closed, and an alert is sent to the security office"
    ],
    components: [
      "ANPR Camera System",
      "IoT Controller (Arduino Uno,ESP32)",
      "Cloud/Local Vehicle Access Database",
      "LCD/LED Display Screen",
      "Automated Boom Barrier Gate",
      "Encrypted communication protocol (HTTPS)"
    ],
    solutionImages: [portsol1,portsol2],
    conclusion: "With this IoT-based ANPR gate entry system, we aim to transform the vehicle access process at the Sri Lanka Ports Authority from a slow, manual procedure into a fast, secure, and automated solution. Our system:",
    benefits: [
      "Reduces entry time per vehicle",
      "Prevents unauthorized access",
      "Frees up human resources for more critical tasks",
      "Enhances the overall efficiency and modernity of the port's operations",
      "Supports the vision of turning Sri Lanka's ports into smart logistic hubs through IoT-driven innovation"
    ]
  },
  {
    id: 2,
    title: "IoT-Based Biometric Authentication System",
    subtitle: "Iris Scanning and Facial Recognition for Airport Security",
    description: "Advanced biometric authentication system using IoT technology to streamline passenger verification at airport entrances.",
    date: "April 2024",
    category: "IoT & Security",
    duration: "15 months",
    coverImage: airportevi1,
    introduction: "Modern airports require advanced security measures that are both efficient and accurate. One of the initial checkpoints for any passenger is the main entrance, where a security officer manually verifies the passenger's passport and compares it with their face. This process is time-consuming, prone to human error, and inefficient during peak hours. To address this, we propose an IoT-based biometric authentication system that automates the identity verification process using iris scanning and facial recognition technology, ensuring faster entry and enhanced security.",
    evidence: {
      description: "During our industrial visit to Bandaranaike International Airport on 2nd April 2024, we observed that:",
      points: [
        "The main entrance security checks rely on human officers visually comparing passport photos with passengers",
        "This method is slow and can be subject to fatigue or oversight",
        "There was no use of biometric automation at the main entrance, even though it is used later during boarding or immigration",
        "Security officers mentioned that long queues and manual checking slow down the entry process, especially during busy travel hours",
        "This highlighted the need for an automated, technologically advanced solution"
      ],
      images: [airportevi1, airportevi2, airportevi3, airportevi4]
    },
    research: "We explored biometric authentication technologies and IoT systems already in use in advanced airports (e.g., Dubai, Singapore Changi). Key findings include:",
    researchPoints: [
      "Iris scanning is one of the most secure biometric methods, more accurate than fingerprints",
      "Facial recognition, when paired with real-time access to immigration/passenger databases, can verify identity in seconds",
      "IoT-based devices connected via secure protocols (MQTT, HTTPS) can enable real-time data checks without manual intervention",
      "Implementing such a system at the main entrance can reduce workload on officers and increase security against identity fraud"
    ],
    solution: "We propose installing an IoT Biometric Verification Machine at the airport main entrance, which functions as follows:",
    solutionSteps: [
      "Passenger approaches the biometric kiosk",
      "The machine scans the passenger's iris and captures their face image",
      "The system cross-references the biometric data with the immigration database or airline records",
      "If matched: an automatic gate opens for the passenger and entry is logged securely",
      "If not matched: access is denied and an alert is sent to a nearby officer"
    ],
    components: [
      "Iris Scanner Module",
      "HD Face Recognition Camera",
      "IoT Controller (Arduino Uno, ESP32)",
      "Secure network communication (Encrypted API access)",
      "Automatic Door Control",
      "Real-time database connection"
    ],
    solutionImages: [],
    conclusion: "Our research led to a clear understanding that current airport entrance security can be greatly improved using technology. By adapting IoT-driven biometric verification, we eliminate the inefficiencies of manual identity checks. Our proposed system:",
    benefits: [
      "Enhances security with precise iris and face matching",
      "Speeds up the passenger entry process",
      "Reduces human error and operational burden",
      "With future integration into national ID or immigration systems, this solution could become a core part of Sri Lanka's smart airport initiative"
    ]
  },
  {
    id: 3,
    title: "Web-Based Railway Management System",
    subtitle: "Centralized Data Management for Sri Lanka Railway Department",
    description: "A comprehensive web-based platform to replace Excel-based operations with real-time, secure, and collaborative railway management.",
    date: "December 2024",
    category: "Web Development",
    duration: "8 months",
    coverImage: railwayevi2,
    introduction: "The Sri Lanka Railway Department handles massive volumes of operational, scheduling, financial, and maintenance data. At present, much of this information is manually entered, organized, and stored in Microsoft Excel spreadsheets. This approach lacks centralized access and real-time collaboration, increases the risk of data errors or file corruption, makes reporting and searching time-consuming, and doesn't scale well for future demands. To solve this, we propose a centralized web-based railway management system that enables real-time, accurate, and secure management of all critical data.",
    evidence: {
      description: "During our visit to the Sri Lanka Railway Department, we observed:",
      points: [
        "Staff members using multiple Excel sheets for tracking train schedules, maintenance, finance, and staff duties",
        "Difficulties in managing data across different stations",
        "Issues with version control, especially when multiple users update files",
        "Challenges in generating summary reports quickly",
        "Security concerns regarding sensitive operational data stored locally on devices",
        "This showed the urgent need for a unified, cloud-accessible, secure solution"
      ],
      images: [railwayevi1, railwayevi2, railwayevi3]
    },
    research: "We investigated how other national railway systems (e.g., India, Japan, and UK railways) transitioned from legacy data tools to modern web platforms. Key findings:",
    researchPoints: [
      "Centralized systems reduce operational delays and human errors",
      "Cloud-based databases improve data integrity and backups",
      "Web portals allow multi-user access with role-based permissions (e.g., admins, station officers, engineers)",
      "Dashboards improve data visualization for decision-makers",
      "Real-time reporting supports quicker responses to operational issues"
    ],
    solution: "We propose a Web-Based Railway Management System with the following core modules:",
    solutionSteps: [
      "Train Schedule Management: Add/edit train routes, timings, and delays",
      "Maintenance Tracking: Log repairs, inspections, and schedules",
      "Employee Management: Attendance, roles, duty schedules",
      "Financial Module: Track ticket revenue, expenses",
      "Report Generation: Download summaries, performance reports, and charts",
      "User Roles: Admin, Station Manager, Technical Officer, Viewer"
    ],
    components: [
      "Frontend: React",
      "Backend: PHP (Laravel)",
      "Database: MySQL",
      "Hosting: Cloud (AWS)",
      "Security: Role-based login, database encryption, backup features"
    ],
    solutionImages: [],
    conclusion: "The Sri Lanka Railway Department's current reliance on Excel sheets creates operational challenges, data inconsistencies, and delays in reporting. Our proposed Web-Based Railway Management System brings a centralized, secure, and user-friendly platform that enables:",
    benefits: [
      "Real-time data updates and multi-user collaboration",
      "Faster decision-making through automated reports",
      "Secure storage and access control",
      "This system lays the foundation for future integration with IoT technologies, such as train sensor data, smart ticketing, and predictive maintenance"
    ]
  }
]; 