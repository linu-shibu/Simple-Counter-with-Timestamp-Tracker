
let count=0;
let prev="Previous Entries:\r\n"
let prevVal=[]

console.log(count);

countEl = document.getElementById("count")
prevEl = document.getElementById("prev-ent")

function increment()
{
    count=count+1;
    countEl.innerText=count;
}

function save()
{
    let time=new Date().toLocaleTimeString();
    console.log(time)
    prevVal=[...prevVal,{count, time}]
    console.log(prevVal)
    prev=prev+"Count: "+count+" - Time: "+time+"\r\n"
    prevEl.innerText=prev

    console.log(count);
}

function reset()
{
    count=0
    prev="Previous Entries:\r\n"
    countEl.innerText=count
    prevEl.innerText=prev
}