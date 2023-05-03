import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Scenes/Home/Home'
import Aboutus from './Scenes/About/Aboutus';
import Services from './Scenes/Services/Services'
import Reviews from './Scenes/Review/Reviews'
import Contactus from './Scenes/Contact/Contactus'
import Experts from './Scenes/Experts/Experts'
import Assignment from './Scenes/Assignment/Assignment'
import Quizez from './Scenes/Quizez/Quizez'
import Paper from './Scenes/Paper/Paper'
import Thesis from './Scenes/Thesis/Thesis'
import Article from './Scenes/Article/Article'
import Computer_Science from './Scenes/Computer_Science/Computer_Science'
import Finance from './Scenes/Finance/Finance'
import Management from './Scenes/Management/Management'
import Statistics from './Scenes/Statistics/Statistics'
import Accounting from './Scenes/Accounting/Accounting'
import Physics from './Scenes/Physics/Physics'
import Math from './Scenes/Math/Math'
import Chemistry from './Scenes/Chemistry/Chemistry'
import Biology from './Scenes/Biology/Biology'
import Sample_Design from './Scenes/Sample_Design/Sample_Design'
import Sample from './Scenes/Sample/Sample'
import Assignment_Solution from './Scenes/Assignment_Solution/Assignment_Solution'
import Whatsappicon from './Scenes/Whatsappicon'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/About-us' element={<Aboutus />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/experts' element={<Experts />} />
          <Route path='/services' element={<Services />} />
          <Route path='/assignment' element={<Assignment />} />
          <Route path='/quizez' element={<Quizez />} />
          <Route path='/paper' element={<Paper />} />
          <Route path='/thesis' element={<Thesis />} />
          <Route path='/article' element={<Article />} />
          <Route path='/computer_Science' element={<Computer_Science />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/management' element={<Management />} />
          <Route path='/Statistics' element={<Statistics />} />
          <Route path='/Accounting' element={<Accounting />} />
          <Route path='/Physics' element={<Physics />} />
          <Route path='/Math' element={<Math />} />
          <Route path='/Chemistry' element={<Chemistry />} />
          <Route path='/Biology' element={<Biology />} />
          <Route path='/sample_Design' element={<Sample_Design />} />
          <Route path='/sample' element={<Sample />} />
          <Route path='/assignment_Solution' element={<Assignment_Solution />} />
        </Routes>
      </BrowserRouter>
      <Whatsappicon />
    </>
  )
}

export default App
