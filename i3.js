export async function vK(s) {
    return new Promise((r) => {
        const i = new Image();
        i.onload = () => r(true);
        i.onerror = () => r(false);
        i.src = s;
    });
}
