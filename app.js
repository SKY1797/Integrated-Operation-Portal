// Application State
let appState = {
    module: 'HOME', // HOME, ELECTRICAL, PROTECTION, DOCS
    docsPath: [],
    protectionArea: null,
    protectionEquip: null,
    electricalUnit: null
};

// Safe access for static modules
const elecData = typeof electricalData !== 'undefined' ? electricalData : {};
const protData = typeof protectionData !== 'undefined' ? protectionData : {};

// DYNAMIC DOCS DATA
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwihfjnqOQdiBEoD3D-8RCBAM60sa0hXaQbn_0tZM_mVXrofR7XGXvmegxcDkQ4AQgh/exec';
let docData = [];
let isDocsLoading = false;
let docsError = null;

// Modern SVG Icons
const iconArrowRight = `<svg class="card-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
const iconElec = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/></svg>`;
const iconFactory = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></svg>`;
const iconProt = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`;
const iconDocs = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`;
const iconFolder = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`;
const iconBack = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>`;
const searchBtn = `<button class="search-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>`;
const iconHome = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
const iconFile = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`;
const iconBoiler = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>`;
const iconTurbine = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/></svg>`;
const iconFGD = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>`;
const iconGear = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>`;
const iconCalendar = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('popstate', handlePopState);
    initDocsData(); // Background fetch on launch
    renderApp();
});

// --- Dynamic Data Initialization ---
async function initDocsData() {
    // 1. Check Cache for instant load
    const cachedData = localStorage.getItem('opsPortalDocsData');
    if (cachedData) {
        try {
            docData = JSON.parse(cachedData);
            if (appState.module === 'DOCS') renderApp(); // Re-render if already on docs
        } catch (e) {
            console.error("Cache parsing error", e);
        }
    } else {
        isDocsLoading = true;
        if (appState.module === 'DOCS') renderApp(); // Show loading if no cache
    }

    // 2. Fetch fresh from Google Apps Script
    try {
        const response = await fetch(SCRIPT_URL);
        const rawText = await response.text();
        const freshData = JSON.parse(rawText);

        if (freshData.error) {
            docsError = freshData.error;
        } else {
            localStorage.setItem('opsPortalDocsData', rawText); // Save for next time
            docData = freshData;
            docsError = null;
        }
    } catch (error) {
        console.error("Network fetch failed.", error);
        docsError = "Network error. Showing cached data if available.";
    } finally {
        isDocsLoading = false;
        if (appState.module === 'DOCS') renderApp(); // Render with updated data silently
    }
}

// --- State & Routing ---
function updateState(newState, pushHistory = true) {
    appState = { ...appState, ...newState };
    if (pushHistory) {
        history.pushState(appState, '', '');
    }
    renderApp();
}

function handlePopState(event) {
    if (event.state) {
        appState = event.state;
    } else {
        appState = { module: 'HOME', docsPath: [], protectionArea: null, protectionEquip: null, electricalUnit: null };
    }
    renderApp();
}

function updateHeader() {
    const navContainer = document.getElementById('header-nav-actions');

    if (appState.module === 'HOME') {
        navContainer.style.display = 'none';
        navContainer.innerHTML = '';
    } else {
        navContainer.style.display = 'flex';

        let backAction = "updateState({module: 'HOME'})";
        if (appState.module === 'ELECTRICAL' && appState.electricalUnit) backAction = "updateState({electricalUnit: null})";
        if (appState.module === 'PROTECTION' && appState.protectionArea && !appState.protectionEquip) backAction = "updateState({protectionArea: null})";
        if (appState.module === 'PROTECTION' && appState.protectionEquip) backAction = "updateState({protectionEquip: null})";
        if (appState.module === 'DOCS' && appState.docsPath.length > 0) backAction = "docsGoBack()";
        if (appState.module === 'ROTA') backAction = "updateState({module: 'HOME'})";

        const homeAction = "updateState({module: 'HOME', docsPath: [], protectionArea: null, protectionEquip: null, electricalUnit: null})";

        let moduleBtnHTML = "";

        if (appState.module === 'ELECTRICAL') {
            const moduleAction = "updateState({module: 'ELECTRICAL', electricalUnit: null})";
            moduleBtnHTML = `<button class="nav-pill-btn" onclick="${moduleAction}">${iconElec} <span class="nav-text">Electrical Supply</span></button>`;
        } else if (appState.module === 'PROTECTION') {
            const moduleAction = "updateState({module: 'PROTECTION', protectionArea: null, protectionEquip: null})";
            moduleBtnHTML = `<button class="nav-pill-btn" onclick="${moduleAction}">${iconProt} <span class="nav-text">Equipment Protection</span></button>`;
        } else if (appState.module === 'DOCS') {
            const moduleAction = "updateState({module: 'DOCS', docsPath: []})";
            moduleBtnHTML = `<button class="nav-pill-btn" onclick="${moduleAction}">${iconDocs} <span class="nav-text">Operation Documents</span></button>`;
        } else if (appState.module === 'ROTA') {
            const moduleAction = "updateState({module: 'ROTA'})";
            moduleBtnHTML = `<button class="nav-pill-btn" onclick="${moduleAction}">${iconCalendar} <span class="nav-text">Shift Rota</span></button>`;
        }

        const backBtnHTML = `<button class="nav-pill-btn" onclick="${backAction}">${iconBack} <span class="nav-text">Back</span></button>`;
        const homeBtnHTML = `<button class="nav-pill-btn" onclick="${homeAction}">${iconHome} <span class="nav-text">Home</span></button>`;

        navContainer.innerHTML = `${backBtnHTML}${moduleBtnHTML}`;
        // navContainer.innerHTML = `${backBtnHTML}${moduleBtnHTML}${homeBtnHTML}`;
    }
}

function renderApp() {
    updateHeader();
    const container = document.getElementById('app-container');
    window.scrollTo({ top: 0, behavior: 'instant' });

    switch (appState.module) {
        case 'HOME': container.innerHTML = renderHome(); break;
        case 'ELECTRICAL': container.innerHTML = renderElectrical(); setupElecSearch(); break;
        case 'PROTECTION': container.innerHTML = renderProtection(); setupProtSearch(); break;
        case 'DOCS': container.innerHTML = renderDocs(); setupDocsSearch(); break;
        case 'ROTA': container.innerHTML = renderRota(); new CalendarApp(); break;
    }
}

// ----------------- HOME -----------------
function renderHome() {
    return `
        <div class="ops-grid-bg"></div>
        <div class="page-head mobile-center">
            <h1 class="page-title font-mono">Integrated Operation Portal</h1>
            <p class="page-subtitle">Select a module to proceed</p>
        </div>
        <div class="item-grid" style="position: relative; z-index: 20; gap: 1.25rem">
            <button class="ui-card" style="flex-direction: column; align-items: normal;" onclick="updateState({module: 'ELECTRICAL'})">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                    <div class="card-icon-box" style="background: color-mix(in srgb, var(--module-electrical) 15%, var(--card)); color: var(--module-electrical); flex-shrink: 0; width: 2.5rem; height: 2.5rem;">${iconElec}</div>
                    <div style="display: flex; flex-direction: column;">
                        <span class="card-title font-mono">Electrical Supply</span>
                        <span class="card-subtitle" style="margin-top:0.1rem;">Equipment Supply Check</span>
                    </div>
                </div>
                <div class="card-desc" style="margin-top:0;">Look up KKS tags and equipments for it's supply switchgear and module location</div>
            </button>
            <button class="ui-card" style="flex-direction: column; align-items: normal;" onclick="updateState({module: 'PROTECTION', protectionArea: null, protectionEquip: null})">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                    <div class="card-icon-box" style="background: color-mix(in srgb, var(--module-protection) 15%, var(--card)); color: var(--module-protection); flex-shrink: 0; width: 2.5rem; height: 2.5rem;">${iconProt}</div>
                    <div style="display: flex; flex-direction: column;">
                        <span class="card-title font-mono">Equipment Protection</span>
                        <span class="card-subtitle" style="margin-top:0.1rem;">Tripping Logics & Conditions</span>
                    </div>
                </div>
                <div class="card-desc" style="margin-top:0;">Browse protection logic for Boiler, Turbine, Offsite and FGD area equipments</div>
            </button>
            <button class="ui-card" style="flex-direction: column; align-items: normal;" onclick="updateState({module: 'DOCS', docsPath: []})">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                    <div class="card-icon-box" style="background: color-mix(in srgb, var(--module-docs) 15%, var(--card)); color: var(--module-docs); flex-shrink: 0; width: 2.5rem; height: 2.5rem;">${iconDocs}</div>
                    <div style="display: flex; flex-direction: column;">
                        <span class="card-title font-mono">Operation Documents</span>
                        <span class="card-subtitle" style="margin-top:0.1rem;">SOPs, LMIs, Schematics etc</span>
                    </div>
                </div>
                <div class="card-desc" style="margin-top:0;">Access the Operation related document library with inline preview</div>
            </button>
            <button class="ui-card" style="flex-direction: column; align-items: normal;" onclick="updateState({module: 'ROTA'})">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                    <div class="card-icon-box" style="background: color-mix(in srgb, var(--module-rota) 15%, var(--card)); color: var(--module-rota); flex-shrink: 0; width: 2.5rem; height: 2.5rem;">${iconCalendar}</div>
                    <div style="display: flex; flex-direction: column;">
                        <span class="card-title font-mono">Shift Rota</span>
                        <span class="card-subtitle" style="margin-top:0.1rem;">Operation Group Shift Rota</span>
                    </div>
                </div>
                <div class="card-desc" style="margin-top:0;">View the 8-day rolling shift schedule for Operation group A , B , C , and D</div>
            </button>
        </div>
    `;
}

// ------------------------------ ELECTRICAL ---------------------------------
function renderElectrical() {
    let units = Object.keys(elecData);

    if (!appState.electricalUnit) {
        return `
            <div class="page-head">
                <h2 class="page-title font-mono">Electrical Supply</h2>
                <p class="page-subtitle">Select a plant area to search equipment's electrical supply</p>
            </div>
            <div class="item-grid">
                ${units.map((unit) => `
                    <button class="ui-card" style="padding: 1rem;" onclick="updateState({electricalUnit: '${unit}'})">
                        <div style="display:flex; align-items:center; gap:0.9rem;">
                            <div class="card-icon-box" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">${iconFactory}</div>
                            <span class="card-title font-mono">${unit}</span>
                        </div>
                    </button>
                `).join('')}
            </div>
        `;
    }

    return `
        <div class="top-bar">
            <div class="page-head">
                <h2 class="page-title font-mono">${appState.electricalUnit}</h2>
                <p class="page-subtitle">Search by KKS or Equipment Name</p>
            </div>
            <div class="search-wrapper">
                ${searchBtn}
                <input type="text" id="elecSearchInput" class="ui-input" placeholder="Type to search (e.g. ACW Pump)..." autocomplete="off">
            </div>
        </div>
        <div class="elec-results-scroll-container" id="elecResults" style="display:none;">
        </div>
    `;
}

function setupElecSearch() {
    const input = document.getElementById('elecSearchInput');
    const container = document.getElementById('elecResults');
    if (!input || !container) return;

    const dataSet = elecData[appState.electricalUnit] || [];

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const words = query.split(/\s+/).filter(Boolean);

        if (words.length === 0) {
            container.style.display = 'none';
            return;
        }

        const matches = dataSet.filter(row => {
            const str = (row[0] + " " + row[1]).toLowerCase();
            return words.every(w => str.includes(w));
        });

        if (matches.length > 0) {
            container.innerHTML = matches.map(row => `
                <div class="list-card">
                    <div class="list-row"><span class="list-label">KKS:</span> <span class="font-mono text-foreground">${row[0]}</span></div>
                    <div class="list-row"><span class="list-label">Equipment:</span> ${row[1]}</div>
                    <div class="list-row"><span class="list-label">Switchgear:</span> ${row[2]}</div>
                    <div class="list-row"><span class="list-label">Module:</span> ${row[3]}</div>
                </div>
            `).join('');
            container.style.display = 'block';
        } else {
            container.innerHTML = `<div class="list-card text-muted">No match found</div>`;
            container.style.display = 'block';
        }
    });
}

// -------------------------- PROTECTION ------------------------------
function renderProtection() {
    if (!appState.protectionArea && !appState.protectionEquip) {
        const areas = Object.keys(protData);
        return `
            <div class="top-bar">
                <div class="page-head">
                    <h2 class="page-title font-mono">Equipment Protection</h2>
                    <p class="page-subtitle">Search globally or select an area below</p>
                </div>
                
                <div class="search-wrapper">
                    ${searchBtn}
                    <input type="text" id="protSearchInput" class="ui-input" placeholder="Search for any equipment..." autocomplete="off">
                    <div id="protDropdown" class="search-dropdown"></div>
                </div>
            </div>

            <div class="item-grid">
                ${areas.map((area) => {
            let iconToUse = iconFactory;
            const aLower = area.toLowerCase();
            if (aLower.includes('boiler')) iconToUse = iconBoiler;
            else if (aLower.includes('turbine')) iconToUse = iconTurbine;
            else if (aLower.includes('fgd')) iconToUse = iconFGD;

            return `
                    <button class="ui-card" style="padding: 1rem;" onclick="updateState({protectionArea: '${area}'})">
                        <div style="display:flex; align-items:center; gap:0.9rem;">
                            <div class="card-icon-box" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">${iconToUse}</div>
                            <span class="card-title font-mono">${area}</span>
                        </div>
                    </button>
                `}).join('')}
            </div>
        `;
    }

    if (appState.protectionArea && !appState.protectionEquip) {
        const equips = Object.keys(protData[appState.protectionArea] || {});
        return `
            <div class="page-head">
                <h2 class="page-title font-mono">${appState.protectionArea}</h2>
                <p class="page-subtitle">Select equipment for it's protection logics</p>
            </div>
            <div class="item-grid">
                ${equips.map((equip) => `
                    <button class="ui-card" style="padding: 0.8rem;" onclick="updateState({protectionEquip: '${equip}'})">
                        <div style="display:flex; align-items:center; gap:0.6rem;">
                            <div class="card-icon-box" style="width: 1.65rem; height: 1.65rem; flex-shrink: 0; background: white; box-shadow: none;">${iconGear}</div>
                            <span class="card-title font-mono" style="text-align:left;">${equip}</span>
                        </div>
                    </button>
                `).join('')}
            </div>
        `;
    }

    // Equipment specific table render
    const protecs = protData[appState.protectionArea][appState.protectionEquip] || [];
    let tbody = '';
    if (protecs.length) {
        tbody = protecs.map(prot => {
            let paramKey = Object.keys(prot).find(k => k.toLowerCase().includes('name') || k.toLowerCase().includes('parameter'));
            let valKey = Object.keys(prot).find(k => k.toLowerCase().includes('value') || k.toLowerCase().includes('condition'));
            let actionKey = Object.keys(prot).find(k => k.toLowerCase().includes('action'));

            let param = paramKey ? prot[paramKey] : '-';
            let val = valKey ? prot[valKey] : '';
            if (actionKey && prot[actionKey]) param += ` <span style="opacity:0.6;font-size:0.8em">(${prot[actionKey]})</span>`;

            let displayVal = Array.isArray(val)
                ? val.map(v => `<div style="margin-bottom:6px;"><span> </span> ${v}</div>`).join('')
                : String(val).trim();

            return `<tr><td style="width:45%;"><strong class="text-foreground">${param}</strong></td><td>${displayVal}</td></tr>`;
        }).join('');
    } else {
        tbody = '<tr><td colspan="2" style="text-align:center;" class="text-muted">No protections found.</td></tr>';
    }

    return `
        <div class="page-head">
            <h2 class="page-title font-mono">${appState.protectionEquip}</h2>
            <div style="display:flex; align-items:center; gap:6px;">
                <p class="page-subtitle font-mono clickable-zone" style="cursor:pointer; text-decoration:underline; text-underline-offset:3px;" onclick="updateState({protectionEquip: null})" title="Go back to ${appState.protectionArea}">Zone: ${appState.protectionArea}</p>
            </div>
        </div>
        <div class="table-wrap">
            <table class="ui-table">
                <thead><tr><th style="width: 60%;">Protection Condition</th><th style="width: 40%;">Logic / Value</th></tr></thead>
                <tbody>${tbody}</tbody>
            </table>
        </div>
    `;
}

function setupProtSearch() {
    const input = document.getElementById('protSearchInput');
    const drop = document.getElementById('protDropdown');
    if (!input) return;

    let flat = [];
    for (let a in protData) {
        for (let e in protData[a]) flat.push({ area: a, equip: e });
    }

    input.addEventListener('input', e => {
        const query = e.target.value.toLowerCase().trim();
        const words = query.split(/\s+/).filter(Boolean);

        if (!words.length) { drop.style.display = 'none'; return; }

        const matches = flat.filter(m => words.every(w => `${m.equip} ${m.area}`.toLowerCase().includes(w))).slice(0, 50);

        if (matches.length > 0) {
            drop.innerHTML = matches.map(m => `
                <div class="search-drop-item" onclick="updateState({protectionArea: '${m.area}', protectionEquip: '${m.equip}'})">
                    <div class="sdi-main font-mono">${m.equip}</div>
                    <div class="sdi-sub">${m.area}</div>
                </div>
            `).join('');
        } else {
            drop.innerHTML = '<div class="search-drop-item text-muted text-center" style="cursor:default">No equipment found</div>';
        }
        drop.style.display = 'block';
    });

    document.addEventListener('click', e => {
        if (!input.contains(e.target) && !drop.contains(e.target)) drop.style.display = 'none';
    });
}

// ------------------------------ DOCUMENTS --------------------------------
function formatName(n) { return n.replace(/\.[^/.]+$/, ""); }

function renderDocs() {
    // 1. Loading State Check (Only shown if completely empty)
    if (isDocsLoading && docData.length === 0) {
        return `
            <div class="page-head">
                <h2 class="page-title font-mono">Operation Documents</h2>
                <p class="page-subtitle">Looking for new updates...</p>
            </div>
            <div style="text-align:center; padding: 4rem 1rem; color: var(--muted-foreground);">
                <div style="margin-bottom: 1rem;">
                    <svg class="spin-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                </div>
                Syncing updates please wait for a moment...
            </div>
        `;
    }

    // 2. Error State Check
    if (docsError && docData.length === 0) {
        return `
            <div class="page-head">
                <h2 class="page-title font-mono">Operation Documents</h2>
                <p class="page-subtitle text-muted">Sync Failed</p>
            </div>
            <div style="text-align:center; color: var(--module-electrical); padding: 2rem;">
                <strong>Connection Error:</strong> ${docsError}
            </div>
        `;
    }

    // 3. Normal Render
    const currentStr = appState.docsPath.join('/');
    const isRoot = appState.docsPath.length === 0;

    let subF = new Set();
    let files = [];

    if (isRoot) {
        docData.forEach(d => { if (d.path.length > 0) subF.add(d.path[0]); });
    } else {
        docData.forEach(d => {
            const pStr = d.path.join('/');
            if (pStr.startsWith(currentStr + '/') && d.path.length > appState.docsPath.length) {
                subF.add(d.path[appState.docsPath.length]);
            } else if (pStr === currentStr) {
                files.push(d);
            }
        });
    }

    let headText = isRoot ? 'Operation Documents' : appState.docsPath[appState.docsPath.length - 1];

    let breadcrumbHTML = '';
    if (!isRoot) {
        let pathLinks = `<span style="cursor:pointer; color:var(--muted-foreground); transition:color 0.2s;" onmouseover="this.style.color='var(--foreground)'" onmouseout="this.style.color='var(--muted-foreground)'" onclick="updateState({docsPath: []})">Library</span>`;
        let curPathArr = [];
        appState.docsPath.forEach((part, idx) => {
            curPathArr.push(part);
            let pStr = JSON.stringify(curPathArr).replace(/"/g, "&quot;");
            if (idx === appState.docsPath.length - 1) {
                pathLinks += ` <span style="color:var(--muted-foreground); margin:0 0.3rem;">/</span> <span style="color:var(--muted-foreground);">${part}</span>`;
            } else {
                pathLinks += ` <span style="color:var(--muted-foreground); margin:0 0.3rem;">/</span> <span style="cursor:pointer; color:var(--muted-foreground); transition:color 0.2s;" onmouseover="this.style.color='var(--foreground)'" onmouseout="this.style.color='var(--muted-foreground)'" onclick='updateState({docsPath: ${pStr}})'>${part}</span>`;
            }
        });
        breadcrumbHTML = `<div class="page-subtitle">${pathLinks}</div>`;
    }

    let searchHTML = isRoot ? `
        <div class="search-wrapper">
            ${searchBtn}
            <input type="text" id="docsSearchInput" class="ui-input" placeholder="Search for any document in library..." autocomplete="off">
            <div id="docsDropdown" class="search-dropdown"></div>
        </div>
    ` : '';

    let content = '';
    [...subF].sort().forEach(folder => {
        content += `
            <button class="ui-card" style="padding: 1rem;" onclick="docsNavigate('${folder}')">
                <div style="display:flex; align-items:center; gap:0.9rem;">
                    <div class="card-icon-box" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">${iconFolder}</div>
                    <span class="card-title font-mono" style="text-align:left;">${folder}</span>
                </div>
            </button>
        `;
    });

    files.forEach(f => {
        const url = `https://drive.google.com/file/d/${f.id}/preview`;
        const cn = formatName(f.name).replace(/'/g, "\\'");
        content += `
            <button class="ui-card" style="padding: 0.8rem;" onclick="openDocument('${url}', '${cn}')">
                <div style="display:flex; align-items:center; gap:0.6rem;">
                    <div class="card-icon-box" style="width: 1.65rem; height: 1.65rem; flex-shrink: 0; background: white; box-shadow: none;">${iconFile}</div>
                    <span class="card-title font-mono" style="font-size:1rem; text-align: left;">${formatName(f.name)}</span>
                </div>
            </button>
        `;
    });

    if (!subF.size && !files.length) {
        content = '<div class="text-muted">No item in this library</div>';
    }

    return `
        <div class="top-bar">
            <div class="page-head">
                <h2 class="page-title font-mono">${headText}</h2>
                ${breadcrumbHTML}
                ${isRoot ? '<p class="page-subtitle">Search globally or select a folder</p>' : ''}
            </div>
            ${searchHTML}
        </div>
        <div class="item-grid">
            ${content}
        </div>
    `;
}

function setupDocsSearch() {
    const input = document.getElementById('docsSearchInput');
    const drop = document.getElementById('docsDropdown');
    if (!input) return;

    input.addEventListener('input', e => {
        const words = e.target.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
        if (!words.length) { drop.style.display = 'none'; return; }

        const matches = docData.filter(d => words.every(w => d.name.toLowerCase().includes(w))).slice(0, 30);
        if (matches.length > 0) {
            drop.innerHTML = matches.map(d => {
                const u = `https://drive.google.com/file/d/${d.id}/preview`;
                const n = formatName(d.name).replace(/'/g, "\\'");
                return `
                    <div class="search-drop-item" onclick="openDocument('${u}', '${n}')">
                        <div class="sdi-main">${formatName(d.name)}</div>
                        <div class="sdi-sub">Path: ${d.path.join(' / ')}</div>
                    </div>
                `;
            }).join('');
        } else {
            drop.innerHTML = '<div class="search-drop-item text-muted text-center" style="cursor:default">No match in this library</div>';
        }
        drop.style.display = 'block';
    });

    document.addEventListener('click', e => {
        if (!input.contains(e.target) && !drop.contains(e.target)) drop.style.display = 'none';
    });
}

function docsNavigate(folder) { updateState({ docsPath: [...appState.docsPath, folder] }); }
function docsGoBack() { const np = [...appState.docsPath]; np.pop(); updateState({ docsPath: np }); }

function openDocument(url, title) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('docViewer').src = url;
    document.getElementById('docModal').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Allow pinch-zoom inside the iframe by unlocking the parent viewport
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes");
}

function closeDocument() {
    document.getElementById('docModal').style.display = 'none';
    document.getElementById('docViewer').src = '';
    document.body.style.overflow = 'auto';

    // Lock the viewport again when returning to the app shell
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
}

// ------------------------------ SHIFT ROTA -------------------------------
function renderRota() {
    return `
        <div class="page-head">
            <h2 class="page-title font-mono">Shift Rota</h2>
            <p class="page-subtitle">Select group to view the shift schedule</p>
        </div>
        
        <div class="group-tabs">
          <button class="group-tab font-mono active" data-group="A">Group A</button>
          <button class="group-tab font-mono" data-group="B">Group B</button>
          <button class="group-tab font-mono" data-group="C">Group C</button>
          <button class="group-tab font-mono" data-group="D">Group D</button>
        </div>

        <div class="calendar-card">
          <div class="calendar-header">
            <h2 class="calendar-title font-mono" id="calendar-title"></h2>
            <div class="navigation-buttons">
              <button class="nav-button" id="prev-month" aria-label="Previous month">${iconBack}</button>
              <button class="nav-button" id="next-month" aria-label="Next month" style="transform: rotate(180deg)">${iconBack}</button>
            </div>
          </div>

          <div class="calendar-content">
            <div class="weekdays-header font-mono">
              <div class="weekday">Sun</div><div class="weekday">Mon</div><div class="weekday">Tue</div>
              <div class="weekday">Wed</div><div class="weekday">Thu</div><div class="weekday">Fri</div><div class="weekday">Sat</div>
            </div>
            <div class="calendar-grid" id="calendar-grid"></div>
          </div>
        </div>
    `;
}

// SHIFT ROTA LOGIC

const DateUtils = {
    formatMonthYear: (date) => date.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    formatDay: (date) => date.getDate(),
    addMonths: (date, months) => { const r = new Date(date); r.setMonth(r.getMonth() + months); return r; },
    subMonths: (date, months) => DateUtils.addMonths(date, -months),
    startOfMonth: (date) => new Date(date.getFullYear(), date.getMonth(), 1),
    endOfMonth: (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0),
    startOfWeek: (date) => { const r = new Date(date); const day = r.getDay(); return new Date(r.setDate(r.getDate() - day)); },
    endOfWeek: (date) => { const r = new Date(date); const day = r.getDay(); return new Date(r.setDate(r.getDate() + (6 - day))); },
    isSameMonth: (date1, date2) => date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear(),
    isToday: (date) => date.toDateString() === new Date().toDateString(),
    eachDayOfInterval: (start, end) => {
        const dates = []; let current = new Date(start);
        while (current <= end) { dates.push(new Date(current)); current.setDate(current.getDate() + 1); }
        return dates;
    },
    differenceInCalendarDays: (date1, date2) => {
        const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    },
    getDay: (date) => date.getDay(),
};

const ShiftLogic = {
    SHIFT_TYPES: { MORNING: "MORNING", EVENING: "EVENING", NIGHT: "NIGHT", WEEKLY_OFF: "WEEKLY_OFF", GENERAL: "GENERAL" },
    SHIFT_CYCLE: [
        { name: "B1", type: "EVENING" }, { name: "B2", type: "EVENING" },
        { name: "C1", type: "NIGHT" }, { name: "C2", type: "NIGHT" },
        { name: "O", type: "WEEKLY_OFF" }, { name: "G", type: "GENERAL" },
        { name: "A1", type: "MORNING" }, { name: "A2", type: "MORNING" }
    ],
    REFERENCE_DATE: new Date("2025-06-27T00:00:00Z"),
    REFERENCE_SHIFT_INDICES: { A: 2, B: 4, C: 6, D: 0 },
    getShiftForDate: (date, group) => {
        const daysDifference = DateUtils.differenceInCalendarDays(date, ShiftLogic.REFERENCE_DATE);
        const cycleIndex = (ShiftLogic.REFERENCE_SHIFT_INDICES[group] + daysDifference) % ShiftLogic.SHIFT_CYCLE.length;
        const positiveCycleIndex = (cycleIndex + ShiftLogic.SHIFT_CYCLE.length) % ShiftLogic.SHIFT_CYCLE.length;
        let calculatedShift = ShiftLogic.SHIFT_CYCLE[positiveCycleIndex];
        if (calculatedShift.type === "GENERAL" && DateUtils.getDay(date) === 0) return { name: "O", type: "WEEKLY_OFF" };
        return calculatedShift;
    },
};

const RotaIcons = {
    Sun: `<svg class="shift-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="m12 2 0 2"/><path d="m12 20 0 2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="m2 12 2 0"/><path d="m20 12 2 0"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    Sunset: `<svg class="shift-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>`,
    Moon: `<svg class="shift-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    Coffee: `<svg class="shift-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>`,
    Briefcase: `<svg class="shift-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
};

class CalendarApp {
    constructor() {
        this.currentDate = new Date();
        this.selectedGroup = "A";
        this.initializeElements();
        this.setupEventListeners();
        this.render();
    }

    initializeElements() {
        this.calendarTitle = document.getElementById("calendar-title");
        this.calendarGrid = document.getElementById("calendar-grid");
        this.prevButton = document.getElementById("prev-month");
        this.nextButton = document.getElementById("next-month");
        this.groupTabs = document.querySelectorAll(".group-tab");
    }

    setupEventListeners() {
        if (this.prevButton) this.prevButton.addEventListener("click", () => { this.currentDate = DateUtils.subMonths(this.currentDate, 1); this.render(); });
        if (this.nextButton) this.nextButton.addEventListener("click", () => { this.currentDate = DateUtils.addMonths(this.currentDate, 1); this.render(); });
        this.groupTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                this.selectedGroup = tab.dataset.group;
                this.groupTabs.forEach(t => t.classList.toggle("active", t.dataset.group === this.selectedGroup));
                this.render();
            });
        });
    }

    createDayCard(day) {
        const shift = ShiftLogic.getShiftForDate(day, this.selectedGroup);
        const dayCard = document.createElement("div");
        dayCard.className = "day-card";
        if (!DateUtils.isSameMonth(day, this.currentDate)) dayCard.classList.add("other-month");
        else dayCard.classList.add(`shift-${shift.type.toLowerCase().replace("_", "-")}`);
        if (DateUtils.isToday(day)) dayCard.classList.add("today");

        const iconMap = { MORNING: RotaIcons.Sun, EVENING: RotaIcons.Sunset, NIGHT: RotaIcons.Moon, WEEKLY_OFF: RotaIcons.Coffee, GENERAL: RotaIcons.Briefcase };

        dayCard.innerHTML = `
        <div class="day-number">${DateUtils.formatDay(day)}</div>
        <div class="shift-info">${iconMap[shift.type] || ""} <span class="shift-name">${shift.name}</span></div>
    `;
        return dayCard;
    }

    render() {
        if (!this.calendarTitle || !this.calendarGrid) return;
        this.calendarTitle.textContent = DateUtils.formatMonthYear(this.currentDate);
        this.calendarGrid.innerHTML = "";
        DateUtils.eachDayOfInterval(DateUtils.startOfWeek(DateUtils.startOfMonth(this.currentDate)), DateUtils.endOfWeek(DateUtils.endOfMonth(this.currentDate)))
            .forEach(day => this.calendarGrid.appendChild(this.createDayCard(day)));
    }
}
