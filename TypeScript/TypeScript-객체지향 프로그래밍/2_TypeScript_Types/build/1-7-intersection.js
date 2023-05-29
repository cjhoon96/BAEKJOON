"use strict";
{
    function internWork(person) {
        console.log(person.name, person.empolyeeId, person.work());
    }
    internWork({
        name: 'ellie',
        score: 1,
        empolyeeId: 123,
        work: () => { },
    });
}
