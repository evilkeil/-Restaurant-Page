export default function homePageComponent() {
    const description = " where we invite you on a culinary journey to discover the vibrant and exotic flavors of Sri Lanka. Nestled in the heart of the city, our restaurant is a haven for those seeking an authentic Sri Lankan dining experience. At Spice Isle Delights, we believe in celebrating the rich tapestry of Sri Lankan cuisine, renowned for its aromatic spices, diverse ingredients, and mouthwatering dishes that reflect the island's multicultural heritage.";

const container = document.createElement('div');
container.classList.add('container');

//h1
const h1= document.createElement('h1');
h1.textContent="Welcome to Spice Isle Delights!!";
container.appendChild(h1);

//p

const p = document.createElement('p');
p.classList.add('description');
p.textContent= description;
container.appendChild(p);

return container;

}