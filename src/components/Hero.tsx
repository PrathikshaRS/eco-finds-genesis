import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroImage from '@/assets/hero-eco.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Eco-friendly marketplace hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Discover
            <span className="block text-accent-bright">Eco-Friendly</span>
            Products
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Shop sustainable, ethically-sourced products from verified eco-conscious sellers. 
            Every purchase makes a difference for our planet.
          </p>
          
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for sustainable products..."
                className="pl-12 h-12 text-base bg-background/95 backdrop-blur border-0 focus:ring-2 focus:ring-accent-bright"
              />
            </div>
            <Button 
              size="lg" 
              className="h-12 px-8 bg-accent-bright hover:bg-accent-bright/90 text-primary font-semibold"
            >
              Search
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-primary-foreground/90">
            <div>
              <span className="text-2xl font-bold block">10K+</span>
              <span className="text-sm">Eco Products</span>
            </div>
            <div>
              <span className="text-2xl font-bold block">5K+</span>
              <span className="text-sm">Happy Customers</span>
            </div>
            <div>
              <span className="text-2xl font-bold block">500+</span>
              <span className="text-sm">Verified Sellers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;