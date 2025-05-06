import { useState, useEffect } from 'react'
import './App.css'
import heroBgImg from './assets/hero_bg_img.jpg'

// Placeholder images (in a real project, these would be imported from assets)
const PLACEHOLDER_IMAGES = {
  hero: heroBgImg,
  about: 'https://images.unsplash.com/photo-1527112862739-c3b2fea34794?q=80&w=800&auto=format&fit=crop',
  lounge: 'https://images.unsplash.com/photo-1517914525469-c6c5aca6c607?q=80&w=800&auto=format&fit=crop',
  flavor1: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?q=80&w=400&auto=format&fit=crop',
  flavor2: 'https://images.unsplash.com/photo-1514362453360-8f2f49697a2d?q=80&w=400&auto=format&fit=crop',
  flavor3: 'https://images.unsplash.com/photo-1523304108042-8ac6a5f1ec2a?q=80&w=400&auto=format&fit=crop',
  flavor4: 'https://images.unsplash.com/photo-1559628151-cef0f1cb5b5e?q=80&w=400&auto=format&fit=crop',
  product1: 'https://images.unsplash.com/photo-1626197031507-c17099753214?q=80&w=400&auto=format&fit=crop',
  product2: 'https://images.unsplash.com/photo-1626197031535-22d7f77bf1f5?q=80&w=400&auto=format&fit=crop',
  product3: 'https://images.unsplash.com/photo-1626197031461-cc2888a4b350?q=80&w=400&auto=format&fit=crop',
  gallery1: 'https://images.unsplash.com/photo-1517914525469-c6c5aca6c607?q=80&w=600&auto=format&fit=crop',
  gallery2: 'https://images.unsplash.com/photo-1544982877-f0f4427dee5c?q=80&w=600&auto=format&fit=crop',
  gallery3: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=600&auto=format&fit=crop',
  gallery4: 'https://images.unsplash.com/photo-1544982647-0b3d65bf3e19?q=80&w=600&auto=format&fit=crop',
  gallery5: 'https://images.unsplash.com/photo-1544982503-769f936c63fc?q=80&w=600&auto=format&fit=crop',
  gallery6: 'https://images.unsplash.com/photo-1544982503-b5aa47ee5891?q=80&w=600&auto=format&fit=crop',
  event1: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
  event2: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop',
  event3: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFlavorCategory, setActiveFlavorCategory] = useState('All')
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderScrolled(true)
      } else {
        setIsHeaderScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu when clicking a nav link
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Sample flavor data
  const flavorCategories = ['All', 'Fruity', 'Exotic', 'Mint', 'Mixed']
  const flavors = [
    {
      id: 1,
      name: 'Tropical Paradise',
      category: 'Fruity',
      description: 'A blend of pineapple, mango, and passion fruit for an island escape.',
      price: '$22',
      image: PLACEHOLDER_IMAGES.flavor1
    },
    {
      id: 2,
      name: 'Midnight Breeze',
      category: 'Mint',
      description: 'Cool mint with subtle hints of blueberry for a refreshing experience.',
      price: '$20',
      image: PLACEHOLDER_IMAGES.flavor2
    },
    {
      id: 3,
      name: 'Exotic Spice',
      category: 'Exotic',
      description: 'Cardamom, cinnamon, and clove with a touch of honey.',
      price: '$25',
      image: PLACEHOLDER_IMAGES.flavor3
    },
    {
      id: 4,
      name: 'Island Fusion',
      category: 'Mixed',
      description: 'A complex blend of tropical fruits and subtle mint undertones.',
      price: '$24',
      image: PLACEHOLDER_IMAGES.flavor4
    },
  ]

  // Filter flavors based on active category
  const filteredFlavors = activeFlavorCategory === 'All' 
    ? flavors 
    : flavors.filter(flavor => flavor.category === activeFlavorCategory)

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Island Signature Hookah',
      description: 'Our premium signature hookah with gold accents and smooth draw.',
      price: '$149.99',
      image: PLACEHOLDER_IMAGES.product1
    },
    {
      id: 2,
      name: 'Coconut Shell Charcoal',
      description: 'Long-lasting, low-ash natural coconut charcoal for the perfect session.',
      price: '$19.99',
      image: PLACEHOLDER_IMAGES.product2
    },
    {
      id: 3,
      name: 'Premium Hose Set',
      description: 'Washable silicone hoses with decorative handles and wide draw.',
      price: '$34.99',
      image: PLACEHOLDER_IMAGES.product3
    },
  ]

  // Sample event data
  const events = [
    {
      id: 1,
      title: 'Tropical Night',
      date: 'June 24, 2023',
      description: 'Live DJ, special tropical flavors, and island-themed cocktails all night.',
      image: PLACEHOLDER_IMAGES.event1
    },
    {
      id: 2,
      title: 'Flavor Tasting Party',
      date: 'July 15, 2023',
      description: 'Try our new exclusive flavors before they hit the menu. Limited spots available.',
      image: PLACEHOLDER_IMAGES.event2
    },
    {
      id: 3,
      title: 'Weekend Vibes',
      date: 'Every Friday & Saturday',
      description: 'Happy hour specials from 7-9pm with live music and special guest DJs.',
      image: PLACEHOLDER_IMAGES.event3
    },
  ]

  return (
    <>
      {/* Header & Navigation */}
      <header className={`header ${isHeaderScrolled ? 'scrolled' : ''}`}>
        <div className="header-container container">
          <a href="#" className="logo">
            Hookha Island
          </a>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#flavors" className="nav-link" onClick={closeMenu}>Flavors</a>
            <a href="#lounge" className="nav-link" onClick={closeMenu}>Lounge</a>
            <a href="#shop" className="nav-link" onClick={closeMenu}>Shop</a>
            <a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a>
            <a href="#events" className="nav-link" onClick={closeMenu}>Events</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src={PLACEHOLDER_IMAGES.hero} alt="Hookha Island Lounge" className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Escape the Ordinary.</span><br />
            Welcome to Hookha Island.
          </h1>
          <p className="hero-subtitle">
            Experience premium hookah in a tropical paradise atmosphere. Exotic flavors, vibrant ambiance, unforgettable nights.
          </p>
          <div className="hero-cta">
            <a href="#lounge" className="button">Visit Us</a>
            <a href="#shop" className="button gold">Shop Now</a>
            <a href="#contact" className="button teal">Book a Table</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-container">
          <div className="about-content">
            <h2>About <span className="accent-purple">Hookha Island</span></h2>
            <p>
              Hookha Island was born from a passion for creating the perfect hookah experience. Our founders traveled the world, from the bustling cafes of Istanbul to the beachside lounges of Dubai, gathering inspiration and expertise.
            </p>
            <p>
              What sets us apart is our commitment to quality and atmosphere. We source the finest tobacco blends and create our own signature flavors that you won't find anywhere else. Our custom-designed hookahs ensure the perfect draw every time.
            </p>
            <p>
              Step into Hookha Island and you're transported to a tropical paradise where time slows down. The dim lighting, plush seating, and ambient music create the perfect escape from everyday life.
            </p>
          </div>
          <div className="about-image">
            <img src={PLACEHOLDER_IMAGES.about} alt="About Hookha Island" />
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="flavors">
        <div className="container">
          <div className="flavors-header">
            <h2>Our Exotic <span className="accent-teal">Flavors</span></h2>
            <p>Discover our premium hookah flavors, crafted to perfection for an unforgettable experience.</p>
          </div>

          <div className="flavor-categories">
            {flavorCategories.map(category => (
              <div 
                key={category}
                className={`flavor-category ${category === activeFlavorCategory ? 'active' : ''}`}
                onClick={() => setActiveFlavorCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>

          <div className="flavor-grid">
            {filteredFlavors.map(flavor => (
              <div key={flavor.id} className="flavor-card">
                <img src={flavor.image} alt={flavor.name} className="flavor-image" />
                <div className="flavor-details">
                  <h3 className="flavor-name">{flavor.name}</h3>
                  <p className="flavor-description">{flavor.description}</p>
                  <p className="flavor-price">{flavor.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lounge Section */}
      <section id="lounge" className="lounge">
        <div className="container lounge-container">
          <div className="lounge-content">
            <h2>Visit Our <span className="accent-gold">Lounge</span></h2>
            <p>
              Step into our island-inspired hookah lounge and leave the outside world behind. With plush seating, ambient lighting, and the finest hookah service, we've created the perfect escape.
            </p>
            <p>
              Our expert staff will guide you through our menu of premium flavors and ensure your hookah is perfectly packed for the ultimate experience.
            </p>

            <div className="lounge-details">
              <div className="lounge-detail">
                <span className="lounge-detail-icon">📍</span>
                <div>
                  <strong>Location:</strong><br />
                  123 Tropical Avenue, Miami, FL 33139
                </div>
              </div>

              <div className="lounge-detail">
                <span className="lounge-detail-icon">🕒</span>
                <div>
                  <strong>Hours:</strong><br />
                  Monday-Thursday: 4pm-1am<br />
                  Friday-Saturday: 4pm-3am<br />
                  Sunday: 2pm-12am
                </div>
              </div>

              <div className="lounge-detail">
                <span className="lounge-detail-icon">✨</span>
                <div>
                  <strong>Amenities:</strong><br />
                  VIP Booths, Full Bar, DJ Nights, Outdoor Patio
                </div>
              </div>
            </div>

            <a href="#contact" className="button">Book a Table</a>
          </div>

          <div className="lounge-image">
            <img src={PLACEHOLDER_IMAGES.lounge} alt="Hookha Island Lounge" />
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="shop">
        <div className="container">
          <div className="shop-header">
            <h2>Shop Premium <span className="accent-purple">Hookah Gear</span></h2>
            <p>Take the Hookha Island experience home with our premium hookahs, accessories, and exclusive flavors.</p>
          </div>

          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">{product.price}</p>
                  <button className="button teal">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <a href="#" className="button gold">View All Products</a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="gallery-header">
            <h2>Gallery & <span className="accent-teal">Vibes</span></h2>
            <p>Get a glimpse of the Hookha Island experience through our gallery.</p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={PLACEHOLDER_IMAGES.gallery1} alt="Hookha Island Vibes" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Lounge Atmosphere</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={PLACEHOLDER_IMAGES.gallery2} alt="Hookha Island Vibes" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Premium Hookah Setup</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={PLACEHOLDER_IMAGES.gallery3} alt="Hookha Island Vibes" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Weekend DJ Night</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={PLACEHOLDER_IMAGES.gallery4} alt="Hookha Island Vibes" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>VIP Experience</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={PLACEHOLDER_IMAGES.gallery5} alt="Hookha Island Vibes" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Signature Cocktails</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={PLACEHOLDER_IMAGES.gallery6} alt="Hookha Island Vibes" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Outdoor Patio</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events">
        <div className="container">
          <div className="events-header">
            <h2>Events & <span className="accent-gold">Promotions</span></h2>
            <p>Join us for special events, themed nights, and exclusive promotions.</p>
          </div>

          <div className="events-grid">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-details">
                  <p className="event-date">{event.date}</p>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <a href="#contact" className="button">RSVP Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Get in <span className="accent-purple">Touch</span></h2>
            <p>Have questions or want to make a reservation? Reach out to us!</p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon">📍</span>
                <div>
                  123 Tropical Avenue, Miami, FL 33139
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">📞</span>
                <div>
                  (305) 555-1234
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">✉️</span>
                <div>
                  info@hookhaisland.com
                </div>
              </div>
            </div>

            <h3>Follow Us</h3>
            <div className="contact-social">
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">TT</a>
              <a href="#" className="social-link">SC</a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-textarea"></textarea>
              </div>

              <button type="submit" className="button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-logo">
              Hookha Island
            </div>

            <div className="footer-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#flavors" className="nav-link">Flavors</a>
              <a href="#lounge" className="nav-link">Lounge</a>
              <a href="#shop" className="nav-link">Shop</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="#events" className="nav-link">Events</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Hookha Island. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
