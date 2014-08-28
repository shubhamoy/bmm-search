var myApp = angular.module('boerickeSearch', []);
myApp.factory('LinkMedicineSympton', function(){
	var LinkMedicineSympton = {};

	LinkMedicineSympton = [
  {
    "link":"http://homeoint.org/books/boericmm/a/abies-c.htm",
    "name":"ABIES CANADENSIS-PINUS CANADENSIS",
    "symptom":[
    			{1:"Head"},
    			{2:"Stomach"},    			
    			{3:"Female"}, 
    			{4:"Fever"},
    		]
  },
  {
    "link":"http://homeoint.org/books/boericmm/a/abies-n.htm",
    "name":"ABIES NIGRA",
    "symptom":[
    			{1:"Head"},
    			{2:"Stomach"},    			
    			{3:"Chest"},    			    			
    			{4:"Back"},    			    			
    			{5:"Sleep"}, 
    			{6:"Fever"},
    		]
  },

]
    return LinkMedicineSympton;
})

function MedicineSymptomController($scope, LinkMedicineSympton){
	$scope.LinkMedicineSympton = LinkMedicineSympton;
}