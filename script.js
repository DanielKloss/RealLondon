var app = angular.module("realLondonApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "stats.html",
        controller: "statsController"
    })
    .when("/season1", {
        templateUrl: "season.html",
        controller: "seasonOneController"
    })
    .when("/season2", {
        templateUrl: "season.html",
        controller: "seasonTwoController"
    })
    .when("/stats", {
        templateUrl: "stats.html",
        controller: "statsController"
    });
});

app.controller('seasonOneController', function ($scope) {
    $scope.overview = "Real London were sitting rock bottom of the league when the ownership changed midway through the season. Few believed that the motley crew of accountants, engineers, psychologists and gas meter salesmen could do anything to save them from their impending relegation. They had eight games to do so.";

    $scope.matches =
    [
        {
            title: "Real London 2 - 5 Real Ladrid",
            date: "6 March 2017",
            report: "Two wonder goals from Tom Mantle, an astute signing from UHY, were the only things Real London had to smile about at the end of their first game. For the first goal Mantle made a perfectly timed run to meet Tom Howourth’s ball from deep and looped a header, over the keeper and into the far corner. His second was a laser shot from just inside the opponent’s half, leaving the keeper grasping at thin air. The mood was optimistic in the wake of the defeat - it was felt that they had the makings of a good team. Little did they know that they wouldn’t beat their tally of 2 goals in a game for the rest of the season…",
            team: ["Haines", "Hau", "Howourth", "Kloss", "Mantle", "McDowell", "Thornton"],
            motm: "Mantle",
            goals: ["Mantle", "Mantle"]
        },
        {
            title: "Real London 0 - 3 FC Barlad",
            date: "13 March 2017",
            report: "In a game of many chances the only person who was able to finish was Dan Kloss. Unfortunately for the whites it was in the wrong net… Had FC Barlad’s finishing been more clinical and had it not been for James McDowell’s heroics in goal this could have been a rout.",
            team: ["Dan", "Gluckstein", "Hau", "Howourth", "Kloss", "McDowell", "Thornton"],
            motm: "McDowell",
            goals: []
        },
        {
            title: "Real London 2 - 0 East Village FC",
            date: "20 March 2017",
            report: "A win! The promising attacking play of the previous game was beginning to bear fruit with Thomas Hau and David Gluckstien dominating the midfield. Howourth prodded home twice from close range and the defence of Rob and Mantle was solid enough to keep the opposition out for the first time this season.",
            team: ["Dan", "Gluckstein", "Kloss", "Hau", "Howourth", "Mantle", "Thornton"],
            motm: "Howourth",
            goals: ["Howourth", "Howourth"]
        },
        {
            title: "Real London 0 - 3 JDX's Tekkerslovakia",
            date: "27 March 2017",
            report: "Real London knew they were in for a tough game when they came up against second in the league and two early wonder strikes from the organised opposition did nothing to boost their confidence. Still, the white fought on and forged two great openings for Kloss which he failed to convert. A scrappy third killed the game and dropped Real London back to the bottom of the league.",
            team: ["Bridger", "Dan", "Gluckstein", "Howourth", "Kloss", "Mantle", "McDowell", "Thornton"],
            motm: "Mantle",
            goals: []
        },
        {
            title: "Real London 1 - 5 Club de Futbol Roast",
            date: "3 April 2017",
            report: "The tough run of fixtures continued with a match against the best team in the league. The ‘defend-like-beavers-and-hit-them-on-the-counter’ game plan was executed to perfection in the first half. Howourth scored the breakaway goal that left Real London ahead at half time. But football is a game of two halves and the boys in white seemed to forget that fact as they abandoned the compactness that had got them this far and conceded 5 (very well worked) goals in the second half.",
            team: ["Bridger", "Hedley-Dent", "Howourth", "Kloss", "Mantle", "McDowell", "Thornton"],
            motm: "Mantle",
            goals: ["Howourth"]
        },
        {
            title: "Real London 1 - 4 No More Drama",
            date: "10 April 2017",
            report: "After the first half of the previous week there was a new found air of optimism around Stratford. The great escape still might be possible! Real London came steaming out of the gates with Hau and Howourth both bombarding the goal with shots. Only good goalkeeping denied them. A lapse in communication between Alex Thornton and McDowell allowed the opposition in to score and from then on heads dropped. The belief had been shattered and although Rob pulled one back, Real London never looked like they were going to get back into the game.",
            team: ["Dan", "Hau", "Hedley-Dent", "Howourth", "Kloss", "McDowell", "Thornton"],
            motm: "Dan",
            goals: ["Dan"]
        },
        {
            title: "Real London 1 - 2 LAD Galaxy",
            date: "24 April 2017",
            report: "An injury crisis and international call ups meant that Real London went into this must win game with 6 players. A win would pull them off the bottom and give them a chance of survival, a loss would seal their relegation fate. It was a performance to instil pride into the fans of the whites. Mantle put in a colossal display at the back while the midfield running of Josh HD and Thronton made it feel like Real London had 8 players on the pitch, not 6! When Mark Bridger’s high press won the ball he fed Howourth who finished with a dink over the keeper. But it would all end in heartbreak for The Londoners. The opposition chipped away and as the 12 legs of Real London tired they conceded two goals in the dying minutes of the game. Relegation was upon them but they went down fighting.",
            team: ["Bridger", "Hedley-Dent", "Howourth", "Kloss", "Mantle", "Thornton"],
            motm: "Mantle",
            goals: ["Howourth"]
        },
        {
            title: "Real London 1 - 5 Real Ladrid",
            date: "8 May 2017",
            report: " Still suffering from unavailable players, Real London made last minute emergency loan signings to get them through the last game of the season. With only pride to play for, the whites were keen to give their loyal following of 0 fans the send-off they deserved. 0-1 at half time flattered the opposition and Real London were still very much in the game. Thornton and Howourth had seen lots of the ball in advanced areas and it was only a matter of time before they pulled one back. 3 minutes later it was 0-4. Jonny Dauncey restored some pride with a lobbed finish and Joe Walker made some important saves in goal. In the ned it wasn’t enough though and Real London will play their football in the conference next season.",
            team: ["Dauncey", "Howourth", "Kloss", "Mantle", "McDowell", "Thornton", "Walker"],
            motm: "Dauncey",
            goals: ["Dauncey"]
        }
    ];
});

app.controller('seasonTwoController', function ($scope) {
    $scope.overview = "Conference football awaited Real London in their second season. There was an optomistic feeling around Stratford that they could mount a serious title challenge and earn promotion back into the first division...";

    $scope.matches =
    [
        {
            title: "Real London 5 - 1 Wapping Warriors",
            date: "15 May 2017",
            report: "Real London started the season in style, recording their biggest ever win. The 5 goals flattered the opposition as in reality it could have been far more, still 5 different goal scorers left Real fans happy and gave all time top apperance maker Alex Thornton the send off he deserved. The first goal was a great piece of individual skill from Hedley-Dent gliding through the defense he placed his shot low and beyond the keeper. The second was arguably the pick of the bunch - Howourth and Hedley-Dent combined really well to split the defnse wide open and leave Bridger to tap in from close range. Roles were reversed for the third as Bridger turned provider for Howourth who flicked the ball insidethe far post. Tom Mantel secured the fourth with a long range effort and the rout was completed in the last minute of the game when a good McDowell save allowed Real to brake away down field ending with Kloss smashing in while one on one with the keeper.",
            team: ["Bridger", "Hedley-Dent", "Howourth", "Kloss", "Mantle", "McDowell", "Thornton"],
            motm: "Hedley-Dent",
            goals: ["Hedley-Dent", "Bridger", "Howourth", "Mantle", "Kloss"]
        }
    ];
});

app.controller('statsController', function ($scope) {

    $scope.players =
    [
        {
            name: "Dan Kloss",
            appearances: 9,
            goals: 1,
            motm: 0
        },
        {
            name: "Alex Thornton",
            appearances: 10,
            goals: 0,
            motm: 0
        },
        {
            name: "Mark Bridger",
            appearances: 5,
            goals: 1,
            motm: 0
        },
        {
            name: "Tom Howourth",
            appearances: 10,
            goals: 5,
            motm: 1
        },
        {
            name: "Thomas Hau",
            appearances: 4,
            goals: 0,
            motm: 0
        },
        {
            name: "David Gluckstein",
            appearances: 3,
            goals: 0,
            motm: 0
        },
        {
            name: "James McDowell",
            appearances: 8,
            goals: 0,
            motm: 1
        },
        {
            name: "Tom Mantle",
            appearances: 8,
            goals: 4,
            motm: 4
        },
        {
            name: "Rob Dan",
            appearances: 4,
            goals: 1,
            motm: 1
        },
        {
            name: "John Haines",
            appearances: 2,
            goals: 0,
            motm: 0
        },
        {
            name: "Josh Hedley-Dent",
            appearances: 4,
            goals: 1,
            motm: 1
        },
        {
            name: "Jonny Dauncey",
            appearances: 1,
            goals: 1,
            motm: 1
        },
        {
            name: "Joe Walker",
            appearances: 1,
            goals: 0,
            motm: 0
        }
    ];

    $scope.seasonOneAppearances = "Tom Howourth (9) and Alex Thornton (9)";
    $scope.seasonOneGoalscorer = "Tom Howourth (4)";
    $scope.seasonOneRatio = "Jonny Dauncey (9)";
    $scope.seasonOnePlayer = "Tom Mantle (4)";

    $scope.seasonTwoAppearances = "";
    $scope.seasonTwoGoalscorer = "";
    $scope.seasonTwoRatio = "";
    $scope.seasonTwoPlayer = "";
});