import React from 'react'
import './compenent/page5.css'
import { FaGlobeAfrica ,FaGlobe  } from "react-icons/fa";
import { GiGlobeRing } from "react-icons/gi";
import { LuFileJson } from "react-icons/lu";
import { SiJson , SiTruenas } from "react-icons/si";

function Page5() {
  return (
    <div className="page5">
      <div className="page5-left col-6">
        <p>
          <FaGlobeAfrica /> <span style={{ fontWeight: '600' }}>Works all around the world:</span> on all devices and browsers. Our products work on Windows PCs, Apple Macs, iPhones, iPads, Android devices, and our JavaScript charts work everywhere, including IE 6.
        </p>
        <p>
          <FaGlobe /> <span style={{ fontWeight: '600' }}>Global Compatibility:</span> Our products are designed to be compatible with various operating systems and devices, ensuring seamless integration.
        </p>
        <p>
          <GiGlobeRing /> <span style={{ fontWeight: '600' }}>Universal Access:</span> Enjoy access to our services from any device or browser, making it easy to stay connected wherever you are.
        </p>
      </div>
      <div className="page5-right col-6">
        <p>
          <LuFileJson /> <span style={{ fontWeight: '600' }}>Comprehensive Support:</span> Our solutions are supported on all major platforms, including Windows, macOS, iOS, and Android, with compatibility across different browsers.
        </p>
        <p>
          <SiJson /> <span style={{ fontWeight: '600' }}>Flexible Integration:</span> Easily integrate our products with various systems and technologies, ensuring a smooth user experience.
        </p>
        <p>
          <SiTruenas /> <span style={{ fontWeight: '600' }}>Robust Performance:</span> Our solutions are built to deliver reliable performance and compatibility across diverse environments and devices.
        </p>
      </div>
    </div>
  )
}

export default Page5
