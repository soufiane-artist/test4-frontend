import React from 'react'
import './compenent/page5.css'
import WorldMap from "react-svg-worldmap";

function Page6() {

    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "ma", value: 37460451 }, // russia
        { country: "mx", value: 127318112 }, // mexico
        { country: "in", name: "India", value: 1311559204 },
        { country: "us", name: "United States", value: 331883986 },
        { country: "id", name: "Indonesia", value: 264935824 },
        { country: "pk", name: "Pakistan", value: 210797836 },
        { country: "br", name: "Brazil", value: 210301591 },
        { country: "ng", name: "Nigeria", value: 208679114 },
        { country: "bd", name: "Bangladesh", value: 161062905 },
        { country: "ru", name: "Russia", value: 141944641 },
        { country: "ma", name: "Morocco", value: 37460451 },
        { country: "mx", name: "Mexico", value: 127318112 },
        { country: "jp", name: "Japan", value: 126476458 },
        { country: "et", name: "Ethiopia", value: 114963588 },
        { country: "ph", name: "Philippines", value: 109581085 },
        { country: "eg", name: "Egypt", value: 102334404 },
        { country: "vn", name: "Vietnam", value: 97338579 },
        { country: "cd", name: "Democratic Republic of the Congo", value: 89561403 },
        { country: "tr", name: "Turkey", value: 84339067 },
        { country: "ir", name: "Iran", value: 83992949 },
        { country: "de", name: "Germany", value: 83783942 },
        { country: "th", name: "Thailand", value: 69799978 },
        { country: "gb", name: "United Kingdom", value: 67886011 },
        { country: "fr", name: "France", value: 65273511 },
        { country: "it", name: "Italy", value: 60461826 },
        { country: "tz", name: "Tanzania", value: 59734218 },
        { country: "za", name: "South Africa", value: 59308690 },
        { country: "mm", name: "Myanmar", value: 54409800 },
        { country: "ke", name: "Kenya", value: 53771296 },
        { country: "kr", name: "South Korea", value: 51269185 },
        { country: "co", name: "Colombia", value: 50882891 },
        { country: "es", name: "Spain", value: 46754778 },
        { country: "ug", name: "Uganda", value: 45741007 },
        { country: "ar", name: "Argentina", value: 45195774 },
        { country: "dz", name: "Algeria", value: 43851044 },
        { country: "sd", name: "Sudan", value: 43849260 },
        { country: "ua", name: "Ukraine", value: 41723998 },
        { country: "iq", name: "Iraq", value: 40222493 },
        { country: "af", name: "Afghanistan", value: 38928346 },
        { country: "pl", name: "Poland", value: 38386000 },
        { country: "ca", name: "Canada", value: 37742154 },
        { country: "ma", name: "Morocco", value: 36910560 },
        { country: "sa", name: "Saudi Arabia", value: 34813871 },
        { country: "uz", name: "Uzbekistan", value: 33469203 },
        { country: "pe", name: "Peru", value: 32971854 },
        { country: "ao", name: "Angola", value: 32866272 },
        { country: "my", name: "Malaysia", value: 32365999 },
        { country: "mz", name: "Mozambique", value: 31255435 },
        { country: "gh", name: "Ghana", value: 31072940 },
        { country: "ye", name: "Yemen", value: 29825964 },
        { country: "np", name: "Nepal", value: 29136808 },
        { country: "ve", name: "Venezuela", value: 28435940 },
        { country: "mg", name: "Madagascar", value: 27691018 },
        { country: "cm", name: "Cameroon", value: 26545863 },
        { country: "ci", name: "Ivory Coast", value: 26378274 },
        { country: "au", name: "Australia", value: 25499884 },
        { country: "ne", name: "Niger", value: 24206644 },
        { country: "lk", name: "Sri Lanka", value: 21413249 },
        { country: "bf", name: "Burkina Faso", value: 20903273 },
        { country: "ml", name: "Mali", value: 20250833 },
        { country: "ro", name: "Romania", value: 19237691 },
        { country: "mw", name: "Malawi", value: 19129952 },
        { country: "cl", name: "Chile", value: 19116201 },
        { country: "kz", name: "Kazakhstan", value: 18776707 },
        { country: "sy", name: "Syria", value: 17500658 },
        { country: "ec", name: "Ecuador", value: 17643054 },
        { country: "nl", name: "Netherlands", value: 17134872 },
        { country: "sn", name: "Senegal", value: 16743927 },
        { country: "kh", name: "Cambodia", value: 16718965 },
        { country: "td", name: "Chad", value: 16425864 },
        { country: "so", name: "Somalia", value: 15893222 },
        { country: "zw", name: "Zimbabwe", value: 14862924 },
        { country: "gn", name: "Guinea", value: 13132795 },
        { country: "rw", name: "Rwanda", value: 12952218 },
        { country: "bj", name: "Benin", value: 12123200 },
        { country: "bi", name: "Burundi", value: 11890784 },
        { country: "tn", name: "Tunisia", value: 11818619 },
        { country: "bo", name: "Bolivia", value: 11673029 },
        { country: "be", name: "Belgium", value: 11589623 },
        { country: "ht", name: "Haiti", value: 11402528 },
        { country: "cu", name: "Cuba", value: 11326616 },
        { country: "ss", name: "South Sudan", value: 11193725 },
        { country: "do", name: "Dominican Republic", value: 10847910 },
        { country: "cz", name: "Czech Republic", value: 10708981 },
        { country: "gr", name: "Greece", value: 10423054 },
        { country: "jo", name: "Jordan", value: 10203134 },
        { country: "pt", name: "Portugal", value: 10196709 },
        { country: "az", name: "Azerbaijan", value: 10139177 },
        { country: "se", name: "Sweden", value: 10099265 },
        { country: "hn", name: "Honduras", value: 9904608 },
        { country: "ae", name: "United Arab Emirates", value: 9890402 },
        { country: "hu", name: "Hungary", value: 9660351 },
        { country: "tj", name: "Tajikistan", value: 9537645 },
        { country: "by", name: "Belarus", value: 9449323 },
        { country: "at", name: "Austria", value: 9006398 },
        { country: "pg", name: "Papua New Guinea", value: 8947024 },
        { country: "rs", name: "Serbia", value: 8772235 },
        { country: "il", name: "Israel", value: 8655535 },
        { country: "ch", name: "Switzerland", value: 8654622 },
        { country: "tg", name: "Togo", value: 8278724 },
      ];
  return (
        <div className="page6">
          <div className="page6-container">
            <div className="page6-container-card col-5">
              <h3>Recent News</h3>
              <ul>
                <li>May 30th: Test Your Data Literacy & Luck — Win iPad at Qlik Connect!</li>
                <li>May 23rd: How to Build Network Graph with JavaScript</li>
                <li>May 17th: Stunning New Data Visualizations Not to Miss — DataViz Weekly</li>
                <li>May 13th: Let’s Connect at Qlik Connect 2024: AnyChart Booth #807</li>
              </ul>
            </div>
            <div className="page6-container-card col-3">
              <h3>Latest Demos</h3>
              <ul>
                <li>Updated Column Chart with Negative Values Sample</li>
                <li>GitHub Contributions Calendar</li>
                <li>IMDB Top-250 Movies by Genre</li>
              </ul>
            </div>
            <div className="page6-container-card col-3">
              <h3>Recent Tips and Tutorials</h3>
              <ul>
                <li>Calendar Chart</li>
                <li>Circle Packing Chart</li>
              </ul>
            </div>
          </div>
    
          <div className="page6-container2">
            <div className="page6-container2-text">
              <h3>Contact Our Sales Representatives</h3>
              <p>Our Sales Representatives will be happy to talk to you and answer any questions regarding our products, licensing, purchasing, and everything else.</p>
            </div>
          </div>
    
          <div className="page6-container3 col-12">
            <div className="page6-container3-card col-6">
              <h3>AnyChart</h3>
              <p>AnyChart is a flexible JavaScript (HTML5) based solution that allows developers to embed interactive and great looking charts and dashboards into any web, standalone or mobile project. Whether you need to enhance your website with better reporting, embed dashboards into your on-premises and SaaS systems, or build an entire new product, AnyChart covers all your data visualization needs. Our products include massive out-of-the-box capabilities, combined with the flexibility and the simplicity. Loved by thousands of happy customers.</p>
            </div>
            <div className="page6-container3-card col-2">
              <h3>Products</h3>
              <ul>
                <li>AnyChart</li>
                <li>AnyStock</li>
                <li>AnyMap</li>
                <li>AnyGantt</li>
              </ul>
            </div>
            <div className="page6-container3-card col-2">
              <h3>Products</h3>
              <ul>
                <li>AnyChart</li>
                <li>AnyStock</li>
                <li>AnyMap</li>
                <li>AnyGantt</li>
              </ul>
            </div>
            <div className="page6-container3-card col-2">
              <h3>Products</h3>
              <ul>
                <li>AnyChart</li>
                <li>AnyStock</li>
                <li>AnyMap</li>
                <li>AnyGantt</li>
              </ul>
            </div>
          </div>
    
          <div className="maps col-12">
            <div className="maps-left col-6">
              <div className="maps-text">
                <h3>AnyChart</h3>
                <p>AnyChart is a flexible JavaScript (HTML5) based solution that allows developers to embed interactive and great looking charts and dashboards into any web, standalone or mobile project. Whether you need to enhance your website with better reporting, embed dashboards into your on-premises and SaaS systems, or build an entire new product, AnyChart covers all your data visualization needs. Our products include massive out-of-the-box capabilities, combined with the flexibility and the simplicity. Loved by thousands of happy customers.</p>
              </div>
            </div>
            <div className="maps-right col-6">
              <WorldMap
                color="blue"
                title="Populous Countries"
                valueSuffix="people"
                size="lg"
                data={data}
              />
            </div>
          </div>
        </div>
  )
}

export default Page6
