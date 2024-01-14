document.addEventListener('DOMContentLoaded', function () {
    // init tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });


    // stop videos on close
    function stopVideoOnModalClose(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('hidden.bs.modal', function () {
                var iframe = modal.querySelector('iframe');
                var videoSrc = iframe.src;
                iframe.src = '';
                setTimeout(function () {
                    iframe.src = videoSrc;
                }, 500);
            });
        }
    }

    stopVideoOnModalClose('JunaitModal');
    stopVideoOnModalClose('UnionslaborModal');

    document.getElementById('chaosButton').addEventListener('click', function () {
        var allElements = document.querySelectorAll('body *:not(#chaosButton)');

        // Apply the rotation class
        allElements.forEach(function (elem) {
            elem.classList.add('chaos-rotate');
        });

        // Scroll to the top of the page smoothly
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 500); // Delay of 1000 milliseconds

        // Reset the rotation after 1500ms
        setTimeout(function () {
            allElements.forEach(function (elem) {
                elem.classList.remove('chaos-rotate');
            });
        }, 1150); // This duration should match the CSS animation duration
    });






});