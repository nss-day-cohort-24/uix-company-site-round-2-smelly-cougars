// Object properties: name, description, price, and URL for product image
var products = [
    {
        name: 'Jazz Harmony 1',
        duration: '2:00' ,
        description: 'Jazz Harmony for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-2.png',
        link: '../jazz-harmony-1.html'
    },
    {
        name: 'Jazz Harmony 2',
        duration: '2:00',
        description: 'Jazz Harmony for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-3.png',
        link: '../#'
    },
    {
        name: 'Vocal Warmups 1',
        duration: '2:00',
        description: 'Vocal warmups for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-4.png',
        link: '../#'
    },
    {
        name: 'Vocal Warmups 2',
        duration: '2:00',
        description: 'Vocal warmups for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-5.png',
        link: '../#'
    },
    {
        name: 'Guitar 1',
        duration: '2:00',
        description: 'Jazz Harmony for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-6.png',
        link: '../#'
    },
    {
        name: 'Guitar 2',
        duration: '2:00',
        description: 'Jazz Harmony for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-7.png',
        link: '../#'
    },
    {
        name: 'Rhythm Study 1',
        duration: '2:00',
        description: 'Jazz Harmony for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-8.png',
        link: '../#'
    },
    {
        name: 'Rhythm Study 2',
        duration: '2:00',
        description: 'Jazz Harmony for the advanced musician.',
        price: '$25.00',
        imgURL: '../images/star-factor-1.png',
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
//comment