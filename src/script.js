//doms
const mobileNavMenu = document.getElementById("mobileNavMenu");
const burgerIcon = document.getElementById("burgerIcon");
const breadcrumb = document.getElementById("catBreadcrumb");
const root = document.getElementById("root");
const paginationWall = document.getElementById("paginationWall");


const singleProductContainer = document.getElementById("singleProductContainer");
const itemsPerPage = 4; 
let currentPage = 1;
let products = []


//functions
function toggleMobileNavMenu() {
  const isHidden = mobileNavMenu.classList.toggle("hidden");
  if (isHidden) {
    burgerIcon.innerHTML =
      ' <i class="fa-solid fa-bars fa-lg text-primary"></i>';
  } else {
    burgerIcon.innerHTML = '<i class="fa-solid fa-xmark text-primary"></i>';
  }
}

function getAllCategory() {
 fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => renderBreadcrumb(json));
}

function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        products = json; 
        renderProductPage();
        setupPagination();
      });
    
}

function getAllJeweleris() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
    .then((res) => res.json())
    .then((json) => {
        products = json;
        currentPage = 1
        renderProductPage();
        setupPagination();
        console.log(products);
    })
}

function getAllElectronics() {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then((res) => res.json())
    .then((json) => {
        products = json;
        currentPage = 1
        renderProductPage();
        setupPagination();
        console.log(products);
    })
}

function getAllMen() {
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then((res) => res.json())
    .then((json) => {
        products = json;
        currentPage = 1
        renderProductPage();
        setupPagination();
        console.log(products);
    })
}

function getAllWomen() {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((res) => res.json())
    .then((json) => {
        products = json;
        currentPage = 1
        renderProductPage();
        setupPagination();
        console.log(products);
    })
}

async function getSingleProduct(productId) {
  const result = await fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((json) => json);

  return result;
}

function renderMainPage() {
  const mainContent = 
      `  <main class="relative flex flex-col px-4 cursor-pointer">
            <div
          id="productsContainer"
          class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-evenly justify-items-center content-evenly items-stretch  w-full md:w-11/12  mx-auto pt-2 pb-4  "
        >
          <!-- <div
            class="relative min-w-60 min-h-80 shadow-none bg-white overflow-hidden rounded-lg scale-95 [transition:transform_0.5s,shadow_0.5s] hover:shadow-2xl hover:scale-100"
          >
            <div class="w-full h-full">
              <div class="w-full h-4/5">
                <img
                  class="w-full h-full object-cover"
                  src="./assets/images/image.png"
                />
              </div>
              <div class="bottom h-1/5 [transition:transform_1s] bg-white">
                <div class="relative float-left left h-full w-full">
                  <div class="details p-5 float-left w-[calc(70%-40px)]">
                    <h1 class="text-2xl text-secondary font-primary font-semibold">
                      Chair
                    </h1>
                    <p class="text-lg font-secondary text-primary font-bold">
                      £250
                    </p>
                  </div>
                  <div
                    class="buy text-center float-right w-[calc(30%-2px)] h-full bg-white [transition:background_0.5s] [border-left:solid_thin_rgba(0,0,0,0.1)] group hover:bg-primary"
                  >
                    <i
                      class="fa-solid fa-cart-plus text-3xl text-secondary translate-y-full [transition:all_0.5s] hover:-translate-y-px group-hover:text-white"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="inside z-20 bg-primary w-20 h-20 absolute top-0 right-0 rounded-[0px_0px_0px_200px] [transition:all_1s,border-radius_2s,top_1s] hover:w-full hover:right-0 hover:top-0 hover:rounded-none hover:h-4/5 group"
            >
              <div
                class="icon absolute right-4 top-4 text-white opacity-100 group-hover:opacity-0 group-hover:right-0 group-hover:left-0"
              >
                <i class="fa-solid fa-circle-info text-3xl"></i>
              </div>
              <div
                class="contents opacity-100 scale-100 translate-y-0 text-white font-secondary font-light text-wrap p-4"
              >
                <p class="p-5 hidden group-hover:block [transition:all_2s]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  nam cumque dicta, recusandae distinctio blanditiis necessitatibus
                  eius? Dolore rerum delectus nemo hic tempora ipsum repellat
                  quaerat earum, vel ullam culpa.
                </p>
              </div>
            </div>
          </div> -->
            </div>
            
            <!--start::pagination-->
            <div
            id="paginationWall"
            class="flex flex-col gap-1 my-3 pt-5 px-3 w-full xl:w-11/12 mx-auto md:flex-row-reverse md:justify-center"
            >
            <a
            onclick="nextPage(event)"
            id="nextPageBtn"
            href="#"
            class=" w-full text-center text-xl font-primary font-semibold text-primary py-3 px-4 bg-[#F3F3F4] rounded-md"
            >
            <span>
                <i
                class="fa-solid fa-chevron-down fa-rotate-270 text-lg text-primary"
                ></i>
            </span>
            Next
            </a>
            
            <div
            id="paging"
            class="flex justify-center gap-5 text-xl font-bold w-full px-4"
            ></div>
            
        <a
          id="pervPageBtn"
          onclick="pervPage(event)"
          href="#"
          class="w-full text-center text-xl font-primary font-bold text-primary py-3 px-4 bg-[#F3F3F4] rounded-md"
        >
          Pev
          <span>
            <i
              class="fa-solid fa-chevron-down fa-rotate-90 text-lg text-primary"
            ></i>
          </span>
        </a>
    </div>
            <!--end::pagination-->
    
        </main>`

        root.innerHTML = mainContent;

        renderProductPage();

        
        
        
}

function renderBreadcrumb(categories) {
    const template = categories
    .map((category) => {
        
        const isActive = location.pathname === `/${category}`;
      return ` <a href="/${category}" onclick="handleAClick(event)" class="cursor-pointer text-${isActive ? 'black' : 'white'}"> | ${category}</a> `;
    })
    .join("");

  breadcrumb.innerHTML += template;

}

function renderProductPage(data) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
  
    const template = currentProducts.map((product) => {
      return ` 
        <div onclick="handleProductClick(${product.id})" class="relative min-w-60 min-h-80 max-w-[300px] max-h-[500px] shadow-none bg-white overflow-hidden rounded-lg scale-95 [transition:transform_0.5s,shadow_0.5s] hover:shadow-2xl hover:scale-100">
          <div class="w-full h-full">
            <div class="w-full h-4/5">
              <img class="w-full h-full object-cover" src="${product.image}" />
            </div>
            <div class="bottom h-1/5 [transition:transform_1s] bg-white">
              <div class="relative float-left left h-full w-full">
                <div class="details p-5 float-left w-[calc(70%-40px)]">
                  <h1 class="w-full text-2xl overflow-hidden text-ellipsis whitespace-nowrap text-secondary font-primary font-semibold">${product.title}</h1>
                  <p class="text-lg font-secondary text-primary font-bold">£${product.price}</p>
                </div>
                <div onclick="addToTheCart()" class="buy text-center float-right w-[calc(30%-2px)] h-full bg-white [transition:background_0.5s] [border-left:solid_thin_rgba(0,0,0,0.1)] group hover:bg-primary">
                  <i class="fa-solid fa-cart-plus text-3xl text-secondary translate-y-full [transition:all_0.5s] hover:-translate-y-px group-hover:text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="inside z-20 bg-primary w-20 h-20 absolute top-0 right-0 rounded-[0px_0px_0px_200px] [transition:all_1s,border-radius_2s,top_1s] hover:w-full hover:right-0 hover:top-0 hover:rounded-none hover:h-4/5 group">
            <div class="icon absolute right-4 top-4 text-white opacity-100 group-hover:opacity-0 group-hover:right-0 group-hover:left-0">
              <i class="fa-solid fa-circle-info text-3xl"></i>
            </div>
            <div class="contents opacity-100 scale-100 translate-y-0 text-white font-secondary font-light text-wrap p-4">
              <h2 class="w-full hidden pt-5 px-3 text-wrap font-primary font-bold text-lg text-center group-hover:block [transition:all_2s]">${product.title}</h2>
              <p class="p-5 hidden group-hover:block [transition:all_2s]">${product.description}</p>
            </div>
          </div>
        </div>
      `;
    }).join("");
  
    productsContainer.innerHTML = template;
    
    setupPagination(data);
    
  }

function  renderSingleProduct({
  category: cat,
  description: desc,
  image,
  price,
  title,
}) {
  const template = `
       <div class=" relative pt-12 px-4 mx-auto w-full max-w-[1440px] flex flex-col gap-5 md:flex-row">

        <img class="w-full min-h-52 min-w-72 md:w-1/2" src="${image}" >

        <div class="w-full md:w-1/2 flex flex-col gap-5 ">
          <h1 class="w-full font-primary text-primary text-wrap text-xl">
            ${title}
          </h1>
          <span class="font-secondary text-secondary text-2xl text-left">
            ${price}£
          </span>

          <p class=" md:w-3/5 text-sm font-secondary text-black text-wrap ">
            ${desc}
          </p>

          <button class="uppercase w-52 p-5 bg-primary text-white font-primary font-semibold text-xl rounded-sm mx-auto">
            Add to cart
          </button>

          <span class="text-black text-lg font-primary font-normal" >Category : ${cat}</span>
        </div>

      </div>
  
  `;

  root.innerHTML = template;
}
 

  function setupPagination() {
    const pages = document.getElementById("paging");
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const template = [...new Array(totalPages)].map((item, index) => {
        const pageNum = index + 1 ;
    const isActive = pageNum === currentPage;
    return `
    <a  onclick="setCurrentPage(${pageNum})"  class="bg-${isActive ? 'white' : 'primary'} pointer-events-${isActive ? 'none' : 'auto' } cursor-pointer text-${isActive ? 'primary' : 'white'} py-3 px-4 rounded">
    ${pageNum}
    </a> 
    `
  }).join("");
  pages.innerHTML = template;

  updatePaginationControls(totalPages);


  

  }

function updatePaginationControls(totalPages) {
    const nextPageBtn = document.getElementById("nextPageBtn");
    const pervPageBtn = document.getElementById("pervPageBtn");
    pervPageBtn.style.display = currentPage <= 1 ? 'none' : 'block';
  nextPageBtn.style.display = currentPage >= totalPages ? 'none' : 'block';
    
}

function nextPage(event) {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
        currentPage++;
        
        renderProductPage();
        setupPagination();
        console.log("hi");
    }
}

function pervPage(event) {
    if (currentPage > 1) {
        currentPage--;
        renderProductPage();
        setupPagination();
        console.log("hi");
    }
}

function setCurrentPage(page) {
    currentPage = page;
    renderProductPage(); 
    setupPagination();
}

function handleProductClick(productId) {
  history.pushState({}, "", `/products/${productId}`);
  checkState();
}

function handleAClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    history.pushState({}, "", href);
    checkState();
    console.log(href);
  }

  async function checkState() {
    const pathName = location.pathname;
    
    
    switch (pathName) {
        case "/electronics":
            await getAllElectronics();
            break;
        case "/jewelery":
            await getAllJeweleris();
            break;
        case "/men's%20clothing":
            await getAllMen();
            break;
        case "/women's%20clothing":
            await getAllWomen();
            break;
        case "/all-products":
            await getAllProducts();
            break;
            case pathName === "/products":
              renderAllProducts();
              break;
         case pathName === "/src/index.html":
              renderMainPage();
              break;
        
    //   case pathName.includes("/categories/"):
    //     let cat = pathName.split("/");
    //     cat = cat[cat.length - 1];
    //     const catProducts = await getSingleCategory(cat);
    //     renderSingleCategory(catProducts);
    //     break;
    //   case pathName.includes("/products/"):
    //     let pId = pathName.split("/");
    //     pId = pId[pId.length - 1];
    //     const singlePData = await getSingleProduct(pId);
    //     renderSingleProduct(singlePData);
    //     break;
    //   default:
    //     renderMainPage();
    //     break;
}

   switch (true) {
    case pathName.includes("/products/"):
      let pId = pathName.split("/");
      pId = pId[pId.length - 1];
      const singlePData = await getSingleProduct(pId);
      renderSingleProduct(singlePData);
      break;    
      default:
        renderMainPage();
        break;
   }
  }




  
renderMainPage();

getAllCategory();

getAllProducts();

//event listener
document.addEventListener("DOMContentLoaded", () => {
    checkState();
  });

  window.addEventListener("popstate", checkState);