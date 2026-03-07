import {Destination} from "@/app/(public)/test/page";

export const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
] as const;


export const destinations: Destination[] = [
    {
        title: "Basic Car Wash",
        subtitle: "Quick exterior wash for everyday shine",
        duration: "20 Minutes",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1600&q=80",
        description:
            "A fast and affordable exterior car wash that removes dust, mud, and road grime. Perfect for maintaining a clean look for daily drivers.",
    },
    {
        title: "Premium Car Wash",
        subtitle: "Deep clean with foam and wax protection",
        duration: "45 Minutes",
        difficulty: "Moderate",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&q=80",
        description:
            "Includes foam wash, wheel cleaning, and wax coating for a glossy finish. Ideal for protecting paint and maintaining long-term shine.",
    },
    {
        title: "Interior Car Detailing",
        subtitle: "Complete cabin cleaning and vacuum",
        duration: "60 Minutes",
        difficulty: "Moderate",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
        description:
            "Deep interior cleaning including seats, dashboard, carpets, and air vents. Removes dirt, stains, and odors for a fresh cabin experience.",
    },
    {
        title: "Full Car Detailing",
        subtitle: "Ultimate inside and outside detailing",
        duration: "2 Hours",
        difficulty: "Challenging",
        image: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=1600&q=80",
        description:
            "Comprehensive detailing service including exterior wash, waxing, interior vacuum, dashboard polish, and tire shine.",
    },
    {
        title: "Bike Quick Wash",
        subtitle: "Fast wash for motorcycles and scooters",
        duration: "15 Minutes",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1520975922284-0c1a2b9a5e9a?w=1600&q=80",
        description:
            "A quick but effective bike wash removing mud, dust, and road debris while keeping delicate components safe.",
    },
    {
        title: "Bike Deep Clean",
        subtitle: "Detailed wash for engines and chains",
        duration: "30 Minutes",
        difficulty: "Moderate",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80",
        description:
            "Includes chain cleaning, engine degreasing, and full body wash to restore your bike’s fresh showroom appearance.",
    },
    {
        title: "SUV Premium Wash",
        subtitle: "Special wash for large vehicles and SUVs",
        duration: "50 Minutes",
        difficulty: "Moderate",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
        description:
            "Designed for SUVs and large vehicles, including roof cleaning, tire scrubbing, and protective wax coating.",
    },
    {
        title: "Engine Bay Cleaning",
        subtitle: "Safe engine degreasing and cleaning",
        duration: "40 Minutes",
        difficulty: "Challenging",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
        description:
            "Carefully removes grease and dirt from the engine bay using safe cleaning agents and protective methods.",
    },
    {
        title: "Foam Snow Wash",
        subtitle: "Luxury foam wash for scratch-free cleaning",
        duration: "25 Minutes",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1593941707882-a56bbc8b2c0c?w=1600&q=80",
        description:
            "A thick foam layer lifts dirt safely from the paint surface, minimizing scratches while delivering a brilliant shine.",
    },
    {
        title: "Ceramic Coating Wash",
        subtitle: "Protective wash for coated vehicles",
        duration: "70 Minutes",
        difficulty: "Challenging",
        image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1600&q=80",
        description:
            "Special wash designed for ceramic-coated vehicles to maintain the hydrophobic surface and long-lasting shine.",
    },
    {
        title: "Express Interior Clean",
        subtitle: "Quick vacuum and dashboard wipe",
        duration: "25 Minutes",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80",
        description:
            "Perfect for busy drivers who want a quick interior refresh with vacuuming and dashboard cleaning.",
    },
    {
        title: "Luxury Car Spa",
        subtitle: "Premium spa treatment for high-end cars",
        duration: "3 Hours",
        difficulty: "Challenging",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80",
        description:
            "Complete luxury car spa including paint correction, wax protection, leather treatment, and full interior detailing.",
    },
] as const;