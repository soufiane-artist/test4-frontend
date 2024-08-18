import React, { useEffect } from 'react'
import './compenent/page3.css'
function Page3() {


    useEffect(()=>{
        const test = document.getElementById('page3container')
        window.onscroll=()=>{
            if(window.scrollY > 1200){
                test.style.animation= 'text-page3 1s';
            }
        }
          // Clean up the event listener on unmount
        
    },[])

  return (
    <div className="page3">
      <div id='page3container' className="page3-container">
        <div className="page3-container-text col-6">
          <h6>Story Two: Reporter Erica Sandberg and Publicist Nicole Pomije</h6>
          <p>
            For Pomije, it’s a two-way street, since she can rely on Sandberg to be upfront, honest, and quick. “I like working with Erica because it’s easy. If she’s working on something that’s a fit with one of my clients, I get her the quotes and information in a timely manner, and if I can’t meet her deadline, I let her know up front,” she continues. “I also know she means business and she’s honest about when a friendship. For any publicist/writer dynamic, that’s the end goal: a partnership that is conscious of one another’s responsibilities and ethics, and is stills. “If you just email someone when you need something, that relationship won’t last long. Create something that lasts.”
          </p>
          <div className="page3-container-text-btn">
            <button id='btn'>Send</button>
          </div>
        </div>
        <div className="page3-container-imgs col-6">
          <div className="page3-container-imgs-img1">
            <img src="https://www.clearvoice.com/wp-content/themes/wp-clearvoice/assets/img/img-woman-holding-laptop.png" alt="Laptop User" />
          </div>
          <div className="page3-container-imgs-img2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jkRdN4OK3hiVtfNPfKpXItG7I2It3dhRdA&s" alt="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3
