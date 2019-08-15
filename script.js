let randomDate = "02/23/1999";
let todayDate = "08/15/2019";

console.log(moment(randomDate).format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment(randomDate).format('dddd'));
console.log(moment(randomDate).format("MMM Do YY"));

console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment("20120620", "YYYYMMDD").fromNow()); 
console.log(moment().startOf('day').fromNow());        
console.log(moment().endOf('day').fromNow());       
console.log(moment().startOf('hour').fromNow());

function submit(event) {
    event.preventDefault()
    const newTrain = {
        name: document.getElementById("name").value,
        destination: document.getElementById("destination").value,
        time: document.getElementById("time").value,
        frequency: document.getElementById("frequency").value,
    }
    localforage.getItem("trains").then(function(trains) {
        console.log(trains)
        trains.push(newTrain)
        console.log(trains)
        document.getElementById("table").innerHTML = "";
        for(let i=0; i<trains.length; i++){
            const tr = document.createElement("tr");

            const tName = document.createElement("th")
            tName.textContent = trains[i].name;

            const tDestination = document.createElement("td")
            tDestination.textContent = trains[i].destination;

            const tFrequency = document.createElement("td")
            tFrequency.textContent = trains[i].frequency;

            const tNext = document.createElement("td")
            tNext.textContent = "10:30";

            const tAway = document.createElement("td")
            tAway.textContent = "8";
        
            tr.appendChild(tName);
            tr.appendChild(tDestination);
            tr.appendChild(tFrequency);
            tr.appendChild(tNext);
            tr.appendChild(tAway);
            document.getElementById("table").appendChild(tr);


        }
        localforage.setItem("trains", trains);
    })
}

document.getElementById("submit").addEventListener("click", submit);