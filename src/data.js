  var myApp = angular.module('boerickeSearch', []);
  myApp.factory('LinkMedicineSympton', function(){
    var LinkMedicineSympton = {};

	  LinkMedicineSympton = [
	  {
	    "link":"http://homeoint.org/books/boericmm/a/abies-c.htm",
	    "name":"Abies Canadensis",
	    "symptom":[
				{1:"Female"},
				{2:"Fever"},    			
				{3:"Head"}, 
				{4:"Stomach"},
			]
		},
		{
			"link":"http://homeoint.org/books/boericmm/a/abies-n.htm",
			"name":"Abies Nigra",
			"symptom":[
				{1:"Back"},
				{2:"Chest"},    			
				{3:"Fever"},    			    			
				{4:"Head"},    			    			
				{5:"Sleep"}, 
				{6:"Stomach"},
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
				{1:"Chest"},
				{2:"Head"},    			
				{3:"Mind"},    			    			
				{4:"Mouth"},    			    			
				{5:"Sexual"}, 
				{6:"Stomach"},
				{7:"Throat"},    			
				{8:"Urine"},
			]
		}
	  ];
    return LinkMedicineSympton;
  });

  function MedicineSymptomController($scope, LinkMedicineSympton) {
    $scope.search=[];
    $scope.LinkMedicineSympton = LinkMedicineSympton;	
  }
