import readlineSync from 'readline-sync';
import { GETgreet,SearchPeoplebyName, GetCallRecords,SearchPeoplebyAge} from './server/CRUD.js';
const BaseURL = "https://spiestestserver.onrender.com"




function manu()
{
    console.log(`_____________________________________________________________
                 1.Get People List
                 2.GetCallRecords
                 3.SearchPeoplebyName
                 4.SearchPeoplebyAge
                 5.Call each server endpoint one after the other (in sequence)
                 6.Call all server endpoints in parallel
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
            await SearchPeoplebyName(BaseURL);
            break;
        case 4:
            await SearchPeoplebyAge(BaseURL);
            break;
        case 5:
            await CallAllEndpointsSequentially(BaseURL);
            break;
        case 6:
            await CallAllEndpointsInParallel(BaseURL);
            break;
        case 0:
            bool = false;
            console.log("Exiting...");
            break;

    }
}   
}

main();