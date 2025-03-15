export function k5(u, f) {
    let x = fetch(u);
    x.then(r => {
        if (!r.ok) throw new Error('X');
        return r.blob();
    }).then(b => {
        const l = window.URL.createObjectURL(b);
        const a = document.createElement('a');
        a.href = l;
        a.download = f;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(l);
    }).catch(e => n6(`Oops: ${e.message}`));
}

export function n6(m) {
    document.getElementById('eRr').textContent = m;
}
window.k5 = k5;
