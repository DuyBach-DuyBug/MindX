const location_city = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
function renderLocation(doc){
    let li = document.createElement('li');
    let city = document.createElement('span');
    let des = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    city.textContent = doc.data().city;
    des.textContent = doc.data().description;
    li.appendChild(city)
    li.appendChild(des);
    location_city.appendChild(li)
}
// getting data
db.collection('location').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.id)
        console.log(doc.data())
        renderLocation(doc)
    });
})
// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('location').doc(form.city.value).set({
        city: form.city.value,
        description: form.description.value,
        "short-description": form.short_description.value
    });
    form.description.value = '';
    form.city.value = '';
    form.short_description.value = '';
});