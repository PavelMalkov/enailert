import React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { SvgSelector } from "./components/svg/svgSelector.tsx";
import logo from './svg/Company\'s logo.svg';
import person from './img/photo.png';
import activesection from './svg/activesection.svg';

import { SvgIcon } from "./components/svg/SvgIcon";

import "./css/panel.css"
import "./css/grid.css"
import "./css/defoult.css"
import "./css/area.css"
import "./css/navlink.css"
import "./css/navhelp.css"

import MyInput from "./components/UI/myinput"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"
import Products from "./components/pages/Products"

import Dashboard from "./components/pages/Dashboard"
import Projects from "./components/pages/Projects"


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="left whiteArea">
            <div className="logo">
              <img
              src={logo}
              width="50"
              height="50"/>
            </div>
            <div className="link">
              <ul>
                <NavLink to = "/Dashboard"   activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Dashboard  </a><img src={activesection}/></li></NavLink>
                <NavLink to = "/Projects"    activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Projects   </a><img src={activesection}/></li></NavLink>
                <NavLink to = "/Calendar"    activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Calendar   </a><img src={activesection}/></li></NavLink>
                <NavLink to = "/Vacations"   activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Vacations  </a><img src={activesection}/></li></NavLink>
                <NavLink to = "/Employees"   activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Employees  </a><img src={activesection}/></li></NavLink>
                <NavLink to = "/Messenger"   activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Messenger  </a><img src={activesection}/></li></NavLink>
                <NavLink to = "/Info Portal" activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Info Portal</a><img src={activesection}/></li></NavLink>
              </ul>
            </div>

            <div className = "navhelp">
              <div> <button><SvgIcon id = "message"/>Support</button> </div>
              <div className = "illustration"><SvgIcon id = "illustration" /></div>
            </div>

            <div className="link">
              <ul>
                <NavLink to = "/Exit"   activeClassName="onClicklink"> <li><SvgIcon id = "dashboard"/><a>Exit</a><img src={activesection}/></li></NavLink>
              </ul>
            </div>

          </div>
          <div className = "panel">
            <div className = "child-begin"><MyInput /></div>
            <div className = "child-space whiteArea notification"><SvgIcon id = "notifications"/></div>
            <div className="child-end whiteArea account">
                <div className = ""><img src = {person} alt = "photo" /></div>
                <div className = ""><p>Иван Иванович</p></div>
                <div className = ""><span className = "chevron-down"><SvgIcon id = "right"/></span></div>
            </div>
          </div>
          
          <div className="whiteArea">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/Projects" component={Projects} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>  
      </Router>
    </div>
  );
}

export default App;
