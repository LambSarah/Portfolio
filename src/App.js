import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container'

import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Container>
        <Navbar />
      </Container>
    </div>
  )

}
export default App;
