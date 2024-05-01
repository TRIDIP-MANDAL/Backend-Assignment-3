const EventEmitter=require('events')

const EventEmittingObj=new EventEmitter();
EventEmittingObj.on('ev1',(disp)=>{
    console.log(`The Value of disp is ${disp}`)
})

// function ToTrigEvent(){
//     EventEmittingObj.emit('ev1',"Displayed")
// }
module.exports={EventEmittingObj}