import React, { Suspense } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Films = React.lazy(() => import("./pages/Films"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route path="/" component={Films} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}
