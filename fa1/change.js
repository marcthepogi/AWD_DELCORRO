(function() {
    function changeColors() {
        const body = document.body;
        const colorPicker = document.getElementById('colorPicker');
        const selectedColor = colorPicker.value;

        body.style.backgroundColor = selectedColor;

        // Choose a contrasting text color based on luminance
        const luminance = (0.299 * parseInt(selectedColor.substring(1, 3), 16) +
                           0.587 * parseInt(selectedColor.substring(3, 5), 16) +
                           0.114 * parseInt(selectedColor.substring(5, 7), 16)) / 255;

        body.style.color = luminance > 0.5 ? '#000' : '#fff';
    }

    const colorChangeButton = document.getElementById('colorChangeButton');
    if (colorChangeButton) {
        colorChangeButton.addEventListener('click', changeColors);
    }
})();
