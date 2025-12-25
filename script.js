// Servicii data - obiectul JSON cu toate serviciile
const servicesData = [
    {
        id: 1,
        nume: "Cană personalizată",
        descriere_scurta: "Căni personalizate de înaltă calitate cu designul dorit.",
        descriere_detaliata: "Creăm căni personalizate care fac cadouri perfecte sau articole promoționale de impact. Folosim tehnologii moderne de printare pe ceramică pentru a obține rezultate durabile și rezistente la spălare. Oferim căni în diverse forme și mărimi: clasice, mari, cu mâner special sau termosensibile. Personalizarea poate include fotografii, logo-uri, text sau designuri artistice. Fiecare cană este tratată cu finisaje speciale pentru a rezista la utilizarea zilnică. Timpul de execuție standard este de 2-3 zile lucrătoare, iar calitatea printului este garantată să reziste în timp.",
        imagine_url: "https://argoprint.ro/wp-content/uploads/2021/12/cana-color-personalizata.jpg"
    },
    {
        id: 2,
        nume: "Tricou, Hanorac, Body",
        descriere_scurta: "Îmbrăcăminte personalizată de calitate superioară pentru toate vârstele.",
        descriere_detaliata: "Realizăm personalizări pe îmbrăcăminte folosind cele mai moderne tehnici: transfer termic, broderie, serigrafie și print direct pe textil. Lucrăm cu tricouri, hanorace și body-uri din materiale de calitate premium - bumbac 100%, blend-uri confortabile și materiale eco-friendly. Oferim o gamă largă de culori și mărimi, de la copii la adulți. Designurile pot include logo-uri, fotografii, text sau grafica artistică. Fiecare articol este tratat cu atenție pentru a asigura durabilitatea printului și confortul în purtare. Personalizările sunt rezistente la spălare și nu se crăpă în timp.",
        imagine_url: "https://gomagcdn.ro/domains2/specialgift.ro/files/product/large/tricou-personalizat-cu-text-fac-ce-vreau-777230.png"
    },
    {
        id: 3,
        nume: "Cristale personalizate",
        descriere_scurta: "Cristale elegante gravate cu mesaje și imagini personale.",
        descriere_detaliata: "Cristalele personalizate sunt cadouri luxoase și memorabile pentru orice ocazie specială. Folosim tehnologia de gravare cu laser pentru a crea imagini 3D în interiorul cristalului sau gravuri fine pe suprafață. Oferim diverse forme: cuburi, piramide, inimi, trofee sau forme personalizate. Cristalele pot conține fotografii, text comemorativ, logo-uri corporate sau desene artistice. Fiecare piesă vine cu iluminare LED pentru a evidenția frumusețea gravurii. Cristalele sunt realizate din sticlă optică de înaltă calitate și vin în ambalaj elegant cadou. Perfecte pentru premii, aniversări, nunți sau evenimente corporate.",
        imagine_url: "https://gomagcdn.ro/domains/intaglio.ro/files/product/original/cristale-personalizate-cu-nume-cadouri-elegante-pentru-amintiri-de-neuitat-005469.jpg"
    },
    {
        id: 4,
        nume: "Inimă lemn personalizată",
        descriere_scurta: "Inimi din lemn natural gravate cu mesaje romantice și personale.",
        descriere_detaliata: "Inimile din lemn personalizate sunt cadouri romantice și natural autentice. Folosim lemn de calitate superioară - fag, stejar sau plop - pentru a crea piese durabile și frumoase. Gravarea cu laser permite detalii fine: nume, date importante, mesaje de dragoste sau desenuri delicate. Oferim diverse dimensiuni și finisaje: natural, lacuit sau cu ulei de lemn pentru protecție. Fiecare inimă poate fi personalizată complet și vine cu sistem de agățare sau suport. Perfecte pentru Ziua Îndrăgostiților, aniversări, logodne sau orice moment special. Lemnul natural oferă o căldură și autenticitate pe care materialele sintetice nu o pot egala.",
        imagine_url: "https://m.media-amazon.com/images/I/81j7u3pF68S._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 5,
        nume: "Brelocuri personalizate",
        descriere_scurta: "Brelocuri practice și elegante pentru chei, personalizate după preferințe.",
        descriere_detaliata: "Brelocurile personalizate sunt accesorii practice care pot deveni adevărate obiecte de colecție. Realizăm brelocuri din diverse materiale: metal, plastic rezistent, lemn, piele sau acrilic transparent. Fiecare breloc poate fi personalizat cu gravare, printare sau broderie în funcție de material. Oferim forme clasice sau personalizate: rotunde, pătrate, siluete speciale sau logo-uri corporative. Brelocurile metalice pot avea finisaje speciale: nichel, auriu, antic sau colorat. Cele din lemn sunt tratate pentru durabilitate, iar cele din acrilic permit efecte speciale cu LED. Perfecte pentru promovare, cadouri personale sau accesorii zilnice.",
        imagine_url: "https://www.stilco.md/wp-content/uploads/2020/09/personalized-wooden-key-chain-rectangle-500x500-500x450-1.jpg"
    },
    {
        id: 6,
        nume: "Magneti personalizați",
        descriere_scurta: "Magneti decorativi și funcționali pentru frigider, personalizați cu imagini.",
        descriere_detaliata: "Magnetii personalizați sunt decorațiuni practice care aduc zâmbete zilnice. Realizăm magneti de frigider folosind materiale de calitate: suprafață printabilă HD și magnet puternic care susține documente și fotografii. Oferim diverse forme și dimensiuni: pătrate, rotunde, ovale sau forme personalizate stanțate. Printarea se face în culori vibrante, rezistente la umiditate și temperatură. Magnetii pot conține fotografii de familie, peisaje, logo-uri sau designuri artistice. Suprafața este tratată cu finisaj special pentru protecție împotriva uzurii. Perfecti pentru păstrarea amintirilor vizibile și pentru promovarea afacerii în casele clienților.",
        imagine_url: "https://m.media-amazon.com/images/I/71OhoK9xm-L._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 7,
        nume: "Pietre personalizate",
        descriere_scurta: "Pietre decorative gravate pentru grădină sau interior, cu mesaje speciale.",
        descriere_detaliata: "Pietrele personalizate sunt decorațiuni naturale și durabile pentru grădini, memoriale sau colecții. Folosim pietre naturale de calitate - granit, marmură sau pietre riverane - pentru gravare cu laser sau sablare. Fiecare piatră poate conține nume, date, mesaje inspiraționale sau simboluri artistice. Oferim diverse dimensiuni și forme naturale sau prelucrate geometric. Gravarea este profundă și rezistentă la intemperii, perfectă pentru utilizare exterioară pe termen lung. Pietrele pot fi folosite pentru marcarea unor locuri speciale, memoriale, decorațiuni de grădină sau cadouri simbolice. Fiecare piesă este unică prin forma și textura naturală a pietrei.",
        imagine_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXzHSLydieScY4nBSJ0YmuEOnCRiIlCx84A&s"
    },
    {
        id: 8,
        nume: "Covoraș mouse personalizat",
        descriere_scurta: "Covorașe pentru mouse de birou, personalizate cu imagini și designuri.",
        descriere_detaliata: "Covorașele pentru mouse personalizate transformă spațiul de lucru în unul inspirațional și funcțional. Folosim materiale de înaltă calitate: suprafață textilă fină pentru precizie maximă și bază din cauciuc antiderapant. Printarea se face în rezoluție înaltă pentru detalii cristaline și culori vibrante. Oferim dimensiuni standard sau personalizate pentru orice tip de mouse. Suprafața este tratată pentru a rezista la uzură intensă și pentru curățare ușoară. Marginile sunt cusute pentru a preveni deșirarea. Perfecte pentru personalizarea biroului, promovarea brandului sau cadouri pentru pasionații de tehnologie. Designurile pot include fotografii, logo-uri, texte motivaționale sau arte digitale.",
        imagine_url: "https://printify.com/wp-content/uploads/2023/06/Why-Create-and-Sell-Custom-Mouse-Pads-e1686214558706.jpg"
    },
    {
        id: 9,
        nume: "Pixuri personalizate",
        descriere_scurta: "Pixuri elegante cu gravare sau print personalizat pentru uz profesional.",
        descriere_detaliata: "Pixurile personalizate sunt accesorii profesionale care lasă o impresie durabilă. Oferim pixuri de calitate superioară din metal, plastic premium sau lemn, cu mecanisme de înaltă precizie. Personalizarea se poate face prin gravare laser, print UV sau broderie pe husa de piele. Fiecare pix poate conține nume, logo-uri corporative, mesaje motivaționale sau contacte de afaceri. Oferim diverse stiluri: pixuri clasice, moderne, de lux sau eco-friendly. Cerneala este de calitate premium pentru o scriere fluidă și durabilă. Pixurile vin în ambalaj elegant și pot fi livrate în seturi cadou. Perfecte pentru evenimente corporate, cadouri personale sau promovarea brandului în mediul profesional.",
        imagine_url: "https://www.dayspringpens.com/cdn/shop/articles/Featured_Image_Multiple_Pens_with_Journal_42c1449a-1161-468e-8778-436b83b9343f.webp?v=1760366882"
    },
    {
        id: 10,
        nume: "Diplome personalizate",
        descriere_scurta: "Diplome oficiale și certificate pe hârtie de lux cu design profesional.",
        descriere_detaliata: "Diplomele personalizate sunt documente oficiale care celebrează realizările și succesele importante. Realizăm diplome pe hârtie de lux, cu gramaj premium și finisaje profesionale. Folosim tehnologii de printare de înaltă calitate pentru texte clare și grafică impecabilă. Oferim templates clasice sau design complet personalizat cu logo-uri instituționale, sigilii oficiale și elemente decorative. Fiecare diplomă poate include folio metalică, embossing sau timbru uscat pentru autenticitate. Textul poate fi în orice limbă și formatat conform standardelor academice sau corporative. Diplomele pot fi livrate cu ramă elegantă sau tub protector. Perfecte pentru instituții de învățământ, companii sau organizații care doresc să recunoască meritele participanților.",
        imagine_url: "https://candypaperdesigns.com/cdn/shop/files/MinidiplomaTable01-Web.jpg?v=1709565095&width=1445"
    },
    {
        id: 11,
        nume: "Ceas personalizat",
        descriere_scurta: "Ceasuri de perete sau birou personalizate cu fotografii și designuri unice.",
        descriere_detaliata: "Ceasurile personalizate sunt decorațiuni funcționale care aduc personalitate în orice spațiu. Realizăm ceasuri de perete și de birou cu mecanisme de înaltă precizie și design complet personalizabil. Cadranul poate fi personalizat cu fotografii, logo-uri, texte sau arte grafice în culori vibrante și rezistente la decolorare. Oferim diverse forme și dimensiuni: rotunde, pătrate, în formă de inimă sau siluete personalizate. Materialele includ: lemn natural, metal, acrilic sau MDF cu finisaj premium. Fiecare ceas vine cu mecanism silențios pentru confort maxim și baterie de lungă durată. Perfecte pentru cadouri personale, promovare corporativă sau decorațiuni tematice pentru casă sau birou.",
        imagine_url: "https://5.imimg.com/data5/SELLER/Default/2024/8/446310563/EB/IH/SJ/186062306/customized-personalized-wall-clock.png"
    },
    {
        id: 12,
        nume: "Farfurii personalizate",
        descriere_scurta: "Farfurii decorative din ceramică cu printare de înaltă calitate.",
        descriere_detaliata: "Farfuriile personalizate sunt obiecte de artă funcționale pentru masa festivă sau decorațiuni elegante. Folosim ceramică de calitate superioară cu finisaj lucios și printare în culori vibrante, rezistente la spălare și utilizare. Fiecare farfurie poate fi personalizată cu fotografii de familie, desene artistice, mesaje speciale sau logo-uri corporative. Oferim diverse dimensiuni: farfurii pentru desert, masă principală sau farfurii decorative pentru perete. Printarea se face cu cerneluri speciale pentru ceramică care pătrund în glazură pentru durabilitate maximă. Farfuriile pot fi folosite zilnic sau ca piese decorative speciale. Perfecte pentru cadouri de nuntă, aniversări, sau pentru crearea unei colecții unice de vesela personalizată.",
        imagine_url: "https://m.media-amazon.com/images/I/710-J52qkjL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 13,
        nume: "Agende personalizate",
        descriere_scurta: "Agende corporate și personale cu design unic și branding personalizat.",
        descriere_detaliata: "Agendele personalizate sunt instrumente de organizare de lux și cadouri corporate de impact. Creăm agende cu design complet personalizat, de la coperta din piele ecologică până la layoutul interior. Oferim diverse opțiuni de copertă: piele, carton rigid texturalizat, sau materiale eco-friendly. Interiorul poate include: calendar personalizat, secțiuni pentru notițe, informații de contact, pagini cu logo corporativ și multe altele. Fiecare agendă poate fi gravată cu nume, logo-uri sau mesaje inspiraționale. Realizăm agende în diverse formate: A5, A4, de buzunar sau dimensiuni personalizate. Bindingul profesional asigură deschidere perfectă și durabilitate sporită pentru utilizare intensă pe tot parcursul anului.",
        imagine_url: "https://i-moments.com/content/files/agenda-personalizada-1.jpg.webp"
    },
    {
        id: 14,
        nume: "Globulețe personalizate",
        descriere_scurta: "Globulețe decorative pentru pomul de Crăciun cu fotografii și mesaje speciale.",
        descriere_detaliata: "Globulețele personalizate transformă sărbătorile în momente magice și pline de amintiri. Realizăm decorațiuni pentru pomul de Crăciun din materiale de calitate: sticlă, plastic rezistent sau metal cu finisaje speciale. Fiecare globuleț poate fi personalizat cu fotografii de familie, nume, date importante sau mesaje festive. Oferim diverse forme: clasice rotunde, în formă de inimă, stele sau siluete tematice. Printarea se face cu tehnologii speciale rezistente la temperatură și umiditate. Globulețele vin cu sistem elegant de agățare și pot fi livrate în ambalaj cadou. Perfecte pentru crearea unei atmosfere festive personalizate, cadouri pentru familie și prieteni, sau decorațiuni corporate pentru sărbători.",
        imagine_url: "https://m.media-amazon.com/images/I/718TDDCWH+L.jpg"
    },
    {
        id: 15,
        nume: "Tablouri pânză",
        descriere_scurta: "Tablouri pe pânză întinsă cu fotografii și arte personalizate.",
        descriere_detaliata: "Tablourile pe pânză transformă fotografiile și designurile în adevărate opere de artă pentru decorarea casei sau biroului. Folosim pânză de calitate muzeală și cerneluri pigmentate care garantează culori vibrante și rezistență la decolorare pe termen lung. Oferim diverse texturi de pânză și dimensiuni: de la formate mici pentru galerii personale până la tablouri mari de impact pentru decorarea pereților. Fiecare tablou este întins profesional pe ramă de lemn de calitate și vine gata de agățat. Oferim servicii complete: retușare fotografii, optimizare pentru print, și consultanță pentru alegerea dimensiunii potrivite spațiului. Tablourile sunt rezistente la umiditate și fluctuații de temperatură, fiind perfecte pentru orice mediu interior.",
        imagine_url: "https://m.media-amazon.com/images/I/71Ex0Vm66lL.jpg"
    },
    {
        id: 16,
        nume: "Mape personalizate",
        descriere_scurta: "Mape profesionale pentru documente cu logo și design corporativ.",
        descriere_detaliata: "Mapele personalizate sunt accesorii profesionale esențiale pentru prezentări de afaceri și organizarea documentelor. Realizăm mape din materiale de înaltă calitate: carton rigid, piele ecologică, plastic transparent sau materiale eco-friendly. Fiecare mapă poate fi personalizată cu logo corporativ, informații de contact sau designuri profesionale. Oferim diverse tipuri: mape simple, cu buzunare, cu clips sau cu sistem de inele. Finisajele includ: laminare, UV spot, embossing sau folio metalică pentru un aspect premium. Mapele pot avea dimensiuni standard (A4, A3) sau personalizate pentru nevoi specifice. Perfecte pentru prezentări corporative, materiale promoționale, organizarea documentelor oficiale sau cadouri profesionale pentru clienți și parteneri de afaceri.",
        imagine_url: "https://d1spde7copcwm9.cloudfront.net/production/images/product/File_folder.jpg"
    },
    {
        id: 17,
        nume: "Cărți de vizită",
        descriere_scurta: "Cărți de vizită profesionale cu design premium și finisaje speciale.",
        descriere_detaliata: "Cărțile de vizită profesionale sunt primul pas către o impresie de durată în mediul de afaceri. Creăm cărți care reflectă profesionalismul și atenția la detalii. Folosim hârtie premium de diverse gramaje și finisaje speciale: mat elegant, lucios de impact, soft-touch catifelat sau texturat. Oferim opțiuni avansate: stanțare personalizată, colțuri rotunjite, folio metalică (auriu, argintiu), UV spot pentru efecte speciale și embossing pentru relief. Fiecare carte poate avea design personalizat cu logo-uri corporative, informații complete de contact și elemente grafice distinctive. Procesul include consultanță gratuită pentru design și optimizare pentru printare. Livrarea standard în 2-3 zile lucrătoare, cu opțiune express în 24 ore pentru urgențe.",
        imagine_url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_450/India%20LOB/visiting-cards/JBC-classic-visiting-cards/IN_Classic-Visiting-Cards_Overview"
    },
    {
        id: 18,
        nume: "Flyere personalizate",
        descriere_scurta: "Flyere promoționale de impact pentru campaniile de marketing și evenimente.",
        descriere_detaliata: "Flyerele personalizate sunt instrumentele perfecte pentru promovarea rapidă și eficientă a evenimentelor, produselor sau serviciilor. Echipa noastră de designeri te ajută să creezi materiale promoționale care atrag atenția și generează rezultate. Oferim printare pe hârtie de calitate superioară în diverse formate: A6, A5, A4, DL sau dimensiuni personalizate. Finisajele includ: mat profesional, lucios de impact, UV spot pentru accentuare sau laminare pentru durabilitate sporită. Designul poate fi complet personalizat cu informații despre eveniment, contact, logo-uri și elemente grafice atractive. Oferim și servicii de design grafic și consultanță pentru maximizarea impactului promoțional. Livrare rapidă pentru respectarea deadlineurilor strânse ale campaniilor de marketing.",
        imagine_url: "https://resources.eventgroove.com/images/redesign/2024/tos/flyer-header.png"
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