import { ItemsPage } from "../Pages/ItemsPage";
import { Header } from "../Components/UI/Header";

export const MainLayout = () => {
    return (
        <main>
            <Header/>
            <ItemsPage />
        </main>
    )
}