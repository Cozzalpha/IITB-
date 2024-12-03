// Fetch materials data from JSON and display it dynamically
document.addEventListener("DOMContentLoaded", function() {
    fetch('materials.json')
        .then(response => response.json())
        .then(data => {
            const materialCards = document.getElementById('material-cards');
            data.forEach(material => {
                const card = document.createElement('div');
                card.classList.add('material-card');
                card.innerHTML = `
                    <img src="${material.image}" alt="${material.name}">
                    <h3>${material.name}</h3>
                    <p>${material.price}</p>
                    <a href="description.html?id=${material.id}">View Details</a>
                `;
                materialCards.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching material data:', error));
});
