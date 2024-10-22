// UserDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For routing
import { useCart } from './CartContext'; // Import the cart context

const UserDashboard = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { cartCount } = useCart(); // Access the cart count from context

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="bg-green-900 shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-green-store-png-image_6942085.png" 
              alt="Shop Logo" 
              className="w-12 h-12 mr-2" 
            />
            <h1 className="text-3xl font-bold text-white">MY DUKA</h1>
          </div>
          <nav className="relative">
            <div 
              className="flex items-center cursor-pointer text-white space-x-2"
              onClick={toggleCategoryDropdown}
            >
              <span>Category</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transform ${isCategoryOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isCategoryOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-green-100 shadow-lg rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
                    <Link to="/furniture">Furniture</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
                    <Link to="/handbags">Hand Bags</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
                    <Link to="/shoes">Shoes</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
                    <Link to="/tech">Tech</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
                    <Link to="/clothes">Clothes</Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
          <div className="flex space-x-4">
            <div className="relative">
              <span className= "text-white text-5xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Link to="/cart" className="text-white">Cart</Link>
            </div>
          </div>
        </div>
      </header>

         {/* Hero Section */}
         <section className="hero bg-green-200 py-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text">
            <h2 className="text-7xl font-bold text-green-900">Shopping And <br />Department Store.</h2>
            <p className="text-gray-600 mt-4">
              Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.<br />
              So to make it easier for you, we bring you our affordable products.<br />
              Our goal is to provide high-quality items without breaking the bank, so you can enjoy guilt-free shopping.<br />
              Whether you're looking for tech gadgets or stylish clothing, we have something for everyone at unbeatable prices.
            </p>
          </div>
          <div className="image">
            <img src="https://ih1.redbubble.net/image.311363313.9223/fposter,small,wall_texture,square_product,600x600.u4.jpg" alt="Shopping items" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8">Shop Our Top Categories</h3>
          <div className="grid grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src="https://i.pinimg.com/564x/9e/f6/cc/9ef6ccd89cb74a86f272cf88fd5dd879.jpg" alt="Furniture" className="w-full h-3/4 mb-4" />
              <p className="text-xl font-semibold">Furniture</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://i.pinimg.com/enabled_lo/564x/b4/33/41/b43341110752bf56daf9950daa573fd5.jpg" alt="Hand Bags" className="w-full h-3/4 mb-4" />
              <p className="text-xl font-semibold">Hand Bags</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://i.pinimg.com/enabled_lo/236x/23/0b/c9/230bc904ed0d716d556d2fbe30c532c0.jpg" alt="Shoes" className="w-full h-3/4 mb-4" />
              <p className="text-xl font-semibold">Shoes</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://i.pinimg.com/236x/af/63/ab/af63ab04517da430690489efdfa276bb.jpg" alt="Tech" className="w-full h-3/4 mb-4" />
              <p className="text-xl font-semibold">Tech</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://i.pinimg.com/236x/78/e4/12/78e412069008cfb30982e258d754b70e.jpg" alt="Clothes" className="w-full h-3/4 mb-4" />
              <p className="text-xl font-semibold">Clothes</p>
            </div>
          </div>
        </div>
      </section>

      <h3 className= "text-5xl font-bold text-green-900 mt-8 text-center mb-6">TRY OUT NOW!</h3>

      {/* Footer */}
      <footer className="bg-green-900 py-6 text-center text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div>
        <h4 className="font-semibold text-lg mb-2">About Us</h4>
        <p>
          My Duka is a platform providing the best shopping experience. We offer
          a wide range of products and amazing customer service.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-2">Customer Service</h4>
        <ul>
          <li><a href="/shipping" className="hover:underline">Shipping & Delivery</a></li>
          <li><a href="/returns" className="hover:underline">Returns</a></li>
          <li><a href="/support" className="hover:underline">Support</a></li>
        </ul>
      </div>
      <div>
        <h4 className= "font-semibold text-lg mb-2">Follow Us</h4>
        <ul>
          <li><a href="https://facebook.com" className="hover:underline">Email : myduka@gmail.org</a></li>
          <li><a href="https://twitter.com" className="hover:underline">Phone Number : 0722758494</a></li>
          <li><a href="https://instagram.com" className="hover:underline">Location : myduka58</a></li>
         
        </ul>
        
      </div>
      <div>
        <h4 className= 'font-semibold text-lg mb-2 '> Deliveries</h4>
      <p>CALL US FOR DELIVERY AT A COST DEPENDING ON LOCATION</p>
     
      </div>
    </div>
    <p className="mb-4">&copy; 2024 My Duka. All rights reserved.</p>
  </div>

  {/* Google Map */}
  <div className="w-full h-64 mt-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_URL_HERE"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
    ></iframe>
  </div>
</footer>
    </div>
  );
};
   

export default UserDashboard;
