// import { error } from "console";

import fs from "fs";
import readlineSync from "readline-sync";

export async function GETgreet(BaseURL) {
  try {
    const response = await fetch(`${BaseURL}/people`);
    if (!response.ok) {
      throw new Error(`http: ${response.status}`);
    }
    const data = await response.json();
    let json = JSON.stringify(data);

    fs.writeFile("PEOPLE.json", json, (data, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("seccssuflly");
      }
    });
  } catch (error) {
    console.error(`error: ${error.message}`);
    return null;
  }
}
await GETgreet("https://spiestestserver.onrender.com");

export async function GetCallRecords(BaseURL) {
  try {
    const response = await fetch(`${BaseURL}/transcriptions`);
    if (!response.ok) {
      throw new Error(`http: ${response.status}`);
    }
    const data = await response.json();
    let json = JSON.stringify(data);

    fs.writeFile("TRANSCRIPTIONS.json", json, (data, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("seccssuflly");
      }
    });
  } catch (error) {
    console.error(`error: ${error.message}`);
    return null;
  }
}

await GetCallRecords("https://spiestestserver.onrender.com");

export async function SearchPeoplebyName() {
  fs.readFile("PEOPLE.json", "utf-8", (err, callback) => {
    if (err) {
      console.log(err);
    } else {
      let list = JSON.parse(callback);
      let name = readlinkSync.question("please enter a name:\n");
      for (let object of list) {
        if (object.name === name) {
          console.log(object);
          return;
        }
      }
      console.log("The person is not found");
    }
  });
}

export async function SearchPeoplebyAge() {
  fs.readFile("PEOPLE.json", "utf-8", (err, callback) => {
    if (err) {
      console.log(err);
    } else {
      let list = JSON.parse(callback);
      let age = readlinkSync.question("please enter a age:\n");
      for (let object of list) {
        if (object.age === age) {
          console.log(object);
          return;
        }
      }
      console.log("The person is not found");
    }
  });
}

export async function FindDangerousPeople() {
  fs.readFile("TRANSCRIPTIONS.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }else{
        let listTrans = JSON.parse(data)
        console.log(listTrans); 
    }
    
    for( let object of listTrans){
        console.log(object);
        
    }

  });
}
await FindDangerousPeople()
// async function POSTMathAverage(BaseURL)
// {
//     try{
//         let numbersInput = readlineSync.question("Enter numbers separated by commas: ")
//         let numbers = numbersInput.split(',').map(Number)
//         const resource = await fetch(`${BaseURL}/math/average`,{
//             method: "POST",
//             headers:{
//             "Content-Type": "application/json"
//             },
//         body: JSON.stringify({"numbers": numbers})}
//         )
//         if(!resource){
//             throw new Error(`http: ${response.status}`)
//         }
//         const data = await resource.json()
//         if (data) {
//             console.log(data);

//         }
//     }catch(error){
//         console.error(error.message);
//         return null;
//     }

// }

// async function PUTshoutWord(BaseURL)
// {
//     try{
//         let word = readlineSync.question("Enter a word to shout: ")
//         const resource = await fetch(`${BaseURL}/shout/${word}`,{
//             method : "PUT",
//             headers:{
//             "Content-Type": "application/json"
//             }
//         })
//         if(!resource){
//             throw new Error(`http: ${response.status}`)
//         }
//         const data = await resource.json()
//         if(data){
//             console.log(data);

//         }
//     }catch(error){
//         console.error(error.message);
//         return null;
//     }
// }

// async function DELETEsecureResource(BaseURL)
// {
//     try{
//         let admin = readlineSync.question("Enter your role to access secure resource: ")
//         const resource = await fetch(`${BaseURL}/secure/resource`,{
//             method: "DELETE",
//             headers:{"x-role": admin}
//         })
//         if(!resource){
//             throw new Error(`http: ${response.status}`)
//         }
//         const data = await resource.json()
//         if(data){
//             console.log(data);

//         }
//     }catch(error){
//         console.error(error.message);
//         return null;
//     }
// }
