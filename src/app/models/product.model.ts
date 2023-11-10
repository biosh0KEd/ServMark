import { Category } from './category.model';
import { Image } from './image.model';

export interface Product {
    id: string;
    title: string;
    price: number;
    images: Image[];
    description: string;
    category: Category;
    taxes?: number;
}

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
    categoryId: number;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}