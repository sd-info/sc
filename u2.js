export function b7(t) {
    return `https://img.youtube.com/vi/${t}/`;
}

export function p8(u) {
    const r = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const m = u.match(r);
    return m && m[1] ? m[1] : null;
}
