import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Leaf, Shield, Truck, Heart } from 'lucide-react';

// Featured products for the homepage
const featuredProducts = [
  {
    title: 'Organic Bamboo Utensil Set',
    price: 24.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    seller: 'EcoKitchen Co.',
    rating: 4.8,
    isLiked: true
  },
  {
    title: 'Sustainable Cotton Tote Bag',
    price: 18.50,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    seller: 'Green Style',
    rating: 4.9
  },
  {
    title: 'Solar-Powered Phone Charger',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593642633279-1796119d5482?w=400&h=300&fit=crop',
    seller: 'SolarTech Solutions',
    rating: 4.6
  },
  {
    title: 'Organic Skincare Set',
    price: 45.00,
    category: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop',
    seller: 'Pure Beauty Co.',
    rating: 4.9
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose EcoFinds?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of conscious consumers making a positive impact with every purchase
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Eco-Friendly</h3>
              <p className="text-muted-foreground text-sm">All products verified for environmental sustainability</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Verified Sellers</h3>
              <p className="text-muted-foreground text-sm">Every seller is vetted for quality and ethics</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Carbon-Neutral Shipping</h3>
              <p className="text-muted-foreground text-sm">Free eco-friendly shipping on orders over $50</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Impact Tracking</h3>
              <p className="text-muted-foreground text-sm">See your positive environmental impact with every order</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Discover our most popular eco-friendly items</p>
            </div>
            <Link to="/marketplace">
              <Button variant="outline" className="hidden sm:block">
                View All Products
              </Button>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
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
          
          <div className="text-center mt-8 sm:hidden">
            <Link to="/marketplace">
              <Button variant="outline" className="w-full">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
