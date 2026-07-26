function loadIndexJson(indexJsonLoadedFunction) {
    var x = new XMLHttpRequest;
    x.overrideMimeType("application/json");
    x.open("GET", "/index.json", true);
    x.onreadystatechange = function() {
        if (4 == x.readyState && "200" == x.status) {
            // hugo server's livereload middleware appends a <script> tag after
            // the JSON body; strip anything trailing the closing bracket so
            // JSON.parse still succeeds in dev.
            var text = x.responseText;
            var end = text.lastIndexOf("]");
            if (end !== -1) {
                text = text.slice(0, end + 1);
            }
            indexJsonLoadedFunction(
                JSON.parse(text)
            );
        }
    }
    x.send(null)
}

function buildSearchIndex(documents) {
    // lunr only exposes `add` on the builder while the index is being
    // constructed, so every document must be added inside this callback.
    var titles = {};
    var lunrIndex = lunr(function() {
        this.ref("ref");
        this.field("title", {boost: 10});
        this.field("tags", {boost: 5});

        documents.forEach(function(item) {
            this.add(item);
            // The lunr results only contain ref and score
            // so we have to keep track of any other values
            // we want to display ourselves
            titles[item.ref] = item.title;
        }, this);
    });

    return {index: lunrIndex, titles: titles};
}

function renderSearchResults(container, matches, titles) {
    container.innerHTML = "";

    if (!matches.length) {
        var empty = document.createElement("li");
        empty.className = "search-results-empty";
        empty.textContent = "No results found";
        container.appendChild(empty);
        return;
    }

    matches.slice(0, 10).forEach(function(match) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = match.ref;
        link.textContent = titles[match.ref] || match.ref;
        item.appendChild(link);
        container.appendChild(item);
    });
}

function initSiteSearch() {
    var input = document.getElementById("search-input");
    var results = document.getElementById("search-results");
    var form = document.getElementById("site-search");
    if (!input || !results || !form) {
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    var lunrIndex = null;
    var titleLookup = {};

    loadIndexJson(function(documents) {
        var built = buildSearchIndex(documents);
        lunrIndex = built.index;
        titleLookup = built.titles;
    });

    input.addEventListener("input", function() {
        var query = input.value.trim();
        results.classList.remove("is-open");
        results.innerHTML = "";

        if (!lunrIndex || query.length < 2) {
            return;
        }

        var matches;
        try {
            matches = lunrIndex.search(query);
        } catch (e) {
            matches = [];
        }

        renderSearchResults(results, matches, titleLookup);
        results.classList.add("is-open");
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest("#site-search-wrapper")) {
            results.classList.remove("is-open");
        }
    });
}

document.addEventListener("DOMContentLoaded", initSiteSearch);