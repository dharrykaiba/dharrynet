//src/components/wow/WowItemLookup.jsx
import React, { useState } from "react";
import "./WowSpellLookup.css";

const API_URL = "http://localhost:4000/api";

function getIconUrl(value, iconUrl) {
  if (typeof iconUrl === "string" && /^https?:\/\//i.test(iconUrl)) {
    return iconUrl;
  }

  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  // Wowhead y ForeverDB pueden devolver el nombre del icono.
  const iconName = value.trim().replace(/\.(png|jpe?g|webp)$/i, "");

  if (!/^[a-zA-Z0-9_-]+$/.test(iconName)) {
    return null;
  }

  return `https://wow.zamimg.com/images/wow/icons/large/${iconName}.jpg`;
}

function extractPayload(result) {
  return result?.data?.data ?? result?.data ?? result;
}

function getQualityClass(quality) {
  const numeric = Number(
    typeof quality === "object" ? quality?.id : quality
  );

  const classes = {
    0: "quality-poor",
    1: "quality-common",
    2: "quality-uncommon",
    3: "quality-rare",
    4: "quality-epic",
    5: "quality-legendary",
    6: "quality-artifact",
    7: "quality-heirloom",
    8: "quality-wow-token"
  };

  return classes[numeric] || "quality-unknown";
}

export default function WowItemLookup({ language = "es" }) {
  const isSpanish = language === "es";

  const [itemId, setItemId] = useState("");
  const [source, setSource] = useState("forever");
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchItem = async (event) => {
    event.preventDefault();

    const id = Number(itemId);

    if (!Number.isSafeInteger(id) || id <= 0) {
      setError(
        isSpanish
          ? "Introduce un ID de objeto válido."
          : "Enter a valid item ID."
      );
      setItem(null);
      return;
    }

    setLoading(true);
    setError("");
    setItem(null);

    try {
      const url =
        source === "forever"
          ? `${API_URL}/wow/forever/items/${id}`
          : `${API_URL}/wow/wowhead/items/${id}`;

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
              ? "No se pudo encontrar el objeto."
              : "Could not find the item.")
        );
      }

      const rawItem = extractPayload(result);

      if (
        !rawItem ||
        typeof rawItem !== "object" ||
        Array.isArray(rawItem)
      ) {
        throw new Error(
          isSpanish
            ? "La respuesta no contiene datos válidos."
            : "The response contains no valid item data."
        );
      }

      const normalizedItem = {
        ...rawItem,
        id: rawItem.id ?? rawItem.itemId ?? rawItem.item_id ?? id,
        name:
          rawItem.name ??
          rawItem.localizedName ??
          (isSpanish ? "Objeto sin nombre" : "Unnamed item"),
        description:
          rawItem.description ??
          rawItem.tooltipText ??
          rawItem.tooltip ??
          rawItem.text ??
          "",
        iconUrl: getIconUrl(
          rawItem.icon,
          rawItem.iconUrl ?? rawItem.icon_url ?? rawItem.media?.icon
        ),
        source
      };

      setItem(normalizedItem);
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
    source === "forever" ? "WoW Forever / ForeverDB" : "Wowhead XML";

  const itemLevel =
    item?.itemLevel ?? item?.item_level ?? item?.level;

  const quality =
    typeof item?.quality === "object"
      ? item.quality?.name ?? item.quality?.id
      : item?.quality;

  const qualityClass = getQualityClass(item?.quality);

  return (
    <section className="wow-spell-section">
      <div className="wow-spell-heading">
        <span className="wow-spell-eyebrow">
          {isSpanish ? "ARCHIVOS DE AZEROTH" : "ARCHIVES OF AZEROTH"}
        </span>

        <h2>{isSpanish ? "Biblioteca de objetos" : "Item Library"}</h2>

        <p>
          {isSpanish
            ? "Busca objetos por ID y consulta los datos disponibles en cada fuente."
            : "Search items by ID and explore the data available from each source."}
        </p>
      </div>

      <form className="wow-spell-search" onSubmit={searchItem}>
        <label htmlFor="wow-item-source">
          {isSpanish ? "Fuente de datos" : "Data source"}
        </label>

        <select
          id="wow-item-source"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
            setItem(null);
            setError("");
          }}
        >
          <option value="forever">WoW Forever / ForeverDB</option>
          <option value="wowhead">Wowhead XML</option>
        </select>

        <label htmlFor="wow-item-id">
          {isSpanish ? "ID del objeto" : "Item ID"}
        </label>

        <div className="wow-spell-search-controls">
          <input
            id="wow-item-id"
            type="number"
            min="1"
            step="1"
            value={itemId}
            onChange={(event) => setItemId(event.target.value)}
            placeholder={isSpanish ? "Ej. 25" : "e.g. 25"}
          />

          <button type="submit" disabled={loading}>
            {loading
              ? isSpanish
                ? "Buscando..."
                : "Searching..."
              : isSpanish
                ? "Buscar objeto"
                : "Search item"}
          </button>
        </div>
      </form>

      {error && (
        <p className="wow-spell-error" role="alert">
          {error}
        </p>
      )}

      {item && (
        <article className={`wow-spell-card ${qualityClass}`}>
          <div className="wow-spell-icon-frame wow-tooltip-anchor">
            {item.iconUrl ? (
              <img
                src={item.iconUrl}
                alt={item.name}
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
              <strong className={`wow-tooltip-name ${qualityClass}`}>
                {item.name}
              </strong>
              <span className="wow-tooltip-id">ID: {item.id}</span>

              {item.description && (
                <span className="wow-tooltip-description">
                  {item.description}
                </span>
              )}

              {itemLevel != null && (
                <span>
                  {isSpanish ? "Nivel de objeto" : "Item level"}: {itemLevel}
                </span>
              )}

              {quality != null && (
                <span>
                  {isSpanish ? "Calidad" : "Quality"}: {String(quality)}
                </span>
              )}
            </div>
          </div>

          <div className="wow-spell-details">
            <div className="wow-spell-title-row">
              <h3 className={qualityClass}>{item.name}</h3>
              <span className="wow-spell-id">ID: {item.id}</span>
            </div>

            {item.description && (
              <p className="wow-spell-description">{item.description}</p>
            )}

            <div className="wow-spell-meta">
              <span>
                {isSpanish ? "Fuente" : "Source"}: {sourceName}
              </span>

              {itemLevel != null && (
                <span>
                  {isSpanish ? "Nivel del objeto" : "Item level"}: {itemLevel}
                </span>
              )}

              {quality != null && (
                <span>
                  {isSpanish ? "Calidad" : "Quality"}: {String(quality)}
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
                  ? "Datos obtenidos del XML de Wowhead. No se garantiza que todas las características coincidan con WoW Forever."
                  : "Data obtained from Wowhead XML. Not all properties are guaranteed to match WoW Forever."}
                {" "}
                <a
                  href={`https://www.wowhead.com/item=${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wowhead ↗
                </a>
              </p>
            )}

            <details className="wow-item-raw">
              <summary>
                {isSpanish ? "Ver datos completos" : "View complete data"}
              </summary>
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </details>
          </div>
        </article>
      )}

      {!item && !error && !loading && (
        <div className="wow-spell-empty">
          <span aria-hidden="true">⚔</span>
          <p>
            {isSpanish
              ? "Introduce el ID de un objeto para consultar sus datos."
              : "Enter an item ID to explore its details."}
          </p>
        </div>
      )}

      <p className="wow-spell-disclaimer">
        {source === "forever"
          ? isSpanish
            ? "La información procede de ForeverDB y depende de la cobertura de su base de datos."
            : "Information comes from ForeverDB and depends on its database coverage."
          : isSpanish
            ? "Wowhead es una fuente complementaria. Sus datos pueden corresponder a otra versión del juego."
            : "Wowhead is a supplementary source. Its data may correspond to a different game version."}
      </p>
    </section>
  );
}
