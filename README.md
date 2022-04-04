# Metamask-Auto-Transaction
Metamask transaction is done using Nodejs, Express.js and web3. Transaction through Ropsten network and BSC network. Automatic transaction in the interval of 30 min is implemented using node-cron package.

Body for api testing on postman :
Request-type : Get
Format : json

Transaction :
{
"from": user's metamask id,
"to": Another metamask id,
"value": amount,
"gas": gas amount,
"privkey": User's private key of metamask account
}
Balance Checking :
{
"id": user's metamask id
}
