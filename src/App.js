import { Route, Routes, useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Home from "./routes/home/home.component";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

console.log(pathname,'pathname')

  return (
    <Fragment>
      <Routes>
        <Route path=''>
          <Route index element={<Home />} />
          <Route path="experiences" element={<Home />} />
          <Route path="recommended" element={<Home />} />
          {/* <Route path="404" element={<PageUnderConstruction />} /> */}
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
