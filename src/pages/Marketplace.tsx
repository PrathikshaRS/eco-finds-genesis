import { useState } from 'react';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Layout/Header';
import ProductCard from '@/components/ProductCard';
import Filters from '@/components/Filters';

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    title: 'Organic Bamboo Utensil Set',
    price: 24.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    seller: 'EcoKitchen Co.',
    rating: 4.8,
    isLiked: true
  },
  {
    id: 2,
    title: 'Sustainable Cotton Tote Bag',
    price: 18.50,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    seller: 'Green Style',
    rating: 4.9
  },
  {
    id: 3,
    title: 'Solar-Powered Phone Charger',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593642633279-1796119d5482?w=400&h=300&fit=crop',
    seller: 'SolarTech Solutions',
    rating: 4.6
  },
  {
    id: 4,
    title: 'Biodegradable Plant Pots',
    price: 15.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    seller: 'Garden Green',
    rating: 4.7
  },
  {
    id: 5,
    title: 'Organic Skincare Set',
    price: 45.00,
    category: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop',
    seller: 'Pure Beauty Co.',
    rating: 4.9,
    isLiked: true
  },
  {
    id: 6,
    title: 'Recycled Plastic Outdoor Chair',
    price: 129.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
    seller: 'EcoFurniture',
    rating: 4.5
  }
];

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Eco Marketplace</h1>
            <p className="text-muted-foreground">
              Discover {mockProducts.length} sustainable products from verified sellers
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none border-r"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <Filters />
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {mockProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                  seller={product.seller}
                  rating={product.rating}
                  isLiked={product.isLiked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;