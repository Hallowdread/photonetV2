import './style.css';

//* Global Variables
const auth: string = "OV7ELELUrqprjMFuTlo51RPitDn4svJpJX2z4J8UWmpr2Z3zOnEtPh02";
const gallery = document.querySelector('.gallery') as HTMLDivElement;
const searchInput = document.querySelector(".search-input") as HTMLInputElement;
const form = document.querySelector(".search-form") as HTMLFormElement;
const moreBtn = document.querySelector(".more-btn");
let fetchLink: string;
let currentSearch: string;
let searchValue: string;
let page: number = 1;
let galleryImg: Element;

//* Event Listeners
document.addEventListener("DOMContentLoaded", curatedPhotos);
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});
// 
searchInput.addEventListener("input", updateInput);
// 
moreBtn?.addEventListener("click", loadMore);

//* Functions
function updateInput(e: Event) {
  const target  = e.target as HTMLInputElement;
  // console.log(target.value);
  searchValue = target.value;
};

//? Sending a request to the API
async function fetchApi(url:string): Promise<{photos: any[]}> {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth
    }
  });
  // 
  const data = await dataFetch.json();
  return data;
};

//? Generating the photos on the DOM and styling it...
const generatePhotos = (data: any) => {
  // 
  data.photos.forEach((photo: any) => {
    // console.log(photo.src.large);
    galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
    <img src =${photo.src.large} loading="lazy"> 
    <div class="dark-bg">
      <div class="info">
        <p>${photo.photographer}</p>
        <p><a href=${photo.src.original}><i class="fa-solid fa-download"></i></a></p>
      </div>
    </div>`;
    gallery.appendChild(galleryImg); 
    // console.log(galleryImg.children[1].children[0]);
  });
};

//? Getting the popular photos from the API...
async function curatedPhotos(): Promise<void> {
  fetchLink = "https://api.pexels.com/v1/curated?per_page=15&page=1"
  const data  = await fetchApi(fetchLink);
  // 
  generatePhotos(data);
};

//? Getting the photo being searched for
async function searchPhotos(query:string): Promise<void> {
  clear();
  fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
  const data  = await fetchApi(fetchLink);
  // 
  generatePhotos(data);
};

//? Clearing the previous photos from the page and the input...
const clear = () => {
  gallery.innerHTML = "";
  searchInput.value = "";
};

//? Loading more photos for the curated or searched photos...
async function loadMore(): Promise<void> {
  page++;
  if (currentSearch) {
    fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
  } else {
    fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`
  };
  const data  = await fetchApi(fetchLink);
  generatePhotos(data);
};

// 
// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.getElementById("darkModeToggle") as HTMLInputElement;
//   // const info = document.querySelector(".gallery-img .info") as HTMLDivElement;

//   //* Load User Prefrence From Local Storage
//   const saveMode = localStorage.getItem("dark-mode");


//   if (saveMode === "true") {
//     galleryImg?.children[1].children[0].classList.add("dark-mode");
//     toggle.checked = true;
//   };

//   toggle.addEventListener("change", () => {
//     if (toggle.checked) {
//       galleryImg?.children[1].children[0].classList.add("dark-mode");
//       localStorage.setItem("dark-mode", "true");
//     } else {
//       galleryImg?.children[1].children[0].classList.remove("dark-mode");
//       localStorage.setItem("dark-mode", "false");
//     }
//   });
// });


