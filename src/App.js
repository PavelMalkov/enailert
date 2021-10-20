import React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import { SvgSelector } from "./components/svg/svgSelector.tsx";
import logo from './svg/Company\'s logo.svg';
import activesection from './svg/activesection.svg';

import "./css/panel.css"
import "./css/grid.css"
import "./css/defoult.css"
import "./css/area.css"
import "./css/navlink.css"

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
          <div className="nav link whiteArea">
            <div className="logo">
              <img
              src={logo}
              width="50"
              height="50"/>
            </div>
            <ul>
              <NavLink to = "/Dashboard"   activeClassName="onClicklink"> <li><SvgSelector id = "dashboard"/><a>Dashboard  </a><img src={activesection}/></li></NavLink>
              <NavLink to = "/Projects"    activeClassName="onClicklink"> <li><SvgSelector id = "dashboard"/><a>Projects   </a><img src={activesection}/></li></NavLink>
              <NavLink to = "/Calendar"    activeClassName="onClicklink"> <li><SvgSelector id = "dashboard"/><a>Calendar   </a><img src={activesection}/></li></NavLink>
              <NavLink to = "/Vacations"   activeClassName="onClicklink"> <li><SvgSelector id = "dashboard"/><a>Vacations  </a><img src={activesection}/></li></NavLink>
              <NavLink to = "/Employees"   activeClassName="onClicklink"> <li><SvgSelector id = "dashboard"/><a>Employees  </a><img src={activesection}/></li></NavLink>
              <NavLink to = "/Messenger"   activeClassName="onClicklink"> <li><SvgSelector id = "dashboard"/><a>Messenger  </a><img src={activesection}/></li></NavLink>
              <NavLink to = "/Info Portal" activeClassName="onClicklink"> <li><SvgSelector id = "dashboard"/><a>Info Portal</a><img src={activesection}/></li></NavLink>
            </ul>
          </div>
          <div className = "panel">
            <div className = "child-begin"><MyInput /></div>
            <div className = "child-space"><SvgSelector id = "notifications"/></div>
            <div className = "child-end"><h1>Мой профиль</h1></div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </div>  
      </Router>
    </div>
  );
}

export default App;

/*
<div className="header">
  <div className = "one">
    <h1>шапка поиск</h1>
    <h1>мой профиль и настройки</h1>
  </div>
  <div className = "two">
    <div className="container">
      <div className="nav whiteArea">
        <h1>список ссылок</h1>
      </div>
      <div className="header whiteArea"></div>
    </div>
  </div>
</div>
*/

{/* 

  <div className="two">
        <div class="left whiteArea">Навигационная панель</div>
        <div class="right">
          <h1>Поиск и мой профиль</h1>
          <h1>Мой профиль и настройки</h1>

          <div className="two">
            <div class="left whiteArea">Описание пользователя</div>
            <div class="right">
              <h1>настройки</h1>

              <div className="two">
                <div class="left whiteArea">список изменяемых данных</div>
                <div class="right whiteArea">
                  <h1>изменения</h1>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

*/}