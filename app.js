var boerickeSearch = angular.module('boerickeSearch', []);

boerickeSearch.controller('MedicineSymptomController',
  ['$scope', function($scope){
    $scope.search = [];
    $scope.LinkMedicineSympton = [
  		{
  		'name':'ABIES CANADENSIS-PINUS CANADENSIS',
  		'link':'http://homeoint.org/books/boericmm/a/abies-c.htm',
  		'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Female'}, {4: 'Fever'}]
  		},
  		{
  		'name':'ABIES NIGRA',
  		'link':'http://homeoint.org/books/boericmm/a/abies-n.htm',
  		'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Chest'}, {4: 'Back'}, {5: 'Sleep'}, {6: 'Fever'}]
  		},
  		{
  		'name':'ABRUS PRECATORIUS - JEQUIRITY (JEQUIRITY - ARBRUS PRECATORIUS)',
  		'link':'http://homeoint.org/books/boericmm/a/abr.htm',
  		'symptom':[{1: 'Eyes'}]
  		},
  		{
  		'name':'ABROTANUM',
  		'link':'http://homeoint.org/books/boericmm/a/abrot.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Face'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Respiratory'}, {6: 'Back'}, {7: 'Extremities'}, {8: 'Skin'}]
  		},
  		{
  		'name':'ABSINTHIUM',
  		'link':'http://homeoint.org/books/boericmm/a/absin.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Urine'}, {7: 'Sexual'}, {8: 'Chest'}, {9: 'Extremities'}]
  		},
  		{
  		'name':'ACALYPHA INDICA',
  		'link':'http://homeoint.org/books/boericmm/a/acal.htm',
  		'symptom':[{1: 'Chest'}, {2: 'Abdomen'}, {3: 'Skin'}]
  		},
  		{
  		'name':'ACETICUM ACIDUM (ACETIC ACID)',
  		'link':'http://homeoint.org/books/boericmm/a/acet-ac.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urine'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Back'}, {10: 'Extremities'}, {11: 'Skin'}, {12: 'Fever'}]
  		},
  		{
  		'name':'ACETANILIDUM',
  		'link':'http://homeoint.org/books/boericmm/a/acetan.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Heart'}]
  		},
  		{
  		'name':'ACONITUM NAPELLUS',
  		'link':'http://homeoint.org/books/boericmm/a/acon.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Rectum'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Heart'}, {17: 'Back'}, {18: 'Extremities'}, {19: 'Sleep'}, {20: 'Skin'}, {21: 'Fever'}]
  		},
  		{
  		'name':'ACTAEA SPICATA (ACTEA SPICATA)',
  		'link':'http://homeoint.org/books/boericmm/a/act-sp.htm',
  		'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Respiratory'}, {6: 'Extremities'}]
  		},
  		{
  		'name':'ADONIS VERNALIS',
  		'link':'http://homeoint.org/books/boericmm/a/adon.htm',
  		'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Heart'}, {4: 'Stomach'}, {5: 'Urine'}, {6: 'Respiratory'}, {7: 'Sleep'}, {8: 'Extremities'}]
  		},
  		{
  		'name':'ADRENALINUM (ADRENALIN)',
  		'link':'http://homeoint.org/books/boericmm/a/adren.htm',
  		'symptom':[]
  		},
  		{
  		'name':'AESCULUS HIPPOCASTANUM',
  		'link':'http://homeoint.org/books/boericmm/a/aesc.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Rectum'}, {9: 'Urinary'}, {10: 'Male'}, {11: 'Female'}, {12: 'Chest'}, {13: 'Extremities'}, {14: 'Back'}, {15: 'Fever'}]
  		},
  		{
  		'name':'AETHUSA CYNAPIUM',
  		'link':'http://homeoint.org/books/boericmm/a/aeth.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urinary'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Heart'}, {15: 'Back and Extremities'}, {16: 'Skin'}, {17: 'Fever'}, {18: 'Sleep'}]
  		},
  		{
  		'name':'AETHIOPS MINERALIS (AETHIOPS MERCURIALIS-MINERALIS)',
  		'link':'http://homeoint.org/books/boericmm/a/aethi-m.htm',
  		'symptom':[{1: 'Skin'}]
  		},
  		{
  		'name':'AGARICUS MUSCARIUS (AGARICUS MUSCARIUS-AMANITA)',
  		'link':'http://homeoint.org/books/boericmm/a/agar.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Urinary'}, {12: 'Female'}, {13: 'Respiratory Organs'}, {14: 'Heart'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Skin'}, {18: 'Sleep'}, {19: 'Fever'}]
  		},
  		{
  		'name':'AGAVE AMERICANA',
  		'link':'http://homeoint.org/books/boericmm/a/agav-a.htm',
  		'symptom':[]
  		},
  		{
  		'name':'AGNUS CASTUS',
  		'link':'http://homeoint.org/books/boericmm/a/agn.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Abdomen'}, {5: 'Male'}, {6: 'Female'}]
  		},
  		{
  		'name':'AGRAPHIS NUTANS',
  		'link':'http://homeoint.org/books/boericmm/a/agra.htm',
  		'symptom':[]
  		},
  		{
  		'name':'AILANTHUS GLANDULOSA',
  		'link':'http://homeoint.org/books/boericmm/a/ail.htm',
  		'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Respiratory'}, {4: 'Sleep'}, {5: 'Skin'}]
  		},
  		{
  		'name':'ALETRIS FARINOSA',
  		'link':'http://homeoint.org/books/boericmm/a/alet.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Rectum'}, {5: 'Female'}]
  		},
  		{
  		'name':'ALFALFA',
  		'link':'http://homeoint.org/books/boericmm/a/alf.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urine'}, {7: 'Sleep'}]
  		},
  		{
  		'name':'ALLIUM CEPA',
  		'link':'http://homeoint.org/books/boericmm/a/all-c.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Rectum'}, {8: 'Urinary'}, {9: 'Respiratory'}, {10: 'Extremities'}, {11: 'Sleep'}]
  		},
  		{
  		'name':'ALLIUM SATIVUM',
  		'link':'http://homeoint.org/books/boericmm/a/all-s.htm',
  		'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Respiratory'}, {5: 'Female'}]
  		},
  		{
  		'name':'ALNUS RUBRA (ALNUS)',
  		'link':'http://homeoint.org/books/boericmm/a/aln.htm',
  		'symptom':[{1: 'Female'}, {2: 'Skin'}]
  		},
  		{
  		'name':'ALOE SOCOTRINA (ALOE)',
  		'link':'http://homeoint.org/books/boericmm/a/aloe.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Face'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Rectum'}, {11: 'Urinary'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Back'}, {15: 'Extremities'}]
  		},
  		{
  		'name':'ALSTONIA SCHOLARIS',
  		'link':'http://homeoint.org/books/boericmm/a/alst-s.htm',
  		'symptom':[{1: 'Abdomen'}]
  		},
  		{
  		'name':'ALUMINA',
  		'link':'http://homeoint.org/books/boericmm/a/alum.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Sleep'}, {19: 'Skin'}]
  		},
  		{
  		'name':'ALUMINA SILICATA',
  		'link':'http://homeoint.org/books/boericmm/a/alum-sil.htm',
  		'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Extremities'}, {4: 'Skin'}]
  		},
  		{
  		'name':'ALUMEN',
  		'link':'http://homeoint.org/books/boericmm/a/alumn.htm',
  		'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Heart'}, {4: 'Rectum'}, {5: 'Female'}, {6: 'Respiratory'}, {7: 'Skin'}, {8: 'Extremities'}]
  		},
  		{
  		'name':'AMMONIUM BENZOICUM',
  		'link':'http://homeoint.org/books/boericmm/a/am-be.htm',
  		'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Urine'}, {4: 'Back'}]
  		},
  		{
  		'name':'AMMONIUM BROMATUM',
  		'link':'http://homeoint.org/books/boericmm/a/am-br.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Throat'}, {4: 'Respiratory'}]
  		},
  		{
  		'name':'AMMONIUM CARBONICUM (AMMONIUM CARB)',
  		'link':'http://homeoint.org/books/boericmm/a/am-c.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Extremities'}, {17: 'Sleep'}, {18: 'Skin'}]
  		},
  		{
  		'name':'AMMONIUM CAUSTICUM',
  		'link':'http://homeoint.org/books/boericmm/a/am-caust.htm',
  		'symptom':[{1: 'Respiratory'}, {2: 'Extremities'}]
  		},
  		{
  		'name':'AMMONIUM IODATUM (AMMONIUM JODATUM)',
  		'link':'http://homeoint.org/books/boericmm/a/am-i.htm',
  		'symptom':[{1: 'Head'}]
  		},
  		{
  		'name':'AMMONIUM MURIATICUM',
  		'link':'http://homeoint.org/books/boericmm/a/am-m.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Rectum'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Back'}, {13: 'Extremities'}, {14: 'Skin'}, {15: 'Fever'}]
  		},
  		{
  		'name':'AMMONIUM PHOSPHORICUM',
  		'link':'http://homeoint.org/books/boericmm/a/am-p.htm',
  		'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Urine'}]
  		},
  		{
  		'name':'AMMONIUM PICRICUM (AMMONIUM PICRATUM)',
  		'link':'http://homeoint.org/books/boericmm/a/am-pic.htm',
  		'symptom':[{1: 'Head'}]
  		},
  		{
  		'name':'AMMONIUM VALERIANICUM',
  		'link':'http://homeoint.org/books/boericmm/a/am-val.htm',
  		'symptom':[{1: 'Heart'}]
  		},
  		{
  		'name':'AMBRA GRISEA',
  		'link':'http://homeoint.org/books/boericmm/a/ambr.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Urinary'}, {5: 'Female'}, {6: 'Male'}, {7: 'Respiratory'}, {8: 'Heart'}, {9: 'Sleep'}, {10: 'Skin'}, {11: 'Extremities'}]
  		},
  		{
  		'name':'AMBROSIA ARTEMISIAEFOLIA (AMBROSIA)',
  		'link':'http://homeoint.org/books/boericmm/a/ambro.htm',
  		'symptom':[{1: 'Nose'}, {2: 'Eyes'}]
  		},
  		{
  		'name':'AMYGDALUS PERSICA',
  		'link':'http://homeoint.org/books/boericmm/a/amgd-p.htm',
  		'symptom':[]
  		},
  		{
  		'name':'AMYLENUM NITROSUM (AMYL NITROSUM)',
  		'link':'http://homeoint.org/books/boericmm/a/aml-ns.htm',
  		'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Chest'}, {4: 'Female'}, {5: 'Fever'}, {6: 'Extremities'}]
  		},
  		{
  		'name':'AMMONIACUM GUMMI (AMMONIACUM-DOREMA)',
  		'link':'http://homeoint.org/books/boericmm/a/ammc.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Throat'}, {4: 'Respiratory'}]
  		},
  		{
  		'name':'AMPELOPSIS QUINQUEFOLIA (AMPELOPSIS)',
  		'link':'http://homeoint.org/books/boericmm/a/ampe-qu.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ANACARDIUM ORIENTALE (ANACARDIUM)',
  		'link':'http://homeoint.org/books/boericmm/a/anac.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Rectum'}, {11: 'Male'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Heart'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Sleep'}, {18: 'Skin'}]
  		},
  		{
  		'name':'ANAGALLIS ARVENSIS (ANAGALLIS)',
  		'link':'http://homeoint.org/books/boericmm/a/anag.htm',
  		'symptom':[{1: 'Head'}, {2: 'Extremities'}, {3: 'Urine'}, {4: 'Skin'}]
  		},
  		{
  		'name':'ANANTHERUM MURICATUM (ANATHERUM)',
  		'link':'http://homeoint.org/books/boericmm/a/anan.htm',
  		'symptom':[{1: 'Head'}, {2: 'Urine'}, {3: 'Sexual'}, {4: 'Skin'}]
  		},
  		{
  		'name':'ANEMOPSIS CALIFORNICA',
  		'link':'http://homeoint.org/books/boericmm/a/anemps.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ANGUSTURA VERA',
  		'link':'http://homeoint.org/books/boericmm/a/ang.htm',
  		'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Back'}, {5: 'Extremities'}, {6: 'Skin'}]
  		},
  		{
  		'name':'ANHALONIUM LEWINII (ANHALONIUM)',
  		'link':'http://homeoint.org/books/boericmm/a/anh.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}]
  		},
  		{
  		'name':'ANILINUM',
  		'link':'http://homeoint.org/books/boericmm/a/anil.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ANISUM STELLATUM (ILLICIUM)',
  		'link':'http://homeoint.org/books/boericmm/a/anis.htm',
  		'symptom':[{1: 'Nose'}, {2: 'Respiratory'}]
  		},
  		{
  		'name':'ANTIMONIUM ARSENICOSUM',
  		'link':'http://homeoint.org/books/boericmm/a/ant-ar.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ANTIMONIUM CRUDUM',
  		'link':'http://homeoint.org/books/boericmm/a/ant-c.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Skin'}, {18: 'Sleep'}, {19: 'Fever'}]
  		},
  		{
  		'name':'ANTIMONIUM SULPHURATUM AURATUM',
  		'link':'http://homeoint.org/books/boericmm/a/ant-saur.htm',
  		'symptom':[{1: 'Nose and throat'}, {2: 'Respiratory'}, {3: 'Skin'}]
  		},
  		{
  		'name':'ANTIMONIUM TARTARICUM',
  		'link':'http://homeoint.org/books/boericmm/a/ant-t.htm',
  		'symptom':[{1: 'Mind and Head'}, {2: 'Tongue'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Respiratory Organs'}, {8: 'Back'}, {9: 'Skin'}, {10: 'Fever'}, {11: 'Sleep'}]
  		},
  		{
  		'name':'ANTHEMIS NOBILIS',
  		'link':'http://homeoint.org/books/boericmm/a/anth.htm',
  		'symptom':[{1: 'Respiration'}, {2: 'Abdomen'}, {3: 'Urinary'}, {4: 'Skin'}]
  		},
  		{
  		'name':'ANTHRACINUM',
  		'link':'http://homeoint.org/books/boericmm/a/anthraci.htm',
  		'symptom':[{1: 'Tissues'}]
  		},
  		{
  		'name':'ANTHRACOKALI (ANTHRAKOKALI)',
  		'link':'http://homeoint.org/books/boericmm/a/anthraco.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ANTIPYRINUM (ANTIPYRINE)',
  		'link':'http://homeoint.org/books/boericmm/a/antip.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Urine'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Heart'}, {13: 'Nerves'}, {14: 'Skin'}]
  		},
  		{
  		'name':'APIUM GRAVEOLENS',
  		'link':'http://homeoint.org/books/boericmm/a/ap-g.htm',
  		'symptom':[{1: 'Head'}, {2: 'Abdomen'}, {3: 'Female'}, {4: 'Respiratory'}, {5: 'Skin'}, {6: 'Sleep'}]
  		},
  		{
  		'name':'APHIS CHENOPODII GLAUCI (CHENOPODI GLAUCI APHIS)',
  		'link':'http://homeoint.org/books/boericmm/a/aphis.htm',
  		'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Stools'}, {4: 'Urine'}, {5: 'Back'}, {6: 'Fever'}]
  		},
  		{
  		'name':'APIS MELLIFICA',
  		'link':'http://homeoint.org/books/boericmm/a/apis.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Urine'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Extremities'}, {16: 'Skin'}, {17: 'Sleep'}, {18: 'Fever'}]
  		},
  		{
  		'name':'APOCYNUM CANNABINUM',
  		'link':'http://homeoint.org/books/boericmm/a/apoc.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Nose'}, {3: 'Stomach'}, {4: 'Stool'}, {5: 'Urine'}, {6: 'Female'}, {7: 'Respiratory'}, {8: 'Heart'}, {9: 'Sleep'}]
  		},
  		{
  		'name':'APOCYNUM ANDROSAEMIFOLIUM',
  		'link':'http://homeoint.org/books/boericmm/a/apoc-a.htm',
  		'symptom':[{1: 'Extremities'}]
  		},
  		{
  		'name':'APOMORPHINUM (APOMORPHIA)',
  		'link':'http://homeoint.org/books/boericmm/a/apom.htm',
  		'symptom':[{1: 'Head and Stomach'}]
  		},
  		{
  		'name':'AQUILEGIA VULGARIS (AQUILEGIA)',
  		'link':'http://homeoint.org/books/boericmm/a/aqui.htm',
  		'symptom':[{1: 'Female'}]
  		},
  		{
  		'name':'ARAGALLUS LAMBERTI',
  		'link':'http://homeoint.org/books/boericmm/a/arag.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Throat'}, {4: 'Respiratory'}, {5: 'Extremities'}]
  		},
  		{
  		'name':'ARALIA RACEMOSA',
  		'link':'http://homeoint.org/books/boericmm/a/aral.htm',
  		'symptom':[{1: 'Respiratory'}, {2: 'Female'}]
  		},
  		{
  		'name':'ARANEA DIADEMA',
  		'link':'http://homeoint.org/books/boericmm/a/aran.htm',
  		'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Chest'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Extremities'}, {7: 'Sleep'}, {8: 'Fever'}]
  		},
  		{
  		'name':'ARBUTUS ANDRACHNE',
  		'link':'http://homeoint.org/books/boericmm/a/arb.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ARECA CATECHU (ARECA)',
  		'link':'http://homeoint.org/books/boericmm/a/arec.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ARGENTUM METALLICUM',
  		'link':'http://homeoint.org/books/boericmm/a/arg-met.htm',
  		'symptom':[{1: 'Mental'}, {2: 'Head'}, {3: 'Throat'}, {4: 'Respiratory'}, {5: 'Back'}, {6: 'Urine'}, {7: 'Extremities'}, {8: 'Male'}, {9: 'Female'}]
  		},
  		{
  		'name':'ARGENTUM NITRICUM',
  		'link':'http://homeoint.org/books/boericmm/a/arg-n.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Skin'}, {18: 'Sleep'}, {19: 'Fever'}]
  		},
  		{
  		'name':'ARGEMONE MEXICANA',
  		'link':'http://homeoint.org/books/boericmm/a/arge.htm',
  		'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Urinary'}, {4: 'Female'}, {5: 'Extremities'}]
  		},
  		{
  		'name':'ARISTOLOCHIA MILHOMENS',
  		'link':'http://homeoint.org/books/boericmm/a/arist-m.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ARNICA MONTANA (ARNICA)',
  		'link':'http://homeoint.org/books/boericmm/a/arn.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Face'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Heart'}, {15: 'Extremities'}, {16: 'Skin'}, {17: 'Sleep'}, {18: 'Fever'}]
  		},
  		{
  		'name':'ARSENICUM ALBUM',
  		'link':'http://homeoint.org/books/boericmm/a/ars.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Rectum'}, {12: 'Stool'}, {13: 'Urine'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Heart'}, {17: 'Back'}, {18: 'Extremities'}, {19: 'Skin'}, {20: 'Sleep'}, {21: 'Fever'}]
  		},
  		{
  		'name':'ARSENICUM BROMATUM',
  		'link':'http://homeoint.org/books/boericmm/a/ars-br.htm',
  		'symptom':[{1: 'Face'}]
  		},
  		{
  		'name':'ARSENICUM HYDROGENISATUM',
  		'link':'http://homeoint.org/books/boericmm/a/ars-h.htm',
  		'symptom':[{1: 'Head'}, {2: 'Mouth'}]
  		},
  		{
  		'name':'ARSENICUM IODATUM',
  		'link':'http://homeoint.org/books/boericmm/a/ars-i.htm',
  		'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Throat'}, {4: 'Eyes and Ears'}, {5: 'Stomach'}, {6: 'Respiratory'}, {7: 'Fever'}, {8: 'Skin'}]
  		},
  		{
  		'name':'ARSENICUM METALLICUM',
  		'link':'http://homeoint.org/books/boericmm/a/ars-met.htm',
  		'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Mouth'}, {4: 'Abdomen'}]
  		},
  		{
  		'name':'ARSENICUM SULPHURATUM FLAVUM (ARSENIC TRISULPH.)',
  		'link':'http://homeoint.org/books/boericmm/a/ars-s-f.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ARTEMISIA VULGARIS',
  		'link':'http://homeoint.org/books/boericmm/a/art-v.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Female'}, {4: 'Fever'}]
  		},
  		{
  		'name':'ARUM DRACONTIUM',
  		'link':'http://homeoint.org/books/boericmm/a/arum-d.htm',
  		'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Urinary'}, {4: 'Respiratory'}]
  		},
  		{
  		'name':'ARUM TRIPHYLLUM',
  		'link':'http://homeoint.org/books/boericmm/a/arum-t.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Throat'}, {6: 'Skin'}]
  		},
  		{
  		'name':'ARUNDO MAURITANICA (ARUNDO)',
  		'link':'http://homeoint.org/books/boericmm/a/arund.htm',
  		'symptom':[{1: 'Head'}, {2: 'Ears'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Stool'}, {8: 'Urine'}, {9: 'Male'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Extremities'}, {13: 'Skin'}]
  		},
  		{
  		'name':'ASA FOETIDA (ASAFOETIDA)',
  		'link':'http://homeoint.org/books/boericmm/a/asaf.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Female'}, {8: 'Rectum'}, {9: 'Chest'}, {10: 'Bones'}, {11: 'Skin'}]
  		},
  		{
  		'name':'ASARUM EUROPAEUM (ASARUM EUROPUM)',
  		'link':'http://homeoint.org/books/boericmm/a/asar.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Stomach'}, {6: 'Rectum'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Back'}, {10: 'Fever'}]
  		},
  		{
  		'name':'ASCLEPIAS CORNUTI (ASCLEPIAS SYRIACA)',
  		'link':'http://homeoint.org/books/boericmm/a/asc-c.htm',
  		'symptom':[{1: 'Head'}]
  		},
  		{
  		'name':'ASCLEPIAS TUBEROSA',
  		'link':'http://homeoint.org/books/boericmm/a/asc-t.htm',
  		'symptom':[{1: 'Respiratory'}, {2: 'Stomach'}, {3: 'Rectum'}, {4: 'Extremities'}]
  		},
  		{
  		'name':'ASIMINA TRILOBA',
  		'link':'http://homeoint.org/books/boericmm/a/asim.htm',
  		'symptom':[]
  		},
  		{
  		'name':'ASPARAGUS OFFICINALIS',
  		'link':'http://homeoint.org/books/boericmm/a/aspar.htm',
  		'symptom':[{1: 'Head'}, {2: 'Urine'}, {3: 'Heart'}, {4: 'Extremities'}]
  		},
  		{
  		'name':'ASTACUS FLUVIATILIS (CANCER ASTACUS)',
  		'link':'http://homeoint.org/books/boericmm/a/astac.htm',
  		'symptom':[{1: 'Skin'}, {2: 'Fever'}]
  		},
  		{
  		'name':'ASTERIAS RUBENS',
  		'link':'http://homeoint.org/books/boericmm/a/aster.htm',
  		'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Female'}, {4: 'Chest'}, {5: 'Nervous System'}, {6: 'Stool'}, {7: 'Skin'}]
  		},
  		{
  		'name':'ASTRAGALUS MOLLISSIMUS',
  		'link':'http://homeoint.org/books/boericmm/a/astra-mo.htm',
  		'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Extremities'}]
  		},
  		{
  		'name':'AURUM METALLICUM',
  		'link':'http://homeoint.org/books/boericmm/a/aur.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Face'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Urine'}, {12: 'Rectum'}, {13: 'Male'}, {14: 'Female'}, {15: 'Heart'}, {16: 'Respiratory'}, {17: 'Bones'}, {18: 'Extremities'}, {19: 'Sleep'}]
  		},
  		{
  		'name':'AURUM MURIATICUM NATRONATUM',
  		'link':'http://homeoint.org/books/boericmm/a/aur-m-n.htm',
  		'symptom':[{1: 'Tongue'}, {2: 'Female'}]
  		},
  		{
  		'name':'AVENA SATIVA',
  		'link':'http://homeoint.org/books/boericmm/a/aven.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Female'}, {4: 'Male'}, {5: 'Extremities'}]
  		},
  		{
  		'name':'AZADIRACHTA INDICA',
  		'link':'http://homeoint.org/books/boericmm/a/aza.htm',
  		'symptom':[{1: 'Head'}, {2: 'Fever'}]
  		},
  		{
  		'name':'BACILLINUM BURNETT (BACILLINUM)',
  		'link':'http://homeoint.org/books/boericmm/b/bac.htm',
  		'symptom':[{1: 'Head'}, {2: 'Abdomen'}, {3: 'Respiratory'}, {4: 'Skin'}]
  		},
  		{
  		'name':'BADIAGA',
  		'link':'http://homeoint.org/books/boericmm/b/bad.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Respiratory'}, {4: 'Stomach'}, {5: 'Female'}, {6: 'Heart'}, {7: 'Skin'}, {8: 'Back'}]
  		},
  		{
  		'name':'BALSAMUM PERUVIANUM',
  		'link':'http://homeoint.org/books/boericmm/b/bals-p.htm',
  		'symptom':[{1: 'Nose'}, {2: 'Stomach'}, {3: 'Chest'}, {4: 'Urine'}]
  		},
  		{
  		'name':'BAPTISIA TINCTORIA (BAPTISIA)',
  		'link':'http://homeoint.org/books/boericmm/b/bapt.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Mouth'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Back and Extremities'}, {11: 'Sleep'}, {12: 'Skin'}, {13: 'Fever'}]
  		},
  		{
  		'name':'BARYTA ACETICA',
  		'link':'http://homeoint.org/books/boericmm/b/bar-act.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Face'}, {3: 'Extremities'}]
  		},
  		{
  		'name':'BARYTA CARBONICA (BARYTA CARB)',
  		'link':'http://homeoint.org/books/boericmm/b/bar-c.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Rectum'}, {12: 'Urinary'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Heart'}, {17: 'Back'}, {18: 'Extremities'}, {19: 'Sleep'}]
  		},
  		{
  		'name':'BARYTA IODATA',
  		'link':'http://homeoint.org/books/boericmm/b/bar-i.htm',
  		'symptom':[]
  		},
  		{
  		'name':'BARYTA MURIATICA',
  		'link':'http://homeoint.org/books/boericmm/b/bar-m.htm',
  		'symptom':[{1: 'Ears'}, {2: 'Throat'}, {3: 'Respiratory'}, {4: 'Stomach'}, {5: 'Urine'}, {6: 'Abdomen'}]
  		},
  		{
  		'name':'BAROSMA CRENULATUM (BAROSMA CRENATA)',
  		'link':'http://homeoint.org/books/boericmm/b/baros.htm',
  		'symptom':[]
  		},
  		{
  		'name':'BELLADONNA',
  		'link':'http://homeoint.org/books/boericmm/b/bell.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Eyes'}, {5: 'Ears'}, {6: 'Nose'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stools'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Heart'}, {17: 'Extremities'}, {18: 'Back'}, {19: 'Skin'}, {20: 'Fever'}, {21: 'Sleep'}]
  		},
  		{
  		'name':'BELLIS PERENNIS',
  		'link':'http://homeoint.org/books/boericmm/b/bell-p.htm',
  		'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Sleep'}, {4: 'Abdomen'}, {5: 'Skin'}, {6: 'Extremities'}]
  		},
  		{
  		'name':'BENZOICUM ACIDUM',
  		'link':'http://homeoint.org/books/boericmm/b/benz-ac.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Rectum'}, {8: 'Stool'}, {9: 'Urine'}, {10: 'Respiratory'}, {11: 'Back'}, {12: 'Extremities'}, {13: 'Fever'}, {14: 'Skin'}]
  		},
  		{
  		'name':'BENZOLUM (BENZENUM - COAL NAPHTHA)',
  		'link':'http://homeoint.org/books/boericmm/b/benzol.htm',
  		'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Male'}, {5: 'Extremities'}, {6: 'Skin'}]
  		},
  		{
  		'name':'BERBERIS VULGARIS',
  		'link':'http://homeoint.org/books/boericmm/b/berb.htm',
  		'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Face'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Stool'}, {8: 'Urinary'}, {9: 'Male'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Back'}, {13: 'Extremities'}, {14: 'Skin'}, {15: 'Fever'}]
  		},
  		{
  		'name':'BERBERIS AQUIFOLIUM (BERBERIS AQUIFOLIUM - MAHONIA)',
  		'link':'http://homeoint.org/books/boericmm/b/berb-a.htm',
  		'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Stomach'}, {4: 'Urine'}, {5: 'Skin'}]
  		},
  		{
  		'name':'BETA VULGARIS',
  		'link':'http://homeoint.org/books/boericmm/b/beta.htm',
  		'symptom':[]
  		},
  		{
  		'name':'BISMUTHUM SUBNITRICUM (BISMUTHUM)',
  		'link':'http://homeoint.org/books/boericmm/b/bism-sn.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Stool'}, {6: 'Respiratory'}, {7: 'Extremities'}, {8: 'Sleep'}]
  		},
  		{
  		'name':'BLATTA AMERICANA',
  		'link':'http://homeoint.org/books/boericmm/b/blatta-a.htm',
  		'symptom':[]
  		},
  		{
  		'name':'BLATTA ORIENTALIS',
  		'link':'http://homeoint.org/books/boericmm/b/blatta-o.htm',
  		'symptom':[]
  		},
  		{
  		'name':'BOLETUS LARICIS (POLYPORUS OFFICINALE)',
  		'link':'http://homeoint.org/books/boericmm/b/bol-la.htm',
  		'symptom':[{1: 'Head'}, {2: 'Fever'}, {3: 'Skin'}]
  		},
  		{
  		'name':'BORICUM ACIDUM',
  		'link':'http://homeoint.org/books/boericmm/b/bor-ac.htm',
  		'symptom':[{1: 'Skin'}, {2: 'Female'}]
  		},
  		{
  		'name':'BORAX VENETA (BORAX)',
  		'link':'http://homeoint.org/books/boericmm/b/borx.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach and Abdomen'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Extremities'}, {14: 'Skin'}, {15: 'Sleep'}]
  		},
  		{
  		'name':'BOTHROPS LANCEOLATUS (BOTHROPS LANCIOLATUS - LACHESIS LANCIOLATUS)',
  		'link':'http://homeoint.org/books/boericmm/b/both.htm',
  		'symptom':[{1: 'Eyes'}, {2: 'Face'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Skin'}]
  		},
  		{
  		'name':'BOTULINUM',
  		'link':'http://homeoint.org/books/boericmm/b/botul.htm',
  		'symptom':[]
  		},
  		{
  		'name':'BOVISTA LYCOPERDON (BOVISTA)',
  		'link':'http://homeoint.org/books/boericmm/b/bov.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Female'}, {6: 'Abdomen'}, {7: 'Extremities'}, {8: 'Skin'}]
  		},
  		{
  		'name':'BRACHYGLOTTIS REPENS (BRACHYGLOTTIS)',
  		'link':'http://homeoint.org/books/boericmm/b/brach.htm',
  		'symptom':[{1: 'Abdomen'}, {2: 'Urinary'}, {3: 'Extremities'}]
  		},
  		{
  		'name':'BROMIUM (BROMUM)',
  		'link':'http://homeoint.org/books/boericmm/b/brom.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Throat'}, {5: 'Stomach and Abdomen'}, {6: 'Respiratory'}, {7: 'Male'}, {8: 'Female'}, {9: 'Sleep'}, {10: 'Skin'}]
  		},
  		{
  		'name':'BRYONIA ALBA (BRYONIA)',
  		'link':'http://homeoint.org/books/boericmm/b/bry.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Ears'}, {5: 'Eyes'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Back'}, {15: 'Extremities'}, {16: 'Skin'}, {17: 'Sleep'}, {18: 'Fever'}]
  		},
  		{
  		'name':'BUFO RANA (BUFO)',
  		'link':'http://homeoint.org/books/boericmm/b/bufo.htm',
  		'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Heart'}, {6: 'Female'}, {7: 'Male'}, {8: 'Extremities'}, {9: 'Skin'}]
  		},
  		{
  		'name':'BUTYRICUM ACIDUM (BUTYRIC ACID)',
  		'link':'http://homeoint.org/books/boericmm/b/but-ac.htm',
  		'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Back'}, {4: 'Sleep'}, {5: 'Skin'}]
  		},
  		{
  'name':'CACTUS GRANDIFLORUS (SELENICEREUS SPINULOSUS)',
  'link':'http://homeoint.org/books/boericmm/c/cact.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Stool'}, {7: 'Urine'}, {8: 'Female'}, {9: 'Chest'}, {10: 'Heart'}, {11: 'Extremities'}, {12: 'Sleep'}, {13: 'Fever'}]
  },
  {
  'name':'CADMIUM SULPHURATUM',
  'link':'http://homeoint.org/books/boericmm/c/cadm-s.htm',
  'symptom':[{1: 'Mind and Head'}, {2: 'Nose'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Heart'}, {12: 'Fever'}, {13: 'Skin'}, {14: 'Sleep'}]
  },
  {
  'name':'CAINCA (CAHINCA)',
  'link':'http://homeoint.org/books/boericmm/c/cain.htm',
  'symptom':[{1: 'Urinary'}, {2: 'Male'}, {3: 'Back'}]
  },
  {
  'name':'CAJUPUTUM (OLEUM WITTNEBIANUM)',
  'link':'http://homeoint.org/books/boericmm/c/caj.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Abdomen'}]
  },
  {
  'name':'CALADIUM SEGUINUM',
  'link':'http://homeoint.org/books/boericmm/c/calad.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Male'}, {4: 'Female'}, {5: 'Skin'}, {6: 'Respiratory'}]
  },
  {
  'name':'CALCAREA CARBONICA (CALCAREA CARBONICA - OSTREARUM)',
  'link':'http://homeoint.org/books/boericmm/c/calc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Heart'}, {17: 'Back'}, {18: 'Extremities'}, {19: 'Sleep'}, {20: 'Fever'}, {21: 'Skin'}]
  },
  {
  'name':'CALCAREA ACETICA',
  'link':'http://homeoint.org/books/boericmm/c/calc-act.htm',
  'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Respiratory'}]
  },
  {
  'name':'CALCAREA ARSENICOSA (CALCAREA ARSENICA)',
  'link':'http://homeoint.org/books/boericmm/c/calc-ar.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Urinary'}, {5: 'Heart'}, {6: 'Female'}, {7: 'Back'}, {8: 'Extremities'}]
  },
  {
  'name':'CALCAREA FLUORICA (FLUOR SPAR)',
  'link':'http://homeoint.org/books/boericmm/c/calc-f.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Stool and Anus'}, {11: 'Male'}, {12: 'Respiratory Organs'}, {13: 'Circulatory Organs'}, {14: 'Neck and Back'}, {15: 'Extremities'}, {16: 'Sleep'}, {17: 'Skin'}]
  },
  {
  'name':'CALCAREA IODATA',
  'link':'http://homeoint.org/books/boericmm/c/calc-i.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Respiratory'}, {4: 'Skin'}]
  },
  {
  'name':'CALCAREA PHOSPHORICA',
  'link':'http://homeoint.org/books/boericmm/c/calc-p.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Stool'}, {8: 'Urine'}, {9: 'Female'}, {10: 'Respiratory'}, {11: 'Neck and Back'}, {12: 'Extremities'}]
  },
  {
  'name':'CALCAREA SULPHURICA',
  'link':'http://homeoint.org/books/boericmm/c/calc-s.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Abdomen'}, {9: 'Stool'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Extremities'}, {13: 'Fever'}, {14: 'Skin'}]
  },
  {
  'name':'CALCAREA SILICATA',
  'link':'http://homeoint.org/books/boericmm/c/calc-sil.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Female'}, {5: 'Respiratory'}, {6: 'Skin'}]
  },
  {
  'name':'CALENDULA OFFICINALIS',
  'link':'http://homeoint.org/books/boericmm/c/calen.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Stomach'}, {6: 'Respiratory'}, {7: 'Female'}, {8: 'Skin'}, {9: 'Fever'}]
  },
  {
  'name':'CALOTROPIS GIGANTEA (CALOTROPIS)',
  'link':'http://homeoint.org/books/boericmm/c/calo.htm',
  'symptom':[]
  },
  {
  'name':'CALTHA PALUSTRIS',
  'link':'http://homeoint.org/books/boericmm/c/calth.htm',
  'symptom':[{1: 'Skin'}]
  },
  {
  'name':'CAMPHORA',
  'link':'http://homeoint.org/books/boericmm/c/camph.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Stool'}, {7: 'Urine'}, {8: 'Respiratory'}, {9: 'Sleep'}, {10: 'Extremities'}, {11: 'Fever'}, {12: 'Skin'}]
  },
  {
  'name':'CAMPHORA BROMATA (CAMPHORA MONO-BROMATA)',
  'link':'http://homeoint.org/books/boericmm/c/camph-br.htm',
  'symptom':[{1: 'Mind'}]
  },
  {
  'name':'CANCHALAGUA',
  'link':'http://homeoint.org/books/boericmm/c/canch.htm',
  'symptom':[{1: 'Head'}, {2: 'Fever'}, {3: 'Skin'}]
  },
  {
  'name':'CANNABIS INDICA',
  'link':'http://homeoint.org/books/boericmm/c/cann-i.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Stomach'}, {7: 'Rectum'}, {8: 'Urinary'}, {9: 'Male'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Heart'}, {13: 'Extremities'}, {14: 'Sleep'}]
  },
  {
  'name':'CANNABIS SATIVA',
  'link':'http://homeoint.org/books/boericmm/c/cann-s.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Urine'}, {4: 'Female'}, {5: 'Respiratory'}, {6: 'Heart'}, {7: 'Sleep'}, {8: 'Extremities'}]
  },
  {
  'name':'CANTHARIS VESICATORIA (CANTHARIS)',
  'link':'http://homeoint.org/books/boericmm/c/canth.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Throat'}, {7: 'Chest'}, {8: 'Stomach'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Male'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Heart'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Skin'}, {18: 'Fever'}]
  },
  {
  'name':'CAPSICUM ANNUUM (CAPSICUM)',
  'link':'http://homeoint.org/books/boericmm/c/caps.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Throat'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Stool'}, {8: 'Urine'}, {9: 'Male'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Extremities'}, {13: 'Fever'}]
  },
  {
  'name':'CARBOLICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/c/carb-ac.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Stool'}, {6: 'Urine'}, {7: 'Female'}, {8: 'Extremities'}, {9: 'Skin'}]
  },
  {
  'name':'CARBO ANIMALIS',
  'link':'http://homeoint.org/books/boericmm/c/carb-an.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Female'}, {5: 'Respiratory'}, {6: 'Skin'}, {7: 'Extremities'}]
  },
  {
  'name':'CARBO VEGETABILIS',
  'link':'http://homeoint.org/books/boericmm/c/carb-v.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Eyes'}, {5: 'Ears'}, {6: 'Nose'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Rectum and Stool'}, {11: 'Male'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Extremities'}, {15: 'Fever'}, {16: 'Skin'}]
  },
  {
  'name':'CARBONEUM HYDROGENISATUM',
  'link':'http://homeoint.org/books/boericmm/c/carbn-h.htm',
  'symptom':[{1: 'Mind'}, {2: 'Eyes'}]
  },
  {
  'name':'CARBONEUM OXYGENISATUM',
  'link':'http://homeoint.org/books/boericmm/c/carbn-o.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Skin'}, {4: 'Sleep'}]
  },
  {
  'name':'CARBONEUM SULPHURATUM',
  'link':'http://homeoint.org/books/boericmm/c/carbn-s.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Abdomen'}, {6: 'Male'}, {7: 'Extremities'}, {8: 'Sleep'}, {9: 'Skin'}]
  },
  {
  'name':'CARCINOSINUM (CARCINOSIN)',
  'link':'http://homeoint.org/books/boericmm/c/carc.htm',
  'symptom':[]
  },
  {
  'name':'CARDUUS MARIANUS',
  'link':'http://homeoint.org/books/boericmm/c/card-m.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Rectum'}, {6: 'Urine'}, {7: 'Chest'}, {8: 'Skin'}, {9: 'Extremities'}]
  },
  {
  'name':'CARLSBAD AQUA (CARLSBAD)',
  'link':'http://homeoint.org/books/boericmm/c/carl.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Urine'}, {6: 'Rectum'}]
  },
  {
  'name':'CASCARA SAGRADA (RHAMNUS PURSHIANA)',
  'link':'http://homeoint.org/books/boericmm/c/cas-s.htm',
  'symptom':[{1: 'Urine'}, {2: 'Extremities'}]
  },
  {
  'name':'CASCARILLA',
  'link':'http://homeoint.org/books/boericmm/c/casc.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Rectum'}]
  },
  {
  'name':'CASTOREUM CANADENSE (CASTOREUM)',
  'link':'http://homeoint.org/books/boericmm/c/cast.htm',
  'symptom':[{1: 'Tongue'}, {2: 'Female'}, {3: 'Fever'}]
  },
  {
  'name':'CASTANEA VESCA',
  'link':'http://homeoint.org/books/boericmm/c/castn-v.htm',
  'symptom':[]
  },
  {
  'name':'CASTOR EQUI',
  'link':'http://homeoint.org/books/boericmm/c/castor-e.htm',
  'symptom':[{1: 'Chest'}]
  },
  {
  'name':'CATARIA NEPETA',
  'link':'http://homeoint.org/books/boericmm/c/catar.htm',
  'symptom':[]
  },
  {
  'name':'CAULOPHYLLUM THALICTROIDES (CAULOPHYLLUM)',
  'link':'http://homeoint.org/books/boericmm/c/caul.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Female'}, {3: 'Skin'}, {4: 'Extremities'}]
  },
  {
  'name':'CAUSTICUM',
  'link':'http://homeoint.org/books/boericmm/c/caust.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Eyes'}, {5: 'Ears'}, {6: 'Nose'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Back'}, {14: 'Extremities'}, {15: 'Skin'}, {16: 'Sleep'}]
  },
  {
  'name':'CEANOTHUS AMERICANUS (CEANOTHUS)',
  'link':'http://homeoint.org/books/boericmm/c/cean.htm',
  'symptom':[{1: 'Abdomen'}, {2: 'Rectum'}, {3: 'Urine'}]
  },
  {
  'name':'CEDRON (SIMARUBA FERROGINEA)',
  'link':'http://homeoint.org/books/boericmm/c/cedr.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Extremities'}, {4: 'Fever'}]
  },
  {
  'name':'CENCHRIS CONTORTRIX (ANCISTRODON)',
  'link':'http://homeoint.org/books/boericmm/c/cench.htm',
  'symptom':[{1: 'Head'}, {2: 'Heart'}, {3: 'Sleep'}]
  },
  {
  'name':'CERIUM OXALICUM',
  'link':'http://homeoint.org/books/boericmm/c/cer-ox.htm',
  'symptom':[]
  },
  {
  'name':'CEREUS BONPLANDII',
  'link':'http://homeoint.org/books/boericmm/c/cere-b.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Chest'}, {4: 'Skin'}, {5: 'Extremities'}]
  },
  {
  'name':'CHAMOMILLA',
  'link':'http://homeoint.org/books/boericmm/c/cham.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Eyes'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Throat'}, {8: 'Mouth'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Back'}, {15: 'Extremities'}, {16: 'Sleep'}]
  },
  {
  'name':'CHAPARRO AMARGOSO',
  'link':'http://homeoint.org/books/boericmm/c/chap.htm',
  'symptom':[]
  },
  {
  'name':'CHELIDONIUM MAJUS',
  'link':'http://homeoint.org/books/boericmm/c/chel.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Urine'}, {8: 'Stool'}, {9: 'Female'}, {10: 'Respiratory'}, {11: 'Back'}, {12: 'Extremities'}, {13: 'Skin'}]
  },
  {
  'name':'CHELONE GLABRA (CHELONE)',
  'link':'http://homeoint.org/books/boericmm/c/chelo.htm',
  'symptom':[]
  },
  {
  'name':'CHENOPODIUM ANTHELMINTICUM',
  'link':'http://homeoint.org/books/boericmm/c/chen-a.htm',
  'symptom':[{1: 'Ears'}, {2: 'Back'}, {3: 'Urine'}]
  },
  {
  'name':'CHIMAPHILA UMBELLATA',
  'link':'http://homeoint.org/books/boericmm/c/chim.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Urinary'}, {4: 'Female'}, {5: 'Male'}, {6: 'Skin'}, {7: 'Extremities'}]
  },
  {
  'name':'CHINA OFFICINALIS (CINCHONA OFFICINALIS)',
  'link':'http://homeoint.org/books/boericmm/c/chin.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Male'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Heart'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Skin'}, {18: 'Sleep'}, {19: 'Fever'}]
  },
  {
  'name':'CHININUM ARSENICOSUM',
  'link':'http://homeoint.org/books/boericmm/c/chinin-a.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Heart'}, {6: 'Sleep'}, {7: 'Extremities'}, {8: 'Fever'}]
  },
  {
  'name':'CHININUM SULPHURICUM',
  'link':'http://homeoint.org/books/boericmm/c/chinin-s.htm',
  'symptom':[{1: 'Blood'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Face'}, {5: 'Spine'}, {6: 'Urine'}, {7: 'Skin'}, {8: 'Fever'}]
  },
  {
  'name':'CHIONANTHUS VIRGINICA (CHIONANTHUS)',
  'link':'http://homeoint.org/books/boericmm/c/chion.htm',
  'symptom':[{1: 'Head'}, {2: 'Tongue'}, {3: 'Mouth'}, {4: 'Abdomen'}, {5: 'Urine'}, {6: 'Skin'}, {7: 'Liver'}]
  },
  {
  'name':'CHLOROFORMIUM (CHLOROFORMUM)',
  'link':'http://homeoint.org/books/boericmm/c/chlf.htm',
  'symptom':[{1: 'Head'}]
  },
  {
  'name':'CHLORALUM HYDRATUM (CHLORALUM)',
  'link':'http://homeoint.org/books/boericmm/c/chlol.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Skin'}, {4: 'Respiratory'}, {5: 'Sleep'}]
  },
  {
  'name':'CHLORUM',
  'link':'http://homeoint.org/books/boericmm/c/chlor.htm',
  'symptom':[{1: 'Mind'}, {2: 'Respiratory'}]
  },
  {
  'name':'CHOLESTERINUM',
  'link':'http://homeoint.org/books/boericmm/c/chol.htm',
  'symptom':[]
  },
  {
  'name':'CHROMICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/c/chr-ac.htm',
  'symptom':[{1: 'Nose'}, {2: 'Throat'}, {3: 'Extremities'}, {4: 'Stool'}]
  },
  {
  'name':'CHRYSAROBINUM',
  'link':'http://homeoint.org/books/boericmm/c/chrysar.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Ears'}]
  },
  {
  'name':'CICUTA VIROSA',
  'link':'http://homeoint.org/books/boericmm/c/cic.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Rectum'}, {10: 'Respiratory'}, {11: 'Back and extremities'}, {12: 'Skin'}]
  },
  {
  'name':'CIMICIFUGA RACEMOSA (CIMICIFUGA - ACTAEA RACEMOSA - MACROTYS)',
  'link':'http://homeoint.org/books/boericmm/c/cimic.htm',
  'symptom':[{1: 'Mental'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Stomach'}, {5: 'Female'}, {6: 'Respiratory'}, {7: 'Heart'}, {8: 'Back'}, {9: 'Extremities'}, {10: 'Sleep'}, {11: 'Skin'}]
  },
  {
  'name':'CIMEX LECTULARIUS (CIMEX - ACANTHIA)',
  'link':'http://homeoint.org/books/boericmm/c/cimx.htm',
  'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Fever'}, {4: 'Bowels'}]
  },
  {
  'name':'CINA MARITIMA (CINA)',
  'link':'http://homeoint.org/books/boericmm/c/cina.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Extremities'}, {14: 'Sleep'}, {15: 'Fever'}]
  },
  {
  'name':'CINERARIA MARITIMA (CINERARIA)',
  'link':'http://homeoint.org/books/boericmm/c/cine.htm',
  'symptom':[]
  },
  {
  'name':'CINNABARIS (MERCURIUS SULPHURATUS RUBER)',
  'link':'http://homeoint.org/books/boericmm/c/cinnb.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Throat'}, {5: 'Male'}, {6: 'Female'}, {7: 'Extremities'}, {8: 'Skin'}]
  },
  {
  'name':'CINNAMOMUM CEYLANICUM (CINNAMOMUM)',
  'link':'http://homeoint.org/books/boericmm/c/cinnm.htm',
  'symptom':[{1: 'Female'}]
  },
  {
  'name':'CISTUS CANADENSIS',
  'link':'http://homeoint.org/books/boericmm/c/cist.htm',
  'symptom':[{1: 'Face'}, {2: 'Mouth'}, {3: 'Ears'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Stool'}, {7: 'Chest'}, {8: 'Extremities'}, {9: 'Sleep'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Skin'}]
  },
  {
  'name':'CITRUS VULGARIS',
  'link':'http://homeoint.org/books/boericmm/c/cit-v.htm',
  'symptom':[]
  },
  {
  'name':'CLEMATIS ERECTA',
  'link':'http://homeoint.org/books/boericmm/c/clem.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Face'}, {4: 'Teeth'}, {5: 'Stomach'}, {6: 'Male'}, {7: 'Urinary'}, {8: 'Skin'}]
  },
  {
  'name':'COBALTUM METALLICUM (COBALTUM)',
  'link':'http://homeoint.org/books/boericmm/c/cob.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Teeth'}, {4: 'Abdomen'}, {5: 'Rectum'}, {6: 'Male'}, {7: 'Back'}, {8: 'Extremities'}, {9: 'Sleep'}, {10: 'Skin'}]
  },
  {
  'name':'COCCUS CACTI',
  'link':'http://homeoint.org/books/boericmm/c/coc-c.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Respiratory'}, {4: 'Heart'}, {5: 'Urinary'}, {6: 'Female'}]
  },
  {
  'name':'COCA-ERYTHROXYLON COCA',
  'link':'http://homeoint.org/books/boericmm/c/coca.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Heart'}, {5: 'Male'}, {6: 'Respiratory'}, {7: 'Sleep'}]
  },
  {
  'name':'COCAINUM HYDROCHLORICUM (COCAINA)',
  'link':'http://homeoint.org/books/boericmm/c/cocain.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Nervous System'}, {7: 'Sleep'}, {8: 'Fever'}]
  },
  {
  'name':'COCCULUS INDICUS (COCCULUS)',
  'link':'http://homeoint.org/books/boericmm/c/cocc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Female'}, {7: 'Respiratory'}, {8: 'Back'}, {9: 'Extremities'}, {10: 'Sleep'}, {11: 'Fever'}]
  },
  {
  'name':'COCCINELLA SEPTEMPUNCTATA',
  'link':'http://homeoint.org/books/boericmm/c/cocc-s.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Back'}]
  },
  {
  'name':'COCHLEARIA ARMORACIA (ARMORACIA SATIVA)',
  'link':'http://homeoint.org/books/boericmm/c/coch.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Back'}, {5: 'Respiratory'}, {6: 'Urinary'}]
  },
  {
  'name':'CODEINUM',
  'link':'http://homeoint.org/books/boericmm/c/cod.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Respiratory'}]
  },
  {
  'name':'COFFEA CRUDA',
  'link':'http://homeoint.org/books/boericmm/c/coff.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Female'}, {7: 'Sleep'}, {8: 'Respiratory'}, {9: 'Heart'}, {10: 'Extremities'}]
  },
  {
  'name':'COLCHICUM AUTUMNALE (COLCHICUM)',
  'link':'http://homeoint.org/books/boericmm/c/colch.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Stool'}, {8: 'Female'}, {9: 'Urine'}, {10: 'Heart'}, {11: 'Extremities'}, {12: 'Back'}, {13: 'Skin'}]
  },
  {
  'name':'COLLINSONIA CANADENSIS',
  'link':'http://homeoint.org/books/boericmm/c/coll.htm',
  'symptom':[{1: 'Head'}, {2: 'Rectum'}, {3: 'Female'}, {4: 'Respiratory'}, {5: 'Heart'}]
  },
  {
  'name':'COLOCYNTHIS',
  'link':'http://homeoint.org/books/boericmm/c/coloc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Female'}, {8: 'Urine'}, {9: 'Extremities'}]
  },
  {
  'name':'CONIUM MACULATUM (CONIUM)',
  'link':'http://homeoint.org/books/boericmm/c/con-m.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Urine'}, {10: 'Male'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Back'}, {14: 'Extremities'}, {15: 'Skin'}]
  },
  {
  'name':'COMOCLADIA DENTATA',
  'link':'http://homeoint.org/books/boericmm/c/com.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Face'}, {3: 'Skin'}, {4: 'Chest'}]
  },
  {
  'name':'CONVALLARIA MAJALIS',
  'link':'http://homeoint.org/books/boericmm/c/conv.htm',
  'symptom':[{1: 'Mind and Head'}, {2: 'Face'}, {3: 'Mouth'}, {4: 'Throat'}, {5: 'Abdomen'}, {6: 'Urinary Organs'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Heart'}, {10: 'Back and Extremities'}, {11: 'Fever'}]
  },
  {
  'name':'COPAIVA OFFICINALIS (COPAIVA)',
  'link':'http://homeoint.org/books/boericmm/c/cop.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Stomach'}, {4: 'Urinary'}, {5: 'Rectum'}, {6: 'Male'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Skin'}]
  },
  {
  'name':'CORALLIUM RUBRUM (CORALLIUM)',
  'link':'http://homeoint.org/books/boericmm/c/cor-r.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Mouth'}, {4: 'Respiratory'}, {5: 'Male'}, {6: 'Skin'}]
  },
  {
  'name':'CORALLORHIZA ODONTORHIZA (CORALLORHIZA)',
  'link':'http://homeoint.org/books/boericmm/c/corh.htm',
  'symptom':[]
  },
  {
  'name':'CORNUS CIRCINATA',
  'link':'http://homeoint.org/books/boericmm/c/corn.htm',
  'symptom':[{1: 'Mouth'}, {2: 'Stool'}, {3: 'Skin'}]
  },
  {
  'name':'CORYDALIS FORMOSA (CORYDALIS - DICENTRA CANADENSIS)',
  'link':'http://homeoint.org/books/boericmm/c/cory.htm',
  'symptom':[{1: 'Skin'}]
  },
  {
  'name':'COTYLEDON UMBILICUS (COTYLEDON)',
  'link':'http://homeoint.org/books/boericmm/c/cot.htm',
  'symptom':[{1: 'Mind'}, {2: 'Breast'}, {3: 'Extremities'}]
  },
  {
  'name':'CRATAEGUS OXYACANTHA (CRATAEGUS)',
  'link':'http://homeoint.org/books/boericmm/c/crat.htm',
  'symptom':[{1: 'Head'}, {2: 'Urinary'}, {3: 'Heart'}, {4: 'Skin'}, {5: 'Sleep'}]
  },
  {
  'name':'CROCUS SATIVUS (CROCUS SATIA)',
  'link':'http://homeoint.org/books/boericmm/c/croc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Abdomen'}, {6: 'Female'}, {7: 'Respiratory'}, {8: 'Back'}, {9: 'Extremities'}]
  },
  {
  'name':'CROTALUS HORRIDUS',
  'link':'http://homeoint.org/books/boericmm/c/crot-h.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Female'}, {13: 'Urinary'}, {14: 'Heart'}, {15: 'Respiratory'}, {16: 'Extremities'}, {17: 'Fever'}, {18: 'Skin'}, {19: 'Sleep'}]
  },
  {
  'name':'CROTON TIGLIUM',
  'link':'http://homeoint.org/books/boericmm/c/crot-t.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stool'}, {4: 'Urine'}, {5: 'Chest'}, {6: 'Skin'}]
  },
  {
  'name':'CUBEBA OFFICINALIS (CUBEBA)',
  'link':'http://homeoint.org/books/boericmm/c/cub.htm',
  'symptom':[{1: 'Urine'}, {2: 'Respiratory'}]
  },
  {
  'name':'CUCURBITA CITRULLUS',
  'link':'http://homeoint.org/books/boericmm/c/cuc-c.htm',
  'symptom':[]
  },
  {
  'name':'CUCURBITA PEPO',
  'link':'http://homeoint.org/books/boericmm/c/cuc-p.htm',
  'symptom':[]
  },
  {
  'name':'CUNDURANGO (CONDURANGO)',
  'link':'http://homeoint.org/books/boericmm/c/cund.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Skin'}]
  },
  {
  'name':'CUPHEA VISCOSISSIMA (CUPHEA)',
  'link':'http://homeoint.org/books/boericmm/c/cuph.htm',
  'symptom':[]
  },
  {
  'name':'CUPRUM METALLICUM',
  'link':'http://homeoint.org/books/boericmm/c/cupr.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Face'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Female'}, {10: 'Heart'}, {11: 'Respiratory'}, {12: 'Extremities'}, {13: 'Skin'}, {14: 'Sleep'}]
  },
  {
  'name':'CUPRUM ACETICUM',
  'link':'http://homeoint.org/books/boericmm/c/cupr-act.htm',
  'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Stomach'}, {4: 'Respiratory'}, {5: 'Skin'}]
  },
  {
  'name':'CUPRUM ARSENICOSUM',
  'link':'http://homeoint.org/books/boericmm/c/cupr-ar.htm',
  'symptom':[{1: 'Mouth'}, {2: 'Heart'}, {3: 'Abdomen'}, {4: 'Back'}, {5: 'Urinary'}, {6: 'Male'}, {7: 'Extremities'}, {8: 'Skin'}]
  },
  {
  'name':'CURARE (WOORARI)',
  'link':'http://homeoint.org/books/boericmm/c/cur.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Extremities'}, {10: 'Skin'}]
  },
  {
  'name':'CYCLAMEN EUROPAEUM (CYCLAMEN)',
  'link':'http://homeoint.org/books/boericmm/c/cycl.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Rectum'}, {5: 'Female'}, {6: 'Extremities'}, {7: 'Skin'}]
  },
  {
  'name':'CYPRIPEDIUM PUBESCENS (CYPRIPEDIUM)',
  'link':'http://homeoint.org/books/boericmm/c/cypr.htm',
  'symptom':[{1: 'Head'}]
  },
  {
  'name':'CYTISUS LABURNUM (LABURNUM)',
  'link':'http://homeoint.org/books/boericmm/c/cyt-l.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Extremities'}]
  },
  {
  'name':'DAMIANA (TURNERA)',
  'link':'http://homeoint.org/books/boericmm/d/dam.htm',
  'symptom':[]
  },
  {
  'name':'DAPHNE INDICA',
  'link':'http://homeoint.org/books/boericmm/d/daph.htm',
  'symptom':[{1: 'Head'}, {2: 'Urine'}, {3: 'Extremities'}, {4: 'Sleep'}]
  },
  {
  'name':'DIGITALIS PURPUREA (DIGITALIS)',
  'link':'http://homeoint.org/books/boericmm/d/dig.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Stool'}, {7: 'Urine'}, {8: 'Female'}, {9: 'Male'}, {10: 'Respiratory'}, {11: 'Heart'}, {12: 'Extremities'}, {13: 'Sleep'}, {14: 'Fever'}, {15: 'Skin'}]
  },
  {
  'name':'DIOSCOREA VILLOSA',
  'link':'http://homeoint.org/books/boericmm/d/dios.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Heart'}, {6: 'Rectum'}, {7: 'Male'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Extremities'}]
  },
  {
  'name':'DIOSMA LINCARIS',
  'link':'http://homeoint.org/books/boericmm/d/diosm.htm',
  'symptom':[]
  },
  {
  'name':'DIPHTHERINUM',
  'link':'http://homeoint.org/books/boericmm/d/diph.htm',
  'symptom':[]
  },
  {
  'name':'DOLICHOS PRURIENS (DOLICHOS PURIENS - MUCUNA)',
  'link':'http://homeoint.org/books/boericmm/d/dol.htm',
  'symptom':[{1: 'Throat'}, {2: 'Abdomen'}, {3: 'Skin'}]
  },
  {
  'name':'DORYPHORA DECEMLINEATA (DORYPHORA)',
  'link':'http://homeoint.org/books/boericmm/d/dor.htm',
  'symptom':[{1: 'Urinary'}]
  },
  {
  'name':'DROSERA ROTUNDIFOLIA (DROSERA)',
  'link':'http://homeoint.org/books/boericmm/d/dros.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Respiratory Organs'}, {4: 'Extremities'}, {5: 'Fever'}]
  },
  {
  'name':'DUBOISIA MYOPOROIDES (DUBOISIA)',
  'link':'http://homeoint.org/books/boericmm/d/dubo-m.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Respiratory'}, {5: 'Extremities'}]
  },
  {
  'name':'DULCAMARA',
  'link':'http://homeoint.org/books/boericmm/d/dulc.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Back'}, {14: 'Extremities'}, {15: 'Skin'}, {16: 'Fever'}]
  },
  {
  'name':'ECHINACEA ANGUSTIFOLIA (ECHINACEA - RUDBECKIA)',
  'link':'http://homeoint.org/books/boericmm/e/echi.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Mouth'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Chest'}, {7: 'Urine'}, {8: 'Female'}, {9: 'Extremities'}, {10: 'Skin'}, {11: 'Fever'}]
  },
  {
  'name':'ELAPS CORALLINUS',
  'link':'http://homeoint.org/books/boericmm/e/elaps.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Throat'}, {7: 'Chest'}, {8: 'Stomach'}, {9: 'Female'}, {10: 'Sleep'}, {11: 'Skin'}, {12: 'Extremities'}, {13: 'Fever'}]
  },
  {
  'name':'ELATERIUM OFFICINARUM (ELATERIUM - ECBALIUM)',
  'link':'http://homeoint.org/books/boericmm/e/elat.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Stool'}, {3: 'Extremities'}, {4: 'Skin'}, {5: 'Fever'}]
  },
  {
  'name':'EOSINUM (EOSIN)',
  'link':'http://homeoint.org/books/boericmm/e/eos.htm',
  'symptom':[]
  },
  {
  'name':'EPIGEA REPENS',
  'link':'http://homeoint.org/books/boericmm/e/epig.htm',
  'symptom':[]
  },
  {
  'name':'EPIPHEGUS VIRGINIANA (EPIPHEGUS - OROBANCHE)',
  'link':'http://homeoint.org/books/boericmm/e/epiph.htm',
  'symptom':[{1: 'Head'}]
  },
  {
  'name':'EQUISETUM HYEMALE (EQUISETUM)',
  'link':'http://homeoint.org/books/boericmm/e/equis-h.htm',
  'symptom':[{1: 'Urinary'}, {2: 'Kidney'}]
  },
  {
  'name':'ERECHTHITES HIERACIFOLIA (ERECHTHITES)',
  'link':'http://homeoint.org/books/boericmm/e/erech.htm',
  'symptom':[{1: 'Skin'}]
  },
  {
  'name':'ERIGERON CANADENSE (ERIGERON - LEPTILON CANADENSE)',
  'link':'http://homeoint.org/books/boericmm/e/erig.htm',
  'symptom':[{1: 'Female'}]
  },
  {
  'name':'ERIODYCTION CALIFORNICUM (ERIODICTYON)',
  'link':'http://homeoint.org/books/boericmm/e/erio.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Male'}]
  },
  {
  'name':'ERYNGIUM AQUATICUM',
  'link':'http://homeoint.org/books/boericmm/e/ery-a.htm',
  'symptom':[{1: 'Respiratory'}, {2: 'Urinary'}, {3: 'Male'}]
  },
  {
  'name':'ESCHSCHOLTZIA CALIFORNICA',
  'link':'http://homeoint.org/books/boericmm/e/esch.htm',
  'symptom':[]
  },
  {
  'name':'EUCALYPTUS GLOBULUS',
  'link':'http://homeoint.org/books/boericmm/e/eucal.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Respiratory'}, {8: 'Female'}, {9: 'Extremities'}, {10: 'Skin'}, {11: 'Fever'}]
  },
  {
  'name':'EUGENIA JAMBOS (JAMBOSA VULGARIS)',
  'link':'http://homeoint.org/books/boericmm/e/eug.htm',
  'symptom':[{1: 'Head'}, {2: 'Extremities'}]
  },
  {
  'name':'EUONYMUS ATROPURPUREA',
  'link':'http://homeoint.org/books/boericmm/e/euon-a.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Urinary'}, {6: 'Back'}, {7: 'Extremities'}]
  },
  {
  'name':'EUPATORIUM AROMATICUM',
  'link':'http://homeoint.org/books/boericmm/e/eup-a.htm',
  'symptom':[]
  },
  {
  'name':'EUPATORIUM PERFOLIATUM',
  'link':'http://homeoint.org/books/boericmm/e/eup-per.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Stool'}, {5: 'Respiratory'}, {6: 'Fever'}, {7: 'Extremities'}]
  },
  {
  'name':'EUPATORIUM PURPUREUM',
  'link':'http://homeoint.org/books/boericmm/e/eup-pur.htm',
  'symptom':[{1: 'Head'}, {2: 'Urinary'}, {3: 'Back'}, {4: 'Female'}, {5: 'Fever'}]
  },
  {
  'name':'EUPHORBIUM OFFICINARUM (EUPHORBIUM)',
  'link':'http://homeoint.org/books/boericmm/e/euph.htm',
  'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Respiratory'}, {6: 'Extremities'}, {7: 'Skin'}]
  },
  {
  'name':'EUPHORBIA LATHYRIS',
  'link':'http://homeoint.org/books/boericmm/e/euph-l.htm',
  'symptom':[{1: 'Mind'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Stool'}, {8: 'Urine'}, {9: 'Male'}, {10: 'Respiratory'}, {11: 'Heart'}, {12: 'Sleep'}, {13: 'Fever'}, {14: 'Skin'}]
  },
  {
  'name':'EUPHORBIA POLYCARPA (GOLONDRINA)',
  'link':'http://homeoint.org/books/boericmm/e/euph-po.htm',
  'symptom':[]
  },
  {
  'name':'EUPHRASIA OFFICINALIS (EYEBRIGHT)',
  'link':'http://homeoint.org/books/boericmm/e/euphr.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Rectum'}, {7: 'Female'}, {8: 'Male'}, {9: 'Respiratory'}, {10: 'Skin'}, {11: 'Sleep'}, {12: 'Fever'}]
  },
  {
  'name':'EUPIONUM (EUPION)',
  'link':'http://homeoint.org/books/boericmm/e/eupi.htm',
  'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Extremities'}, {4: 'Back'}]
  },
  {
  'name':'FABIANA IMBRICATA',
  'link':'http://homeoint.org/books/boericmm/f/fab.htm',
  'symptom':[]
  },
  {
  'name':'FAGOPYRUM ESCULENTUM (FAGOPYRUM)',
  'link':'http://homeoint.org/books/boericmm/f/fago.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Eyes'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Heart'}, {7: 'Female'}, {8: 'Extremities'}, {9: 'Skin'}]
  },
  {
  'name':'FEL TAURI',
  'link':'http://homeoint.org/books/boericmm/f/fel.htm',
  'symptom':[{1: 'Stomach'}]
  },
  {
  'name':'FERRUM METALLICUM',
  'link':'http://homeoint.org/books/boericmm/f/ferr.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Stomach'}, {8: 'Stool'}, {9: 'Urine'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Heart'}, {13: 'Extremities'}, {14: 'Skin'}, {15: 'Fever'}]
  },
  {
  'name':'FERRUM IODATUM',
  'link':'http://homeoint.org/books/boericmm/f/ferr-i.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Abdomen'}, {3: 'Throat'}, {4: 'Respiratory'}, {5: 'Urinary'}, {6: 'Female'}]
  },
  {
  'name':'FERRUM MAGNETICUM',
  'link':'http://homeoint.org/books/boericmm/f/ferr-ma.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Abdomen'}]
  },
  {
  'name':'FERRUM PHOSPHORICUM',
  'link':'http://homeoint.org/books/boericmm/f/ferr-p.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Urinary'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Heart'}, {13: 'Extremities'}, {14: 'Sleep'}, {15: 'Fever'}]
  },
  {
  'name':'FERRUM PICRICUM',
  'link':'http://homeoint.org/books/boericmm/f/ferr-pic.htm',
  'symptom':[{1: 'Ears'}, {2: 'Stomach'}, {3: 'Urinary'}, {4: 'Extremities'}]
  },
  {
  'name':'FICUS RELIGIOSA',
  'link':'http://homeoint.org/books/boericmm/f/fic-r.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Respiratory'}]
  },
  {
  'name':'FILIX MAS (ASPIDIUM)',
  'link':'http://homeoint.org/books/boericmm/f/fil.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Abdomen'}]
  },
  {
  'name':'FLUORICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/f/fl-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Male'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Extremities'}, {14: 'Skin'}]
  },
  {
  'name':'FORMICA RUFA (MYRMEXINE)',
  'link':'http://homeoint.org/books/boericmm/f/form.htm',
  'symptom':[{1: 'Head'}, {2: 'Ears'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Urine'}, {6: 'Respiratory'}, {7: 'Sexual'}, {8: 'Extremities'}, {9: 'Skin'}, {9: 'Stool'}]
  },
  {
  'name':'FORMALINUM (FORMALIN)',
  'link':'http://homeoint.org/books/boericmm/f/formal.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Respiratory'}, {8: 'Fever'}, {9: 'Skin'}]
  },
  {
  'name':'FRAGARIA VESCA (FRAGARIA)',
  'link':'http://homeoint.org/books/boericmm/f/frag.htm',
  'symptom':[{1: 'Mouth'}, {2: 'Skin'}]
  },
  {
  'name':'FRANCISCEA UNIFLORA (FRACISCEA)',
  'link':'http://homeoint.org/books/boericmm/f/franc.htm',
  'symptom':[]
  },
  {
  'name':'FRAXINUS AMERICANA',
  'link':'http://homeoint.org/books/boericmm/f/frax.htm',
  'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Abdomen'}]
  },
  {
  'name':'FUCUS VESICULOSUS',
  'link':'http://homeoint.org/books/boericmm/f/fuc.htm',
  'symptom':[]
  },
  {
  'name':'FUCHSINUM (FUCHSINA - MAGENTA)',
  'link':'http://homeoint.org/books/boericmm/f/fuch.htm',
  'symptom':[]
  },
  {
  'name':'FULIGO LIGNI',
  'link':'http://homeoint.org/books/boericmm/f/fuli.htm',
  'symptom':[]
  },
  {
  'name':'GALLICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/g/gal-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Respiratory'}, {4: 'Urinary'}, {5: 'Rectum'}]
  },
  {
  'name':'GALANTHUS NIVALIS',
  'link':'http://homeoint.org/books/boericmm/g/gala.htm',
  'symptom':[]
  },
  {
  'name':'GALIUM APARINE',
  'link':'http://homeoint.org/books/boericmm/g/gali.htm',
  'symptom':[]
  },
  {
  'name':'GAMBOGIA (GAMBOGIA - GARCINIA MORELLA)',
  'link':'http://homeoint.org/books/boericmm/g/gamb.htm',
  'symptom':[{1: 'Head'}, {2: 'Gastric'}]
  },
  {
  'name':'GAULTHERIA PROCUMBENS (GAULTHERIA)',
  'link':'http://homeoint.org/books/boericmm/g/gaul.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Skin'}]
  },
  {
  'name':'GELSEMIUM SEMPERVIRENS (GELSEMIUM)',
  'link':'http://homeoint.org/books/boericmm/g/gels.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Male'}, {13: 'Respiratory'}, {14: 'Heart'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Sleep'}, {18: 'Fever'}, {19: 'Skin'}]
  },
  {
  'name':'GENTIANA LUTEA',
  'link':'http://homeoint.org/books/boericmm/g/gent-l.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Stomach'}]
  },
  {
  'name':'GERANIUM MACULATUM',
  'link':'http://homeoint.org/books/boericmm/g/ger.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Stool'}, {5: 'Female'}]
  },
  {
  'name':'GETTYSBURG WATER',
  'link':'http://homeoint.org/books/boericmm/g/get.htm',
  'symptom':[]
  },
  {
  'name':'GINSENG QUINQUEFOLIUM (GINSENG)',
  'link':'http://homeoint.org/books/boericmm/g/gins.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Abdomen'}, {4: 'Male'}, {5: 'Extremities'}]
  },
  {
  'name':'GLONOINUM',
  'link':'http://homeoint.org/books/boericmm/g/glon.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Mouth'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Female'}, {10: 'Heart'}, {11: 'Extremities'}]
  },
  {
  'name':'GLYCERINUM',
  'link':'http://homeoint.org/books/boericmm/g/glyc.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Chest'}, {4: 'Stomach'}, {5: 'Urinary'}, {6: 'Female'}, {7: 'Extremities'}]
  },
  {
  'name':'GNAPHALIUM POLYCEPHALUM (GNAPHALIUM)',
  'link':'http://homeoint.org/books/boericmm/g/gnaph.htm',
  'symptom':[{1: 'Face'}, {2: 'Abdomen'}, {3: 'Female'}, {4: 'Back'}, {5: 'Extremities'}]
  },
  {
  'name':'GOSSYPIUM HERBACEUM (GOSSYPIUM)',
  'link':'http://homeoint.org/books/boericmm/g/goss.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Female'}]
  },
  {
  'name':'GRANATUM',
  'link':'http://homeoint.org/books/boericmm/g/gran.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Chest'}, {5: 'Skin'}, {6: 'Extremities'}]
  },
  {
  'name':'GRAPHITES',
  'link':'http://homeoint.org/books/boericmm/g/graph.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Female'}, {13: 'Male'}, {14: 'Respiratory'}, {15: 'Extremities'}, {16: 'Skin'}]
  },
  {
  'name':'GRATIOLA OFFICINALIS (GRATIOLA)',
  'link':'http://homeoint.org/books/boericmm/g/grat.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Stool'}, {4: 'Sleep'}, {5: 'Female'}]
  },
  {
  'name':'GRINDELIA ROBUSTA (GRINDELIA)',
  'link':'http://homeoint.org/books/boericmm/g/grin.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Spleen'}, {4: 'Skin'}]
  },
  {
  'name':'GUACO',
  'link':'http://homeoint.org/books/boericmm/g/gua.htm',
  'symptom':[{1: 'Throat'}, {2: 'Female'}, {3: 'Urine'}, {4: 'Back'}, {5: 'Extremities'}]
  },
  {
  'name':'GUAJACUM OFFICINALE (GUAIACUM)',
  'link':'http://homeoint.org/books/boericmm/g/guaj.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Urinary'}, {8: 'Respiratory'}, {9: 'Female'}, {10: 'Back'}, {11: 'Extremities'}]
  },
  {
  'name':'GUARANA (PAULLINIA SORBILIS)',
  'link':'http://homeoint.org/books/boericmm/g/guar.htm',
  'symptom':[{1: 'Head'}, {2: 'Bowels'}, {3: 'Skin'}, {4: 'Sleep'}]
  },
  {
  'name':'GUAREA TRICHILOIDES (GUAREA)',
  'link':'http://homeoint.org/books/boericmm/g/guare.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Head'}, {3: 'Respiratory'}]
  },
  {
  'name':'GYMNOCLADUS CANADENSIS (GYMNOCLADUS)',
  'link':'http://homeoint.org/books/boericmm/g/gymno.htm',
  'symptom':[{1: 'Face'}, {2: 'Throat'}]
  },
  {
  'name':'HAEMATOXYLON CAMPECHIANUM (HAEMATOXYLON)',
  'link':'http://homeoint.org/books/boericmm/h/haem.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Chest'}, {4: 'Female'}]
  },
  {
  'name':'HAMAMELIS VIRGINIANA (HAMAMELIS VIRGINICA)',
  'link':'http://homeoint.org/books/boericmm/h/ham.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Stool'}, {7: 'Urine'}, {8: 'Female'}, {9: 'Male'}, {10: 'Respiratory'}, {11: 'Back'}, {12: 'Extremities'}, {13: 'Skin'}]
  },
  {
  'name':'HECLA LAVA (HEKLA LAVA)',
  'link':'http://homeoint.org/books/boericmm/h/hecla.htm',
  'symptom':[{1: 'Face'}]
  },
  {
  'name':'HEDEOMA PULEGIOIDES (HEDEOMA)',
  'link':'http://homeoint.org/books/boericmm/h/hedeo.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Urine'}, {5: 'Female'}, {6: 'Extremities'}]
  },
  {
  'name':'HELIANTHUS ANNUUS (HELIANTHUS)',
  'link':'http://homeoint.org/books/boericmm/h/helia.htm',
  'symptom':[]
  },
  {
  'name':'HELLEBORUS NIGER (HELLEBORUS)',
  'link':'http://homeoint.org/books/boericmm/h/hell.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Urine'}, {10: 'Respiratory'}, {11: 'Extremities'}, {12: 'Sleep'}, {13: 'Skin'}]
  },
  {
  'name':'HELODERMA',
  'link':'http://homeoint.org/books/boericmm/h/helo.htm',
  'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Mouth'}, {4: 'Chest'}, {5: 'Back'}, {6: 'Extremities'}, {7: 'Fever'}]
  },
  {
  'name':'HELONIAS DIOICA (HELONIAS - CHAMAELIRIUM)',
  'link':'http://homeoint.org/books/boericmm/h/helon.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Back'}, {4: 'Female'}, {5: 'Urine'}, {6: 'Extremities'}]
  },
  {
  'name':'HEPAR SULPHUR (HEPAR SULPHURIS CALCAREUM)',
  'link':'http://homeoint.org/books/boericmm/h/hep.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Extremities'}, {17: 'Skin'}, {18: 'Fever'}]
  },
  {
  'name':'HEPATICA TRILOBA (HEPATICA)',
  'link':'http://homeoint.org/books/boericmm/h/hepat.htm',
  'symptom':[]
  },
  {
  'name':'HERACLEUM SPHONDYLIUM (HERACLEUM - BRANCA URSINA)',
  'link':'http://homeoint.org/books/boericmm/h/hera.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}]
  },
  {
  'name':'HIPPURICUM ACIDUM (HIPPURIC ACID)',
  'link':'http://homeoint.org/books/boericmm/h/hip-ac.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Stomach'}, {4: 'Female'}, {5: 'Extremities'}, {6: 'Skin'}]
  },
  {
  'name':'HIPPOMANES',
  'link':'http://homeoint.org/books/boericmm/h/hipp.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Male'}, {3: 'Extremities'}]
  },
  {
  'name':'HIPPOZAENINUM (HIPPOZAENIUM)',
  'link':'http://homeoint.org/books/boericmm/h/hippoz.htm',
  'symptom':[{1: 'Nose'}, {2: 'Face'}, {3: 'Respiratory'}, {4: 'Skin'}]
  },
  {
  'name':'HOMARUS',
  'link':'http://homeoint.org/books/boericmm/h/hom.htm',
  'symptom':[]
  },
  {
  'name':'HURA BRASILIENSIS',
  'link':'http://homeoint.org/books/boericmm/h/hura.htm',
  'symptom':[]
  },
  {
  'name':'HYDRASTIS CANADENSIS (HYDRASTIS)',
  'link':'http://homeoint.org/books/boericmm/h/hydr.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Back'}, {10: 'Rectum'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Skin'}]
  },
  {
  'name':'HYDROCYANICUM ACIDUM (HYDROCYANIC ACID)',
  'link':'http://homeoint.org/books/boericmm/h/hydr-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Respiratory'}, {6: 'Heart'}, {7: 'Sleep'}]
  },
  {
  'name':'HYDRANGEA ARBORESCENS (HYDRANGEA)',
  'link':'http://homeoint.org/books/boericmm/h/hydrang.htm',
  'symptom':[{1: 'Urine'}]
  },
  {
  'name':'HYDROCOTYLE ASIATICA (HYDROCOTYLE)',
  'link':'http://homeoint.org/books/boericmm/h/hydrc.htm',
  'symptom':[{1: 'Face'}, {2: 'Female'}, {3: 'Skin'}]
  },
  {
  'name':'HYOSCYAMUS NIGER (HYOSCYAMUS)',
  'link':'http://homeoint.org/books/boericmm/h/hyos.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Mouth'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Urine'}, {10: 'Male'}, {11: 'Female'}, {12: 'Chest'}, {13: 'Extremities'}, {14: 'Sleep'}, {15: 'Nerves'}]
  },
  {
  'name':'HYPERICUM PERFORATUM (HYPERICUM)',
  'link':'http://homeoint.org/books/boericmm/h/hyper.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Rectum'}, {5: 'Back'}, {6: 'Extremities'}, {7: 'Respiratory'}, {8: 'Skin'}]
  },
  {
  'name':'IBERIS AMARA (IBERIS)',
  'link':'http://homeoint.org/books/boericmm/i/iber.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Heart'}, {4: 'Extremities'}]
  },
  {
  'name':'ICHTHYOLUM',
  'link':'http://homeoint.org/books/boericmm/i/ichth.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Throat'}, {5: 'Eyes'}, {6: 'Nose'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Urine'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Skin'}, {13: 'Extremities'}]
  },
  {
  'name':'ICTODES FOETIDA (POTHOS FOETIDUS)',
  'link':'http://homeoint.org/books/boericmm/i/ictod.htm',
  'symptom':[{1: 'Head'}, {2: 'Abdomen'}, {3: 'Respiratory'}]
  },
  {
  'name':'IGNATIA AMARA (IGNATIA)',
  'link':'http://homeoint.org/books/boericmm/i/ign.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Rectum'}, {10: 'Urine'}, {11: 'Respiratory'}, {12: 'Female'}, {13: 'Extremities'}, {14: 'Sleep'}, {15: 'Fever'}, {16: 'Skin'}]
  },
  {
  'name':'ILEX AQUIFOLIUM',
  'link':'http://homeoint.org/books/boericmm/i/ilx-a.htm',
  'symptom':[{1: 'Eyes'}]
  },
  {
  'name':'INDIUM METALLICUM (INDIUM)',
  'link':'http://homeoint.org/books/boericmm/i/ind.htm',
  'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Male'}, {4: 'Throat'}, {5: 'Extremities'}]
  },
  {
  'name':'INDIGO TINCTORIA (INDIGO)',
  'link':'http://homeoint.org/books/boericmm/i/indg.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Ears'}, {4: 'Stomach'}, {5: 'Rectum'}, {6: 'Urinary'}, {7: 'Extremities'}, {8: 'Nerves'}]
  },
  {
  'name':'INDOLUM (INDOL)',
  'link':'http://homeoint.org/books/boericmm/i/indol.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Extremities'}, {4: 'Sleep'}]
  },
  {
  'name':'INSULINUM (INSULIN)',
  'link':'http://homeoint.org/books/boericmm/i/ins.htm',
  'symptom':[]
  },
  {
  'name':'INULA HELENIUM (INULA)',
  'link':'http://homeoint.org/books/boericmm/i/inul.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Female'}, {4: 'Rectum'}, {5: 'Urinary'}, {6: 'Extremities'}]
  },
  {
  'name':'IODIUM (IODUM)',
  'link':'http://homeoint.org/books/boericmm/i/iod.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Stool'}, {10: 'Urine'}, {11: 'Male'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Heart'}, {15: 'Extremities'}, {16: 'Skin'}, {17: 'Fever'}]
  },
  {
  'name':'IODOFORMIUM (IODOFORMUM)',
  'link':'http://homeoint.org/books/boericmm/i/iodof.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Chest'}, {4: 'Abdomen'}, {5: 'Extremities'}]
  },
  {
  'name':'IPECACUANHA (IPECA)',
  'link':'http://homeoint.org/books/boericmm/i/ip.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Nose'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stools'}, {9: 'Female'}, {10: 'Respiratory'}, {11: 'Fever'}, {12: 'Sleep'}, {13: 'Extremities'}, {14: 'Skin'}]
  },
  {
  'name':'IRIDIUM METALLICUM (IRIDIUM)',
  'link':'http://homeoint.org/books/boericmm/i/irid-met.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Back and extremities'}]
  },
  {
  'name':'IRIS VERSICOLOR',
  'link':'http://homeoint.org/books/boericmm/i/iris.htm',
  'symptom':[{1: 'Head'}, {2: 'Ears'}, {3: 'Face'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Extremities'}, {8: 'Skin'}]
  },
  {
  'name':'JABORANDI (PILOCARPUS MICROPHYLLUS)',
  'link':'http://homeoint.org/books/boericmm/j/jab.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Ears'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Heart'}, {8: 'Respiratory'}, {9: 'Skin'}]
  },
  {
  'name':'JACARANDA CAROBA (JACARANDA)',
  'link':'http://homeoint.org/books/boericmm/j/jac-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Urinary'}, {4: 'Male'}, {5: 'Extremities'}]
  },
  {
  'name':'JALAPA (EXOGONIUM PURGA)',
  'link':'http://homeoint.org/books/boericmm/j/jal.htm',
  'symptom':[{1: 'Gastro-intestinal'}, {2: 'Extremities'}]
  },
  {
  'name':'JATROPHA CURCAS (JATROPHA)',
  'link':'http://homeoint.org/books/boericmm/j/jatr.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Abdomen'}, {3: 'Stool'}, {4: 'Extremities'}]
  },
  {
  'name':'JOANESIA ASOCA (JONOSIA ASOCA)',
  'link':'http://homeoint.org/books/boericmm/j/joan.htm',
  'symptom':[{1: 'Head'}, {2: 'Gastric'}, {3: 'Female'}, {4: 'Sleep'}, {5: 'Back'}]
  },
  {
  'name':'JUGLANS CINEREA',
  'link':'http://homeoint.org/books/boericmm/j/jug-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Back'}, {6: 'Skin'}, {7: 'Stool'}]
  },
  {
  'name':'JUGLANS REGIA',
  'link':'http://homeoint.org/books/boericmm/j/jug-r.htm',
  'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Skin'}]
  },
  {
  'name':'JUNCUS EFFUSUS',
  'link':'http://homeoint.org/books/boericmm/j/junc-e.htm',
  'symptom':[]
  },
  {
  'name':'JUNIPERUS COMMUNIS',
  'link':'http://homeoint.org/books/boericmm/j/juni-c.htm',
  'symptom':[{1: 'Urinary'}, {2: 'Respiratory'}, {3: 'Head'}, {4: 'Throat'}, {5: 'Respiratory'}]
  },
  {
  'name':'JUSTICIA ADHATODA (JUSTICIA ADHATODA BASAKA)',
  'link':'http://homeoint.org/books/boericmm/j/just.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Respiratory'}]
  },
  {
  'name':'KALIUM ARSENICOSUM (KALI ARSENICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-ar.htm',
  'symptom':[{1: 'Skin'}, {2: 'Female'}]
  },
  {
  'name':'KALIUM BICHROMICUM (KALI BICHROMICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-bi.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urinary'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Skin'}]
  },
  {
  'name':'KALIUM BROMATUM (KALI BROMATUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-br.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Male'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Extremities'}, {11: 'Skin'}, {12: 'Sleep'}]
  },
  {
  'name':'KALIUM CARBONICUM (KALI CARBONICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-c.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Rectum'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Skin'}, {19: 'Sleep'}]
  },
  {
  'name':'KALIUM CHLORICUM (KALI CHLORICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-chl.htm',
  'symptom':[{1: 'Mouth'}, {2: 'Stomach'}, {3: 'Stool'}, {4: 'Urine'}, {5: 'Skin'}]
  },
  {
  'name':'KALIUM CYANATUM (KALI CYANATUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-cy.htm',
  'symptom':[{1: 'Tongue'}, {2: 'Face'}, {3: 'Respiratory'}]
  },
  {
  'name':'KALIUM IODATUM (KALI HYDRIODICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-i.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Eyes'}, {5: 'Ears'}, {6: 'Stomach'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Extremities'}, {10: 'Skin'}]
  },
  {
  'name':'KALIUM MURIATICUM (KALI MURIATICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-m.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Female'}, {12: 'Respiratory Organs'}, {13: 'Back and Extremities'}, {14: 'Skin'}]
  },
  {
  'name':'KALIUM NITRICUM (KALI NITRICUM - NITRUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-n.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Stool'}, {6: 'Female'}, {7: 'Respiratory'}, {8: 'Heart'}, {9: 'Extremities'}]
  },
  {
  'name':'KALIUM PHOSPHORICUM (KALI PHOSPHORICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-p.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Female'}, {12: 'Male'}, {13: 'Urinary Organs'}, {14: 'Respiratory'}, {15: 'Extremities'}, {16: 'Fever'}]
  },
  {
  'name':'KALIUM PERMANGANATUM (KALI PERMANGANICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-per.htm',
  'symptom':[{1: 'Respiratory'}, {2: 'Throat'}]
  },
  {
  'name':'KALIUM SULPHURICUM (KALI SULPHURICUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-s.htm',
  'symptom':[{1: 'Head'}, {2: 'Ears'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Male'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Extremities'}, {11: 'Fever'}, {12: 'Skin'}]
  },
  {
  'name':'KALIUM SILICICUM (KALI SILICATUM)',
  'link':'http://homeoint.org/books/boericmm/k/kali-sil.htm',
  'symptom':[{1: 'Head'}, {2: 'Gastric'}, {3: 'Extremities'}]
  },
  {
  'name':'KALMIA LATIFOLIA',
  'link':'http://homeoint.org/books/boericmm/k/kalm.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Urinary'}, {6: 'Heart'}, {7: 'Female'}, {8: 'Back'}, {9: 'Extremities'}, {10: 'Sleep'}]
  },
  {
  'name':'KAOLINUM (KAOLIN)',
  'link':'http://homeoint.org/books/boericmm/k/kaol.htm',
  'symptom':[{1: 'Nose'}, {2: 'Respiratory'}]
  },
  {
  'name':'KOLA (STERCULIA)',
  'link':'http://homeoint.org/books/boericmm/k/kola.htm',
  'symptom':[]
  },
  {
  'name':'KOUSSO (KOUSSO - BRAYERA)',
  'link':'http://homeoint.org/books/boericmm/k/kou.htm',
  'symptom':[]
  },
  {
  'name':'KREOSOTUM',
  'link':'http://homeoint.org/books/boericmm/k/kreos.htm',
  'symptom':[{1: 'Mental'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Nose'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Urine'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Back'}, {15: 'Extremities'}, {16: 'Skin'}, {17: 'Sleep'}]
  },
  {
  'name':'LACTICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/l/lac-ac.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Throat'}, {3: 'Chest'}, {4: 'Extremities'}, {5: 'Urine'}]
  },
  {
  'name':'LAC CANINUM',
  'link':'http://homeoint.org/books/boericmm/l/lac-c.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Throat'}, {6: 'Female'}, {7: 'Extremities'}, {8: 'Sleep'}]
  },
  {
  'name':'LAC VACCINUM DEFLORATUM (LAC DEFLORATUM)',
  'link':'http://homeoint.org/books/boericmm/l/lac-d.htm',
  'symptom':[{1: 'Head'}, {2: 'Stool'}]
  },
  {
  'name':'LACHESIS MUTUS (LACHESIS)',
  'link':'http://homeoint.org/books/boericmm/l/lach.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Female'}, {13: 'Male'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Sleep'}, {19: 'Fever'}, {20: 'Skin'}]
  },
  {
  'name':'LACHNANTHES TINCTORIA (LACHNANTHES)',
  'link':'http://homeoint.org/books/boericmm/l/lachn.htm',
  'symptom':[{1: 'Head'}, {2: 'Chest'}, {3: 'Back'}, {4: 'Neck'}, {5: 'Skin'}]
  },
  {
  'name':'LACTUCA VIROSA',
  'link':'http://homeoint.org/books/boericmm/l/lact-v.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Abdomen'}, {4: 'Chest'}, {5: 'Female'}, {6: 'Sleep'}, {7: 'Extremities'}]
  },
  {
  'name':'LAMIUM ALBUM (LAMIUM)',
  'link':'http://homeoint.org/books/boericmm/l/lam.htm',
  'symptom':[]
  },
  {
  'name':'LAPIS ALBUS',
  'link':'http://homeoint.org/books/boericmm/l/lap-a.htm',
  'symptom':[{1: 'Ears'}, {2: 'Chest'}, {3: 'Skin'}]
  },
  {
  'name':'LAPPA ARCTIUM',
  'link':'http://homeoint.org/books/boericmm/l/lappa.htm',
  'symptom':[{1: 'Extremities'}, {2: 'Female'}]
  },
  {
  'name':'LATRODECTUS MACTANS',
  'link':'http://homeoint.org/books/boericmm/l/lat-m.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Chest'}, {4: 'Extremities'}, {5: 'Skin'}]
  },
  {
  'name':'LATHYRUS SATIVUS (LATHYRUS)',
  'link':'http://homeoint.org/books/boericmm/l/lath.htm',
  'symptom':[{1: 'Mind'}, {2: 'Mouth'}, {3: 'Extremities'}, {4: 'Urine'}]
  },
  {
  'name':'LAUROCERASUS',
  'link':'http://homeoint.org/books/boericmm/l/laur.htm',
  'symptom':[{1: 'Fever'}, {2: 'Respiratory'}, {3: 'Heart'}, {4: 'Sleep'}, {5: 'Extremities'}]
  },
  {
  'name':'LECITHINUM (LECITHIN)',
  'link':'http://homeoint.org/books/boericmm/l/lec.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Urine'}, {5: 'Sexual'}, {6: 'Extremities'}]
  },
  {
  'name':'LEDUM PALUSTRE (LEDUM)',
  'link':'http://homeoint.org/books/boericmm/l/led.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Face'}, {4: 'Mouth'}, {5: 'Respiratory'}, {6: 'Rectum'}, {7: 'Extremities'}, {8: 'Fever'}, {9: 'Skin'}]
  },
  {
  'name':'LEMNA MINOR',
  'link':'http://homeoint.org/books/boericmm/l/lem-m.htm',
  'symptom':[{1: 'Nose'}, {2: 'Mouth'}, {3: 'Abdomen'}]
  },
  {
  'name':'LEPIDIUM BONARIENSE',
  'link':'http://homeoint.org/books/boericmm/l/lepi.htm',
  'symptom':[]
  },
  {
  'name':'LEPTANDRA VIRGINICA (LEPTANDRA)',
  'link':'http://homeoint.org/books/boericmm/l/lept.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Stool'}]
  },
  {
  'name':'LIATRIS SPICATA (LIATRIS SPICATA - SERRATULA)',
  'link':'http://homeoint.org/books/boericmm/l/liat.htm',
  'symptom':[]
  },
  {
  'name':'LILIUM TIGRINUM',
  'link':'http://homeoint.org/books/boericmm/l/lil-t.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Stool'}, {8: 'Heart'}, {9: 'Female'}, {10: 'Extremities'}, {11: 'Sleep'}, {12: 'Fever'}]
  },
  {
  'name':'LIMULUS CYCLOPS (LIMULUS - XIPHOSURA)',
  'link':'http://homeoint.org/books/boericmm/l/lim.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Abdomen'}, {4: 'Respiratory'}, {5: 'Extremities'}, {6: 'Skin'}]
  },
  {
  'name':'LINARIA VULGARIS (LINARIA)',
  'link':'http://homeoint.org/books/boericmm/l/lina.htm',
  'symptom':[]
  },
  {
  'name':'LINUM USITATISSIMUM',
  'link':'http://homeoint.org/books/boericmm/l/linu-u.htm',
  'symptom':[]
  },
  {
  'name':'LITHIUM CARBONICUM',
  'link':'http://homeoint.org/books/boericmm/l/lith-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Urine'}, {5: 'Respiratory'}, {6: 'Heart'}, {7: 'Urinary'}, {8: 'Extremities'}, {9: 'Skin'}]
  },
  {
  'name':'LOBELIA INFLATA',
  'link':'http://homeoint.org/books/boericmm/l/lob.htm',
  'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Ears'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Respiratory'}, {7: 'Back'}, {8: 'Urinary'}, {9: 'Skin'}]
  },
  {
  'name':'LOBELIA PURPURASCENS',
  'link':'http://homeoint.org/books/boericmm/l/lob-p.htm',
  'symptom':[{1: 'Head'}, {2: 'Chest'}, {3: 'Eyes'}]
  },
  {
  'name':'LOLEUM TEMULENTUM (LOLIUM TUMULENTUM)',
  'link':'http://homeoint.org/books/boericmm/l/lol.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Extremities'}]
  },
  {
  'name':'LONICERA XYLOSTEUM',
  'link':'http://homeoint.org/books/boericmm/l/lon-x.htm',
  'symptom':[{1: 'Head'}, {2: 'Extremities'}]
  },
  {
  'name':'LUPULUS HUMULUS',
  'link':'http://homeoint.org/books/boericmm/l/lup.htm',
  'symptom':[{1: 'Head'}, {2: 'Sleep'}, {3: 'Male'}, {4: 'Skin'}]
  },
  {
  'name':'LYCOPODIUM CLAVATUM (LYCOPODIUM)',
  'link':'http://homeoint.org/books/boericmm/l/lyc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Heart'}, {17: 'Back'}, {18: 'Extremities'}, {19: 'Fever'}, {20: 'Sleep'}, {21: 'Skin'}]
  },
  {
  'name':'LYCOPERSICUM ESCULENTUM (SOLANUM LYCOPERSICUM)',
  'link':'http://homeoint.org/books/boericmm/l/lycpr.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Heart'}, {5: 'Respiratory'}, {6: 'Urine'}, {7: 'Extremities'}]
  },
  {
  'name':'LYCOPUS VIRGINICUS',
  'link':'http://homeoint.org/books/boericmm/l/lycps-v.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Mouth'}, {4: 'Heart'}, {5: 'Respiratory'}, {6: 'Urine'}, {7: 'Rectum'}, {8: 'Sleep'}]
  },
  {
  'name':'LYSSINUM (HYDROPHOBINUM)',
  'link':'http://homeoint.org/books/boericmm/l/lyss.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Male'}, {4: 'Female'}, {5: 'Respiratory'}, {6: 'Stool'}]
  },
  {
  'name':'MAGNESIUM CARBONICUM (MAGNESIA CARBONICA)',
  'link':'http://homeoint.org/books/boericmm/m/mag-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Ears'}, {3: 'Face'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Stool'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Extremities'}, {11: 'Skin'}, {12: 'Fever'}, {13: 'Sleep'}]
  },
  {
  'name':'MAGNESIUM MURIATICUM (MAGNESIA MURIATICA)',
  'link':'http://homeoint.org/books/boericmm/m/mag-m.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urine'}, {7: 'Bowels'}, {8: 'Female'}, {9: 'Heart'}, {10: 'Respiration'}, {11: 'Extremities'}, {12: 'Sleep'}]
  },
  {
  'name':'MAGNESIUM PHOSPHORICUM (MAGNESIA PHOSPHORICA)',
  'link':'http://homeoint.org/books/boericmm/m/mag-p.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Female'}, {10: 'Respiratory'}, {11: 'Heart'}, {12: 'Fever'}, {13: 'Extremities'}]
  },
  {
  'name':'MAGNESIUM SULPHURICUM (MAGNESIA SULPHURICA)',
  'link':'http://homeoint.org/books/boericmm/m/mag-s.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Urinary'}, {4: 'Female'}, {5: 'Neck and Back'}, {6: 'Extremities'}, {7: 'Skin'}, {8: 'Fever'}, {9: 'Physiologic Dosage'}]
  },
  {
  'name':'MAGNOLIA GRANDIFLORA',
  'link':'http://homeoint.org/books/boericmm/m/magn-gr.htm',
  'symptom':[{1: 'Heart'}, {2: 'Extremities'}]
  },
  {
  'name':'MALANDRINUM',
  'link':'http://homeoint.org/books/boericmm/m/maland.htm',
  'symptom':[{1: 'Skin'}]
  },
  {
  'name':'MANCINELLA',
  'link':'http://homeoint.org/books/boericmm/m/manc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Extremities'}, {7: 'Skin'}]
  },
  {
  'name':'MANGANUM ACETICUM',
  'link':'http://homeoint.org/books/boericmm/m/mang-act.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Nose'}, {4: 'Ears'}, {5: 'Alimentary Canal'}, {6: 'Respiratory'}, {7: 'Female'}, {8: 'Extremities'}, {9: 'Sleep'}, {10: 'Skin'}]
  },
  {
  'name':'MANGIFERA INDICA',
  'link':'http://homeoint.org/books/boericmm/m/mangi.htm',
  'symptom':[{1: 'Skin'}]
  },
  {
  'name':'MEDORRHINUM',
  'link':'http://homeoint.org/books/boericmm/m/med.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Female'}, {13: 'Male'}, {14: 'Respiratory'}, {15: 'Extremities'}, {16: 'Skin'}, {17: 'Fever'}, {18: 'Sleep'}]
  },
  {
  'name':'MEDUSA',
  'link':'http://homeoint.org/books/boericmm/m/medus.htm',
  'symptom':[{1: 'Skin'}, {2: 'Female'}]
  },
  {
  'name':'MEL CUM SALE',
  'link':'http://homeoint.org/books/boericmm/m/mel-c-s.htm',
  'symptom':[]
  },
  {
  'name':'MELILOTUS OFFICINALIS (MELILOTUS)',
  'link':'http://homeoint.org/books/boericmm/m/meli.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Stool'}, {6: 'Female'}, {7: 'Respiratory'}, {8: 'Extremities'}]
  },
  {
  'name':'MENISPERMUM CANADENSE (MENISPERMUM)',
  'link':'http://homeoint.org/books/boericmm/m/menis.htm',
  'symptom':[{1: 'Head'}, {2: 'Extremities'}]
  },
  {
  'name':'MENTHA PIPERITA',
  'link':'http://homeoint.org/books/boericmm/m/menth.htm',
  'symptom':[{1: 'Abdomen'}, {2: 'Respiration'}, {3: 'Skin'}]
  },
  {
  'name':'MENTHOLUM',
  'link':'http://homeoint.org/books/boericmm/m/mentho.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Extremities'}]
  },
  {
  'name':'MENYANTHES TRIFOLIATA (MENYANTHES)',
  'link':'http://homeoint.org/books/boericmm/m/meny.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Extremities'}, {5: 'Fever'}]
  },
  {
  'name':'MEPHITIS PUTORIUS (MEPHITIS)',
  'link':'http://homeoint.org/books/boericmm/m/meph.htm',
  'symptom':[{1: 'Mind'}, {2: 'Eyes'}, {3: 'Mouth'}, {4: 'Respiratory'}, {5: 'Sleep'}]
  },
  {
  'name':'MERCURIUS SOLUBILIS (MERCURIUS - HYDRARGYRUM)',
  'link':'http://homeoint.org/books/boericmm/m/merc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Stool'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Skin'}, {19: 'Fever'}]
  },
  {
  'name':'MERCURIUS CORROSIVUS',
  'link':'http://homeoint.org/books/boericmm/m/merc-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Respiratory'}, {12: 'Urine'}, {13: 'Male'}, {14: 'Fever'}]
  },
  {
  'name':'MERCURIUS CYANATUS',
  'link':'http://homeoint.org/books/boericmm/m/merc-cy.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Rectum'}, {6: 'Urinary'}, {7: 'Skin'}]
  },
  {
  'name':'MERCURIUS DULCIS',
  'link':'http://homeoint.org/books/boericmm/m/merc-d.htm',
  'symptom':[{1: 'Ears'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Stool'}, {5: 'Skin'}]
  },
  {
  'name':'MERCURIUS IODATUS FLAVUS',
  'link':'http://homeoint.org/books/boericmm/m/merc-i-f.htm',
  'symptom':[{1: 'Tongue'}, {2: 'Throat'}]
  },
  {
  'name':'MERCURIUS IODATUS RUBER',
  'link':'http://homeoint.org/books/boericmm/m/merc-i-r.htm',
  'symptom':[{1: 'Throat'}, {2: 'Nose'}, {3: 'Mouth'}, {4: 'Throat'}, {5: 'Skin'}]
  },
  {
  'name':'MERCURIUS SULPHURICUS, DRARG, OXYD, SUB-SULPH',
  'link':'http://homeoint.org/books/boericmm/m/merc-sul.htm',
  'symptom':[]
  },
  {
  'name':'MERCURIALIS PERENNIS',
  'link':'http://homeoint.org/books/boericmm/m/merl.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Female'}]
  },
  {
  'name':'METHYLENUM COERULEUM (METHYLENE BLUE)',
  'link':'http://homeoint.org/books/boericmm/m/methyl.htm',
  'symptom':[]
  },
  {
  'name':'MEZEREUM',
  'link':'http://homeoint.org/books/boericmm/m/mez.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Ears'}, {4: 'Eyes'}, {5: 'Face'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Rectum'}, {9: 'Urine'}, {10: 'Female'}, {11: 'Male'}, {12: 'Respiratory'}, {13: 'Extremities'}, {14: 'Skin'}]
  },
  {
  'name':'MICROMERIA DOUGLASII (MICROMERIA)',
  'link':'http://homeoint.org/books/boericmm/m/micr.htm',
  'symptom':[{1: 'Stomach'}]
  },
  {
  'name':'MILLEFOLIUM',
  'link':'http://homeoint.org/books/boericmm/m/mill.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Stool'}, {4: 'Female'}, {5: 'Respiratory'}]
  },
  {
  'name':'MITCHELLA REPENS (MITCHELLA)',
  'link':'http://homeoint.org/books/boericmm/m/mit.htm',
  'symptom':[{1: 'Urinary'}, {2: 'Female'}]
  },
  {
  'name':'MOMORDICA BALSAMICA',
  'link':'http://homeoint.org/books/boericmm/m/mom-b.htm',
  'symptom':[{1: 'Head'}, {2: 'Abdomen'}, {3: 'Female'}]
  },
  {
  'name':'MORPHINUM',
  'link':'http://homeoint.org/books/boericmm/m/morph.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Nose'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Rectum'}, {12: 'Urinary'}, {13: 'Male'}, {14: 'Heart'}, {15: 'Respiratory'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Skin'}, {19: 'Nervous'}, {20: 'Sleep'}, {21: 'Fever'}]
  },
  {
  'name':'MOSCHUS',
  'link':'http://homeoint.org/books/boericmm/m/mosch.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Male'}, {5: 'Female'}, {6: 'Urine'}, {7: 'Respiratory'}, {8: 'Heart'}]
  },
  {
  'name':'MURIATICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/m/mur-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Rectum'}, {9: 'Heart'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Extremities'}, {13: 'Skin'}, {14: 'Fever'}]
  },
  {
  'name':'MUREX PURPUREA (MUREX)',
  'link':'http://homeoint.org/books/boericmm/m/murx.htm',
  'symptom':[{1: 'Mind'}, {2: 'Stomach'}, {3: 'Female'}, {4: 'Urinary'}]
  },
  {
  'name':'MYGALE LASIODORA',
  'link':'http://homeoint.org/books/boericmm/m/mygal.htm',
  'symptom':[{1: 'Mind'}, {2: 'Face'}, {3: 'Stomach'}, {4: 'Male'}, {5: 'Extremities'}]
  },
  {
  'name':'MYOSOTIS SYMPHYTIFOLIA (MYOSOTIS)',
  'link':'http://homeoint.org/books/boericmm/m/myos-s.htm',
  'symptom':[{1: 'Respiratory'}]
  },
  {
  'name':'MYRICA CERIFERA (MYRICA)',
  'link':'http://homeoint.org/books/boericmm/m/myric.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Mouth'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Urinary'}, {10: 'Sleep'}, {11: 'Extremities'}, {12: 'Skin'}]
  },
  {
  'name':'MYRISTICA SEBIFERA',
  'link':'http://homeoint.org/books/boericmm/m/myris.htm',
  'symptom':[]
  },
  {
  'name':'MYRTUS COMMUNIS',
  'link':'http://homeoint.org/books/boericmm/m/myrt-c.htm',
  'symptom':[{1: 'Chest'}]
  },
  {
  'name':'NAJA TRIPUDIANS',
  'link':'http://homeoint.org/books/boericmm/n/naja.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Respiratory'}, {5: 'Heart'}, {6: 'Female'}, {7: 'Sleep'}]
  },
  {
  'name':'NAPHTHALINUM (NAPHTHALINE)',
  'link':'http://homeoint.org/books/boericmm/n/naph.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Urine'}, {4: 'Respiratory'}, {5: 'Skin'}]
  },
  {
  'name':'NARCISSUS PSEUDONARCISSUS (NARCISSUS)',
  'link':'http://homeoint.org/books/boericmm/n/narc-ps.htm',
  'symptom':[{1: 'Skin'}]
  },
  {
  'name':'NATRIUM ARSENICOSUM (NATRUM ARSENICUM)',
  'link':'http://homeoint.org/books/boericmm/n/nat-ar.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Ears'}, {4: 'Throat'}, {5: 'Respiratory'}, {6: 'Extremities'}]
  },
  {
  'name':'NATRIUM CARBONICUM (NATRUM CARBONICUM)',
  'link':'http://homeoint.org/books/boericmm/n/nat-c.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Bowels'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Sleep'}, {10: 'Extremities'}, {11: 'Skin'}]
  },
  {
  'name':'NATRIUM HYPOCHLOROSUM (NATRUM CHLORATUM)',
  'link':'http://homeoint.org/books/boericmm/n/nat-hchl.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Urine'}, {5: 'Female'}, {6: 'Extremities'}]
  },
  {
  'name':'NATRIUM MURIATICUM (NATRUM MURIATICUM)',
  'link':'http://homeoint.org/books/boericmm/n/nat-m.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Rectum'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Extremities'}, {17: 'Sleep'}, {18: 'Skin'}, {19: 'Fever'}]
  },
  {
  'name':'NATRIUM NITRICUM (NATRUM NITRICUM)',
  'link':'http://homeoint.org/books/boericmm/n/nat-n.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Heart'}]
  },
  {
  'name':'NATRIUM PHOSPHORICUM',
  'link':'http://homeoint.org/books/boericmm/n/nat-p.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Male'}, {10: 'Female'}, {11: 'Extremities'}, {12: 'Back'}, {13: 'Skin'}]
  },
  {
  'name':'NATRIUM SULPHURICUM (NATRUM SULPHURICUM)',
  'link':'http://homeoint.org/books/boericmm/n/nat-s.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Eyes'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Male'}, {13: 'Respiratory'}, {14: 'Back'}, {15: 'Extremities'}, {16: 'Skin'}]
  },
  {
  'name':'NATRIUM SALICYLICUM (NATRUM SALICYLICUM)',
  'link':'http://homeoint.org/books/boericmm/n/nat-sal.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Chest'}, {5: 'Skin'}]
  },
  {
  'name':'NICCOLUM METALLICUM (NICCOLUM)',
  'link':'http://homeoint.org/books/boericmm/n/nicc-met.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Throat'}, {4: 'Gastric'}, {5: 'Female'}, {6: 'Respiratory'}, {7: 'Skin'}]
  },
  {
  'name':'NICCOLUM SULPHURICUM',
  'link':'http://homeoint.org/books/boericmm/n/nicc-s.htm',
  'symptom':[{1: 'Head'}, {2: 'Back'}, {3: 'Female'}]
  },
  {
  'name':'NITRICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/n/nit-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Eyes'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Urine'}, {11: 'Male'}, {12: 'Female'}, {13: 'Respiratory'}, {14: 'Extremities'}, {15: 'Skin'}]
  },
  {
  'name':'NITROMURIATICUM ACIDUM (NITRO-MURIATIC ACID)',
  'link':'http://homeoint.org/books/boericmm/n/nit-m-ac.htm',
  'symptom':[{1: 'Mouth'}, {2: 'Stomach'}, {3: 'Stool'}, {4: 'Urine'}]
  },
  {
  'name':'NITRI SPIRITUS DULCIS',
  'link':'http://homeoint.org/books/boericmm/n/nit-s-d.htm',
  'symptom':[{1: 'Face'}, {2: 'Respiratory'}]
  },
  {
  'name':'NUPHAR LUTEUM',
  'link':'http://homeoint.org/books/boericmm/n/nuph.htm',
  'symptom':[{1: 'Male'}, {2: 'Stool'}]
  },
  {
  'name':'NUX MOSCHATA',
  'link':'http://homeoint.org/books/boericmm/n/nux-m.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Heart'}, {11: 'Extremities'}, {12: 'Sleep'}, {13: 'Fever'}]
  },
  {
  'name':'NUX VOMICA',
  'link':'http://homeoint.org/books/boericmm/n/nux-v.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Sleep'}, {18: 'Skin'}, {19: 'Fever'}]
  },
  {
  'name':'NYCTANTHES ARBOR TRISTIS',
  'link':'http://homeoint.org/books/boericmm/n/nyct.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Fever'}]
  },
  {
  'name':'OCIMUM CANUM',
  'link':'http://homeoint.org/books/boericmm/o/oci.htm',
  'symptom':[{1: 'Urine'}, {2: 'Male'}, {3: 'Female'}]
  },
  {
  'name':'OENANTHE CROCATA',
  'link':'http://homeoint.org/books/boericmm/o/oena.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Extremities'}]
  },
  {
  'name':'OLEUM ANIMALE AETHEREUM (OLEUM ANIMALE)',
  'link':'http://homeoint.org/books/boericmm/o/ol-an.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Urine'}, {10: 'Male'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Extremities'}]
  },
  {
  'name':'OLEUM JECORIS ASELLI',
  'link':'http://homeoint.org/books/boericmm/o/ol-j.htm',
  'symptom':[{1: 'Chest'}, {2: 'Extremities'}, {3: 'Fever'}]
  },
  {
  'name':'OLEUM SANTALI',
  'link':'http://homeoint.org/books/boericmm/o/ol-sant.htm',
  'symptom':[{1: 'Male'}, {2: 'Urine'}]
  },
  {
  'name':'OLEANDER (NERIUM ODORUM)',
  'link':'http://homeoint.org/books/boericmm/o/olnd.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Chest'}, {8: 'Extremities'}, {9: 'Skin'}]
  },
  {
  'name':'ONISCUS ASELLUS (MILLEPEDES)',
  'link':'http://homeoint.org/books/boericmm/o/onis.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Urine'}]
  },
  {
  'name':'ONOSMODIUM VIRGINIANUM (ONOSMODIUM)',
  'link':'http://homeoint.org/books/boericmm/o/onos.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Throat'}, {4: 'Abdomen'}, {5: 'Back'}, {6: 'Chest'}, {7: 'Male'}, {8: 'Female'}, {9: 'Extremities'}]
  },
  {
  'name':'OPIUM (PAPAVER SOMNIFERUM)',
  'link':'http://homeoint.org/books/boericmm/o/op.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Urine'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Sleep'}, {13: 'Fever'}, {14: 'Back and Extremities'}, {15: 'Skin'}, {16: 'Non-Homeopathic Preparations and Uses'}]
  },
  {
  'name':'OPERCULINA TURPENTHUM (OPERCULINA TURPETHUM)',
  'link':'http://homeoint.org/books/boericmm/o/oper.htm',
  'symptom':[{1: 'Mind'}, {2: 'Abdomen'}, {3: 'Skin'}]
  },
  {
  'name':'OPUNTIA FICUS (OPUNTIA-FICUS INDICA)',
  'link':'http://homeoint.org/books/boericmm/o/opun-f.htm',
  'symptom':[]
  },
  {
  'name':'OREODAPHNE CALIFORNICA (OREODAPHNE)',
  'link':'http://homeoint.org/books/boericmm/o/oreo.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}]
  },
  {
  'name':'ORIGANUM MAJORANA (ORIGANUM)',
  'link':'http://homeoint.org/books/boericmm/o/orig.htm',
  'symptom':[{1: 'Female'}]
  },
  {
  'name':'ORNITHOGALUM UMBELLATUM',
  'link':'http://homeoint.org/books/boericmm/o/orni.htm',
  'symptom':[{1: 'Stomach'}]
  },
  {
  'name':'OSMIUM',
  'link':'http://homeoint.org/books/boericmm/o/osm.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Eyes'}, {4: 'Respiratory'}, {5: 'Skin'}]
  },
  {
  'name':'OSTRYA VIRGINICA',
  'link':'http://homeoint.org/books/boericmm/o/ost.htm',
  'symptom':[{1: 'Gastric'}]
  },
  {
  'name':'OVININUM (OOPHORINUM)',
  'link':'http://homeoint.org/books/boericmm/o/ov.htm',
  'symptom':[]
  },
  {
  'name':'OVI GALLINAE PELLICULA',
  'link':'http://homeoint.org/books/boericmm/o/ovi-p.htm',
  'symptom':[]
  },
  {
  'name':'OXALICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/o/ox-ac.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Male'}, {6: 'Urinary'}, {7: 'Respiratory'}, {8: 'Heart'}, {9: 'Extremities'}, {10: 'Skin'}]
  },
  {
  'name':'OXYDENDRON ARBOREUM (OXYDENDRON - ANDROMEDA ARBOREA)',
  'link':'http://homeoint.org/books/boericmm/o/oxyd.htm',
  'symptom':[]
  },
  {
  'name':'OXYTROPIS LAMBERTI (OXYTROPIS)',
  'link':'http://homeoint.org/books/boericmm/o/oxyt.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Stomach'}, {5: 'Rectum'}, {6: 'Urine'}, {7: 'Male'}, {8: 'Extremities'}, {9: 'Sleep'}]
  },
  {
  'name':'PAEONIA OFFICINALIS (PAEONIA)',
  'link':'http://homeoint.org/books/boericmm/p/paeon.htm',
  'symptom':[{1: 'Head'}, {2: 'Rectum'}, {3: 'Chest'}, {4: 'Extremities'}, {5: 'Sleep'}, {6: 'Skin'}]
  },
  {
  'name':'PALLADIUM METALLICUM (PALLADIUM)',
  'link':'http://homeoint.org/books/boericmm/p/pall.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Abdomen'}, {4: 'Female'}, {5: 'Extremities'}]
  },
  {
  'name':'PARIS QUADRIFOLIA',
  'link':'http://homeoint.org/books/boericmm/p/par.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Respiratory'}, {7: 'Extremities'}]
  },
  {
  'name':'PARAFFINUM (PARAFFINE)',
  'link':'http://homeoint.org/books/boericmm/p/paraf.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Rectum'}, {7: 'Female'}, {8: 'Extremities'}, {9: 'Skin'}]
  },
  {
  'name':'PAREIRA BRAVA (CHONDRODENDRON TOMENTOSUM)',
  'link':'http://homeoint.org/books/boericmm/p/pareir.htm',
  'symptom':[{1: 'Urinary'}]
  },
  {
  'name':'PARTHENIUM HYSTEROPHORUS (PARTHENIUM - ESCOBA AMARGO)',
  'link':'http://homeoint.org/books/boericmm/p/parth.htm',
  'symptom':[{1: 'Head'}, {2: 'Abdomen'}]
  },
  {
  'name':'PASSIFLORA INCARNATA',
  'link':'http://homeoint.org/books/boericmm/p/passi.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Sleep'}]
  },
  {
  'name':'PENTHORUM SEDOIDES (PENTHORUM)',
  'link':'http://homeoint.org/books/boericmm/p/pen.htm',
  'symptom':[{1: 'Nose'}]
  },
  {
  'name':'PERTUSSINUM (PERTUSSIN)',
  'link':'http://homeoint.org/books/boericmm/p/pert.htm',
  'symptom':[]
  },
  {
  'name':'PETROLEUM',
  'link':'http://homeoint.org/books/boericmm/p/petr.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Male'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Heart'}, {13: 'Back'}, {14: 'Extremities'}, {15: 'Skin'}, {16: 'Fever'}]
  },
  {
  'name':'PETROSELINUM SATIVUM (PETROSELINUM)',
  'link':'http://homeoint.org/books/boericmm/p/petros.htm',
  'symptom':[{1: 'Urinary'}, {2: 'Stomach'}]
  },
  {
  'name':'PHOSPHORICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/p/ph-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Face'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Skin'}, {19: 'Sleep'}, {20: 'Fever'}]
  },
  {
  'name':'PHASEOLUS NANUS (PHASEOLUS)',
  'link':'http://homeoint.org/books/boericmm/p/phase.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Chest'}, {4: 'Urinary'}, {5: 'Heart'}]
  },
  {
  'name':'PHELLANDRIUM AQUATICUM (PHELLANDRIUM)',
  'link':'http://homeoint.org/books/boericmm/p/phel.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Female'}, {4: 'Chest'}, {5: 'Fever'}, {6: 'Extremities'}]
  },
  {
  'name':'PHOSPHORUS',
  'link':'http://homeoint.org/books/boericmm/p/phos.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Sleep'}, {19: 'Fever'}, {20: 'Skin'}]
  },
  {
  'name':'PHYSOSTIGMA VENENOSUM',
  'link':'http://homeoint.org/books/boericmm/p/phys.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Female'}, {8: 'Heart'}, {9: 'Extremities'}]
  },
  {
  'name':'PHYSALIS ALKEKENGI (PHYSALIS - SOLANUM VESICARIUM)',
  'link':'http://homeoint.org/books/boericmm/p/physal.htm',
  'symptom':[{1: 'Head'}, {2: 'Extremities'}, {3: 'Fever'}, {4: 'Respiratory'}, {5: 'Urinary'}, {6: 'Skin'}]
  },
  {
  'name':'PHYTOLACCA DECANDRA (PHYTOLACCA)',
  'link':'http://homeoint.org/books/boericmm/p/phyt.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Abdomen'}, {8: 'Urine'}, {9: 'Female'}, {10: 'Male'}, {11: 'Heart'}, {12: 'Respiratory'}, {13: 'Back'}, {14: 'Extremities'}, {15: 'Fever'}, {16: 'Skin'}]
  },
  {
  'name':'PICRICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/p/pic-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Stomach'}, {5: 'Urinary'}, {6: 'Male'}, {7: 'Female'}, {8: 'Extremities'}]
  },
  {
  'name':'PINUS SILVESTRIS',
  'link':'http://homeoint.org/books/boericmm/p/pin-s.htm',
  'symptom':[{1: 'Extremities'}, {2: 'Skin'}]
  },
  {
  'name':'PIPER METHYSTICUM',
  'link':'http://homeoint.org/books/boericmm/p/pip-m.htm',
  'symptom':[{1: 'Mind'}, {2: 'Urine'}, {3: 'Skin'}, {4: 'Extremities'}]
  },
  {
  'name':'PIPER NIGRUM',
  'link':'http://homeoint.org/books/boericmm/p/pip-n.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Chest'}, {6: 'Urinary'}]
  },
  {
  'name':'PITUITARIA GLANDULA (PITUITARY GLAND)',
  'link':'http://homeoint.org/books/boericmm/p/pitu-gl.htm',
  'symptom':[]
  },
  {
  'name':'PIX LIQUIDA',
  'link':'http://homeoint.org/books/boericmm/p/pix.htm',
  'symptom':[{1: 'Chest'}, {2: 'Skin'}]
  },
  {
  'name':'PLANTAGO MAJOR',
  'link':'http://homeoint.org/books/boericmm/p/plan.htm',
  'symptom':[{1: 'Head'}, {2: 'Ears'}, {3: 'Nose'}, {4: 'Mouth'}, {5: 'Stool'}, {6: 'Urine'}, {7: 'Skin'}]
  },
  {
  'name':'PLATINUM METALLICUM (PLATINA)',
  'link':'http://homeoint.org/books/boericmm/p/plat.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Stool'}, {9: 'Female'}, {10: 'Extremities'}, {11: 'Sleep'}]
  },
  {
  'name':'PLATANUS OCCIDENTALIS',
  'link':'http://homeoint.org/books/boericmm/p/platan.htm',
  'symptom':[]
  },
  {
  'name':'PLUMBUM METALLICUM',
  'link':'http://homeoint.org/books/boericmm/p/plb.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Rectum'}, {9: 'Urinary'}, {10: 'Male'}, {11: 'Female'}, {12: 'Heart'}, {13: 'Back'}, {14: 'Skin'}, {15: 'Extremities'}]
  },
  {
  'name':'PODOPHYLLINUM (PODOPHYLLUM)',
  'link':'http://homeoint.org/books/boericmm/p/podo.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Rectum'}, {7: 'Female'}, {8: 'Extremities'}, {9: 'Fever'}]
  },
  {
  'name':'POLYGONUM HYDROPIPEROIDES (POLYGONUM PUNCTATUM)',
  'link':'http://homeoint.org/books/boericmm/p/polyg-h.htm',
  'symptom':[{1: 'Abdomen'}, {2: 'Rectum'}, {3: 'Urinary'}, {4: 'Female'}, {5: 'Skin'}]
  },
  {
  'name':'POLYPORUS PINICOLA',
  'link':'http://homeoint.org/books/boericmm/p/polyp-p.htm',
  'symptom':[{1: 'Fever'}]
  },
  {
  'name':'POPULUS TREMULOIDES',
  'link':'http://homeoint.org/books/boericmm/p/pop.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Urine'}]
  },
  {
  'name':'POPULUS CANDICANS',
  'link':'http://homeoint.org/books/boericmm/p/pop-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Doses'}]
  },
  {
  'name':'PRIMULA OBCONICA',
  'link':'http://homeoint.org/books/boericmm/p/prim-o.htm',
  'symptom':[{1: 'Face'}, {2: 'Extremities'}, {3: 'Skin'}]
  },
  {
  'name':'PRIMULA VERIS',
  'link':'http://homeoint.org/books/boericmm/p/prim-v.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Urinary'}, {4: 'Extremities'}]
  },
  {
  'name':'PROPYLAMINUM (PROPYLAMIN - TRIMETHYLAMINUM)',
  'link':'http://homeoint.org/books/boericmm/p/prop.htm',
  'symptom':[{1: 'Extremities'}]
  },
  {
  'name':'PRUNUS SPINOSA',
  'link':'http://homeoint.org/books/boericmm/p/prun.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Abdomen'}, {4: 'Rectum'}, {5: 'Urine'}, {6: 'Respiratory'}, {7: 'Skin'}]
  },
  {
  'name':'PSORINUM',
  'link':'http://homeoint.org/books/boericmm/p/psor.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Mouth'}, {5: 'Nose'}, {6: 'Ears'}, {7: 'Face'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Stool'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Extremities'}, {14: 'Skin'}, {15: 'Fever'}, {16: 'Sleep'}]
  },
  {
  'name':'PTELEA TRIFOLIATA (PTELEA)',
  'link':'http://homeoint.org/books/boericmm/p/ptel.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Respiratory'}, {6: 'Sleep'}]
  },
  {
  'name':'PULSATILLA PRATENSIS (PULSATILLA)',
  'link':'http://homeoint.org/books/boericmm/p/puls.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Eyes'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Stool'}, {11: 'Urine'}, {12: 'Female'}, {13: 'Male'}, {14: 'Respiratory'}, {15: 'Sleep'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Skin'}, {19: 'Fever'}]
  },
  {
  'name':'PULEX IRRITANS',
  'link':'http://homeoint.org/books/boericmm/p/pulx.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Urine'}, {5: 'Female'}, {6: 'Back'}, {7: 'Fever'}, {8: 'Skin'}]
  },
  {
  'name':'PYROGENIUM',
  'link':'http://homeoint.org/books/boericmm/p/pyrog.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Stool'}, {7: 'Heart'}, {8: 'Female'}, {9: 'Fever'}, {10: 'Extremities'}, {11: 'Skin'}, {12: 'Sleep'}]
  },
  {
  'name':'QUASSIA AMARA (QUASSIA - PICRAENA EXCELSA)',
  'link':'http://homeoint.org/books/boericmm/q/quas.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Urinary'}, {3: 'Extremities'}]
  },
  {
  'name':'QUEBRACHO (ASPIDOSPERMA)',
  'link':'http://homeoint.org/books/boericmm/q/queb.htm',
  'symptom':[]
  },
  {
  'name':'QUERCUS E GLANDIBUS (QUERCUS GLANDIUM SPIRITUS)',
  'link':'http://homeoint.org/books/boericmm/q/querc.htm',
  'symptom':[]
  },
  {
  'name':'QUILLAYA SAPONARIA',
  'link':'http://homeoint.org/books/boericmm/q/quill.htm',
  'symptom':[]
  },
  {
  'name':'RADIUM BROMATUM (RADIUM)',
  'link':'http://homeoint.org/books/boericmm/r/rad-br.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Female'}, {8: 'Respiratory'}, {9: 'Back'}, {10: 'Extremities'}, {11: 'Skin'}, {12: 'Sleep'}, {13: 'Fever'}]
  },
  {
  'name':'RANUNCULUS BULBOSUS',
  'link':'http://homeoint.org/books/boericmm/r/ran-b.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Chest'}, {4: 'Skin'}]
  },
  {
  'name':'RANUNCULUS SCELERATUS',
  'link':'http://homeoint.org/books/boericmm/r/ran-s.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Abdomen'}, {4: 'Chest'}, {5: 'Skin'}, {6: 'Extremities'}]
  },
  {
  'name':'RAPHANUS SATIVUS (RAPHANUS)',
  'link':'http://homeoint.org/books/boericmm/r/raph.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Female'}, {6: 'Urine'}, {7: 'Chest'}]
  },
  {
  'name':'RATANHIA PERUVIANA (RATANHIA)',
  'link':'http://homeoint.org/books/boericmm/r/rat.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Rectum'}]
  },
  {
  'name':'RHAMNUS CALIFORNICA',
  'link':'http://homeoint.org/books/boericmm/r/rham-cal.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Bowels'}, {8: 'Urinary'}, {9: 'Respiratory'}, {10: 'Heart'}, {11: 'Extremities'}]
  },
  {
  'name':'RHEUM PALMATUM (RHEUM)',
  'link':'http://homeoint.org/books/boericmm/r/rheum.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Rectum'}]
  },
  {
  'name':'RHODODENDRON FERRUGINEUM (RHODODENDRON)',
  'link':'http://homeoint.org/books/boericmm/r/rhod-f.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Face'}, {6: 'Chest'}, {7: 'Male'}, {8: 'Extremities'}]
  },
  {
  'name':'RHODIUM METALLICUM (RHODIUM)',
  'link':'http://homeoint.org/books/boericmm/r/rhodi.htm',
  'symptom':[]
  },
  {
  'name':'RHUS AROMATICA',
  'link':'http://homeoint.org/books/boericmm/r/rhus-a.htm',
  'symptom':[{1: 'Urine'}]
  },
  {
  'name':'RHUS GLABRA',
  'link':'http://homeoint.org/books/boericmm/r/rhus-g.htm',
  'symptom':[{1: 'Mouth'}]
  },
  {
  'name':'RHUS TOXICODENDRON',
  'link':'http://homeoint.org/books/boericmm/r/rhus-t.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Rectum'}, {12: 'Urinary'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Heart'}, {17: 'Back'}, {18: 'Extremities'}, {19: 'Fever'}, {20: 'Skin'}, {21: 'Sleep'}]
  },
  {
  'name':'RHUS VENENATA',
  'link':'http://homeoint.org/books/boericmm/r/rhus-v.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Tongue'}, {4: 'Abdomen'}, {5: 'Extremities'}, {6: 'Skin'}]
  },
  {
  'name':'RICINUS COMMUNIS (RICINUS COMMUNIS - BOFAREIRA)',
  'link':'http://homeoint.org/books/boericmm/r/ric.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Stool'}]
  },
  {
  'name':'ROBINIA PSEUDACACIA (ROBINIA)',
  'link':'http://homeoint.org/books/boericmm/r/rob.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Female'}]
  },
  {
  'name':'ROSA DAMASCENA',
  'link':'http://homeoint.org/books/boericmm/r/ros-d.htm',
  'symptom':[{1: 'Ears'}]
  },
  {
  'name':'RUMEX CRISPUS',
  'link':'http://homeoint.org/books/boericmm/r/rumx.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Respiratory'}, {3: 'Stool'}, {4: 'Skin'}]
  },
  {
  'name':'RUTA GRAVEOLENS',
  'link':'http://homeoint.org/books/boericmm/r/ruta.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Urinary'}, {5: 'Rectum'}, {6: 'Respiratory'}, {7: 'Back'}, {8: 'Extremities'}]
  },
  {
  'name':'SABADILLA',
  'link':'http://homeoint.org/books/boericmm/s/sabad.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Female'}, {7: 'Fever'}, {8: 'Extremities'}, {9: 'Skin'}]
  },
  {
  'name':'SABAL SERRULATA',
  'link':'http://homeoint.org/books/boericmm/s/sabal.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Urinary'}, {4: 'Male'}, {5: 'Female'}, {6: 'Respiratory'}]
  },
  {
  'name':'SABINA',
  'link':'http://homeoint.org/books/boericmm/s/sabin.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Rectum'}, {6: 'Urine'}, {7: 'Male'}, {8: 'Female'}, {9: 'Back'}, {10: 'Extremities'}, {11: 'Skin'}]
  },
  {
  'name':'SACCHARUM OFFICINALE (SUCROSE)',
  'link':'http://homeoint.org/books/boericmm/s/sacch.htm',
  'symptom':[]
  },
  {
  'name':'SALICYLICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/s/sal-ac.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Stools'}, {7: 'Extremities'}, {8: 'Skin'}]
  },
  {
  'name':'SALIX NIGRA',
  'link':'http://homeoint.org/books/boericmm/s/sal-n.htm',
  'symptom':[{1: 'Face'}, {2: 'Female'}, {3: 'Male'}, {4: 'Back'}]
  },
  {
  'name':'SALVIA OFFICINALIS',
  'link':'http://homeoint.org/books/boericmm/s/salv.htm',
  'symptom':[{1: 'Respiratory'}, {2: 'Skin'}]
  },
  {
  'name':'SAMBUCUS NIGRA',
  'link':'http://homeoint.org/books/boericmm/s/samb.htm',
  'symptom':[{1: 'Mind'}, {2: 'Face'}, {3: 'Abdomen'}, {4: 'Urine'}, {5: 'Respiratory'}, {6: 'Extremities'}, {7: 'Fever'}, {8: 'Skin'}]
  },
  {
  'name':'SANGUINARIA CANADENSIS (SANGUINARIA)',
  'link':'http://homeoint.org/books/boericmm/s/sang.htm',
  'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Nose'}, {4: 'Ears'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Extremities'}, {11: 'Skin'}]
  },
  {
  'name':'SANGUINARINUM NITRICUM (SANGUINARINA NITRICA)',
  'link':'http://homeoint.org/books/boericmm/s/sangin-n.htm',
  'symptom':[{1: 'Nose'}, {2: 'Throat'}, {3: 'Mouth'}, {4: 'Respiratory'}]
  },
  {
  'name':'SANICULA AQUA (SANICULA)',
  'link':'http://homeoint.org/books/boericmm/s/sanic.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Mouth'}, {4: 'Stomach'}, {5: 'Rectum'}, {6: 'Female'}, {7: 'Back'}, {8: 'Extremities'}, {9: 'Skin'}]
  },
  {
  'name':'SANTONINUM',
  'link':'http://homeoint.org/books/boericmm/s/santin.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Mouth'}, {4: 'Urinary'}]
  },
  {
  'name':'SAPONARIA OFFICINALIS (SAPONARIA)',
  'link':'http://homeoint.org/books/boericmm/s/sapo.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Stomach'}, {5: 'Heart'}]
  },
  {
  'name':'SARCOLACTICUM ACIDUM (SARCOLACTIC ACID)',
  'link':'http://homeoint.org/books/boericmm/s/sarcol-a.htm',
  'symptom':[{1: 'Throat'}, {2: 'Stomach'}, {3: 'Back and Extremities'}]
  },
  {
  'name':'SAROTHAMNUS SCOPARIUS (SPARTIUM SCOPARIUM - CYSTISUS SCOPARIUS)',
  'link':'http://homeoint.org/books/boericmm/s/saroth.htm',
  'symptom':[{1: 'Heart'}, {2: 'Stomach'}, {3: 'Urinary'}]
  },
  {
  'name':'SARRACENIA PURPUREA',
  'link':'http://homeoint.org/books/boericmm/s/sarr.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Stomach'}, {3: 'Back'}, {4: 'Extremities'}, {5: 'Skin'}]
  },
  {
  'name':'SARSAPARILLA OFFICINALIS (SARSAPARILLA)',
  'link':'http://homeoint.org/books/boericmm/s/sars.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Mouth'}, {4: 'Abdomen'}, {5: 'Urinary'}, {6: 'Male'}, {7: 'Female'}, {8: 'Skin'}, {9: 'Extremities'}]
  },
  {
  'name':'SCROPHULARIA NODOSA',
  'link':'http://homeoint.org/books/boericmm/s/scroph-n.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Abdomen'}, {5: 'Respiratory'}, {6: 'Skin'}, {7: 'Sleep'}]
  },
  {
  'name':'SCUTELLARIA LATERIFOLIA',
  'link':'http://homeoint.org/books/boericmm/s/scut.htm',
  'symptom':[{1: 'Mental'}, {2: 'Head'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Male'}, {6: 'Sleep'}, {7: 'Extremities'}]
  },
  {
  'name':'SECALE CORNUTUM (CLAVICEPS PURPUREA)',
  'link':'http://homeoint.org/books/boericmm/s/sec.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Face'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Stool'}, {7: 'Urine'}, {8: 'Female'}, {9: 'Chest'}, {10: 'Sleep'}, {11: 'Back'}, {12: 'Extremities'}, {13: 'Skin'}, {14: 'Fever'}]
  },
  {
  'name':'SEDUM ACRE',
  'link':'http://homeoint.org/books/boericmm/s/sed-ac.htm',
  'symptom':[]
  },
  {
  'name':'SELENIUM METALLICUM (SELENIUM)',
  'link':'http://homeoint.org/books/boericmm/s/sel.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Urinary'}, {7: 'Male'}, {8: 'Skin'}, {9: 'Extremities'}, {10: 'Sleep'}]
  },
  {
  'name':'SEMPERVIVUM TECTORUM',
  'link':'http://homeoint.org/books/boericmm/s/semp.htm',
  'symptom':[{1: 'Mouth'}, {2: 'Skin'}]
  },
  {
  'name':'SENECIO AUREUS',
  'link':'http://homeoint.org/books/boericmm/s/senec.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Stomach'}, {5: 'Throat'}, {6: 'Abdomen'}, {7: 'Urinary'}, {8: 'Male'}, {9: 'Female'}, {10: 'Respiratory'}, {11: 'Sleep'}]
  },
  {
  'name':'SENEGA',
  'link':'http://homeoint.org/books/boericmm/s/seneg.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Throat'}, {7: 'Respiratory'}, {8: 'Urinary'}]
  },
  {
  'name':'SENNA',
  'link':'http://homeoint.org/books/boericmm/s/senn.htm',
  'symptom':[{1: 'Stool'}, {2: 'Urine'}]
  },
  {
  'name':'SEPIA OFFICINALIS (SEPIA)',
  'link':'http://homeoint.org/books/boericmm/s/sep.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Eyes'}, {5: 'Ears'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Rectum'}, {11: 'Urinary'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Heart'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Fever'}, {19: 'Skin'}]
  },
  {
  'name':'SERUM ANGUILLAE (SERUM ANGUILLAR ICHTHYOTOXIN)',
  'link':'http://homeoint.org/books/boericmm/s/ser-ang.htm',
  'symptom':[]
  },
  {
  'name':'SILICEA TERRA (SILICEA)',
  'link':'http://homeoint.org/books/boericmm/s/sil.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Rectum'}, {12: 'Urinary'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Back'}, {17: 'Sleep'}, {18: 'Extremities'}, {19: 'Skin'}, {20: 'Fever'}]
  },
  {
  'name':'SILPHIUM LACINATUM (SILPHIUM)',
  'link':'http://homeoint.org/books/boericmm/s/silphu.htm',
  'symptom':[{1: 'Respiratory'}]
  },
  {
  'name':'SINAPIS NIGRA (BRASSICA NIGRA)',
  'link':'http://homeoint.org/books/boericmm/s/sin-n.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Respiratory'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Urinary'}, {7: 'Back'}]
  },
  {
  'name':'SKATOLUM (SKATOL)',
  'link':'http://homeoint.org/books/boericmm/s/skat.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Gastric'}, {4: 'Urinary'}, {5: 'Sleep'}]
  },
  {
  'name':'SKOOKUM CHUCK AQUA (SKOOKUM - CHUCK)',
  'link':'http://homeoint.org/books/boericmm/s/skook.htm',
  'symptom':[]
  },
  {
  'name':'SOLANUM NIGRUM',
  'link':'http://homeoint.org/books/boericmm/s/sol-n.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Eyes'}, {4: 'Respiratory'}, {5: 'Fever'}]
  },
  {
  'name':'SOLIDAGO VIRGAUREA (SOLIDAGO VIRGA)',
  'link':'http://homeoint.org/books/boericmm/s/solid.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Nose'}, {3: 'Stomach'}, {4: 'Respiratory'}, {5: 'Female'}, {6: 'Urine'}, {7: 'Back'}, {8: 'Skin'}]
  },
  {
  'name':'SPIGELIA ANTHELMIA (SPIGELIA)',
  'link':'http://homeoint.org/books/boericmm/s/spig.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Face'}, {7: 'Heart'}, {8: 'Rectum'}, {9: 'Fever'}]
  },
  {
  'name':'SPIRANTHES AUTUMNALIS (SPIRANTHES)',
  'link':'http://homeoint.org/books/boericmm/s/spira.htm',
  'symptom':[{1: 'Female'}, {2: 'Extremities'}, {3: 'Fever'}]
  },
  {
  'name':'SPIRAEA ULMARIA',
  'link':'http://homeoint.org/books/boericmm/s/spirae.htm',
  'symptom':[]
  },
  {
  'name':'SPONGIA TOSTA',
  'link':'http://homeoint.org/books/boericmm/s/spong.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Mouth'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Male'}, {9: 'Female'}, {10: 'Respiratory'}, {11: 'Heart'}, {12: 'Skin'}, {13: 'Sleep'}, {14: 'Fever'}]
  },
  {
  'name':'SQUILLA MARITIMA',
  'link':'http://homeoint.org/books/boericmm/s/squil.htm',
  'symptom':[{1: 'Eyes'}, {2: 'Stomach'}, {3: 'Respiratory'}, {4: 'Heart'}, {5: 'Urinary'}, {6: 'Skin'}, {7: 'Extremities'}]
  },
  {
  'name':'STACHYS BETONICA (BETONICA)',
  'link':'http://homeoint.org/books/boericmm/s/stach.htm',
  'symptom':[{1: 'Head'}, {2: 'Abdomen'}, {3: 'Extremities'}]
  },
  {
  'name':'STANNUM METALLICUM (STANNUM)',
  'link':'http://homeoint.org/books/boericmm/s/stann.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Female'}, {7: 'Respiratory'}, {8: 'Sleep'}, {9: 'Extremities'}, {10: 'Fever'}]
  },
  {
  'name':'STAPHYSAGRIA',
  'link':'http://homeoint.org/books/boericmm/s/staph.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Throat'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Male'}, {9: 'Female'}, {10: 'Urinary'}, {11: 'Skin'}, {12: 'Extremities'}]
  },
  {
  'name':'STELLARIA MEDIA',
  'link':'http://homeoint.org/books/boericmm/s/stel.htm',
  'symptom':[{1: 'Head'}, {2: 'Abdomen'}, {3: 'Extremities'}]
  },
  {
  'name':'STICTA PULMONARIA (STICTA)',
  'link':'http://homeoint.org/books/boericmm/s/stict.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Nose'}, {4: 'Female'}, {5: 'Abdomen'}, {6: 'Respiratory'}, {7: 'Extremities'}]
  },
  {
  'name':'STIGMATA MAYDIS (ZEA)',
  'link':'http://homeoint.org/books/boericmm/s/stigm.htm',
  'symptom':[{1: 'Urinary'}]
  },
  {
  'name':'STILLINGIA SILVATICA (STILLINGIA)',
  'link':'http://homeoint.org/books/boericmm/s/still.htm',
  'symptom':[{1: 'Mind'}, {2: 'Respiratory'}, {3: 'Urinary'}, {4: 'Extremities'}, {5: 'Skin'}]
  },
  {
  'name':'STRAMONIUM',
  'link':'http://homeoint.org/books/boericmm/s/stram.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Urine'}, {8: 'Male'}, {9: 'Female'}, {10: 'Sleep'}, {11: 'Extremities'}, {12: 'Skin'}, {13: 'Fever'}]
  },
  {
  'name':'STRONTIUM CARBONICUM (STRONTIA)',
  'link':'http://homeoint.org/books/boericmm/s/stront-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Extremities'}, {6: 'Fever'}, {7: 'Skin'}]
  },
  {
  'name':'STROPHANTHUS HISPIDUS',
  'link':'http://homeoint.org/books/boericmm/s/stroph-h.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Urinary'}, {4: 'Female'}, {5: 'Respiratory'}, {6: 'Heart'}, {7: 'Skin'}, {8: 'Extremities'}]
  },
  {
  'name':'STRYCHNINUM PURUM (STRYCHNINUM)',
  'link':'http://homeoint.org/books/boericmm/s/stry.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Face'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Rectum'}, {9: 'Female'}, {10: 'Respiratory'}, {11: 'Back'}, {12: 'Extremities'}, {13: 'Fever'}, {14: 'Skin'}]
  },
  {
  'name':'STRYCHNINUM PHOSPHORICUM (STRYCHNIA PHOSPHORICA)',
  'link':'http://homeoint.org/books/boericmm/s/stry-p.htm',
  'symptom':[]
  },
  {
  'name':'STRYCHNOS GAULTHERIANA (HOANG NAN)',
  'link':'http://homeoint.org/books/boericmm/s/strych-g.htm',
  'symptom':[]
  },
  {
  'name':'SUCCINUM',
  'link':'http://homeoint.org/books/boericmm/s/succ.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}]
  },
  {
  'name':'SULPHURICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/s/sul-ac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Rectum'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Extremities'}, {11: 'Skin'}]
  },
  {
  'name':'SULPHUR IODATUM',
  'link':'http://homeoint.org/books/boericmm/s/sul-i.htm',
  'symptom':[{1: 'Throat'}, {2: 'Skin'}]
  },
  {
  'name':'SULFONALUM (SULFONAL)',
  'link':'http://homeoint.org/books/boericmm/s/sulfon.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Urinary'}, {4: 'Respiratory'}, {5: 'Extremities'}, {6: 'Sleep'}, {7: 'Skin'}]
  },
  {
  'name':'SULPHUROSUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/s/sulo-ac.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Respiratory'}, {5: 'Female'}]
  },
  {
  'name':'SULPHUR',
  'link':'http://homeoint.org/books/boericmm/s/sulph.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Throat'}, {8: 'Stomach'}, {9: 'Abdomen'}, {10: 'Rectum'}, {11: 'Urine'}, {12: 'Male'}, {13: 'Female'}, {14: 'Respiratory'}, {15: 'Back'}, {16: 'Extremities'}, {17: 'Sleep'}, {18: 'Fever'}, {19: 'Skin'}]
  },
  {
  'name':'SUMBULUS MOSCHATUS (SUMBUL - FERULA SUMBUL)',
  'link':'http://homeoint.org/books/boericmm/s/sumb.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Heart'}, {4: 'Female'}, {5: 'Urinary'}]
  },
  {
  'name':'SYMPHORICARPUS RACEMOSUS (SYMPHORICARPUS RACEMOSA)',
  'link':'http://homeoint.org/books/boericmm/s/sym-r.htm',
  'symptom':[]
  },
  {
  'name':'SYMPHYTUM OFFICINALE (SYMPHYTUM)',
  'link':'http://homeoint.org/books/boericmm/s/symph.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}]
  },
  {
  'name':'SYPHILINUM',
  'link':'http://homeoint.org/books/boericmm/s/syph.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Stomach'}, {8: 'Rectum'}, {9: 'Extremities'}, {10: 'Female'}, {11: 'Respiratory'}, {12: 'Skin'}]
  },
  {
  'name':'SYZYGIUM JAMBOLANUM',
  'link':'http://homeoint.org/books/boericmm/s/syzyg.htm',
  'symptom':[]
  },
  {
  'name':'TABACUM',
  'link':'http://homeoint.org/books/boericmm/t/tab.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Rectum'}, {9: 'Urinary'}, {10: 'Heart'}, {11: 'Respiratory'}, {12: 'Extremities'}, {13: 'Sleep'}, {14: 'Fever'}]
  },
  {
  'name':'TANACETUM VULGARE',
  'link':'http://homeoint.org/books/boericmm/t/tanac.htm',
  'symptom':[{1: 'Head'}, {2: 'Mental'}, {3: 'Ears'}, {4: 'Abdomen'}, {5: 'Female'}, {6: 'Respiratory'}]
  },
  {
  'name':'TANNICUM ACIDUM (TANNIC ACID)',
  'link':'http://homeoint.org/books/boericmm/t/tann-ac.htm',
  'symptom':[]
  },
  {
  'name':'TARAXACUM OFFICINALE',
  'link':'http://homeoint.org/books/boericmm/t/tarax.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Abdomen'}, {4: 'Extremities'}, {5: 'Fever'}, {6: 'Skin'}]
  },
  {
  'name':'TARENTULA HISPANICA',
  'link':'http://homeoint.org/books/boericmm/t/tarent.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Male'}, {4: 'Heart'}, {5: 'Female'}, {6: 'Extremities'}]
  },
  {
  'name':'TARENTULA CUBENSIS',
  'link':'http://homeoint.org/books/boericmm/t/tarent-c.htm',
  'symptom':[{1: 'Head'}, {2: 'Gastric'}, {3: 'Back'}, {4: 'Extremities'}, {5: 'Urinary'}, {6: 'Skin'}, {7: 'Sleep'}]
  },
  {
  'name':'TARTARICUM ACIDUM',
  'link':'http://homeoint.org/books/boericmm/t/tart-ac.htm',
  'symptom':[{1: 'Stomach'}, {2: 'Abdomen'}]
  },
  {
  'name':'TAXUS BACCATA',
  'link':'http://homeoint.org/books/boericmm/t/tax.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Skin'}]
  },
  {
  'name':'TELLURIUM METALLICUM (TELLURIUM)',
  'link':'http://homeoint.org/books/boericmm/t/tell.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Stomach'}, {6: 'Rectum'}, {7: 'Back'}, {8: 'Skin'}]
  },
  {
  'name':'TEREBINTHINIAE OLEUM (TEREBINTHINA)',
  'link':'http://homeoint.org/books/boericmm/t/ter.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Mouth'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Urinary'}, {8: 'Female'}, {9: 'Respiratory'}, {10: 'Heart'}, {11: 'Back'}, {12: 'Skin'}, {13: 'Fever'}]
  },
  {
  'name':'TEUCRIUM MARUM VERUM (TEUCRIUM MARUM)',
  'link':'http://homeoint.org/books/boericmm/t/teucr.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Nose'}, {5: 'Stomach'}, {6: 'Respiratory'}, {7: 'Extremities'}, {8: 'Rectum'}, {9: 'Sleep'}, {10: 'Skin'}]
  },
  {
  'name':'THALLIUM METALLICUM (THALLIUM)',
  'link':'http://homeoint.org/books/boericmm/t/thal-met.htm',
  'symptom':[{1: 'Extremities'}]
  },
  {
  'name':'THEA CHINENSIS (THEA)',
  'link':'http://homeoint.org/books/boericmm/t/thea.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Female'}, {5: 'Heart'}, {6: 'Sleep'}]
  },
  {
  'name':'THERIDION CURASSAVICUM (THERIDION)',
  'link':'http://homeoint.org/books/boericmm/t/ther.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Stomach'}, {6: 'Respiratory'}, {7: 'Back'}, {8: 'Skin'}]
  },
  {
  'name':'THIOSINAMINUM (RHODALLIN)',
  'link':'http://homeoint.org/books/boericmm/t/thiosin.htm',
  'symptom':[{1: 'Ears'}]
  },
  {
  'name':'THLASPI BURSA PASTORIS (CAPSELLA)',
  'link':'http://homeoint.org/books/boericmm/t/thlas.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Male'}, {4: 'Female'}, {5: 'Urinary'}]
  },
  {
  'name':'THUJA OCCIDENTALIS',
  'link':'http://homeoint.org/books/boericmm/t/thuj.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Mouth'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Urinary'}, {10: 'Male'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Extremities'}, {14: 'Skin'}, {15: 'Sleep'}, {16: 'Fever'}]
  },
  {
  'name':'THYMOLUM (THYMOL)',
  'link':'http://homeoint.org/books/boericmm/t/thymol.htm',
  'symptom':[{1: 'Mental'}, {2: 'Back'}, {3: 'Male'}, {4: 'Sleep'}]
  },
  {
  'name':'THYMUS SERPYLLUM',
  'link':'http://homeoint.org/books/boericmm/t/thymu.htm',
  'symptom':[]
  },
  {
  'name':'THYROIDINUM',
  'link':'http://homeoint.org/books/boericmm/t/thyr.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Heart'}, {4: 'Eyes'}, {5: 'Throat'}, {6: 'Stomach'}, {7: 'Urinary'}, {8: 'Extremities'}, {9: 'Respiratory'}, {10: 'Skin'}]
  },
  {
  'name':'TILIA EUROPAEA (TILIA EUROPA)',
  'link':'http://homeoint.org/books/boericmm/t/til.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Female'}, {4: 'Skin'}]
  },
  {
  'name':'TITANIUM METALLICUM (TITANIUM)',
  'link':'http://homeoint.org/books/boericmm/t/titan.htm',
  'symptom':[]
  },
  {
  'name':'TONGO-DIPTERIX ODORATA (TONGO - DIPTRIX ODORATA)',
  'link':'http://homeoint.org/books/boericmm/t/tong.htm',
  'symptom':[{1: 'Head'}, {2: 'Extremities'}]
  },
  {
  'name':'TORULA CEREVISIAE',
  'link':'http://homeoint.org/books/boericmm/t/tor.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Extremities'}, {4: 'Sleep'}, {5: 'Skin'}]
  },
  {
  'name':'TRIBULUS TERRESTRIS',
  'link':'http://homeoint.org/books/boericmm/t/trib.htm',
  'symptom':[]
  },
  {
  'name':'TRIFOLIUM PRATENSE',
  'link':'http://homeoint.org/books/boericmm/t/trif-p.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Respiratory'}, {4: 'Back'}, {5: 'Extremities'}]
  },
  {
  'name':'TRILLIUM PENDULUM',
  'link':'http://homeoint.org/books/boericmm/t/tril-p.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Stomach'}, {4: 'Rectum'}, {5: 'Female'}, {6: 'Respiratory'}]
  },
  {
  'name':'TRINITROTOLUENUM (TRINITROTOLUENE)',
  'link':'http://homeoint.org/books/boericmm/t/trinit.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Gastro-Intestinal'}, {4: 'Cardio-Vascular'}, {5: 'Urinary'}, {6: 'Skin'}]
  },
  {
  'name':'TRIOSTEUM PERFOLIATUM',
  'link':'http://homeoint.org/books/boericmm/t/trios.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Extremities'}, {4: 'Skin'}]
  },
  {
  'name':'TRITICUM REPENS-AGROPYRON REPENS (TRITICUM)',
  'link':'http://homeoint.org/books/boericmm/t/tritic.htm',
  'symptom':[{1: 'Nose'}, {2: 'Urinary'}]
  },
  {
  'name':'TROMBIDIUM MUSCAE DOMESTICAE (TROMBIDIUM)',
  'link':'http://homeoint.org/books/boericmm/t/trom.htm',
  'symptom':[{1: 'Abdomen'}]
  },
  {
  'name':'TUBERCULINUM',
  'link':'http://homeoint.org/books/boericmm/t/tub.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Female'}, {7: 'Respiratory'}, {8: 'Back'}, {9: 'Skin'}, {10: 'Sleep'}, {11: 'Fever'}]
  },
  {
  'name':'TUSSILAGO PETASITES',
  'link':'http://homeoint.org/books/boericmm/t/tus-p.htm',
  'symptom':[{1: 'Urinary'}, {2: 'Male'}]
  },
  {
  'name':'UPAS TIEUT (UPAS TIENTE)',
  'link':'http://homeoint.org/books/boericmm/u/upa.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Mouth'}, {4: 'Male'}, {5: 'Chest'}, {6: 'Skin'}]
  },
  {
  'name':'URANIUM NITRICUM',
  'link':'http://homeoint.org/books/boericmm/u/uran-n.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Stomach'}, {4: 'Urinary'}, {5: 'Male'}]
  },
  {
  'name':'UREA PURA (UREA)',
  'link':'http://homeoint.org/books/boericmm/u/urea.htm',
  'symptom':[]
  },
  {
  'name':'URTICA URENS',
  'link':'http://homeoint.org/books/boericmm/u/urt-u.htm',
  'symptom':[{1: 'Head'}, {2: 'Abdomen'}, {3: 'Male'}, {4: 'Female'}, {5: 'Extremities'}, {6: 'Skin'}, {7: 'Fever'}]
  },
  {
  'name':'USNEA BARBATA',
  'link':'http://homeoint.org/books/boericmm/u/usn.htm',
  'symptom':[{1: 'Head'}]
  },
  {
  'name':'USTILAGO MAYDIS',
  'link':'http://homeoint.org/books/boericmm/u/ust.htm',
  'symptom':[{1: 'Head'}, {2: 'Male'}, {3: 'Female'}, {4: 'Fever'}, {5: 'Extremities'}, {6: 'Skin'}]
  },
  {
  'name':'UVA URSI',
  'link':'http://homeoint.org/books/boericmm/u/uva.htm',
  'symptom':[{1: 'Urinary'}]
  },
  {
  'name':'VACCININUM',
  'link':'http://homeoint.org/books/boericmm/v/vac.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Skin'}]
  },
  {
  'name':'VALERIANA OFFICINALIS (VALERIANA)',
  'link':'http://homeoint.org/books/boericmm/v/valer.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Ears'}, {4: 'Throat'}, {5: 'Stomach'}, {6: 'Abdomen'}, {7: 'Respiratory'}, {8: 'Female'}, {9: 'Extremities'}, {10: 'Sleep'}, {11: 'Fever'}]
  },
  {
  'name':'VANADIUM METALLICUM (VANADIUM)',
  'link':'http://homeoint.org/books/boericmm/v/vanad.htm',
  'symptom':[]
  },
  {
  'name':'VANILLA AROMATICA (VANILLA - PLANIFOLIA)',
  'link':'http://homeoint.org/books/boericmm/v/vanil.htm',
  'symptom':[]
  },
  {
  'name':'VARIOLINUM',
  'link':'http://homeoint.org/books/boericmm/v/vario.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Fever'}, {4: 'Skin'}]
  },
  {
  'name':'VERATRUM ALBUM',
  'link':'http://homeoint.org/books/boericmm/v/verat.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Face'}, {5: 'Mouth'}, {6: 'Stomach'}, {7: 'Abdomen'}, {8: 'Rectum'}, {9: 'Respiratory'}, {10: 'Heart'}, {11: 'Female'}, {12: 'Extremities'}, {13: 'Skin'}, {14: 'Fever'}]
  },
  {
  'name':'VERATRUM VIRIDE',
  'link':'http://homeoint.org/books/boericmm/v/verat-v.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Tongue'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Respiratory'}, {7: 'Urine'}, {8: 'Female'}, {9: 'Heart'}, {10: 'Extremities'}, {11: 'Skin'}, {12: 'Fever'}]
  },
  {
  'name':'VERBASCUM THAPSUS (VERBASCUM)',
  'link':'http://homeoint.org/books/boericmm/v/verb.htm',
  'symptom':[{1: 'Face'}, {2: 'Ears'}, {3: 'Abdomen'}, {4: 'Rectum'}, {5: 'Respiratory'}, {6: 'Urinary'}, {7: 'Extremities'}]
  },
  {
  'name':'VERBENA URTICAEFOLIA (VERBENA)',
  'link':'http://homeoint.org/books/boericmm/v/verbe-u.htm',
  'symptom':[]
  },
  {
  'name':'VESPA CRABRO',
  'link':'http://homeoint.org/books/boericmm/v/vesp.htm',
  'symptom':[{1: 'Face'}, {2: 'Urinary'}, {3: 'Female'}, {4: 'Skin'}]
  },
  {
  'name':'VIBURNUM OPULUS',
  'link':'http://homeoint.org/books/boericmm/v/vib.htm',
  'symptom':[{1: 'Head'}, {2: 'Stomach'}, {3: 'Abdomen'}, {4: 'Female'}, {5: 'Urinary'}, {6: 'Rectum'}, {7: 'Extremities'}]
  },
  {
  'name':'VINCA MINOR',
  'link':'http://homeoint.org/books/boericmm/v/vinc.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Throat'}, {4: 'Female'}, {5: 'Skin'}]
  },
  {
  'name':'VIOLA ODORATA',
  'link':'http://homeoint.org/books/boericmm/v/viol-o.htm',
  'symptom':[{1: 'Head'}, {2: 'Eyes'}, {3: 'Ears'}, {4: 'Respiratory'}, {5: 'Extremities'}, {6: 'Urinary'}]
  },
  {
  'name':'VIOLA TRICOLOR',
  'link':'http://homeoint.org/books/boericmm/v/viol-t.htm',
  'symptom':[{1: 'Head'}, {2: 'Throat'}, {3: 'Urinary'}, {4: 'Male'}, {5: 'Skin'}]
  },
  {
  'name':'VIPERA BERUS (VIPERA)',
  'link':'http://homeoint.org/books/boericmm/v/vip.htm',
  'symptom':[{1: 'Face'}, {2: 'Liver'}, {3: 'Extremities'}, {4: 'Skin'}]
  },
  {
  'name':'VISCUM ALBUM',
  'link':'http://homeoint.org/books/boericmm/v/visc.htm',
  'symptom':[{1: 'Head'}, {2: 'Respiratory'}, {3: 'Female'}, {4: 'Heart'}, {5: 'Extremities'}]
  },
  {
  'name':'WYETHIA HELENOIDES (WYETHIA)',
  'link':'http://homeoint.org/books/boericmm/w/wye.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Throat'}, {4: 'Stomach'}, {5: 'Abdomen'}, {6: 'Stool'}, {7: 'Respiratory'}, {8: 'Female'}, {9: 'Extremities'}, {10: 'Fever'}]
  },
  {
  'name':'X-RAY',
  'link':'http://homeoint.org/books/boericmm/x/x-ray.htm',
  'symptom':[{1: 'Head'}, {2: 'Mouth'}, {3: 'Male'}, {4: 'Extremities'}, {5: 'Skin'}]
  },
  {
  'name':'XANTOXYLUM FRAXINEUM (XANTHOXYLUM)',
  'link':'http://homeoint.org/books/boericmm/x/xan.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Face'}, {4: 'Abdomen'}, {5: 'Female'}, {6: 'Respiratory'}, {7: 'Extremities'}, {8: 'Sleep'}]
  },
  {
  'name':'XEROPHYLLUM',
  'link':'http://homeoint.org/books/boericmm/x/xero.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Nose'}, {5: 'Face'}, {6: 'Throat'}, {7: 'Stomach'}, {8: 'Abdomen'}, {9: 'Rectum'}, {10: 'Urine'}, {11: 'Female'}, {12: 'Respiratory'}, {13: 'Back'}, {14: 'Extremities'}, {15: 'Skin'}]
  },
  {
  'name':'YOHIMBINUM',
  'link':'http://homeoint.org/books/boericmm/y/yohim.htm',
  'symptom':[{1: 'Head'}, {2: 'Sexual'}, {3: 'Fever'}, {4: 'Sleep'}]
  },
  {
  'name':'YUCCA FILAMENTOSA',
  'link':'http://homeoint.org/books/boericmm/y/yuc.htm',
  'symptom':[{1: 'Head'}, {2: 'Face'}, {3: 'Mouth'}, {4: 'Throat'}, {5: 'Abdomen'}, {6: 'Male'}, {7: 'Skin'}]
  },
  {
  'name':'ZINCUM METALLICUM (ZINC)',
  'link':'http://homeoint.org/books/boericmm/z/zinc.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Eyes'}, {4: 'Ears'}, {5: 'Nose'}, {6: 'Face'}, {7: 'Mouth'}, {8: 'Throat'}, {9: 'Stomach'}, {10: 'Abdomen'}, {11: 'Urine'}, {12: 'Rectum'}, {13: 'Male'}, {14: 'Female'}, {15: 'Respiratory'}, {16: 'Back'}, {17: 'Extremities'}, {18: 'Sleep'}, {19: 'Skin'}, {20: 'Fever'}]
  },
  {
  'name':'ZINCUM VALERIANICUM (ZINCUM VALERIANUM)',
  'link':'http://homeoint.org/books/boericmm/z/zinc-val.htm',
  'symptom':[{1: 'Head'}, {2: 'Female'}, {3: 'Extremities'}]
  },
  {
  'name':'ZINGIBER OFFICINALE (ZINGIBER)',
  'link':'http://homeoint.org/books/boericmm/z/zing.htm',
  'symptom':[{1: 'Head'}, {2: 'Nose'}, {3: 'Stomach'}, {4: 'Abdomen'}, {5: 'Urinary'}, {6: 'Male'}, {7: 'Respiratory'}, {8: 'Extremities'}]
  },
  {
  'name':'ZIZIA AUREA (THASPIUM AUREUM - ZIZIA)',
  'link':'http://homeoint.org/books/boericmm/z/ziz.htm',
  'symptom':[{1: 'Mind'}, {2: 'Head'}, {3: 'Male'}, {4: 'Female'}, {5: 'Respiratory'}, {6: 'Extremities'}]
  }
];
  }]);
