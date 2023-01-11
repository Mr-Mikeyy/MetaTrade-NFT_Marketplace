import Alert from './Alert'
import Artworks from './Artworks'
import CreateNFT from './CreateNFT'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Loading from './Loading'
import ShowNFT from './ShowNFT'
import Transactions from './Transactions'
import UpdateNFT from './UpdateNFT'
import '../styles/index.css';

const Home = () => {
    return (
        <div className="min-h-screen">
          <div className="gradient-bg-hero">
            <Header />
            <Hero />
          </div>
          <Artworks />
          <Transactions />
          <CreateNFT />
          <ShowNFT />
          <UpdateNFT />
          <Footer />
          <Alert />
          <Loading />
        </div>
      )
    }

export default Home;