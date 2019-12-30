import React,{Component} from 'react';
import { storeProducts, detailProduct } from "./components/pages/Tabs/Data";

const ProductContext = React.createContext() ;
class ProductProvider extends Component {
  state={
     products: [],
    detailProduct: detailProduct
  }
  handleDetail=() => {
    console.log('handleDetail');
  }
  enroll=() => {
    console.log('enrolled');
  }
render(){
  return(
    <ProductContext.Provider value ={{
      ...this.state,
      handleDetail : this.handleDetail,
      enroll : this.enroll
    }}>
    {this.props.children} </ProductContext.Provider>
  )
}
}
const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer, ProductProvider};