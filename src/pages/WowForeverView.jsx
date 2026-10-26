// src/pages/WowForeverView.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/WowForeverView.css";
import Footer from "../components/SectionBars/Footer";
import StreamingStatus from "../components/streamstate/streamstate";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/SectionBars/LanguageSwitcher";

const YOUTUBE_URL = "https://www.youtube.com/@dharrygames";

const classes = [
  {
    name: "Druid",
    es: "Druida",
    specs: ["Balance", "Feral Tank", "Feral DPS", "Restoration"],
    specsEs: ["Equilibrio", "Tanque feral", "DPS feral", "Restauración"],
    spells: ["Revive", "Wild Growth", "Berserk", "Eclipse", "Mangle"],
    changes: [
      "Omen of Clarity is now baseline.",
      "Entangling Roots works indoors.",
      "Balance mana issues improved; DoTs can critically strike.",
      "Swiftmend no longer consumes HoTs.",
    ],
    changesEs: [
      "Augurio de claridad ahora es una habilidad base.",
      "Enredaderas funciona en interiores.",
      "Se ha mejorado el maná de Equilibrio; los efectos periódicos pueden hacer críticos.",
      "Swiftmend ya no consume los efectos de sanación periódica.",
    ],
  },
  {
    name: "Hunter",
    es: "Cazador",
    specs: ["Beast Mastery", "Marksmanship", "Survival"],
    specsEs: ["Bestias", "Puntería", "Supervivencia"],
    spells: [
      "Mine!",
      "Sniper Shot",
      "Strider Kick",
      "Summon Hawk",
      "Lone Wolf",
    ],
    changes: [
      "Traps can be placed during combat.",
      "Modern pet Assist control.",
      "DoTs can critically strike.",
      "Marksmanship can play without a pet via Lone Wolf.",
      "Survival supports a melee playstyle.",
    ],
    changesEs: [
      "Las trampas pueden colocarse durante el combate.",
      "Se añade el control de mascota mediante asistencia.",
      "Los efectos de daño periódico pueden hacer críticos.",
      "Puntería puede jugar sin mascota mediante Lone Wolf.",
      "Supervivencia admite un estilo de combate cuerpo a cuerpo.",
    ],
  },
  {
    name: "Mage",
    es: "Mago",
    specs: ["Arcane", "Fire", "Frost"],
    specsEs: ["Arcano", "Fuego", "Escarcha"],
    spells: [
      "Comprehend Scroll",
      "Hot Streak",
      "Fingers of Frost",
      "Missile Barrage",
      "Arcane Blast",
      "Frostfire Bolt",
      "Ice Lance",
    ],
    changes: [
      "Comprehend Scroll unlocks effects from deciphering scrolls.",
      "Fire damage-over-time effects can critically strike.",
    ],
    changesEs: [
      "Comprehend Scroll desbloquea efectos al descifrar pergaminos.",
      "Los efectos de daño periódico de Fuego pueden hacer críticos.",
    ],
  },
  {
    name: "Paladin",
    es: "Paladín",
    specs: ["Holy", "Protection", "Retribution"],
    specsEs: ["Sagrado", "Protección", "Reprensión"],
    spells: [
      "Light's Vigil",
      "Holy Shock",
      "Twist of Light",
      "Holy Strike",
      "Seal of Fury",
    ],
    changes: [
      "Judgement no longer consumes Seals.",
      "Blessing of Kings is now baseline.",
      "Blessings last 1 hour instead of 10 minutes.",
    ],
    changesEs: [
      "Judgement ya no consume los sellos.",
      "Blessing of Kings ahora es una habilidad base.",
      "Las bendiciones duran 1 hora en lugar de 10 minutos.",
    ],
  },
  {
    name: "Priest",
    es: "Sacerdote",
    specs: ["Discipline", "Holy", "Shadow"],
    specsEs: ["Disciplina", "Sagrado", "Sombras"],
    spells: [
      "Penance",
      "Devouring Plague",
      "Binding Heal",
      "Prayer of Mending",
      "Litany of Light",
    ],
    changes: ["Shadow DoTs can critically strike."],
    changesEs: [
      "Los efectos de daño periódico de Sombras pueden hacer críticos.",
    ],
  },
  {
    name: "Rogue",
    es: "Pícaro",
    specs: ["Assassination", "Combat", "Subtlety"],
    specsEs: ["Asesinato", "Combate", "Sutileza"],
    spells: ["Mutilate", "Venom", "Hack and Slash", "Cutthroat"],
    changes: [
      "Weapon Specialization talents have been condensed.",
      "DoTs can critically strike.",
    ],
    changesEs: [
      "Se han condensado los talentos de especialización de armas.",
      "Los efectos de daño periódico pueden hacer críticos.",
    ],
  },
  {
    name: "Shaman",
    es: "Chamán",
    specs: ["Elemental", "Enhancement", "Restoration"],
    specsEs: ["Elemental", "Mejora", "Restauración"],
    spells: [
      "Totemic Projection",
      "Lava Burst",
      "Call of the Elements",
      "Improved Ghost Wolf",
      "Rage of the Farseer",
      "Riptide",
    ],
    changes: [
      "Ghost Wolf can become instant.",
      "Enhancement gains a personal Bloodlust-style ability.",
      "Elemental DoTs can critically strike.",
    ],
    changesEs: [
      "Ghost Wolf puede lanzarse instantáneamente.",
      "Mejora obtiene una habilidad personal similar a Bloodlust.",
      "Los efectos de daño periódico de Elemental pueden hacer críticos.",
    ],
  },
  {
    name: "Warlock",
    es: "Brujo",
    specs: ["Affliction", "Demonology", "Destruction"],
    specsEs: ["Aflicción", "Demonología", "Destrucción"],
    spells: [
      "Wrack",
      "Incinerate",
      "Bane of Havoc",
      "Bane of Agony",
      "Demonic Pact",
    ],
    changes: [
      "Demonology can sacrifice one demon and summon another.",
      "DoTs can critically strike.",
    ],
    changesEs: [
      "Demonología puede sacrificar un demonio y convocar otro.",
      "Los efectos de daño periódico pueden hacer críticos.",
    ],
  },
  {
    name: "Warrior",
    es: "Guerrero",
    specs: ["Arms", "Fury", "Protection"],
    specsEs: ["Armas", "Furia", "Protección"],
    spells: [
      "Spearing Strike",
      "Victory Rush",
      "Tactical Mastery",
      "Bloodthrill",
      "Improved Slam",
      "Vanguard",
    ],
    changes: [
      "Tactical Mastery is now baseline.",
      "Improved Slam is in the Arms tree.",
      "Vanguard enables Charge in Defensive Stance.",
      "Rage is normalized around weapon speed.",
      "DoTs can critically strike.",
    ],
    changesEs: [
      "Tactical Mastery ahora es una habilidad base.",
      "Improved Slam está en el árbol de Armas.",
      "Vanguard permite usar Charge en Actitud defensiva.",
      "La ira se normaliza según la velocidad del arma.",
      "Los efectos de daño periódico pueden hacer críticos.",
    ],
  },
];

const zones = [
  {
    name: "Mount Hyjal",
    es: "Monte Hyjal",
    description: "A new region revealed for WoW Forever.",
    descriptionEs: "Una nueva región revelada para WoW Forever.",
  },
  {
    name: "Zephras Isle",
    es: "Isla Zephras",
    description: "A new island associated with the Skyborne.",
    descriptionEs: "Una nueva isla asociada con los Skyborne.",
  },
  {
    name: "Riverglades",
    es: "Riverglades",
    description: "A newly revealed region of Azeroth.",
    descriptionEs: "Una nueva región de Azeroth.",
  },
];

const dungeons = [
  ["The Hall of Thanes", "13–18"],
  ["Ruins of Lordaeron", "15–20"],
  ["Excavation Site: Wetlands", "24–29"],
  ["City of Dalaran", "28–33"],
  ["The Drowned City", "35–40"],
  ["Krol'dok Stronghold", "40–45"],
  ["Alcaz Prison", "48–53"],
  ["Blackmaw Hold", "55–60"],
  ["Shaper's Terrace", "58–60"],
];

const raids = [
  {
    name: "The Barrow Deeps",
    players: 10,
    description:
      "A new raid included in the supplied WoW Forever information.",
    descriptionEs:
      "Una nueva banda incluida en la información proporcionada de WoW Forever.",
  },
  {
    name: "Hyjal Summit",
    players: 20,
    description: "A raid set in the Mount Hyjal area.",
    descriptionEs: "Una banda situada en la zona del Monte Hyjal.",
  },
];

const raceCombos = [
  { race: "Dwarf", raceEs: "Enano", cls: "Shaman", clsEs: "Chamán" },
  { race: "Human", raceEs: "Humano", cls: "Hunter", clsEs: "Cazador" },
  { race: "Undead", raceEs: "No-muerto", cls: "Paladin", clsEs: "Paladín" },
  { race: "Gnome", raceEs: "Gnomo", cls: "Priest", clsEs: "Sacerdote" },
  { race: "Orc", raceEs: "Orco", cls: "Mage", clsEs: "Mago" },
  { race: "Troll", raceEs: "Trol", cls: "Warlock", clsEs: "Brujo" },
];

const skyborne = [
  {
    faction: "Horde",
    factionEs: "Horda",
    classes: ["Warrior", "Hunter", "Rogue", "Druid", "Shaman"],
    classesEs: ["Guerrero", "Cazador", "Pícaro", "Druida", "Chamán"],
  },
  {
    faction: "Alliance",
    factionEs: "Alianza",
    classes: ["Warrior", "Hunter", "Rogue", "Druid", "Mage"],
    classesEs: ["Guerrero", "Cazador", "Pícaro", "Druida", "Mago"],
  },
];

const navItems = [
  ["overview", "Overview", "Resumen"],
  ["classes", "Classes", "Clases"],
  ["world", "World", "Mundo"],
  ["dungeons", "Dungeons & Raids", "Mazmorras y bandas"],
  ["races", "Races", "Razas"],
  ["pvp", "PvP", "JcJ"],
  ["roadmap", "Roadmap", "Hoja de ruta"],
];

export default function WowForeverView() {
  const { language, t } = useLanguage();
  const isSpanish = language === "es";

  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("all");
  const [expandedClass, setExpandedClass] = useState("Druid");

  const title = (en, es) => (isSpanish ? es : en);

  const filteredClasses = useMemo(() => {
    return classes.filter((item) => {
      const searchable = [
        item.name,
        item.es,
        ...item.specs,
        ...item.specsEs,
        ...item.spells,
        ...item.changes,
        ...item.changesEs,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchable.includes(search.toLowerCase());
      const matchesClass =
        classFilter === "all" || item.name === classFilter;

      return matchesSearch && matchesClass;
    });
  }, [search, classFilter]);

  const scrollTo = (id) => {
    setActiveTab(id);
    document
      .getElementById(`wow-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="wowforever-page">
      <header className="wowforever-header">
        <Link
          className="wowforever-brand"
          to={`/${language}`}
          aria-label={t("backHome")}
        >
          <span className="wowforever-brand-mark">D</span>
          <span>
            <strong>DharryNet</strong>
            <small>
              {title("World of Warcraft guide", "Guía de World of Warcraft")}
            </small>
          </span>
        </Link>

        <div className="wowforever-header-status">
          <LanguageSwitcher />
          <span className="wowforever-kicker">
            {title("FOREVER DATABASE", "BASE DE DATOS FOREVER")}
          </span>
          <StreamingStatus />
        </div>
      </header>

      <main className="wowforever-main">
        {/* PORTADA */}
        <section className="wowforever-hero" id="wow-overview">
          <div className="wowforever-hero-copy">
            <span className="wowforever-eyebrow">
              WORLD OF WARCRAFT · FOREVER
            </span>

            <h1>
              WoW <span>Forever</span>
            </h1>

            <p className="wowforever-lead">
              {title(
                "A familiar Azeroth, reimagined.",
                "Una Azeroth conocida, reinventada."
              )}
            </p>

            <p className="wowforever-intro">
              {title(
                "An independent information hub for Forever's class updates, new zones, dungeons, raids, race combinations, and announced systems.",
                "Un centro de información independiente sobre los cambios de clase, nuevas zonas, mazmorras, bandas, combinaciones de raza y sistemas anunciados para Forever."
              )}
            </p>

            <div className="wowforever-actions">
              <button
                className="wowforever-button wowforever-button-primary"
                onClick={() => scrollTo("classes")}
              >
                {title("Explore classes", "Explorar clases")} ↓
              </button>

              <a
                className="wowforever-button wowforever-button-secondary"
                href="https://worldofwarcraft.blizzard.com/"
                target="_blank"
                rel="noreferrer"
              >
                {title("Official WoW site", "Web oficial de WoW")} ↗
              </a>
            </div>

            <div className="wowforever-hero-facts">
              <div>
                <strong>9</strong>
                <span>{title("classes", "clases")}</span>
              </div>
              <div>
                <strong>9</strong>
                <span>{title("dungeons", "mazmorras")}</span>
              </div>
              <div>
                <strong>15v15</strong>
                <span>{title("new battleground", "nuevo campo de batalla")}</span>
              </div>
            </div>
          </div>

          <aside className="wowforever-hero-panel">
            <span className="wowforever-panel-label">
              {title("FIELD GUIDE", "GUÍA DE CAMPO")}
            </span>

            <div className="wowforever-emblem" aria-hidden="true">
              ⚔
            </div>

            <h2>
              {title(
                "Your next chapter in Azeroth",
                "Tu próximo capítulo en Azeroth"
              )}
            </h2>

            <p>
              {title(
                "Discover what changes, what is new, and what awaits adventurers in Forever.",
                "Descubre qué cambia, qué es nuevo y qué les espera a los aventureros en Forever."
              )}
            </p>

            <div className="wowforever-panel-footer">
              <span className="wowforever-status-dot" />
              {title(
                "Community information guide",
                "Guía informativa comunitaria"
              )}
            </div>
          </aside>
        </section>

        {/* NAVEGACIÓN INTERNA */}
        <nav
          className="wowforever-nav"
          aria-label={title("WoW Forever sections", "Secciones de WoW Forever")}
        >
          {navItems.map(([id, en, es]) => (
            <button
              key={id}
              className={activeTab === id ? "is-active" : ""}
              onClick={() => scrollTo(id)}
            >
              {title(en, es)}
            </button>
          ))}
        </nav>

        {/* CLASES */}
        <section className="wowforever-section" id="wow-classes">
          <div className="wowforever-section-heading">
            <div>
              <span className="wowforever-eyebrow">
                {title("CLASS CHANGES", "CAMBIOS DE CLASE")}
              </span>
              <h2>
                {title(
                  "Classes, specializations & new abilities",
                  "Clases, especializaciones y nuevas habilidades"
                )}
              </h2>
            </div>
          </div>

          <p className="wowforever-section-intro">
            {title(
              "Search class names, specializations, spells, or summarized changes. Ability names are kept in English when a localized name has not been verified.",
              "Busca clases, especializaciones, hechizos o cambios. Los nombres de las habilidades se mantienen en inglés cuando no se ha verificado su traducción."
            )}
          </p>

          <div className="wowforever-controls">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={title(
                "Search classes, spells, changes…",
                "Buscar clases, hechizos o cambios…"
              )}
              aria-label={title(
                "Search class information",
                "Buscar información de clases"
              )}
            />

            <select
              value={classFilter}
              onChange={(event) => setClassFilter(event.target.value)}
              aria-label={title("Filter by class", "Filtrar por clase")}
            >
              <option value="all">
                {title("All classes", "Todas las clases")}
              </option>
              {classes.map((item) => (
                <option key={item.name} value={item.name}>
                  {title(item.name, item.es)}
                </option>
              ))}
            </select>
          </div>

          <div className="wowforever-class-grid">
            {filteredClasses.map((item) => {
              const expanded = expandedClass === item.name;

              return (
                <article
                  className={`wowforever-class-card ${
                    expanded ? "is-expanded" : ""
                  }`}
                  key={item.name}
                >
                  <button
                    className="wowforever-class-head"
                    onClick={() =>
                      setExpandedClass(expanded ? "" : item.name)
                    }
                    aria-expanded={expanded}
                  >
                    <span className="wowforever-class-icon">
                      {item.name.slice(0, 1)}
                    </span>

                    <span className="wowforever-class-title">
                      <strong>{title(item.name, item.es)}</strong>
                      <small>
                        {(isSpanish ? item.specsEs : item.specs).join(" · ")}
                      </small>
                    </span>

                    <span className="wowforever-expand">
                      {expanded ? "−" : "+"}
                    </span>
                  </button>

                  {expanded && (
                    <div className="wowforever-class-details">
                      <h4>{title("Specializations", "Especializaciones")}</h4>

                      <div className="wowforever-chip-list">
                        {(isSpanish ? item.specsEs : item.specs).map(
                          (spec) => (
                            <span key={spec}>{spec}</span>
                          )
                        )}
                      </div>

                      <h4>
                        {title(
                          "New spells & talents",
                          "Nuevos hechizos y talentos"
                        )}
                      </h4>

                      <div className="wowforever-chip-list">
                        {item.spells.map((spell) => (
                          <span key={spell}>{spell}</span>
                        ))}
                      </div>

                      <h4>
                        {title(
                          "Reported class changes",
                          "Cambios de clase recopilados"
                        )}
                      </h4>

                      <ul>
                        {(isSpanish ? item.changesEs : item.changes).map(
                          (change) => (
                            <li key={change}>{change}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}

            {filteredClasses.length === 0 && (
              <p className="wowforever-empty">
                {title(
                  "No classes match your search.",
                  "No hay clases que coincidan con tu búsqueda."
                )}
              </p>
            )}
          </div>
        </section>

        {/* ZONAS */}
        <section className="wowforever-section" id="wow-world">
          <div className="wowforever-section-heading">
            <div>
              <span className="wowforever-eyebrow">
                {title("NEW ZONES", "NUEVAS ZONAS")}
              </span>
              <h2>{title("Explore the world", "Explora el mundo")}</h2>
            </div>
          </div>

          <div className="wowforever-zone-grid">
            {zones.map((zone) => (
              <article className="wowforever-zone-card" key={zone.name}>
                <span className="wowforever-zone-mark">⌖</span>
                <h3>{title(zone.name, zone.es)}</h3>
                <p>{title(zone.description, zone.descriptionEs)}</p>
                <span className="wowforever-status-tag">
                  {title("Revealed", "Revelada")}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* MAZMORRAS Y BANDAS */}
        <section className="wowforever-section" id="wow-dungeons">
          <div className="wowforever-section-heading">
            <div>
              <span className="wowforever-eyebrow">
                {title("DUNGEONS & RAIDS", "MAZMORRAS Y BANDAS")}
              </span>
              <h2>{title("Group content", "Contenido de grupo")}</h2>
            </div>
          </div>

          <div className="wowforever-content-columns">
            <div className="wowforever-data-panel">
              <div className="wowforever-panel-heading">
                <h3>{title("Dungeons", "Mazmorras")}</h3>
                <span>{dungeons.length}</span>
              </div>

              <p className="wowforever-muted">
                {title(
                  "Reported recommended level ranges",
                  "Rangos de nivel recopilados"
                )}
              </p>

              <div className="wowforever-dungeon-list">
                {dungeons.map(([name, levels], index) => (
                  <div className="wowforever-dungeon-row" key={name}>
                    <span className="wowforever-dungeon-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{name}</strong>
                    <span className="wowforever-level">
                      {title("Lv.", "Niv.")} {levels}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="wowforever-data-panel">
              <div className="wowforever-panel-heading">
                <h3>{title("Raids", "Bandas")}</h3>
                <span>{raids.length}</span>
              </div>

              {raids.map((raid) => (
                <article className="wowforever-raid-card" key={raid.name}>
                  <span className="wowforever-raid-size">
                    {raid.players} {title("players", "jugadores")}
                  </span>
                  <h4>{raid.name}</h4>
                  <p>
                    {title(raid.description, raid.descriptionEs)}
                  </p>
                </article>
              ))}

              <p className="wowforever-disclaimer">
                {title(
                  "Schedules and group sizes may change. Check official announcements before planning a raid.",
                  "Los calendarios y tamaños de grupo pueden cambiar. Consulta los anuncios oficiales antes de organizar una banda."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* RAZAS */}
        <section className="wowforever-section" id="wow-races">
          <div className="wowforever-section-heading">
            <div>
              <span className="wowforever-eyebrow">
                {title(
                  "RACES & CLASS COMBINATIONS",
                  "RAZAS Y COMBINACIONES DE CLASE"
                )}
              </span>
              <h2>
                {title(
                  "New paths for Azeroth's heroes",
                  "Nuevos caminos para los héroes de Azeroth"
                )}
              </h2>
            </div>
          </div>

          <div className="wowforever-race-layout">
            <div className="wowforever-data-panel">
              <h3>
                {title(
                  "New race/class combinations",
                  "Nuevas combinaciones de raza y clase"
                )}
              </h3>

              <div className="wowforever-combo-grid">
                {raceCombos.map((combo) => (
                  <div
                    className="wowforever-combo"
                    key={`${combo.race}-${combo.cls}`}
                  >
                    <span>{title(combo.race, combo.raceEs)}</span>
                    <b>→</b>
                    <strong>{title(combo.cls, combo.clsEs)}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="wowforever-skyborne-panel">
              <span className="wowforever-eyebrow">
                {title("NEW PLAYABLE RACE", "NUEVA RAZA JUGABLE")}
              </span>

              <h3>Skyborne</h3>

              <p>
                {title(
                  "A new playable race associated with Zephras Isle. The available classes depend on faction.",
                  "Una nueva raza jugable asociada con la Isla Zephras. Las clases disponibles dependen de la facción."
                )}
              </p>

              {skyborne.map((entry) => (
                <div className="wowforever-faction" key={entry.faction}>
                  <strong>
                    {title(entry.faction, entry.factionEs)}
                  </strong>
                  <p>
                    {(isSpanish ? entry.classesEs : entry.classes).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JcJ */}
        <section className="wowforever-section" id="wow-pvp">
          <div className="wowforever-section-heading">
            <div>
              <span className="wowforever-eyebrow">
                {title("PLAYER VS. PLAYER", "JUGADOR CONTRA JUGADOR")}
              </span>
              <h2>Darkspear Islands</h2>
            </div>
          </div>

          <div className="wowforever-pvp-panel">
            <div className="wowforever-pvp-emblem">⚑</div>

            <div>
              <span className="wowforever-status-tag">
                {title("New battleground", "Nuevo campo de batalla")}
              </span>
              <h3>Darkspear Islands</h3>
              <p>
                {title(
                  "A new 15-versus-15 battleground revealed for WoW Forever.",
                  "Un nuevo campo de batalla de 15 contra 15 anunciado para WoW Forever."
                )}
              </p>
            </div>

            <strong className="wowforever-pvp-size">
              15 <small>VS</small> 15
            </strong>
          </div>
        </section>

        {/* HOJA DE RUTA */}
        <section className="wowforever-section" id="wow-roadmap">
          <div className="wowforever-section-heading">
            <div>
              <span className="wowforever-eyebrow">
                {title("ROADMAP & SYSTEMS", "HOJA DE RUTA Y SISTEMAS")}
              </span>
              <h2>
                {title(
                  "A world that keeps growing",
                  "Un mundo que seguirá creciendo"
                )}
              </h2>
            </div>
          </div>

          <p className="wowforever-section-intro">
            {title(
              "This overview groups the announced content into broad development themes. It is not an exact release calendar.",
              "Este resumen agrupa el contenido anunciado en grandes etapas de desarrollo. No es un calendario exacto de lanzamientos."
            )}
          </p>

          <div className="wowforever-timeline">
            <article>
              <span className="wowforever-timeline-dot" />
              <small>{title("WORLD DESIGN", "DISEÑO DEL MUNDO")}</small>
              <h3>
                {title(
                  "A reimagined Azeroth",
                  "Una Azeroth reinventada"
                )}
              </h3>
              <p>
                {title(
                  "Classic continents, character progression, and new adventures.",
                  "Continentes clásicos, progresión de personajes y nuevas aventuras."
                )}
              </p>
            </article>

            <article>
              <span className="wowforever-timeline-dot" />
              <small>
                {title("CLASS & CONTENT UPDATES", "ACTUALIZACIONES")}
              </small>
              <h3>
                {title(
                  "New abilities and group challenges",
                  "Nuevas habilidades y desafíos de grupo"
                )}
              </h3>
              <p>
                {title(
                  "Class changes, zones, dungeons, raids, and a new battleground.",
                  "Cambios de clase, zonas, mazmorras, bandas y un nuevo campo de batalla."
                )}
              </p>
            </article>

            <article>
              <span className="wowforever-timeline-dot" />
              <small>
                {title("FUTURE CONTENT", "CONTENIDO FUTURO")}
              </small>
              <h3>
                {title("More adventures ahead", "Más aventuras por venir")}
              </h3>
              <p>
                {title(
                  "Update this section as new release windows and features are confirmed.",
                  "Actualiza esta sección cuando se confirmen nuevas fechas y características."
                )}
              </p>
            </article>
          </div>

          <div className="wowforever-roadmap-note">
            <strong>{title("About this guide", "Sobre esta guía")}</strong>
            <p>
              {title(
                "This is an independent fan information page. Details may change during development; verify important details against official announcements.",
                "Esta es una página informativa independiente. Los detalles pueden cambiar durante el desarrollo; verifica la información importante en los anuncios oficiales."
              )}
            </p>
            <a
              href="https://worldofwarcraft.blizzard.com/"
              target="_blank"
              rel="noreferrer"
            >
              {title("Read official announcements", "Consultar anuncios oficiales")} ↗
            </a>
          </div>
        </section>

        {/* CIERRE */}
        <section className="wowforever-cta">
          <div>
            <span className="wowforever-eyebrow">DHARRYNET</span>
            <h2>
              {title(
                "Your journey through Azeroth continues.",
                "Tu viaje por Azeroth continúa."
              )}
            </h2>
            <p>
              {title(
                "Follow Dharry for gameplay, discoveries, and future WoW Forever coverage.",
                "Acompaña a Dharry en gameplays, descubrimientos y futuras aventuras de WoW Forever."
              )}
            </p>
          </div>

          <a
            className="wowforever-button wowforever-button-primary"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
          >
            {title("Visit YouTube", "Visitar YouTube")} ↗
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}