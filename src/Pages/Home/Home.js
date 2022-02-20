import React from 'react';
import Product from "../../components/Products/Product";
import Product_Big from '../../components/Products/Product_Big';

function Home() {
  return <div>

    <div className="products-list-name-container">
      <p className="home__row products-list-name">Featured:</p>
    </div>

    <div className="home__row">
      <Product_Big
        title="Product Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price={"10,00"}
        rating={5}
        image="/images/01_AppleiPadPro112021128Gt5G_grey.png"
      />
      <Product_Big
        title="Product Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price={"10,00"}
        rating={5}
        image="/images/7a800dc93ffa6a45af04c2b49a75a4af.png"
      />
    </div>
    
{/*
    <div className="home__row product--featured">
      <Product
        title="Product Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price={"10,00"}
        rating={5}
        image="/images/01_AppleiPadPro112021128Gt5G_grey.png"
      />
      <Product
        title="Product Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price={"13,19"}
        rating={5}
        image="/images/7a800dc93ffa6a45af04c2b49a75a4af.png"
      />
    </div>
    */}
    <div className="products-list-name-container">
      <p className="home__row products-list-name">All Products: (6x)</p>
    </div>

    <div className="home__row">
      <Product
        title="Product Title"
        price={"10,00"}
        rating={5}
        image="/images/battery-bank.png"
      />
      <Product
        title="Product Title"
        price={"10,00"}
        rating={5}
        image="/images/Speaker.png"
      />
      <Product
        title="Product Title"
        price={"10,00"}
        rating={5}
        image="/images/Television.png"
      />
    </div>
    <div className="home__row">
      <Product
        title="Product Title"
        price={"10,00"}
        rating={5}
        image="/images/1966px-Rubik's_cube.png"
      />
      <Product
        title="Product Title"
        price={"10,00"}
        rating={5}
        image="/images/Canon-90d-18-135mm-02-550x550.png"
      />
      <Product
        title="Product Title"
        price={"10,00"}
        rating={5}
        image="/images/Apple-USB-C-Charge-Cable-(1m).png"
      />
    </div>
  </div>;
}

export default Home;
