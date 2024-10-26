const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});





/*Array of Temple Objects*/
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12", 
        area: 41010,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3547-thumb.jpg" 
      },

      {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 30",
        area: 72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-52301-thumb.jpg"
      },
      {
        templeName: "Billings Montana Temple",
        location: "Billings, Montana, United States",
        dedicated: "1999, November, 21", 
        area: 33800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-2799-thumb.jpg"
      },
    // Add more temple objects here...
  ];

  /*createTempleCard();*/

  function createTempleCard(filter = null) {

    // Clear the existing cards
    document.querySelector(".res-grid").innerHTML = '';

    
    temples.forEach(temple => {
        let dedicationYear = new Date(temple.dedicated).getFullYear();
        let templeArea = temple.area;

        // If filter is provided, only include temples that match the criteria
        if (filter === 'old' && dedicationYear >= 1900) return;
        if (filter === 'new' && dedicationYear <= 2000) return;
        if (filter === 'large' && templeArea < 90000) return;
        if (filter === 'small' && templeArea > 10000) return;
       

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        // Get Year only from Dedication date //
       /* let dateString = temple.dedicated;
        let date1st = new Date(dateString)
        let year1st = date1st.getFullYear();

        console.log(year1st); */
       

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card)



});

  }

// Initial display of all temples
createTempleCard();

// Add event listener to the "Old Temples" button
document.getElementById("home").addEventListener("click", () => {
    createTempleCard(); // Initial display of all temples
});

// Add event listener to the "Old Temples" button
document.getElementById("oldTemples-tab").addEventListener("click", () => {
    createTempleCard('old'); // Pass 'old' to filter for old temples
});

// Add event listener to the "New Temples" button
document.getElementById("newTemples-tab").addEventListener("click", () => {
    createTempleCard('new'); // Pass 'new' to filter for new temples
});

// Add event listener to the "Large Temples" button
document.getElementById("largeTemples-tab").addEventListener("click", () => {
    createTempleCard('large'); // Pass 'large' to filter for large temples
});

// Add event listener to the "Small Temples" button
document.getElementById("smallTemples-tab").addEventListener("click", () => {
    createTempleCard('small'); // Pass 'small' to filter for small temples
});





  


/*Dynamic time, date and year for footer elements*/
let text = document.lastModified;
document.getElementById("demo").innerHTML = text;

var date = new Date(); 
var year = date.getFullYear();
document.getElementById('curYr').innerHTML = year

