document.addEventListener("DOMContentLoaded", () => {
    let pass1 = "";
    let pass2 = "";
    document.querySelector("#pass1").addEventListener("input", () => {
        pass1 = document.querySelector("#pass1").value;
    })
    document.querySelector("#pass2").addEventListener("input", () => {
        pass2 = document.querySelector("#pass2").value;
    })
    document.querySelector("#validate").addEventListener("click", () => {
        if(pass1.length < 8 || pass2.length < 8) {
            alert("Error. A password must be at least 8 characters.");
        } else if(pass1 != pass2) {
            alert("Error. These passwords do not match.");
        }
        else {
            alert("Success. Valid password created.");
        }
    })
});