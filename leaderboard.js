(function () {
  const table_data = document.querySelector(".table tbody");
  $.getJSON("/UsersTable.json", function (results) {
    scores = results
      .map(r => r.Score)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => +b - +a);
    table_data.innerHTML = "";
    htmldata = "";
    results.forEach((participant, index) => {
      htmldata += `
        <tr class="hover-color">
          <td class="table-data-id">${index + 1}</td>
          <td class="table-data-rank">${scores.indexOf(participant.Score) + 1}</td>
          <td class="table-username">
            <a href="https://github.com/${participant.Username}" target="_blank">${participant.Username}</a>
          </td>
          <td class="table-data-rank">${participant.PRCount}</td>
          <td class="table-score">${participant.Score}</td>
        </tr>
      `;
    });
    table_data.innerHTML = htmldata;
  });
})();

tippy("[data-tippy-content]", {
  theme: "translucent"
});