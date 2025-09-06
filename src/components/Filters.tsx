import { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const categories = [
  'Home & Garden',
  'Fashion',
  'Electronics',
  'Beauty & Health',
  'Food & Beverages',
  'Toys & Games'
];

const priceRanges = [
  { label: 'Under $25', value: '0-25' },
  { label: '$25 - $50', value: '25-50' },
  { label: '$50 - $100', value: '50-100' },
  { label: '$100 - $200', value: '100-200' },
  { label: 'Over $200', value: '200+' }
];

const Filters = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    price: true,
    rating: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Card className="shadow-card">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">Filters</h3>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <Collapsible 
            open={openSections.category} 
            onOpenChange={() => toggleSection('category')}
          >
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <span className="font-medium">Category</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  openSections.category ? 'rotate-180' : ''
                }`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 mt-4">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} />
                  <Label htmlFor={category} className="text-sm font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Price Range */}
          <Collapsible 
            open={openSections.price} 
            onOpenChange={() => toggleSection('price')}
          >
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <span className="font-medium">Price Range</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  openSections.price ? 'rotate-180' : ''
                }`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 mt-4">
              {priceRanges.map((range) => (
                <div key={range.value} className="flex items-center space-x-2">
                  <Checkbox id={range.value} />
                  <Label htmlFor={range.value} className="text-sm font-normal">
                    {range.label}
                  </Label>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Rating */}
          <Collapsible 
            open={openSections.rating} 
            onOpenChange={() => toggleSection('rating')}
          >
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <span className="font-medium">Rating</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  openSections.rating ? 'rotate-180' : ''
                }`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 mt-4">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="text-sm font-normal flex items-center">
                    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                    <span className="ml-2">& up</span>
                  </Label>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Button className="w-full mt-6" variant="outline">
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default Filters;