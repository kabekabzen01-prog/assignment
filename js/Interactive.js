document.addEventListener('DOMContentLoaded', function () {

    /* =============================================
       Accordion (policies.html)
       ============================================= */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0) {

        function setPanelState(header, open) {
            const content = document.getElementById(header.getAttribute('aria-controls'));
            const icon = header.querySelector('.accordion-icon');

            header.setAttribute('aria-expanded', open ? 'true' : 'false');
            icon.textContent = open ? '\u2212' : '+'; /* minus sign when open */

            if (open) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0px';
            }
        }

        accordionHeaders.forEach(function (header, index) {
            const content = document.getElementById(header.getAttribute('aria-controls'));
            content.style.overflow = 'hidden';
            content.style.transition = 'max-height 0.3s ease';

            /* Open the first panel by default, collapse the rest */
            setPanelState(header, header.getAttribute('aria-expanded') === 'true');

            header.addEventListener('click', function () {
                const isOpen = header.getAttribute('aria-expanded') === 'true';
                setPanelState(header, !isOpen);
            });
        });

        /* Recalculate open panel height if the window is resized */
        window.addEventListener('resize', function () {
            accordionHeaders.forEach(function (header) {
                if (header.getAttribute('aria-expanded') === 'true') {
                    const content = document.getElementById(header.getAttribute('aria-controls'));
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }

    /* =============================================
       Lightbox Gallery (Previousevents.html)
       ============================================= */
    const lightboxOverlay = document.getElementById('lightbox-overlay');

    if (lightboxOverlay) {
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxClose = document.getElementById('lightbox-close');
        const triggers = document.querySelectorAll('.lightbox-trigger');

        triggers.forEach(function (img) {
            img.addEventListener('click', function () {
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
                lightboxOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeLightbox() {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        lightboxClose.addEventListener('click', closeLightbox);

        lightboxOverlay.addEventListener('click', function (e) {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    /* =============================================
       Events Search / Filter / Sort (index.html)
       ============================================= */
    const searchInput = document.getElementById('event-search');
    const eventsGrid = document.getElementById('events-grid');

    if (searchInput && eventsGrid) {
        const noResultsMessage = document.getElementById('no-results-message');
        const sortBtn = document.getElementById('sort-events-btn');

        const originalCards = Array.from(eventsGrid.children);
        let isSorted = false;

        function filterEvents() {
            const query = searchInput.value.trim().toLowerCase();
            let visibleCount = 0;

            Array.from(eventsGrid.children).forEach(function (card) {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const matches = title.includes(query);
                card.style.display = matches ? '' : 'none';
                if (matches) visibleCount++;
            });

            noResultsMessage.hidden = visibleCount !== 0;
        }

        searchInput.addEventListener('input', filterEvents);

        sortBtn.addEventListener('click', function () {
            const cards = Array.from(eventsGrid.children);

            if (!isSorted) {
                cards.sort(function (a, b) {
                    const titleA = a.querySelector('h3').textContent.toLowerCase();
                    const titleB = b.querySelector('h3').textContent.toLowerCase();
                    return titleA.localeCompare(titleB);
                });
                sortBtn.textContent = 'Reset Order';
            } else {
                cards.length = 0;
                cards.push.apply(cards, originalCards);
                sortBtn.textContent = 'Sort A\u2013Z';
            }

            cards.forEach(function (card) {
                eventsGrid.appendChild(card);
            });

            isSorted = !isSorted;
        });
    }

});