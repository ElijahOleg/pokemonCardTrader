'use strict';

angular.module('sif')
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/', 
				templateUrl: '/views/home/index.html'
			})
			.state('authentication', {
				url: '/register',
				templateUrl: '/views/auth.html'
			})
			.state('allCards', {
				url: '/allcards',
				templateUrl: '/views/allCards.html'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: '/views/profile.html',
				abstract: true
			})
			.state('profile.myCards', {
				url: '/profile/myCards',
				templateUrl: '/views/myCards.html'
			})
			.state('profile.settings', {
				url: '/profile/settings',
				templateUrl: '/views/settings.html'
			})
			.state('addCard', {
				url: '/addCard',
				templateUrl: '/views/addCard.html'
			})
			// .state('tradePage',{
			//   url: '/',
			//   templateUrl: '/views/home/home.html'
			// })
			.state('oneCard', {
				url: '/oneCard',
				templateUrl: '/views/home/oneCard.html'
			})
			// .state('user', {
			// 	url: '',
			// 	templateUrl: '/views/users/user.html',
			// 	abstract: true
			// })
			// .state('user.register', {
			// 	url: '/register',
			// 	templateUrl: '/views/users/users.html',
			// 	controller: 'UsersCtrl'
			// })
			// .state('user.login', {
			// 	url: '/login',
			// 	templateUrl: '/views/users/users.html',
			// 	controller: 'UsersCtrl'
			// });
	});
