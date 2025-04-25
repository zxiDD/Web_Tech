function generateIDCard() {
  const name = document.getElementById("name").value;
  const department = document.getElementById("department").value;
  const admission = document.getElementById("admission").value;
  const dob = document.getElementById("dob").value;
  const blood = document.getElementById("blood").value;
  const hostel = document.getElementById("hostel").value;
  const validity = document.getElementById("validity").value;
  const photo = document.getElementById("photo").files[0];

  if (
    name &&
    department &&
    admission &&
    dob &&
    blood &&
    hostel &&
    validity &&
    photo
  ) {
    document.getElementById("card-name").textContent = name;
    document.getElementById("card-department").textContent = department;
    document.getElementById("card-admission").textContent = admission;
    document.getElementById("card-dob").textContent = dob;
    document.getElementById("card-blood").textContent = blood;
    document.getElementById("card-hostel").textContent = hostel;
    document.getElementById("card-validity").textContent = validity;

    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("card-photo").src = e.target.result;
    };
    reader.readAsDataURL(photo);

    document.getElementById("id-card").style.display = "block";
  } else {
    alert("Please fill out all fields and upload a photo.");
  }
}
