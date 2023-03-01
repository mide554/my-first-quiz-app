const loginForm = document.querySelector('.Login-form')

console.log(loginForm)
loginForm.addEventListener('submit',(event) =>{
    event.preventDefault()
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (!username ||!password){
        return alert('enter all field');
    }
    loginUser(username, password)
})

console.log(loginForm)

function loginUser(username,password){
    const users = getUsersFromLocalStorage()

    const currentUser = users.find(user => {
        return user.username === username && user.password === password
        
    })

    if(currentUser === undefined){
        return alert('invalid username and password')
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    localStorage.setItem('token', currentUser.username)
    location.href = '../pages/choose.html'
}


