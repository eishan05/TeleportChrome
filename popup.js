document.addEventListener('DOMContentLoaded', function() {
    var sendBtn = document.getElementById('sendBtn');
    var msg = document.getElementById('msg');
    // onClick's logic below:
    sendBtn.addEventListener('click', function() {
        alert(msg.value);
    });
});