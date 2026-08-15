export type PhotoCat = "interior" | "exterior" | "view" | "pool";

export type DemoPhoto = {
  src: string;
  thumb: string;
  alt: string;
  cat: PhotoCat;
};

export function unsplash(id: string, width = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export function portrait(id: string) {
  return unsplash(id, 600);
}

function shot(id: string, alt: string, cat: PhotoCat): DemoPhoto {
  return {
    src: unsplash(id, 1200),
    thumb: unsplash(id, 800),
    alt,
    cat,
  };
}

export const LUXURY = {
  hero: unsplash("photo-1613977257365-aaae5a9817ff", 1600),
  host: portrait("photo-1544005313-94ddf0286df2"),
  photos: [
    shot("photo-1613977257365-aaae5a9817ff", "Vila sa bazenom", "exterior"),
    shot("photo-1600596542815-ffad4c1539a9", "Luksuzna fasada", "exterior"),
    shot("photo-1600607687939-ce8a6c25118c", "Minimalistički salon", "interior"),
    shot("photo-1600210492486-724fe5c67fb0", "Svetao dnevni boravak", "interior"),
    shot("photo-1600566753190-17f0baa2a6c3", "Kuhinja otvorenog plana", "interior"),
    shot("photo-1600210492493-0946911123ea", "Master spavaća", "interior"),
    shot("photo-1571896349842-33c89424de2d", "Infinity bazen", "pool"),
    shot("photo-1540541338287-41700207dee6", "Bazen iz vazduha", "pool"),
    shot("photo-1564013799919-ab600027ffc6", "Terasa prema moru", "view"),
    shot("photo-1512917774080-9991f1c4c750", "Večernji enterijer", "interior"),
    shot("photo-1552321554-5fefe8c9ef14", "Mermerno kupatilo", "interior"),
    shot("photo-1600585154340-be6161a56a0c", "Vila u sumrak", "exterior"),
  ],
};

export const BOUTIQUE = {
  hero: unsplash("photo-1449158743715-0a90ebb6d2d8", 1600),
  host: portrait("photo-1500648767791-00dcc994a43e"),
  photos: [
    shot("photo-1449158743715-0a90ebb6d2d8", "Drvena kuća", "exterior"),
    shot("photo-1542718610-a1d656d1884c", "Boravak sa kaminom", "interior"),
    shot("photo-1505693416388-ac5ce068fe85", "Udobna spavaća", "interior"),
    shot("photo-1615874959474-d609969a20ed", "Topli salon", "interior"),
    shot("photo-1556909114-f6e7ad7d3136", "Kuhinja", "interior"),
    shot("photo-1495474472287-4d71bcdd2085", "Jutarnja kafa", "interior"),
    shot("photo-1513694203232-719a280e022f", "Ćošak za čitanje", "interior"),
    shot("photo-1484154218962-a197022b5858", "Trpezarija", "interior"),
    shot("photo-1416879595882-3373a0480b5b", "Bašta", "view"),
    shot("photo-1522771739844-6a9f6d5f14af", "Spavaća", "interior"),
    shot("photo-1600585154526-990dced4db0d", "Trpezarija uz svetlost", "interior"),
    shot("photo-1470240731273-7821a6eeb6bd", "Staza", "exterior"),
  ],
};

export const URBAN = {
  hero: unsplash("photo-1502672260266-1c1ef2d93688", 1600),
  host: portrait("photo-1472099645785-5658abf4ff4e"),
  photos: [
    shot("photo-1502672260266-1c1ef2d93688", "Dnevni boravak", "interior"),
    shot("photo-1522708323590-d24dbb6b0267", "Studio loft", "interior"),
    shot("photo-1560448204-e02f11c3d0e2", "Moderan apartman", "interior"),
    shot("photo-1493809842364-78817add7ffb", "Svetao salon", "interior"),
    shot("photo-1556912173-46c336c7fd55", "Kuhinja", "interior"),
    shot("photo-1536376072261-38c75010e6c9", "Studio", "interior"),
    shot("photo-1480714378408-67cf0d13bc1b", "Skyline", "view"),
    shot("photo-1514565131-fce0801e5785", "Grad noću", "view"),
    shot("photo-1497366216548-37526070297c", "Zgrada", "exterior"),
    shot("photo-1554995207-c18c203602cb", "Spavaća", "interior"),
    shot("photo-1502672023488-70e25813eb80", "Enterijer", "interior"),
    shot("photo-1600585154340-be6161a56a0c", "Ulaz", "exterior"),
  ],
};

export const NATURE = {
  hero: unsplash("photo-1510798831971-661eb04b3739", 1600),
  host: portrait("photo-1472099645785-5658abf4ff4e"),
  photos: [
    shot("photo-1510798831971-661eb04b3739", "A-frame kuća", "exterior"),
    shot("photo-1441974231531-c6227db76b6e", "Šuma", "view"),
    shot("photo-1464822759023-fed622ff2c3b", "Planine", "view"),
    shot("photo-1439066615861-d1af74d74000", "Jezero", "view"),
    shot("photo-1542718610-a1d656d1884c", "Drveni enterijer", "interior"),
    shot("photo-1520250497591-112f2f40a3f4", "Terasa", "exterior"),
    shot("photo-1506905925346-21bda4d32df4", "Alpski vrh", "view"),
    shot("photo-1518780664697-55e3ad937233", "Kuća u zelenilu", "exterior"),
    shot("photo-1501785888041-af3ef285b470", "Jezero i planine", "view"),
    shot("photo-1482192505345-5655af888cc4", "Pogled", "view"),
    shot("photo-1571896349842-33c89424de2d", "Džakuzi", "pool"),
    shot("photo-1470240731273-7821a6eeb6bd", "Staza", "exterior"),
  ],
};

export const GLAMPING = {
  hero: unsplash("photo-1504280390367-361c6d9f38f4", 1600),
  host: portrait("photo-1438761681033-6461ffad8d80"),
  photos: [
    shot("photo-1504280390367-361c6d9f38f4", "Safari šator", "exterior"),
    shot("photo-1478131143130-3ce738a2e8e5", "Kamp u sumrak", "exterior"),
    shot("photo-1537905569824-f89f14cceb68", "Krevet u šatoru", "interior"),
    shot("photo-1523987355523-c7b5b0dd90a7", "Glamping kamp", "exterior"),
    shot("photo-1517824806704-9040b037703b", "Vatra", "exterior"),
    shot("photo-1419242902214-272b3f66ee7a", "Zvezdano nebo", "view"),
    shot("photo-1500530855697-b586d89ba3ee", "Šuma", "view"),
    shot("photo-1469474968028-56623f02e42e", "Pejzaž", "view"),
    shot("photo-1476041800950-2f2cdc43886d", "Šator", "exterior"),
    shot("photo-1542718610-a1d656d1884c", "Drveni enterijer", "interior"),
    shot("photo-1571896349842-33c89424de2d", "Jacuzzi", "pool"),
    shot("photo-1499696010180-025ef6e1a8f9", "Kupola u prirodi", "exterior"),
  ],
};

export const AVATARS = [
  portrait("photo-1544005313-94ddf0286df2"),
  portrait("photo-1500648767791-00dcc994a43e"),
  portrait("photo-1438761681033-6461ffad8d80"),
  portrait("photo-1472099645785-5658abf4ff4e"),
];

export function nightsBetween(checkIn: string, checkOut: string) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = Math.round((end.getTime() - start.getTime()) / 86_400_000);
  return Math.max(1, diff);
}
