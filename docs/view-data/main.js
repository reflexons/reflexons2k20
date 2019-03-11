const URL = "https://reflexons-2019.firebaseio.com/registrations.json";
let dataArr = [];

$(document).ready(function() {
  $.ajax({
    url: URL,
    dataType: "json",
    success: function(res) {
      for (let i in res) {
        if (res.hasOwnProperty(i)) {
          let val = res[i];
          dataArr.push({
            event: val.event,
            name: val.name,
            email: val.email,
            stream: val.stream,
            course: val.course,
            year: val.year,
            institution: val.institution,
            teamSize: val.teamSize,
            teamMembers: val.teamMembers,
            teamPreference: val.teamPreference ? val.teamPreference : ""
          });
        }
      }

      let dataTableOptions = {
        data: dataArr,
        columns: [
          { title: "Event", data: "event" },
          { title: "Name", data: "name" },
          { title: "Email", data: "email" },
          { title: "Stream", data: "stream" },
          { title: "Course", data: "course" },
          { title: "Year", data: "year" },
          { title: "Institution", data: "institution" },
          { title: "Team Size", data: "teamSize" },
          { title: "Team Members", data: "teamMembers" },
          { title: "Team Preference", data: "teamPreference" }
        ],
        paging: true,
        scrollY: "100%",
        select: true
      };

      $("#table_id").DataTable(dataTableOptions);
    }
  });

  console.log(dataArr);
});
