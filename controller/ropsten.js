const cron = require('node-cron')
const Web3 = require('web3');
const url = 'https://ropsten.infura.io/v3/6bd8fee777ac4a1d88c86bd651a2a3fb'

module.exports = {
    transaction : async (req,res) => {
         const web3 = new Web3(url);
         cron.schedule('30,00 * * * *', async() => {
            console.log(
               `Attempting to make transaction from ${req.body.from} to ${req.body.to}`
            );
               const createTransaction = await web3.eth.accounts.signTransaction(
                  {
                     from: req.body.from,
                     to: req.body.to,
                     value: web3.utils.toWei(req.body.value, 'ether'),
                     gas: req.body.gas,
                  },
                  req.body.privkey
               )
               console.log('transaction created')
               
            // Deploy transaction
            try{
               const createReceipt = await web3.eth.sendSignedTransaction(
               createTransaction.rawTransaction
               );
               console.log(
               `Transaction successful with hash: ${createReceipt.transactionHash}`
               )
            }catch(err){
               console.log(err);
            }
         })
         res.status(200).json({message:`Transaction will be processed in every 30 min.`})
    },
    balance : async (req,res) => {
        const web3 = new Web3(url);
        const balance = web3.utils.fromWei(
           await web3.eth.getBalance(req.body.id),
           'ether'
        );
     
        console.log(`The balance of ${req.body.id} is: ${balance} ETH.`);
        res.status(200).json({balance : balance})
     }
}