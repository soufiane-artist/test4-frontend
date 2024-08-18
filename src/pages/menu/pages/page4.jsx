import React from 'react'
import './compenent/page3.css'
function Page4() {
  return (
    <div className="page4">
    <div className="page4-container">
      <div className="page4-container-text col-5">
        <h3>
          Story Two: Reporter Erica Sandberg and <span style={{ color: 'blue' }}>Publicist Nicole Pomije</span>
        </h3>
        <p>
          For Pomije, it’s a two-way street, since she can rely on Sandberg to be upfront, honest, and quick. “I like working with Erica because it’s easy. If she’s working on something that’s a fit with one of my clients, I get her the quotes and information in a timely manner. If I can’t meet her deadline, I let her know up front. She’s honest about when a friendship is appropriate. For any publicist/writer dynamic, the end goal is a partnership that respects each other's responsibilities and ethics, creating something that lasts.”
        </p>
        <div className="img-best-page4">
          <img src="./pngwing.com (27).png" alt="Publicist Nicole Pomije" />
        </div>
      </div>
      <div className="img-left-page4-container col-7">
        {/* You can add additional content or images here */}
      </div>
    </div>
  </div>
  )
}

export default Page4
