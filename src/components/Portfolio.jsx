import './Portfolio.css';
import { useState } from 'react';
import work1 from '../images/work1.jpg';
import work2 from '../images/work2.jpg';
import work3 from '../images/work3.jpg';
import work4 from '../images/work4.jpg';
const Portfolio=()=>{
    const [tabActive, setTabActive] = useState(1);
    const tabActivity = (index) => {
        setTabActive(index);
    };
    return(
        <>
         <div className="portfolio-title">
        <h1>Portfolio</h1>
        <span>Most recent works</span>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-tabs">
          <div className="web-tab">

            <span onClick={()=>tabActivity(1)}>Web Development</span>
          </div>
          <div className="android-tab">
         
            <span onClick={()=>tabActivity(2)}>Android Development</span>
          </div>
        </div>
        <div className={tabActive===1 ? "portfolio-sections portfolio-sections-active" : "portfolio-sections"}>
            <div className='work-card'>
<img src={work1}/>
                <span>Web Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
               
            </div>
            <div className='work-card'>
<img src={work1}/>
                <span>Web Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
            </div>
            <div className='work-card'>
<img src={work1}/>
                <span>Web Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
            </div>
            <div className='work-card'>
<img src={work1}/>
                <span>Web Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
            </div>
        </div>
        <div className={tabActive===2 ? "portfolio-sections portfolio-sections-active" : "portfolio-sections"}>
            <div className='work-card'>
<img src={work1}/>
                <span>App Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
               
            </div>
            <div className='work-card'>
<img src={work1}/>
                <span>App Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
            </div>
            <div className='work-card'>
<img src={work1}/>
                <span>App Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
            </div>
            <div className='work-card'>
<img src={work1}/>
                <span>App Design</span>
                <div className='demo-show'>
                <span>Demo</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Portfolio;