import React, { useState } from "react";
import ProgressDIY from "./ProgressDIY";
import Cheer from "./Cheer";
import LoginForm from "./LoginForm";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "./Layout";

const HomePage = () => {
  const [value, setValue] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div id="HomePage">
      <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value)}}/>
      <Cheer value={score} onClick={(e)=>{setScore(e.target.value)}}/>
      <LoginForm/>
    
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={FirstPage} />
          <Route path="/second" component={SecondPage} />
        </Layout>
      </Switch>
    </HashRouter>
    </div>
  );
};

export default HomePage;
