// Fetch and display material details based on ID from the URL
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const materialId = urlParams.get('id');
    
    fetch('materials.json')
        .then(response => response.json())
        .then(data => {
            const material = data.find(item => item.id == materialId);
            if (material) {
                document.getElementById('material-name').textContent = material.name;
                document.getElementById('material-image').src = material.image;
                document.getElementById('material-price').textContent = `Price: ${material.price}`;
                document.getElementById('material-quantity').textContent = `Quantity: ${material.quantity}`;
                document.getElementById('material-vendor').textContent = `Vendor: ${material.vendor}`;
                document.getElementById('material-category').textContent = `Category: ${material.category}`;
                document.getElementById('material-description-text').textContent = material.description;
            }
        })
        .catch(error => console.error('Error fetching material details:', error));
});
