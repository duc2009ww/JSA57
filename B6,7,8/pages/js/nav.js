//
// lay link can chinh sua trong nav
const signin_link = document.getElementById("signin_link");
const signout_link = document.getElementById("signout_link");

// kiem tra neu da dang nhap -> hien link signout
if (localStorage.getItem("currentUser")) {
    signin_link.style.display = "nane"; // an link signin
    signout_link.style.display = "block"; // hien link signout
} else {
    // chua dang nhap -> hien link signin
    signin_link.style.display = "block"; // hien link signin
    signout_link.style.display = "none"; // an link signout
}

//
// xu ly