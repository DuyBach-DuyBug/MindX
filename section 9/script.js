// counter
const counter = () =>{
    let number = document.getElementById('number');
    let So;
    document.getElementById('minus').addEventListener('click', () => {
        So = Number(number.innerHTML)
        number.innerHTML = So - 1
    })
    document.getElementById('plus').addEventListener('click', () => {
        So = Number(number.innerHTML)
        number.innerHTML = So + 1
    })
}
counter();
// timer
const timer = () =>{
    var myVar;

    document.getElementById('start-time').addEventListener("click", () =>{
        let timer_in = document.getElementById('time-in').value;
        let time_countdown = document.getElementById("time-countdown");
        myVar = setInterval(function(){
            if(timer_in <= 0){
                clearInterval(myVar);
            }
            time_countdown.innerHTML = timer_in;
            timer_in -= 1;
        }, 1000);
    })

    document.getElementById('stop-time').addEventListener("click", () =>{
            clearInterval(myVar);
    })
}
timer();
// Random quote
const random_quote = () =>{
    let data_json = {};
    const let_data = async () =>{
        data_json = await (await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')).json();
    }
    const use_data = async () =>{
        await let_data();
        document.getElementById('reload-random').addEventListener("click", () =>{
            let random_number = Math.floor(Math.random() * data_json.length);
            document.getElementById('quoteText').innerHTML = data_json[random_number].quoteText;
            document.getElementById('quoteAuthor').innerHTML = data_json[random_number].quoteAuthor;
        })
    }
    use_data()
}
random_quote();
// timesheet
const timesheet = () =>{
    // data
    let timeSheetData = [
        {
            "Project":"Learn front-end",
            "Task":"Learn HTML",
            "Time_Spent":6
        },
        {
            "Project":"Learn front-end",
            "Task":"Learn CSS",
            "Time_Spent":8
        },
        {
            "Project":"Learn front-end",
            "Task":"Learn JS Variables and Data Types",
            "Time_Spent":6
        },
        {
            "Project":"Learn front-end",
            "Task":"Learn git basics",
            "Time_Spent":2
        }
    ]
    // end data
    let show_table = document.getElementById('table')
    let array_length = timeSheetData.length
    for(let i=0; i < array_length; i++){
        show_table.innerHTML +=`<tr>
        <td class="id">${timeSheetData[i].Project}</td>
        <td class="email">${timeSheetData[i].Task}</td>
        <td>${timeSheetData[i].Time_Spent}</td>
        <td><button id="remove-${i}" data-index="remove-${i}">X</button><button id="update-${i}" data-index="update-${i}">U</button></td>
        </tr>`
    }

    let add = document.getElementById('add');
    let clear = document.getElementById('clear');
    let update = document.getElementById('update');
    let name_project, name_task, name_timeSpent, new_ob_ar;
    // add button 
    add.addEventListener("click", () =>{
        name_project = document.getElementById('in-project').value;
        name_task = document.getElementById('in-task').value;
        name_timeSpent = Number(document.getElementById('in-time-spent').value);
        let new_object = {"Project":name_project,"Task":name_task,"Time_Spent":name_timeSpent}
        new_ob_ar = timeSheetData.push(new_object)
        show_table.innerHTML +=`<tr>
        <td class="id">${timeSheetData[new_ob_ar - 1].Project}</td>
        <td class="email">${timeSheetData[new_ob_ar - 1].Task}</td>
        <td>${timeSheetData[new_ob_ar - 1].Time_Spent}</td>
        <td><button id="remove-${new_ob_ar - 1}" data-index="remove-${new_ob_ar - 1}">X</button><button id="update-${new_ob_ar - 1}" data-index="update-${new_ob_ar - 1}">U</button></td>
        </tr>`
    })
    // clear button 
    clear.addEventListener("click", () =>{
        document.getElementById('in-project').value = null
        document.getElementById('in-task').value = null
        document.getElementById('in-time-spent').value = null
    })
    // remove button 
    debugger
    let remove = document.getElementById('remove-');
    for(let i=0; i < new_ob_ar; i++){
        remove[i].addEventListener("click", () =>{
            console.log(i)
        })
    }
    console.dir(timeSheetData)
}
timesheet();
// Freaking math
const 


