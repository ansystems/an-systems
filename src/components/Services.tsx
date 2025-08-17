import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faDatabase, 
  faStream 
} from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: faRobot,
      title: "Automation",
      description: "Intelligent automation solutions that streamline workflows, reduce manual tasks, and improve operational efficiency across your organization.",
      features: ["Process Automation", "Test Automation", "Workflow Optimization", "AI-Powered Solutions"]
    },
    {
      id: 2,
      icon: faDatabase,
      title: "Data Processing",
      description: "Robust data processing pipelines and ETL solutions that transform raw data into actionable insights for informed decision-making.",
      features: ["ETL/ELT Pipelines", "Data Transformation", "Real-time Processing", "Data Quality Management"]
    },
    {
      id: 3,
      icon: faStream,
      title: "Data Streaming & Storage",
      description: "High-performance data streaming platforms and scalable storage solutions for real-time data processing and analytics.",
      features: ["Real-time Streaming", "Data Warehousing", "Cloud Storage", "Stream Analytics"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Core Services</h2>
          <p>Comprehensive software development solutions tailored to modern business needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
