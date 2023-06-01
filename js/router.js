const links = document.querySelectorAll(`.nav-list-item`);
const pages = document.querySelectorAll(`.page`);

/**
 * Sets up the router to handle clicks on a list of links.
 *
 * @param {void} - This function does not accept anything.
 * @return {void} This function does not return anything.
 */
export function setupRouter() {
    console.log(links);
    for (const link of links) {
        link.addEventListener(`click`, (e) => {
            let linkId = e.currentTarget.id;
            let pageId = e.currentTarget.dataset.linkTo;
            routeTo(linkId, pageId);
        });
    }
}

/**
 * This function handles routing to a specific page based on the link clicked.
 *
 * @param {string} linkId - the id of the link element clicked
 * @param {string} pageId - the id of the page element to be shown
 * @return {void} This function does not return anything
 */
function routeTo(linkId, pageId) {
    let clickedLink = document.getElementById(linkId);
    let clickedPage = document.getElementById(pageId);

    for (const link of links) {
        link.classList.remove(`active`);
    }
    clickedLink.classList.add(`active`);

    for (const page of pages) {
        page.classList.add(`hide`);
    }
    clickedPage.classList.remove(`hide`);
}
