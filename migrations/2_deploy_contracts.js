/* eslint-disable no-undef */
const MetaTrade = artifacts.require('MetaTrade')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(MetaTrade, 'MetaTrade NFTs', 'MET', 10, accounts[1])
}
