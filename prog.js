'use strict';

var app = angular.module("myApp", ['ngSanitize']);

app.controller('choix', 
	function($scope, $timeout) 
	{
		//Tableau Contenant toute les question
		/*-------------------
		--------Debut--------
		---------------------*/
		var tabQuest = [
			"Fais un pierre feuille ciseau avec ton voisin de droite !<br>Le perdant bois 3coups !",
			"Tu es le maitre du pouce, tu ne pourras le faire que 3fois",
			"BTC",
			"DTC"
		];
		/*-------------------
		---------Fin---------
		---------------------*/
		
		
		/*Message de base*/
		$scope.question = "Choisis un chiffre entre 1 et 9";
		
		
		
		/*Fonction afficher apres un temps :
			Modifie la question de maniere aleatoire
		  Variables : 
		  	n : entier => memorise le nombre choisis par l'utilisateur*/
		/*-------------------
		--------Debut--------
		---------------------*/
		$scope.afficher = function(n)
		{
			$scope.question = tabQuest[Math.floor(Math.random()*tabQuest.length)];
			if($scope.question=="BTC"){
				$scope.question = "Tu bois "+n+" coups !";
			}
			if($scope.question=="DTC"){
				$scope.question = "Tu donnes "+n+" coups !";
			}
		}
		/*-------------------
		---------Fin---------
		---------------------*/
		
		$scope.aff = function(n){
			$timeout($scope.afficher(n), 10000);
		}
		
	}
);
