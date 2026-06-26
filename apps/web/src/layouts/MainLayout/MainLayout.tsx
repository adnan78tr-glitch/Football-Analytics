import "./MainLayout.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatusBar from "../../components/StatusBar/StatusBar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="layout">

      <Header />

      <div className="layout-body">

        <Sidebar />

        <main className="layout-content">
          {children}
        </main>

      </div>

      <StatusBar />

    </div>
  );
}