function toggleRubi() {
    const urlParams = new URLSearchParams(window.location.search);
    const isRubi = urlParams.get('rubi') === 'true';
    urlParams.set('rubi', !isRubi);
    window.location.search = urlParams.toString();
}
