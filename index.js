body {
  margin: 0.5;
  font-family: Sansita Swashed, cursive;
}

.navbar {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: white;
  text-align: center;
}

.navbar a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
}


.head {
  height: 100vh;
  background: url('assets/images/Rectangle 10.jpg') center/cover;
  display: flex;
  align-items: center;
  padding-left: 60px;
  color: white;
}

.products {
  text-align: center;
  padding: 50px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.card {
  background: url('assets/images/Rectangle 69.png') center/cover;
  width: 75px;
height: 75px;
border: 1px solid #F5F5F5
}

.card img {
  width: 75%;
}

.offer {
  background: url('assets/images/Rectangle 45.png') center/cover;
  text-align: center;
  padding: 60px;
}

.about {
  background: #222;
  color: white;
  text-align: center;
  padding: 60px;
}

.featured-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.gallery-grid {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 30px;
  display:flex;
}

.footer {
  background-image: url("assets/images/Rectangle 75.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  margin-left: 20px;
  text-align: center;
}
