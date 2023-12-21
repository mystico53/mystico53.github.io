document.addEventListener('DOMContentLoaded', function () {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize toasts
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        });
    }

    var youtubeModal = document.getElementById('youtubeModal')
    youtubeModal.addEventListener('hide.bs.modal', function (event) {
        var iframe = youtubeModal.querySelector('iframe');
        var videoSrc = iframe.src;
        iframe.src = '';
        setTimeout(function () {
            iframe.src = videoSrc;
        }, 500);
    });
});