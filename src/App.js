import { useState } from "react";
import { Router } from "./router/Router";
import publicRoutes from "./router/publicRoute";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  console.log(">>>", allRoutes);

  return <Router allRoutes={allRoutes} />;
}

export default App;
