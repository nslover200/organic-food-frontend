import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Truck, Shield, Heart, Star } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import './Home.css';

const Home = ({ foods }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Fresh Organic Food Delivered to Your Door</h1>
            <p>Discover the finest selection of organic fruits, vegetables, and meals prepared with love and care for your healthy lifestyle.</p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                Order Now <ChevronRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Fresh organic food" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <Truck size={48} />
              </div>
              <h3>Fast Delivery</h3>
              <p>Get your fresh food delivered within hours of ordering. We prioritize freshness and timely delivery.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Shield size={48} />
              </div>
              <h3>Quality Guarantee</h3>
              <p>All our products are certified organic and sourced from trusted local farmers with sustainable practices.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Heart size={48} />
              </div>
              <h3>Healthy Living</h3>
              <p>We're committed to supporting your health journey with nutritious, delicious organic options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="popular-items">
        <div className="container">
          <h2 className="section-title">Popular This Week</h2>
          <div className="items-grid">
            {foods.map(food => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>
          <div className="center-button">
            <Link to="/menu" className="btn btn-primary">
              View Full Menu <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="gold" />
                  ))}
                </div>
                <p>"The quality of their organic vegetables is unmatched. I've been a customer for over a year now!"</p>
                <div className="testimonial-author">
                  <strong>Sarah Johnson</strong>
                  <span>Regular Customer</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="gold" />
                  ))}
                </div>
                <p>"Their delivery is always on time and the food is always fresh. Highly recommend!"</p>
                <div className="testimonial-author">
                  <strong>Michael Chen</strong>
                  <span>Food Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="gold" />
                  ))}
                </div>
                <p>"As a nutritionist, I only recommend the best to my clients. This is my go-to for organic produce."</p>
                <div className="testimonial-author">
                  <strong>Dr. Emily Rodriguez</strong>
                  <span>Nutrition Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers, new products, and health tips.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;