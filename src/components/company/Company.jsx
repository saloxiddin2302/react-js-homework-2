import React, { Component } from "react";
import "../company/Company.scss";


export class Company extends Component {
  render() {
    return (
      <div className="container">
        <div className="new-title">
          <h1>
            About <span>LEANGROUP</span> Company
          </h1>
        </div>
        <div className="new-cards">
          <div className="new-card-left">
          <iframe width="100%" height="310" src="https://youtu.be/19u4NDOHE9w?si=VCFwZa3Mes0N56E5" title="ReactJS Tutorial - 1 - Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="new-card-right">
            <p>
              The company "LEANGROUP LLC" started its operations in 1999 and is
              currently a leading manufacturer of laminate and extrusion tubes.
              With two technologies for producing laminate and extrusion tubes,
              we offer you a wide range of possibilities. A major advantage is
              our own printing department for laminate and in-line printing in
              extrusion with various additional decorative options. Special
              attention is given to working with suppliers to control and
              maintain the quality of our products. Since January 2018, the
              company has become a member of the European Tube Manufacturers
              Association (ETMA), which confirms the brand's strong position in
              the European market.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
