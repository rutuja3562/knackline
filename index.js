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
const Register = () => {
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
  console.log("name", register_data);
  if (
    register_data.name.length > 0 &&
    register_data.profile !== "" &&
    register_data.phone !== "" &&
    register_data.gender !== "" &&
    register_data.email !== "" &&
    register_data.password == register_data.conformed
  ) {
    userStack.push(register_data);
    localStorage.setItem("registerdata", JSON.stringify(userStack));
    window.location.href = "./table.html";
  } else {
    alert("Fill all field");
  }
};
