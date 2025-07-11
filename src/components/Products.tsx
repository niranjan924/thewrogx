import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product B",
      actualPrice: 1099,
      discountPrice: 899,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDDH8Bt73lnDOTifQsQLCAawq8LxkU6IAkA&s",
      tag: "New",
      description: "Designed for comfort and performance with a stylish look.",
    },
    {
      id: 2,
      name: "Product C",
      actualPrice: 1599,
      discountPrice: 1299,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dK2kD3_IdZvZnS6bBYo7TgqmYyCWHGw5ZA&s",
      description: "Premium material with moisture-wicking technology.",
    },
    {
      id: 3,
      name: "Product D",
      actualPrice: 999,
      discountPrice: 799,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/nike-dri-fit-tee-68109269a9983.png?crop=1.00xw:1.00xh;0,0&resize=1120:*",
      description: "Lightweight and breathable. Great for gym sessions.",
    },
    {
      id: 4,
      name: "Product A",
      actualPrice: 799,
      discountPrice: 499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrBHEZ92hrDHaoG1iDAu0FYg8JEcfrUT51Q&s",
      tag: "Best Seller",
      description: "High-quality fabric, perfect for daily use and workouts.",
    },
    {
      id: 5,
      name: "Product B",
      actualPrice: 1099,
      discountPrice: 899,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYF25XVM-1mDpjpf7W0PDQBHGQp2NPMaEMl2Va9A-iAwXojGUml9mZoROJBSZU8iT894s&usqp=CAU",
      tag: "New",
      description: "Designed for comfort and performance with a stylish look.",
    },
    {
      id: 6,
      name: "Product D",
      actualPrice: 999,
      discountPrice: 799,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUYs1yYj-2XJAFDtfB-VUIrm67tHxYL41MA&s",
      description: "Lightweight and breathable. Great for gym sessions.",
    },
    {
      id: 7,
      name: "Product C",
      actualPrice: 1599,
      discountPrice: 1299,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchiA-QybnHvlmPD4BHjp3SI2wZzyptNmwTA&s",
      description: "Premium material with moisture-wicking technology.",
    },

    {
      id: 8,
      name: "Product A",
      actualPrice: 799,
      discountPrice: 499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZptYJhfl7xzcBTGlc1_yRNnkSyfswjUBkg&s",
      tag: "Best Seller",
      description: "High-quality fabric, perfect for daily use and workouts.",
    },
    {
      id: 9,
      name: "Product A",
      actualPrice: 799,
      discountPrice: 499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmavkiOebhifuoSs_23igkkUviJTwwGklRzw&s",
      tag: "Best Seller",
      description: "High-quality fabric, perfect for daily use and workouts.",
    },
    {
      id: 10,
      name: "Product D",
      actualPrice: 999,
      discountPrice: 799,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvtjRUYkRJglkvpxGESiquo0TFlZp-DD8jA&s",
      description: "Lightweight and breathable. Great for gym sessions.",
    },
    {
      id: 11,
      name: "Product C",
      actualPrice: 1599,
      discountPrice: 1299,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXg63rOiiaDCLEUE1X0beOJdNg8QTidG2jMA&s",
      description: "Premium material with moisture-wicking technology.",
    },
    {
      id: 12,
      name: "Product C",
      actualPrice: 1599,
      discountPrice: 1299,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjDMOBbKQeDmKpMwh08smWyvWcCeYcbo6-A&s",
      description: "Premium material with moisture-wicking technology.",
    },
  ];

  return (
    <section className="p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">
          Our Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              actualPrice={product.actualPrice}
              discountPrice={product.discountPrice}
              image={product.image}
              tag={product.tag}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
