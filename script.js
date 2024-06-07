document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('search');

    input.addEventListener('focus', function(event) {
        if (input.value === '') {
            input.value = ' '.repeat(12);

            setTimeout(function() {
                input.setSelectionRange(10, 10);
            }, 0);
        }
    });

    input.addEventListener('mousedown', function(event) {
        event.preventDefault();
        input.focus();
    });
});