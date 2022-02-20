import React from 'react';
import "./Product.css";

function Product({ title, image, price, rating }) {
  return <div className="product">
    <h2 className="product__title">{title}</h2>
    <div className="price-and-rating">
      <p className="product__price">{price}€</p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
    </div>
    <div className="product__image-container">
      <img src={image} alt="product-image" />
    </div>
    <div className="product__button-container">
      <button className="product__button">Add to Cart</button>
    </div>
  </div>;

// old way:
            {/*
  <div className="product">
  <div className="product__info">
    <h2>{title}</h2>
    <div className="product__info-price-rating">
      <p className="product__price">{price}€</p>
      <div className="product__rating">
        {Array(rating)
            .fill()
            .map((_) => (
                <p>⭐</p>
            ))}
      </div>
    </div>
    <p className="product__description">{description}</p>
  </div>
  <img src={image} alt="product-image" />
  <button className="product__button">Add to Cart</button>
  </div>;

  <div container-big>
    <div image>
      <img src="" alt="product-image" />
    </div>

    <div product-info>
      <h2>title</h2>
      <div price and rating>
        <p>price</p>
        <div>rating</div>
      </div>
      <p>lorem ipsum possible description</p>
      <button>add to cart</button>
    </div>
  </div>;

  <div in-between>
    <h2>title</h2>
    <div price and rating>
      <p>price</p>
      <div>rating</div>
    </div>
    <p>lorem ipsum possible description</p>
    <img src="" alt="product-image" />
    <button>add to cart</button>
  </div>;

  <div container-small>
    <div product-info>
      <h2>title</h2>
      <div price and rating>
        <p>price</p>
        <div>rating</div>
      </div>
    </div>

    <div>
      <img src="" alt="product-image" />
      <button>add to cart</button>
    </div>
  </div>;
              */}
}

export default Product;
