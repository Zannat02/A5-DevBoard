document.addEventListener("DOMContentLoaded", function () {
  const discoverCard = document.getElementById("discoverCard");
  const backToDeshBtn = document.getElementById("backToDeshBtn");

  if (discoverCard) {
    discoverCard.addEventListener("click", function () {
      window.location.href = "blog.html";
    });
  }

  if (backToDeshBtn) {
    backToDeshBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});




