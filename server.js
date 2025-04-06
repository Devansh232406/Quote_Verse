const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT=8080;
const quotes=[
    "Sometimes all it needs is a simple spark to vanish the darkest nights",
    "Die as a hero or live long enough to see yourself..become a Villain",
    "Trust those who are worthy of it",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama"
]

app.get('/getquote',(req,res)=>{
    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    res.send(randomQuote);
})

app.listen(PORT, () => {                   // 7
    console.log(`Server running at http://localhost:${PORT}`);
});