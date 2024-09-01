function greet(name: string, times: number = 1): void{
    for(let i = 0; i < times; i++){
        console.log(`Hello, ${name}`)
    }
}

greet("Vika");

const greetUser = (name: string,) : string => `Hello, ${name}`
greetUser("Vika")