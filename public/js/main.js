const userEl = document.querySelector("tbody")

let users = [];
function getUsersAPI() {
    return axios.get("/users?_sort=id&_order=desc");
}

async function getUsers() {
    try {
        const res = await getUsersAPI();
        users = res.data

       render(users)
    } catch(err) {
        console.log(err);
    }
}

function render(arr) {
    userEl.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        userEl.innerHTML += `
            <tr>
                <td>${ele.name}</td>
                <td>${ele.birthday}</td>
                <td>${ele.email}</td>
                <td>${ele.phone}</td>
                <td>
                    <a href="/edit.html?id=1" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
                    |
                    <a class="text-danger"><i class="fa fa-trash-alt"></i> Xóa</a>
                </td>
            </tr>
        `
        
    }
}

getUsers()