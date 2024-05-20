let form = document.forms["car-log"];
form.addEventListener("submit", getValues);

function getValues(event) {
    event.preventDefault();

    let formdata = {
        "name" : this.name.value,
        "veh-type" : this["veh-type"].value,
        "make" : this.make.value,
        "model" : this.model.value,
        "registration" : this.registration.value,
        "condition" : this["condition"].value,
        "value" : parseInt(this.value.value),
    };

    let out = `
        <p>Nickname: <span>${formdata.name}</span></p>
        <p>Vehicle type: <span>${formdata['veh-type']}</span></p>
        <p>Make: <span>${formdata.make}</span></p>
        <p>Model: <span>${formdata.model}</span></p>
        <p>Registration: <span>${formdata.registration}</span></p>
        <p>Condition: <span>${formdata['condition']}</span></p>
        <p>Value: R<span>${formdata.value}</span></p>
    `;

    document.querySelector(".out").innerHTML = out;
}
