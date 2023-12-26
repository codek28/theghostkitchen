import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { IndexLanding } from "../pages/landing/IndexLanding";
import { Indexcart } from "../pages/cart/Indexcart";
import { IndexOrder } from "../pages/order/IndexOrder";
import { IndexOrderCard } from "../pages/order/IndexOrderCard";
import { Indexid } from "../pages/identification/Indexid";
import { IndexSideNavigation } from "../pages/side navigation/IndexSideNavigation";
import { IndexZone } from "../pages/zone/IndexZone";
import { IndexProfitCenter } from "../pages/profit center/IndexProfitCenter";
import { IndexMenuPage } from "../pages/menu/IndexMenuPage";
import { IndexLogger } from "../pages/identification/IndexLogger";
import { IndexEvents } from "../pages/events/IndexEvents";
import { IndexFeedback } from "../pages/feedback/IndexFeedback";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/zone/:zonename" element={<IndexZone />} />
        <Route path="/pc/:pcid" element={<IndexProfitCenter />} />
        <Route path="/pc/:pcid/:menuid" element={<IndexMenuPage />} />
        <Route path="/" element={<IndexLanding />} />
        <Route path="/cart" element={<Indexcart />} />
        <Route path="/sidenav" element={<IndexSideNavigation />} />
        <Route path="/id" element={<Indexid />} />
        <Route path="/order" element={<IndexOrder />} />
        <Route path="/order/:ordertoken" element={<IndexOrderCard />} />
        <Route path="/events" element={<IndexEvents />} />
        <Route path="/feedback" element={<IndexFeedback />} />
        <Route path="/logger" element={<IndexLogger />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
