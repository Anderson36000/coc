const clanTag = "2QPGVL0JG";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjlmNjkwMzNlLTlmNjAtNGEyMi1iMTVkLWY4YzBhMGQ5NGQ4NCIsImlhdCI6MTc0NjMxMTY3NSwic3ViIjoiZGV2ZWxvcGVyLzM0ZjU1MWIyLTJhYmItNGZmNS0zMjI3LTQ1Y2U2ZjE5ZGM0ZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MS4xNzYuNzIuMzQiXSwidHlwZSI6ImNsaWVudCJ9XX0.yI0rsMKvxC7CXirnM5mOOFHdtKIOlqK4NmQqSNNC2U4n0B5do114R0QkayX8Y6_HP15l4UxGIAU3lMC50wIptw";

fetch(`https://api.clashofclans.com/v1/clans/%23${clanTag}/members`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("miembros");
    data.items.forEach(m => {
      const div = document.createElement("div");
      div.className = "clan-member";
      div.innerHTML = `
        <strong>${m.name}</strong><br>
        Nivel: ${m.expLevel}<br>
        Rol: ${m.role}<br>
        Donaciones: ${m.donations}
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => {
    const contenedor = document.getElementById("miembros");
    contenedor.innerHTML = "<p style='color: red;'>Error al obtener los datos del clan. Revisa la consola.</p>";
    console.error("Error al obtener datos del clan:", err);
  });