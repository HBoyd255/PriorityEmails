javascript: (function () {
  userMatch = window.location.href.match(
    /https:\/\/mail\.google\.com\/mail\/u\/(\d+)\//
  );
  let userValue = "0";
  if (userMatch && userMatch[1]) {
    userValue = userMatch[1];
  }
  window.location.href =
    "https://mail.google.com/mail/u/" +
    userValue +
    "/#search/label%3Ainbox+%7C+is%3Astarred+%7C+is%3Aunread";
})();