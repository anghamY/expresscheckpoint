const express = require("express");
const app = express ();
const port =4000;


const verifdate =(req,res,next) => {

 let day =[
     "lundi",
     "Mardi",
     "Mercredi",
     "Jeudi",
     "Vendredi",
     "Samedi",
     "Dimanche",
 ] ;

let hour = new Date ().getHours(); 

if (
    days[new Date().getDay()] !== "Samedi" &&
    days [ new Date ().getDay()] !== "Dimanche" && 

    hour >= 9 &&
    hour < 17 
)
{
    next ();

}
else {
    res.send ("arjaa ghodwa ") ;
}
};
app.use(verifdate);


app.use(express.static("Public"));


 app.listen(port, () => {
     console.log(`the server is running §{port} port`);
});



