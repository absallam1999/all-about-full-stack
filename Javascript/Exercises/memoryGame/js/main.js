                 // =========== بسم الله الرحمن الرحيم  =========== //

// Select The Start Game Button                 
document.querySelector('.control-buttons span').onclick = function()
{
    // Prompt Window To Ask For Name
    let yourName = prompt('Enter Your Name');
    
    // IF Name is Empty
    if(yourName == null || yourName == '')
    {
        // Set Name to UnKnown
        document.querySelector('.name span').innerHTML += 'UnKnown';
    }

    // IF Name is Not Empty
    else
    {
        // Set Name to Your Name
        document.querySelector('.name span').innerHTML += yourName;
    }

    // Remove Splash Screen 
    document.querySelector('.control-buttons').remove();

};

// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector('.memory-game-blocks');

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

// Create Range Of Keys
//let orderRange = [...Array(blocks.length).keys()];    // or 👇👇
let orderRange = Array.from(Array(blocks.length).keys())

//console.log(orderRange);
shuffle(orderRange);
//console.log(orderRange);

// forEach (loop) to Add Order CSS Property to Game Blocks
blocks.forEach((block, index) => {

    // Add CSS Property {Order}
    block.style.order = orderRange[index];

    // Add Click Event
    block.addEventListener('click', function()
    {
        // Trigger the Flip Block Function
        flipBlock(block);
    });


});


// Flip Block Function
function flipBlock(selectedBlock)
{
    // Add CSS class to selected block
    selectedBlock.classList.add('is-flipped');

    // Collect All Flipped Blocks
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    
    // IF There is Two Selected Blocks
    if(allFlippedBlocks.length === 2)
    {
    
        // Stop Clicking Function
        stopClicking();

        // Check Matched Block Function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

    }

}

// Create Shuffle Function
function shuffle(array)
{
    let current = array.length,
         random,
            tmp;
    
    while(current > 0)
    {
    // Get Random Number
    random = Math.floor(Math.random() * current);

    //Decrease Length By One
    current--;

    // [1] Save Current Element in temp
    tmp = array[current];

    // [2] Current Element = Random Element
    array[current] = array[random];

    // [3] Random Element = Get Element From temp
    array[random] = tmp;
    }

    return array;
}

// Stop Clicking Function
function stopClicking()
{

    // Add Class No Clicking on main Container
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {

        // Remove Class No Clicking After The Duration
        blocksContainer.classList.remove('no-clicking');

    }, duration);
    
}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock)
{
    let triesElement = document.querySelector('.tries span');
    
    if(firstBlock.dataset.imgs === secondBlock.dataset.imgs)
    {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-matched');
        secondBlock.classList.add('has-matched');

        document.getElementById('success').play();
    }
    else
    {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');

        }, duration);

        document.getElementById('fail').play();
    }
}