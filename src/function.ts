type Combinable = number | string ;

// function add (n1: Combinable , n2: Combinable)
//  {
//      return n1 + n2 ; 
//  }


const person : {
    name: string;
    age: number;
    hobbies: string[];
    role : [number, string]
} = {
    name: 'Shikha',
    age: 30,
    hobbies: ['Playing', 'Reading'],
    role: [2, 'IT']
}

person.hobbies.push('Dancing');

for(const hobby of person.hobbies) {
        console.log(hobby);
}

person.role.push(1, 'Admin');

for (const role of person.role) {
    console.log(role);
}



// function add(n1: number | string , n2: number | string) {

//     if(typeof n1 === 'string' && typeof n2 === 'string')
//         return n1 + n2 ;
    
//     else if (typeof n1 === 'number' && typeof n2 === "number") {
//         return n1 + n2 ;
//     }
// }

    //const result = add(2, 6)

    //const result = add("Hello ","World")

    //console.log(result);

// function add (n1: string, n2: string) : string {

//     return n1 + n2 ;

// }

// const resultNum: number  = add(2,6);

// const resultStr: string = add('Hello ', 'World')

