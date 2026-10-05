// Gallery items. To add a new piece, copy one object and change the fields.
// type: 'image' or 'video'. For videos, `poster` is the still shown on the card.
// Prices are placeholders: replace "XXX" with your real price.

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'calligraphy', label: 'Calligraphy' },
  { id: 'craft', label: 'Craft' },
  { id: 'bouquets', label: 'Bouquets' },
  { id: 'jewelry', label: 'Jewelry' },
  { id: 'gajry', label: 'Gajry' },
  { id: 'sketching', label: 'Sketching' },
]

const allItems = [
  {
    id: 'al-hayy-calligraphy', type: 'image', category: 'calligraphy',
    title: 'Al-Hayy Al-Qayyum Calligraphy',
    src: '/media/calligraphy-al-hayy.webp',
    alt: 'Round Arabic calligraphy composition in red and black ink',
    price: 'Starting from Rs. XXX',
    description: 'A round calligraphy composition in black and red ink. Can be made with your choice of verse, size and colours.',
  },
  {
    id: 'ikhlas-calligraphy-video', type: 'video', category: 'calligraphy',
    title: 'Surah Al-Ikhlas Calligraphy',
    src: '/media/calligraphy-process.mp4', poster: '/media/calligraphy-process-poster.webp',
    alt: 'Red and black Arabic calligraphy of Surah Al-Ikhlas',
    price: 'Starting from Rs. XXX',
    description: 'Watch this red and black calligraphy piece come together, from the first stroke to the finished sheet.',
  },
  {
    id: 'peacock-wall-hanging', type: 'image', category: 'craft',
    title: 'Peacock Wall Hanging',
    src: '/media/craft-peacock.webp',
    alt: 'Handmade paper peacock wall hanging with layered colourful feathers',
    price: 'Rs. XXX',
    description: 'A paper craft peacock with layered rainbow feathers and little flowers, made to hang on a wall.',
  },
  {
    id: 'pink-satin-gajray-video', type: 'video', category: 'gajry',
    title: 'Pink Satin Rose Gajray',
    src: '/media/bouquet-pink-satin.mp4', poster: '/media/bouquet-pink-satin-poster.webp',
    alt: 'Pink satin ribbon roses being made for gajray',
    price: 'Starting from Rs. XXX',
    description: 'Soft pink satin roses made petal by petal for gajray. Watch them come together.',
  },
  {
    id: 'white-flower-bouquet', type: 'video', category: 'bouquets',
    title: 'White Flower Bouquet',
    src: '/media/bouquet-black-wrap.mp4', poster: '/media/bouquet-black-wrap-poster.webp',
    alt: 'White paper flower bouquet in black wrapping',
    price: 'Starting from Rs. XXX',
    description: 'A full bouquet of white handmade flowers wrapped in black paper with a ribbon.',
  },
  {
    id: 'maroon-jhumka', type: 'image', category: 'jewelry',
    title: 'Maroon Jhumka with Ear Chain',
    src: '/media/jewelry-jhumka.webp',
    alt: 'Maroon bead earring with golden jhumka and pearl ear chain',
    price: 'Rs. XXX',
    description: 'Maroon bead earrings with a golden jhumka and a pearl and bead ear chain.',
  },
  {
    id: 'beaded-bracelets', type: 'video', category: 'jewelry',
    title: 'Beaded Bracelets',
    src: '/media/jewelry-beaded-bracelets.mp4', poster: '/media/jewelry-beaded-bracelets-poster.webp',
    alt: 'Handmade beaded bracelets in black and white',
    price: 'Starting from Rs. XXX',
    description: 'Wide beaded bracelets, made in the colours you like.',
  },
  {
    id: 'red-satin-gajray', type: 'video', category: 'gajry',
    title: 'Red Satin Rose Gajray',
    src: '/media/gajray-red-satin.mp4', poster: '/media/gajray-red-satin-poster.webp',
    alt: 'Red satin rose gajray with golden accents',
    price: 'Starting from Rs. XXX',
    description: 'Red satin rose gajray with golden details, perfect for mehndi and wedding functions.',
  },
  {
    id: 'memories-sketch', type: 'video', category: 'sketching',
    title: 'Patterned Memories Sketch',
    src: '/media/sketch-memories.mp4', poster: '/media/sketch-memories-poster.webp',
    alt: 'Hand-drawn sketch with a blue patterned border',
    price: 'Rs. XXX',
    description: 'A hand-drawn patterned border sketch for a memories page. Can be made for journals and cards.',
  },
  {
    id: 'umrah-mubarak-calligraphy', type: 'image', category: 'calligraphy',
    title: 'Umrah Mubarak Calligraphy',
    src: '/media/calligraphy-umrah-mubarak.webp',
    alt: 'Umrah Mubarak Arabic calligraphy in blue with a painted Kaaba',
    price: 'Starting from Rs. XXX',
    description: 'A hand-painted Umrah Mubarak card with the Kaaba and blue calligraphy. Can be made with a name for a special gift.',
  },
  {
    id: 'red-wrist-gajray', type: 'image', category: 'gajry',
    title: 'Red Rose Wrist Gajray',
    src: '/media/gajray-red-wrist.webp',
    alt: 'Red satin rose wrist gajray with small white flowers',
    price: 'Starting from Rs. XXX',
    description: 'Red satin rose wrist gajray with little white flowers, made in sets for friends and family.',
  },
  {
    id: 'pink-wrist-gajray', type: 'image', category: 'gajry',
    title: 'Pink Rose Wrist Gajray',
    src: '/media/gajray-pink-wrist.webp',
    alt: 'Pink satin rose wrist gajray with white flowers',
    price: 'Starting from Rs. XXX',
    description: 'Soft pink satin rose wrist gajray with white flowers and a ribbon tie.',
  },
  {
    id: 'bead-hoop-jhumka', type: 'image', category: 'jewelry',
    title: 'Black & Crystal Hoop Jhumka',
    src: '/media/jewelry-bead-hoop-jhumka.webp',
    alt: 'Black and clear crystal bead hoop earrings with golden jhumkas',
    price: 'Rs. XXX',
    description: 'Hoop earrings with black and clear crystal beads and small golden jhumkas.',
  },
  {
    id: 'red-mirror-ring', type: 'image', category: 'jewelry',
    title: 'Red Bead Mirror Ring',
    src: '/media/jewelry-mirror-ring.webp',
    alt: 'Large red bead ring with a round mirror in the centre',
    price: 'Rs. XXX',
    description: 'A statement ring with red beads around a round mirror. Can be made in your outfit colour.',
  },
  {
    id: 'allah-red-calligraphy', type: 'image', category: 'calligraphy',
    title: 'Allah Calligraphy in Red',
    src: '/media/calligraphy-allah-red.webp',
    alt: 'Bold red Arabic calligraphy of the word Allah, signed Mantasha Noor',
    price: 'Starting from Rs. XXX',
    description: 'A bold, flowing calligraphy of Allah in deep red, painted by hand on white sheet.',
  },
  {
    id: 'rainbow-wall-hanging', type: 'image', category: 'craft',
    title: 'Rainbow Flower Wall Hanging',
    src: '/media/craft-rainbow-wall-hanging.webp',
    alt: 'Colourful paper wall hanging with a rainbow fan and smiling hanging flowers',
    price: 'Rs. XXX',
    description: 'A cheerful rainbow paper wall hanging with little smiling flowers, lovely for a kids room.',
  },
  {
    id: 'butterfly-wall-hanging', type: 'image', category: 'craft',
    title: 'Butterfly Flower Wall Hanging',
    src: '/media/craft-butterfly-wall-hanging.webp',
    alt: 'Yellow, pink and black paper flower wall hanging with butterflies on sticks',
    price: 'Rs. XXX',
    description: 'A big paper flower in yellow, pink and black with butterflies spreading out around it.',
  },
  {
    id: 'paper-sunflowers', type: 'image', category: 'bouquets',
    title: 'Paper Sunflowers with Bees',
    src: '/media/bouquet-paper-sunflowers.webp',
    alt: 'Four handmade paper sunflowers with green stems and little bees',
    price: 'Starting from Rs. XXX',
    description: 'Handmade paper sunflowers with leaves and tiny bees, sold as stems or made into a bouquet.',
  },
  {
    id: 'single-red-rose-bouquet', type: 'video', category: 'bouquets',
    title: 'Single Red Rose Bouquet',
    src: '/media/bouquet-single-red-rose.mp4', poster: '/media/bouquet-single-red-rose-poster.webp',
    alt: 'A single red satin rose wrapped in black paper',
    price: 'Starting from Rs. XXX',
    description: 'One red satin rose wrapped in black paper, a sweet small gift. Watch how it is wrapped.',
  },
  {
    id: 'sketch-collection', type: 'video', category: 'sketching',
    title: 'Pencil Sketch Collection',
    src: '/media/sketch-collection.mp4', poster: '/media/sketch-collection-poster.webp',
    alt: 'Pencil sketch of a palm tree and wooden bridge',
    price: 'Rs. XXX',
    description: 'A collection of my pencil sketches: scenery, portraits and heart designs.',
  },
  {
    id: 'white-satin-bouquet', type: 'video', category: 'bouquets',
    title: 'White Satin Rose Bouquet',
    src: '/media/bouquet-white-satin.mp4', poster: '/media/bouquet-white-satin-poster.webp',
    alt: 'White satin rose bouquet in sheer wrapping with a pink ribbon',
    price: 'Starting from Rs. XXX',
    description: 'Pure white satin roses in a soft sheer wrap with a pink ribbon. Elegant for nikkah and bridal gifts.',
  },
  {
    id: 'red-rose-black-bouquet', type: 'video', category: 'bouquets',
    title: 'Red Rose Bouquet in Black',
    src: '/media/bouquet-red-rose-black-wrap.mp4', poster: '/media/bouquet-red-rose-black-wrap-poster.webp',
    alt: 'Red satin rose bouquet with baby breath in black wrapping and a red ribbon',
    price: 'Starting from Rs. XXX',
    description: 'Deep red satin roses with little white flowers, wrapped in black with a red ribbon.',
  },
  {
    id: 'seven-flower-ribbon-bouquet', type: 'video', category: 'bouquets',
    title: 'Seven Flower Ribbon Bouquet',
    src: '/media/bouquet-black-pearl-roses.mp4', poster: '/media/bouquet-black-pearl-roses-poster.webp',
    alt: 'Seven black satin roses with pearl centres in white wrapping',
    price: 'Starting from Rs. XXX',
    description: 'Seven black satin ribbon roses with pearl centres, wrapped in white. Bold and classy.',
  },
  {
    id: 'alhamdulillah-blue-calligraphy', type: 'image', category: 'calligraphy',
    title: 'Alhamdulillah Calligraphy in Blue',
    src: '/media/calligraphy-alhamdulillah-blue.webp',
    alt: 'Bold blue Arabic calligraphy of Alhamdulillah, signed Mantasha Noor',
    price: 'Starting from Rs. XXX',
    description: 'Flowing Alhamdulillah calligraphy in deep blue, written by hand and signed. Can be made in your colours.',
  },
  {
    id: 'black-crystal-ring', type: 'image', category: 'jewelry',
    title: 'Black & Crystal Mirror Ring',
    src: '/media/jewelry-black-crystal-ring.webp',
    alt: 'Large ring with black and clear crystal beads around a round mirror',
    price: 'Rs. XXX',
    description: 'A statement mirror ring with black and clear crystal beads. Pairs well with black or white outfits.',
  },
  {
    id: 'mashallah-calligraphy', type: 'image', category: 'calligraphy',
    title: 'MashaAllah Calligraphy',
    src: '/media/calligraphy-mashallah.webp',
    alt: 'Black Arabic calligraphy of MashaAllah, signed Mantasha Noor',
    price: 'Starting from Rs. XXX',
    description: 'Bold black MashaAllah calligraphy with flowing strokes, written by hand and signed. Lovely for a new home or a new baby.',
  },
  {
    id: 'kun-fayakun-calligraphy', type: 'image', category: 'calligraphy',
    title: 'Kun Fayakun Calligraphy',
    src: '/media/calligraphy-kun-fayakun.webp',
    alt: 'Kun Fayakun Arabic calligraphy in a circle with pine trees, signed Mantasha Noor',
    price: 'Starting from Rs. XXX',
    description: 'Kun Fayakun in black ink inside a circle with a little pine forest at the bottom. Signed by hand.',
  },
  {
    id: 'maroon-circle-calligraphy', type: 'image', category: 'calligraphy',
    title: 'Maroon Circle Calligraphy',
    src: '/media/calligraphy-maroon-circle.webp',
    alt: 'Modern Arabic calligraphy in a circle, maroon and white',
    price: 'Starting from Rs. XXX',
    description: 'A modern circular calligraphy painted in deep maroon and white. Can be made in your colours.',
  },
]

// "All" view mixes categories (round-robin) so the first page shows variety.
export const galleryItems = (() => {
  const groups = galleryCategories.slice(1).map((c) => allItems.filter((i) => i.category === c.id))
  const out = []
  for (let r = 0; out.length < allItems.length; r++) groups.forEach((g) => g[r] && out.push(g[r]))
  return out
})()

// Shown in the Product Details popup. Placeholders: replace X with real days.
export const productDetails = {
  customization: 'Yes (text, style, colours)',
  completion: 'X-X days (depends on order)',
}

// Featured Works strip: one highlight per category (gallery item ids)
export const featuredIds = ['al-hayy-calligraphy', 'peacock-wall-hanging', 'white-flower-bouquet', 'bead-hoop-jhumka', 'red-wrist-gajray', 'memories-sketch']

export const categoryLabel = (id) => galleryCategories.find((c) => c.id === id)?.label ?? id
