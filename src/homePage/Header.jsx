import mtLogo from '../assets/mtLogo.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'
import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <nav className="w-3/4 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <Link to='/'>
        <img 
          className="w-32 cursor-pointer"
          src={mtLogo}
          alt="MT's Logo" 
        />
      </Link>
      </div>
      <ul 
        className="md:flex-[0.7]
        text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        
        <li>
          <Link 
          to='/Guide' className="mx-4 cursor-pointer headerGlow"> Guide to NFT's
          </Link>
        </li>
        <li>
          <Link 
          to='/Market' className="mx-4 cursor-pointer headerGlow"> Market
          </Link>
        </li>
      
        <li>
      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer glow"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
           className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer glow"  
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
        </li>
      </ul>

    </nav>
  )
};

export default Header