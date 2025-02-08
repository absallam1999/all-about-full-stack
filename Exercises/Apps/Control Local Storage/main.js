let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function showEmptyMsg() {
  results.innerHTML = "Input Can't Be Empty";
}

function checkItem() {
  let value = theInput.value;
  if (value !== "") {
    if (localStorage.getItem(value)) {
      results.innerHTML = `Found Item <span>${value}</span> already in Local Storage`;
    } else {
      results.innerHTML = `No Item <span>${value}</span> was Founded in Local Storage`;
    }
  } else {
    showEmptyMsg();
  }
}

function addItem() {
    let value = theInput.value;
    if(value !== '') {
        localStorage.setItem(value, "Test");
        results.innerHTML = `Local Storage Item <span>${value}</span> Added`;
        theInput.value = '';
    } else {
        showEmptyMsg();
    }
}

function deleteItem() {
    let value = theInput.value;
    if (value !== "") {
      if (localStorage.getItem(value)) {
        localStorage.removeItem(value)
        results.innerHTML = `Item <span>${value}</span> Removed from Local Storage`;
        theInput.value = '';  
    } else {
        results.innerHTML = `Item <span>${value}</span> Failed to Remove from Local Storage`;
      }
    } else {
      showEmptyMsg();
    }
}

function showItems() {
    if(localStorage.length) {
        results.innerHTML = '';
        for(let [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span class="keys">${key}</span>`;
        }
    } else {
        results.innerHTML = `Local Storage is Empty`;

    }
}
