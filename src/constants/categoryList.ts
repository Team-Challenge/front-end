import head from '@/assets/category-icons/head.svg';
import ears from '@/assets/category-icons/ears.svg';
import neck from '@/assets/category-icons/neck.svg';
import hands from '@/assets/category-icons/hands.svg';
import accessories from '@/assets/category-icons/accessories.svg';
import sets from '@/assets/category-icons/sets.svg';

export const categoryList = [
  {
    id: 1,
    label: 'На голову',
    icon: head,
    path: '/head',
    // subcategories: ['Заколки', 'Обручі', 'Резинки', 'Хустинки'],
    // subcategories: {
    //   '11': 'Заколки',
    //   '12': 'Обручі',
    //   '13': 'Резинки',
    //   '14': 'Хустинки',
    // },
    subcategories: [
      {
        id: 11,
        label: 'Заколки',
        path: '/hair-clips',
      },
      {
        id: 12,
        label: 'Обручі',
        path: '/hairband',
      },
      {
        id: 13,
        label: 'Резинки',
        path: '/scrunchie',
      },
      {
        id: 14,
        label: 'Хустинки',
        path: '/shawl',
      },
    ],
  },
  {
    id: 2,
    label: 'На вуха',
    icon: ears,
    path: '/ears',
    // subcategories: ['Сережки', 'Моносережки'],
    // subcategories: {
    //   '21': 'Сережки',
    //   '22': 'Моносережки',
    // },
    subcategories: [
      {
        id: 21,
        label: 'Сережки',
        path: '/earrings',
      },
      {
        id: 22,
        label: 'Моносережки',
        path: '/mono-earrings',
      },
    ],
  },
  {
    id: 3,
    label: 'На шию',
    icon: neck,
    path: '/neck',
    // subcategories: [
    //   'Зґарди',
    //   'Шелести',
    //   'Ґердани',
    //   'Силянки',
    //   'Кризи',
    //   'Чокери',
    //   'Намиста',
    //   'Дукачі',
    //   'Кулони та підвіски',
    // ],
    // subcategories: {
    //   '31': 'Зґарди',
    //   '32': 'Шелести',
    //   '33': 'Ґердани',
    //   '34': 'Силянки',
    //   '35': 'Кризи',
    //   '36': 'Чокери',
    //   '37': 'Намиста',
    //   '38': 'Дукачі',
    //   '39': 'Кулони та підвіски',
    // },
    subcategories: [
      {
        id: 31,
        label: 'Зґарди',
        path: '/zgarda',
      },
      {
        id: 32,
        label: 'Шелести',
        path: '/shelest',
      },
      {
        id: 33,
        label: 'Ґердани',
        path: '/gerdans',
      },
      {
        id: 34,
        label: 'Силянки',
        path: '/sylyanka',
      },
      {
        id: 35,
        label: 'Кризи',
        path: '/crisis',
      },
      {
        id: 36,
        label: 'Чокери',
        path: '/chokers',
      },
      {
        id: 37,
        label: 'Намиста',
        path: '/necklaces',
      },
      {
        id: 38,
        label: 'Дукачі',
        path: '/dukachi',
      },
      {
        id: 39,
        label: 'Кулони та підвіски',
        path: '/pendants',
      },
    ],
  },
  {
    id: 4,
    label: 'На руки',
    icon: hands,
    path: '/hands',
    // subcategories: ['Браслети', 'Каблучки'],
    // subcategories: {
    //   '41': 'Браслети',
    //   '42': 'Каблучки',
    // },
    subcategories: [
      {
        id: 41,
        label: 'Браслети',
        path: '/bracelets',
      },
      {
        id: 42,
        label: 'Каблучки',
        path: '/rings',
      },
    ],
  },
  {
    id: 5,
    label: 'Аксесуари',
    icon: accessories,
    path: '/accessories',
    // subcategories: ['Котильйони', 'Брошки', 'Сумки'],
    // subcategories: {
    //   '51': 'Котильйони',
    //   '52': 'Брошки',
    //   '53': 'Сумки',
    // },
    subcategories: [
      {
        id: 51,
        label: 'Котильйони',
        path: '/cotillions',
      },
      {
        id: 52,
        label: 'Брошки',
        path: '/brooches',
      },
      {
        id: 53,
        label: 'Сумки',
        path: '/handbags',
      },
    ],
  },
  {
    id: 6,
    label: 'Набори',
    icon: sets,
    path: '/sets',
    // subcategories: {
    //   '61': 'Набір',
    // },
  },
];
