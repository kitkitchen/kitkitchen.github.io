import { Button } from "../components/button";

const Hero = () => {
    return (
        <div
            style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                padding: "50px",
                backgroundColor: "rgb(2,0,36)",
                flex: 1,
                background:
                    // "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(248,86,6,1) 100%)",
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(191,63,1,1) 100%)",
                color: "#F9F6EE",
            }}
        >
            <p
                style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    textShadow: "-4px -4px 10px #000000",
                }}
            >
                fn(Component)
            </p>
            <p
                style={{
                    fontSize: "20px",
                    opacity: 0.6,
                    textShadow: "-4px -4px 10px #000000",
                }}
            >
                for modern web and desktop applications written in Go.
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                }}
            >
                <Button href="/docs/fncmp" label="Get Started" />
                <Button href="/article" label="Learn more" />
            </div>
        </div>
    );
};

export default Hero;