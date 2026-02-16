import { useEffect } from 'react';
import { SiteHeader } from './components/layout/SiteHeader';
import { HeroSection } from './components/sections/HeroSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { SiteFooter } from './components/layout/SiteFooter';
import { useCatalogBootstrap } from './hooks/useCatalogBootstrap';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const { bootstrap, isBootstrapping } = useCatalogBootstrap();

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection isBootstrapping={isBootstrapping} />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

export default App;
