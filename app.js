// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "Mr.Khalane",
//     () => {
//         console.log("Success: Your data was saved.");
//         savetoDb(
//             "HelloWorld",
//             () => {
//                 console.log("Success2: Your data2 was saved.");
//                 savetoDb(
//                     "HelloWorld2",
//                     () => {
//                         console.log("Success3: Your data3 was saved.");
//                     },
//                     ()=> {
//                         console.log("Failure3: weak connection,data3 not saved");
//                     }
//                 );
//             },
//             ()=> {
//                 console.log("Failure2: weak connection,data2 not saved");
//             }
//         );
//     },
//     ()=> {
//         console.log("Failure: weak connection,data not saved");
//     }
// );

// function savetoDb(data,success,failure){
//     return new Promise((success,failure) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             success("Success : Data was saved");
//         }else{
//             failure("Failure ; weak connection");
//         }
//     })
// }

// savetoDb("Mr.Khalane") // req = promise object
// .then(()=> {
//     console.log("Data1 saved");
//     return savetoDb("HelloWorld");
// })
// .then(() => {      
//       console.log("Data2 saved");
//       return savetoDb("Shubham")
// })
// .then(() => {      
//     console.log("Data3 saved");
// })
// .catch(() => { 
//     console.log("promise was rejected");
//     // console.log(request);
// });
// // savetoDb("Mr.Khalane");


async function greet() {
    throw "404 page not found";
    return "Hello !";
}

greet()
.than((result) => {
    console.log("Promise was resolved");
    console.log("Promise was: ",result);
})
.catch((err) => {
    console.log("Promise was rejected with err : ",err);
});

let demo = async () => {
    return 5;
};