import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import NotFound from "pages/NotFound";
import HomepageInteractiveDeveloperPortfolio from "pages/homepage-interactive-developer-portfolio";


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<HomepageInteractiveDeveloperPortfolio />} />
          <Route path="/homepage-interactive-developer-portfolio" element={<HomepageInteractiveDeveloperPortfolio />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;