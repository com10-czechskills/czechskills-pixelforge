"use client";
import AOS from "aos";
import "./globals.css";
import "./page.css";
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import Link from "next/link";

export default function Homepage() {
  const router = useRouter();

  useEffect(() => {
    //Animations
    AOS.init({
      disable: function () {
        return window.innerWidth < 768;
      },
    });
  }, []);

  const scrollToTarget = (targetId) => {
    //router.push("/") - pokud chceš při kliknutí na odkaz změnit URL, například z podstránky na homepage
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };


  return (
      <>
        <Navbar/>
        <main>
          <section className="hero" id="hero">
            <div className="container">
              <div className="row">
                <div className="item left">
                  <h1>
                    Tvarujeme svět pixelů do nezapomenutelných dobrodružství
                  </h1>
                  <p>
                    Jsme nezávislé herní studio zaměřené na tvorbu jedinečných příběhů, podmanivého pixelového umění a
                    inovativního herního designu. Připoj se k nám a objev nové světy plné magie, výzev a kreativity!
                  </p>
                  <div className="btns-row">
                    <button onClick={() => scrollToTarget('contact')} className="btn btn-primary">Kontakt</button>
                    <button onClick={() => scrollToTarget('game')} className="btn btn-primary-outline">Pixel Crusade
                    </button>
                  </div>
                </div>
                <div className="item right">
                  <img src="/images/hero.webp" alt="" loading="lazy"/>

                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="game bg" id="game">
          <div className="container">
            <div className="row">
              <div className="item left">
                <h3>Již 14.4.2027!</h3>
                <img src="/images/game_photo.webp" className='game-photo' alt="" loading="lazy"/>
                <div className="imgs-row">
                  <div className="platforms">
                    <img src="/images/platform1.webp" width={32} height={32} alt="" loading="lazy"/>
                    <img src="/images/platform2.webp" width={32} height={32} alt="" loading="lazy"/>
                    <img src="/images/platform3.webp" width={32} height={32} alt="" loading="lazy"/>
                  </div>
                  <div className="socials">
                    <img src="/images/social1.webp" width={24} height={24} alt="" loading="lazy"/>
                    <img src="/images/social2.webp" width={24} height={24} alt="" loading="lazy"/>
                    <img src="/images/social3.webp" width={24} height={24} alt="" loading="lazy"/>
                  </div>

                </div>
              </div>
              <div className="item right">
                <h2>Pixel Crusade</h2>
                <div className='group'>
                  <h3>Příběh</h3>
                  <p>
                    Ve světě zvaném Arkania, kde magie a technologie existují v křehké rovnováze, ohrožuje temná síla
                    známá jako Stínový kodex samotnou podstatu reality. Jako mladý Křižák, vybraný tajemnou Relikvií
                    světla, se vydáváš na cestu, abys obnovil rovnováhu světa. Na své cestě budeš čelit mocným
                    nepřátelům, odemykat skryté schopnosti a odhalovat tajemství minulosti Arkánie.
                  </p>
                </div>
                <div className='group prvky'>
                  <h3>Herní prvky</h3>
                  <div className="wrapper">

                    <div className="prvek">
                      <img src="/images/icon-check.webp" width={24} height={24} alt="" loading="lazy"/>
                      <div className="text">
                        <h4>Procedurálně generované světy</h4>
                        <p>
                          Každý průchod nabízí nové výzvy a unikátní prostředí, od magických lesů až po kyberpunkové
                          ruiny
                        </p>
                      </div>
                    </div>
                    <div className="prvek">
                      <img src="/images/icon-check.webp" width={24} height={24} alt="" loading="lazy"/>
                      <div className="text">
                        <h4>Křižácký bojový systém</h4>
                        <p>
                          Kombinace klasických hack-and-slash mechanik s magickými schopnostmi a taktickými úhybnými
                          manévry
                        </p>
                      </div>
                    </div>
                    <div className="prvek">
                      <img src="/images/icon-check.webp" width={24} height={24} alt="" loading="lazy"/>
                      <div className="text">
                        <h4>Kooperativní režim</h4>
                        <p>
                          Spoj se s až třemi přáteli a prozkoumávejte svět společně v lokálním i online multiplayeru.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutus" id="aboutus">
          <div className="container">
            <div className="row">
              <div className="item">
                <h2>O studiu</h2>
                <p>
                  PixelForge Studios je nezávislé herní studio, které spojuje nostalgii pixelového umění s moderními herními prvky. Věříme v sílu příběhů a detailů, které dokážou vtáhnout hráče do světa plného dobrodružství a emocí. Naším cílem je vytvářet hry, které oslavují kreativitu a inspirují k objevování.
                </p>
                <p>
                  Jsme tým vášnivých vývojářů a umělců, kteří milují herní design a neustále posouvají hranice své tvorby. Každý náš projekt je jedinečný a odráží naše nadšení pro inovaci a zábavu. Přidejte se k nám a prozkoumejte světy, které jsme pro vás vytvořili.
                </p>
                <div className="btns-row">
                  <button onClick={() => scrollToTarget('contact')} className="btn btn-primary">Kontakt</button>
                </div>
              </div>
              <div className="item img">
                <img src='/images/studio_photo.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
              </div>
            </div>
          </div>
        </section>
        <section className="clenove" id="clenove">
          <div className="container">
            <h2>Členové studia</h2>
            <div className="row">
              <div className="item">
                <img src='/images/clen1.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>Tomáš</h3>
                  <p>Tomáš je náš CEO studia PixelForge Studios a řeší chod projektů</p>
              </div>
              <div className="item">
                <img src='/images/clen2.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>Jirka</h3>
                  <p>Jirka je náš grafik a dodává nám vysoce kvalitní pixelovou grafiku</p>
              </div>
              <div className="item">
                <img src='/images/clen3.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>Anička</h3>
                  <p>Anička má na starosti marketing a správů sociálních sítí</p>
              </div>
              <div className="item">
                <img src='/images/clen4.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>Filip</h3>
                  <p>Filip je nás hlavní vývojář a převádí Jirkovu grafiku v realitu</p>
              </div>

            </div>
          </div>
        </section>
        <section className="zkusenosti" id="zkusenosti">
          <div className="container">
            <h2>Naše zkušenosti</h2>
            <div className="row">
              <div className="item">
                <img src='/images/icon-time.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>10+ <br/>let zkušeností</h3>
                <p>
                  Naše studio vám dodává pixelové hry více než 10 let
                </p>
              </div>
              <div className="item">
                <img src='/images/icon-player.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>10000+ <br/>Aktivních hráčů</h3>
                <p>
                  Naše hry mají velké množství aktivních hráčů
                </p>
              </div>
              <div className="item">
                <img src='/images/icon-game.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>14+ <br/>Vydaných her</h3>
                <p>
                  Vydali jsme již mnoho úspěšných her, které vás baví
                </p>
              </div>
              <div className="item">
                <img src='/images/icon-award.webp' alt="" draggable="false" loading="lazy"
                     placeholder="blur"/>
                <h3>7+ <br/>Herních ocenění</h3>
                <p>
                  Naše hry dostaly mnoho ocenění, mezi nimi i GOTY
                </p>
              </div>

            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <div className="row">
              <div className="item">
                <h2>Kontakt</h2>
              </div>
              <div className="item right">
                <Link href='mailto:info@pixelforge.cz' className="link email">
                  <img src='/images/icon-contact-email.webp' height={50} width={50} alt="" draggable="false" loading="lazy"
                       placeholder="blur"/>
                  info@pixelforge.cz
                </Link>
                <Link href='tel:777777777' className="link email">
                  <img src='/images/icon-contact-tel.webp' height={50} width={50} alt="" draggable="false" loading="lazy"
                       placeholder="blur"/>
                  +420 777 777 777
                </Link>

              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
  )
}