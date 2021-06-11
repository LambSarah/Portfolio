import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const posts = [post1, post2];
  return (
    <div>

      <Container>
        <Navbar />

        <Route path='/home'>
          <Home posts={posts} />
        </Route>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='projects'>
            <Projects />
          </Route>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </Container>
    </div>
  )

}
export default App
const post1 = `April 1, 2020 by Olivier
This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

Heading
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Sub-heading
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Sub-heading
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Donec id elit non mi porta gravida at eget metus.
Nulla vitae elit libero, a pharetra augue.
Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

Vestibulum id ligula porta felis euismod semper.
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Maecenas sed diam eget risus varius blandit sit amet non magna.
Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.`;

const post2 = `March 23, 2020 by Matt
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`