var cats = [{
    name: 'Gatto1',
    reset : false,
    imgUrl: 'https://c1.staticflickr.com/2/1126/625069434_db86b67df8_b.jpg'
},
{
    name: 'Gatto2',
    reset: false,
    imgUrl: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
}];

document.addEventListener('DOMContentLoaded', function() {
    var catsElems = document.getElementById('cats');
    if (catsElems) {
        cats.forEach(function(cat) {
            loadDOMElements(catsElems, cat);
        });
    }
});

function loadDOMElements(catsElem, cat) {
    var nameElem = document.createElement('h3');
    nameElem.innerText = cat.name;
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', cat.imgUrl);
    var paragraphElem = document.createElement('p');
    paragraphElem.innerText = 0;
    imgElem.addEventListener('click', (function(counterClick){
        return function() {
            if (cat.reset) {
                counterClick = 0;
                cat.reset = false;
            }
            paragraphElem.innerText = counterClick++;
        }
    }(counterClick=0)));
    catsElem.appendChild(nameElem);
    catsElem.appendChild(imgElem);
    catsElem.appendChild(paragraphElem);

    resetBtn.addEventListener('click', function() {
       cats.map(cat => cat.reset = true);
       var allParagraphs = document.querySelectorAll('p');
       [...allParagraphs].map(paragraph => paragraph.innerText = 0);
    });
}