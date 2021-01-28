# Novid - COVID Tracker - Client Site [![Netlify Status](https://api.netlify.com/api/v1/badges/aba0d602-5039-4b88-9225-e046e2829446/deploy-status)](https://app.netlify.com/sites/novid-client/deploys)

Live Site deployed on Netlify - [Live Site](https://novid-client.herokuapp.com/) 

| This product was developed by team: [EinarTho](https://github.com/EinarTho), [Tobbenda](https://github.com/tobbenda) and [me](https://github.com/Ryjekk). <br/>
| This project was made and deveoped as a final MVP product during two final weeks at Salt. 

![NovidApp](/NovidScreen.jpg)

## ABOUT NOVID
### 👉 Short description of app

This app would allowed companies to easier manage the risk of having a COVID-19 outbreak at their company. Our product would do this by having functionality to trace who has been in close contact, like also infroming people in group of risk.

### 👉 Why there is likely a demand for this kind of app

We have done research which suggests that the way this is done today is very primitive. At one company which we spoke to registering of close contact is done manually, in a way that is very coarse grained. At the company in question each person has to register each morning when they arrive, as well as where they are going to sit (using microsoft forms). If anyone on their floor gets corona everyone on that floor will be warned. Registering close contact in this way is problematic because it both catches too little and too much. It is also time consuming. In comparison our app would save time and it would be able to give more precise contact warnings. 

### 👉 Possible problems
+ The Norwegian government tried to release an app like this. It failed miserably, why do you think you will succeed? 
+ Nobody wants to register the rooms they have been in a day 

## TECH STACK
+ React JS 17.0.x [w. Hooks]
+ React-calendar 3.2.x
+ React-modal 3.12.x
+ Qrcode.react 1.0.x
+ React-qr-reader 2.2.x

## FUTURE DEVELOPMENT
+ Migration to React Native 
+ Applying Extended functionality including Bluetooth
+ Applying Extended finctionality including Wi-fi tracking
+ Applying new more plesant UI
+ Code Restructurization

## FINAL PITCH PRESENTATION [👉 press image to play]
<a href="http://www.youtube.com/watch?feature=player_embedded&v=DK5A3TiPBjo
" target="_blank"><img src="/NovidThumb.png" 
alt="NOVID pitch demo" width="410" height="260" border="10" /></a>

## HOW TO RUN PROJECT LOCALY
To run localy - clone repository and than run: 
```
npm install
npm run start
```
NOTE:
Our application needs run sever to be able to lunch it in full potential. <br/>
Server Repository you can find here - [CovidTracker_Server](https://github.com/Ryjekk/CovidTracker_Server)
