async function but() {
    try {
        var url = await fetch("https://api.adviceslip.com/advice");
        var data = await url.json();
        var advice = data.slip.advice;

        // Display advice in an alert box
        alert(advice);
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}