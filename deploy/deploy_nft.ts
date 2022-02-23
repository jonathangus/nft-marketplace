import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import chalk from 'chalk'

const name = 'NFT'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  const nftMarket = await deployments.get('NFTMarket')
  const nft = await deploy(name, {
    from: deployer,
    args: [nftMarket.address],
  })

  deployments.log(
    `Contract ${chalk.blue(name)} deployed at ${chalk.green(nft.address)} `
  )
}
export default func

func.tags = [name]
func.dependencies = ['NFTMarket']
