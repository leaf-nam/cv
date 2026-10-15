// progress bar + print button; pagination handled by CSS (one H2 section per page)
(function () {
  var bar = document.getElementById("progress-bar");
  window.addEventListener(
    "scroll",
    function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (bar) bar.style.width = p + "%";
    },
    { passive: true },
  );
  var btn = document.getElementById("btn-print");
  if (btn)
    btn.addEventListener("click", function () {
      window.print();
    });
  window.addEventListener("beforeprint", function () {
    document.documentElement.classList.add("pf");
  });
  window.addEventListener("afterprint", function () {
    document.documentElement.classList.remove("pf");
  });
})();
