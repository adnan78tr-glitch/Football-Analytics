import "./ExplorerFooter.css";

import {
    Database,
    Filter,
    CheckSquare,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function ExplorerFooter() {

    return (

        <footer className="explorer-footer">

            <div className="footer-left">

                <div className="footer-card">

                    <Database size={18} />

                    <div>

                        <span>Toplam Maç</span>

                        <strong>5</strong>

                    </div>

                </div>

                <div className="footer-card">

                    <Filter size={18} />

                    <div>

                        <span>Aktif Filtre</span>

                        <strong>0</strong>

                    </div>

                </div>

                <div className="footer-card">

                    <CheckSquare size={18} />

                    <div>

                        <span>Seçili</span>

                        <strong>0</strong>

                    </div>

                </div>

            </div>

            <div className="footer-right">

                <select>

                    <option>25 / Sayfa</option>

                    <option>50 / Sayfa</option>

                    <option>100 / Sayfa</option>

                </select>

                <button>

                    <ChevronLeft size={18} />

                </button>

                <button className="active">

                    1

                </button>

                <button>

                    <ChevronRight size={18} />

                </button>

                <span>

                    1-5 / 5

                </span>

            </div>

        </footer>

    );

}