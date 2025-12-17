// import { error } from "console";
import { serch } from "../utils/serch.js";
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

    fs.writeFile("./server/PEOPLE.json", json, (data, error) => {
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

export async function GetCallRecords(BaseURL) {
  try {
    const response = await fetch(`${BaseURL}/transcriptions`);
    if (!response.ok) {
      throw new Error(`http: ${response.status}`);
    }
    const data = await response.json();
    let json = JSON.stringify(data);

    fs.writeFile("./server/TRANSCRIPTIONS.json", json, (data, error) => {
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


export async function SearchPeoplebyName() {
    
  fs.readFile("./server/PEOPLE.json", "utf-8", (err, callback) => {
    if (err) {
      console.log(err);
    } else {
      let list = JSON.parse(callback);
      let name = readlineSync.question("please enter a name:\n");
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
  fs.readFile("./server/PEOPLE.json", "utf-8", (err, callback) => {
    if (err) {
      console.log(err);
    } else {
      let list = JSON.parse(callback);
      let age = readlineSync.question("please enter a age:\n");
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
    let list_trans = []
    let Dangerlevel = 0
    let list_msg =[]
    
  fs.readFile("TRANSCRIPTIONS.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }else{
        const listTrans = JSON.parse(data)
        console.log(listTrans); 
        for(let item of listTrans){
            let split = item.content.split(" ")
            for(let word of split){
                if(word.toLowerCase() === "death"|| word.toLowerCase() === "attack"||word.toLowerCase() === "bomb"||word.toLowerCase() === "knife" )
                    Dangerlevel+=1
            }
            list_msg.push(Dangerlevel)
            let agePremter = serch(item.age,Dangerlevel)
            list_trans.push(agePremter);   
                
        
    }
    

    }
 
  });
}

































