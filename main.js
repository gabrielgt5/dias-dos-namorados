const openModal = () => {
  const modal = document.querySelector(".modal");
  const firtsStyle = modal.style.display;
  if (firtsStyle == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};

const btn = document.querySelector(".modalBtn");
btn.addEventListener("click", openModal);

window.onclick = function (event) {
  const modal = document.querySelector(".modal");
  if (event.target == modal) {
    openModal();
  }
};
