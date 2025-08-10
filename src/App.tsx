import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FixedSocialButtons from "./components/FixedSocialButtons";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
// import ProductPage from "./pages/ProductPage";
import HowToBuyPage from "./pages/HowToBuyPage";
import CustomJewelryPage from "./pages/CustomJewelryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  // Rutas donde deben aparecer los botones sociales
  const shouldShowSocialButtons = [
    '/',
    '/como-comprar',
    '/joyas-a-medida'
  ].includes(location.pathname) || location.pathname.startsWith('/producto/');

  return (
    <>
      <ScrollToTop />
      {shouldShowSocialButtons && <FixedSocialButtons />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categoria/:categoryId" element={<CategoryPage />} />
        <Route path="/producto/:productId" element={<ProductPage />} />
        <Route path="/como-comprar" element={<HowToBuyPage />} />
        <Route path="/joyas-a-medida" element={<CustomJewelryPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
