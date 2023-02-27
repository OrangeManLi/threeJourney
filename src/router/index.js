import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, Fragment, lazy } from "react";

import LayoutComponent from "components/Layout";
import routerList from "./routerList";

class CustomRoute extends React.Component {
  // 递归方法
  routerListRecursion = (routerList) => {
    return Object.assign(routerList).map(
      ({ path, exact, routes, element: LazyComponent }, key) => {
        let newItem = { path, exact, routes };
        if (routes && routes.length) {
          return (
            <Fragment key={`fragment${key}`}>
              <Route
                key={key}
                {...newItem}
                render={() => <LazyComponent />}
              ></Route>{" "}
              {/* // 为方便组件之间的传参 利用render */}
              <Routes key={`Routes${key}`}>
                {this.routerListRecursion(routes)}
              </Routes>
            </Fragment>
          );
        } else {
          return (
            <Route
              key={key}
              {...newItem}
              element={
                <Suspense fallback={<span></span>}>
                  <LazyComponent />
                </Suspense>
              }
            ></Route>
          );
        }
      }
    );
  };
  render() {
    const HomePage = lazy(() => import("../pages/Home/index"));
    return (
      <BrowserRouter>
        <LayoutComponent>
          {/* <Suspense fallback={<span>Loading...</span>}> */}{" "}
          {/* // Lazy要求有的Loading组件 */}
          <Routes>
            {/* <Suspense fallback={<span>Loading...</span>}> */}
            {/* </Suspense> */}
            {this.routerListRecursion(routerList)} // 执行递归方法
          </Routes>
          {/* </Suspense> */}
        </LayoutComponent>
      </BrowserRouter>
    );
  }
}
export default CustomRoute;
