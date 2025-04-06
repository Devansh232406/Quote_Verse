// Grab the button and output box elements
const button = document.querySelector('button');
const output = document.querySelector('.output-box');

// Add click event to button
button.addEventListener('click', async () => {
    try {
        // Call your backend API
        const response = await fetch('/getQuote');
        const quote = await response.text();

        // Set the quote inside the output box
        output.textContent = quote;
    } 
    catch (error) {
        output.textContent = "Oops! Couldn't fetch quote.";
        console.error(error);
    }
});