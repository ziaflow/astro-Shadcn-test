import { HeroCards } from "./HeroCards";

export const Hero = () => {
    return (
        <section
            id="hero"
        >
            <div className="container">

                <div
                    className="mt-8 md:mt-32 grid md:grid-cols-3 gap-2  md:place-items-space-between place-items-center">
                    <div className="text-5xl lg:text-6xl ml-16 md:ml-0 col-span-3 md:col-span-2">
                        <h1>Hi there,</h1>
                        <h1>my name is</h1>
                        <h1 className="text-snes-nature">Torsten Jamin</h1>
                    </div>
                    <div className="mt-8 md:mt-0 col-span-3 md:col-span-1">
                        <HeroCards/>
                    </div>
                </div>
            </div>

        </section>
    );
};