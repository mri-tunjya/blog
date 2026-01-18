document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".page-content");
    const tocSidebar = document.querySelector(".toc-sidebar");
    const toggleBtn = document.querySelector(".toc-toggle");

    if (content && tocSidebar) {
        const headers = content.querySelectorAll("h2, h3");
        if (headers.length > 0) {
            const ul = document.createElement("ul");
            const title = document.createElement("h3");
            title.textContent = "Table of Contents";
            tocSidebar.appendChild(title);

            headers.forEach((header, index) => {
                const li = document.createElement("li");
                const a = document.createElement("a");

                // Ensure header has an ID
                if (!header.id) {
                    header.id = "header-" + index;
                }

                a.href = "#" + header.id;
                a.textContent = header.textContent;
                a.classList.add("toc-link");

                li.appendChild(a);

                // Indentation for h3
                if (header.tagName.toLowerCase() === "h3") {
                    li.style.marginLeft = "15px";
                }

                ul.appendChild(li);
            });

            tocSidebar.appendChild(ul);
        } else {
            // Hide if no headers
            tocSidebar.style.display = "none";
            if (toggleBtn) toggleBtn.style.display = "none";
        }
    }

    if (toggleBtn && tocSidebar) {
        toggleBtn.addEventListener("click", function () {
            tocSidebar.classList.toggle("closed");
            if (tocSidebar.classList.contains("closed")) {
                toggleBtn.innerHTML = "&#9664;"; // Left arrow
                toggleBtn.setAttribute("aria-expanded", "false");
            } else {
                toggleBtn.innerHTML = "&#9654;"; // Right arrow
                toggleBtn.setAttribute("aria-expanded", "true");
            }
        });
    }
});
