import React from 'react'
import './compenent/page9.css'

function Page7() {
  return (
    <div className="page7 col-12">
    <div className="video-meta text-center col-5">
      <h3>Discover the Latest Trends in {`[Topic]`}</h3>
      {/* You can add video content here */}
      <iframe
        width="600"
        height="315"
        src="https://www.youtube.com/embed/Exu7r2vZpcw?si=0lTccGkLIkOR6FbJ"
        title="Guide to Cryptocurrency Trading"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Watch our video to learn about the latest trends in {`[Topic]`} and how to leverage them for your business. Subscribe to our channel for the latest updates.</p>
    </div>
    <div className="col-5">
      <div className="container p-5">
        <h3 className="highlighted-header">Why Good Text is Key to Success in {`[Field/Industry]`}</h3>
          In the modern world of {`[Field/Industry]`}, good text is a fundamental element of any successful marketing strategy. Texts that use relevant keywords and provide valuable content can help improve your site's ranking on search engines and increase engagement with your target audience.
          <br />
          <strong>Tips for Optimizing Text for SEO:</strong>
          <ul>
            <li>Use relevant keywords such as {`[Keyword 1]`}, {`[Keyword 2]`} in your text and headings.</li>
            <li>Write useful and engaging content that meets the needs of your visitors and answers their questions.</li>
            <li>Optimize text to be readable on all devices, including mobile phones.</li>
            <li>Add internal and external links to increase site credibility and enhance user experience.</li>
          </ul>
          <br />
          <strong>Effective Text Strategies:</strong>
          <p>Using text strategically can enhance your site's visibility in search results and increase your chances of attracting new visitors. Follow these tips to stay ahead:</p>
          <ul>
            <li>Analyze the keywords your target audience is searching for.</li>
            <li>Regularly update content to provide current and relevant information.</li>
            <li>Improve user experience by optimizing page load speed and content design.</li>
          </ul>
      </div>
    </div>
  </div>
)
}

export default Page7
