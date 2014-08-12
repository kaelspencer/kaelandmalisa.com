(function(){
    var c_PreloadChunkSize = 40;
    var c_PreloadTimer = 1000;
    var images = fisher_yates_shuffle([
        { img: "img/wedding/01_04_D_S_0004", title: "" },
        { img: "img/wedding/01_07_D_S_0007", title: "" },
        { img: "img/wedding/01_08_D_S_0008", title: "" },
        { img: "img/wedding/01_100_D_S_0100", title: "" },
        { img: "img/wedding/01_11_D_S_0011", title: "" },
        { img: "img/wedding/01_16_D_S_0016", title: "" },
        { img: "img/wedding/01_18_D_S_0018", title: "" },
        { img: "img/wedding/01_21_D_S_0021", title: "" },
        { img: "img/wedding/01_22_D_S_0022", title: "" },
        { img: "img/wedding/01_23_D_S_0023", title: "" },
        { img: "img/wedding/01_25_D_S_0025", title: "" },
        { img: "img/wedding/01_26_D_S_0026", title: "" },
        { img: "img/wedding/01_27_D_S_0027", title: "" },
        { img: "img/wedding/01_29_D_S_0029", title: "" },
        { img: "img/wedding/01_30_D_S_0030", title: "" },
        { img: "img/wedding/01_32_D_S_0032", title: "" },
        { img: "img/wedding/01_37_D_S_0037", title: "" },
        { img: "img/wedding/01_39_D_S_0039", title: "" },
        { img: "img/wedding/01_40_D_S_0040", title: "" },
        { img: "img/wedding/01_41_D_S_0041", title: "" },
        { img: "img/wedding/01_44_D_S_0044", title: "" },
        { img: "img/wedding/01_45_D_S_0045", title: "" },
        { img: "img/wedding/01_49_D_S_0049", title: "" },
        { img: "img/wedding/01_52_D_S_0052", title: "" },
        { img: "img/wedding/01_53_D_S_0053", title: "" },
        { img: "img/wedding/01_55_D_S_0055", title: "" },
        { img: "img/wedding/01_57_D_S_0057", title: "" },
        { img: "img/wedding/01_60_D_S_0060", title: "" },
        { img: "img/wedding/01_64_D_S_0064", title: "" },
        { img: "img/wedding/01_65_D_S_0065", title: "" },
        { img: "img/wedding/01_67_D_S_0067", title: "" },
        { img: "img/wedding/01_68_D_S_0068", title: "" },
        { img: "img/wedding/01_69_D_S_0069", title: "" },
        { img: "img/wedding/01_70_D_S_0070", title: "" },
        { img: "img/wedding/01_73_D_S_0073", title: "" },
        { img: "img/wedding/01_75_D_S_0075", title: "" },
        { img: "img/wedding/01_77_D_S_0077", title: "" },
        { img: "img/wedding/01_78_D_S_0078", title: "" },
        { img: "img/wedding/01_80_D_S_0080", title: "" },
        { img: "img/wedding/01_81_D_S_0081", title: "" },
        { img: "img/wedding/01_83_D_S_0083", title: "" },
        { img: "img/wedding/01_84_D_S_0084", title: "" },
        { img: "img/wedding/01_85_D_S_0085", title: "" },
        { img: "img/wedding/01_87_D_S_0087", title: "" },
        { img: "img/wedding/01_88_D_S_0088", title: "" },
        { img: "img/wedding/01_89_D_S_0089", title: "" },
        { img: "img/wedding/01_90_D_S_0090", title: "" },
        { img: "img/wedding/01_91_D_S_0091", title: "" },
        { img: "img/wedding/01_92_D_S_0092", title: "" },
        { img: "img/wedding/01_96_D_S_0096", title: "" },
        { img: "img/wedding/01_97_D_S_0097", title: "" },
        { img: "img/wedding/01_98_D_S_0098", title: "" },
        { img: "img/wedding/01_99_D_S_0099", title: "" },
        { img: "img/wedding/02_01_D_S_0101", title: "" },
        { img: "img/wedding/02_03_D_S_0103", title: "" },
        { img: "img/wedding/02_05_D_S_0105", title: "" },
        { img: "img/wedding/02_104_D_S_0204", title: "" },
        { img: "img/wedding/02_108_D_S_0208", title: "" },
        { img: "img/wedding/02_110_D_S_0210", title: "" },
        { img: "img/wedding/02_112_D_S_0212", title: "" },
        { img: "img/wedding/02_113_D_S_0213", title: "" },
        { img: "img/wedding/02_114_D_S_0214", title: "" },
        { img: "img/wedding/02_115_D_S_0215", title: "" },
        { img: "img/wedding/02_119_D_S_0219", title: "" },
        { img: "img/wedding/02_120_D_S_0220", title: "" },
        { img: "img/wedding/02_122_D_S_0222", title: "" },
        { img: "img/wedding/02_131_D_S_0231", title: "" },
        { img: "img/wedding/02_132_D_S_0232", title: "" },
        { img: "img/wedding/02_134_D_S_0234", title: "" },
        { img: "img/wedding/02_137_D_S_0237", title: "" },
        { img: "img/wedding/02_138_D_S_0238", title: "" },
        { img: "img/wedding/02_142_D_S_0242", title: "" },
        { img: "img/wedding/02_149_D_S_0249", title: "" },
        { img: "img/wedding/02_150_D_S_0250", title: "" },
        { img: "img/wedding/02_152_D_S_0252", title: "" },
        { img: "img/wedding/02_155_D_S_0255", title: "" },
        { img: "img/wedding/02_15_D_S_0115", title: "" },
        { img: "img/wedding/02_160_D_S_0260", title: "" },
        { img: "img/wedding/02_161_D_S_0261", title: "" },
        { img: "img/wedding/02_164_D_S_0264", title: "" },
        { img: "img/wedding/02_166_D_S_0266", title: "" },
        { img: "img/wedding/02_167_D_S_0267", title: "" },
        { img: "img/wedding/02_170_D_S_0270", title: "" },
        { img: "img/wedding/02_173_D_S_0273", title: "" },
        { img: "img/wedding/02_174_D_S_0274", title: "" },
        { img: "img/wedding/02_192_D_S_0292", title: "" },
        { img: "img/wedding/02_200_D_S_0300", title: "" },
        { img: "img/wedding/02_201_D_S_0301", title: "" },
        { img: "img/wedding/02_203_D_S_0303", title: "" },
        { img: "img/wedding/02_20_D_S_0120", title: "" },
        { img: "img/wedding/02_210_D_S_0310", title: "" },
        { img: "img/wedding/02_218_D_S_0318", title: "" },
        { img: "img/wedding/02_21_D_S_0121", title: "" },
        { img: "img/wedding/02_220_D_S_0320", title: "" },
        { img: "img/wedding/02_224_D_S_0324", title: "" },
        { img: "img/wedding/02_237_D_S_0337", title: "" },
        { img: "img/wedding/02_241_D_S_0341", title: "" },
        { img: "img/wedding/02_243_D_S_0343", title: "" },
        { img: "img/wedding/02_24_D_S_0124", title: "" },
        { img: "img/wedding/02_252_D_S_0352", title: "" },
        { img: "img/wedding/02_260_D_S_0360", title: "" },
        { img: "img/wedding/02_263_D_S_0363", title: "" },
        { img: "img/wedding/02_264_D_S_0364", title: "" },
        { img: "img/wedding/02_268_D_S_0368", title: "" },
        { img: "img/wedding/02_271_D_S_0371", title: "" },
        { img: "img/wedding/02_274_D_S_0374", title: "" },
        { img: "img/wedding/02_276_D_S_0376", title: "" },
        { img: "img/wedding/02_278_D_S_0378", title: "" },
        { img: "img/wedding/02_279_D_S_0379", title: "" },
        { img: "img/wedding/02_27_D_S_0127", title: "" },
        { img: "img/wedding/02_282_D_S_0382", title: "" },
        { img: "img/wedding/02_286_D_S_0386", title: "" },
        { img: "img/wedding/02_287_D_S_0387", title: "" },
        { img: "img/wedding/02_28_D_S_0128", title: "" },
        { img: "img/wedding/02_293_D_S_0393", title: "" },
        { img: "img/wedding/02_295_D_S_0395", title: "" },
        { img: "img/wedding/02_303_D_S_0403", title: "" },
        { img: "img/wedding/02_305_D_S_0405", title: "" },
        { img: "img/wedding/02_306_D_S_0406", title: "" },
        { img: "img/wedding/02_308_D_S_0408", title: "" },
        { img: "img/wedding/02_319_D_S_0419", title: "" },
        { img: "img/wedding/02_322_D_S_0422", title: "" },
        { img: "img/wedding/02_325_D_S_0425", title: "" },
        { img: "img/wedding/02_332_D_S_0432", title: "" },
        { img: "img/wedding/02_336_D_S_0436", title: "" },
        { img: "img/wedding/02_340_D_S_0440", title: "" },
        { img: "img/wedding/02_349_D_S_0449", title: "" },
        { img: "img/wedding/02_352_D_S_0452", title: "" },
        { img: "img/wedding/02_355_D_S_0455", title: "" },
        { img: "img/wedding/02_356_D_S_0456", title: "" },
        { img: "img/wedding/02_35_D_S_0135", title: "" },
        { img: "img/wedding/02_360_D_S_0460", title: "" },
        { img: "img/wedding/02_364_D_S_0464", title: "" },
        { img: "img/wedding/02_36_D_S_0136", title: "" },
        { img: "img/wedding/02_373_D_S_0473", title: "" },
        { img: "img/wedding/02_376_D_S_0476", title: "" },
        { img: "img/wedding/02_380_D_S_0480", title: "" },
        { img: "img/wedding/02_385_D_S_0485", title: "" },
        { img: "img/wedding/02_391_D_S_0491", title: "" },
        { img: "img/wedding/02_392_D_S_0492", title: "" },
        { img: "img/wedding/02_393_D_S_0493", title: "" },
        { img: "img/wedding/02_397_D_S_0497", title: "" },
        { img: "img/wedding/02_399_D_S_0499", title: "" },
        { img: "img/wedding/02_410_D_S_0510", title: "" },
        { img: "img/wedding/02_420_D_S_0520", title: "" },
        { img: "img/wedding/02_42_D_S_0142", title: "" },
        { img: "img/wedding/02_438_D_S_0538", title: "" },
        { img: "img/wedding/02_441_D_S_0541", title: "" },
        { img: "img/wedding/02_453_D_S_0553", title: "" },
        { img: "img/wedding/02_457_D_S_0557", title: "" },
        { img: "img/wedding/02_459_D_S_0559", title: "" },
        { img: "img/wedding/02_462_D_S_0562", title: "" },
        { img: "img/wedding/02_466_D_S_0566", title: "" },
        { img: "img/wedding/02_467_D_S_0567", title: "" },
        { img: "img/wedding/02_468_D_S_0568", title: "" },
        { img: "img/wedding/02_470_D_S_0570", title: "" },
        { img: "img/wedding/02_474_D_S_0574", title: "" },
        { img: "img/wedding/02_483_D_S_0583", title: "" },
        { img: "img/wedding/02_484_D_S_0584", title: "" },
        { img: "img/wedding/02_485_D_S_0585", title: "" },
        { img: "img/wedding/02_48_D_S_0148", title: "" },
        { img: "img/wedding/02_491_D_S_0591", title: "" },
        { img: "img/wedding/02_493_D_S_0593", title: "" },
        { img: "img/wedding/02_496_D_S_0596", title: "" },
        { img: "img/wedding/02_499_D_S_0599", title: "" },
        { img: "img/wedding/02_501_D_S_0601", title: "" },
        { img: "img/wedding/02_504_D_S_0604", title: "" },
        { img: "img/wedding/02_506_D_S_0606", title: "" },
        { img: "img/wedding/02_510_D_S_0610", title: "" },
        { img: "img/wedding/02_518_D_S_0618", title: "" },
        { img: "img/wedding/02_51_D_S_0151", title: "" },
        { img: "img/wedding/02_521_D_S_0621", title: "" },
        { img: "img/wedding/02_524_D_S_0624", title: "" },
        { img: "img/wedding/02_525_D_S_0625", title: "" },
        { img: "img/wedding/02_52_D_S_0152", title: "" },
        { img: "img/wedding/02_539_D_S_0639", title: "" },
        { img: "img/wedding/02_540_D_S_0640", title: "" },
        { img: "img/wedding/02_541_D_S_0641", title: "" },
        { img: "img/wedding/02_543_D_S_0643", title: "" },
        { img: "img/wedding/02_55_D_S_0155", title: "" },
        { img: "img/wedding/02_566_D_S_0666", title: "" },
        { img: "img/wedding/02_567_D_S_0667", title: "" },
        { img: "img/wedding/02_572_D_S_0672", title: "" },
        { img: "img/wedding/02_575_D_S_0675", title: "" },
        { img: "img/wedding/02_576_D_S_0676", title: "" },
        { img: "img/wedding/02_578_D_S_0678", title: "" },
        { img: "img/wedding/02_579_D_S_0679", title: "" },
        { img: "img/wedding/02_57_D_S_0157", title: "" },
        { img: "img/wedding/02_590_D_S_0690", title: "" },
        { img: "img/wedding/02_591_D_S_0691", title: "" },
        { img: "img/wedding/02_592_D_S_0692", title: "" },
        { img: "img/wedding/02_593_D_S_0693", title: "" },
        { img: "img/wedding/02_598_D_S_0698", title: "" },
        { img: "img/wedding/02_604_D_S_0704", title: "" },
        { img: "img/wedding/02_606_D_S_0706", title: "" },
        { img: "img/wedding/02_608_D_S_0708", title: "" },
        { img: "img/wedding/02_610_D_S_0710", title: "" },
        { img: "img/wedding/02_611_D_S_0711", title: "" },
        { img: "img/wedding/02_612_D_S_0712", title: "" },
        { img: "img/wedding/02_613_D_S_0713", title: "" },
        { img: "img/wedding/02_615_D_S_0715", title: "" },
        { img: "img/wedding/02_618_D_S_0718", title: "" },
        { img: "img/wedding/02_621_D_S_0721", title: "" },
        { img: "img/wedding/02_623_D_S_0723", title: "" },
        { img: "img/wedding/02_624_D_S_0724", title: "" },
        { img: "img/wedding/02_625_D_S_0725", title: "" },
        { img: "img/wedding/02_629_D_S_0729", title: "" },
        { img: "img/wedding/02_632_D_S_0732", title: "" },
        { img: "img/wedding/02_637_D_S_0737", title: "" },
        { img: "img/wedding/02_638_D_S_0738", title: "" },
        { img: "img/wedding/02_642_D_S_0742", title: "" },
        { img: "img/wedding/02_643_D_S_0743", title: "" },
        { img: "img/wedding/02_647_D_S_0747", title: "" },
        { img: "img/wedding/02_648_D_S_0748", title: "" },
        { img: "img/wedding/02_649_D_S_0749", title: "" },
        { img: "img/wedding/02_650_D_S_0750", title: "" },
        { img: "img/wedding/02_654_D_S_0754", title: "" },
        { img: "img/wedding/02_656_D_S_0756", title: "" },
        { img: "img/wedding/02_657_D_S_0757", title: "" },
        { img: "img/wedding/02_661_D_S_0761", title: "" },
        { img: "img/wedding/02_662_D_S_0762", title: "" },
        { img: "img/wedding/02_669_D_S_0769", title: "" },
        { img: "img/wedding/02_66_D_S_0166", title: "" },
        { img: "img/wedding/02_670_D_S_0770", title: "" },
        { img: "img/wedding/02_672_D_S_0772", title: "" },
        { img: "img/wedding/02_677_D_S_0777", title: "" },
        { img: "img/wedding/02_678_D_S_0778", title: "" },
        { img: "img/wedding/02_679_D_S_0779", title: "" },
        { img: "img/wedding/02_683_D_S_0783", title: "" },
        { img: "img/wedding/02_685_D_S_0785", title: "" },
        { img: "img/wedding/02_686_D_S_0786", title: "" },
        { img: "img/wedding/02_694_D_S_0794", title: "" },
        { img: "img/wedding/02_699_D_S_0799", title: "" },
        { img: "img/wedding/02_704_D_S_0804", title: "" },
        { img: "img/wedding/02_708_D_S_0808", title: "" },
        { img: "img/wedding/02_709_D_S_0809", title: "" },
        { img: "img/wedding/02_70_D_S_0170", title: "" },
        { img: "img/wedding/02_710_D_S_0810", title: "" },
        { img: "img/wedding/02_711_D_S_0811", title: "" },
        { img: "img/wedding/02_712_D_S_0812", title: "" },
        { img: "img/wedding/02_78_D_S_0178", title: "" },
        { img: "img/wedding/02_79_D_S_0179", title: "" },
        { img: "img/wedding/02_82_D_S_0182", title: "" },
        { img: "img/wedding/02_89_D_S_0189", title: "" },
        { img: "img/wedding/02_96_D_S_0196", title: "" },
        { img: "img/wedding/02_97_D_S_0197", title: "" },
        { img: "img/wedding/02_98_D_S_0198", title: "" },
    ]);

    var gallery = $('#gallery');
    var imageIndex = 0;
    var outstandingPreloadCount = 0;

    // Load the first batch immediately.
    for (var i = 0; i < c_PreloadChunkSize && imageIndex < images.length; i++, imageIndex++) {
        gallery.append('<a href="' + images[imageIndex].img + '_b.jpg" title="' + images[imageIndex].title + '"><img alt="' +
                        images[imageIndex].title + '" src="' + images[imageIndex].img + '_n.jpg" /></a>');
    }

    gallery.justifiedGallery({
        rowHeight : 160,
    }).on('jg.complete', function () {
        gallery.find('a').swipebox();
    });

    continue_preload();

    // Load the next c_PreloadChunkSize images.
    function preload_images() {
        for (var i = 0; i < c_PreloadChunkSize && imageIndex < images.length; i++, imageIndex++) {
            outstandingPreloadCount++;
            var image = images[imageIndex];
            (function(image) {
                $('<img />')
                    .attr('alt', image.title)
                    .attr('src', image.img + '_n.jpg')
                    .load(function() {
                        var link = $('<a />')
                            .attr('href', image.img + '_b.jpg')
                            .attr('title', image.title)
                            .append($(this));
                        gallery.append(link);
                        outstandingPreloadCount--;
                    })
                    .error(function() {
                        console.log('Error downloading image: ' + image.img);
                        outstandingPreloadCount--;
                    });
            })(image);
        }
    }

    // Recursively set a timer to call preload_images until all images have been loaded.
    function continue_preload() {
        if (imageIndex < images.length) {
            setTimeout(function() {
                if (outstandingPreloadCount == 0) {
                    preload_images();
                    gallery.justifiedGallery('norewind');
                } else {
                    console.log('Skipping this preload, currently loading objects.');
                }

                continue_preload();
            }, c_PreloadTimer);
        } else {
            // All the images have started their delay load. Start a timer to update the
            // gallery one last time. If the connection is really slow, we'll probably miss
            // a few images from the last batch.
            setTimeout(function() {
                console.log('Finished loading images.');
                gallery.justifiedGallery('norewind');
            }, c_PreloadTimer * 2)
        }
    }

    // From https://github.com/coolaj86/knuth-shuffle
    function fisher_yates_shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}());
