//animation list: card, fade, box3D, glide

$(document).ready(function () {
    $('.slideWiz').slideWiz(
        {
            auto: true,
            speed: 5000,
            type : 'pixel',
            row: 9,
            file : [
                {
                    src: {
                        main: "images/Web-Service/slider1.jpg",
                        cover: "images/Web-Service/slider1.jpg"
                    },
                    title: 'Rn-Soft It Solution',
                    desc: 'We are creative and passonate about our online Technology\n' +
                    '                    \'Rn-Soft\'We are creative and passonate about our online Technology Rn-Soft.',
                    button: {
                        text: 'Get Start Now',
                        url: '#',
                        class: 'btn btn-medium btn-primary',
                        color: 'white'
                    }
                },
                {
                    src: {
                        main: "images/Web-Service/slider2.jpg",
                        cover: "images/Web-Service/slider2.jpg"
                    },
                    title: 'Web-Service',
                    desc: 'We are creative and passonate about our online Technology\n' +
                    '                    \'Rn-Soft\'We are creative and passonate about our online Technology Rn-Soft.',
                    button: {
                        text: 'Get Start Now',
                        url: '#',
                        class: 'btn btn-medium btn-primary',
                        color: 'white'
                    }
                },
                {
                    src: {
                        main: "images/Web-Service/slider3.jpg",
                        cover: "images/Web-Service/slider3.jpg"
                    },
                    title: 'Web Design',
                    desc: 'We are creative and passonate about our online Technology\n' +
                    '                    \'Rn-Soft\'We are creative and passonate about our online Technology Rn-Soft.',
                    button: {
                        text: 'Get Start Now',
                        url: '#',
                        class: 'btn btn-medium btn-primary',
                        color: 'white'
                    }
                },
                {
                    src: {
                        main: "images/Web-Service/slider4.jpg",
                        cover: "images/Web-Service/slider4.jpg"
                    },
                    title: 'Rn-Soft It Solution',
                    desc: 'We are creative and passonate about our online Technology\n' +
                    '                    \'Rn-Soft\'We are creative and passonate about our online Technology Rn-Soft.',
                    button: {
                        text: 'NBA.com',
                        url: false,
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                }
            ]

        }
    );
});
