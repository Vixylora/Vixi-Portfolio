import { useEffect, useState } from "react";

function GitHubStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/vixylora")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div id="GitContainer">
        <div id="DiscordCard">
          <div id="AvatarContainer">
            <div style={{width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              Loading...
            </div>
          </div>
          <div id="GitText">
            <div id="GitTextContainer">
              <div id="Name">
                <h2 id="DisplayName">Loading GitHub...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div id="GitContainer">
        <div id="DiscordCard">
          <div id="AvatarContainer">
            <div style={{width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              ?
            </div>
          </div>
          <div id="GitText">
            <div id="GitTextContainer">
              <div id="Name">
                <h2 id="DisplayName">GitHub</h2>
                <h4 id="UserName">(Vixylora)</h4>
              </div>
              <div className="discord-divider"></div>
              <p id="StatusText">Unable to load GitHub data</p>
            </div>
          </div>
        </div>
        <div className="divider dc-send-divider"></div>
        <a target="_blank" href="https://github.com/Vixylora" id="GitButton" className="cursor-target" rel="noopener noreferrer">
          <button type="button">View GitHub</button>
        </a>
      </div>
    );
  }

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
