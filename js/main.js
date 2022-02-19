const serverUrl = "https://fl9d7cmpsi1i.usemoralis.com:2053/server"
const appId = '6M7hi9Wuf5DNGBjruaUMl1C80ES4EaZLbuNI8i5i'
Moralis.start({ serverUrl, appId });

Moralis.enableWeb3()
let user = Moralis.User.current();


async function loginWalletconnect() {
    let user = Moralis.User.current();
    if (!user) {

      user = await Moralis.authenticate({ provider: "walletconnect", chainId: 56 })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
          document.getElementById("contract").innerHTML = user.get("ethAddress")
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }


  async function login() {
    let user = Moralis.User.current();
    if (!user) {
        try {
            user = await Moralis.authenticate({ signingMessage: "Authenticate" })
            console.log(user)
            console.log(user.get('ethAddress'))
        } catch (error) {
            console.log(error)
        }
    }
}


async function mint() {
    let options = {
        contractAddress: '0x356d2E7a0d592bAd95E86d19479c37cfdBb68Ab9',
        functionName: "mint",
        abi: '{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"}',
        Params: {},
        msgValue: Moralis.Units.ETH(0.1)
    }
    await Moralis.executeFunction(options)

   }
  

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");

  
  }

  
// document.getElementById("btn-login").onclick = loginWalletconnect;