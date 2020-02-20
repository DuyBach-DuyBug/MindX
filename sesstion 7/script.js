let jsonAPI={}
let table = document.getElementById('info');
let data;
const getData = async () =>{
    let api = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    jsonAPI = await api.json()
}
const useData = async () =>{
    await getData();
    data = jsonAPI.data;
    let data_length = data.length;
    let i;
    for(i=0; i< data_length; i++){
        let {id, employee_name , employee_salary, employee_age, profile_image } = data[i]
        table.innerHTML += `
        <div class="row">
        <div>${id}</div>
        <div class="name">${employee_name}</div>
        <div>${employee_age}</div>
        <div>${profile_image}</div>
        <div class="salary">${employee_salary}</div>
        </div>`
    }
}
const showData = async () =>{
    await useData();
    let name = document.getElementsByClassName('name');
    let name_length = name.length;
    let salary = document.getElementsByClassName('salary');
    let salary_id = document.getElementById('employee_salary');
    let name_id = document.getElementById('employee_name');
    for(let i = 0; i < name_length; i++){
        name[i].addEventListener('mouseover', () => {
            salary[i].classList.add('show')
            name_id.innerHTML = data[i].employee_name
            salary_id.innerHTML = data[i].employee_salary
        })
        name[i].addEventListener('mouseout', () => {
            salary[i].classList.remove('show')
            name_id.innerHTML = ""
            salary_id.innerHTML = ""
        })
    }
}
showData();