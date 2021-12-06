'use strict'

const getOutput = document.querySelector("#getOutput");


document.querySelector("#deleteForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;

    const userId = form.userId.value;
   
   
    axios
        .delete(`https://reqres.in/api/users?page=2/${user.id}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.userId.focus();
            getUsers();
        })
        .catch(err => console.error(err));
});
        


document.querySelector("#userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("THIS:", this);

    const form = this;

    console.log("COLOUR: ", form.colour);

    const data = {
        userId: form.id.value,
        email: form.email.value,
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        avatar: form.avatar.value
    };

    console.log("DATA: ", data);

    axios
        .post("https://reqres.in/api/users?page=2", data)
        .then(res => {
            getUsers();
            form.reset(); // resets the form
            form.userId.focus(); // puts the cursor in the ID field
            console.log(res);
        })
        .catch(err => console.error(err));
});

axios
    .get("https://reqres.in/api/users?page=2")
    .then(response => {
        console.log(response);
        const users = response.data.data;

        for (let user of users) {
            const userContainer = document.createElement("div");
            const userCard= document.createElement("div");
            userCard.classList.add("card");
            
            const userBody= document.createElement("div");
            userBody.classList.add("card-body");
           
            const userId = document.createElement("h4");
            userId.classList.add("class-title");
            userId.innerText = `ID: ${user.id}`;
            userContainer.appendChild(userId);

            const email = document.createElement("p");
            userId.classList.add("class-text");
            email.innerText = `Email: ${user.email}`;
            userContainer.appendChild(email);

            const first_name = document.createElement("p");
            userId.classList.add("class-text");
            first_name.innerText = `First_Name: ${user.first_name}`;
            userContainer.appendChild(first_name);

            const last_name = document.createElement("p");
            userId.classList.add("class-text");
            last_name.innerText = `Last_Name: ${user.last_name}`;
            userContainer.appendChild(last_name);

            const avatar = document.createElement("p");
            userId.classList.add("class-text");
            avatar.innerText = `Avatar: ${user.avatar}`;
            userContainer.appendChild(avatar);

            userCard.appendChild(userBody);
            getOutput.appendChild(userContainer);

        }
    })
    .catch(err => console.log(err));

const renderUser = (user) => {
    const userColumn = document.createElement("div");
    userColumn.classList.add("col");

    const userCard = document.createElement("div");
    userCard.classList.add("card");
    userColumn.appendChild(userCard);

    const newUser = document.createElement("div");
    newUser.classList.add("card-body");
    
    const userName = document.createElement("h4");
    userName.innerText = `${first_name} ${last_name}`;
    userName.classList.add("card-title");
    newUser.appendChild(userName);

    const userEmail = document.createElement("h5");
    userEmail.innerText = user.email;
    userEmail.classList.add("card-title");
    newUser.appendChild(userEmail);

    const useravatar = document.createElement("h5");
    userAvatar.innerText = user.avatar;
    userAvatar.classList.add("card-title");
    newUser.appendChild(userAvatar);

    userCard.appendChild(newUser);
    userOutput.appendChild(userColumn);


    

}

