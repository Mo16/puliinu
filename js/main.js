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
  

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");

  
  }

  
// document.getElementById("btn-login").onclick = loginWalletconnect;