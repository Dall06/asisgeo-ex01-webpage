import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom"
import NavBar from "./app/presentation/components/NavBar"
import './App.css';
import HomeView from "./app/presentation/views/home/HomeView";
import IntroductionView from "./app/presentation/views/introduction/IntroductionView";
import AboutView from "./app/presentation/views/about/AboutView";
import ArcGisView from "./app/presentation/views/arcgis/ArcGisView";

function App() {
  return (
    <div className="App" >
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/asisgeo-ex01-webpage/intro'>
            <IntroductionView/>
          </Route>
          <Route path='/asisgeo-ex01-webpage/arcgis'>
            <ArcGisView/>
          </Route>
          <Route path='/asisgeo-ex01-webpage/about'>
            <AboutView/>
          </Route>
          <Route path='/asisgeo-ex01-webpage/'>
            <HomeView/>
          </Route>
          <Route path='/'>
          <Redirect from="/" to="/asisgeo-ex01-webpage/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
