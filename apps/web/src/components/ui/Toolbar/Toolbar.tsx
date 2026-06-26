import "./Toolbar.css";

type ToolbarProps = {
  children: React.ReactNode;
};

export default function Toolbar({
  children,
}: ToolbarProps) {
  return (
    <div className="toolbar-container">
      {children}
    </div>
  );
}