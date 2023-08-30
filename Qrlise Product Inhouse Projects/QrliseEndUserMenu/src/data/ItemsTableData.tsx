import FoodImg1 from '../assets/FoodImg1.jpg'
import FoodImg2 from '../assets/FoodImg2.jpg'
import FoodImg3 from '../assets/FoodImg3.jpg'
import FoodImg4 from '../assets/FoodImg4.jpg'
import FoodImg5 from '../assets/FoodImg5.jpg'
import FoodImg6 from '../assets/FoodImg6.jpg'

export type FoodItemsDataType = {
    id: number;
    itemName: string;
    dietary:  string; // Add other dietary types if needed
    price: number;
    status: 'Active' | 'Deactive';
    itemImage : string
  };

 

export const FoodItemsData:FoodItemsDataType[] = 
 [
  {
    id: 1,
    itemName: 'Paneer Tikka',
    dietary: 'Veg',
    price: 250,
    status: 'Deactive',
    itemImage: FoodImg1,
  },
  {
    id: 2,
    itemName: 'Chicken Wings',
    dietary: 'Nonveg',
    price: 350,
    status: 'Deactive',
    itemImage: FoodImg2,
  },
  {
    id: 3,
    itemName: 'Cheese Pizza',
    dietary: 'Veg',
    price: 400,
    status: 'Active',
    itemImage: FoodImg3,
  },
  {
    id: 4,
    itemName: 'Fish Curry',
    dietary: 'Nonveg',
    price: 320,
    status: 'Active',
    itemImage: FoodImg4,
  },
  {
    id: 5,
    itemName: 'Chole Bhature',
    dietary: 'Veg',
    price: 180,
    status: 'Active',
    itemImage: FoodImg5,
  },
  {
    id: 6,
    itemName: 'Veg Biryani',
    dietary: 'Veg',
    price: 280,
    status: 'Active',
    itemImage: FoodImg6,
  },
  {
    id: 7,
    itemName: 'Chicken Fried Rice',
    dietary: 'Nonveg',
    price: 320,
    status: 'Active',
    itemImage: FoodImg1,
  },
  {
    id: 8,
    itemName: 'Masala Dosa',
    dietary: 'Veg',
    price: 150,
    status: 'Active',
    itemImage: FoodImg2,
  },
];