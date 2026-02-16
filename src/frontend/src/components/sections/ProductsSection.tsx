import { useProducts } from '../../hooks/useQueries';
import { ProductCard } from '../products/ProductCard';
import { InlineError } from '../feedback/InlineError';
import { ProductCardSkeleton } from '../products/ProductCardSkeleton';
import { seedProducts } from '../../data/seedProducts';

interface ProductsSectionProps {
  isBootstrapping?: boolean;
}

export function ProductsSection({ isBootstrapping = false }: ProductsSectionProps) {
  const { data: products, isLoading, error, refetch } = useProducts();

  // Show loading state during bootstrap or initial fetch
  const showLoading = isLoading || isBootstrapping;

  // Use seed products as fallback during bootstrap or when backend is empty
  const displayProducts = products && products.length > 0 ? products : (isBootstrapping ? seedProducts : products);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions for every need. Quality products you can trust.
          </p>
        </div>

        {error && !isBootstrapping && (
          <InlineError
            message="Failed to load products. Please try again."
            onRetry={() => refetch()}
          />
        )}

        {showLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 14 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}

        {!showLoading && !error && displayProducts && displayProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <ProductCard key={product.id.toString()} product={product} />
            ))}
          </div>
        )}

        {!showLoading && !error && (!displayProducts || displayProducts.length === 0) && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
