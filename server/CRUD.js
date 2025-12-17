

async function GETgreet(BaseURL)
{
    try
    {
        let name = readlineSync.question("Enter your name: ")
        let lang = readlineSync.question("Enter language (en | he | es): ")
        const response = await fetch(`${BaseURL}/greet?name=${name}&lang=${lang}`);
        
        if(!response.ok)
        {
            throw new Error(`http: ${response.status}`)
        }
        const data = await response.json();
        if(data){
            console.log(data);
            
            
        }
    }catch(error){
        console.error(`error: ${error.message}`);
        return null;
    }
}


async function POSTMathAverage(BaseURL)
{
    try{
        let numbersInput = readlineSync.question("Enter numbers separated by commas: ")
        let numbers = numbersInput.split(',').map(Number)
        const resource = await fetch(`${BaseURL}/math/average`,{
            method: "POST",
            headers:{
            "Content-Type": "application/json"
            },
        body: JSON.stringify({"numbers": numbers})}
        )
        if(!resource){
            throw new Error(`http: ${response.status}`)
        }
        const data = await resource.json()
        if (data) {
            console.log(data);
            
            
        }
    }catch(error){
        console.error(error.message);
        return null;
    }

    
}


async function PUTshoutWord(BaseURL)
{
    try{
        let word = readlineSync.question("Enter a word to shout: ")
        const resource = await fetch(`${BaseURL}/shout/${word}`,{
            method : "PUT",
            headers:{
            "Content-Type": "application/json"
            }
        })
        if(!resource){
            throw new Error(`http: ${response.status}`)
        }
        const data = await resource.json()
        if(data){
            console.log(data);
            
        }
    }catch(error){
        console.error(error.message);
        return null;
    }
}



async function DELETEsecureResource(BaseURL)
{
    try{
        let admin = readlineSync.question("Enter your role to access secure resource: ")
        const resource = await fetch(`${BaseURL}/secure/resource`,{
            method: "DELETE",
            headers:{"x-role": admin}
        })
        if(!resource){
            throw new Error(`http: ${response.status}`)
        }
        const data = await resource.json()
        if(data){
            console.log(data);
            
        }
    }catch(error){
        console.error(error.message);
        return null;
    }
}