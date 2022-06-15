function TorWiki() {
    const tr = document.getElementById("search__input").value; 
    const newURL = `https://duckduckgo.com/?q=${tr}+&sites=support.torproject.org&atb=v322-1&ia=web`;

    window.open(newURL, "blank_");
}

document.getElementById("poisk").addEventListener('click', TorWiki)