//:::::::   J A V A S C R I P T  ::  D A T E S   ::::::

//https://www.hackerrank.com/challenges/js10-date/problem

function getDayName(dateString) {
  let dayName = new Date(dateString).toLocaleString("en-us", {
    weekday: "long"
  });

  return dayName;
}
