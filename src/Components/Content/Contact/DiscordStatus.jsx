import { useEffect, useState } from "react";
import online from "../../../assets/StatusIcons/online.png";
import idle from "../../../assets/StatusIcons/idle.png";
import dnd from "../../../assets/StatusIcons/dnd.png";
import offline from "../../../assets/StatusIcons/offline.png";

const statusIcons = {
  online: online,
  idle: idle,
  dnd: dnd,
  offline: offline
};

function DiscordStatus() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/1066056849996247100")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Discord status:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div id="DiscordCardContainer">
        <div id="DiscordCard">
          <div id="AvatarContainer">
            <div style={{width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              Loading...
            </div>
          </div>
          <div id="Discordtext">
            <div id="TextContainer">
              <div id="Name">
                <h2 id="DisplayName">Loading Discord...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div id="DiscordCardContainer">
        <div id="DiscordCard">
          <div id="AvatarContainer">
            <img src={offline} id="status" alt="offline" style={{width: '80px', height: '80px', borderRadius: '50%'}} />
          </div>
          <div id="Discordtext">
            <div id="TextContainer">
              <div id="Name">
                <h2 id="DisplayName">Discord</h2>
                <h4 id="UserName">(vixylora)</h4>
              </div>
              <div className="discord-divider"></div>
              <p id="StatusText">Status: Offline</p>
            </div>
          </div>
        </div>
        <div className="divider dc-send-divider"></div>
        <a target="_blank" href="https://discord.com/users/1066056849996247100" id="DiscordButton" className="cursor-target" rel="noopener noreferrer">
          <button type="button">Send a message</button>
        </a>
      </div>
    );
  }

  const { discord_user, discord_status } = data;
  const StatusText = data.activities.find(a => a.type === 4);
  const avatar = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`;
  
  return(
    <div id="DiscordCardContainer">
      <div id="DiscordCard">
          <div id="AvatarContainer">
            <img src={avatar} id="avatar" alt={discord_user.global_name} />
            <div id="StatusContainer">
              <img src={statusIcons[discord_status]} id="status" alt={discord_status} />
            </div>
          </div>
      
      
        <div id="Discordtext">
              <div id="TextContainer">
                <div id="Name">
                  <h2 id="DisplayName">{discord_user.global_name}</h2>
                  <h4 id="UserName">({discord_user.username})</h4>
                </div>
              <span className="text-[white]">-</span>
                <div id="guild_badge">
                  {discord_user.primary_guild ? (
                    <>
                      <img
                        id="guildicon"
                        src={`https://cdn.discordapp.com/clan-badges/${discord_user.primary_guild.identity_guild_id}/${discord_user.primary_guild.badge}.png`}
                        alt="Guild badge"
                      />
                      <p id="guildtag">{discord_user.primary_guild.tag}</p>
                    </>
                  ) : (
                    <p id="guildtag">No guild info</p>
                  )}
                </div>
            </div>
          
              <div className="discord-divider"></div>
          
              <div>
               <p id="StatusText">
                 Status : <span className="italic font-[500]"> {StatusText?.state || "User is offline"} </span>
               </p>
              </div>
        </div>
      </div>
      <div className="divider dc-send-divider"></div>
      <a target="_blank" href="https://discord.com/users/1066056849996247100" id="DiscordButton" className="cursor-target" rel="noopener noreferrer">
        <button type="button">Send a message</button>
      </a>
    </div>
  )
}

export default DiscordStatus;
