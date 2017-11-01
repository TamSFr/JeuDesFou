'use strict';

var app = angular.module("myApp", ['ngSanitize']);

app.controller('choix', 
	function($scope, $timeout) 
	{
		/*----------------------------------------------------------------------------
		--------------------------                          --------------------------
		-------------------------- SCOPE AFFICHAGE / BOUTON --------------------------
		--------------------------                          --------------------------
		------------------------------------------------------------------------------*/
		
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
			
			//timeout avant le lancement de la fonction afficher
			$scope.aff = function(n){
				$scope.question = "Chargement...";
				$timeout(function(){
					$scope.afficher(n);
				}, 1000)
			}
			
			
			
			/*Nombre de queston estante
			==> affiché en bas de page*/
			$scope.questRest = "Questions restante : "+tabQuest.length;
			
		
	}
);
