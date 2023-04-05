import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <span>Contact Me</span>
      </div>

      <div className="contact-container">
        <div className="talk-to-me">
          <h3>Talk to me</h3>
          <div className="talk-option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
             
            >
              <path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"></path>
            </svg>
            <span className="option-title">Email</span>
            <span>m.monfared9944@gmail.com</span>
            <div className="write-me">
            <span>Write me  </span> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </div>
            
          </div>
          <div className="talk-option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
             
            >
              <path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"></path>
            </svg>
            <span className="option-title" >Whatsapp</span>
            <span>9994445454</span>
            <div className="write-me">
            <span>Write me   </span><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </div>
          </div>
          <div className="talk-option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              
            >
              <path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"></path>
            </svg>
            <span className="option-title">Messenger</span>
            <span>m.monfared9944</span>
            <div className="write-me">
            <span>Write me  </span> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Write me ypur project</h3>
          <form className="contact-form-items">
            <div className="contact-form-item">
              <label className="name-label">Name</label>
              <input
                type="text"
                className="name-input"
                placeholder="insert your name"
              />
            </div>
            <div className="contact-form-item">
              <label className="email-label">Email</label>
              <input
                type="email"
                className="email-input"
                placeholder="insert your email"
              />
            </div>
            <div className="contact-form-item">
              <label className="project-label">Project</label>
              <textarea
                className="text-area"
                cols="30"
                rows="10"
                placeholder="Write your project"
              />
            </div>
            <button className="form-button">
              Send Messege
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="button__icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#fff"
                />
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
