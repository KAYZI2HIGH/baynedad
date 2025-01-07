import Navbar from "@/components/navbar/navbar/Navbar";
import Footer from "@/components/sections/footer/footer";
import { auth } from "../../../auth";

const PageLayout = async ({ children }) => {
  const session = await auth()
  
  return (
    <div className={`antialiased`}>
        <Navbar session={session}/>
        {children}
        <Footer />
    </div>
  );
};

export default PageLayout;
