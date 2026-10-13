const box = document.querySelector<HTMLDivElement>('#box');

if (!box) {
    throw new Error('Box element not found');
}

let x = 100;
let y = 100;

function updatePosition(): void {
    if (!box) {
        return
    };

    const maxX = Math.max(0, window.innerWidth - box.offsetWidth);
    const maxY = Math.max(0, window.innerHeight - box.offsetHeight);

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

document.addEventListener('keydown', (event) => {
    if (!event.key.startsWith('Arrow')) {
        return
    };

    event.preventDefault();

    if (event.key === 'ArrowRight') {
        x += 10;
    }

    if (event.key === 'ArrowLeft') {
        x -= 10;
    }

    if (event.key === 'ArrowUp') {
        y -= 10;
    }

    if (event.key === 'ArrowDown') {
        y += 10;
    }

    updatePosition();
});

document.addEventListener('click', (event) => {
    x = event.clientX;
    y = event.clientY;

    updatePosition();
});