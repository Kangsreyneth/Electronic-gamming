
import mask2 from "./assets/image/mask2.jpg";
import accessor from "./assets/image/access.jpg";
import mask4 from "./assets/image/mask4.jpg";
import mask5 from "./assets/image/mask5.jpg";
import mask6 from "./assets/image/mask6.jpg";
import mask7 from "./assets/image/mask7.jpg";
import mask8 from "./assets/image/mask8.jpg";

export const menu_top=[
    {name:"Home", link: "/"},
    {name:"Shop", link: "/shop"},
    {name:"Page", link: "/page"},
    {name:"blog", link: "/blog"},


];

export const menu_bottom = [
  { name: "HEADSETS", link: "/headsets" },
  { name: "KEYBOARDS", link: "/keyboards" },
  { name: "MOUSE", link: "/mouse" },
  { name: "GAMING CONTROLLERS", link: "/gaming-controllers" },
  { name: "MONITORS", link: "/monitors" },
  { name: "MICROPHONES", link: "/microphones" },
  { name: "POWER", link: "/power" },
  { name: "ACCESSORIES", link: "/accessories" },
  { name: "SALE", link: "/sale" }
];

export const Topcategories = [
  {
    id: 1,
    title1: "Gaming",
    title2: "Controllers",
    products: 17,
    image: mask4
  },
  {
    id: 2,
    title1: "Gaming",
    title2: "Mouse",
    products: 16,
    image: mask6
  },
  {
    id: 3,
    title1: "Gaming",
    title2: "Chairs",
    products: 4,
    image: mask5
    
  },
  {
    id: 4,
    title1: "Gaming",
    title2: "Headsets",
    products: 29,
    image:mask8
  },
  {
  id: 5,
  title1: "Gaming",
  title2: "Keyboards",
  products: 9,
  image: mask7
},
{
  id: 6,
  title1: "Gaming",
  title2: "Accessories",
  products: 27,
  image:accessor 
},

];

export const categoriesAllInButton = [
  {
    id: "cpus",
    category: "CPUs",
    products: [
      { id: "cpu1", title: "Intel Core i7 12700K", priceOld: "$420", priceDiscount: "$380", image: "https://i.pinimg.com/1200x/82/6d/0f/826d0f7ea3f691784e052588ee3fe29b.jpg",description: "12th Gen Intel Core i7 processor with 12 cores and 20 threads, designed for gaming and productivity with high clock speeds and efficiency cores."},
      { id: "cpu2", title: "AMD Ryzen 7 5800X", priceOld: "$390", priceDiscount: "$350", image: "https://i.pinimg.com/1200x/05/ef/ab/05efab2bd6e7f2037e2b32f341fafb05.jpg",description: "8-core, 16-thread Ryzen processor built on Zen 3 architecture for outstanding gaming and multitasking performance."},
      { id: "cpu3", title: "Intel Core i9 13900K", priceOld: "$650", priceDiscount: "$599", image: "https://i.pinimg.com/736x/05/f6/21/05f62194862208f01aa6e556d4635c71.jpg",description: "Flagship Intel 13th Gen processor with 24 cores (8 Performance + 16 Efficiency) and blazing-fast turbo boost up to 5.8 GHz."},
      { id: "cpu4", title: "AMD Ryzen 9 5900X",  priceOld: "$550",  priceDiscount: "$499",  image: "https://media.ldlc.com/r1600/ld/products/00/05/74/60/LD0005746003_1.jpg", description: "12-core, 24-thread Ryzen CPU with high boost clock speeds for creators, streamers, and serious gamers."},
      { id: "cpu5", title: "Intel Core i5 12400F", priceOld: "$220", priceDiscount: "$199", image: "https://i.pinimg.com/1200x/fa/79/43/fa794306cdd235b3562cab4faf3666bc.jpg",description: "Budget-friendly 6-core, 12-thread processor with excellent gaming performance and efficiency."},
      { id: "cpu6", title: "AMD Ryzen 5 5600G", priceOld: "$250", priceDiscount: "$210", image: "https://i.pinimg.com/1200x/71/a0/8b/71a08b1c2f1bb4fb6fab3a9d3d7ffb18.jpg",description: "6-core APU with integrated Radeon Vega graphics, perfect for entry-level gaming without a dedicated GPU."},
      { id: "cpu7", title: "Intel Core i3 12100", priceOld: "$150", priceDiscount: "$120", image: "https://i.pinimg.com/1200x/11/5d/bd/115dbd09a30c68bc4539e962579b1f3c.jpg",description: "Affordable 4-core, 8-thread CPU with strong single-core performance for budget gaming builds."},
      { id: "cpu8", title: "AMD Ryzen 3 3300X", priceOld: "$180", priceDiscount: "$150", image: "https://i.pinimg.com/736x/7c/2b/16/7c2b1680731a4acfc06139be5a387034.jpg",description: "Quad-core processor with SMT, delivering excellent value and solid 1080p gaming performance."}
    ]
  },
  {
    id: "graphics_cards",
    category: "Graphics Cards",
    products: [
      { id: "gpu1", title: "NVIDIA GeForce RTX 4070", priceOld: "$650", priceDiscount: "$599", image: "https://i.pinimg.com/736x/bb/8c/47/bb8c47efa2e1336fee7e61669bddddda.jpg",description: "Powerful mid-high range GPU with ray tracing and DLSS 3 support, ideal for 1440p and 4K gaming."},
      { id: "gpu2", title: "AMD Radeon RX 6800 XT", priceOld: "$620", priceDiscount: "$570", image: "https://i.pinimg.com/736x/7b/1f/00/7b1f00e937e40806021e6bc10df9d777.jpg",description: "High-performance GPU with 16GB GDDR6 memory, delivering strong 4K gaming and content creation performance."},
      { id: "gpu3", title: "NVIDIA GeForce RTX 4090", priceOld: "$1600", priceDiscount: "$1499", image: "https://i.pinimg.com/1200x/28/87/2b/28872be0455862181405e36a3847a85c.jpg",description: "The ultimate flagship GPU with 24GB GDDR6X memory, unmatched 4K/8K gaming, and AI acceleration."},
      { id: "gpu4", title: "AMD Radeon RX 7900 XT", priceOld: "$950", priceDiscount: "$899", image: "https://i.pinimg.com/736x/81/03/b6/8103b6e9fb4f1d593c0b31904d271c93.jpg",description: "RDNA 3-powered GPU with 20GB memory, delivering premium gaming performance at a competitive price."},
      { id: "gpu5", title: "NVIDIA GeForce RTX 3060 Ti", priceOld: "$450", priceDiscount: "$399", image: "https://i.pinimg.com/1200x/a1/26/ae/a126ae0d794e18a19eab3614f10d271f.jpg",description: "Affordable GPU offering strong 1080p and 1440p gaming with ray tracing capabilities."},
      { id: "gpu6", title: "AMD Radeon RX 6700 XT", priceOld: "$480", priceDiscount: "$430", image: "https://i.pinimg.com/736x/82/ca/1c/82ca1c1e65635b0d4463a2346979e4a6.jpg",description: "12GB GDDR6 GPU built for high-refresh 1440p gaming and VR experiences."},
      { id: "gpu7", title: "NVIDIA GeForce GTX 1660 Super", priceOld: "$300", priceDiscount: "$260", image: "https://i.pinimg.com/1200x/bd/f6/dc/bdf6dc25786726d74a1929136fa5e986.jpg",description: "Budget-friendly GPU without ray tracing, still capable of smooth 1080p gaming."},
      { id: "gpu8", title: "AMD Radeon RX 6600", priceOld: "$330", priceDiscount: "$290", image: "https://i.pinimg.com/736x/d7/07/54/d707549db91b8919cf968092611e4804.jpg",description: "Efficient 8GB GPU for reliable 1080p gaming with modern features like Smart Access Memory."}
    ]
  },
  {
    id: "memory",
    category: "Memory",
    products: [
      { id: "ram1", title: "Corsair Vengeance 16GB DDR5", priceOld: "$150", priceDiscount: "$120", image: "https://i.pinimg.com/1200x/b2/e7/b7/b2e7b76e2557f01f7558126e0cc3c416.jpg" },
      { id: "ram2", title: "G.Skill Trident Z 32GB DDR4", priceOld: "$180", priceDiscount: "$140", image: "https://i.pinimg.com/736x/8d/90/d6/8d90d633685e7ffb8794e0a6be4eb378.jpg" },
      { id: "ram3", title: "Kingston Fury 16GB DDR4", priceOld: "$95", priceDiscount: "$75", image: "https://i.pinimg.com/736x/44/f9/4c/44f94c44ac978b0107a985eca9578cad.jpg" },
      { id: "ram4", title: "Crucial Ballistix 8GB DDR4", priceOld: "$60", priceDiscount: "$45", image: "https://i.pinimg.com/1200x/90/dc/85/90dc85f13d8fcd1c62809b001e67cdc4.jpg" },
      { id: "ram5", title: "TeamGroup T-Force 32GB DDR5", priceOld: "$210", priceDiscount: "$180", image: "https://i.pinimg.com/736x/11/6d/2c/116d2c7823c6e828630d8ddf91f0620b.jpg" },
      { id: "ram6", title: "Patriot Viper 16GB DDR4", priceOld: "$85", priceDiscount: "$65", image: "https://i.pinimg.com/1200x/45/be/dd/45bedd4093efec80209980c5de665d58.jpg" },
      { id: "ram7", title: "ADATA XPG Lancer 32GB DDR5", priceOld: "$200", priceDiscount: "$170", image: "https://i.pinimg.com/1200x/dd/61/e3/dd61e34544367da09556d0c9c6c37e72.jpg" },
      { id: "ram8", title: "Samsung 8GB DDR4 OEM", priceOld: "$40", priceDiscount: "$30", image: "https://i.pinimg.com/1200x/ff/8a/e7/ff8ae7dc433d447d9453c3667be6a183.jpg" }
    ]
  },
  {
    id: "monitors",
    category: "Monitors",
    products: [
      { id: "monitor1", title: "ASUS TUF Gaming 27'' Monitor", priceOld: "$320", priceDiscount: "$280", image: "https://i.pinimg.com/1200x/7b/ae/65/7bae65e9b2f1c237b554e0ca37c72f3e.jpg" },
      { id: "monitor2", title: "LG UltraGear 34'' Curved Monitor", priceOld: "$650", priceDiscount: "$580", image: "https://i.pinimg.com/1200x/d3/4a/dd/d34add2a440a13a960c7eaef729fc1ce.jpg" },
      { id: "monitor3", title: "Dell Alienware 32'' QD-OLED", priceOld: "$1200", priceDiscount: "$1100", image: "https://i.pinimg.com/1200x/f0/d6/b8/f0d6b842f3f5bf9e8040a77ba035ff54.jpg" },
      { id: "monitor4", title: "Samsung Odyssey G7 27''", priceOld: "$700", priceDiscount: "$630", image: "https://i.pinimg.com/1200x/ef/1d/62/ef1d62f37191c7a59814f68e3659acef.jpg" },
      { id: "monitor5", title: "Acer Predator 24'' 144Hz", priceOld: "$250", priceDiscount: "$220", image: "https://i.pinimg.com/736x/92/49/99/924999d6da74ac04ce9dcfeac84aaca3.jpg" },
      { id: "monitor6", title: "MSI Optix 27'' Curved", priceOld: "$320", priceDiscount: "$280", image: "https://i.pinimg.com/1200x/8d/64/97/8d6497a46637b6e313d269380720c76f.jpg" },
      { id: "monitor7", title: "BenQ Zowie XL2411K 24''", priceOld: "$220", priceDiscount: "$190", image: "https://i.pinimg.com/736x/aa/1d/82/aa1d82d9fdcb8da8da4714cb3ea4f7fe.jpg" },
      { id: "monitor8", title: "Gigabyte M32U 32'' 4K", priceOld: "$800", priceDiscount: "$750", image: "https://m.media-amazon.com/images/I/71PqY4-jbHL._UF894,1000_QL80_.jpg" }
    ]
  }
];

// export const controllerProducts = [
//   {
//     id: "ctrl1",
//     name: "Intel Core i7 12700K",
//     description: "Intel Core i7-12700K ជា CPU Alder Lake មាន 12 cores និង 20 threads ផ្តល់ performance ខ្ពស់សម្រាប់ gamers និង creators។",
//     priceOld: "$420",
//     priceDiscount: "$380",
//     image: mask4
//   },
//   {
//     id: "ctrl2",
//     name: "AMD Ryzen 7 5800X",
//     description: "AMD Ryzen 7 5800X មាន 8 cores និង 16 threads ផ្អែកលើ Zen 3 architecture ផ្តល់ប្រសិទ្ធភាពខ្ពស់សម្រាប់ហ្គេម និងការងារទាមទារ។",
//     priceOld: "$390",
//     priceDiscount: "$350",
//     image: cpu2
//   },
//   {
//     id: "ctrl3",
//     name: "NVIDIA GeForce RTX 4070",
//     description: "NVIDIA RTX 4070 មាន 12GB VRAM, គាំទ្រ ray tracing និង DLSS 3, សមស្របសម្រាប់ gamers 1440p និង creators។",
//     priceOld: "$650",
//     priceDiscount: "$599",
//     image: grap1
//   },
//   {
//     id: "ctrl4",
//     name: "AMD Radeon RX 6800 XT",
//     description: "AMD RX 6800 XT មាន 16GB VRAM និង RDNA 2 architecture សម្រាប់ 4K gaming និង workstation។",
//     priceOld: "$620",
//     priceDiscount: "$570",
//     image: grap2
//   },
//   {
//     id: "ctrl5",
//     name: "Corsair Vengeance 16GB DDR5",
//     description: "Corsair Vengeance 16GB DDR5 RAM មានល្បឿនខ្ពស់ សមស្របសម្រាប់ workstation និង gaming PCs។",
//     priceOld: "$150",
//     priceDiscount: "$120",
//     image: memory1
//   },
//   {
//     id: "ctrl6",
//     name: "G.Skill Trident Z 32GB DDR4",
//     description: "G.Skill Trident Z RGB DDR4 32GB មាន performance ខ្ពស់ សម្រាប់ content creators និង gamers។",
//     priceOld: "$180",
//     priceDiscount: "$140",
//     image: memory2
//   },
//   {
//     id: "ctrl7",
//     name: "ASUS TUF Gaming 27''",
//     description: "ASUS TUF Gaming 27 មាន refresh rate 165Hz និង response time 1ms សមស្របសម្រាប់ gamers។",
//     priceOld: "$320",
//     priceDiscount: "$280",
//     image: monitor1
//   },
//   {
//     id: "ctrl8",
//     name: "LG UltraGear 34'' Curved",
//     description: "LG UltraGear 34'' Curved UltraWide QHD ផ្តល់បទពិសោធន៍ immersive gaming និង productivity។",
//     priceOld: "$650",
//     priceDiscount: "$580",
//     image: monitor2
//   }
// ];