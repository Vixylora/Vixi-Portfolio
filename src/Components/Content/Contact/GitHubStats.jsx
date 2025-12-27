import { useEffect, useState } from "react";

function GitHubStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/vixylora")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return null;

  return (
    <div id="GitContainer">
        <div id="DiscordCard">
            <div id="AvatarContainer"> 
              <img src={data.avatar_url} id="gitavatar" alt={data.name} /> 
            </div>
            <div id="GitText">
                <div id="GitTextContainer">
                    <div id="Name">
                        <h2 id="DisplayName">{data.name}</h2>
                        <h4 id="UserName"> ({data.login}) </h4>
                    </div>
                    <div className="discord-divider"></div>
                    <p id="StatusText">Bio : <span className="italic font-[500]">{data.bio || "No Bio Set"}</span></p>
                </div>
                <div id="GitStats" className="flex flow-row gap-[20px]">
                    <p>Followers : {data.followers}</p>
                    <p>Following : {data.following}</p>
                </div>
            </div>
        </div>
        <div className="divider dc-send-divider"></div>
        <a target="_blank" href={data.html_url} id="GitButton" className="cursor-target" rel="noopener noreferrer">
            <button type="button">View GitHub</button>
        </a>
    </div>
  );
}

export default GitHubStats;
