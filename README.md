![Node.js CI](https://github.com/slawoe/moodster/workflows/Node.js%20CI/badge.svg)

# ![Logo](./client/src/assets/images/moodster.svg) MOODSTER

**THIS IS A NON-COMMERCIAL-PROJECT AS FINAL THESIS FOR MY WEB DEVELOPER BOOTCAMP AT NEUE FISCHE**

Moodster is an app for children who are in therapy. It offers the possibility to make diary entries, save medication and doctors, but also many useful links and contact points to get help.
In addition, the app has an analysis function of the last 14 entries.

In version 1.0 there is no encryption and decryption yet, but will be implemented with future versions.
Work in progress

Current version: 1.0
current version: 04.10.2020

## 🔧 Development

### Requirements

Nodejs and NPM

### 👨‍💻 Install all dependencies

`npm install`

Since there is a postinstall, the system automatically searches the client folder and installs the required dependencies there, too.

### 📜 .env

There is an included .env.example file.

Set up a mongoDB as your database with the following collections: diary, doctors, medics and users

### 💻 Run dev server with:

`npm run dev`
