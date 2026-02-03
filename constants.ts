import { Product } from './types';

export const WHATSAPP_NUMBER = "5568992476767";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fúria do Dragão",
    price: 75.00,
    dimensions: "Lâmina: 13,5cm | Cabo: 14cm | Total: 27,5cm",
    description: "Uma peça mítica onde a lâmina nasce da boca de um dragão dourado.",
    features: [
      "Guarda (Bolster): Cabeça de dragão dourada esculpida.",
      "Lâmina: Acabamento em dois tons (preto e prata) imitando chamas.",
      "Cabo: Textura que imita escamas de dragão."
    ],
    imageSeed: 101,
    image: "assets/Furia do Dragao.png"
  },
  {
    id: 2,
    name: "A Safari Damascus",
    price: 112.50,
    dimensions: "Lâmina: 9,8cm | Cabo: 14,5cm | Total: 24,5cm",
    description: "Sinônimo de status e qualidade com visual de chifre de antílope.",
    features: [
      "Cabo Estilo Chifre: Formato espiralado e cônico, pega anatômica.",
      "Lâmina Padrão Damasco: Desenhos característicos 'ondas no metal'.",
      "Bainha de Couro: Marrom com botões de pressão."
    ],
    imageSeed: 102,
    image: "assets/A Safari Damascus.png"
  },
  {
    id: 3,
    name: "A Dama de Branco",
    price: 80.00,
    dimensions: "Lâmina: 10,5cm | Cabo: 11,4cm | Total: 21,9cm",
    description: "Uma construção complexa e belíssima mesclando osso e chifre.",
    features: [
      "Bainha em Madeira: Design vazado (esqueletizado) em madeira nobre.",
      "Cabo Bone & Stag: Mescla visual de osso polido e textura rústica.",
      "Lâmina Damasco: Padrão 'plumado' (Feather Damascus)."
    ],
    imageSeed: 103,
    image: "assets/A Dama de Branco.png"
  },
  {
    id: 4,
    name: "O Guardião Dourado",
    price: 75.00,
    dimensions: "Lâmina: 13cm | Cabo: 16cm | Total: 29cm",
    description: "Imponência dourada com acabamento de alta complexidade.",
    features: [
      "Bainha em Madeira: Design vazado artístico em madeira nobre.",
      "Cabo Bone & Stag: Empunhadura mesclada polida e rústica.",
      "Lâmina Damasco: Padrão plumado de forja de alto nível."
    ],
    imageSeed: 104,
    image: "assets/O Guardião Dourado.png"
  },
  {
    id: 5,
    name: "A Lenda 1942",
    price: 95.00,
    dimensions: "Lâmina: 18cm | Cabo: 13cm | Total: 31cm",
    description: "Suprassumo da tradição com visual Old School maravilhoso.",
    features: [
      "Cabo em Discos de Couro: Pega quente, confortável e clássica.",
      "Lâmina Persian/Trailing Point: Curvatura acentuada, excelente para caça.",
      "Construção Robusta: Guarda dupla e pomo em metal polido."
    ],
    imageSeed: 105,
    image: "assets/A Lenda 1942.jpeg",
    isSold: true
  },
  {
    id: 6,
    name: "Ranger Vermelho",
    price: 95.00,
    dimensions: "Lâmina: 17cm | Cabo: 13cm | Total: 30cm",
    description: "Estética elegante em tom avermelhado com características de combate.",
    features: [
      "Cabo Red Wood: Tom vinho/rubi, fácil localização na mata.",
      "Sangrador Profundo: Sulco na lâmina para alívio de peso.",
      "Acabamento: Metais polidos nas extremidades para durabilidade."
    ],
    imageSeed: 106,
    image: "assets/Ranger Vermelha.jpeg"
  },
  {
    id: 7,
    name: "Xingu",
    price: 100.00,
    dimensions: "Lâmina: 18cm | Cabo: 12cm | Total: 30cm",
    description: "Acabamento superior com estilo barroco e lâmina agressiva.",
    features: [
      "Cabo Wave (Ondulado): Trabalho de metal integrado à madeira.",
      "Virolas Gravadas: Gravuras florais a laser estilo 'joia antiga'.",
      "Lâmina Leaf Shape: Formato de folha larga com perfil agressivo."
    ],
    imageSeed: 107,
    image: "assets/Xingu.jpeg",
    isSold: true
  },
  {
    id: 8,
    name: "Lobo Nórdico",
    price: 75.00,
    dimensions: "Lâmina: 17cm | Cabo: 12cm | Total: 29cm",
    description: "Identidade mitológica forte com textura de aço forjado.",
    features: [
      "Lâmina Hammered: Textura martelada, ideal para cortes de impacto.",
      "Guarda de Lobo: Cabeça de lobo em metal acobreado.",
      "Cabo Anatômico: Imita madeira esculpida para pegada firme."
    ],
    imageSeed: 108,
    image: "assets/Lobo Nórdico.jpeg"
  },
  {
    id: 9,
    name: "Adaga Imperial",
    price: 80.00,
    dimensions: "Lâmina: 14cm | Cabo: 14cm | Total: 28cm",
    description: "Lâmina leve e confiável, ideal para colecionadores e churrasqueiros.",
    features: [
      "Guarda Dragão: Lâmina nasce da boca de um dragão envelhecido.",
      "Cabo Dragon Scales: Textura de escamas para aderência total.",
      "Estilo Brute Forge: Acabamento rústico com fio navalha."
    ],
    imageSeed: 109,
    image: "assets/Adaga Imperial.jpeg"
  },
  {
    id: 10,
    name: "Aventureira",
    price: 85.00,
    dimensions: "Lâmina: 17,5cm | Cabo: 13cm | Total: 30,5cm",
    description: "Uma verdadeira obra de arte.",
    features: [
      "Lâmina Agressiva: Clip Point com dorso trabalhado.",
      "Empunhadura de Elite: Estética de anéis de couro com arabescos em metal.",
      "Bainha: Nylon reforçado com passador de cinto."
    ],
    imageSeed: 110,
    image: "assets/Aventureira.jpeg",
    isSold: true
  },
  {
    id: 11,
    name: "Mateira Fronteira",
    price: 90.00,
    dimensions: "Lâmina: 15cm | Cabo: 11cm | Total: 26cm",
    description: "Design Full Tang (Monobloco) para resistência extrema a impactos.",
    features: [
      "Full Tang: Aço vai até o final do cabo.",
      "Madeira Natural: Cabo anatômico e tratado.",
      "Lâmina Skinner Modificada: Curvatura para precisão cirúrgica."
    ],
    imageSeed: 111,
    image: "assets/Mateira Fronteira.jpeg"
  },
  {
    id: 12,
    name: "Texas Ranger",
    price: 80.00,
    dimensions: "Lâmina: 17cm | Cabo: 13cm | Total: 30cm",
    description: "Não é apenas uma faca, é um símbolo com estrelas incrustadas.",
    features: [
      "Cabo Commander: Madeira laminada com estrelas de metal.",
      "Lâmina Trailing Point: Acabamento acetinado, ideal para fatiar.",
      "Ergonomia: Contornos anatômicos e espaçadores coloridos."
    ],
    imageSeed: 112,
    image: "assets/Texas Ranger.jpeg"
  },
  {
    id: 13,
    name: "Royal Arabesque",
    price: 80.00,
    dimensions: "Lâmina: 18cm | Cabo: 12,5cm | Total: 30,5cm",
    description: "Um item de distinção com detalhes artísticos em relevo.",
    features: [
      "Detalhes em Arabesco: Gravações florais na guarda e pomo.",
      "Madeira Nobre: Cabo polido com contraste prateado.",
      "Lâmina Clip Point: Aço inoxidável potente e afiado."
    ],
    imageSeed: 113,
    image: "assets/Royal Arabesque.jpeg"
  },
  {
    id: 14,
    name: "Red Viper",
    price: 100.00,
    dimensions: "Lâmina: 19cm | Cabo: 13cm | Total: 32cm",
    description: "Impossível passar despercebida. Visualmente deslumbrante.",
    features: [
      "Cabo Bicolor: Vermelho carmesim e preto com anéis polidos.",
      "Detalhes Dourados: Guarda com incrustação sofisticada.",
      "Robustez: Acompanha bainha em nylon preto reforçado."
    ],
    imageSeed: 114,
    image: "assets/Red Viper.jpeg",
    isSold: true
  },
  {
    id: 15,
    name: "Guardiã da Mata",
    price: 90.00,
    dimensions: "Lâmina: 17cm | Cabo: 13cm | Total: 30cm",
    description: "Versatilidade total com serra no dorso funcional.",
    features: [
      "Serra Dorso (Sawback): Ideal para cortar galhos ou marcar madeira.",
      "Empunhadura Clássica: Design Old School com anéis prensados.",
      "Aço Inox: Resistente à corrosão para uso pesado."
    ],
    imageSeed: 115,
    image: "assets/A Guardiã da Mata.jpeg"
  },
  {
    id: 16,
    name: "Cimitarra King",
    price: 150.00,
    dimensions: "Lâmina: 45,7cm | Cabo: 17,8cm | Total: 63,5cm",
    description: "Fusão entre a brutalidade de um facão e a elegância persa.",
    features: [
      "Tamanho King: 63,5cm de comprimento total.",
      "Design Agressivo: Recortes para aerodinâmica e alívio de peso.",
      "Versatilidade: Ideal para defesa, trilhas ou decoração."
    ],
    imageSeed: 116,
    image: "assets/Cimitarra King.jpg"
  },
  {
    id: 17,
    name: "Jungle Commander A-141",
    price: 90.00,
    dimensions: "Lâmina: 17,5cm | Cabo: 12,5cm | Total: 30cm",
    description: "Acabamento de luxo bicolor que impressiona qualquer convidado.",
    features: [
      "Cabo Bicolor: Ébano e madeira clara com anéis de latão.",
      "Lâmina com Fuller: Sulco sangrador para equilíbrio perfeito.",
      "Versatilidade: Robusta para campo, elegante para churrasco."
    ],
    imageSeed: 117,
    image: "assets/Jungle Comander A-141.png"
  },
  {
    id: 18,
    name: "Espírito Selvagem",
    price: 90.00,
    dimensions: "Lâmina: 19cm | Cabo: 12,5cm | Total: 31,5cm",
    description: "Cabo híbrido com padrão orgânico único em resina e madeira.",
    features: [
      "Empunhadura Híbrida: Madeira natural e resina escura.",
      "Lâmina Trailing Point: Excepcional para esfola e cortes longos.",
      "Bainha Tática: Nylon com costura vermelha reforçada."
    ],
    imageSeed: 118,
    image: "assets/Espirito Selvagem.png",
    isSold: true
  },
  {
    id: 19,
    name: "Iron Hammer",
    price: 95.00,
    dimensions: "Lâmina: 20cm | Cabo: 12cm | Total: 32cm",
    description: "Martelo de Ferro. Textura martelada exclusiva.",
    features: [
      "Acabamento Hammered: Evita que alimentos grudem na lâmina.",
      "Cabo de Luxo: Madeira nobre com inserto em resina azul marinho.",
      "Segurança: Guarda em 'S' de aço polido."
    ],
    imageSeed: 119,
    image: "assets/Iron Hammer.jpeg",
    isSold: true
  },
  {
    id: 20,
    name: "Royal Hunter",
    price: 80.00,
    dimensions: "Lâmina: 18cm | Cabo: 12cm | Total: 30cm",
    description: "Caçador Real. Remete às clássicas facas de caça europeias.",
    features: [
      "Detalhes Artísticos: Bolster com gravuras de arabescos em relevo.",
      "Cabo em Madeira Nobre: Tom avermelhado, fixado com pinos de latão.",
      "Lâmina Drop Point: Geometria versátil com afiação navalha."
    ],
    imageSeed: 120,
    image: "assets/Royal Hunter.jpg",
    isSold: true
  },
  {
    id: 21,
    name: "Tradição",
    price: 70.00,
    dimensions: "Lâmina: 16cm | Cabo: 13cm | Total: 29cm",
    description: "Projetado especificamente para 'courear' (esfolar) e abrir a caça sem perfurar as vísceras.",
    features: [
      "Lâmina Funcional: possui sangrador (sulco) na lâmina e afiação de navalha, ideal para cortes profundos",
      "Cabo Premium: possui um design exclusivo em preto com uma faixa central vermelha, remetendo ao 'sangue nobre'.",
      "Bainha de Marca: Nylon reforçado autêntico."
    ],
    imageSeed: 121,
    image: "assets/tradicao.jpg"
  }
];