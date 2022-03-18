const saveBtn = document.querySelector(".btn-success")
console.log(saveBtn);

const name = document.getElementById("name")
const birthday = document.getElementById("birthday")
const email = document.getElementById("email")
// email.type = "email"
const phone = document.getElementById("phone")
// phone.type = "tel"

console.log(name);


saveBtn.addEventListener("click", function() {
    
    if(name.value == "" || email.value == "" || phone.value == "") {
        alert("Thong tin khong duoc de trong")
    } else {
        if(email.type != "email" || phone.type != "tel") {
            console.log(email.type);
            alert("Sai dinh dang")
        } 
    }
    // createUser()
})

// function createId() {
//     return Math.floor(Math.random() * 100000);
// }

// function createUsersAPI() {
//     return axios.post("/users", {
//         id: createId(),
//       name: name.value,
//       email: email.value,
//       phone: phone.value,
//       birthday: birthday.value
//     })
// }

// async function createUser() {
//     try {
//         let res = await createUsersAPI()
//         users.push(res.data)
//         render()
//     } catch(err) {
//         console.log(err);
//     }
// }