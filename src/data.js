var myApp = angular.module('boerickeSearch', []);
myApp.factory('LinkMedicineSympton', function(){
	var LinkMedicineSympton = {};

	LinkMedicineSympton.cast = [
  {
    "link":"http://homeoint.org/books/boericmm/a/abies-c.htm",
    "name":"ABIES CANADENSIS-PINUS CANADENSIS",
    "symptom":"Head, Stomach, Female, Fever"
  },
  {
    "link":"http://homeoint.org/books/boericmm/a/abies-n.htm",
    "name":"ABIES NIGRA",
    "symptom":"Head, Stomach, Chest, Back, Sleep, Fever"
  },

]
    return LinkMedicineSympton;
})

function MedicineSymptomController($scope, LinkMedicineSympton){
	$scope.LinkMedicineSympton = LinkMedicineSympton;
}