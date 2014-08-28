var myApp = angular.module('boerickeSearch', []);
myApp.factory('LinkMedicineSympton', function(){
	var LinkMedicineSympton = {};

	LinkMedicineSympton = [
  {
    "link":"http://homeoint.org/books/boericmm/a/abies-c.htm",
    "name":"Abies Canadensis",
    "symptom":[
    			{1:"Head"},
    			{2:"Stomach"},    			
    			{3:"Female"}, 
    			{4:"Fever"},
    		]
  },
  {
    "link":"http://homeoint.org/books/boericmm/a/abies-n.htm",
    "name":"Abies Nigra",
    "symptom":[
    			{1:"Head"},
    			{2:"Stomach"},    			
    			{3:"Chest"},    			    			
    			{4:"Back"},    			    			
    			{5:"Sleep"}, 
    			{6:"Fever"},
    		]
  },
  {
    "link":"http://homeoint.org/books/boericmm/a/abr.htm",
    "name":"Abrus Precatorius",
    "symptom":[
    			{1:"Eyes"},
    		]
  },
  {
    "link":"http://homeoint.org/books/boericmm/a/absin.htm",
    "name":"Absinthium",
    "symptom":[
    			{1:"Head"},
    			{2:"Stomach"},    			
    			{3:"Chest"},    			    			
    			{4:"Mind"},    			    			
    			{5:"Mouth"}, 
    			{6:"Throat"},
    			{7:"Urine"},    			
    			{8:"Sexual"},    			
    		]
  },
  

]
    return LinkMedicineSympton;
})

function MedicineSymptomController($scope, LinkMedicineSympton){
    $scope.search=[];
	$scope.LinkMedicineSympton = LinkMedicineSympton;	
}