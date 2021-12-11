import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import { HashRouter } from "react-router-dom";
import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";

export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <AppHeader />
        <Suspense fallback={<div>page loading</div>}>{renderRoutes(routes)}</Suspense>
        <AppFooter />
      </HashRouter>
    </div>
  );
});
