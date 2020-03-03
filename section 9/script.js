// counter
const counter = () => {
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
const timer = () => {
    var myVar;

    document.getElementById('start-time').addEventListener("click", () => {
        let timer_in = document.getElementById('time-in').value;
        let time_countdown = document.getElementById("time-countdown");
        myVar = setInterval(function () {
            if (timer_in <= 0) {
                clearInterval(myVar);
            }
            time_countdown.innerHTML = timer_in;
            timer_in -= 1;
        }, 1000);
    })

    document.getElementById('stop-time').addEventListener("click", () => {
        clearInterval(myVar);
    })
}
timer();
// Random quote
const random_quote = () => {
    let data_json = {};
    const let_data = async () => {
        data_json = await (await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')).json();
    }
    const use_data = async () => {
        await let_data();
        let random_number = Math.floor(Math.random() * data_json.length);
        document.getElementById('quoteText').innerHTML = data_json[random_number].quoteText;
        document.getElementById('quoteAuthor').innerHTML = data_json[random_number].quoteAuthor;
        document.getElementById('reload-random').addEventListener("click", () => {
            random_number = Math.floor(Math.random() * data_json.length);
            document.getElementById('quoteText').innerHTML = data_json[random_number].quoteText;
            document.getElementById('quoteAuthor').innerHTML = data_json[random_number].quoteAuthor;
        })
    }
    use_data()
}
random_quote();
// timesheet
const timesheet = () => {
    // data
    let timeSheetData = [
        {
            "Project": "Learn front-end",
            "Task": "Learn HTML",
            "Time_Spent": 6
        },
        {
            "Project": "Learn front-end",
            "Task": "Learn CSS",
            "Time_Spent": 8
        },
        {
            "Project": "Learn front-end",
            "Task": "Learn JS Variables and Data Types",
            "Time_Spent": 6
        },
        {
            "Project": "Learn front-end",
            "Task": "Learn git basics",
            "Time_Spent": 2
        }
    ]
    // end data
    let show_table = document.getElementById('table')
    let array_length = timeSheetData.length
    for (let i = 0; i < array_length; i++) {
        show_table.innerHTML += `<tr>
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
    add.addEventListener("click", () => {
        name_project = document.getElementById('in-project').value;
        name_task = document.getElementById('in-task').value;
        name_timeSpent = Number(document.getElementById('in-time-spent').value);

        if (name_project && name_task && name_timeSpent) {
            let new_object = { "Project": name_project, "Task": name_task, "Time_Spent": name_timeSpent }
            new_ob_ar = timeSheetData.push(new_object)
            show_table.innerHTML += `<tr>
            <td class="id">${timeSheetData[new_ob_ar - 1].Project}</td>
            <td class="email">${timeSheetData[new_ob_ar - 1].Task}</td>
            <td>${timeSheetData[new_ob_ar - 1].Time_Spent}</td>
            <td><button id="remove-${new_ob_ar - 1}" data-index="remove-${new_ob_ar - 1}">X</button><button id="update-${new_ob_ar - 1}" data-index="update-${new_ob_ar - 1}">U</button></td>
            </tr>`
        }
        array_length = new_ob_ar
        remove_btn();
    })
    // clear button 
    clear.addEventListener("click", () => {
        document.getElementById('in-project').value = null
        document.getElementById('in-task').value = null
        document.getElementById('in-time-spent').value = null
    })
    // remove button
    function remove_btn() {
        for (let i = 0; i < array_length; i++) {
            let remove = document.getElementById('remove-' + i);
            remove.addEventListener("click", () => {
                debugger
                delete timeSheetData[i]
                console.dir(timeSheetData)
            })
        }
    }
    remove_btn();
    console.dir(timeSheetData)
}
timesheet();
// Freaking math
const Freaking_math = () => {
    // show score
    const start_point = () => {
        document.getElementById('check-score').addEventListener('click', () => {
            if (document.getElementById('check-score').checked == true) {
                document.getElementById('point-math').style.display = 'block';
            } else {
                document.getElementById('point-math').style.display = 'none';
            }
        })
    }
    start_point();

    // show timer
    const start_timer = () => {
        document.getElementById('check-timer').addEventListener('click', () => {
            let myVar;
            if (document.getElementById('check-timer').checked == true) {
                document.getElementById('time-math').style.display = 'block';
                myVar = setInterval(function () {
                    if (3 <= 0) {
                        clearInterval(myVar);
                        point = 0;
                    }
                }, 1000);
            } else {
                document.getElementById('time-math').style.display = 'none';
                clearInterval(myVar);
            }
        })
    }
    start_timer();

    let point = 0;
    let answer, random_a, random_b, random_z, random_y, result, random_wrong;
    let ops = ['+', '-'];
    let random_boolean = ['true', 'false'];
    let wrong = [-1, -2, 1, 2];
    function random_math() {
        random_a = Math.floor(Math.random() * 9) + 1;
        random_b = Math.floor(Math.random() * 9) + 1;
        random_z = ops[Math.floor(Math.random() * ops.length)]
        random_y = random_boolean[Math.floor(Math.random() * random_boolean.length)];
        if (random_z == '+') {
            result = random_a + random_b;
        } else {
            result = random_a - random_b;
        }
        random_wrong = wrong[Math.floor(Math.random() * wrong.length)];

        if (random_y == 'true') {
            answer = random_a + ' ' + random_z + ' ' + random_b + ' = ' + result;
        } else {
            answer = random_a + ' ' + random_z + ' ' + random_b + ' = ' + (result + random_wrong);
        }
    }
    random_math();
    let audio_true = document.getElementById('audio-true');
    let audio_false = document.getElementById('audio-false');

    document.getElementById('true-math').addEventListener('click', () => {
        if (random_y == 'true') {
            point += 1;
            audio_true.play();
        } else {
            point = 0;
            audio_false.play();
        }
        random_math()
        document.getElementById('point-math').innerHTML = point;
        document.getElementById('question-math').innerHTML = answer;
    })

    document.getElementById('false-math').addEventListener('click', () => {
        if (random_y == 'false') {
            point += 1;
            audio_true.play();
        } else {
            point = 0;
            audio_false.play();
        }
        random_math()
        document.getElementById('point-math').innerHTML = point;
        document.getElementById('question-math').innerHTML = answer;
    })
    document.getElementById('question-math').innerHTML = answer;

}
Freaking_math();