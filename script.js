// Typing effect
const texts = ['Network Engineer', 'Linux Administrator', 'MikroTik Specialist', 'Cybersecurity'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const el = document.getElementById('typing');
    if (!el) return;

    const current = texts[textIndex];

    if (isDeleting) {
        el.textContent = current.substring(0, charIndex--);
    } else {
        el.textContent = current.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
}

type();

// Toggle folder buka/tutup
function toggleFolder(header) {
    const card = header.parentElement;
    const fileList = card.querySelector('.file-list');
    const isOpen = header.classList.toggle('open');
    fileList.classList.toggle('open', isOpen);
    header.querySelector('.folder-icon').className =
        isOpen ? 'fa-solid fa-folder-open folder-icon' : 'fa-solid fa-folder folder-icon';
}
