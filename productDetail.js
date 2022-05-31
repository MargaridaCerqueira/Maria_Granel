function Product(id, name, brand, price, mainImage, category, subCategory) {
  this.id = id;
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.mainImage = mainImage;
  this.category = category;
  this.subCategory = subCategory;
  this.specifications = function () {
    return this;
  };
}

const product = new Product(
  1,
  "Champô sólido cabelo normal",
  "Greensense",
  34.99,
  "assets/img/champo_cabelo_normal.jpg",
  "Higiene e Cosmética",
  "Champôs e Amaciadores"
);

document.getElementById("mainImage").setAttribute("src", product.mainImage);
document.getElementById("brand").innerHTML = product.brand;
document.getElementById("mainTitle").innerHTML = product.name;
document.getElementById("price").innerHTML = product.price + "€";
document.getElementById("category").innerHTML = product.category;
document.getElementById("subCategory").innerHTML = product.subCategory;
