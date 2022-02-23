import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import chalk from 'chalk'

const name = 'NFTMarket'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  const nftMarket = await deploy(name, {
    from: deployer,
    args: [],
  })

  deployments.log(
    `Contract ${chalk.blue(name)} deployed at ${chalk.green(
      nftMarket.address
    )} `
  )
}
export default func

func.tags = [name]
