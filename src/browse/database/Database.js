export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'H&M Relaxed Fit Motif-detail Hoodie',
    productPrice: 28,
    description:
      'H&M Relaxed-fit sweatshirt hoodie with a motif front and back and soft, brushed inside. Lined, wrapover hood, kangaroo pocket, dropped shoulders, and long sleeves. Ribbing at cuffs and hem.',
    isOff: true,
    offPercentage: 10,
    productImage: require('./images/products/hma1.jpeg'),
    isAvailable: true,
    productImageList: [
      require('./images/products/hma1.jpeg'),
      require('./images/products/hma2.jpeg'),
      require('./images/products/hma3.jpeg'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'H&M Skinny Fit Blazer',
    productPrice: 1499,
    description:
      'H&M Single-breasted blazer in woven stretch fabric with narrow, notched lapels. Chest pocket, front pockets with flap, and an inner pocket. Decorative buttons at cuffs and a vent at back. Lined. Skinny Fit – slightly shorter style, shaped at chest, tapered sharply at waist, combined with narrow shoulders and sleeves for a completely tailored silhouette.',
    isOff: false,
    productImage: require('./images/products/hmb1.jpeg'),
    isAvailable: true,
    productImageList: [
      require('./images/products/hmb1.jpeg'),
      require('./images/products/hmb2.jpeg'),
      require('./images/products/hmb3.jpeg'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'PATEK PHILIPPE Complications Nautilus Annual Calendar',
    productPrice: 114950,
    description:
      'Pre-Owned Patek Philippe Complications Nautilus Annual Calendar (5726A001) self-winding automatic watch, features a 40.5mm stainless steel case surrounding a black dial on a brand new black alligator strap with a stainless steel deployant buckle.',
    isOff: true,
    offPercentage: 18,
    productImage: require('./images/accessories/watcha1.webp'),
    isAvailable: true,
    productImageList: [
      require('./images/accessories/watcha1.webp'),
      require('./images/accessories/watcha2.webp'),
      require('./images/accessories/watcha3.webp'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'DE BETHUNE DBS REF DBSRS1',
    productPrice: 89950,
    description: 'Pre-Owned De Bethune DBS (DBSRS1) manual wind watch, features a 42.8mm 18k rose gold case surrounding a silver skeleton dial on a black alligator strap with an 18k rose gold tang buckle' ,
    isOff: false,
    productImage: require('./images/accessories/watchb1.jpg'),
    isAvailable: true,
    productImageList: [
      require('./images/accessories/watchb1.jpg'),
      require('./images/accessories/watchb2.jpg'),
      require('./images/accessories/watchb3.jpg'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'TUDOR Black Bay Fifty-Eight',
    productPrice: 15450,
    description:
    'Pre-Owned Tudor Black Bay Fifty-Eight (79018V) self - winding automatic watch, features a 39mm 18k yellow gold case with a green anodised aluminum bezel surrounding a green dial on a brown leather strap with an 18k yellow gold tang buckle.' ,
    isOff: false,
    productImage: require('./images/accessories/watchc1.jpg'),
    isAvailable: false,
    productImageList: [
      require('./images/accessories/watchc1.jpg'),
      require('./images/accessories/watchc2.jpg'),
      require('./images/accessories/watchc3.jpg'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'TUDOR Black Bay Fifty-Eight',
    productPrice: 4450,
    description:
      'Pre-Owned Tudor Black Bay Fifty-Eight (79010SG) self - winding automatic watch, features a 39mm 925 sterling silver case with a taupe anodised aluminum bezel surrounding a taupe dial on a taupe fabric strap with a sterling silver tang buckle',
    isOff: false,
    productImage: require('./images/accessories/watchd1.jpg'),
    isAvailable: true,
    productImageList: [
      require('./images/accessories/watchd1.jpg'),
      require('./images/accessories/watchd2.jpg'),
      require('./images/accessories/watchd3.jpg'),
    ],
  },
];