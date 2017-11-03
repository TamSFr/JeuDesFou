'use strict';
var app = angular.module("myApp", ['ngSanitize']);
app.controller('choix', 
	function($scope, $timeout, $interval) 
	{
			
		/*---------------------------------------------------------------------
		--------------------------                   --------------------------
		-------------------------- TABLEAU QUESTIONS --------------------------
		--------------------------                   --------------------------
		-----------------------------------------------------------------------*/
		
			//Tableaux Contenant toute les question
			/*BTC => Bois tes coups
			  DTC => Donne tes coups
			  CDN => Course de nyant cat
			/*-------------------
			--------Debut--------
			---------------------*/
			var tabQuest1 = [
				"Fais un pierre feuille ciseau avec ton voisin de droite !<br>Le perdant bois 3coups !",
				"Tu es le maitre du pouce, tu ne pourras le faire que 3fois",
				"BTC", 
				"DTC",
				"BTC",
				"DTC",
				"BTC",
				"DTC",
				"Invente une regle",
				"Pendant 2tours, Ni oui ni non général !",
				"Tu es désormais le sniper !",
				"cascade !",
				"cascade !",
				"Entre couille !<br>Les hommes boivent 2coups chacun !",
				"Solidarité féminine !<br>Les dames boivent 2coups chacune !",
				"Dans ma valise, il y a...",
				"On s'enchaine !<br>Tu bois une gorgé, le joueur a ta droite en boit deux<br>selui a sa droite en boit trois, etc etc",
				"Qui pourais...",
				//"CDN",
				"Je n'ai jamais ...",
				"Maitre des question !<br>Pendant 2 tours, si quelqu'un répond à tes questions, il boira une gorgée",
				"Toi et ton voisin de droite êtes lié,<br>si l'un boit, l'autre boit aussi!",
				"Enleve autant de vêtement que tu veux<br>Tu bois un nombre de gorgé égale au nombre de vêtement qu'il te reste",
				"Bataille de pouce !<br>Fais un bras de fer chinois avec ton voisin de gauche<br>Le perdant boit 3gorgées",
				"Gage !<br>Le joueur à ta gauche te donne un gage<br>6 Gorgées en cas de refus!"
			];
			
			var tabQuest2 = [
				"Fais un pierre feuille ciseau avec ton voisin de droite !<br>Le perdant bois 3coups !",
				"Tu es le maitre de la danse, tu ne pourras le faire que 3fois",
				"BTC", 
				"DTC",
				"BTC",
				"DTC",
				"BTC",
				"DTC",
				"Invente une regle",
				"Pendant 2tours, Ni oui ni non général !",
				"Tu es désormais le sniper !",
				"cascade !",
				"cascade !",
				"Jeu des thèmes ! 3Gorgées en jeu",
				"A partir de maintenant, interdiction d'utiliser le verbe boir !",
				"Dans ma valise, il y a...",
				"On s'enchaine !<br>Tu bois une gorgé, le joueur a ta droite en boit deux<br>selui a sa droite en boit trois, etc etc",
				"Qui pourais...",
				//"CDN",
				"Je n'ai jamais ...",
				"Toi et ton voisin de droite faitent un défi de regard<br>Le prmier a cligné des yeux, ou regardé ailleurs bois 3gorgées",
				"Toi et ton voisin de gauche êtes lié,<br>si l'un boit, l'autre boit aussi!",
				"Enleve autant de vêtement que tu veux<br>Tu bois un nombre de gorgé égale au nombre de vêtement qu'il te reste",
				"Fais un pile ou face avec la personne de ton choix<br>4 gorgées en jeu !",
				"Pose une question génante a qui tu veux,<br>Si il refuse de répondre, il boit 4gorgées"
			];
			var tabQuest3 = [
				"Fais un pierre feuille ciseau avec ton voisin de droite !<br>Le perdant bois 3coups !",
				"Tu es le maitre du pouce, tu ne pourras le faire que 3fois",
				"BTC", 
				"DTC",
				"BTC",
				"DTC",
				"BTC",
				"DTC",
				"Invente une regle",
				"Jusqu'à la fin du jeu,<br>Tu peux donner 3coups toutes les 5minutes !<br>Si tu oublis, tant pis pour toi !",
				"M.Freeze !<br>Quand tu dis 'freeze', tout le monde doit s'immobiliser, le dernier à bouger boit.",
				"cascade !",
				"cascade !",
				"Raconte a un de tes voisins un histoire<br>il doit deviner si elle est vrais ou fausse<br>3Gorgées si il se trompe",
				"Solidarité féminine !<br>Les dames boivent 2coups chacune !",
				"Dans ma valise, il y a...",
				"On s'enchaine !<br>Tu bois une gorgé, le joueur a ta droite en boit deux<br>selui a sa droite en boit trois, etc etc",
				"Qui pourais...",
				//"CDN",
				"Je n'ai jamais ...",
				"Maitre des question !<br>Pendant 2 tours, si quelqu'un répond à tes questions, il boira une gorgée",
				"Désigne un personne qui devra boire 5gorgées<br>Sans la moindre raison !",
				"Le dernier joueur debout boit 4gorgées",
				"Bataille de pouce !<br>Fais un bras de fer chinois avec ton voisin de gauche<br>Le perdant boit 3gorgées",
				"Gage !<br>Le joueur à ta gauche te donne un gage<br>6 Gorgées en cas de refus!"
			];
			/*-------------------
			---------Fin---------
			---------------------*/
			
			
			//Choix aleatoire du tableau utilisé
			/*-------------------
			--------Debut--------
			---------------------*/
			var tabQuest = tabQuest1;
			var choixTab = function(){
				var nbChoix = 3;
				var n = Math.floor(Math.random()*nbChoix)+1;
				if(n == 1){
					tabQuest = tabQuest1;
				}
				if(n == 2){
					tabQuest = tabQuest2;
				}
				if(n == 3){
					tabQuest = tabQuest3;
				}
			}
			choixTab();
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
			
			
		/*-----------------------------------------------------------------------
		--------------------------                     --------------------------
		-------------------------- Course de nyant cat --------------------------
		--------------------------                     --------------------------
		-------------------------------------------------------------------------*/
		/*Fonction censé ajouter un point à chat 1, 2, 3 ou 4 toute les seconde
		  -- Pour une raison inconnue, il affiche le vainqueur aussitot..*/
		$scope.course = function(){
					
			$scope.question = "Course de Nyant Cat !";
				var ch1 = ""; //initialisation => fonctionnelle
				var ch2 = "";
				var ch3 = "";
				var ch4 = "";
				var c1 = 0;
				var c2 = 0;
				var c3 = 0;
				var c4 = 0;
				var chatFin = 0;
				var chatAlea = -1
				var nbPointChat = 30 //<===== C est ici qu'on defini la distance !
					var timerCat = $interval(function(){
						if(c1 < nbPointChat && c2 < nbPointChat && c3 <  nbPointChat && c4 < nbPointChat)
						{
								chatAlea = Math.floor(Math.random()*4);
								if(chatAlea==0){
									ch1 = ch1+"&nbsp&nbsp&nbsp&nbsp";
									c1 = c1+1;
								}
								else
								{
									if(chatAlea==1)
									{
										ch2 = ch2+"&nbsp&nbsp&nbsp&nbsp";
										c2 = c2+1;
									}
									else
									{
										if(chatAlea==2)
										{
											ch3 = ch3+"&nbsp&nbsp&nbsp&nbsp";
											c3 = c3+1;
										}
										else
										{
											ch4 = ch4+"&nbsp&nbsp&nbsp&nbsp";
											c4 = c4+1;
										}
									}
							
								}
								$scope.question = "<div class='nyantCat'>"+ch1+"<img src='img/catb.png'><br>"+ch2+"<img src='img/catr.png'><br>"+ch3+"<img src='img/catv.png'><br>"+ch4+"<img src='img/catj.png'><br>"+"</font></div>";
						}
						else
						{	
							if(chatFin == 0){
								chatFin = 1;
							}
								$scope.question = "<div class='nyantCat'>"+ch1+"<img src='img/catb.png'><br>"+ch2+"<img src='img/catr.png'><br>"+ch3+"<img src='img/catv.png'><br>"+ch4+"<img src='img/catj.png'><br>"+"</font></div>";
							if (chatFin == 1){
								if(chatAlea==0)
								{
									window.alert("le chat bleu a gagné !");
								}
								else{
									if(chatAlea==1){
										window.alert("le chat rouge a gagné !");
									}
									else{
										if(chatAlea==2){
											window.alert("le chat vert a gagné !");
										}
										else{
											window.alert("le chat jaune a gagné !");
										}
									}
								}
								chatFin = 2;
							}
						}
					}, 100, nbPointChat*4);
				
				window.alert("Course de Nyant Cat !\n\nFais tes parie entre le chat bleu, le rouge, le vert ou le jaune !");
				$scope.question = $scope.question+"<br>Ok";
				

		}
		/*------------------------------
		---------Fin nyant cat ---------
		--------------------------------*/

		/*----------------------------------------------------------------------------
		--------------------------                          --------------------------
		-------------------------- AFFICHAGE BOUTON/REPONSE --------------------------
		--------------------------                          --------------------------
		------------------------------------------------------------------------------*/	

		
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
					$scope.question = "OUCH !<br>Tu bois "+n+" coups !";
				}
				if($scope.question=="DTC"){
					$scope.question = "BOOM ! <br>Tu donnes "+n+" coups !";
				}
				if($scope.question=="CDN"){
					$scope.course();
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
				}, 500)
			}
			
			
			
			/*Nombre de queston estante
			==> affiché en bas de page*/
			$scope.questRest = "Questions restante : "+tabQuest.length;
			
			
			/*-----------------------------
			---------Fin affichage---------
			-------------------------------*/
		
			
			
		
	}
);
