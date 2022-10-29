//* Literal Type

let zero:0 = 0  //* The type is exactly the number 0

// zero = 1

const giveAnswer = (answer: "yes"|"no"|"maybe") => {
    return `The answer is ${answer}`
}


giveAnswer('no')
// giveAnswer('I am not sure') //! Won't work

type Weekdays = 
'Monday'|
'Tuesday'|
'Wednesday'|
'Thursday'|
'Friday'|
'Saturday'|
'Sunday'

let today: Weekdays = 'Monday'
// today = 'weds' //! Won't work