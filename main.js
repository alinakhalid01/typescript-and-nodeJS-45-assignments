"use strict";
// Q no.1
Object.defineProperty(exports, "__esModule", { value: true });
// import { log } from "console";
// Q no.2
// let message: string = `Hello Aleena, would you like to learn some python today?`;
// console.log(message);
// Q no.3
// let myName:string = `Aleena`;
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.charAt(0).toUpperCase()+myName.slice(1));
// Q no.4
// console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
// Q no.5
// let famous_person:string = `Albert Einstein`;
// let message:string = `“A person who never made a mistake never tried anything new.”`;
// console.log(`${famous_person} once said, ${message}`);
// Q no.6
// let stdName:string = `\n\tMuneeba\t\t`;
// console.log(stdName);
// console.log(stdName.trim());
// Q no.7 & 8
// console.log(2+6);
// console.log(12-4);
// console.log(2*4);
// console.log(24/3);
// Q no.9
// let favorie_number:number = 6;                              //Variable declaration and assignment
// console.log(`Your favorite number is: ${favorie_number}`);    //Printing some string concatenated with declared variable
// Q no.10
// (Commented question no.9)
// Q no.11
// let names: string[] = [`Areesha`, `Bushra`, `Tahira`, `Shereen`, `Isma`];
// names.forEach(printNames => {
//     console.log(printNames);
// }); 
// Q no.12
// names.forEach(printMsg => {
//     console.log(`Hello ${printMsg}, Good Evening!`);
// });
// Q no.13
// let transport: string[] = [`Rolls Royce`, `Audi`, `Bugatti`, `Lamborgini`, `Ferrari`];
// transport.forEach(printTransport => {
//     console.log(`I would like to own a ${printTransport}`);
// })
// Q no.14
// let guests: string[] = [`Mufti Akmal`, `Noman Ali Khan`, `Dr. Israr Ahmed`];
// guests.forEach(guestInvite => {
//     console.log(`Assalam-o-Alikum ${guestInvite}, I am inviting you to my home for dinner tonight.`);
// });
// Q no.15
// console.log(`\n${guests[2]} can't make it to dinner tonight\n`);
// guests[guests.indexOf(`Dr. Israr Ahmed`)] = `Motaz Azaiza`;
// guests.forEach(guestsUpdated => {
//     console.log(`Assalam-o-Alikum ${guestsUpdated}, I am inviting you to my home for dinner tonight.`);
// });
// Q no.16
// console.log(`\nDear guests, I found a bigger dinner table, therefore I am inviting more guests to dinner\n`);
// let addGuestinStart = guests.unshift(`Babar Azam`);
// let addGuestinMiddle = guests.splice(2,0,`Naseem Shah`);
// guests.forEach(guestsUpdated => {
//     console.log(`Assalam-o-Alikum ${guestsUpdated}, I am inviting you to my home for dinner tonight.`);
// });
// Q no.17
// console.log(`\nDear Guests, I can invite only two people for dinner tonight\n`);
// let removeG1 = guests.pop();
// console.log(`Dear ${removeG1}, I am sorry I can't invite you to dinner.`);
// let removeG2 = guests.pop();
// console.log(`Dear ${removeG2}, I am sorry I can't invite you to dinner.`);
// let removeG3 = guests.pop();
// console.log(`Dear ${removeG3}, I am sorry I can't invite you to dinner.\n`);
// guests.forEach(guestsUpdated => {
//     console.log(`Dear ${guestsUpdated}, you're still invited to my home for dinner tonight.`);
// });
// let invitedGuests:number = guests.length;
// guests.length=0;
// guests.forEach(guestsUpdated => {
//     console.log(guestsUpdated);
// });
// console.log(`\n`);
// Q no.18
// let places: string[] = [`Madina`, `Makkah`, `Dubai`, `New York`, `USA`];
// console.log(`Places I want to visit:`);
// console.log(places);
// console.log(`\nPlaces in alphabetical order:`);
// console.log(...places.sort());
// console.log(`\nPlaces in orignal order:`);
// console.log(places);
// console.log(`\nPlaces in decending order:`);
// console.log(places.reverse());
// console.log(`\nPlaces in orignal order:`);
// console.log(places);
// Q no.19
// console.log(`${invitedGuests} guests are invited for dinner tonight`);
// Q no.20
// let places:string[]=[`Karachi`,`California`,`Muscat`,`Islamabad`, `Arabic`, `Ormara Beach`, `Gawadar`, `Nathia Gali`];
// console.log(`\n\n\nI would like to visit these places:`,places);
// Q no.21
// let stdObj: {
//     stdName: string, 
//     gender: string, 
//     batch: number
// } = {
//     stdName: `Rabiya`,
//      gender:`female`,
//       batch: 9
//     }
// console.log(`\n\nStudent Name: ${stdObj.stdName}\nGender: ${stdObj.gender}\nBatch: ${stdObj.batch}`);
// Q no.22
let people = [`Areesha`, `Mirha`, `Komal`, `Lavizah`];
console.log(people[4]);
people[4] = `Aleena`;
console.log(people[4]);
// Q no.23
// let sea:string=`Red Sea`;
// console.log(`Is sea = Arabian Sea? I predict false`);
// console.log(sea==`Arabian Sea`);
// console.log(`Is sea = Red Sea? I predict true`);
// console.log(sea==`Red Sea`);
// let continent:string=`Antarctica`;
// console.log(`Is continent = Antarctica? I predict true`);
// console.log(continent==`Antarctica`);
// console.log(`Is continent = North America? I predict false`);
// console.log(continent==`North America`);
// let country:string=`Denmark`;
// console.log(`Is country = UAE? I predict false`);
// console.log(country==`UAE`);
// console.log(`Is country = Denmark? I predict true`);
// console.log(country==`Denmark`);
// let beach:string=`Ormara Beach`;
// console.log(`Is beach = Clifton Beach? I predict false`);
// console.log(beach==`Clifton Beach`);
// console.log(`Is beach = Ormara Beach? I predict true`);
// console.log(beach==`Ormara Beach`);
// let city:string=`Karachi`;
// console.log(`Is city = Karachi? I predict true`);
// console.log(city==`Karachi`);
// console.log(`Is city = Muscat? I predict false`);
// console.log(city==`Muscat`);
// Q no.24
// console.log(`Tests for equality and inequality with strings:`);
// console.log(`areeb` === `areeb`);
// console.log(`areeb` !== `areeb`);
// console.log(`Tests using the lower case function:`);
// console.log(`Areesha`.toLowerCase() === `Areesha`);
// console.log(`Areesha`.toLowerCase() === `areesha`);
// console.log("Numerical tests:");
// console.log(99 > 56);
// console.log(99 < 56);
// console.log(99 >= 56);
// console.log(99 <= 56);
// console.log(56 !== 56);
// console.log(56 == 56);
// console.log(`Tests using && and || operators:`);
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(`Is this item in this array?`);
// let cities: string[] = [`Toronto`, `Hong Kong`, `Jeddah`, `Muscat`, `Paris`];
// console.log(cities.includes(`Paris`));
// console.log(`Is this item not in this array?`);
// console.log(cities.includes(`Karachi`));
// Q no.25
// let alien_color = `green`;
// if (alien_color === `green`) {
//     console.log(`You have just earned 5 points!`);
// }
// alien_color = `red`;
// if (alien_color === `green`) {
//     // condition is false so there's no output
// }
// Q no.26
// let alien_color = `green`;
// if (alien_color === `green`) {
//     console.log(`You have just earned 5 points for shooting the alien!`);
// } else if (alien_color !== `green`) {
//     console.log(`You have just earned 10 points!`);
// }
// alien_color = `yellow`;
// if (alien_color === `green`) {
//     console.log(`You have just earned 5 points for shooting the alien!`);
// } else if (alien_color !== `green`) {
//     console.log(`You have just earned 10 points!`);
// }
// Q no.27
// let alien_color = `green`;
// if (alien_color === `green`) {
//     console.log(`You have just earned 5 points!`);
// } else if (alien_color === `yellow`) {
//     console.log(`You have just earned 10 points!`);
// } else if (alien_color === `red`) {
//     console.log(`You have just earned 15 points!`);
// }
// alien_color = `yellow`;
// if (alien_color === `green`) {
//     console.log(`You have just earned 5 points!`);
// } else if (alien_color === `yellow`) {
//     console.log(`You have just earned 10 points!`);
// } else if (alien_color === `red`) {
//     console.log(`You have just earned 15 points!`);
// }
// alien_color = `red`;
// if (alien_color === `green`) {
//     console.log(`You have just earned 5 points!`);
// } else if (alien_color === `yellow`) {
//     console.log(`You have just earned 10 points!`);
// } else if (alien_color === `red`) {
//     console.log(`You have just earned 15 points!`);
// }
// Q no.28
// let age = 25;
// if (age < 2) {
//     console.log(`The person is a baby.`);
// } else if (age >= 2 && age < 4) {
//     console.log(`The person is a toddler.`);
// } else if (age >= 4 && age < 13) {
//     console.log(`The person is a kid.`);
// } else if (age >= 13 && age < 20) {
//     console.log(`The person is a teenager.`);
// } else if (age >= 20 && age < 65) {
//     console.log(`The person is an adult.`);
// } else if (age < 65) {
//     console.log(`The person is an elder.`);
// }
// Q no.29
// let favoriteFruits: string[] = [`Dates`, `Oranges`, `Melons`, `Bananas`, `Pomegranates`];
// if (favoriteFruits.includes(`Dates`)) {
//     console.log(`You really like ${favoriteFruits[0]}!`);
// } 
// if (favoriteFruits.includes(`Oranges`)) {
//     console.log(`You really like ${favoriteFruits[1]}!`);
// } 
// if (favoriteFruits.includes(`Melons`)) {
//     console.log(`You really like ${favoriteFruits[2]}!`);
// } 
// if (favoriteFruits.includes(`Bananas`)) {
//     console.log(`You really like ${favoriteFruits[3]}!`);
// } 
// if (favoriteFruits.includes(`Pomegranates`)) {
//     console.log(`You really like ${favoriteFruits[4]}!`);
// }
// Q no. 30
// let usernames: string[] = [`admin`, `Aleena`, `Wardah`, `Khizra`, `Bushra`];
// usernames.forEach(greet => {
//     if (greet === `admin`) {
//         console.log(`Hello ${greet}, would you like see a status report?`);
//     } else {
//         console.log(`Hello ${greet}, thankyou for logging in again.`);
//     }
// });
// Q no.31
// usernames = [];
// if (usernames.length === 0) {
//     console.log(`\nWe need to find some users!`);
// }
// Q no.32
// let curent_users:string[]=[`Anum`,`Shaheen`,`Malaika`,`Yousra`,`Isma`];
// let new_users:string[]=[`Azwa`,`Isma`,`Areesha`,`Anum`];
// new_users.forEach(newUser => {
//     if(curent_users.some((oldUser)=>oldUser.toLowerCase()===newUser.toLowerCase())){
//         console.log(`Username is already taken. ${newUser} need to enter a new username.`);
//     }else{
//         console.log(`Username is available.`);
//     }
// });
// Q no.33
// let nums: number[] = [];
// for (let i = 1; i < 10; i++) {
//     nums.push(i);
// }
// for (let j = 0; j < 9; j++) {
//     if (nums[j] === 1) {
//         console.log(`${nums[j]}st`);
//     } else if (nums[j] === 2) {
//         console.log(`${nums[j]}nd`);
//     } else if (nums[j] === 3) {
//         console.log(`${nums[j]}rd`);
//     } else {
//         console.log(`${nums[j]}th`);
//     }
// }
// Q no.34
// let favorite_pizzas: string[] = [`Creamy Tikka Pizza`, `Malai Boti Pizza`, `Pepperoni Pizza`];
// favorite_pizzas.forEach(pizzas => {
//     console.log(`I like `.concat(pizzas, `.`));
// });
// console.log(`I really love Pizza!`);
// Q no.35
// let animals: string[] = [`Bunny`, `Kitten`, `Puppy`];
// animals.forEach(pets => {
//     console.log(`A ${pets} would make a great pet.`);
// });
// console.log(`Any of these would make a great pet!`);
// Q no. 36
// function make_shirt(size: string, message: string) {
//     console.log(`Making shirt of size ${size} with ${message} written on it.\n`);
// }
// make_shirt(`small`, `eat(), sleep(), code(), repeat()`);
// Q no. 37
// function make_shirts(size: string = `Large`, message: string = `I love TypeScript!`) {
//     console.log(`Making shirt of size ${size} with ${message} written on it.`);
// }
// make_shirts();
// make_shirts(`Medium`);
// make_shirts(`X-small`, `Developer loading....`);
// Q no. 38
// function describe_city(city: string, country: string = `Pakistan`) {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city(`Karachi`);
// describe_city(`Islamabad`);
// describe_city(`Muscat`, `Oman`);
// Q no. 39
// function city_country(city: string, country: string): string {
//     return city + `, ` + country;
// }
// console.log(city_country(`Medina`, `Saudi Arabia`));
// console.log(city_country(`Karachi`, `Pakistan`));
// console.log(city_country(`Istanbul`, `Turkey`));
// Q no.40
// function make_album(artist_name: string, album_title: string): { artist_namee: string, album_titlee: string } {
//     let music_album = {
//         artist_namee: artist_name,
//         album_titlee: album_title
//     }
//     return music_album;
// }
// let album1 = console.log(make_album(`Asim Azhar`, `Title1`));
// let album2 = console.log(make_album(`Abc`, `Def`));
// let album3 = console.log(make_album(`Xyz`, `Jkl`));
// Q no. 41
// let magicians: string[] = [`Hafsa`, `Romaisa`, `Moazzam`, `Zehra`];
// function show_magicians(magicians: string[]) {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// show_magicians(magicians);
// Q no. 42
// function make_great(magicians:string[]){
//     magicians.forEach(magician => {
//         console.log(magician+` the Great.`);
//     });
// }
// make_great(magicians);
// Q no.43
// let magicians: string[] = [`Julia`, `Erica`, `Harmon`, `Elsa`, `Alina`];
// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     magicians.forEach(magician => {
//         great_magicians.push(magician + ` the Great.`);
//     });
//     return great_magicians;
// }
// function show_magicians(magicians: string[]) {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// let copyMagicians: string[] = magicians.slice();
// let greatMagicians: string[] = make_great(copyMagicians);
// console.log(`All magicians:`);
// show_magicians(magicians);
// console.log(`\nGreat Magicians:`);
// show_magicians(greatMagicians);
// Q no.44
// function make_sandwich(...items:string[]){
//     console.log(`Making a sansdwhich which includes: `+items.join(`, `));
// }
// make_sandwich(`Multigrain bread`,`Chicken sausage`,`Lettuce`,`Dynamite sauce`);
// make_sandwich(`White bread`,`Chicken Fajita`,`Lettuce`,`Dynamite sauce`, `Tomatoes`, `Chilli garlic sauce`);
// make_sandwich(`White bread`,`Chicken tikka chunks`,`Iceberg`,`Dynamite sauce`,`Mayo garlic`);
// Q no.45
// interface CarDetails {
//     manufacturer: string;
//     model: string;
//     [key: string]: any; 
// }
// function carDetails(manufacturer: string, model: string, ...details: [string, any][]): CarDetails {
//     let car_info:CarDetails = { manufacturer: manufacturer, model: model };
//     details.forEach(([key, value]) => {
//         car_info[key] = value
//     });
//     return car_info;
// }
// console.log(carDetails("Suzuki", "Alto", ["color", "Navy Blue"], ["year", 2019]));
// console.log(carDetails("Honda", "Civic", ["color", "White"], ["automatic", true]));
