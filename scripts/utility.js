function getUsersFromLocalStorage(){
    const users = localStorage.getItem('users')
    // console.log(users);
    if (!users){
        return[]
    }
    return JSON.parse(users)
}

function saveUsersToLocalStorage(user){
    let users = getUsersFromLocalStorage()
    users = [...users, user]
    localStorage.setItem('users', JSON.stringify(users))
}

const logoutBtn = document.querySelector('.logout')

logoutBtn.addEventListener('click',()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('result')
    localStorage.removeItem('selectedQuestion')
    location.href = '../index.html'
})