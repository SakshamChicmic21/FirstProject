// const scrollBox = document.querySelector(".container");

// const setData=async ()=>{
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     const prodData = data.products;
//     const boxData = prodData.slice(1,5);
//     scrollBox.innerText= JSON.stringify(boxData);
// }
// setData();
// function throttle(fn,delay){
//     let last=0;
//     return function(...args){
//         let now = Date.now();
//         if (now -last >= delay){
//             last = now;
//             fn.apply(this,args);
//         }
//     } 
// }
// const handleScroll= async()=>{
//     console.log("scrolled");
//     // api call
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     const prodData = data.products;
//     const boxData = prodData;
//     scrollBox.innerText= JSON.stringify(boxData);
// }
// const throttleScroll = throttle(handleScroll,500);

// scrollBox.addEventListener("scroll",throttleScroll);
const scrollBox = document.querySelector(".container");
// Global variable to keep track of which items to fetch next
let currentSkip = 0;
const limit = 4; // Number of items to fetch per load

// Function to render products into the scroll box
const renderProducts = (products) => {
    // Check if the scrollBox contains the initial JSON string and clear it if necessary
    if (scrollBox.innerText.includes('id":')) {
        scrollBox.innerText = '';
    }

    products.forEach((product,idx) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <h3>${idx+1} ${product.title}</h3>
            <p>${product.description.substring(0, 100)}...</p>
            <p><strong>Price: $${product.price}</strong></p>
        `;
        scrollBox.appendChild(productDiv);
    });
};

// Initial data load
const setData = async () => {
    // Fetch initial batch (e.g., skip 0, limit 4)
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    const prodData = data.products;
    renderProducts(prodData);
    currentSkip += limit; // Prepare for the next batch
};

setData();

// Throttle utility function remains the same
function throttle(fn, delay) {
    let last = 0;
    return function(...args) {
        let now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn.apply(this, args);
        }
    };
}

// Function to handle fetching and appending more data on scroll
const handleScroll = async () => {
    // Check if the user has scrolled near the bottom (e.g., within 100px of the bottom)
    const { scrollTop, scrollHeight, clientHeight } = scrollBox;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        console.log("Fetching more data...");
        // Use the currentSkip variable to fetch the next "page"
        const res = await fetch(`https://dummyjson.com/products`);
        const data = await res.json();
        
        if (data.products && data.products.length > 0) {
            renderProducts(data.products); // Append new data
            currentSkip += limit; // Increment the skip value for the *next* fetch
        } else {
            console.log("No more products to load.");
            // Optional: Remove the scroll listener if all data is loaded
            scrollBox.removeEventListener("scroll", throttleScroll);
        }
    }
};

const throttleScroll = throttle(handleScroll, 500);

// Attach the throttled event listener
scrollBox.addEventListener("scroll", throttleScroll);
