document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const selects = form.querySelectorAll("select");

    // Assign inputs based on order in HTML
    const fullName = inputs[0];
    const email = inputs[1];
    const phone = inputs[2];
    const birthDate = inputs[3];
    const address1 = inputs[7];
    const address2 = inputs[8];
    const city = inputs[9];
    const region = inputs[10];
    const postalCode = inputs[11];
    const country = selects[0];

    // Email validation regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Phone validation (10 digits)
    const phonePattern = /^[0-9]{10}$/;

    // Validate Full Name
    if (fullName.value.trim() === "") {
      alert("Full Name is required");
      fullName.focus();
      return;
    }

    // Validate Email
    if (!emailPattern.test(email.value.trim())) {
      alert("Enter a valid email address");
      email.focus();
      return;
    }

    // Validate Phone
    if (!phonePattern.test(phone.value.trim())) {
      alert("Phone number must be 10 digits");
      phone.focus();
      return;
    }

    // Validate Birth Date
    if (birthDate.value === "") {
      alert("Birth Date is required");
      birthDate.focus();
      return;
    }

    // Validate Address fields
    if (address1.value.trim() === "") {
      alert("Street Address is required");
      address1.focus();
      return;
    }

    if (address2.value.trim() === "") {
      alert("Street Address Line 2 is required");
      address2.focus();
      return;
    }

    if (country.selectedIndex === 0) {
      alert("Please select a country");
      country.focus();
      return;
    }

    if (city.value.trim() === "") {
      alert("City is required");
      city.focus();
      return;
    }

    if (region.value.trim() === "") {
      alert("Region is required");
      region.focus();
      return;
    }

    if (postalCode.value.trim() === "") {
      alert("Postal Code is required");
      postalCode.focus();
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    form.reset();
  });
});