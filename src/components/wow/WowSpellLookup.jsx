//src/components/wow/WowSpellLookup.jsx
import React, { useState } from "react";
import "./WowSpellLookup.css";

const API_URL = "http://localhost:4000/api";

function extractPayload(result) {
  return result?.data?.data ?? result?.data ?? result;
}

function getIconUrl(value) {
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const iconName = value.trim().replace(/\.(png|jpe?g|webp)$/i, "");

  if (!/^[a-zA-Z0-9_-]+$/.test(iconName)) {
    return null;
  }

  return `https://wow.zamimg.com/images/wow/icons/large/${iconName}.jpg`;
}

export default function WowSpellLookup({ language = "es" }) {
  const isSpanish = language === "es";

  const [spellId, setSpellId] = useState("116");
  const [source, setSource] = useState("forever");
  const [spell, setSpell] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchSpell = async (event) => {
    event.preventDefault();

    const id = Number(spellId);

    if (!Number.isSafeInteger(id) || id <= 0) {
      setError(
        isSpanish
          ? "Introduce un ID de hechizo válido."
          : "Enter a valid spell ID."
      );
      setSpell(null);
      return;
    }

    setLoading(true);
    setError("");
    setSpell(null);

    try {
      const locale = isSpanish ? "es_ES" : "en_US";

      const url =
        source === "forever"
          ? `${API_URL}/wow/forever/spells/${id}?locale=${locale}`
          : `${API_URL}/wow/spells/${id}?locale=${locale}`;

      const response = await fetch(url);
      const result = await response.json().catch(() => ({}));

      if (
        !response.ok ||
        result.success === false ||
        result.error
      ) {
        throw new Error(
          result.error?.message ||
            (isSpanish
              ? "No se pudo encontrar el hechizo."
              : "Could not find the spell.")
        );
      }

      const rawSpell = extractPayload(result);

      if (
        !rawSpell ||
        typeof rawSpell !== "object" ||
        Array.isArray(rawSpell)
      ) {
        throw new Error(
          isSpanish
            ? "La respuesta no contiene datos válidos del hechizo."
            : "The response does not contain valid spell data."
        );
      }

      const normalizedSpell = {
        ...rawSpell,
        id: rawSpell.id ?? rawSpell.spellId ?? rawSpell.spell_id ?? id,
        name:
          rawSpell.name ??
          rawSpell.localizedName ??
          (isSpanish ? "Hechizo sin nombre" : "Unnamed spell"),
        description:
          rawSpell.description ?? rawSpell.tooltip ?? rawSpell.text ?? "",
        iconUrl: getIconUrl(
          rawSpell.iconUrl ??
            rawSpell.icon_url ??
            rawSpell.icon ??
            rawSpell.media?.icon
        ),
        source
      };

      setSpell(normalizedSpell);
    } catch (err) {
      setError(
        err.message ||
          (isSpanish
            ? "No se pudo conectar con el servidor."
            : "Could not connect to the server.")
      );
    } finally {
      setLoading(false);
    }
  };

  const sourceName =
    source === "forever" ? "WoW Forever / ForeverDB" : "Blizzard Retail";

  return (
    <section className="wow-spell-section">
      <div className="wow-spell-heading">
        <span className="wow-spell-eyebrow">
          {isSpanish ? "ARCHIVOS DE AZEROTH" : "ARCHIVES OF AZEROTH"}
        </span>

        <h2>{isSpanish ? "Biblioteca de hechizos" : "Spell Library"}</h2>

        <p>
          {isSpanish
            ? "Busca hechizos por ID y consulta sus datos según la fuente seleccionada."
            : "Search spells by ID and explore data from the selected source."}
        </p>
      </div>

      <form className="wow-spell-search" onSubmit={searchSpell}>
        <label htmlFor="wow-spell-source">
          {isSpanish ? "Fuente de datos" : "Data source"}
        </label>

        <select
          id="wow-spell-source"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
            setSpell(null);
            setError("");
          }}
        >
          <option value="forever">WoW Forever / ForeverDB</option>
          <option value="retail">Blizzard Retail</option>
        </select>

        <label htmlFor="wow-spell-id">
          {isSpanish ? "ID del hechizo" : "Spell ID"}
        </label>

        <div className="wow-spell-search-controls">
          <input
            id="wow-spell-id"
            type="number"
            min="1"
            step="1"
            value={spellId}
            onChange={(event) => setSpellId(event.target.value)}
            placeholder={isSpanish ? "Ej. 116" : "e.g. 116"}
          />

          <button type="submit" disabled={loading}>
            {loading
              ? isSpanish
                ? "Buscando..."
                : "Searching..."
              : isSpanish
                ? "Buscar hechizo"
                : "Search spell"}
          </button>
        </div>
      </form>

      {error && (
        <p className="wow-spell-error" role="alert">
          {error}
        </p>
      )}

      {spell && (
        <article className="wow-spell-card">
          <div className="wow-spell-icon-frame wow-tooltip-anchor">
            {spell.iconUrl ? (
              <img
                src={spell.iconUrl}
                alt={spell.name}
                className="wow-spell-icon"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="wow-spell-no-icon">?</div>
            )}

            <div className="wow-hover-tooltip" role="tooltip">
              <strong className="wow-tooltip-name">{spell.name}</strong>
              <span className="wow-tooltip-id">ID: {spell.id}</span>

              {spell.description && (
                <span className="wow-tooltip-description">
                  {spell.description}
                </span>
              )}
            </div>
          </div>

          <div className="wow-spell-details">
            <div className="wow-spell-title-row">
              <h3>{spell.name}</h3>
              <span className="wow-spell-id">ID: {spell.id}</span>
            </div>

            <p className="wow-spell-description">
              {spell.description ||
                (isSpanish
                  ? "No hay descripción disponible."
                  : "No description available.")}
            </p>

            <div className="wow-spell-meta">
              <span>
                {isSpanish ? "Fuente" : "Source"}: {sourceName}
              </span>

              {spell.iconUrl && (
                <span>
                  {isSpanish ? "Icono disponible" : "Icon available"}
                </span>
              )}
            </div>

            {source === "forever" ? (
              <p className="wow-spell-attribution">
                {isSpanish ? "Datos proporcionados por " : "Data provided by "}
                <a
                  href="https://foreverdb.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ForeverDB.net
                </a>
              </p>
            ) : (
              <p className="wow-spell-attribution">
                {isSpanish
                  ? "Estos datos proceden de Blizzard Retail y pueden diferir de WoW Forever."
                  : "This data comes from Blizzard Retail and may differ from WoW Forever."}
              </p>
            )}
          </div>
        </article>
      )}

      {!spell && !error && !loading && (
        <div className="wow-spell-empty">
          <span aria-hidden="true">✦</span>
          <p>
            {isSpanish
              ? "Introduce el ID de un hechizo para consultar sus datos."
              : "Enter a spell ID to explore its details."}
          </p>
        </div>
      )}

      <p className="wow-spell-disclaimer">
        {source === "forever"
          ? isSpanish
            ? "Los datos proceden de ForeverDB. Los idiomas que no estén disponibles conservarán el texto original."
            : "Data comes from ForeverDB. Unavailable translations retain the original text."
          : isSpanish
            ? "Los datos de Blizzard Retail corresponden a esa versión y no deben interpretarse como datos de WoW Forever."
            : "Blizzard Retail data belongs to that version and should not be treated as WoW Forever data."}
      </p>
    </section>
  );
}
