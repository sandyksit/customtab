// Tab Panel Component
import React, { useState } from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import { header, sub_header, tabs, text_body  } from './constants';
import './index.css'

const TabPanel = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
  
    return (
      <div className="container mt-5">
      <h6 className="text-primary text-uppercase text-center">{header}</h6>
      <h2 className="text-center fw-bold">{sub_header}</h2>
      <p className="text-center text-muted">{text_body}</p>
      
      <div className="tabs-wrapper d-flex justify-content-center">
        <div className="tabs-container d-inline-flex rounded-start rounded-end border bg-white">
          {tabs.map((tab, index) => (
            <>
              <button
                key={tab.id}
                className={`custom-tab px-4 py-2 border-0 bg-transparent position-relative fw-bold ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
                {activeTab === tab.id && <div className="active-indicator"></div>}
              </button>
              {index < tabs.length - 1 && <div className="tab-divider"></div>}
            </>
          ))}
        </div>
      </div>
      
      <div className="tab-content mt-4 text-center">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id}>
              <Heading text={tab.heading} />
              <Paragraph text={tab.content} />
            </div>
          )
        ))}
      </div>
    </div>
    );
  };
  
  export default TabPanel;
  