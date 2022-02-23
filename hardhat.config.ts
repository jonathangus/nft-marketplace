import 'dotenv/config'
import 'hardhat-deploy'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import { task } from 'hardhat/config'
import { HardhatUserConfig } from 'hardhat/types'
import fs from 'fs'

const privateKey = fs.readFileSync('.secret').toString()

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.address)
  }
})

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
      saveDeployments: true,
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      saveDeployments: true,
    },
    mumbai: {
      url: process.env.MUMBAI_NETWORK,
      accounts: [privateKey],
    },
    mainnet: {
      url: process.env.POLYGON_NETWORK,
      accounts: [privateKey],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  solidity: '0.8.4',
  typechain: {
    outDir: 'src/contracts',
    target: 'ethers-v5',
    externalArtifacts: ['src/abi/*.json'],
    alwaysGenerateOverloads: true,
  },
}

export default config
