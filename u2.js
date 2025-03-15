export function bF(t) { return `https://img.p1.q2/vi/${t}/`; }

export function xT(u) {
    const p = /^(?:https?:\/\/)?(?:www\.)?(?:p1\.q2\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|q3\.be\/|p1\.q2\/s4\/)([a-zA-Z0-9_-]{11})/;
    const m = u.match(p);
    return m && m[1] ? m[1] : null;
}
