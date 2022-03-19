

//Truy cap vao o input:
const nameEl = document.getElementById("name")
const emailEl = document.getElementById("email")
const phoneEl = document.getElementById("phone")
const birthdayEl = document.getElementById("birthday")


//Xu ly quay lai trang index

const btnBack = document.querySelector(".btn-back")
btnBack.addEventListener("click", function () {
    window.location.href = "/"
})

//Xu ly them user

const btnSave = document.getElementById("btn-save")

const emailErr = document.getElementById("email-error")
console.log(emailErr);
const phoneErr = document.getElementById("phone-error")

function validateEmail(emailEl) {
    let mailFomat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (emailEl.value.match(mailFomat))
}


function validatePhone(phoneEl) {
    var phoneNumb = /^\d{10}$/;
    return (phoneEl.value.match(phoneNumb))
}

btnSave.addEventListener("click", async function () {
    const isValidEmail = validateEmail(emailEl)
    const isValidPhone = validatePhone(phoneEl)

    try {
        if (nameEl.value == "" || emailEl.value == "" || phoneEl.value == "") {
            alert("Thong tin khong duoc de trong")
            return
        }
        emailErr.innerText = ""
        phoneErr.innerText = ""

        if (!isValidEmail) {
            emailErr.innerText = "Dinh dang email chua dung"
            emailErr.style.color = "red"
        }

        if (!isValidPhone) {
            phoneErr.innerText = "SDT phai co 10 chu so"
            phoneErr.style.color = "red"
        }

        if (!isValidEmail || !isValidPhone) {
            return
        }

        //Tao object voi du lieu da cap nhat
        
        let userNew = {
            name: nameEl.value,
            phone: phoneEl.value,
            email: emailEl.value,
            birthday: birthdayEl.value
        }

        //Goi API de cap nhat:
        let res = await axios({
            method: "post",
            url: `/users`,
            data: userNew
        })

        if (res.data) {
            window.location.href = "/"
        }

    } catch (err) {
        console.log(err);
    }
})