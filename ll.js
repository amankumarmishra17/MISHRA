function validate()
{
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if ( username=="Samir Kumar"&& password =="Kumar@123"||username =='Dilip Kumar Mishra' && password=="Kumar@123"||username=="Pawan Kumar" && password=="Kumar@123")
{
        window.open('/MISHRA/index.html');
        return false;
}
else
{
        alert("login failed")}
}
