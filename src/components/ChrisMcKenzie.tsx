import {Card,  CardFooter } from "@/components/ui/card.tsx";
import {getRandomSnesButtonColor} from "@/components/utilities/snesRandomColors.tsx";

export const ChrisMcKenzie = () => {
    return (
        <section
            className="container my-16"
            id="chrisMcKenzie"
        >
            <h2 className="snes-container-title has-ocean-underline mb-8">
                This is funny
            </h2>
            <h3 className="mb-8">
                I like it a lot.
            </h3>
            <Card key='chrismckenzie'>
                <iframe src="https://chrismckenzie.com/" width="100%" height="640"></iframe>
                <CardFooter>
                    <a
                        rel="noreferrer noopener"
                        href={"https://chrismckenzie.com/"}
                        target="_blank"
                        className={`p-1 truncate mx-auto ${getRandomSnesButtonColor()}`}
                    >
                        {"https://chrismckenzie.com/"}
                    </a>
                </CardFooter>
            </Card>
        </section>
    );
};

