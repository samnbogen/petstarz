// page to see list of supplies

import Header from "@/app/components/header";
import SupplierList from "./supplier-list";

export default function Page() {
    return (    
        <main>
            <Header text="Suppliers" />
            <SupplierList />
        </main>
    );
}