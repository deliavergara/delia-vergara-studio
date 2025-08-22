import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import Index from '@/pages/Index';
import CategoryPage from '@/pages/CategoryPage';
import ProductPage from '@/pages/ProductPage';
import CustomJewelryPage from '@/pages/CustomJewelryPage';
import HowToBuyPage from '@/pages/HowToBuyPage';
import NotFound from '@/pages/NotFound';
import ScrollToTop from '@/components/ScrollToTop';
import FixedSocialButtons from '@/components/FixedSocialButtons';
import { testSupabaseUrl } from '@/lib/supabase-config';

function App() {
  const { toast } = useToast();

  // Función de prueba para verificar Supabase
  const testImage = () => {
    const testUrl = testSupabaseUrl();
    console.log('Testing Supabase URL:', testUrl);
    toast({
      title: "Testing Supabase",
      description: `URL: ${testUrl}`,
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Botón de prueba temporal */}
        <button 
          onClick={testImage}
          className="fixed top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded"
        >
          Test Supabase
        </button>
        
        {/* Imagen de prueba temporal */}
        <div className="fixed top-16 right-4 z-50">
          <img 
            src={testSupabaseUrl()} 
            alt="Test" 
            className="w-20 h-20 object-cover border"
            onError={(e) => console.error('Image failed to load:', e)}
            onLoad={() => console.log('Image loaded successfully')}
          />
        </div>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/joyas-a-medida" element={<CustomJewelryPage />} />
          <Route path="/como-comprar" element={<HowToBuyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <FixedSocialButtons />
        <ScrollToTop />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
