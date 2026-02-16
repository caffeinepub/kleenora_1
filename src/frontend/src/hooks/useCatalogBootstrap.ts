import { useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useClearProducts } from './useQueries';
import { seedProducts } from '../data/seedProducts';

export function useCatalogBootstrap() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const clearProducts = useClearProducts();
  const [isBootstrapping, setIsBootstrapping] = useState(false);

  const bootstrap = useCallback(async () => {
    if (!actor || isBootstrapping) return;

    try {
      setIsBootstrapping(true);

      // Clear existing products
      await clearProducts.mutateAsync();

      // Initialize with seed products
      await actor.initialize();

      // Update products with our seed data
      for (const product of seedProducts) {
        await actor.updateProduct(product);
      }

      // Invalidate queries to refresh the products list
      await queryClient.invalidateQueries({ queryKey: ['products'] });
    } catch (error) {
      console.error('Failed to bootstrap catalog:', error);
    } finally {
      setIsBootstrapping(false);
    }
  }, [actor, clearProducts, isBootstrapping, queryClient]);

  return {
    bootstrap,
    isBootstrapping,
  };
}
