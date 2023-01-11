import Header from '../../homePage/Header';
import Artworks from '../../homePage/Artworks';
import Transactions from '../../homePage/Transactions';
import Footer from '../../homePage/Footer';
import '../../styles/index.css';

const Market = () => {

  return (
      <div className="min-h-screen">
        <div className="gradient-bg-hero">
          <Header />
        </div>
        <Artworks />
        <Transactions />
        <Footer />
      </div>
    )
  }

export  default Market; 
