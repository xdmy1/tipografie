// Servicii data - obiectul JSON cu toate serviciile
const servicesData = [
    {
        id: 1,
        nume: "Cărți de Vizită",
        descriere_scurta: "Cărți de vizită profesionale, personalizate pentru afacerea ta.",
        descriere_detaliata: "Creăm cărți de vizită care fac o impresie de durată. Folosim materiale premium și tehnologii de printare moderne pentru a obține rezultate impecabile. Oferim o gamă largă de opțiuni: hârtie de diferite gramaje, finisaje speciale (mat, lucios, soft-touch), stanțare personalizată și multe altele. Fiecare carte de vizită este creată cu atenție la detalii și reflectă profesionalismul afacerii tale. Timpul de execuție standard este de 2-3 zile lucrătoare, iar pentru comenzile urgente oferim serviciu express în 24 de ore.",
        imagine_url: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Carti+de+Vizita"
    },
    {
        id: 2,
        nume: "Flyere și Pliante",
        descriere_scurta: "Materiale promoționale de impact pentru campaniile tale de marketing.",
        descriere_detaliata: "Flyerele și pliantele sunt instrumente esențiale pentru promovarea afacerii tale. Echipa noastră de designeri experimentați te ajută să creezi materiale promoționale care atrag atenția și transmit mesajul dorit. Oferim printare pe hârtie de calitate superioară, în diverse formate (A5, A4, DL, personalizat) și finisaje (mat, lucios, UV spot). Pliantele pot fi pliate în diferite moduri: în două, în trei, acordeon sau tip broșură. Serviciile noastre includ și consultanța pentru design și layout, pentru a maximiza impactul materialelor tale promoționale.",
        imagine_url: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Flyere+si+Pliante"
    },
    {
        id: 3,
        nume: "Meniuri Restaurant",
        descriere_scurta: "Meniuri elegante și durabile pentru restaurante și cafenele.",
        descriere_detaliata: "Un meniu bine conceput este prima impresie pe care o lasă restaurantul tău asupra clienților. Realizăm meniuri personalizate care reflectă stilul și atmosfera localului tău. Folosim materiale rezistente la uzură și umiditate, perfecte pentru utilizarea intensă. Oferim diverse opțiuni de finisare: laminare, plastifiere, spiral binding sau broșare. Meniurile pot fi realizate în orice format dorit, cu design personalizat care să se potrivească cu identitatea vizuală a restaurantului. De asemenea, oferim servicii de actualizare rapidă a meniurilor pentru schimbări sezoniere sau modificări de prețuri.",
        imagine_url: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Meniuri+Restaurant"
    },
    {
        id: 4,
        nume: "Bannere Publicitare",
        descriere_scurta: "Bannere mari de exterior și interior pentru maximizarea vizibilității.",
        descriere_detaliata: "Bannerele publicitare sunt soluția perfectă pentru a-ți promova afacerea sau evenimentul la scară largă. Realizăm bannere de toate dimensiunile, de la cele mici pentru interior până la cele mari pentru exterior. Folosim materiale rezistente la intemperii: mesh, PVC, vinyl și textile speciale. Bannerele noastre sunt rezistente la UV, apă și vânt, fiind perfecte pentru utilizare exterioară pe termen lung. Oferim sistem complet: design, printare și chiar montare la locația dorită. Toate bannerele vin cu ojete metalice și întăriri pentru o durabilitate sporită. Timpul de execuție variază în funcție de dimensiune, dar de obicei livrăm în 3-5 zile lucrătoare.",
        imagine_url: "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Bannere+Publicitare"
    },
    {
        id: 5,
        nume: "Agende Personalizate",
        descriere_scurta: "Agende corporate și personale cu design unic și branding personalizat.",
        descriere_detaliata: "Agendele personalizate sunt cadouri corporate perfecte și instrumente de organizare de calitate superioară. Creăm agende cu design complet personalizat, de la coperta până la paginile interioare. Oferim diverse opțiuni de copertă: piele ecologică, carton rigid, plastic dur sau textile. Interiorul poate fi adaptat specific nevoilor tale: kalendar lunar/săptămânal, secțiuni pentru notițe, informații de contact și multe altele. Fiecare agendă poate fi personalizată cu logo-ul companiei, mesaje inspiraționale sau designuri artistice. Realizăm agende în diverse formate standard sau la dimensiuni personalizate. Toate agendele vin cu binding de calitate profesională pentru o deschidere perfectă și durabilitate sporită.",
        imagine_url: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Agende+Personalizate"
    },
    {
        id: 6,
        nume: "Etichete Autocolante",
        descriere_scurta: "Etichete și autocolante pentru produse, ambalaje și promovare.",
        descriere_detaliata: "Etichetele autocolante sunt esențiale pentru branding-ul produselor și organizarea eficientă. Realizăm etichete pe materiale de cea mai bună calitate: hârtie, vinyl, polyester și materiale speciale rezistente la apă. Oferim diverse forme: rotunde, pătrate, ovale sau forme personalizate pentru stanțare. Etichetele pot fi printate în orice combinație de culori, inclusiv cu finisaje speciale: folie metalică, hologram, UV spot sau embossing. Avem echipamente pentru tipar digital și offset, ceea ce ne permite să realizăm eficient atât tiraje mici cât și cele mari. Toate etichetele vin cu adeziv de calitate profesională, potrivit pentru diverse suprafețe și aplicații. Oferim și servicii de aplicare automată pentru cantități mari.",
        imagine_url: "https://via.placeholder.com/600x400/06B6D4/FFFFFF?text=Etichete+Autocolante"
    },
    {
        id: 7,
        nume: "Invitații Nuntă",
        descriere_scurta: "Invitații elegante pentru nunta perfectă, personalizate în cel mai mic detaliu.",
        descriere_detaliata: "Nunta ta merită invitații care să reflecte frumusețea și unicitatea momentului. Echipa noastră specializată în papetărie de lux creează invitații de nuntă care lasă o impresie de neuitat. Oferim o gamă completă de servicii: de la consultanța în design până la produsul finit. Folosim hârtii fine, cartonase de lux și finisaje premium: embossing, folie aurită/argintată, perforații decorative și multe altele. Fiecare invitație poate fi completată cu elemente suplimentare: plicuri colorate, pecețe decorative, panglici sau cordoane. Realizăm de asemenea meniul nunții, cartele pentru masă, mulțumiri și orice alt element de papetărie necesar pentru evenimentul tău special. Consultanța pentru design este gratuită, iar timpul de execuție este de 7-10 zile lucrătoare.",
        imagine_url: "https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Invitatii+Nunta"
    },
    {
        id: 8,
        nume: "Printuri Canvas",
        descriere_scurta: "Fotografii și artwork-uri imprimate pe canvas de calitate muzeală.",
        descriere_detaliata: "Transformă fotografiile și lucrările tale artistice în opere de artă durabile cu printurile noastre pe canvas. Folosim canvas de calitate muzeală și cerneluri pigmentate care garantează culori vibrante și durabilitate pe termen lung. Oferim diverse texturi de canvas: fin, mediu sau grosier, în funcție de efectul dorit. Printurile pot fi realizate în orice dimensiune, de la formate mici pentru cadouri până la dimensiuni mari pentru decorațiuni spectaculoase. Fiecare print este întins pe ramă de lemn de calitate și vine gata de agățat. Oferim și servicii de retușare și optimizare a imaginilor pentru a obține cele mai bune rezultate. Printurile pe canvas sunt rezistente la decolorare și umiditate, fiind perfecte atât pentru casă cât și pentru spații publice.",
        imagine_url: "https://via.placeholder.com/600x400/F97316/FFFFFF?text=Printuri+Canvas"
    },
    {
        id: 9,
        nume: "Calendare",
        descriere_scurta: "Calendare personalizate pentru promovarea afacerii sau utilizare personală.",
        descriere_detaliata: "Calendarele personalizate sunt instrumente de marketing de lungă durată și cadouri practice. Realizăm toate tipurile de calendare: de perete, de birou, de buzunar, magneti frigorifer și multe altele. Fiecare calendar poate fi complet personalizat cu fotografiile, logo-ul și informațiile tale. Folosim hârtie de calitate premium și bindinguri profesionale pentru durabilitate maximă. Calendarele de perete vin cu spirală metalică și sistem de agățare robust. Cele de birou au suport stabil și design ergonomic. Oferim layout-uri standard sau design complet personalizat în funcție de nevoile tale. Calendarele sunt perfecte pentru promovarea de lungă durată a afacerii tale, fiind utile și apreciate de clienți tot timpul anului. Livrarea se face în 5-7 zile lucrătoare pentru comenzile standard.",
        imagine_url: "https://via.placeholder.com/600x400/84CC16/FFFFFF?text=Calendare"
    },
    {
        id: 10,
        nume: "Broșuri",
        descriere_scurta: "Broșuri informative și promoționale pentru prezentarea afacerii tale.",
        descriere_detaliata: "Broșurile sunt instrumentele perfecte pentru prezentarea detaliată a produselor și serviciilor tale. Creăm broșuri care combină informația utilă cu designul atractiv pentru a capta și menține atenția cititorului. Oferim diverse formate și stiluri: de la broșuri simple de 4 pagini până la cataloage complexe de peste 100 de pagini. Folosim hârtia de calitate premium și finisaje profesionale: laminare, UV spot, embossing pentru a face broșura ta să iasă în evidență. Bindingul poate fi realizat prin capsare, spirală metalică, lipire perfectă (perfect binding) sau cusătură în funcție de numărul de pagini și utilizarea dorită. Echipa noastră oferă consultanță completă pentru layout și structura conținutului pentru a maximiza impactul broșurii tale. Realizăm broșuri în orice limbă și oferim servicii de traducere dacă este necesar.",
        imagine_url: "https://via.placeholder.com/600x400/6366F1/FFFFFF?text=Brosuri"
    }
];

// Funcție pentru scroll către secțiunea servicii
function scrollToServices() {
    const servicesSection = document.getElementById('servicii');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Funcție pentru generarea cardurilor de servicii pe index.html
function generateServiceCards() {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer) return;

    let servicesHTML = '';
    
    servicesData.forEach(service => {
        servicesHTML += `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div class="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                    <img src="${service.imagine_url}" alt="${service.nume}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-3 text-gray-800">${service.nume}</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">${service.descriere_scurta}</p>
                    <a href="serviciu.html?id=${service.id}" class="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        Vezi Detalii
                        <svg class="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `;
    });
    
    servicesContainer.innerHTML = servicesHTML;
}

// Funcție pentru obținerea parametrilor URL
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Funcție pentru încărcarea detaliilor serviciului pe serviciu.html
function loadServiceDetails() {
    const serviceId = getURLParameter('id');
    if (!serviceId) {
        // Dacă nu există ID, redirecționează către pagina principală
        window.location.href = 'index.html';
        return;
    }

    // Găsește serviciul după ID
    const service = servicesData.find(s => s.id == serviceId);
    if (!service) {
        // Dacă serviciul nu există, redirecționează către pagina principală
        window.location.href = 'index.html';
        return;
    }

    // Actualizează elementele paginii cu datele serviciului
    document.getElementById('page-title').textContent = `${service.nume} - Tipografie Chișinău`;
    document.getElementById('service-title').textContent = service.nume;
    document.getElementById('breadcrumb-current').textContent = service.nume;
    document.getElementById('service-image').src = service.imagine_url;
    document.getElementById('service-image').alt = service.nume;
    
    // Formatează descrierea detaliată ca paragrafuri separate
    const descriptionContainer = document.getElementById('service-description');
    const paragraphs = service.descriere_detaliata.split('. ').filter(p => p.trim().length > 0);
    descriptionContainer.innerHTML = paragraphs.map(paragraph => {
        // Adaugă punctul înapoi dacă nu există deja
        const finalParagraph = paragraph.endsWith('.') ? paragraph : paragraph + '.';
        return `<p>${finalParagraph}</p>`;
    }).join('');

    // Generează servicii similare (exclude serviciul curent)
    generateSimilarServices(serviceId);
}

// Funcție pentru generarea serviciilor similare
function generateSimilarServices(currentServiceId) {
    const similarServicesContainer = document.getElementById('similar-services');
    if (!similarServicesContainer) return;

    // Obține 3 servicii aleatorii, excluzând serviciul curent
    const otherServices = servicesData.filter(s => s.id != currentServiceId);
    const shuffled = otherServices.sort(() => 0.5 - Math.random());
    const similarServices = shuffled.slice(0, 3);

    let servicesHTML = '';
    
    similarServices.forEach(service => {
        servicesHTML += `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div class="h-40 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                    <img src="${service.imagine_url}" alt="${service.nume}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div class="p-6">
                    <h4 class="text-lg font-bold mb-2 text-gray-800">${service.nume}</h4>
                    <p class="text-gray-600 mb-4 text-sm">${service.descriere_scurta}</p>
                    <a href="serviciu.html?id=${service.id}" class="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                        Vezi Detalii
                    </a>
                </div>
            </div>
        `;
    });
    
    similarServicesContainer.innerHTML = servicesHTML;
}

// Inițializare când DOM-ul este încărcat
document.addEventListener('DOMContentLoaded', function() {
    // Verifică dacă suntem pe pagina principală și generează cardurile de servicii
    if (document.getElementById('services-container')) {
        generateServiceCards();
    }
    
    // Verifică dacă suntem pe pagina de serviciu și încarcă detaliile
    if (document.getElementById('service-title') && window.location.pathname.includes('serviciu.html')) {
        loadServiceDetails();
    }
});

// Expune funcțiile globale pentru utilizare în HTML
window.scrollToServices = scrollToServices;
window.loadServiceDetails = loadServiceDetails;