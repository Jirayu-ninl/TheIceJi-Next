import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@openzeppelin/hardhat-upgrades'
import '@typechain/hardhat'
import { config } from 'dotenv'
import { readFileSync } from 'fs'
import 'hardhat-gas-reporter'
import { task } from 'hardhat/config'
import { NFTStorage, File } from 'nft.storage'
import { join } from 'path'
import 'solidity-coverage'

import ServerConfig from './server/config'

config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  // eslint-disable-next-line no-restricted-syntax
  for (const account of accounts) {
    console.log(account.address)
  }
})

// Mint a nft token
task('mint', 'Mint a NFT token')
  .addParam('contract', 'Contract address')
  .addParam('owner', 'Owner address')
  .addParam('file', 'FIle path')
  .addParam('name', 'File name')
  .addParam('description', 'File description')
  .setAction(async (taskArgs, hre) => {
    const { contract, owner, file, name, description } = taskArgs
    console.log(`Minting NFT token for contract ${contract}`)
    console.log(`Owner: ${owner}`)
    console.log(`File: ${file}`)
    console.log(`Name: ${name}`)
    console.log(`Description: ${description}`)
    const token = await hre.ethers.getContractAt('MyAwesomeLogo', contract)

    // upload file
    const apiKey = process.env.NFT_STORAGE_KEY || ''
    const client = new NFTStorage({ token: apiKey })
    const metadata = await client.store({
      name,
      description,
      image: new File([readFileSync(join(__dirname, file)).buffer], name, {
        type: 'image/png', // image/png
      }),
    })
    console.log('Uploaded file to nft storage', metadata)

    // mint a token
    const tx = await token.safeMint(owner, metadata.url)
    const { blockHash } = await tx.wait()
    console.log('Minted NFT', blockHash)
  })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default Index = {
  solidity: '0.8.4',
  paths: {
    artifacts: './src/artifacts',
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: [], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  networks: {
    hardhat: {
      chainId: 1337,
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    ropsten: {
      url: ServerConfig.ETHEREUM_ROPSTEN,
      accounts:
        ServerConfig.ADDRESS_PRIVATE_KEY !== undefined ? [ServerConfig.ADDRESS_PRIVATE_KEY] : [],
    },
    rinkeby: {
      url: ServerConfig.ETHEREUM_RINKEBY,
      accounts:
        ServerConfig.ADDRESS_PRIVATE_KEY !== undefined ? [ServerConfig.ADDRESS_PRIVATE_KEY] : [],
    },
    bscmainnet: {
      chainId: 56,
      url: ServerConfig.BINANCE_MAINNET,
      accounts:
        ServerConfig.ADDRESS_PRIVATE_KEY !== undefined ? [ServerConfig.ADDRESS_PRIVATE_KEY] : [],
    },
    matictestnet: {
      chainId: 80001,
      url: ServerConfig.POLYGON_MAINNET,
      accounts:
        ServerConfig.ADDRESS_PRIVATE_KEY !== undefined ? [ServerConfig.ADDRESS_PRIVATE_KEY] : [],
    },
    bsctestnet: {
      chainId: 97,
      url: ServerConfig.BINANCE_TESTNET,
      accounts:
        ServerConfig.ADDRESS_PRIVATE_KEY !== undefined ? [ServerConfig.ADDRESS_PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: ServerConfig.ETH_REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: ServerConfig.ETHERSCAN_API,
  },
}
