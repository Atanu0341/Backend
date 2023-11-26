require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData={
    "login": "Atanu0341",
    "id": 100512046,
    "node_id": "U_kgDOBf2xLg",
    "avatar_url": "https://avatars.githubusercontent.com/u/100512046?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Atanu0341",
    "html_url": "https://github.com/Atanu0341",
    "followers_url": "https://api.github.com/users/Atanu0341/followers",
    "following_url": "https://api.github.com/users/Atanu0341/following{/other_user}",
    "gists_url": "https://api.github.com/users/Atanu0341/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Atanu0341/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Atanu0341/subscriptions",
    "organizations_url": "https://api.github.com/users/Atanu0341/orgs",
    "repos_url": "https://api.github.com/users/Atanu0341/repos",
    "events_url": "https://api.github.com/users/Atanu0341/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Atanu0341/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Atanu Majumder",
    "company": null,
    "blog": "https://atanu0341.github.io/Portfolio/",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "Hi, I’m @Atanu0341\r\n👀 I’m interested in WebDev and AI - ML ...\r\n🌱 I’m currently learning solidity...\r\n💞️ I’m looking to collaborate on android and web3 based",
    "twitter_username": null,
    "public_repos": 41,
    "public_gists": 0,
    "followers": 8,
    "following": 29,
    "created_at": "2022-02-27T09:17:10Z",
    "updated_at": "2023-11-13T13:17:59Z"
    }

    

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/github", (req, res) => {
    res.json(githubData);
  });

app.get("/twitter", (req, res) => {
  res.send("atanudotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send(
    `<h2><a href="https://www.youtube.com/channel/UCuovWMEUdHaeOGxi6v1fJhA" >Phantom</a></h2>`
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
