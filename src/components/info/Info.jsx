import React, { Component } from "react";

import "./Info.scss";

export class Info extends Component {
  render() {
    return (
      <div className="container register">
        <h1>Получить подробную информацию</h1>
        <p>
          Просто заполните форму, наш менеджер свяжетсяс  вами в <br /> ближайшее время
        </p>
        <div className="login-register">
          <input type="text" placeholder="💁🏿‍♂️ Ваше имя"></input>
          <input type="text" placeholder="📞 +375 (29) 0000000"></input>
        <textarea>Комментарий</textarea> 
        </div>
        <button className="regbtn">Получить информацию</button>
        </div>
    );
  }
}

export default Info;