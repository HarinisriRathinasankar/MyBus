
function ValidateRegForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    var pass1=document.getElementById("password").value;
    var pass2=document.getElementById("pass_conf").value;

    const me=/\d{10}/;
    const pe=/^[A-Za-z]\w{8,11}$/;

    mobile_check=me.test(mobile);
    if(mobile_check){
        pswd=pass1.match(pe);
        if(pswd){
            if(pass1==pass2){
                if(localStorage.length != 0){
                    
                var retrived=localStorage.getItem("users");
                var stored=JSON.parse(retrived);
                stored.push({Username:name,Email:email,Number:mobile,Password:pass1});
                localStorage.setItem("users",JSON.stringify(stored));
                return true;
                }
                else{
                localStorage.setItem("users",JSON.stringify({Username:name,Email:email,Number:mobile,Password:pass1}));
            }
            }
            else{
                alert("Passwords do not match");
                return false;
            }
        }
        else{
            alert("Invalid password");
            return false;
        }
    }
    else{
        alert("Invalid Mobile number.");
        return false;
    }
}