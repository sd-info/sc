export function gH(u, f) {
    fetch(u).then(r => {
        if (!r.ok) throw new Error('E1');
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
    }).catch(e => kP(`Err: ${e.message}`));
}

export function kP(m) { 
    document.getElementById('oR').textContent = m; 
}
