var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "views/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "views/kart-list.html",
			controller: "KartListCtrl"
		})
		.otherwise({
			redirectTo: "/books"
		});
});

app.factory("kartService", function() {
	var kart = [];

	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
			kart.push(book);
		},
		buy: function(book) {
			alert("Thanks for buying: ", book.name);
		}
	};
});

app.factory("bookService", function(){
	var books = [
		{
			imgUrl: "alamo_front.jpg",
			name: "El Alamo. Una historia no apta para Hollywood.",
			price: 275,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House Mexico",
			releaseDate: "04-12-2014",
			details: "The Alamo is a battle irrelevant in the historcial context of the XIX century history. However, it defines the bases for the manifests destiny and lost battle represents all of what the US have become."
		},
		{
			imgUrl: "guerra_fin_mundo.jpg",
			name: "La Guerra del Fin del Mundo.",
			price: 500,
			rating: 5,
			binding: "Paperback",
			publisher: "Alfaguara",
			releaseDate: "01-09-2006",
			details: "La primera novela que Mario Vargas Llosa situó fuera del Perú es un prodigio de expresión de mentalidades profundas, de pasiones irracionales y desbocadas fuerzas sociales. Un relato exhaustivamente documentado, tanto a través de lecturas como de viajes sobre el terreno en el que tuvo lugar este acontecimiento histórico. Un libro fundamental en la historia literaria del siglo XX."
		},
		{
			imgUrl: "lord_of_flies.jpg",
			name: "Lord of the flies.",
			price: 230,
			rating: 5,
			binding: "Paperback",
			publisher: "Penguin Great Books",
			releaseDate: "01-10-1999",
			details: "William Golding's compelling story about a group of very ordinary small boys marooned on a coral island has become a modern classic. At first, it seems as though it's all going to be great fun; but the fun before long becomes furious & life on the island turns into a nightmare of panic & death. As ordinary standards of behavior collapse, the whole world the boys know collapses with them—the world of cricket & homework & adventure stories—& another world is revealed beneath, primitive & terrible. Lord of the Flies remains as provocative today as when it was 1st published in 1954, igniting passionate debate with its startling, brutal portrait of human nature. Though critically acclaimed, it was largely ignored upon its initial publication. Yet soon it became a cult favorite among both students and literary critics who compared it to J.D. Salinger's The Catcher in the Rye in its influence on modern thought & literature. Labeled a parable, an allegory, a myth, a morality tale, a parody, a political treatise, even a vision of the apocalypse, Lord of the Flies has established itself as a classic."
		}
	];
	return {
		getBooks: function() {
			return books;
		},
		addToKart: function(book) {

		}
	};
});

app.controller('KartListCtrl', function($scope, kartService){
	$scope.kart = kartService.getKart();

	$scope.buy = function(book) {
		kartService.buy(book);
	};
});

app.controller('HeaderCtrl', function($scope, $location){
	$scope.appDetails = {
		title: "BooKart",
		tagLine: "We have 1 million books for you"
	};

	$scope.nav = {};
	$scope.nav.isActive = function(path){
		if (path === $location.path()) {
			return true;
		}

		return false;
	};
});

app.controller('BookListCtrl', function($scope, bookService, kartService){
	$scope.books = bookService.getBooks();

	$scope.addToKart = function(book) {
		kartService.addToKart(book);
	};
});