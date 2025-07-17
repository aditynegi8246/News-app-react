import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './components/navbar'
import News from './components/news'

import { BrowserRouter as Router,
  Routes, Route, Link
 } from 'react-router-dom'



export class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div> 
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="home"/>}></Route>
            <Route path="/business" element={<News key="business" category="business"/>}></Route>
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>
            <Route path="/sports" element={<News key="sports" category="sports"/>}></Route>
            <Route path="/health" element={<News key="health" category="health"/>}></Route>
            <Route path="/general" element={<News key="general" category="general"/>}></Route>
            <Route path="/technology" element={<News key="technology" category="technology"/>}></Route>
            <Route path="/science" element={<News key="science" category="science"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
