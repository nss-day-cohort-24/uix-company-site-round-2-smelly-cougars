// Object properties: name, description, price, and URL for product image
var products = [
    {
        name: 'Jazz Harmony 1',
        duration: '2:00' ,
        description: ' Remove the worry from your child traveling alone with a tracking app that includes checkpoints, mini-games, and notifications for when your child arrives at their destination.',
        price: '$0.99',
        imgURL: '../images/#',
        link: '../jazz-harmony-1.html'
    },
    {
        name: 'Jazz Harmony 2',
        duration: '2:00',
        description: 'A simplified calendar built for parents to keep track of their child\'s wild schedule of daily events.',
        price: '$0.99',
        imgURL: '../images/#',
        link: '../#'
    },
    {
        name: 'Vocal Warmups 1',
        duration: '2:00',
        description: 'Be sure your child is in caring hands while traveling to and from home with our trusted group of drivers.',
        price: '$0.99',
        imgURL: '../images/#',
        link: '../#'
    },
    {
        name: 'Vocal Warmups 2',
        duration: '2:00',
        description: 'Practice honesty with your child with our lie detecting app that can discreetly analyze if your child is telling the truth or a fib.',
        price: '$0.99',
        imgURL: '../images/#',
        link: '../#'
    },
    {
        name: 'Guitar 1',
        duration: '2:00',
        description: 'Open your child\'s creative side with a simple yet lively dress designer suitable for any and all levels of imagination.',
        price: '$0.99',
        imgURL: '../images/#',
        link: '../#'
    },
    {
        name: 'Guitar 2',
        duration: '2:00',
        description: 'Find the Prince Charming that fits your fantasy perfectly.',
        price: '$0.99',
        imgURL: '../images/#',
        link: '../#'
    },
    {
        name: 'Rhythm Study 1',
        duration: '2:00',
        description: 'Cookbook app of famous recipes from other stories/fables. Make cooking fun with re-creations of favorite recipes from your child\'s favorite tales and stories.',
        price: '$6.00',
        imgURL: '../images/#',
        link: '../#'
    },
    {
        name: 'Rhythm Study 2',
        duration: '2:00',
        description: 'Keep you and your child healthy by monitoring things such as their exercise and nutrition. Keep them involved by staying healthy with them and sharing your progress with each other along the way.',
        price: '$0.99',
        imgURL: '../images/#',
        link: '../#'
    }
];

//Loop through array and create the html for each product card
for (i=0; i<=7; i++) {

    var cardContent = `<article class="card">
                    <a href="` + products[i].link + `">
                    <img src="` + products[i].imgURL + `">
                    <h3>` + products[i].name + `</h3>
                    <p class="length">` + products[i].duration + `</p>
                    <p class="desc">` + products[i].description + `</p>
                    <p class="price">` + products[i].price + `</p>
                    </a>
                    </article>`;

    function addCard() {
        var card = document.getElementById('cards');
        card.innerHTML += cardContent;
    }

    addCard(products[i]); //print the card to the page;

}