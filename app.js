import readlineSync from 'readline-sync';
import { GETgreet,SearchPeoplebyName, GetCallRecords,SearchPeoplebyAge,FindDangerousPeople} from './server/CRUD.js';
export const BaseURL = "https://spiestestserver.onrender.com"




function manu()
{
    console.log(`_____________________________________________________________
                 1.Get People List
                 2.GetCallRecords
                 3.SearchPeoplebyName
                 4.SearchPeoplebyAge
                 5.FindDangerousPeople
                 0.Exit
                 _____________________________________________________________`);
    
}




async function main()
{

let bool = true
while(bool)
{
    manu()
    let choice = readlineSync.questionInt("Enter your choice: ")
    switch(choice)
    {
        case 1:
            await GETgreet(BaseURL);            
            break;  
        case 2:
            await GetCallRecords(BaseURL);
            break;  
        case 3:
            await SearchPeoplebyName();
            break;
        case 4:
            await SearchPeoplebyAge();
            break;
        case 5:
            await FindDangerousPeople();
            break;
      
        case 0:
            bool = false;
            console.log("Exiting...");
            break;

    }
}   
}

main();