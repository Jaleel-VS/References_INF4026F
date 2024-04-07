document.addEventListener('DOMContentLoaded', function() {
    const references = [
        "Doe, John. 'How to Make Websites.' Web Development Blog. January 1, 2023.",
        "Smith, Jane. 'Designing for the Web.' Online Design Magazine. February 10, 2023."
        // Add more references here
    ];

    const referencesList = document.getElementById('referencesList');

    references.forEach(function(reference) {
        const li = document.createElement('li');
        li.textContent = reference;
        referencesList.appendChild(li);
    });
});
