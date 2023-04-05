import "./Qualification.css";
import { useState } from "react";
const Qualification = () => {

    const [tabActive, setTabActive] = useState(0);
    const tabActivity = (index) => {
        setTabActive(index);
    };
  return (
    <>
      <div className="qualification-title">
        <h1>Qualification</h1>
        <span>My personal journey</span>
      </div>
      <div className="qualification-container">
        <div className="qualification-tabs">
          <div className="education-tab">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            
            >
              <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
            </svg>
            <h3 onClick={()=>tabActivity(1)}>Educations</h3>
          </div>
          <div className="experience-tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            
            >
              <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
            </svg>
            <h3 onClick={()=>tabActivity(2)}>Experience</h3>
          </div>
        </div>
        <div className={tabActive===2 ? "qualification-sections qualification-sections-active" : "qualification-sections"}>
          <div className="qualification-content">
            <div className="qualification-content-item">
              <div>
                <h4>Webbbb Design</h4>
                <span className="qualification-subtitle">Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
            </div>
            <div className="qualification-content-item">
              <div></div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
              <div>
                <h4>Web Design</h4>
                <span>Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
            </div>
            <div className="qualification-content-item">
              <div>
                <h4>Web Design</h4>
                <span>Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
            </div>
            <div className="qualification-content-item">
              <div></div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
              <div>
                <h4>Web Design</h4>
                <span>Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={tabActive===1 ? "qualification-sections qualification-sections-active" : "qualification-sections"}>
          <div className="qualification-content">
            <div className="qualification-content-item">
              <div>
                <h4>Web Design</h4>
                <span className="qualification-subtitle">Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
            </div>
            <div className="qualification-content-item">
              <div></div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
              <div>
                <h4>Web Design</h4>
                <span>Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
            </div>
            <div className="qualification-content-item">
              <div>
                <h4>Web Design</h4>
                <span>Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
            </div>
            <div className="qualification-content-item">
              <div></div>
              <div>
                <span className="rounder"></span>
                <span className="line"></span>
              </div>
              <div>
                <h4>Web Design</h4>
                <span>Iran - shiraz</span>
                <div className="calendar">
                  <span> 2021 - present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Qualification;
