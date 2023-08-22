/* Category.css */

.category-title {
  color: #007BFF;
  font-size: 28px;
  margin-bottom: 10px;
}

.category-description {
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
}

.category-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.category-item {
  width: 30%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f7f7f7;
  transition: transform 0.3s, box-shadow 0.3s;
}

.category-item:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.category-item img {
  max-width: 100%;
  height: auto;
}

.category-item h5 {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}
