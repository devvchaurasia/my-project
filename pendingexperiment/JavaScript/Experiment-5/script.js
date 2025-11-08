window.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('categoryFilter');
    var items = document.querySelectorAll('.product-item');

    function applyFilter() {
        var selected = select.value; 
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var category = item.getAttribute('data-category');
            if (selected === 'All' || selected === category) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    }

    select.addEventListener('change', applyFilter);
    applyFilter();
});
