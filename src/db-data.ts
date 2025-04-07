
export interface Employee{
    id: number;
    imgUrl: string;
    name: string;
    position: string;
    bio: string;
}

export const Employees: Employee[] = [

    {
        id: 1,
        imgUrl: "https://images.pexels.com/photos/11302135/pexels-photo-11302135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
        name: "Lily Thompson",
        position: "Operations and Inventory Manager",
        bio: "Lily brings a keen eye for detail and exceptional organizational skills to Kit Collective as the Operations & Inventory Manager. With a background in logistics and supply chain management, she ensures that every kit is carefully curated, packed, and delivered on time. Lily’s dedication keeps our inventory running smoothly, allowing us to consistently meet customer demands with quality and precision.",
    },
    {
        id: 2,
        imgUrl: "https://images.pexels.com/photos/8789237/pexels-photo-8789237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Emma Liu",
        position: "Marketing & Customer Engagement Specialist",
        bio: "Emma is passionate about connecting with customers and sharing Kit Collective’s story as the Marketing & Customer Engagement Specialist. With expertise in social media and digital marketing, she engages with the crafting community and brings our brand to life online. Emma’s focus on customer satisfaction and brand growth helps spread the joy of crafting to a wider audience.",
    },
    {
        id: 3,
        imgUrl: "https://images.pexels.com/photos/15921559/pexels-photo-15921559/free-photo-of-woman-posing-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Sophia Ramirez",
        position: "Product Designer & Content Creator",
        bio: "As Kit Collective’s Product Designer & Content Creator, Sophia brings creativity and a deep love for crafting into each design. With a background in textile arts, she curates crochet kits that cater to all skill levels and styles, making each project inspiring and accessible. Sophia’s innovative designs and instructional content help customers enjoy a rewarding crafting experience.",
    }
];

export interface Product{
    id: number;
    imgUrl: string;
    title: string;
    pcode: string;
    desc: string;
}

export const Products: Product[] = [
    {
       id: 1,
       imgUrl: "https://images.pexels.com/photos/7527841/pexels-photo-7527841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
       title: "Aria Bralette Top",
       pcode: "SMR-TOP-001",
       desc: "This Simple Summer Crochet Kit includes everything you need to create your own comfortable and stylish Aria Bralette Top.",
    },
    {
       id: 2,
       imgUrl: "https://images.pexels.com/photos/5488397/pexels-photo-5488397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       title: "Totoro Amigurumi",
       pcode: "SML-AMI-001",
       desc: "This Adorable Amigurumi Crochet Kit includes everything you need to create your own adorable and squishy Totoro Amigurumi toy.",
    },
    {
       id: 3,
       imgUrl: "https://images.pexels.com/photos/27050875/pexels-photo-27050875/free-photo-of-model-wearing-openwork-sweater-posing-in-rapeseed-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       title: "Leila Mesh Pullover",
       pcode: "SMR-TOP-002",
       desc: "This Simple Summer Crochet Kit includes everything you need to create your own comfortable and stylish Leila Mesh Pullover.",
    },
    {
       id: 4,
       imgUrl: "https://images.pexels.com/photos/8221775/pexels-photo-8221775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       title: "Elena Book Bag",
       pcode: "CRO-BAG-001",
       desc: "This Practically Soft Crochet Kit includes everything you need to create your own lightweight and stylish Elena Book Bag.",
    },
]