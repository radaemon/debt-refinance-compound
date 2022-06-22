import {ethers} from "hardhat"
import { expect } from "chai"

describe('MyFlash', () => {
  it('It should set the constructor correctly', async () => {
    const MyFlash = await ethers.getContractFactory('MyFlash')
    const myFlash = await MyFlash.deploy(42069)
    await myFlash.deployed()


    expect(await myFlash.num()).to.equal(42069)
  })
})