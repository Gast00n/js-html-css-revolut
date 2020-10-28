//START WORKING

$(document).ready(function() {

    // Determiniamo le VAR
    var dropLink = $('.drop > a');
    // var dropArrow = $('.drop > a > span')
    var dropMenu = $('.drop > .dropdown-menu');

    // Mostra / Nascondi i dropdown con il TOGGLE
    dropLink.click( function() {
        // seleziono l'elemento successivo alla A
        var menu = $(this).next();
        // var arrow = $(this);

        // Gestione Freccia Giù
        // arrow.empty();
        // arrow.append('<i class="fas fa-chevron-up"></i>');

        // Nascondi menu non selezionato
        // dropArrow.not(arrow).empty();
        // dropArrow.not(arrow).append('<i class="fas fa-chevron-down"></i>');
        dropMenu.not(menu).hide();
        menu.toggle();
    });

}); //Fine del DOC READY