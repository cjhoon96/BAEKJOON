interface User2 {
    id: number;
    name: string;
    age?: number;
  }
  
  
  let admin1 : User2 = {
    id: 1, 
    name: "Bob",
  }
  
  let admin2 : Readonly<User2> = {
    id: 1, 
    name: "Bob",
  }
  
  admin1.id = 4
//   admin2.id = 4 // Error