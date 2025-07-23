var app = angular.module("carRentalApp", []);

app.controller("MainController", function ($scope) {
    $scope.cars = [
        { name: "Tesla Model S", price: 100, image: "https://s1.cdn.autoevolution.com/images/gallery/TESLA-MOTORS-Model-S-4693_74.jpg" },
        { name: "BMW X5", price: 120, image: "https://th.bing.com/th/id/OIP.Y-JSVW-0hSt--lNpqP325QHaEK?rs=1&pid=ImgDetMain" },
        { name: "Audi A6", price: 90, image: "https://cdn.bmwblog.com/wp-content/uploads/2020/02/Audi-Q8-2.jpg" },
        { name: "Mercedes C-Class", price: 110, image: "https://th.bing.com/th/id/OIP.x0Rg9xavRsO8l2YJYZ2-gQHaEK?rs=1&pid=ImgDetMain" },
        { name: "Ferari", price: 150, image: "https://moneyinc.com/wp-content/uploads/2017/09/2013-F70-LaFerrari.jpg" },
        { name: "Lamborghini", price: 140, image:"https://th.bing.com/th/id/OIP.Qy8LYiPosFewL4u4vGFSfQHaE7?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        { name: "Bugatti Chiron", price: 160, image:"https://th.bing.com/th/id/OIP.5D94s_cY32BaGYJAIE7S0QHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        { name: "McLaren", price: 130, image:"https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/mclaren-f1-2016-bsy-autocar-759_0.jpg"},
        { name: "Hyndai", price: 100, image:"https://th.bing.com/th/id/OIP.9tsAvtfThMgThGvLxpffDwHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        { name: "Toyato", price: 90, image:"https://th.bing.com/th/id/OIP.O0hdOW6VvWFEbbq4tM2pOAHaE8?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        { name: "Mahindra KUV100", price: 80, image:"https://th.bing.com/th/id/OIP.E_ca0qbFX1G4_coxip4ahwHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        { name: "Kia", price: 100, image:"https://th.bing.com/th/id/OIP.E_ca0qbFX1G4_coxip4ahwHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    ];

    $scope.booking = {};
    $scope.confirmationMessage = "";

    $scope.submitBooking = function () {
        if ($scope.booking.name && $scope.booking.email && $scope.booking.car) {
            $scope.confirmationMessage = "Thank you, " + $scope.booking.name + "! Your " + $scope.booking.car + " is booked.";
            $scope.booking = {}; // Reset form
        } else {
            $scope.confirmationMessage = "Please fill out all fields.";
        }
    };

    $scope.scrollToSection = function (sectionId) {
        scrollToSection(sectionId);
    };
});
