import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  price: number;
  category: string;
  image: string;
  seller: string;
  rating?: number;
  isLiked?: boolean;
}

const ProductCard = ({ 
  title, 
  price, 
  category, 
  image, 
  seller, 
  rating = 5,
  isLiked = false 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 rounded-full bg-background/80 backdrop-blur hover:bg-background ${
              isLiked ? 'text-red-500' : 'text-muted-foreground'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">${price}</span>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-muted-foreground">★ {rating}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">{seller}</p>
          
          <Button 
            className="w-full mt-3 bg-primary hover:bg-primary-hover transition-colors" 
            size="sm"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;