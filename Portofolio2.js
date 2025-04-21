function tampilkan(){
    let nama = document.querySelector('form div.mb-3 input').value
    let mail = document.getElementById('ini').value
    let pasan = document.getElementById('Pesan').value
    let url = "https://api.whatsapp.com/send?phone=6282170690733&text=Hallo%20Admin%0A%0ASaya%20*"+nama+"*%0AEmail%20*"+mail+"*%0A%0A*"+pasan+"*"

    if(nama == ""){
        alert("Nama tidak boleh kosong!")
    }else if(mail == ""){
        alert("Email tidak boleh kosong!")
    }else if(pasan == ""){
        alert("Pesan tidak boleh kosong!")
    }else{
        window.open(url);
    }
    
}
let takan = document.getElementById('tombol')
takan.addEventListener('click',tampilkan)

