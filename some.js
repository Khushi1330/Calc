class Subscription {
    constructor(name, price, features) {
        this.name = name;
        this.price = price;
        this.features = features;
    }

    getInfo() {
        const featuresList = this.features.map(feature => `<li>${feature}</li>`).join('');
        return `<h2>${this.name}</h2>
                <p>Price: $${this.price} per month</p>
                <ul>
                    ${featuresList}
                </ul>`;
    }
}

const basicFeatures = [
    'Access to basic calculator',
    'Limited support'
];

const standardFeatures = [
    'Access to scientific calculator',
    'Full support',
    'Additional functions'
];

const basic = new Subscription('Basic', 0.00, basicFeatures);
const standard = new Subscription('Standard', 1.99, standardFeatures);

// Function to display subscription information
function displaySubscriptionInfo(subscription) {
    const container = document.getElementById(subscription.name.toLowerCase());
    container.innerHTML = subscription.getInfo();

    // Add event listener to the plan container
    container.addEventListener('click', function() {
        if (subscription.name === 'Basic') {
            window.location.href = 'basic.html'; // Redirect to basic calculator page
        } else if (subscription.name === 'Standard') {
            window.location.href = 'pay.html'; // Redirect to payment page
        }
    });

    // Add cursor pointer style to indicate it's clickable
    container.style.cursor = 'pointer';
}

// Display subscription info when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displaySubscriptionInfo(basic);
    displaySubscriptionInfo(standard);
});
