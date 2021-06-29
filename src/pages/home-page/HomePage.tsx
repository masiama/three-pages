import { Link } from 'react-router-dom';

import './HomePage.scss';

function HomePage() {
  return (
    <section className="home">
      <Link to="/data" className="home__link home__link--data">Data</Link>
      <Link to="/stats" className="home__link home__link--stats">Stats</Link>
    </section>
  );
}

export default HomePage;
