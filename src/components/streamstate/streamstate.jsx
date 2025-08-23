import React, { useEffect, useState } from "react";
import { SiTwitch, SiYoutube } from "react-icons/si";
import { TbBrandKickFilled } from "react-icons/tb";
import "./streamingStatus.css";

const platforms = [
  {
    key: "twitch",
    Icon: SiTwitch,
    url: `https://www.twitch.tv/${process.env.REACT_APP_TWITCH_USERNAME}`,
  },
  {
    key: "kick",
    Icon: TbBrandKickFilled,
    url: `https://kick.com/${process.env.REACT_APP_KICK_USERNAME}`,
  },
  {
    key: "youtube",
    Icon: SiYoutube,
    url: `https://www.youtube.com/${process.env.REACT_APP_YOUTUBE_USERNAME}`,
  },
];

const StreamingStatus = ({ className = "" }) => {
  const [status, setStatus] = useState({
    twitch: "checking",
    kick: "checking",
    youtube: "checking",
  });

  useEffect(() => {
    setStatus((prev) => ({ ...prev, twitch: "online" })); // 🔥 Forzado
    checkKick();
    checkYouTube();
  }, []);

  async function checkTwitch() {
    try {
      const res = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${process.env.REACT_APP_TWITCH_USERNAME}`,
        {
          headers: {
            "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID,
            Authorization: `Bearer ${process.env.REACT_APP_TWITCH_AUTH_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      const streams = Array.isArray(data.data) ? data.data : [];
      setStatus((prev) => ({
        ...prev,
        twitch: streams.length > 0 ? "online" : "offline",
      }));
    } catch {
      setStatus((prev) => ({ ...prev, twitch: "error" }));
    }
  }

  async function checkKick() {
    try {
      const res = await fetch(
        `https://kick.com/api/v2/channels/${process.env.REACT_APP_KICK_USERNAME}`
      );
      const data = await res.json();
      setStatus((prev) => ({
        ...prev,
        kick: data?.livestream ? "online" : "offline",
      }));
    } catch {
      setStatus((prev) => ({ ...prev, kick: "error" }));
    }
  }

  async function checkYouTube() {
    try {
      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
      const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

      if (!apiKey || !channelId) {
        setStatus((prev) => ({ ...prev, youtube: "offline" }));
        return;
      }

      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      const items = Array.isArray(data.items) ? data.items : [];
      setStatus((prev) => ({
        ...prev,
        youtube: items.length > 0 ? "online" : "offline",
      }));
    } catch {
      setStatus((prev) => ({ ...prev, youtube: "offline" }));
    }
  }

  return (
    <div className={`streaming-status ${className}`}>
      {platforms.map(({ key, Icon, url }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`platform ${status[key]}`}
        >
          <Icon className={`icon ${status[key]}`} />
          <span className="state-text">
            {status[key] === "online"
              ? "ON"
              : status[key] === "offline"
              ? "OFF"
              : "--"}
          </span>
        </a>
      ))}
    </div>
  );
};

export default StreamingStatus;
