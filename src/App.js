import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/home.js';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import Staff from './Components/staff.js';
import CourseDescription from './Components/course-description.js';
import Schedule from './Components/schedule.js';
import { Nav, Navbar } from 'react-bootstrap';
import "./App.css";


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Nav className="mr-auto">

            <Link className="navbar-brand" to="/">Home</Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="staff">Staff</Nav.Link>
            <Nav.Link href="course-description">Course Description</Nav.Link>
            <Nav.Link href="schedule">Schedule</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/schedule' component={Schedule} />
      <Route exact path='/course-description' component={CourseDescription} />
      <Route exact path='/staff' component={Staff} />
    </Switch>
  </main>
)


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;