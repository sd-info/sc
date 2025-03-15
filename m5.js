import { qX, rY } from './c1.js';
import { b7, p8 } from './u2.js';
import { v9 } from './i3.js';
import { k5, n6 } from './d4.js';

export async function x0() {
    const u = document.getElementById('vIn').value.trim();
    const p = document.getElementById('pVw');
    const e = document.getElementById('eRr');
    p.innerHTML = '<p class="text-gray-500 text-center animate-pulse">Processing...</p>';
    e.textContent = '';

    const v = p8(u);
    if (!v) {
        n6('Invalid input - Retry!');
        p.innerHTML = '';
        return;
    }

    const b = b7(v);
    let h = '', f = null;

    for (let i = 0; i < qX.length; i++) {
        const q = qX[i];
        const t = `${b}${q}.jpg`;
        if (await v9(t)) {
            f = { q, t, r: rY[q] };
            break;
        }
    }

    if (!f) {
        n6('No results found');
        p.innerHTML = '';
        return;
    }

    h = `
        <div class="neumorphic p-6 sm:p-8 rounded-2xl text-center">
            <h3 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">Top Result: ${f.q} (${f.r})</h3>
            <img src="${f.t}" alt="Preview" class="w-full max-w-md sm:max-w-2xl mx-auto rounded-xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
    `;

    for (let i = 0; i < qX.length; i++) {
        const q = qX[i];
        const t = `${b}${q}.jpg`;
        const available = await v9(t);
        h += `
            <button 
                onclick="k5('${t}', 'item_${v}_${q}.jpg')" 
                class="bg-gradient-to-r ${available ? 'from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600' : 'from-gray-400 to-gray-500 cursor-not-allowed'} text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
                ${!available ? 'disabled' : ''}>
                ${q} (${rY[q]})
            </button>
        `;
    }

    h += `</div></div>`;
    p.innerHTML = h;
}

// Expose x0 globally
window.x0 = x0;
