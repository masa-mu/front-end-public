import React from "react";
import "./App.css";
import Sample1 from "./01_Sample";
import Sample2 from "./02_Counter";
import Sample3 from "./03_LifeCycle";
import Sample4 from "./04_Function";
import Sample5 from "./05_Hook";
import Sample6 from "./06_EffectHook";
import Sample7 from "./07_Customhook-container";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Sample1} />
      <Route exact path="/sample1" component={Sample1} />
      <Route exact path="/sample2" component={Sample2} />
      <Route exact path="/sample3" component={Sample3} />
      <Route exact path="/sample4" component={Sample4} />
      <Route exact path="/sample5" component={Sample5} />
      <Route exact path="/sample6" component={Sample6} />
      <Route exact path="/sample7" component={Sample7} />
      <Redirect to="/" />;
    </div>
  </Router>
);

export default App;




