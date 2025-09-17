// Lay du lieu tu API DummyJSON https://dummyjson.com/
const API_URL_ROOT = "https://dummyjson.com/";

// ham render san pham len giao dien
function renderProducts (products) {
    const container = document.getElementById("product_list");
    container.innerHTML = ""; // xoa code
    // chay vong lap de tao tung san pham
    // ?. kiem tra neu danh sach khac null -> thuc hien
    products?.forEach(p => {
        const productHTML = `
        <div class="col">
              <div class="card shadow-sm">
                <img src="${p.thumbnai}" alt="hinh anh san pham" />
                <div class="card-body">
                  <h3 class="card-title">${p.title}</h3>
                  <div class="card-text">
                    <strong class="text-danger">$${p.price}</strong>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button type="button" data-id"${p.id}" class="btn btn-sm btn-primary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `;
        // them san pham vao container 
        container.innerHTML += productHTML;
    });
}

// ham lay san pham tu API
function loadproductsFramAPI() {
    fetch(API_URL_ROOT + "products", {method: "GET"})
    .then((Response) => Response.json()) // chuyen thanh object
    .then((data) => {
        console.log(data);
        // goi ham load san pham len giao dien
        renderProducts(data.products);
    })
    .catch((err) => console.error("Loi AOI:", err));
}
// goi ham khi load web
document.addEventListener("DOMContentLoaded", function () {
    loadproductsFramAPI();
});

// ham Lay san pham tu API
function loadproductsFramAPI() {

}

// goi ham khi load web
document.addEventListener("DOMContentLoaded", function () {
    loadproductsFramAPI();
})