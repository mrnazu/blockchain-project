const { compiledFile } = require('../compile');
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const userPassword = "securedPasswordHere";

let accounts;
let deployedContract;
beforeEach(async () => {
    accounts = web3.eth.getAccounts();
    deployedContract = await new web3.eth.Contract(compiledFile.abi).deploy({ data: compiledFile.evm.bytecode.object, argument: [userPassword] }).send({ from: accounts[0], gas: '2000' });
})

describe('Map', () => {
    it('deploy', () => {
        assert.ok(deployedContract.options.address);
        console.log(deployedContract.options.address);
    })
})