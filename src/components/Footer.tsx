
export const Footer = () => {
  return (
      <footer id="footer">
        <hr className="bg-black h-1"/>
        <section className="text-sm py-2 px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-card">
          <div className="flex flex-col gap-2">
            <h5 className="text-base">Follow me</h5>
            <div>
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://github.com/trstnjmn"
                  className="snes-link text-galaxy-color"
              >
                Github
              </a>
            </div>

            <div>
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.instagram.com/jamintorsten/"
                  className="snes-link text-rose-color"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.linkedin.com/in/torsten-jamin-436200268/"
                  className="snes-link text-phantom-color"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-base">3D print</h5>
            <div>
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://makerworld.com/en/@torstenjamin"
                  className="snes-link text-turquoise-color"
              >
                Maker World
              </a>
            </div>

            <div>
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.printables.com/@trstn"
                  className="snes-link text-ocean-color"
              >
                Printables
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-base">My wife's store</h5>
            <div>
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.bilderbuchblume.de/"
                  className="snes-link text-sunshine-color"
              >
                BilderBuchBlume
              </a>
            </div>

            <div>
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.etsy.com/de/shop/Bilderbuchblume?ref=shop-header-name&listing_id=1592391844&from_page=listing"
                  className="snes-link text-plumber-color"
              >
                Etsy
              </a>
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1  gap-2">
            <h5 className="text-base">
              Made with{" "} </h5>
            <h5 className="text-xs">
              <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://snes-css.sadlative.com"
                  className="snes-link text-ocean-color"
              >
                SNES.CSSn
              </a>
            </h5>
          </div>
        </section>
      </footer>
  );
};
