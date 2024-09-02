            // ======== بسم الله الرحمن الرحيم ======== //

let title = document.getElementById('title'),
    price = document.getElementById('price'),
    tax = document.getElementById('tax'),
    ads = document.getElementById('ads'),
    discount = document.getElementById('discount'),
    total = document.getElementById('total'),
    count = document.getElementById('count'),
    category = document.getElementById('category'),
    submit = document.getElementById('button'),
    searchFaild = document.getElementById('searchFailed'),
    mood = 'Create',
    tmp;


// Get Total

function getTotal()
{
    if(price.value != '' && tax.value != '' && ads.value != '')
    {
        let result = (+price.value + +tax.value + +ads.value) 
        - +discount.value;

        total.innerHTML = result;

        total.style.background = "#040";
    }
    else
    {
        total.innerHTML = "";
        
        total.style.background = "#a00d02";
    }
}


// Create Product

let dataProducts;

    if(localStorage.product != null)
    {
        dataProducts = JSON.parse(localStorage.product);
    }
    else
    {
        dataProducts = [];
    }

submit.onclick = function()
{
    let newProduct = {
        title:title.value,
        price:price.value,
        tax:tax.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }

    // Filter Inputs to get Clean Data
    if(title.value != ''&&
        price.value != ''&&
        category.value != ''&&
        newProduct.count <= 100)
    {
        if(mood === 'Create')
        {
            // Count Inputs
            if(newProduct.count > 1)
            {
                for(let i = 0; i < newProduct.count; i++)
                {
                    dataProducts.push(newProduct)
                }
            }
            else
            {
                dataProducts.push(newProduct);
            }
        }
        else
        {
            dataProducts[tmp] = newProduct;
            mood = 'Create';
            submit.innerHTML = "Create";
            count.style.display = 'block';
        }

        // Clear Inputs After Submiting
        clearData();
    }

    
    // Save localStorage    
    localStorage.setItem('product', JSON.stringify(dataProducts));

    // Create New Data
    showData();

}

// Clear Inputs

function clearData()
{
    title.value = '';
    price.value = '';
    tax.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

// Read Inputs

function showData()
{
    getTotal();

    let table = '';

    for(let i = 0; i < dataProducts.length; i++ )
    {
        table += `
        <tr>
        <td>${i + 1}</td>
        <td>${dataProducts[i].title}</td>
        <td>${dataProducts[i].price}</td>
        <td>${dataProducts[i].tax}</td>
        <td>${dataProducts[i].ads}</td>
        <td>${dataProducts[i].discount}</td>
        <td>${dataProducts[i].total}</td>
        <td>${dataProducts[i].category}</td>
        <td><button onclick="updataData(${i})" id="update">Update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
        <tr>`;
    }

    document.getElementById('tbody').innerHTML = table;


    let deleteAll = document.getElementById('deleteAll');

    if(dataProducts.length > 0)
    {
        deleteAll.innerHTML = `<button onclick="deleteAll()">Delete ALL (${dataProducts.length})</button>`;
    }
    else
    {
        deleteAll.innerHTML = '';
    }
}

// Show Already Data in OutPut Table
showData();


// Delete Inputs

function deleteData(i)
{
    // Delete Item From Array
    dataProducts.splice(i, 1);

    // Delete Item From Local Storage
    localStorage.product = JSON.stringify(dataProducts);

    // Refresh The Table
    showData();
}

function deleteAll()
{
    // Delete All From Local Storage
    localStorage.clear();
    
    // Delete All From Array
    dataProducts.splice(0);   
    
    // Refresh The Table
    showData();
}


// updata Inputs

function updataData(i)
{
   title.value = dataProducts[i].title;
   price.value = dataProducts[i].price;
   tax.value = dataProducts[i].tax;
   ads.value = dataProducts[i].ads;
   discount.value = dataProducts[i].discount;
   getTotal();
   count.style.display = 'none';
   category.value = dataProducts[i].category;
   submit.innerHTML = 'Update';
   mood = 'update';
   tmp = i;
   scroll({top:0,behavior:'smooth'});
}


// Search in Inputs

let searchMood = 'title';

function getSearchMood(id)
{
    let search = document.getElementById('search')

    if(id === 'searchTitle')
    {
        searchMood = 'title';
    }
    else
    {
        searchMood = 'Category';
    }

    // Change Input PlaceHolder when clicking
    search.placeholder = 'Search By ' + searchMood;

    // Focus On Search Input when clicking
    search.focus();

    // Empaty Search Input After Search
    search.value = '';
    
    // Show Normal Table
    showData();
}

function searchData(value)
{
    let table = '';

    for(let i = 0; i < dataProducts.length; i++)
    {
        // Search BY Title
        if(searchMood == 'title')
        {
            if(dataProducts[i].title.includes(value.toLowerCase()))
            {
                table += `
                    <tr>
                    <td>${i}</td>
                    <td>${dataProducts[i].title}</td>
                    <td>${dataProducts[i].price}</td>
                    <td>${dataProducts[i].tax}</td>
                    <td>${dataProducts[i].ads}</td>
                    <td>${dataProducts[i].discount}</td>
                    <td>${dataProducts[i].total}</td>
                    <td>${dataProducts[i].category}</td>
                    <td><button onclick="updataData(${i})" id="update">Update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
                    <tr>`;
            }
            else
            {
                //searchFaild.innerHTML = "NO DATA TO SHOW";
            }

        }
        // Search By Category
        else
        {
            if(dataProducts[i].category.includes(value.toLowerCase()))
            {
                table += `
                <tr>
                <td>${i}</td>
                <td>${dataProducts[i].title}</td>
                <td>${dataProducts[i].price}</td>
                <td>${dataProducts[i].tax}</td>
                <td>${dataProducts[i].ads}</td>
                <td>${dataProducts[i].discount}</td>
                <td>${dataProducts[i].total}</td>
                <td>${dataProducts[i].category}</td>
                <td><button onclick="updataData(${i})" id="update">Update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
                <tr>`;
            }
            else
            {
                //searchFaild = "NO DATA TO SHOW";
            }
        }
    }
    
    document.getElementById('tbody').innerHTML = table;
    //searchFaild.innerHTML = "";
}