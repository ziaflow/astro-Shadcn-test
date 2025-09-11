import {
    Card,
    CardHeader,
    CardTitle,
    CardLink, CardFooter,
} from "@/components/ui/card";

import image from "../img/Pixel profile extra large.png";

export const HeroCards = () => {
  return (
          <Card className="flex flex-col justify-center items-center">
              <CardHeader >
                  <CardTitle className="text-center mb-2">Torsten Jamin</CardTitle>
                  <img
                      src={image}
                      alt="Profile picture"
                      className="object-cover object-center mx-auto mb-2 snes-image"
                  />

                  <CardFooter className="text-center">
                      Frontend Developer
                  </CardFooter>
              </CardHeader>

              <CardLink className="text-center">
                  <a
                      rel="noreferrer noopener"
                      href="https://github.com/trstnjmn"
                      target="_blank"
                      className="snes-button has-ember-color"
                  >
                      GitHub
                  </a>
              </CardLink>
          </Card>
  );
};
