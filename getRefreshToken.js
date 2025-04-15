const axios = require("axios");
const qs = require("qs");

const client_id = "d1a65c35501644418150bb56b0423a42";
const client_secret = "b55aedce746e42fbb9d65f549a9820cb";
const code = "AQBfhdl9YCxZT4N3sto8Pj2EPauRzd1zabJdNbJgY2yTTHuprt-dDPmrgYEAHQ9rA9XKjD_j-WqhNZVO9bEZGzgQ7-7RBVrnP2Qxzy2xOh6Apf57PGFDlhmbR2V6qhkv06nPZh5sZzedoXxSDCbsvxJ7gA-sH5Gpy9mf_ehHqlQlAkioZSLeDi0G9gkYs-3-rRQeTgsF8_Ur";
const redirect_uri = "https://www.spotify.com/";

const data = qs.stringify({
  grant_type: "authorization_code",
  code,
  redirect_uri,
  client_id,
  client_secret,
});

axios
  .post("https://accounts.spotify.com/api/token", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  .then((res) => {
    console.log("✅ Refresh Token:");
    console.log(res.data.refresh_token);
  })
  .catch((err) => {
    console.error("❌ Erro:", err.response.data);
  });
