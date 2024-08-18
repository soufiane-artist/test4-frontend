import React from 'react'
import './compenent/page9.css'

function Page9() {
  return (
<div className="page9 col-12">
      <div className="page9-container col-12 text-center p-5">
        <h3 className="text-center col-12">
          Understanding the Importance of Well-Crafted Text
        </h3>
        <p className="text-center col-12">
          A well-crafted text is a series of spoken or written words that form a coherent and meaningful whole. It employs appropriate structures and provides valuable insights, contributing to effective communication and user engagement.
        </p>
        <div className="page9-card-users col-12 d-flex" style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <div className="page6-card-user text-center p-3 col-3">
            <img className='imgUser' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SNueiUA2PfrLeBJEiVnTTy8TG_rdo7d49A&s" alt="User Image" />
            <h6>Sanae</h6>
            <p>Effective text is crafted with care, ensuring clarity and relevance to the audience. It must be structured to enhance comprehension and engagement.</p>
            <img className='imgStarts' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlWDsNJgKSu0XyoohMG_H5ee7mtAMyaAAUA&s" alt="Rating Stars" />
          </div>
          <div className="page6-card-user text-center p-3 col-3">
            <img className='imgUser' src="https://www.fda.gov/files/styles/main_image_medium/public/iStock-1413764595.jpg?itok=zz_sFgff" alt="User Image" />
            <h6>John Doe</h6>
            <p>Clear and structured text helps in effective communication, making it easier for users to understand and engage with the content.</p>
            <img className='imgStarts' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlWDsNJgKSu0XyoohMG_H5ee7mtAMyaAAUA&s" alt="Rating Stars" />
          </div>
                <div className="page6-card-user text-center p-3 col-3">
            <img className='imgUser' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyRr7kCM692AUo6H16a5lQyQlfJvK94m8BzJeo28dX7mqO3pisU4Fdz7dei2rMZd9v0&usqp=CAU" alt="User Image" />
            <h6>Jane Smith</h6>
            <p>Well-crafted text is essential for creating engaging and user-friendly content. It supports better user experience and interaction.</p>
            <img className='imgStarts' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlWDsNJgKSu0XyoohMG_H5ee7mtAMyaAAUA&s" alt="Rating Stars" />
          </div>
            </div>
        </div>
    </div>
  )
}

export default Page9
