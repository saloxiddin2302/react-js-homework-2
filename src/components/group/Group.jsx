import React from 'react'
import "./Group.scss";
import gr1 from "../../assets/images/gr1.svg"
import gr2 from "../../assets/images/gr2.svg"
import gr3 from "../../assets/images/gr3.svg"
import gr4 from "../../assets/images/gr4.svg"
import gr5 from "../../assets/images/gr5.svg"

const Group = () => {

  return (
    <section>
        <div className="container">
            <div className="group">
                <div className="gr-cards">
                    <img src={gr1} alt="gr1" />
                    <h4>Мисько Екатерина</h4>
                    <p>Начальник отдела сопровождения</p>
                    <h6>+375 (17) 270-53-77 (115)</h6>
                    <h6>+99 270-53-77 (115)</h6>
                    <h5>k.melnichenko@leangroup.by</h5>
                </div>
                <div className="gr-cards">
                    <img src={gr2} alt="gr1" />
                    <h4>Мисько Екатерина</h4>
                    <p>Начальник отдела сопровождения</p>
                    <h6>+375 (17) 270-53-77 (115)</h6>
                    <h6>+99 270-53-77 (115)</h6>
                    <h5>k.melnichenko@leangroup.by</h5>
                </div>
                <div className="gr-cards">
                    <img src={gr3} alt="gr1" />
                    <h4>Мисько Екатерина</h4>
                    <p>Начальник отдела сопровождения</p>
                    <h6>+375 (17) 270-53-77 (115)</h6>
                    <h6>+99 270-53-77 (115)</h6>
                    <h5>k.melnichenko@leangroup.by</h5>
                </div>
                <div className="gr-cards">
                    <img src={gr4} alt="gr1" />
                    <h4>Мисько Екатерина</h4>
                    <p>Начальник отдела сопровождения</p>
                    <h6>+375 (17) 270-53-77 (115)</h6>
                    <h6>+99 270-53-77 (115)</h6>
                    <h5>k.melnichenko@leangroup.by</h5>
                </div>
                <div className="gr-cards">
                    <img src={gr5} alt="gr1" />
                    <h4>Мисько Екатерина</h4>
                    <p>Начальник отдела сопровождения</p>
                    <h6>+375 (17) 270-53-77 (115)</h6>
                    <h6>+99 270-53-77 (115)</h6>
                    <h5>k.melnichenko@leangroup.by</h5>
                </div>
            </div>
            <button className='grbtn'>Наша команда</button>
        </div>
    </section>
  )
}

export default Group