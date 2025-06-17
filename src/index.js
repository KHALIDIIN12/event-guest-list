document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guestForm");
  const guestInput = document.getElementById("guestInput");
  const guestList = document.getElementById("guestList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = guestInput.value.trim();

   
    if (guestName !== "") {
      const currentGuests = guestList.getElementsByTagName("li");
      if (currentGuests.length < 10) {
        const li = document.createElement("li");
        li.textContent = guestName;
        guestList.appendChild(li);
        guestInput.value = "";
      } else {
        alert("Guest limit reached (go outside lil bro).");
      }
    }
  });
});