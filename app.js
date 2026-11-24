"use strict"
/*
let firstName = "Jonas";
let email = "jonas@gmail.com"
let age = 45;
let interests = ["Fishing", "Drifting", "Cooking"];
const TAX_RATE = 1.21;
let dog = { //object 
    id: "1",
    "breed": "Koli",
    "name": "Bobikas"
}


console.log("Vardas:" + firstName)
console.log("Gmailas: " + email);
console.log("Amzius: " + age);
console.log("Pomegiu skaiciu:" + interests.length)
console.log("Hobei: ");


for (let i = 0; i < interests.length; i++)
    {
        console.log(interests[i])
    }
for (let interest of interests)
    {
        console.log(interest);
    }
for (let interest in interests)
    {
        console.log(interests[interest]);
    }

console.log("Suo: ");
for (let value in dog)
    {
        console.log(`Atributas: ${value}. Reiksme: ${dog[value]}`)
    }

console.log(`Vartotojas: ${firstName}. Amzius: ${age * 2}`)

let sum = 10;
function showSum(numberOne, numberTwo)
{
    sum = numberOne + numberTwo;
    console.log(sum)
}

showSum(13, 14)

let user = "online";

let age = 18;

let isOnline = user == "online"

console.log(`Ar vartotojas prisijunges? ${isOnline}`)

let hasAccess = (age >= 18) ? "Has access" : "No access"; //ternary operator

console.log(hasAccess)

let price = 12.56;
let firstName = "Andrius"
let items = ["Phone", "Tablet", "Phone"]

console.log(`Duomenu tipas: ${typeof(age)}`)
console.log(`Duomenu tipas: ${typeof(price)}`)
console.log(`Duomenu tipas: ${typeof(firstName)}`)
console.log(`Duomenu tipas: ${typeof(items)}`)

console.log(firstName.length)

let text = "123 puslapiai"; //String ParseInt numeta texta 
console.log(`Duomenu tipas: ${typeof(text)}`);
text = parseInt(text);
console.log(text)
console.log(`Duomenu tipas: ${typeof(text)}`);

let title = "Matrix";
let subtitle = "Best movie";

if(title)
    {
        console.log(title)
    }
else
    {
        console.log("Title is not set");
    }

if(subtitle)
    {
        console.log(subtitle);
    }
    else
        {
            console.log("subtitle not set")
        }

    
let item = "Tablet";
let price = 800.50;
let count = 5;

price *= 2;

console.log(price)


let firstNumber = "2";
let secondNumber = 2;

if(firstNumber === secondNumber)
    {
        console.log("sutampta")
    }
else
    {
        console.log("nesutampta")
    }



let students = ["Ieva", "Kristina", "Ana", "Gabija"];

for(let i = 0; i < students.length; i++)
    {
        if(students[i] == "Ana")
            {
                console.log(students[i]);
                break;
            }
            console.log(i);
    }

    */

// function SleepIn(weekday, vacation)
// {
//     if(!weekday || vacation)
//         {
//             return true;
//         }
// }

// console.log(SleepIn(false, false));
// console.log(SleepIn(true, false));
// console.log(SleepIn(false, true));



// setTimeout(function ()
// {
//     alert("reklama");
// }, 3000);

// const countAverage = (...grades) =>
//     {
//         //sudeti
//         let sum = 0

//         for(let i = 0; i < grades.length; i++)
//             {
//                 sum += grades[i]
//             }
//         //padalinti is pazymiu skaiciuas
//         return Math.round(sum / grades.length)
//     }

// console.log(countAverage(10,7,8,9,8,7))

// const findNumber = (target, ...number) =>
//     {
//         console.log(number)
//         for(let i = 0; i < number.length; ++i)
//             {
//                 if(target === number[i])
//                     {
//                         return number.indexOf(target);
//                         break;
//                     }
//                 else
//                     {
//                         return -1
//                     }
//             }
//     } 
//     console.log(findNumber(27, ))



// const countWordsStartingWtih = (letter, ...words) =>
//     {
//         let sum = 0
//         for(let i = 0; i < words.length; i++)
//             {
//                 console.log(words[i][0].toLowerCase())
//                 if(words[i][0].toLowerCase() === letter)
//                     {
//                         sum ++
//                         continue;
//                     }
                    
//                 }
//                 return sum
//     }
//     console.log(countWordsStartingWtih("j", "Java", "javascript", "Python", "JSON", "HTML"));
    

// const countEvenNumbers = (...numbers) =>
// {
//     let sum = 0
    
//     for(let i = 0; i < numbers.length; i++)
//         {
//             if(numbers[i] % 2 === 0)
//                 {
//                     sum ++
//                 }
//         }
//     return sum
// }

// console.log(countEvenNumbers(3, 8, 12, 5, 7, 20))

// const getRandom = (max) =>
//     {
//         return Math.floor(Math.random() * max)
//     }
// console.log(getRandom(100)) //Math 

// const getDate = () =>
//     {
//         const date = new Date();

//         const newDate = new Date(date).setFullYear(2027);
//         return new Date(newDate).getUTCFullYear() // grazinam date objekto date
//     }

// console.log(getDate())  

// const checkName = (name, names) =>
//     {
//         if(names.includes(name))
//             {
//                 return `Surasta: ${name}`;
//             }
//         else
//             {
//                 return "Not found"
//             }
//     }  

//     console.log(checkName("Justina", ["Rokas", "Martynas", "Matas", "Justina"]));


// const toArrConverter = (text) =>
//     {
//         return text.split(":");
//     }

// const toStringConverter = (array) =>
//     {
//         return array.join(",")
//     }

//     console.log(toArrConverter("Labas: rytas: suraitytas"))
//     console.log(toStringConverter(["Andrius", "Ieva"]))

// const countWordsContaining = (searchText, ...words) =>
//     {
//         let count = 0;

//         for(let i = 0; i < words.length; i++)
//             {
//                 if(words[i].toLowerCase().includes(searchText))
//                 {
//                     count ++
//                 }
//             }
//             return count
            
//     }

// console.log(countWordsContaining("script", "JavaScript", "Python", "Java", "TypeScript"));


// // const findImageFiles = (...fileNames) =>
// //     {
// //         for(let i = 0; i < fileNames.length; i++)
// //             {
// //                 if(fileNames[i].endsWith(".png") || fileNames[i].endsWith(".jpg"))
// //                 {
// //                     return fileNames
// //                 }
// //             }
// //     }

// //     console.log(findImageFiles(["logo.PNG", "notes.txt", "photo.jpg", "image.svg"]))


// const findEmailsFromDomain = (domain, ...emails) =>
//     {
//         for(let i = 0; i < emails.length; i++)
//             {
//                 if(emails[i])
//             }
//     }

// const arr = ["Rokas", "Pokas"]


// arr.pop()




// const items = ["API", "SQL", "HTML", "CSS", "Git", "Node"];
// const buildQueue = (items, limit) =>{
//     const naujas = []
//     for (let i = 0; i < items.length; i++) {
//     if(items.length % 2 == 0){
//         naujas.push(items[i])
//         if(naujas.length > limit){
//             naujas.shift();
//         }
//     }
//     else{
//         naujas.unshift(items[i])
//     }
//     if(naujas.length > limit){
//         naujas.pop(items[i])
//     }
// }
// return naujas
// }
// console.log(buildQueue(items, 4));
 


// console.log(buildQuque(items, 5))


// const tasks = ["Paruošti duomenis", "Sukurti API"];

// const commands = [
//   { action: "urgent", value: "Sutaisyti prisijungimą" },
//   { action: "finish" },
//   { action: "add", value: "Parašyti dokumentaciją" },
//   { action: "cancelLast" }
// ];

// console.log(commands.length)

// const processTasks = (tasks, commands, limit) =>
//     {
//         let done = []
//         let cancelled = []
//         for(let i = 0; i < commands.length; i++)
//             {
//                 if(commands.action === "add")
//                     {
//                         tasks.push(commands.value)
//                     }
//                 if(commands.action === "finish")
//                     {
//                         tasks.shift(commands.action)
//                     }
//                 if(commands.action === "urgent")
//                     {
//                         tasks.unshift(commands.value)
//                     }
//                 if(commands.action === "cancelLast")
//                     {
//                         tasks.pop()
//                     }

//                 if(tasks.length > limit)
//                     {
//                         cancelled.push(tasks.shift)
//                     }
                    
//             }
//             return {tasks, 
//             console.log(commands)
            

//     }

    // console.log(processTasks(tasks, commands, 3));

// const tasks = ["Paruošti duomenis", "Sukurti API"];

// const commands = [
//   { action: "urgent", value: "Sutaisyti prisijungimą" },
//   { action: "finish" },
//   { action: "add", value: "Parašyti dokumentaciją" },
//   { action: "cancelLast" }
// ];


// function processTasks(tasks, commands, limit) {
//     let done = [];
//     let cancelled = [];
 
//     for (let command of commands) {
//         if (command.action === "add") {
//             tasks.push(command.value);
//         }
 
//         if (command.action === "urgent") {
//             tasks.unshift(command.value);
//         }
 
//         if (tasks.length > limit) {
//             cancelled.push(tasks.shift());
//         }
 
//         if (command.action === "finish") {
//             if (tasks.length > 0) {
//                 done.push(tasks.shift());
//             }
//         }
 
//         if (command.action === "cancelLast") {
//             if (tasks.length > 0) {
//                 cancelled.push(tasks.pop());
//             }
//         }
//     }
 
//     return {
//         remaining: tasks,
//         completed: done,
//         cancelled: cancelled
//     };
// }

// console.log(processTasks(tasks, commands, 3))

// const incidents = [
//   { id: 10, message: "API neatsako" },
//   { id: 11, message: "Duomenų bazė lėta" }
// ];

// const events = [
//   { type: "urgent", incident: { id: 12, message: "Prisijungimas neveikia" } },
//   { type: "new", incident: { id: 13, message: "Eilė auga" } },
//   { type: "resolve" },
//   { type: "discardNewest" },
//   { type: "new", incident: { id: 10, message: "Pakartotinis įvykis" } }
// ];


// function processEvents(incidents, events, limit) {
//     let active = [...incidents];
//     let resolved = [];
//     let discarded = [];
 
//     for (let i = 0; i < events.length; i++) {
//         let event = events[i];
 
//         if (event.type == "new") {
//             active.push(event.incident);
//         }
 
//         if (event.type == "urgent") {
//             active.unshift(event.incident);
//         }
 
//         if (event.type == "resolve") {
//             if (active.length > 0) {
//                 resolved.push(active.shift());
//             }
//         }
 
//         if (event.type == "discardNewest") {
//             if (active.length > 0) {
//                 discarded.push(active.pop());
//             }
//         }
 
//         if (active.length > limit) {
//             discarded.push(active.shift());
//         }
//     }

//     return {active, resolved, discarded };
// }
//     const result = processEvents(incidents, events, 3);

//     console.log("Aktyvūs:", result.active);
//     console.log("Išspręsti:", result.resolved);
//     console.log("Atmesti:", result.discarded);


// const knygos = ["Dykumos planeta", "Paskutinis traukinys", "Žvaigždžių kelias", "Tylus miestas"];
// const puslapiai = [320, 180, 450, 240];
 
// const rezultatas = knygos.map((knyga, puslapis) => {
//     return knyga + " - " + puslapiai[puslapis] + " psl.";
// });
// const atrinktos = rezultatas.filter((b, i) => puslapiai[i] > 250);
 
// console.log(atrinktos);
 

// const studentai = ["Austėja", "Matas", "Ieva", "Lukas", "Greta"];
// const ivertinimai = [8, 4, 10, 5, 3];

// const students = studentai.map((studentas, i) =>
//     {
//         return studentas + " - " + ivertinimai[i]
//     });


// const grades = students.filter((b, i) => ivertinimai[i] > 5);

// console.log(grades)

// const studentai = ["Austėja", "Matas", "Ieva", "Lukas", "Greta"];
// const programavimas = [9, 6, 10, 7, 8];
// const matematika = [8, 7, 9, 6, 9];
// const angluKalba = [10, 5, 9, 8, 7];


// const students = studentai.map((studentas, i) => {
//     const vidurkis = ((programavimas[i] + matematika[i] + angluKalba[i]) / 3).toFixed(1);
//     return { vardas: studentas, vidurkis: Number(vidurkis) };
// });
// const geriausiRezultatai = students.filter((studentas) => studentas.vidurkis >= 9);

// const rezultatas = geriausiRezultatai.map((studentas) => `${studentas.vardas} - ${studentas.vidurkis.toFixed(1)}`);

// console.log(rezultatas);


// const pavadinimai = [
//   "Kopa",
//   "1984-ieji",
//   "Hobitas",
//   "Švarus kodas",
//   "Sapiens",
//   "Mažasis princas",
//   "Farenheito 451"
// ];

// const zanrai = [
//   "mokslinė fantastika",
//   "distopija",
//   "fantastika",
//   "programavimas",
//   "istorija",
//   "fantastika",
//   "distopija"
// ];

// const puslapiai = [412, 328, 310, 464, 498, 96, 249];
// const yraBibliotekoje = [true, false, true, true, true, true, true];

// const op = pavadinimai.map((pavadinimas, i) =>
//     {
//         return `${pavadinimas}, ${zanrai[i]}, ${puslapiai[i]}` 
//     });

// const ats = op.filter((knyga) =>
//     {
//         return knyga.yraBibliotekoje == true && knyga.puslapiai >= 250 && tinkamiZanrai.includes(knyga.zanras)
//     });

// const fullats = ats.map((knyga) => `${knyga.pavadinimas} – ${knyga.zanras}, ${knyga.puslapiai} psl.`);

// console.log(fullats)

const student = 
{
    id : 1,
    vardas : "Jonas",
    pavarde : "Jonaitis",
    email: "jonas@gmail.com",
    pomegiai: ["games", "fishing"]
}


for(let key in student)
    {
        if(key == "pomegiai")
            {
                console.log(`Pomegiai:`)
                for(let hobby of student[key])
                    {
                        console.log(`${hobby}`)
                    }
            }
        else
            {
                console.log(`${key}: ${student[key]}`)
            }
        console.log(`${key}, ${student[key]}`)
    }

const books = [
    {
        id:1,
        isbn: "IS-1234",
        title: "Matrix",
        pageCount: 236
    },
    {
        id:2,
        isbn: "IS-1235",
        title: "Apie-Kazka",
        pageCount: 110
    },
    {
        id:3,
        isbn: "IS-1236",
        title: "Programavimo pagrindai",
        pageCount: 500
    }

]

// console.log("Knygu sarasas: ")

// for(let book of books)
//     {
//         for(let key in book)
//             {
//                 console.log(`${key}: ${book[key]}`)
//             }
//         console.log("-------------")
//     }


const searchBook = (title, books) =>
    {
        for(let book of books)
            {
                if(book.title === title)
                    {
                        return title
                    }
                else
                    {
                        return `nerasta`
                    }
            }
    }

    console.log(searchBook("Matrix", books))
    

