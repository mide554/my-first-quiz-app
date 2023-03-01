const form = document.querySelector('.register')
// const signUp = document.querySelector('.signup')
// const register = document.querySelector('.register-container')
// const signIn = document.querySelector('.signin')
// const login = document.querySelector('.login-container')
// const hid = document.querySelector('.hid')
// const hide = document.querySelector('.hide')

// signUp.addEventListener('click', function(){
//     register.classList.toggle('hide')
    
// })


// signIn.addEventListener('click', function(){
//     login.classList.toggle('hid')
// })

form.addEventListener('submit',function(event){
    event.preventDefault()
    // console.log(event)
    const fullname =form.fullname.value
    const username =form.username.value
    const password =form.password.value

    if (!fullname || !username || !password){
        return alert('All fields required')


    }
    console.log(isUserExits())
    if(!isUserExits(username)){
        saveUsersToLocalStorage({fullname,username,password})
        alert(`welcome ${fullname}`)
        setTimeout(()=>{
            location.href = '../pages/login.html'
        },2000)

    }else{
        alert('username is in use')
    }
    
})

function isUserExits(username){
    const users = getUsersFromLocalStorage()
    // console.log(users);
    const user = users.find(user => {
        return user.username === username
    })
    return user? true: false
}


