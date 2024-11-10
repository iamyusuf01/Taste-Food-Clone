
import pizza_logo from '../assets/pizza_logo.svg'
import burger_logo from '../assets/burger_logo.svg'
import salad_logo from '../assets/salad_logo.svg'
import combo_logo from '../assets/combo_logo.svg'
import burger_img from '../assets/burger_img.svg'
import pizza_img from '../assets/pizza_img.svg'
import pizza_img1 from '../assets/pizza_img1.svg'
import pizza_img2 from '../assets/pizza_img2.svg'
import pizza_img3 from '../assets/pizza_img3.svg'
import food_bg from '../assets/food_bg.png'
import developer from '../assets/developer.svg'
import resource from '../assets/resource.svg'
import soft_img from '../assets/soft_img.svg'
import hard_img from '../assets/hard_img.svg'
import Arrow_Right from '../assets/Arrow_Right.svg'


export const assets_Data = {
    pizza_logo,
    burger_logo,
    salad_logo,
    combo_logo,
    burger_img,
    pizza_img,
    pizza_img1,
    pizza_img2,
    pizza_img3,
    food_bg,
    developer,
    resource,
    soft_img,
    hard_img,
    Arrow_Right
   
    // add more images and data here as needed. For example:
    // meat_logo, chicken_logo, vegetarian_logo, vegan_logo, etc.
 
}

export const department = [
    {
     title:'Software and Services',
     image:soft_img,Arrow_Right,
    },
    {
     title:'Hardware',
     image:hard_img,
    },
    {
     title:'Human Resources',
     image:resource,
    },
    {
      title:'Development',
      image:developer,
    },
]
 
export const pizza = [{
    id: 1,
    image:pizza_img,
    name: 'Margherita',
    price: 10,
    description: 'Classic pizza with tomato sauce.',
},
{
    id: 2,
    image:pizza_img1,
    name: 'Marinara',
    price: 12,
    description: 'Pizza with tomato sauce.',
},
{
    id: 3,
    image:pizza_img2,
    name: 'Capricciosa',
    price: 14,
    description: 'Pizza with tomato sauce.',
},
{
    id: 4,
    image:pizza_img3,
    name: 'Funghi',
    price: 16,
    description: 'Pizza with tomato sauce.',
},
/* {
    id: 5,
    name: 'Prosciutto',
    price: 18,
    description: 'Pizza with tomato sauce, mozzarella cheese, and fresh basil, prosciutto, and olives.',
},
{
    id: 6,
    name: 'Funghi & Prosciutto',
    price: 20,
    description: 'Pizza with tomato sauce, mozzarella cheese, and fresh basil, spinach, olives, and prosciutto.',
} */
]
