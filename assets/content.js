import Head from "next/head";
import text from "../assets/locales";

export default function Studio({ locale }) {
  const l = text[locale || "de"];

  return (
    <div lang={locale}>
      <Head>
        <title>{l.meta.title}</title>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon-precomposed"
          href="img/apple-touch-icon.png"
        />
        <link rel="canonical" href={`https://herbstjohanna.com/${locale}`} />
        <meta http-equiv="content-language" content={locale} />
        <link
          rel="alternate"
          href="https://herbstjohanna.com/de"
          hreflang="de"
        />
        <link
          rel="alternate"
          href="https://herbstjohanna.com/it"
          hreflang="it"
        />
        <link
          rel="alternate"
          href="https://herbstjohanna.com/de"
          hreflang="x-default"
        />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={l.meta.title} />
        <meta property="og:description" content={l.meta.description} />
        <meta property="og:url" content={`https://herbstjohanna.com/${locale}`} />
        <meta property="og:site_name" content="Kanzlei Herbst" />
        <meta name="description" content={l.meta.description} />
        <meta name="keywords" content={l.meta.keywords} />
        <script src="js/jquery.min.js"></script>
        <script src="js/uikit.min.js"></script>
        <script src="js/components/parallax.min.js"></script>
        <script src="js/herbst.js"></script>
      </Head>
      <nav id="navbar-wrapper">
        <div id="navbar">
          <div className="uk-container uk-container-center">
            <div className="logo">{l.nav.title}</div>
            <button id="navbar-toggle">
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
        </div>
        <div id="nav">
          <div className="uk-container uk-container-center">
            <ul
              className={
                "uk-grid uk-grid-collapse uk-grid-width-medium-1-" +
                (l.nav.sections.length + 1)
              }
            >
              {l.nav.sections.map((s, i) => (
                <li key={i}>
                  <a href={"#" + s.id} data-uk-smooth-scroll="{offset: 260}">
                    <span className="nav-italic uk-hidden-small">
                      {s.prefix}
                    </span>
                    <span className="nav-heading">{s.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="/de" className="language">
                  Deutsch <i className="uk-icon-chevron-circle-right"></i>
                </a>
                <a href="/it" className="language">
                  Italiano <i className="uk-icon-chevron-circle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main id="content" style={{ display: "block" }}>
        <div
          className="parallax"
          data-uk-parallax="{bg: '-200'}"
          style={{
            backgroundImage: "url('img/background/bild1.jpg')",
            backgroundSize: "1388px 694px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% -200px",
          }}
        ></div>

        {/* Section Kontakt */}
        <section id="kontakt" className="uk-container uk-container-center">
          <div className="uk-grid" data-uk-margin="{cls:'uk-margin-large-top'}">
            <div className="uk-width-large-2-10 uk-width-medium-3-10">
              <h2 className="section-title">{l.kontakt.title}</h2>
            </div>
            <div className="uk-width-large-3-10 uk-width-medium-7-10">
              <span className="uppercase">{l.kontakt.prefix}</span> <br />
              <h1 className="italic">{l.kontakt.heading}</h1>
              <ul className="uk-list">
                {l.kontakt.list.map((item, i) => (
                  <li key={i}>
                    <span className="italic">{item.name}</span>
                    <div
                      className="list-detail"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    ></div>
                  </li>
                ))}
              </ul>
              <div className="uk-hidden-large">
                <img src="img/anfahrt.jpg" alt="Anfahrt Kanzlei Herbst" />
                <a
                  href="https://www.google.com/maps/place/Herbst+Avv.+Johanna/@46.314424,11.268743,15z/data=!4m5!3m4!1s0x0:0xe7aba2240da6590d!8m2!3d46.314424!4d11.268743"
                  className="uk-button uk-margin-large-top"
                  target="_blank"
                >
                  Google Maps <i className="uk-icon-chevron-circle-right"></i>
                </a>
              </div>
            </div>
            <div className="uk-width-large-4-10 uk-visible-large">
              <img src="img/anfahrt.jpg" alt="Anfahrt Kanzlei Herbst" />
              <a
                href="https://www.google.com/maps/place/Herbst+Avv.+Johanna/@46.314424,11.268743,15z/data=!4m5!3m4!1s0x0:0xe7aba2240da6590d!8m2!3d46.314424!4d11.268743"
                className="uk-button uk-margin-large-top"
                target="_blank"
              >
                Google Maps <i className="uk-icon-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </section>
        <div
          className="parallax"
          data-uk-parallax="{bg: '-200'}"
          style={{
            backgroundImage: "url('img/background/bild2.jpg')",
            backgroundSize: "1388px 694px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% -200px",
          }}
        ></div>

        {/* Section Leistungen */}
        <section id="leistungen" className="uk-container uk-container-center">
          <div className="uk-grid" data-uk-margin="{cls:'uk-margin-large-top'}">
            <div className="uk-width-large-2-10 uk-width-medium-3-10">
              <h2 className="section-title">{l.leistungen.title}</h2>
            </div>
            <div className="more-top-margin uk-width-large-4-10 uk-width-medium-7-10">
              <h3 className="italic">{l.leistungen.left.title}</h3>
              <ul className="uk-list">
                {l.leistungen.left.list.map((item, i) => (
                  <li key={i}>
                    {item.big && (
                      <span className="uppercase"> {item.big} </span>
                    )}
                    {item.small}
                  </li>
                ))}
              </ul>
            </div>
            <div className="more-top-margin uk-width-large-3-10">
              <h3 className="italic">
                {l.leistungen.right.title} <br />
                <br />
              </h3>
              <ul className="uk-list">
                {l.leistungen.right.list.map((item, i) => (
                  <li key={i}>
                    {item.big && (
                      <span className="uppercase"> {item.big} </span>
                    )}
                    {item.small}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section Qualifikationen */}
        <section
          id="qualifikationen"
          className="uk-container uk-container-center"
        >
          <div className="uk-grid" data-uk-margin="{cls:'uk-margin-large-top'}">
            <div className="uk-width-large-2-10 uk-width-medium-3-10">
              <h2 className="section-title">{l.qualifikationen.title}</h2>
            </div>
            <div className="more-top-margin uk-width-large-4-10 uk-width-medium-7-10">
              <ul className="uk-list">
                {l.qualifikationen.left.list.map((item, i) => (
                  <li key={i}>
                    {item.big && (
                      <span className="uppercase"> {item.big} </span>
                    )}
                    {item.small}
                  </li>
                ))}
              </ul>
            </div>
            <div className="more-top-margin uk-width-large-3-10">
              <ul className="uk-list">
                {l.qualifikationen.right.list.map((item, i) => (
                  <li key={i}>
                    {item.big && (
                      <span className="uppercase"> {item.big} </span>
                    )}
                    {item.small}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div
          className="parallax"
          data-uk-parallax="{bg: '-200'}"
          style={{
            backgroundImage: "url('img/background/bild3.jpg')",
            backgroundSize: "1388px 694px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% -200px",
          }}
        ></div>

        {/* Section Team */}
        <section id="team" className="uk-container uk-container-center">
          <div
            className="uk-grid uk-margin-large-bottom"
            data-uk-margin="{cls:'uk-margin-large-top'}"
          >
            <div className="uk-width-large-2-10 uk-width-medium-3-10">
              <h2 className="section-title">{l.team.title}</h2>
            </div>
            <div className="uk-width-large-7-10 uk-width-medium-7-10">
              <div className="uk-grid">
                <div className="uk-width-medium-2-3">
                  <img
                    src="img/personal/johanna@2x.jpg"
                    width="210"
                    height="140"
                    alt="Johanna Herbst"
                  />
                  <div className="team-member">
                    {l.team.roles.RADR} <br />
                    <span className="italic">Johanna Herbst</span>
                    <br />
                    {l.team.roles.avvMed} <br />
                  </div>
                </div>
                <div className="uk-width-medium-1-3"></div>
              </div>
              <div className="uk-grid" data-uk-margin="{cls:'uk-margin-top'}">
                <div className="uk-width-medium-1-2">
                  <img
                    width="130"
                    height="90"
                    src="img/personal/susanne_2.jpg"
                    alt="Susanne Köhl"
                  />
                  <div className="team-member">
                    {l.team.roles.RADR} <br />
                    <span className="italic">Susanne Köhl</span>
                    <br />
                    {l.team.roles.avv_in} <br />
                  </div>
                </div>
                <div className="uk-width-medium-1-2">
                  <img
                    width="130"
                    height="90"
                    src="img/personal/luca_riva@2x.jpg"
                    alt="Luca Riva"
                  />
                  <div className="team-member">
                    {l.team.roles.RADR} <br />
                    <span className="italic">Luca Riva </span>
                    <br />
                    {l.team.roles.avv}
                    <br />
                  </div>
                  <div className="uk-width-medium-1-3"></div>
                </div>
                <div className="uk-width-medium-1-2 uk-margin-top">
                  <img
                    width="130"
                    height="90"
                    src="img/personal/rosa.jpg"
                    alt="Rosa Herbst"
                  />
                  <div className="team-member">
                    <span className="italic">Rosa Herbst</span> <br />
                    {l.team.roles.sek_in}
                    <br />
                  </div>
                </div>
                <div className="uk-width-medium-1-2 uk-margin-top">
                  <img
                    width="130"
                    height="90"
                    src="img/personal/sebastian@2x.jpg"
                    alt="Sebastian Dibiasi"
                  />
                  <div className="team-member">
                    <span className="italic">Sebastian Dibiasi</span> <br />
                    {l.team.roles.sek}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
