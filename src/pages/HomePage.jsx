import { Fragment } from 'react'
import React from 'react'
import { Footer } from '../components/footer/Footer'
import { Home } from '../components/home/Home'
import Navbar from '../components/navbar/Navbar'
import Company from '../components/company/Company'
import Certificate from '../components/certificate/Certificate'
import Product from '../components/product/Product'
import Info from '../components/info/Info'
import Group from '../components/group/Group'
import News from '../components/news/News'





const HomePage = () => {
  return (
    <Fragment>
       <Navbar/>
        <main>
        <Home/>
        <Company/>
        <Certificate/>
        <Product/>
        <Info/>
       <Group/>
       <News/>
        </main>
        <Footer/>
    </Fragment>
  )
}

export default HomePage