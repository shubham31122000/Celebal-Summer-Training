var events=require('events');
var eventEmitter = new events.EventEmitter();

//create an event handler
// var nothing = function () {
//     console.log("I hear nothing");
// }

//Assign the event handler to an event
//eventEmitter.addListener("scream", myEventHandler);
eventEmitter.once("myEvent", () => {
    console.log("I hear once");
});

eventEmitter.once("myEvent", () => {
    console.log("I hear once");
});

//Fire the "scream" event
eventEmitter.emit("myEvent"); //any name to emit like event1, event2, etc
eventEmitter.emit("myEvent");
eventEmitter.emit("myEvent");
//eventEmitter.emit("scream"); 