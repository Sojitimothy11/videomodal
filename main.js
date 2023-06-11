const modal= document.querySelector(".modal");
const overlay= document.querySelector(".overlay");
const btnClose= document.querySelector(".btn-close");
const btnOpen= document.querySelector(".btn-open");

const openModal =()=>{
  modal.classList.remove("hide");
  overlay.classList.remove("hide")
}

btnOpen.addEventListener("click",openModal)

const closeModal = () => {
  modal.classList.add("hide")
  overlay.classList.add("hide")
}

btnClose. addEventListener("click", closeModal)
overlay. addEventListener("click", closeModal)