import "./ScrollUp.css";
const ScrollUp = () => {
    window.addEventListener("scroll" , function(){

        const scrollUp=document.querySelector(".scroll-up");
        if(this.scrollY >= 560){
            scrollUp.classList.add("show-scroll-up")
        }
        else{
            scrollUp.classList.remove("show-scroll-up") 
        }
    })
  return (
    <>
      <div className="scroll-up">
        <span className="scroll-up-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            style={{fill: "rgba(255, 255, 255, 1)",
            transform: "scaleX(-1)", msFilter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}}
          >
            <path d="M13 18v-6h5l-6-7-6 7h5v6z"></path>
          </svg>
        </span>
      </div>
    </>
  );
};
export default ScrollUp;
