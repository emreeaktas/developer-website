// Dark Mode
let darkMode = () => {
  document.body.classList.toggle("dark-mode");
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("dark-mode");
  }
};

// input search
$(document).ready(function () {
  const searchApi = [
    "Adana",
    "Balikesir",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Malatya",
    "Van",
  ];
  $("#tags").autocomplete({
    source: searchApi,
  });
}); //end

// Footer
let newDate = () => {
  const date = new Date().getFullYear();
  // JS DOM
  //document.getElementById("date_id").innerHTML=new Date().getFullYear();

  // Jquery DOM
  $("#date_id").html(date);
};
newDate();
