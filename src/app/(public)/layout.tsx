import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/Footer";

export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar/>
            <main className="flex-1 w-full">
                {children}
            </main>
            <Footer/>
        </div>
    );
}