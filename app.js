import readlineSync from 'readline-sync';
const BaseURL = ""




function manu()
{
    console.log(`_____________________________________________________________
                 1.GET/greet(Query params)
                 2.POST/math/average(JSON body)
                 3.PUT/shout/:word(Path param)
                 4.DELETE/secure/resource(Header)
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
            await POSTMathAverage(BaseURL);
            break;  
        case 3:
            await PUTshoutWord(BaseURL);
            break;
        case 4:
            await DELETEsecureResource(BaseURL);
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