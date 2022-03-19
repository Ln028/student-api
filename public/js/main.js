// const userEl = document.querySelector("tbody")

// let users = [];
// function getUsersAPI() {
//     return axios.get("/users?_sort=id&_order=desc");
// }

// async function getUsers() {
//     try {
//         const res = await getUsersAPI();
//         users = res.data

//        render(users)
//     } catch(err) {
//         console.log(err);
//     }
// }

// function render(arr) {
//     userEl.innerHTML = ""
//     for (let i = 0; i < arr.length; i++) {
//         const ele = arr[i];
//         userEl.innerHTML += `
//             <tr>
//                 <td>${ele.name}</td>
//                 <td>${ele.birthday}</td>
//                 <td>${ele.email}</td>
//                 <td>${ele.phone}</td>
//                 <td>
//                     <a href="/edit.html?id=1" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
//                     |
//                     <a class="text-danger"><i class="fa fa-trash-alt"></i> Xóa</a>
//                 </td>
//             </tr>
//         `
        
//     }
// }

// getUsers()


const getUsers = async () => {
    try {
        //GOi API lay data
        let res = await axios.get("/users?_sort=id&_order=desc")
        console.log(res.data);

        //Render giao dien:
        renderUser(res.data)

    } catch(err) {
        console.log(err);
    }
}

const tableContentEl = document.querySelector(".table-user tbody")
// console.log(tableContentEl);

//render danh sach user
const renderUser = arr => {
    tableContentEl.innerHTML = ""
    let html = ""
    for (let i = 0; i < arr.length; i++) {
        const u = arr[i];
        html += `
        <tr data-id="${u.id}">
            <td>${u.name}</td>
            <td>${u.birthday}</td>
            <td>${u.email}</td>
            <td>${u.phone}</td>
            <td>
                <a href="/edit.html?id=${u.id}" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
                |
                <a class="text-danger" onclick="deleteUser(${u.id})"><i class="fa fa-trash-alt"></i> Xóa</a>
            </td>
        </tr>
        `
    }

    tableContentEl.innerHTML = html
}

const deleteUser = async (id) => {
    try {
        isConfirm = confirm("Ban co muon xoa khong")
        if(isConfirm) {
            await axios.delete(`/users/${id}`)
            let tr = document.querySelector(`[data-id="${id}"]`)
            tr.parentElement.removeChild(tr)
            
        }
    } catch(err) {
        console.log(err);
    }
    
}


// const deleteUser = async (id, btn) => {
//     try {
//         isConfirm = confirm("Ban co muon xoa khong")
//         if(isConfirm) {
//             await axios.delete(`/users/${id}`)
//             let tr = btn.parentElement.parentElement
//             tr.parentElement.remoChild(tr)
//         }
//     } catch(err) {
//         console.log(err);
//     }
    
// }

getUsers()