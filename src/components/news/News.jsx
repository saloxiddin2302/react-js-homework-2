import React from 'react'
import "./News.scss";

import new1 from "../../assets/images/new1.svg"
import new2 from "../../assets/images/new2.svg"
import new3 from "../../assets/images/new3.svg"

const News = () => {
  return (
    <section id='news'>
        <div className="container">
                <h1>Новости</h1>
            <div className="news-cards">
                    <div className="new-card">
                        <img src={new1} alt="new1" />
                        <p>28.01.2022</p>
                        <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
                    </div>
                    <div className="new-card">
                        <img src={new2} alt="new2" />
                        <p>28.01.2022</p>
                        <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
                    </div>
                    <div className="new-card">
                        <img src={new3} alt="new3" />
                        <p>28.01.2022</p>
                        <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
                    </div>
            </div>
            <button>Все новости</button>
        </div>
    </section>
  )
}

export default News