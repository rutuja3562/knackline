// const Body= document.querySelector("body");
var userStack = JSON.parse(localStorage.getItem("registerdata")) || [];
var profile_photo;
document.querySelector("#myProfile").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    profile_photo = reader.result;
    // console.log("object")
    console.log("KK: ", profile_photo);
  });
  reader.readAsDataURL(this.files[0]);
});
display();
function display() {
  if (userStack.length !== 0) {
    document.querySelector("tbody").innerHTML = "";
    userStack.map(function (elem, index) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("img");
      td1.src = elem.profile;
      var td2 = document.createElement("td");
      td2.textContent = elem.name;
      var td3 = document.createElement("td");
      td3.textContent = elem.phone;
      var td4 = document.createElement("td");
      td4.textContent = elem.email;
      var td5 = document.createElement("td");
      td5.textContent = elem.gender;
      var td6 = document.createElement("button");
      td6.style.color = "red";
      td6.textContent = "Delete";
      td6.addEventListener("click", function () {
        deleteTask(index);
      });
      var td7 = document.createElement("button");
      td7.textContent = "Edit";
      td7.addEventListener("click", function () {
        editTask(elem.id);
      });
      tr.append(td1, td2, td3, td4, td5, td6, td7);
      document.querySelector("tbody").append(tr);
    });
  }
}
function deleteTask(index) {
  console.log(index);
  userStack.splice(index, 1);
  localStorage.setItem("registerdata", JSON.stringify(userStack));
  display();
}
function editTask(id) {
  
  let edit_data = document.getElementById("edit-data");
  edit_data.style.display = "block";
  document.getElementById("editbtn").addEventListener("click", function () {
    let selected = document.querySelector('input[type="radio"]:checked');
    let register_data = {
      name: document.getElementById("name").value,
      id: Date.now(),
      profile: profile_photo,
      phone: document.getElementById("phone").value,
      gender: selected.value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      conformed: document.getElementById("conpassword").value,
    };
    var arr =[...userStack.map((e, i) => {
        if (e.id == id) {
          return register_data;
        }
      })
      
    ];
   console.log(arr)
    localStorage.setItem("registerdata", JSON.stringify(userStack));
    display();
  });
  display()
}
