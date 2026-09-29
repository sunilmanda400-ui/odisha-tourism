// Array of food details with associated places
const foods = [
  {
    name: "Dalma",
    description: "A traditional Odia dish made with lentils, vegetables, and spices, slow-cooked to perfection.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gSFiHSiUF5aWU2P-blS9XbKxIfpDWlnf6w&s",
    places: [
      { name: "Puri", description: "Famous for its street food and temple offerings where Dalma is a staple." },
      { name: "Bhubaneswar", description: "Local eateries serve authentic Dalma with regional twists." }
    ]
  },
  {
    name: "Chhena Poda",
    description: "A sweet delicacy made from cottage cheese, caramelized and baked, originating from Odisha.",
    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/4570_2_1.jpg",
    places: [
      { name: "Cuttack", description: "Known for traditional sweets; try Chhena Poda at local shops." },
      { name: "Bhubaneswar", description: "Explore restaurants and sweet shops for this caramelized treat." }
    ]
  },
  {
    name: "Pakhala Bhata",
    description: "Fermented rice water served with vegetables, a staple during summers in Odisha.",
    image: "https://res.cloudinary.com/roundglass/image/upload/v1694607069/rg/collective/media/rg-pakhala-01-livingapp-16x9-1694607068734.jpg",
    places: [
      { name: "Puri", description: "A summer favorite; available at roadside stalls and homes." },
      { name: "Konark", description: "Try it near the Sun Temple with local accompaniments." }
    ]
  },
  {
    name: "Odisha Rasagola",
    description: "Soft, spongy cheese dumplings soaked in sweetened syrup, a unique variant of rasgulla.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJWpJIfIUQXxiYVrxjgbLhazY2_IGF8FytQ&s",
    places: [
      { name: "Bhubaneswar", description: "Sweet shops offer the authentic Odisha Rasagola." },
      { name: "Cuttack", description: "Famous for its sweets; find Odisha Rasagola at traditional stores." }
    ]
  },
  {
  name: "Dahi Bara Aloo Dum",
  description: "Soft lentil vadas soaked in curd, served with spicy aloo dum and chutneys.",
  image: "https://images.herzindagi.info/image/2023/Dec/dahi-vada-aloo-dum-ingredients.jpg",
  places: [
    { name: "Cuttack", description: "The most famous destination for Dahi Bara Aloo Dum." },
    { name: "Bhubaneswar", description: "Popular street food across the city." }
  ]
},
{
  name: "Machha Besara",
  description: "Fish curry cooked in a mustard paste gravy, a signature Odia non-veg dish.",
  image: "https://images.jdmagicbox.com/quickquotes/listicle/listicle_1723185527969_cwmhg_1080x1080.jpg",
  places: [
    { name: "Balasore", description: "Known for authentic coastal fish preparations." },
    { name: "Ganjam", description: "Commonly prepared in Odia households." }
  ]
},
{
  name: "Chakuli Pitha",
  description: "Soft rice pancakes made from fermented rice and lentils.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo7p9aVhIzA8FHKLkcBBJuEgeIL55UBhcAGacz9DALVTPzHakWyHq3kFxkV6Sty2yUKtGUdX3pwJt4eaZCBqEvHgdA_-L6KnKlMwvkdyil0gul40XmuZ4FNrI0ANHyt53FUyrSD91SQdqU/w1600/",
  places: [
    { name: "Kendrapara", description: "Prepared traditionally during breakfast." },
    { name: "Cuttack", description: "Found in local eateries and homes." }
  ]
},
{
  name: "Poda Pitha",
  description: "Slow-cooked rice cake made with jaggery and coconut, famous during Raja festival.",
  image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/sasmita-sahoo-samanta15407146825bd570ba27911.jpeg",
  places: [
    { name: "Puri", description: "Prepared during festivals and special occasions." },
    { name: "Khordha", description: "Traditional Raja festival specialty." }
  ]
},
{
  name: "Enduri Pitha",
  description: "Steamed rice cake stuffed with coconut and jaggery, wrapped in turmeric leaves.",
  image: "https://img-global.cpcdn.com/recipes/739ff352732b14d3/680x781f0.5_0.501994_1.0q80/enduri-pitha-an-oriya-delicacy-turmeric-leaf-infused-dish-recipe-main-photo.jpg",
  places: [
    { name: "Cuttack", description: "Prepared during Prathamastami festival." },
    { name: "Jagatsinghpur", description: "Made traditionally in Odia households." }
  ]
},
{
  name: "Kanika",
  description: "Sweet aromatic rice cooked with ghee, cashews, raisins, and mild spices.",
  image: "https://images.cdn-files-a.com/uploads/2101965/800_crop_5ea8126f8dc9a_5ea8125152756.jpg",
  places: [
    { name: "Puri", description: "Served as part of Jagannath Temple Mahaprasad." },
    { name: "Bhubaneswar", description: "Available in traditional Odia restaurants." }
  ]
},
{
  name: "Khichdi (Mahaprasad)",
  description: "Sacred rice and dal dish offered to Lord Jagannath.",
  image: "https://img-cdn.thepublive.com/filters:format(webp)/sambad-english/media/post_attachments/wp-content/uploads/2017/11/kichidi-Cookilicious.jpg",
  places: [
    { name: "Puri", description: "Available inside Jagannath Temple." },
    { name: "Cuttack", description: "Served in Mahaprasad stalls." }
  ]
},
{
  name: "Macha Ghanta",
  description: "Fish head curry cooked with vegetables, a temple-style delicacy.",
  image: "https://i.ytimg.com/vi/fXJWvz0SqRI/maxresdefault.jpg",
  places: [
    { name: "Puri", description: "Traditional temple preparation." },
    { name: "Balasore", description: "Popular household dish." }
  ]
},
{
  name: "Chuda Mix",
  description: "Flattened rice mixed with onion, chili, lemon, and spices.",
  image: "https://ritikart.com/cdn/shop/products/3_ad31abd6-1876-4560-9b86-0655b8ed56ae_1000x.jpg?v=1720606035",
  places: [
    { name: "Cuttack", description: "Popular evening snack." },
    { name: "Bhubaneswar", description: "Common street food." }
  ]
},
{
  name: "Saga Bhaja",
  description: "Fried leafy greens served as a healthy side dish.",
  image: "https://www.odiaweb.in/odiarecipe/wp-content/uploads/sites/19/2021/10/Kosala-Saga-Bhaja.jpg",
  places: [
    { name: "Mayurbhanj", description: "Known for variety of saga dishes." },
    { name: "Keonjhar", description: "Prepared in traditional meals." }
  ]
},
{
  name: "Santula",
  description: "Lightly boiled mixed vegetables with minimal spices.",
  image: "https://images.slurrp.com/prod/recipe_images/cms/zkc4szu56j9.webp",
  places: [
    { name: "Puri", description: "Served with Mahaprasad meals." },
    { name: "Bhubaneswar", description: "Common in Odia homes." }
  ]
},
{
  name: "Besara",
  description: "Vegetables or fish cooked in mustard paste gravy.",
  image: "https://static.wixstatic.com/media/26b5bf_3bc38d69373345fa8f015d17d8dfa3a5~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26b5bf_3bc38d69373345fa8f015d17d8dfa3a5~mv2.jpg",
  places: [
    { name: "Ganjam", description: "Famous for mustard-based curries." },
    { name: "Balasore", description: "Popular coastal dish." }
  ]
},
{
  name: "Chingudi Jhola",
  description: "Spicy prawn curry cooked in traditional Odia style.",
  image: "https://www.sangitaskitchen.in/wp-content/uploads/2018/06/Chingudi-Mahura-Prawn-mix.png",
  places: [
    { name: "Balasore", description: "Fresh coastal prawns." },
    { name: "Kendrapara", description: "Popular seafood dish." }
  ]
},
{
  name: "Chingudi Malai",
  description: "Creamy prawn curry cooked with coconut milk.",
  image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chingri-Malai-Curry.jpg",
  places: [
    { name: "Puri", description: "Served in seafood restaurants." },
    { name: "Bhubaneswar", description: "Popular festive dish." }
  ]
},
{
  name: "Kankada Jhola",
  description: "Traditional Odia crab curry with spicy gravy.",
  image: "https://pbs.twimg.com/media/EfdtmoyUYAAWGUA.jpg",
  places: [
    { name: "Balasore", description: "Known for crab dishes." },
    { name: "Jagatsinghpur", description: "Cooked in coastal homes." }
  ]
},
{
  name: "Bara",
  description: "Deep-fried lentil fritters served hot.",
  image: "https://odishatour.in/wp-content/uploads/2022/12/odia-biri-bara-odisha.jpg",
  places: [
    { name: "Cuttack", description: "Popular evening snack." },
    { name: "Bhubaneswar", description: "Street food favorite." }
  ]
},
{
  name: "Mudhi Mixture",
  description: "Spicy puffed rice mixed with peanuts and onions.",
  image: "https://blog.swiggy.com/wp-content/uploads/2024/03/blog-images_Jhal-Mudhi-1-1024x538.png",
  places: [
    { name: "Baripada", description: "Famous local snack." },
    { name: "Rourkela", description: "Common street snack." }
  ]
},

{
  name: "Arisa Pitha",
  description: "Deep-fried rice and jaggery pitha with sesame flavor.",
  image: "https://m.media-amazon.com/images/I/71YK+wsdT4L.jpg",
  places: [
    { name: "Kendrapara", description: "Traditional pitha preparation." },
    { name: "Jagatsinghpur", description: "Festival specialty." }
  ]
},
{
  name: "Manda Pitha",
  description: "Steamed rice dumplings stuffed with coconut and jaggery.",
  image: "https://i.ytimg.com/vi/U-AmEmuETSI/maxresdefault.jpg",
  places: [
    { name: "Cuttack", description: "Prepared during festivals." },
    { name: "Puri", description: "Traditional sweet dish." }
  ]
},
{
  name: "Rasabali",
  description: "Deep-fried chhena soaked in thick sweet milk.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEiNIki7zbN36pCp4dmu295b8VwXkfphks4L9nMz1M2_Lr03siaRKUZHuyIbru0Glq1PQ2wCaLyYejsulFqKX_hYQzTnR_5FzjU7QGG-x9BbTonjX329Jcqw15HSEiay69P88faT7eCdIp/s1600/01+-+Copy.jpg",
  places: [
    { name: "Kendrapara", description: "Origin place of Rasabali." },
    { name: "Bhubaneswar", description: "Available in sweet shops." }
  ]
},
{
  name: "Khaja",
  description: "Layered crispy sweet soaked in sugar syrup.",
  image: "https://media.istockphoto.com/id/2168229979/photo/delicious-gaja-in-a-white-plate-on-a-light-wooden-surface-this-traditional-sweet-treat-is.jpg?s=612x612&w=0&k=20&c=rbRRYUMZrOETSBeeSL8iUlJUbPx8loF7wMmzaMaItOo=",
  places: [
    { name: "Puri", description: "Offered as Mahaprasad." },
    { name: "Cuttack", description: "Traditional sweet shops." }
  ]
},

{
  name: "Fried Fish",
  description: "crispy fried fish .",
  image: "https://www.bruitemagazine.com/wp-content/uploads/2023/03/1-Macha-Bhaja-e1679324371776.jpg",
  places: [
    { name: "Balasore", description: "Famous for fish pakhala." },
    { name: "Cuttack", description: "Summer staple food." }
  ]
},
{
  name: "Mahaprasad",
  description: "Sacred food offered to Lord Jagannath, cooked without onion and garlic.",
  image: "https://odiasamaj.org/assets/img/2025/03/10/67ce86889d900.jpeg",
  places: [
    { name: "Puri", description: "Available at Jagannath Temple." },
    { name: "Bhubaneswar", description: "Served in Anand Bazaar." }
  ]
}

];

// Get the container elements
const foodContainer = document.getElementById('food-cards-container');
const placesContainer = document.getElementById('places-container');
const modal = document.getElementById('whereToTryModal');
const modalFoodName = document.getElementById('modalFoodName');

// Function to render places for a given food with animation
function renderPlaces(food) {
  // Clear existing places
  placesContainer.innerHTML = '';
  // Update modal title
  modalFoodName.textContent = `Where to try ${food.name}`;
  // Populate new places
  food.places.forEach(place => {
    const placeDiv = document.createElement('div');
    placeDiv.className = 'place';
    placeDiv.innerHTML = `
      <h3>${place.name}</h3>
      <p>${place.description}</p>
    `;
    placesContainer.appendChild(placeDiv);
  });
  // Show modal with animation
  modal.classList.add('show');
}

// Function to close modal
function closeModal() {
  modal.classList.remove('show');
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Iterate over the foods array and create cards
foods.forEach((food) => {
  const card = document.createElement('div');
  card.className = 'food-card';
  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <h3>${food.name}</h3>
    <div class="food-description">${food.description}</div>
  `;
  // Add click event to update places
  card.addEventListener('click', () => {
    renderPlaces(food);
  });
  foodContainer.appendChild(card);
});