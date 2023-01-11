import React from 'react';
import Header from '../../homePage/Header';
import Footer from '../../homePage/Footer';
import GuideNFT1 from '../../assets/GuideNFT1.png';
import GuideNFT2 from '../../assets/GuideNFT2.gif';
import '../../styles/index.css';

const Guide = () => {
  return (
    <div className="guideBackground">
      <Header/> 
      <div className = "guideWidth">
        <div>
          <h1 className="guideHeader1" > Non-Fungible Tokens (NFTs) Explained </h1>
          <div className="guideBottomBorder"></div>
            <p className="guideP">
              NFT stands for a non-fungible token, which means it can neither be replaced nor interchanged because it has unique properties.
              These cryptographic assets are based on blockchain technology and they cannot be exchanged or traded equivalently like other cryptographic assets.
            </p> 
            <br></br>
            <div className="guideP"> 
              <span className="guideBottomBorderForText">
                Key Features include:
              </span>
              <br></br>
              <div className= "gridWithImageRight">
                <div>
                  <p> 
                    ➥ Digital Asset - NFT is a digital asset that represents Internet collectibles like art, music, and games with an authentic certificate created by blockchain technology that underlies Cryptocurrency.
                    <br></br> <br></br>
                    ➥ Unique - No two NFTs are the same — they're not interchangeable.The metadata of each NFT is an unalterable record that gives it the certificate of authenticity.
                    <br></br> <br></br> 
                    ➥ Exchangable - NFT's can be transferred, bought, and sold between individuals through Exchanges, platforms that facilitate the trade of assets ( Like MetaTrade! )
                    <br></br> <br></br> 
                    ➥ Scarce - NFTs can be scarce, and that's one reason driving their value. Though developers can generate as many assets as they like, it is equally within their power to limit the number of NFTs for scarcity.
                  </p>
                </div>
                <div>
                  <img src={GuideNFT1} className="imageStyle" />
                </div>
              </div>
            </div>
          </div>

        <div >
          <br></br>
          <h1 className="guideHeader1" >NFT Use Cases and Applications</h1>
          <div className="guideBottomBorder"></div>
            <div className="guideP"> 
              <span className="guideBottomBorderForText">
                Digital Content:
              </span>
              <br></br>
              <div className= "gridWithImageRight">
                <div>
                  <p> 
                  Content creators see their profits enhanced by NFTs, as they power a creator 
                  economy where creators have the ownership of their content over to the platforms they use to publicize it.
                  <br></br> <br></br>
                  </p>
              <span className="guideBottomBorderForText">
                Gaming:
              </span>
              <br></br>
              <br></br>
                  <p> 
                  NFTs have garnered considerable interest from game developers. NFTs can provide a lot of benefits to the players. 
                  Normally, in an online game, you can buy items for your character, but that's as far as it goes. With NFTs, you can recoup 
                  your money by selling the items once  <br></br> you're finished with them.
                  <br></br> <br></br>
                  </p>
              <span className="guideBottomBorderForText">
                Investment and Collaterals:
              </span>
              <br></br>
              <br></br>
                  <p> 
                  Both NFT and DeFi (Decentralized Finance) share the same infrastructure. DeFi applications let you borrow money by using collateral. <br></br> 
                  NFT and DeFi both work together to explore using NFTs as collateral instead.
                  <br></br> <br></br>
                  </p>
                </div>
                <div>
                  <img src={GuideNFT2} className="gifStyle" />
                </div>
              </div>
            </div>
          </div>

        <div>
        <h1 className="guideHeader1" >Create your own NFT's on MetaTrade!</h1>
        <div className="guideBottomBorder"></div>
        <br></br>
          <div className="stepsAlignment">
            <div className="service_box_item">
              <p className="service_box_item_step">
                <span>Step 1</span>
              </p>
              <h3 className="stepHeaderColor"><em>Connect Wallet</em></h3>
              <p>
                Connect with wallet to grow or sell your collection!
              </p>
            </div>
            <div className="service_box_item">
              <p className="service_box_item_step">
                <span>Step 2</span>
              </p>
              <h3 className="stepHeaderColor"><em>Filter & Discover</em></h3>
              <p>
                Choose an image to turn into an NFT. Browse the Market section for inspiration!
              </p>
            </div>
            <div className="service_box_item">
              <p className="service_box_item_step">
                <span>Step 3</span>
              </p>
              <h3 className="stepHeaderColor"><em>Mint</em></h3>
              <p>
                Click "Create NFT" to submit your chosen image alongside a title, specified sell price, and a description!
              </p>
            </div>
            <div className="service_box_item">
              <p className="service_box_item_step">
                <span>Step 4</span>
              </p>
              <h3 className="stepHeaderColor"><em>Start trading</em></h3>
              <p>
                Discover, buy NTFs, sell your NFTs and earn
                money!
              </p>
            </div>
          </div>
        </div>
        </div>
        <Footer />
    </div>
  );
}

export default Guide; 
