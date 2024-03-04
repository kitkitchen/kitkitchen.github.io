export const Button: React.FC<{ href: string; label: string }> = ({
    href,
    label,
}) => {
    return (
        <a
            href={href}
            style={{
                backgroundColor: "transparent",
                boxShadow: "-1px 0 1px 1px rgba(0,0,0,0.2) inset",
                
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "20px",
            }}
        >
            {label}
        </a>
    );
};
