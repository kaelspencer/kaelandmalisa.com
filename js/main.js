(function(){
    var images = [
        { img: "img/sample/6791628438_affaa19e10", title: "This is the colors I love" },
        { img: "img/sample/6798453217_72dea2d06e", title: "My first clothespin" },
        { img: "img/sample/6806687375_07d2b7a1f9", title: "Fiocco" },
        { img: "img/sample/6812090617_5fd5bbdda0", title: "Me and My Belover" },
        { img: "img/sample/6840627709_92ed52fb41", title: "The painter in Florence" },
        { img: "img/sample/6841267340_855273fd7e", title: "Love" },
        { img: "img/sample/6876412479_6268c6e2aa", title: "I Love You" },
        { img: "img/sample/6880502467_d4b3c4b2a8", title: "Florence streets. Florence people." },
        { img: "img/sample/6916180091_9c9559e463", title: "The Hope" },
        { img: "img/sample/6958456697_e56a37bb5f", title: "Young Lovers' Wall and the Old Rain" },
        { img: "img/sample/7002395006_29fdc85f7a", title: "Freedom" },
        { img: "img/sample/7062575651_b23918b11a", title: "Maybe spring" },
        { img: "img/sample/7222046648_5bf70e893a", title: "Simply my Brother" },
        { img: "img/sample/7302459122_19fa1d8223", title: "Truthful Innocence" },
        { img: "img/sample/7948632554_01f6ae6b6f", title: "Just in a dream Place" },
        { img: "img/sample/8083451788_552becfbc7", title: "What's your destination?" },
    ];

    var gallery = $('#gallery');

    for (var i = 0; i < 3; i++) {
        $.each(images, function(i, image) {
            gallery.append('<a href="' + image.img + '_b.jpg" title="' + image.title + '"><img alt="' + image.title +
                           '" src="' + image.img + '_n.jpg" /></a>');
        });
    }

    gallery.justifiedGallery({
        rowHeight : 160,
        randomize: true
    });
}());
