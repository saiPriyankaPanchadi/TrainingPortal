import React, { Component } from "react";
import { storeProducts, detailProduct } from "./components/pages/Tabs/Data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart : [],
    enrollSubTotal : 0,
    enrollTax:0,
    enrollTotal:0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  enroll = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.enroll=true;
    product.count =1;
    const price = product.price;
    product.total = price;
    this.setState (()=> 
    {
      return {products : tempProducts,
      cart :[...this.state.cart,product]};

    }, () => {console.log(this.state)});
  };

  increment =(id)=> {
    console.log("inc")
  }
   decrement =(id)=> {
    console.log("dec")
  }
   removeItem =(id)=> {
    console.log("remove")
  }
  clearCart =(id) =>{
console.log("clear")
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          enroll: this.enroll,
          increment:this.increment,
          decrement:this.decrement,
          removeItem : this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}{" "}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
