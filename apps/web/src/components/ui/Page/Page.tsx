import "./Page.css";
import { ReactNode } from "react";

type PageProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Page({
  title,
  subtitle,
  children,
}: PageProps) {
  return (
    <div className="page">

      <header className="page-header">

        <div>
          <h1>{title}</h1>

          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>

      </header>

      <main className="page-content">

        {children}

      </main>

    </div>
  );
}