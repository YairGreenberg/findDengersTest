// import { count, log } from "console";
// import { averg } from "../utils/serch.js";
import { avergeOfMassege,getThreeHighestAverageDanger} from "../utils/serch.js";
import fs from "fs/promises";
import readlineSync from "readline-sync";
import { BaseURL } from "../app.js";


export async function GETgreet(BaseURL) {  
  try {
    const response = await fetch(`${BaseURL}/people`);
    if (!response.ok) {
      throw new Error(`http: ${response.status}`);
    }
    const data = await response.text();
    await fs.writeFile("server/PEOPLE.json", data);

        console.log("seccssuflly");        
  } catch (error) {
    console.error(`error: ${error.message}`);
    
    return null;
  }
}

export async function GetCallRecords(BaseURL) {
  try {
    const response = await fetch(`${BaseURL}/transcriptions`);
    if (!response.ok) {
      throw new Error(`http: ${response.status}`);
    }
    const data = await response.text();

    await fs.writeFile("server/TRANSCRIPTIONS.json", data)
    
    console.log("seccssuflly");
  } catch (error) {
    console.error(`error: ${error.message}`);
    return null;
  }
}


export async function SearchPeoplebyName() {
  try {
    const data = await fs.readFile("server/PEOPLE.json", "utf-8");
    let list = JSON.parse(data);
    let name = readlineSync.question("please enter a name:\n");
    for (let object of list) {
      if (object.name === name) {
        console.log(object);
        return;
      }
  } 
  console.log("The person is not found");

}catch (error) {
    console.error(`error: ${error.message}`);

    return null;
  }
}
    

      


export async function SearchPeoplebyAge() {
  try{
    const data = await fs.readFile("server/PEOPLE.json", "utf-8");
    let list = JSON.parse(data);
    let age = readlineSync.questionInt("please enter a age:\n");
    for (let object of list) {
      if (object.age === age) {
        console.log(object);
        return;
      }
  }
  console.log("The person is not found");

}catch (error) {
    console.error(`error: ${error.message}`);
    return null;
  }
}



export async function FindDangerousPeople() {
  try{
    let list_danger = [];
    const data_trans = await fs.readFile("server/TRANSCRIPTIONS.json", "utf-8");
    let list_trans = JSON.parse(data_trans);
    for(let item of list_trans){
    let grid = 0

        let sentence = item.content.split(" ")
        
        for(let word of sentence){
            if(word.toLowerCase() === "death"|| word.toLowerCase() === "attack"||word.toLowerCase() === "bomb"||word.toLowerCase() === "knife" ){
                grid+=1
            }
        }
        let danger_person = list_danger.find((person) => person.age === item.age);
        if(danger_person){
            danger_person.danger.push(grid);
        } else{
            list_danger.push({
                age:item.age,
                danger:[grid]
            });
        }
    }  
    
    const average_danger = avergeOfMassege(list_danger);
    const three_highest_danger = getThreeHighestAverageDanger(average_danger);
    console.log("The three most dangerous people are:");
    console.log(three_highest_danger);

    const data_people = await fs.readFile("server/PEOPLE.json", "utf-8");
    let list_people = JSON.parse(data_people);
    let result_people_denders = [];
    for (let danger_person of three_highest_danger) {
        let person_info = list_people.find((person) => person.age === danger_person.age);
        if(person_info){
          result_people_denders.push({
            ...person_info,
            average_danger: danger_person.average_danger
        });
          continue;
        }
    }
    console.log(result_people_denders);
    await sendRequest(BaseURL,result_people_denders);


  } catch (error) {
    console.error(`error: ${error.message}`);
    return null;
  }
}

export async function sendRequest(BaseURL,reportData) {
  try {
    const jsonString = JSON.stringify(reportData);
    const encodedData = encodeURIComponent(jsonString);
    
    const response = await fetch(`${BaseURL}/report?data=${encodedData}`);
    
    if (!response.ok) {
      throw new Error(`http: ${response.status}`);
    }
    const result = await response.text();
    console.log("Report sent successfully:", result);
  } catch (error) {
    console.error(`error: ${error.message}`);
    return null;
  }
}































