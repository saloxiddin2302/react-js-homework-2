import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./Product.scss";

import product1 from "../../assets/images/product1.svg"

export class Product extends Component {
  render() {
    return (
      <div className="container tabs-box">
        <div className="tabs-box-title">
          <h1>Наша продукция</h1>
        </div>
        <Tabs>
          <TabList>
            <Tab>
              <button>Ламинатные тубы</button>
            </Tab>
            <Tab>
              <button>Экструзионные тубы</button>
            </Tab>
            <Tab>
              <button>Другая упаковка</button>
            </Tab>
          </TabList>
          <TabPanel><img src={product1} alt="products"></img></TabPanel>
          <TabPanel><img style={{width: "80%"}} src={product1} alt="products"></img></TabPanel>
          <TabPanel><img src={product1} alt="products"></img></TabPanel>
        </Tabs>
        <h3 className="catologBtn">Перейти в каталог</h3>
      </div>
    );
  }
}

export default Product;