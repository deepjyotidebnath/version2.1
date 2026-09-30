// ===== script.js additions (append to the end) =====
(function() {
    var s = document.getElementById('industrySearch');
    if (!s) return;
    var cards = document.querySelectorAll('.industry-card'),
        empty = document.getElementById('industryEmpty');
    s.addEventListener('input', function() {
        var q = s.value.trim().toLowerCase(),
            n = 0;
        cards.forEach(function(c) {
            var m = !q || c.textContent.toLowerCase().indexOf(q) > -1;
            c.style.display = m ? '' : 'none';
            if (m) n++;
        });
        empty.style.display = n ? 'none' : 'block';
    });
})();