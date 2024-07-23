function register(){
    //alert("h")
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let pass=document.getElementById("pass").value

    let temp=null;
    temp=localStorage.getItem(email)

    if(temp==null){

        let data={
            name,
            pass 
        }

        let tempData=JSON.stringify(data);
        localStorage.setItem(email,tempData);
    }
    else{
        alert("this user is already registered")
    }
}

function login(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let pass=document.getElementById("pass").value

    let temp=null;
    temp=localStorage.getItem(email)

    if(temp==null){
        alert("user not found")
    }
    else{
        Data=JSON.parse(localStorage.getItem(email))
        if(pass==Data.pass){
            alert("successful login")
        }
        else{
            alert("incorrect password")
        }
    }
}

function forgotPass(){
    let email=document.getElementById("email").value

    let temp=null;
    temp=localStorage.getItem(email)

    if(temp==null){
        alert("user does not exist")
    }
    else{
        sessionStorage.setItem("email",email)
        window.location.href="forgetPass.html"
    }


}

function updatePass(){
   let newP=document.getElementById("newPass").value
   let newP2= document.getElementById("newPass2").value

   if(newP!=newP2){
    alert("please re-enter identical password")
   }
   else{
    let email=sessionStorage.getItem("email")
    let data=JSON.parse(sessionStorage.getItem(email))
    data.pass=newP
    localStorage.setItem(email,JSON.stringify(data))
   }
}


