import basketsblanc from '../images/basketsblanc.jpg';
import basket from '../images/basket.jpg';
import bermuda from '../images/bermuda.jpg';
import blazer from '../images/blazer.jpg';
import chemisedenim from '../images/chemisedenim.jpg';
import debardeur from '../images/debardeur.jpg';
import doudoune_sans_manches from '../images/doudoune_sans_manches.jpg';
import pull_over from '../images/pull_over.jpg';
import short from '../images/short.jpg';
import sur_chemise from '../images/sur_chemise.jpg';
import sweat from '../images/sweat.jpg';
import legging_de_sport from '../images/legging_de_sport.jpg';

const products= [{ name:"baskets-semelle-blanc", price:150 , image:basketsblanc},
{name:"baskets noir" ,price:189  ,image:basket},
{name:"bermuda" ,price:29 ,image:bermuda},
{name:"blazer", price:260, image:blazer},
{name:"chemise-denim" ,price:90 ,image:chemisedenim},
{name:"debardeur", price:49 ,image:debardeur},
{name:"doudoune_sans_manches" ,price:230,image:doudoune_sans_manches},
{name:"pull_over " ,price:99 , image:pull_over},
{name:"short", price:79  ,image:short},
{name:"sur_chemise" ,price:89 ,image:sur_chemise},
{name:"sweat" ,price:69  ,image:sweat},
{name:"legging_de_sport" ,price:56  ,image:legging_de_sport}
]
products.forEach(product=>product.id=crypto.randomUUID())
 
const shop=[];

//2-create reducer 
export const productsReducer= (state={products,shop},action)=>{
   switch (action.type){
    case 'ADD': {const selectedProduct=state.products.filter(product=>product.id===action.payload);
   const newShop=[...state.shop,...selectedProduct]
return {...state,shop:newShop}}

case 'DELETE': {const newShop= state.shop.filter(item=>item.id!==action.payload)
return {...state,shop:newShop}
}

default:return state
   }


}