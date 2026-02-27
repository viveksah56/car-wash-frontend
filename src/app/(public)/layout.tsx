import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/Footer";

export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}