// Efficiency factors for AI automation (conservative estimates)
const AI_EFFICIENCY = {
    contentCreation: 0.7,    // 70% time reduction
    socialMedia: 0.8,        // 80% time reduction
    emailMarketing: 0.75,    // 75% time reduction
    analytics: 0.85         // 85% time reduction
};

function calculateSavings() {
    // Get input values
    const contentHours = parseFloat(document.getElementById('contentCreation').value) || 0;
    const socialHours = parseFloat(document.getElementById('socialMedia').value) || 0;
    const emailHours = parseFloat(document.getElementById('emailMarketing').value) || 0;
    const analyticsHours = parseFloat(document.getElementById('analytics').value) || 0;

    // Calculate time savings for each category
    const contentSavings = contentHours * AI_EFFICIENCY.contentCreation;
    const socialSavings = socialHours * AI_EFFICIENCY.socialMedia;
    const emailSavings = emailHours * AI_EFFICIENCY.emailMarketing;
    const analyticsSavings = analyticsHours * AI_EFFICIENCY.analytics;

    // Calculate total weekly savings
    const weeklySavings = contentSavings + socialSavings + emailSavings + analyticsSavings;

    // Calculate monthly and yearly savings
    const monthlySavings = weeklySavings * 4.33; // Average weeks per month
    const yearlySavings = weeklySavings * 52;

    // Update the UI with formatted numbers
    document.getElementById('weeklySavings').textContent = `${weeklySavings.toFixed(1)} hours`;
    document.getElementById('monthlySavings').textContent = `${monthlySavings.toFixed(1)} hours`;
    document.getElementById('yearlySavings').textContent = `${yearlySavings.toFixed(1)} hours`;

    // Add animation to results
    const results = document.getElementById('results');
    results.style.opacity = '0';
    results.style.display = 'grid';
    setTimeout(() => {
        results.style.opacity = '1';
        results.style.transition = 'opacity 0.5s ease-in';
    }, 100);
}

// Add input validation
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0) this.value = 0;
        if (this.value > 168) this.value = 168; // Max hours in a week
    });
});

// Calculate initial values on page load
document.addEventListener('DOMContentLoaded', calculateSavings);
