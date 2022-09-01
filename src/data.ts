export {};

export interface Product {
  id: string;
  price: number;
  title: string;
  description: string;
  author: string;
  image: string;
  category: string;
}

export const mockedProducts: Product[] = [
  {
    id: "1",
    price: 209,
    title: "Malma Station",
    description:
      "Alex Schulmans nya roman utspelar sig på ett tåg. Fem personer är på resa genom Sverige: ett gift par i kris, en ensamstående far och hans dotter, och en kvinna som söker svaret på en gåta som hennes mamma lämnat efter sig. De reser alla mot Malma station och varken de eller läsaren vet hur deras öden hänger samman, eller anar att det som händer på slutdestinationen kommer att omdefiniera deras liv. Malma station är en drabbande berättelse om familjehemligheter och oförrätter som gått i arv genom generationer  och jakten på sanningen som kan förändra allt.",
    image: "src/img/malma-station.jpg",
    author: "Alex Schulman",
    category: "Roman",
  },
  {
    id: "2",
    price: 219,
    title: "Stjärnfall",
    description:
      "Louise Boije af Gennäs är tillbaka med en fristående fortsättning på Stjärnor utan svindel  25 år senare! Julia och Gabriel lever ett tätt sammanflätat liv med sina nära vänner Eva och André. Deras gemensamma barn har vuxit upp nästan som syskon, de äter middagar tillsammans, firar högtider och är gudföräldrar åt varandras barn. Men plötsligt förändras allt. Julia och André inser att de har starka känslor för varandra och tvingas ställa sig frågan om de är villiga att offra allt för kärleken.",
    image: "src/img/stjarnfall.jpg",
    author: "Louise Boije af Gennäs",
    category: "Roman",
  },
  {
    id: "3",
    price: 199,
    title: "SIGNERAD X",
    description:
      "Sport- och spelindustrin exploderar, men bortom onlinebettingen finns en underjordisk marknad där de stora transaktionerna sker genom matchfixning, våld och korruption. En mördad fotbollsfru i en lyxvilla på Lidingö. En pojke i förorten med en framtid som idrottsstjärna. En utstött mellanstadielärare som drömmer om att bli sedd för den hon är. I den senaste delen i serien om Vanessa Frank vävs deras historier samman till ett fartfyllt drama och en omöjlig ekvation. Nu måste polisinspektör Vanessa Frank hitta den okända variabeln X innan det är för sent.",
    image: "src/img/SIGNERAD-X.jpg",
    author: "Pascal Engman",
    category: "Deckare",
  },
  {
    id: "4",
    price: 189,
    title: "Bokälskare",
    description:
      "Hela Nora Stephens liv består av böcker. Som litterär agent i New York gör hon allt för sina författare, men också för sin älskade lillasyster Libby. Så när Libby ber Nora följa med till den idylliska småstaden Sunshine Falls i North Carolina ställer hon upp, om än motvilligt. Planen är att de ska ha en avkopplande systersemester tillsammans, samtidigt som Libby i hemlighet hoppas att Nora ska bli hjälte i sitt eget liv och inte bara i andras. Men i stället för picknickar i mysiga gläntor och heta möten med någon sexig skogshuggare eller snygg landsortsläkare, springer Nora ideligen på Charlie Lastra, en butter förläggare som också kommer från New York. Det skulle kanske ha kunnat bli gulligt och romantiskt, om det inte vore för det faktum att Nora och Charlie redan har träffats massor av gånger hemma i stan, och det har aldrig varit det minsta gulligt.",
    image: "src/img/bokalskare.jpg",
    author: "Emily Henry",
    category: "Roman",
  },
  {
    id: "5",
    price: 219,
    title: "Mera middagstips!",
    description:
      "Jenny Warsén, en av våra mest älskade kokboksförfattare och matbloggare, är tillbaka med ”Mera middagstips!”. I den här praktiska problemlösarkokboken får du snabbt inspiration till veckans middagar. Det är snabblagad, inspirerande och perfekt för barnfamiljen som har ont om tid men stor matlust. Det är både hälsosamt och festligt  och för dig som inte kan välja mellan alla recepten finns de färdiga veckomatsedlarna till hands. Det har aldrig varit enklare, eller godare, att laga mat till hela familjen!",
    image: "src/img/mera-middagstips.jpg",
    author: "Jenny Warsén",
    category: "Kokbok",
  },
  {
    id: "6",
    price: 229,
    title: "Hej, hej vardagsmat!",
    description:
      "Petiga ungar! Olika smakpreferenser i familjen! Tidsbrist i vardagen! Sara Ask och Lisa Bjärbo, som tillsammans skapat Mera vego-böckerna, samarbetar här för första gången med serietecknaren Louise Winblad. Tillsammans skapar de en bok som är hälften kokbok, hälften föräldrapedagogik om barn och mat. Hur omvänder man en grönsakshatare? Vad gör man om man är orolig för att ens barn får i sig för lite mat? Och hur kan man servera maten så att alla i familjen blir mätta och nöjda?",
    image: "src/img/hej-hej-vardagsmat.jpg",
    author: "Sara Ask, Lisa Bjärbo, Louise Winblad",
    category: "Kokbok",
  },
  {
    id: "7",
    price: 229,
    title: "Baka med Frida deluxe ",
    description:
      "Efter tre storsäljande ”deluxeböcker” kommer nu äntligen bakdrottningen Frida Skattbergs stora bok ”Baka med Frida deluxe”, fylld med nya recept. Här hittar du allt i bakväg, från matbröd och sötebröd till småkakor, cupcakes och tårtor. Och som om det inte räcker finns här även ett kapitel om godis att ta till när sötsuget blir akut.",
    image: "src/img/baka-med-frida-deluxe.jpg",
    author: "Frida Skattberg",
    category: "Kokbok",
  },
  {
    id: "8",
    price: 209,
    title: "Rosalinds resa",
    description:
      "Rosalind, Olivia och Eve är döttrarna till den vackra och omtalade skådespelerskan Jillian Croft, och hennes make Daniel Braddock. Trots att deras mor till och från kämpade med sin psykiska hälsa hade de på många sätt en storslagen uppväxt. Men när hon dör kommer döttrarna över läkarjournaler som antyder att deras mor aldrig kunnat föda dem.",
    image: "src/img/rosalinds-resa.jpg",
    author: "Muna Shehadi",
    category: "Roman",
  },
  {
    id: "9",
    price: 119,
    title: "Kungshjärta ",
    description:
      "Året är 2019. En svensk agent vid Kontoret för särskild inhämtning försvinner spårlöst på uppdrag i den militäriserade ryska exklaven Kaliningrad vid Östersjöns ostkust. Hanna Hjerta vid avdelningen för Särskilda omständigheter dras från rutinuppdrag i Sverige och skickas för att försöka hitta agenten eller alternativt sopa igen spåren efter honom - ett uppdrag som borde vara enkelt. Men när det förflutna ruvar på hämnd och revansch dras Hanna in i en konspiration och ett förräderi som hotar regionen på ett sätt ingen kunnat förutse och insatserna blir personliga.",
    image: "src/img/kungshjarta.jpg",
    author: "Lars Wilderäng",
    category: "Roman",
  },
  {
    id: "10",
    price: 209,
    title: "Tala med de döda",
    description:
      "Skelettet efter en nioårig flicka hittas i en blockstensgrotta i ett naturreservat. Polisens spår leder bakåt i tiden, till ett fosterhem som tog emot unga flickor, beläget i en gammal begravningsbyrå. Men hemmet brann senare ner och det är ont om ledtrådar. Det är kriminalinspektör Kristoffer Bark vid Örebropolisen som tar sig an fallet tillsammans med sitt brokiga team av omplacerade kollegor. Tipset om flickans kvarlevor kom från en kvinna, Magdalena Fernåker, som påstår sig ha mediala förmågor. Hon tar emot sina klienter på kursgården Himlagård, men när hon kallas till förhör är hon som uppslukad av jorden.",
    image: "src/img/tala-med-de-doda.jpg",
    author: "Anna Jansson",
    category: "Deckare",
  },
  {
    id: "11",
    price: 219,
    title: "Livet efter 40 : en guide för män",
    description:
      "Varför är 40-årskriser så pass vanliga att det till och med finns ett begrepp för dem? Varför får många män pinnben, platt röv och putmage när de blir äldre och vad kan man göra för att hålla kroppen i trim efter 40? Vad innebär en förstorad prostata och stämmer det att testosteronhalten sjunker hos män när de blir äldre? Och hur kommer det sig att bilden av en äldre man ofta är den av en ensam och vresig farbror?",
    image: "src/img/livet-efter-40.jpg",
    author: "Nisse Edwall",
    category: "Fakta",
  },
  {
    id: "12",
    price: 199,
    title: "21 Day Challenge - Keto",
    description:
      "I sin nya kokboksserie med kostscheman och recept för 21 dagar visar Ulrika Davidsson hur du ökar kroppens fettförbränning med den populära och enkla ketodieten! Genom naturligt protein, hälsosamma fetter och grönsaker har ketodieten snabbt vuxit till en av de mest omtyckta kosthållningarna. Ulrikas goda, mättande och snabblagade recept ger dig matglädje, ett stabilt blodsocker och gör skillnad på vågen.",
    image: "src/img/21-day-challenge-keto.jpg",
    author: "Ulrika Davidsson",
    category: "Kokbok",
  },
  {
    id: "13",
    price: 239,
    title: "Råsöt",
    description:
      "I den spektakulärt vackra boken Råsöt hittar du oemotståndliga växtbaserade sötsaker fria från gluten, soja och raffinerat socker. Frossa i fudge, tryfflar, bars, pajer, tårtor och cheesecakes skapade av ingredienser från naturens skafferi, fullproppade med smak.",
    image: "src/img/rasot.jpg",
    author: "Viktoriia Rumiantseva",
    category: "Kokbok",
  },
  {
    id: "14",
    price: 175,
    title: "Avigt hav",
    description:
      "Rose är psykoanalytiker bosatt i Paris innerstad som i julklapp får en kryssningsresa tillsammans med sina barn på Medelhavet. Någonstans ute på det kalla decemberhavet stöter kryssningsfartyget på båtflyktingar vilka räddas av besättningen i väntan på den italienska kustbevakningen. Rose beger sig ner på det däck där migranterna hålls och möter Younès från Niger, som ber henne om en mobiltelefon. Genom en plötslig ingivelse ger Rose honom sin sons mobil. Denna mobiltelefon blir sedan ett slags livlina mellan Rose och Younès. Rose står i begrepp att flytta till sin barndoms Baskien medan Younès är på väg till Calais för att därifrån kunna ta sig till England.",
    image: "src/img/avigt-hav.jpg",
    author: "Marie Darrieussecq",
    category: "Roman",
  },
  {
    id: "15",
    price: 219,
    title: "Svartfågel",
    description:
      "En kall vintermorgon jagas en ung kvinna ut på isen på Vombsjön där hon går igenom och drunknar. Hon är nyinflyttad i skånska Harlösa och ingen verkar veta vem hon är eller varför hon kommit dit. Polisutredaren Fredrika Storm, som är uppvuxen i den lilla byn, tar sig an fallet tillsammans med sin nya kollega Henry Calment. Men utredningen blir komplicerad när det visar sig att flera av spåren leder till mörka hemligheter i Fredrikas egen familjehistoria. Vad har den drunknade kvinnan för koppling till Tobias Falk som lämnade byn tjugo år tidigare, och hur hänger fallet samman med Fredrikas mamma som försvann spårlöst samma sommar?",
    image: "src/img/svartfagel.jpg",
    author: "Frida Skybäck",
    category: "Deckare",
  },
  {
    id: "16",
    price: 219,
    title: "Odens spel",
    description:
      "År 916 flyr en ung kvinna från sitt hem på Orkneyöarna för att rädda livet på sitt ofödda barn. Arton år senare siar en völva att ondskan från det förflutna är på väg tillbaka och kommer att sträcka ut sin långa arm efter kvinnans son. ",
    image: "src/img/odens-spel.jpg",
    author: "Tim Hodkinson",
    category: "Deckare",
  },
  {
    id: "17",
    price: 180,
    title: "Träna hemma",
    description:
      "25 program att göra ute och inne för alla nivåer! Träna hela kroppen puls och stryka oavsett om du befinner dig hemma eller på resa. Den här boken innehåller 25 effektiva träningsprogram som passar de flesta utefter sina förutsättningar.",
    image: "src/img/trana-hemma.jpg",
    author: "Mia Rodhborn",
    category: "Träning",
  },
  {
    id: "18",
    price: 99,
    title: "Supercoola hjältegänget",
    description:
      "I Gråköping händer det aldrig någonting. Det vet Sonya, som bott där hela sitt liv men ändå alltid sitter ensam på rasterna. Tills Rickard flyttar till stan, och allt börjar hända väldigt snabbt. Plötsligt stöter de nyblivna vännerna på ett rymdskepp inne i skogen, och det är inte precis vänligt sinnade aliens som dykt upp, utan den onde rymdhärskaren Rasputin! Men när Sonya och Rickard försöker varna sina lärare är det ingen som tror dem. De måste samla bevis -- innan det är för sent.",
    image: "src/img/supercoola-hjalteganget.jpg",
    author: "Johan Wanloo",
    category: "Barnbok",
  },
  {
    id: "19",
    price: 123,
    title: "Det gula skrattet",
    description:
      "Det gula skrattet är en universell och stark berättelse om ensamhet, vänskap och tillit, men den präglas lika mycket av viktiga teman som klimatförändring och vikten av det skrivna ordet. Jag sveper in mina fötter som nästan har tappat känseln, och blundar. Det är som om ögonen följer gångar inne i hjärnan, långa vindlande gångar bakåt genom tiden och minnena. Jag hamnar i vår lägenhet, för flera år sedan. Innan den långa vintern.",
    image: "src/img/det-gula-skrattet.jpg",
    author: "Viveka Sjögren",
    category: "Roman",
  },
  {
    id: "20",
    price: 165,
    title: "Passera",
    description:
      "En sommardag 1927 möts två kvinnor på en hotellterrass i Chicago. Irene Redfield märker att någon stirrar på henne och tror först att hon blivit avslöjad. Så känner hon igen kvinnan vid bordet intill som Clare Kendry, barndomsvännen från en helt annan del av staden. Båda kvinnorna passerar som vita på en plats där de egentligen inte har tillträde. Mötet mellan dem leder in på en väg som obönhörligen slutar i tragedi.",
    image: "src/img/passera.jpg",
    author: "Nella Larsen, Brit Bennett",
    category: "Roman",
  },
  {
    id: "21",
    price: 175,
    title: "Barnsköterskan",
    description:
      "West Yorkshire, 1904. Nyutexaminerade barnsköterskan Ruby May tar en tjänst hos Charles och Lilian England, ett välbärgat par med rötter i en dynasti av kvarnägare. Hon hoppas att det ska vara nystarten hon behöver. Hon försöker göra sig hemmastadd i det isolerade huset Hardcastle, men märker ganska snart att någonting inte är riktigt som det ska med den vackra, mystiska Mrs England.",
    image: "src/img/barnskoterskan.jpg",
    author: "Stacey Halls",
    category: "Roman",
  },
  {
    id: "22",
    price: 239,
    title: "Absolut Food Pharmacy",
    description:
      "175 makalöst goda recept som inspirerar dig till en lite mer hälsosam vardag? Riktig mat lagad på rena råvaror som gör dig mätt och glad? Kära nån, Food Pharmacy verkar ha skrivit sin viktigaste kokbok hittills! Efter tre bästsäljande böcker ger Food Pharmacy nu ut en samling med sina mest uppskattade och näringsrika recept som de för första gången har samlat på ett och samma ställe. Men tro för guds skull nu inte att det här bara är ännu en vanlig kokbok! Med sina recept och tips vill Lina och Mia inspirera och påverka svenska folkets osunda matvanor som enligt de senaste årens rapporter bara blir sämre och sämre.  ",
    image: "src/img/absolut-food-pharmacy.jpg",
    author: "Mia Clase, Lina Nertby Aurell",
    category: "Kokbok",
  },
];

export function getBook(bookId: string) {}
