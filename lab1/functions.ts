function greet(name: string, times: number = 1){
    for(let i = 0; i < times; i++){
        console.log(`Hello, ${name}`)
    }
}

greet("Vika");