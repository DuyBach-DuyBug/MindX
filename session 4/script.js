// 1
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};
// 1.1: x la property
// 1.2
for (let x in product) {
    console.log(x + ': '+ product[x]); 
}

// 2
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};
const {subject, dueDate, assignTo} = task;
 console.log(`${subject}, ${dueDate}, ${assignTo}`)   

//  3
console.log(jobSearch)
// 3.1 Data type layer ngoài cùng là object
// 3.2 hits là property của Array jobSearch
// 3.3
for(let y in jobSearch.hits){
    const { jobTitle, locationVIs, benefits, skills, jobRequirement} = jobSearch.hits[y]
    console.log(`${y}. ${jobTitle}`)
    console.log(locationVIs)
    console.log(benefits)
    console.log(skills)
    console.log(jobRequirement)
    console.log('')
}
// 4
alert('Hi there, this is dev dictionary');
let user_prompt = prompt('Enter a keyword');
switch (user_prompt) {
    case 'debug':
        alert('The process of figuring out why your program has a certain error and how to fix it');
        break;
    case 'done':
        alert('When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)');
        break;  
    case 'defect':
        alert('The formal word for ‘error’');
        break;
    case 'pm':
        alert('The short version of Project Manager, the person in charge of the final result of a project');
        break;  
    case 'ui/ux':
        alert('UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels');
        break;    
    default:
        alert('');
        break;
}