import {getRandomSnesLinkColor} from "@/components/utilities/snesRandomColors.tsx";
import {Card} from "@/components/ui/card.tsx";

export const Gameboy = () => {
    return (
        <section
            className="container"
            id="gameboy"
        >
            <h2 className="snes-container-title has-ocean-underline mb-8">
                NES / Gameboy
            </h2>
            <h3 className="mb-8">
                NesTs Nintendo Entertainment System (NES) Emulator
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="snes-container bg-white m-auto h-full p-10">
                    <p>
                        This is a iframe from
                        <a href="https://ognis1205.github.io/nests/"
                           target="_blank"
                           className={`p-1 truncate ${getRandomSnesLinkColor()}`}
                        >
                            {" "}ognis1205{" "}
                        </a>
                        you can find him on
                        <a href="https://github.com/ognis1205/nests"
                           target="_blank"
                           className={`p-1 truncate ${getRandomSnesLinkColor()}`}
                        >
                            {" "}github{" "}
                        </a>.
                    </p>
                    <p>
                        Press the red button labeled ROM and upload a .nes file. The emulator will then start
                        automatically. For legal reasons, I am not allowed to provide a Rom here.
                        Unfortunately, the touchscreen control does not work yet.
                    </p>
                    <p>Controls</p>
                <div className="flex flex-row mx-auto">
                        <ul className="snes-list is-ocean-list-color mr-2">
                            <li>Direction</li>
                            <li>SELECT</li>
                            <li>START</li>
                            <li>A</li>
                            <li>B</li>
                        </ul>
                        <ul className="snes-list is-nature-list-color">
                            <li>Arrow buttons</li>
                            <li>Space</li>
                            <li>Return</li>
                            <li>X</li>
                            <li>Z</li>
                        </ul>
                    </div>

                </Card>

                <div className="snes-container bg-white m-auto">
                    <iframe src="https://ognis1205.github.io/nests/" width="324" height="565"></iframe>

                </div>
            </div>

        </section>
    );
};

