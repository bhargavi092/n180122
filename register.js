var fn=document.getElementById('fn');
var mn=document.getElementById('mn');
var pattren1=/^[a-zA-Z]+$/;
var pattren2=/^([a-zA-Z])?/;
var indpatten=/^\d{10}$/;
var uspatten=/^\d{3}-\d{4}-\d{3}$/;
var mailpattern=/^[a-zA-Z0-9]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z]+(\.[a-zA-Z]+)*(\.[a-z]{2,3})$/;
var india=document.getElementById('in');
var us=document.getElementById('us');
var mail=document.getElementById('mail');
var file=document.getElementById('file');
var eye=document.getElementById('eye');
var pass=document.getElementById('p');
var address=document.getElementById('address').value;
var inputtag=document.createElement('input');
inputtag.setAttribute('type','text');
inputtag.setAttribute('id','others');
var inputtag2=document.createElement('input');
inputtag2.setAttribute('type','text');
inputtag2.setAttribute('id','others2');
const arr=[];
function array(){
    arr[0]=h1.checked;
    arr[1]=h2.checked;
    arr[2]=h3.checked;
    arr[3]=h4.checked;
}
function show(){
    if(eye.getAttribute('class')=='bi bi-eye-fill'){
        //pass.setAttribute('type','text');
        pass.type='text';
        eye.className='bi bi-eye';
        eye.innerText='o';
    }
    else{
        eye.className='bi bi-eye-fill';
        eye.innerText='e';
        //pass.setAttribute('type','password');
        pass.type='password';
    }
}
function enable(){
    var term=document.getElementById('term');
    var submit=document.getElementById('submit')
    if(term.checked){
        submit.removeAttribute('disabled')
    }
    else{
        submit.setAttribute('disabled','')
    }
}
function conform(){
    var con=confirm('do you want to reset');
    if(con){
        return false
    }
    else{
        return true
    }
}
function usnumber(){
    if(us.checked){
        check.appendChild(inputtag2);
    }
    else{
        check.removeChild(inputtag2);
    }
}
function innumber(){
    if(india.checked){
        check.appendChild(inputtag);
    }
    else{
        check.removeChild(inputtag); 
    }
}
function remove(){
    if((fn.value.length<3)){
        fn.style.border='2px solid red';
    }
    else if((pattren1.test(fn.value)==false)){
        fn.style.border='2px solid red';
    }
    else{
        fn.style.border='1px solid black';
        document.getElementById('msg1').innerText='';
    }
}
india.addEventListener('click',innumber,false);
us.addEventListener('click',usnumber,false);
function validate(){
    console.log(mailpattern.test(mail.value));
    if((fn.value.length<3)){
        fn.style.border='2px solid red';
        fn.focus();
        document.getElementById('msg1').innerText='enter valid name';
        return false;
    }
    else{
        fn.style.border='1px solid black';
        document.getElementById('msg1').innerText='';
    }
    if(pattren2.test(mn.value)==false){
        mn.style.border='2px solid red';
        document.getElementById('msg2').innerText='enter valid name';
        return false;
    }
    else{
        mn.style.border='1px solid black';
    }
    if(pattren1.test(fn.value) && pattren2.test(mn.value)){
        document.getElementById('ln').value=fn.value+' '+mn.value;
    }
    if(pattren1.test(fn.value)==false){
        fn.style.border='2px solid red';
        document.getElementById('msg1').innerText='enter valid name';
        return false;
    }
    else{
        fn.style.border='1px solid black';
        document.getElementById('msg1').innerText='';
    }
    if(pass.value.length<6){
        pass.style.border='2px solid red';
        pass.focus();
        document.getElementById('msg4').innerText='enter strong password atleast 6 characters';
        return false;
    }
    else{
        pass.style.border='1px solid black';
        document.getElementById('msg4').innerText='';
    }
    if((india.checked==false) && (us.checked==false)){
        india.style.border='1px solid red';
        document.getElementById('msg3').innerText='select atleast one';
        return false;
    }
    else{
        india.style.border='1px solid black';
    }
    if(india.checked==true){
        var indvalue=document.getElementById('others').value;
        if(indpatten.test(indvalue)==false){        
            document.getElementById('others').style.border='2px solid red';
            document.getElementById('msg3').innerText='enter a valid phone number';
            return false;
        }
        else{
            document.getElementById('others').style.border='1px solid black';
            document.getElementById('msg3').innerText='';
        }
    }
    
    if(us.checked==true){
        var usvalue=document.getElementById('others2').value;
        if(uspatten.test(usvalue)==false){
            document.getElementById('others2').style.border='2px solid red';
            document.getElementById('msg3').innerText='enter a valid phone number';
            return false;
        }
        else{
            document.getElementById('others2').style.border='1px solid black';
            document.getElementById('msg3').innerText='';
        }
    }
    // if((h1.checked==false) && (h2.checked==false) && (h3.checked==false) && (h4.checked==false)){
    //     document.getElementById('msg5').innerText='select atleast two';
    //     return false;
    // }
    array();
    var c=0;
    for (const i of arr) {
        if(i==true){
            c++;
        }
    }
    if(c<2){
        document.getElementById('msg5').innerText='select atleast two';
        return false;
    }
    else{
        document.getElementById('msg5').innerText='';
    }
    if(mailpattern.test(mail.value)==false){
        mail.style.border='2px solid red';
        mail.focus();
        document.getElementById('msg7').innerText='enter valid mail';
        return false;
    }
    else{
        mail.style.border='1px solid black';
        document.getElementById('msg7').innerText='';
    }
    if(file.files.length>0){

        for(var i=0;i<=file.files.length-1;i++){
            var fsize=file.files.item(i).size;
            const fil=Math.round((fsize/1024));
            if(fil>=4096){
                document.getElementById('msg7').innerText='enter valid mail';
            }
            else{
                document.getElementById('msg7').innerText='';
            }
        }
    }
    if(address.length>0){
        var letters=address.replace(/[0-9]/g,'');
        address=letters;
    }
    alert('details\n name '+ln.value+'\n password '+pass.value+'\n mail '+mail.value+'\n address '+address);
    return true;
}