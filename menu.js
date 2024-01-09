document.addEventListener("DOMContentLoaded", function () {
    // Play and Tutorial Button
    const btnPlay = document.getElementById("btnPlay");
    const btnTutorial = document.getElementById("btnTutorial");

    // Function to load content dynamically
    function loadContent(url) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.body.innerHTML = xhr.responseText;
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

    // Event listener for the Play button
    btnPlay.addEventListener("click", function () {
        // Load the content of Play.html into the current page
        loadContent("Play.html");
    });

    // Event listener for the Tutorial button
    btnTutorial.addEventListener("click", function () {
        // Redirect to the Tutorial.html page
        window.location.href = "Tutorial.html";
    });
});