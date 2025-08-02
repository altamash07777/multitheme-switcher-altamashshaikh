import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div className={`${styles.homeContainer} ${theme}`}>
      <aside className={styles.sidebar}>
        Sidebar: Sidebar with Dark Theme
      </aside>

      <div className={`${styles.pageContent} body-font`}>
        <h1>Welcome to Our Store</h1>
        <p>This app lets you explore themes and shop in style!</p>

        <button className="theme-button">Click Me</button>

        <div className={styles.productList}>
          {products.slice(0, 6).map((item) => (
            <div key={item.id} className={styles.productCard}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Rating:</strong> ⭐ {item.rating.rate} ({item.rating.count} reviews)</p>
              <p>{item.description.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
