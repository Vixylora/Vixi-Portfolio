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

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/1066056849996247100")
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  if (!data) return null;

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
