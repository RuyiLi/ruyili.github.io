$(document).ready(function() {
    var s = $.scrollorama({
        blocks:'.scrollblock'
    });
    
    s.animate('#multiplat', {
        duration: 400, property: 'left', start: -1000, end: 0
    })
    
    s.animate('#ubuntu', {
        delay: 50, duration: 700, property: 'rotate', start: 450, end: 0
    })
    
    s.animate('#ubuntutitle', {
        duration: 800, property: 'left', start: -1000, end: -10
    })
    
    s.animate('#windowstitle', {
        delay: 100, duration: 800, property: 'left', start: -1000, end: -10
    })
    
});