document.addEventListener('DOMContentLoaded', function () {

    /* === 1. Fade-in när bilderna blir synliga === */
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.image-wrapper img').forEach(img => {
        img.classList.add('fade-in');
        io.observe(img);
    });

    /* === 2. Markera dagens rad under Öppettider === */
    const weekdays = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
    const today = weekdays[new Date().getDay()];
    document.querySelectorAll('.hours li').forEach(li => {
        const dayTextElement = li.querySelector('.day');
        if (dayTextElement) {
            const dayText = dayTextElement.textContent.trim();
            if (dayText.startsWith(today)) {
                li.classList.add('today');
            }
        }
    });

    /* === 3. Smooth-scroll + fokusfälla för interna länkar === */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }, 400);
            }
        });
    });

    /* === 4. Ta bort expanderade navigation-chevroner === */
    document.querySelectorAll('.navigation__item-chevron--expanded').forEach(el => el.remove());

});