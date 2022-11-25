![Node.js CI](https://github.com/slawoe/moodster/workflows/Node.js%20CI/badge.svg)

# ![Logo](./client/src/assets/images/moodster.svg) MOODSTER

**THIS IS A NON-COMMERCIAL-PROJECT AS FINAL THESIS FOR MY WEB DEVELOPER BOOTCAMP AT [neue fische](https://www.neuefische.de/)**

Moodster is an app for children who are in therapy. It offers the possibility to make diary entries, save medication and doctors, but also many useful links and contact points to get help.
In addition, the app has an analysis function of the last 14 entries.

In version 1.0 there is no encryption and decryption yet, but will be implemented with future versions.
Work in progress

Current version: 1.0 || 04.10.2020

## 🖱 Deployment

Update 11/25/2022: Thanks to Salesforce wanting to make money on Heroku even with private projects and therefore eliminating Free Dynos as of 11/28/2022, this app is **TEMPORARILY OFFLINE**.

See design and layout Infos below!

## 📲 Design and layout infos

The app is designed and laid out for smartphone screens, so adjust the settings in your view accordingly to iPhone 5 or 6/7/8.

## 🔧 Development

### Requirements

Node.js and npm

### 👨‍💻 Install all dependencies

`npm install`

Since there is a postinstall, the system automatically searches the client folder and installs the required dependencies there, too.

### 📜 .env

There is an included .env.example file.

Set up a mongoDB as your database with the following collections: diary, doctors, medics and users

### 💻 Run dev server with:

`npm run dev`
