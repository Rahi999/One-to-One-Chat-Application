var d = document.getElementById("div")
function getData() {
 fetch("https://17ff65.sse.codesandbox.io/single_chat_with_rahi")
 .then(res=> res.json())
 .then(res => {
   // console.log(res)
      display(res)
 })
 .catch(err => alert("Website Closed By Rahim"))  
}
//  getData()
function display(data) {
 document.getElementById("div").innerHTML = null;
 data.forEach((el) => {
   let p = document.createElement("p");
   p.innerText =el.message;
   p.setAttribute("id","messages");
   d.append(p);
  document.getElementById("div").scrollTo(0,1000);
  document.getElementById('input').value = '';
  document.getElementById("input").focus()    
 
 })

  
}

 function fn(event) {
   event.preventDefault()
   // https://17ff65.sse.codesandbox.io/single_chat_with_rahi
   let query = document.getElementById("input").value;
   if(query.length > 0) {
     fetch('https://17ff65.sse.codesandbox.io/single_chat_with_rahi',{
         method:"POST",
         headers: {
                'Content-Type': 'application/json'
                },
         body:JSON.stringify(
             {
                 message : query,
                 name: "Name",
                 status : "false"
             }
         )
     })
         .then(res=>res.json())
         .then(json=> getData())
    
     document.getElementById("div").scrollTo(0,1000);
     document.getElementById('input').value = '';
      document.getElementById("input").focus()   
   }  else {
        alert("Please Enter Any Message")
   }
      
 }

  function onImageChange(event)  {
 if (event.target.files && event.target.files[0]) {
  let image =  document.getElementById("img");
  image.src = src=(URL.createObjectURL(event.target.files[0])); 
  document.getElementById("name").innerText="Rahi";
  document.getElementById("name").style.marginLeft="10px"
  image.style.height="60px";
  image.style.height="60px";
  image.style.borderRadius="50%";

 }
};

let permission = Notification.permission;
if(permission === "granted") {
showNotification();
} else if(permission === "default"){
requestAndShowPermission();
} else {
alert("Use normal alert");
}
function showNotification() {
if(document.visibilityState === "visible") {
    return;
}
var title = "New Message";
icon = "https://cdn4.vectorstock.com/i/1000x1000/03/78/new-message-icon-vector-21810378.jpg"
var body = "New Message Recieved From Rahim";
var notification = new Notification('New Message', { body, icon });
notification.onclick = () => { 
       notification.close();
       window.parent.focus();
}
}
function requestAndShowPermission() {
Notification.requestPermission(function (permission) {
   if (permission === "granted") {
         showNotification();
   }
});
}