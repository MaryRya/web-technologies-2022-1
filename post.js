import CatalogPost from "./components/catalog-post.js";

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    new CatalogPost(document.getElementById('post'))
}