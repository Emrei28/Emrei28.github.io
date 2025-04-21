let mail= document.getElementById('email')
let pass = document.getElementById('password')
let tekan= document.getElementById('login')

function login(){
   if(mail.value === 'mreihan28' && pass.value === '280401'){
    window.location.href='portofolio2.html'
   }else if(mail.value !== 'mreihan28'){
    alert('Username Salah')
   }else if(pass.value !== '280401'){
    alert('Password Salah')
   }
}

tekan.addEventListener('click', login)