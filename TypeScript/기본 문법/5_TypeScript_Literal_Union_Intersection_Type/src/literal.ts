const userName1 = "Bob";
let userName2 = "Tom";

type Job = "police" | "developer" | "teacher";

interface User {
    name: string;
    job: Job;
}

const user: User = {
    name: "Bob",
    job: "developer"
}




/////////////////
interface Car {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    // gift.start();
    // Car 타입인 start() 메서드를 보유하고 있지만
    // Mobile 타입인 경우 보유하고 있지 않다. 따라서
    if(gift.name === "car"){
        gift.start();
    } else {
        gift.call();
    }
}