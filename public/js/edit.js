let params = new URLSearchParams(window.location.search)
let id = params.get("id")

const getUser = async (id) => {
    try {
        let res = await axios.get(`/users/${id}`)
        console.log(res);

        renderUser(res.data)
    } catch(error) {
        console.log(error);
    }
}

//Truy cap vao o input:
const nameEl = document.getElementById("name")
const emailEl = document.getElementById("email")
const phoneEl = document.getElementById("phone")
const birthdayEl = document.getElementById("birthday")

const renderUser = user => {
    nameEl.value = user.name
    emailEl.value = user.email
    phoneEl.value = user.phone
    birthdayEl.value = user.birthday
}

//Xu ly quay lai trang index

const btnBack = document.querySelector(".btn-back")
btnBack.addEventListener("click", function() {
    window.location.href = "/"
})

//Xu ly cap nhat thong tin user

const btnSave = document.getElementById("btn-save")
btnSave.addEventListener("click", async function() {
   try {
        //Tao object voi du lieu da cap nhat
        let userUpdate = {
            id: id,
            name: nameEl.value,
            phone: phoneEl.value,
            email: emailEl.value,
            birthday: birthdayEl.value
        }

        //Goi API de cap nhat:
        let res = await axios({
            method: "put",
            url: `/users/${id}`,
            data: userUpdate
        })

        if(res.data) {
            window.location.href = "/"
        }
    } catch(err) {
       console.log(err);
   }
})

getUser(id)