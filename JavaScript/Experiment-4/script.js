window.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('myTextarea');
    var charCount = document.getElementById('charCount');

    
    const handler = function() {
        var value = textarea.value;
        var newlineCount = (value.match(/\n/g) || []).length;
        charCount.textContent = value.length - newlineCount;
    }
    textarea.addEventListener('input', handler);
});