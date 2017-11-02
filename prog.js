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
				"DTC",
				"Invente une regle",
				"Pendant 2tours, Ni oui ni non général !",
				"Tu es désormais le sniper !"
			];
			/*-------------------
			---------Fin---------
			---------------------*/
			
			
			/*Message de base*/
			$scope.question = "Choisis un chiffre entre 1 et 9";
			
			var tabMoin=function(tab, n){
				var tab2 = [];
				var i = 0;
				while(i<n){
					tab2[i]=tab[i];
					i++;
				}
				while(i<tab.length-1){
						tab2[i]=tab[i+1];
				i++;
				}
				tabQuest = tab2;
			}
			
			
			
			
			/*Fonction afficher apres un temps :
				Modifie la question de maniere aleatoire
			  Variables : 
				n : entier => memorise le nombre choisis par l'utilisateur*/
			/*-------------------
			--------Debut--------
			---------------------*/
			$scope.afficher = function(n)
			{
				var alea = Math.floor(Math.random()*tabQuest.length);
				$scope.question = tabQuest[alea];
				if($scope.question=="BTC"){
					$scope.question = "Tu bois "+n+" coups !";
				}
				if($scope.question=="DTC"){
					$scope.question = "Tu donnes "+n+" coups !";
				}
				tabMoin(tabQuest, alea);
				$scope.questRest = "Questions restante : "+tabQuest.length;
				//$scope.questRest = tabQuest.length+tabQuest[0]+ tabQuest[1]+ tabQuest[2]+ tabQuest[3];
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
