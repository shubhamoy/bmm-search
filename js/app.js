var boerickeSearch = angular.module('boerickeSearch', []);

boerickeSearch.controller('MedicineSymptomController',
  ['$scope', function($scope){
    $scope.search = [];
    $scope.LinkMedicineSympton = [
  		{
  		'name':'ABIES CANADENSIS-PINUS CANADENSIS',
  		'link':'http://homeoint.org/books/boericmm/a/abies-c.htm',
  		'symptom':['Female', 'Fever', 'Head', 'Stomach']
  		},
  		{
  		'name':'ABIES NIGRA',
  		'link':'http://homeoint.org/books/boericmm/a/abies-n.htm',
  		'symptom':['Head', 'Stomach', 'Chest', 'Back', 'Sleep', 'Fever']
  		},
      {
      'name':'ABRUS PRECATORIUS - JEQUIRITY (JEQUIRITY - ARBRUS PRECATORIUS)',
      'link':'http://homeoint.org/books/boericmm/a/abr.htm',
      'symptom':[ 'Eyes']
      },
      {
      'name':'ABROTANUM',
      'link':'http://homeoint.org/books/boericmm/a/abrot.htm',
      'symptom':[ 'Mind', 'Face', 'Stomach', 'Abdomen', 'Respiratory', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'ABSINTHIUM',
      'link':'http://homeoint.org/books/boericmm/a/absin.htm',
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Throat', 'Stomach', 'Urine', 'Sexual', 'Chest', 'Extremities']
      },
      {
      'name':'ACALYPHA INDICA',
      'link':'http://homeoint.org/books/boericmm/a/acal.htm',
      'symptom':[ 'Chest', 'Abdomen', 'Skin']
      },
      {
      'name':'ACETICUM ACIDUM (ACETIC ACID)',
      'link':'http://homeoint.org/books/boericmm/a/acet-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Stomach', 'Abdomen', 'Urine', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'ACETANILIDUM',
      'link':'http://homeoint.org/books/boericmm/a/acetan.htm',
      'symptom':[ 'Head', 'Eyes', 'Heart']
      },
      {
      'name':'ACONITUM NAPELLUS',
      'link':'http://homeoint.org/books/boericmm/a/acon.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep', 'Skin', 'Fever']
      },
      {
      'name':'ACTAEA SPICATA (ACTEA SPICATA)',
      'link':'http://homeoint.org/books/boericmm/a/act-sp.htm',
      'symptom':[ 'Head', 'Face', 'Stomach', 'Abdomen', 'Respiratory', 'Extremities']
      },
      {
      'name':'ADONIS VERNALIS',
      'link':'http://homeoint.org/books/boericmm/a/adon.htm',
      'symptom':[ 'Head', 'Mouth', 'Heart', 'Stomach', 'Urine', 'Respiratory', 'Sleep', 'Extremities']
      },
      {
      'name':'ADRENALINUM (ADRENALIN)',
      'link':'http://homeoint.org/books/boericmm/a/adren.htm',
      'symptom':[]
      },
      {
      'name':'AESCULUS HIPPOCASTANUM',
      'link':'http://homeoint.org/books/boericmm/a/aesc.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Male', 'Female', 'Chest', 'Extremities', 'Back', 'Fever']
      },
      {
      'name':'AETHUSA CYNAPIUM',
      'link':'http://homeoint.org/books/boericmm/a/aeth.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urinary', 'Female', 'Respiratory', 'Heart', 'Back and Extremities', 'Skin', 'Fever', 'Sleep']
      },
      {
      'name':'AETHIOPS MINERALIS (AETHIOPS MERCURIALIS-MINERALIS)',
      'link':'http://homeoint.org/books/boericmm/a/aethi-m.htm',
      'symptom':[ 'Skin']
      },
      {
      'name':'AGARICUS MUSCARIUS (AGARICUS MUSCARIUS-AMANITA)',
      'link':'http://homeoint.org/books/boericmm/a/agar.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Urinary', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'AGAVE AMERICANA',
      'link':'http://homeoint.org/books/boericmm/a/agav-a.htm',
      'symptom':[]
      },
      {
      'name':'AGNUS CASTUS',
      'link':'http://homeoint.org/books/boericmm/a/agn.htm',
      'symptom':[ 'Mind', 'Eyes', 'Nose', 'Abdomen', 'Male', 'Female']
      },
      {
      'name':'AGRAPHIS NUTANS',
      'link':'http://homeoint.org/books/boericmm/a/agra.htm',
      'symptom':[]
      },
      {
      'name':'AILANTHUS GLANDULOSA',
      'link':'http://homeoint.org/books/boericmm/a/ail.htm',
      'symptom':[ 'Head', 'Throat', 'Respiratory', 'Sleep', 'Skin']
      },
      {
      'name':'ALETRIS FARINOSA',
      'link':'http://homeoint.org/books/boericmm/a/alet.htm',
      'symptom':[ 'Mind', 'Mouth', 'Stomach', 'Rectum', 'Female']
      },
      {
      'name':'ALFALFA',
      'link':'http://homeoint.org/books/boericmm/a/alf.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Stomach', 'Abdomen', 'Urine', 'Sleep']
      },
      {
      'name':'ALLIUM CEPA',
      'link':'http://homeoint.org/books/boericmm/a/all-c.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Respiratory', 'Extremities', 'Sleep']
      },
      {
      'name':'ALLIUM SATIVUM',
      'link':'http://homeoint.org/books/boericmm/a/all-s.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Respiratory', 'Female']
      },
      {
      'name':'ALNUS RUBRA (ALNUS)',
      'link':'http://homeoint.org/books/boericmm/a/aln.htm',
      'symptom':[ 'Female', 'Skin']
      },
      {
      'name':'ALOE SOCOTRINA (ALOE)',
      'link':'http://homeoint.org/books/boericmm/a/aloe.htm',
      'symptom':[ 'Head', 'Eyes', 'Face', 'Ears', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Female', 'Respiratory', 'Back', 'Extremities']
      },
      {
      'name':'ALSTONIA SCHOLARIS',
      'link':'http://homeoint.org/books/boericmm/a/alst-s.htm',
      'symptom':[ 'Abdomen']
      },
      {
      'name':'ALUMINA',
      'link':'http://homeoint.org/books/boericmm/a/alum.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'ALUMINA SILICATA',
      'link':'http://homeoint.org/books/boericmm/a/alum-sil.htm',
      'symptom':[ 'Head', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'ALUMEN',
      'link':'http://homeoint.org/books/boericmm/a/alumn.htm',
      'symptom':[ 'Head', 'Throat', 'Heart', 'Rectum', 'Female', 'Respiratory', 'Skin', 'Extremities']
      },
      {
      'name':'AMMONIUM BENZOICUM',
      'link':'http://homeoint.org/books/boericmm/a/am-be.htm',
      'symptom':[ 'Head', 'Face', 'Urine', 'Back']
      },
      {
      'name':'AMMONIUM BROMATUM',
      'link':'http://homeoint.org/books/boericmm/a/am-br.htm',
      'symptom':[ 'Head', 'Eyes', 'Throat', 'Respiratory']
      },
      {
      'name':'AMMONIUM CARBONICUM (AMMONIUM CARB)',
      'link':'http://homeoint.org/books/boericmm/a/am-c.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'AMMONIUM CAUSTICUM',
      'link':'http://homeoint.org/books/boericmm/a/am-caust.htm',
      'symptom':[ 'Respiratory', 'Extremities']
      },
      {
      'name':'AMMONIUM IODATUM (AMMONIUM JODATUM)',
      'link':'http://homeoint.org/books/boericmm/a/am-i.htm',
      'symptom':[ 'Head']
      },
      {
      'name':'AMMONIUM MURIATICUM',
      'link':'http://homeoint.org/books/boericmm/a/am-m.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'AMMONIUM PHOSPHORICUM',
      'link':'http://homeoint.org/books/boericmm/a/am-p.htm',
      'symptom':[ 'Head', 'Respiratory', 'Urine']
      },
      {
      'name':'AMMONIUM PICRICUM (AMMONIUM PICRATUM)',
      'link':'http://homeoint.org/books/boericmm/a/am-pic.htm',
      'symptom':[ 'Head']
      },
      {
      'name':'AMMONIUM VALERIANICUM',
      'link':'http://homeoint.org/books/boericmm/a/am-val.htm',
      'symptom':[ 'Heart']
      },
      {
      'name':'AMBRA GRISEA',
      'link':'http://homeoint.org/books/boericmm/a/ambr.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Urinary', 'Female', 'Male', 'Respiratory', 'Heart', 'Sleep', 'Skin', 'Extremities']
      },
      {
      'name':'AMBROSIA ARTEMISIAEFOLIA (AMBROSIA)',
      'link':'http://homeoint.org/books/boericmm/a/ambro.htm',
      'symptom':[ 'Nose', 'Eyes']
      },
      {
      'name':'AMYGDALUS PERSICA',
      'link':'http://homeoint.org/books/boericmm/a/amgd-p.htm',
      'symptom':[]
      },
      {
      'name':'AMYLENUM NITROSUM (AMYL NITROSUM)',
      'link':'http://homeoint.org/books/boericmm/a/aml-ns.htm',
      'symptom':[ 'Head', 'Throat', 'Chest', 'Female', 'Fever', 'Extremities']
      },
      {
      'name':'AMMONIACUM GUMMI (AMMONIACUM-DOREMA)',
      'link':'http://homeoint.org/books/boericmm/a/ammc.htm',
      'symptom':[ 'Head', 'Eyes', 'Throat', 'Respiratory']
      },
      {
      'name':'AMPELOPSIS QUINQUEFOLIA (AMPELOPSIS)',
      'link':'http://homeoint.org/books/boericmm/a/ampe-qu.htm',
      'symptom':[]
      },
      {
      'name':'ANACARDIUM ORIENTALE (ANACARDIUM)',
      'link':'http://homeoint.org/books/boericmm/a/anac.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'ANAGALLIS ARVENSIS (ANAGALLIS)',
      'link':'http://homeoint.org/books/boericmm/a/anag.htm',
      'symptom':[ 'Head', 'Extremities', 'Urine', 'Skin']
      },
      {
      'name':'ANANTHERUM MURICATUM (ANATHERUM)',
      'link':'http://homeoint.org/books/boericmm/a/anan.htm',
      'symptom':[ 'Head', 'Urine', 'Sexual', 'Skin']
      },
      {
      'name':'ANEMOPSIS CALIFORNICA',
      'link':'http://homeoint.org/books/boericmm/a/anemps.htm',
      'symptom':[]
      },
      {
      'name':'ANGUSTURA VERA',
      'link':'http://homeoint.org/books/boericmm/a/ang.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'ANHALONIUM LEWINII (ANHALONIUM)',
      'link':'http://homeoint.org/books/boericmm/a/anh.htm',
      'symptom':[ 'Mind', 'Head']
      },
      {
      'name':'ANILINUM',
      'link':'http://homeoint.org/books/boericmm/a/anil.htm',
      'symptom':[]
      },
      {
      'name':'ANISUM STELLATUM (ILLICIUM)',
      'link':'http://homeoint.org/books/boericmm/a/anis.htm',
      'symptom':[ 'Nose', 'Respiratory']
      },
      {
      'name':'ANTIMONIUM ARSENICOSUM',
      'link':'http://homeoint.org/books/boericmm/a/ant-ar.htm',
      'symptom':[]
      },
      {
      'name':'ANTIMONIUM CRUDUM',
      'link':'http://homeoint.org/books/boericmm/a/ant-c.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'ANTIMONIUM SULPHURATUM AURATUM',
      'link':'http://homeoint.org/books/boericmm/a/ant-saur.htm',
      'symptom':[ 'Nose and throat', 'Respiratory', 'Skin']
      },
      {
      'name':'ANTIMONIUM TARTARICUM',
      'link':'http://homeoint.org/books/boericmm/a/ant-t.htm',
      'symptom':[ 'Mind and Head', 'Tongue', 'Face', 'Stomach', 'Abdomen', 'Urinary', 'Respiratory', 'Back', 'Skin', 'Fever', 'Sleep']
      },
      {
      'name':'ANTHEMIS NOBILIS',
      'link':'http://homeoint.org/books/boericmm/a/anth.htm',
      'symptom':[ 'Respiratory', 'Abdomen', 'Urinary', 'Skin']
      },
      {
      'name':'ANTHRACINUM',
      'link':'http://homeoint.org/books/boericmm/a/anthraci.htm',
      'symptom':[ 'Tissues']
      },
      {
      'name':'ANTHRACOKALI (ANTHRAKOKALI)',
      'link':'http://homeoint.org/books/boericmm/a/anthraco.htm',
      'symptom':[]
      },
      {
      'name':'ANTIPYRINUM (ANTIPYRINE)',
      'link':'http://homeoint.org/books/boericmm/a/antip.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Face', 'Mouth', 'Throat', 'Stomach', 'Urine', 'Female', 'Respiratory', 'Heart', 'Nervous System', 'Skin']
      },
      {
      'name':'APIUM GRAVEOLENS',
      'link':'http://homeoint.org/books/boericmm/a/ap-g.htm',
      'symptom':[ 'Head', 'Abdomen', 'Female', 'Respiratory', 'Skin', 'Sleep']
      },
      {
      'name':'APHIS CHENOPODII GLAUCI (CHENOPODI GLAUCI APHIS)',
      'link':'http://homeoint.org/books/boericmm/a/aphis.htm',
      'symptom':[ 'Head', 'Stomach', 'Stools', 'Urine', 'Back', 'Fever']
      },
      {
      'name':'APIS MELLIFICA',
      'link':'http://homeoint.org/books/boericmm/a/apis.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'APOCYNUM CANNABINUM',
      'link':'http://homeoint.org/books/boericmm/a/apoc.htm',
      'symptom':[ 'Mind', 'Nose', 'Stomach', 'Stool', 'Urine', 'Female', 'Respiratory', 'Heart', 'Sleep']
      },
      {
      'name':'APOCYNUM ANDROSAEMIFOLIUM',
      'link':'http://homeoint.org/books/boericmm/a/apoc-a.htm',
      'symptom':[ 'Extremities']
      },
      {
      'name':'APOMORPHINUM (APOMORPHIA)',
      'link':'http://homeoint.org/books/boericmm/a/apom.htm',
      'symptom':[ 'Head and Stomach']
      },
      {
      'name':'AQUILEGIA VULGARIS (AQUILEGIA)',
      'link':'http://homeoint.org/books/boericmm/a/aqui.htm',
      'symptom':[ 'Female']
      },
      {
      'name':'ARAGALLUS LAMBERTI',
      'link':'http://homeoint.org/books/boericmm/a/arag.htm',
      'symptom':[ 'Mind', 'Head', 'Throat', 'Respiratory', 'Extremities']
      },
      {
      'name':'ARALIA RACEMOSA',
      'link':'http://homeoint.org/books/boericmm/a/aral.htm',
      'symptom':[ 'Respiratory', 'Female']
      },
      {
      'name':'ARANEA DIADEMA',
      'link':'http://homeoint.org/books/boericmm/a/aran.htm',
      'symptom':[ 'Head', 'Female', 'Chest', 'Stomach', 'Abdomen', 'Extremities', 'Sleep', 'Fever']
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
      'symptom':[ 'Mental', 'Head', 'Throat', 'Respiratory', 'Back', 'Urine', 'Extremities', 'Male', 'Female']
      },
      {
      'name':'ARGENTUM NITRICUM',
      'link':'http://homeoint.org/books/boericmm/a/arg-n.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'ARGEMONE MEXICANA',
      'link':'http://homeoint.org/books/boericmm/a/arge.htm',
      'symptom':[ 'Head', 'Stomach', 'Urinary', 'Female', 'Extremities']
      },
      {
      'name':'ARISTOLOCHIA MILHOMENS',
      'link':'http://homeoint.org/books/boericmm/a/arist-m.htm',
      'symptom':[]
      },
      {
      'name':'ARNICA MONTANA (ARNICA)',
      'link':'http://homeoint.org/books/boericmm/a/arn.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Face', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'ARSENICUM ALBUM',
      'link':'http://homeoint.org/books/boericmm/a/ars.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Stool', 'Urine', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'ARSENICUM BROMATUM',
      'link':'http://homeoint.org/books/boericmm/a/ars-br.htm',
      'symptom':[ 'Face']
      },
      {
      'name':'ARSENICUM HYDROGENISATUM',
      'link':'http://homeoint.org/books/boericmm/a/ars-h.htm',
      'symptom':[ 'Head', 'Mouth']
      },
      {
      'name':'ARSENICUM IODATUM',
      'link':'http://homeoint.org/books/boericmm/a/ars-i.htm',
      'symptom':[ 'Head', 'Nose', 'Throat', 'Eyes and Ears', 'Stomach', 'Respiratory', 'Fever', 'Skin']
      },
      {
      'name':'ARSENICUM METALLICUM',
      'link':'http://homeoint.org/books/boericmm/a/ars-met.htm',
      'symptom':[ 'Head', 'Face', 'Mouth', 'Abdomen']
      },
      {
      'name':'ARSENICUM SULPHURATUM FLAVUM (ARSENIC TRISULPH.)',
      'link':'http://homeoint.org/books/boericmm/a/ars-s-f.htm',
      'symptom':[]
      },
      {
      'name':'ARTEMISIA VULGARIS',
      'link':'http://homeoint.org/books/boericmm/a/art-v.htm',
      'symptom':[ 'Head', 'Eyes', 'Female', 'Fever']
      },
      {
      'name':'ARUM DRACONTIUM',
      'link':'http://homeoint.org/books/boericmm/a/arum-d.htm',
      'symptom':[ 'Head', 'Throat', 'Urinary', 'Respiratory']
      },
      {
      'name':'ARUM TRIPHYLLUM',
      'link':'http://homeoint.org/books/boericmm/a/arum-t.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Mouth', 'Throat', 'Skin']
      },
      {
      'name':'ARUNDO MAURITANICA (ARUNDO)',
      'link':'http://homeoint.org/books/boericmm/a/arund.htm',
      'symptom':[ 'Head', 'Ears', 'Nose', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'ASA FOETIDA (ASAFOETIDA)',
      'link':'http://homeoint.org/books/boericmm/a/asaf.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Throat', 'Stomach', 'Female', 'Rectum', 'Chest', 'Bones', 'Skin']
      },
      {
      'name':'ASARUM EUROPAEUM (ASARUM EUROPUM)',
      'link':'http://homeoint.org/books/boericmm/a/asar.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Stomach', 'Rectum', 'Female', 'Respiratory', 'Back', 'Fever']
      },
      {
      'name':'ASCLEPIAS CORNUTI (ASCLEPIAS SYRIACA)',
      'link':'http://homeoint.org/books/boericmm/a/asc-c.htm',
      'symptom':[ 'Head']
      },
      {
      'name':'ASCLEPIAS TUBEROSA',
      'link':'http://homeoint.org/books/boericmm/a/asc-t.htm',
      'symptom':[ 'Respiratory', 'Stomach', 'Rectum', 'Extremities']
      },
      {
      'name':'ASIMINA TRILOBA',
      'link':'http://homeoint.org/books/boericmm/a/asim.htm',
      'symptom':[]
      },
      {
      'name':'ASPARAGUS OFFICINALIS',
      'link':'http://homeoint.org/books/boericmm/a/aspar.htm',
      'symptom':[ 'Head', 'Urine', 'Heart', 'Extremities']
      },
      {
      'name':'ASTACUS FLUVIATILIS (CANCER ASTACUS)',
      'link':'http://homeoint.org/books/boericmm/a/astac.htm',
      'symptom':[ 'Skin', 'Fever']
      },
      {
      'name':'ASTERIAS RUBENS',
      'link':'http://homeoint.org/books/boericmm/a/aster.htm',
      'symptom':[ 'Head', 'Face', 'Female', 'Chest', 'Nervous System', 'Stool', 'Skin']
      },
      {
      'name':'ASTRAGALUS MOLLISSIMUS',
      'link':'http://homeoint.org/books/boericmm/a/astra-mo.htm',
      'symptom':[ 'Head', 'Stomach', 'Extremities']
      },
      {
      'name':'AURUM METALLICUM',
      'link':'http://homeoint.org/books/boericmm/a/aur.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Urine', 'Rectum', 'Male', 'Female', 'Heart', 'Respiratory', 'Bones', 'Extremities', 'Sleep']
      },
      {
      'name':'AURUM MURIATICUM NATRONATUM',
      'link':'http://homeoint.org/books/boericmm/a/aur-m-n.htm',
      'symptom':[ 'Tongue', 'Female']
      },
      {
      'name':'AVENA SATIVA',
      'link':'http://homeoint.org/books/boericmm/a/aven.htm',
      'symptom':[ 'Mind', 'Head', 'Female', 'Male', 'Extremities']
      },
      {
      'name':'AZADIRACHTA INDICA',
      'link':'http://homeoint.org/books/boericmm/a/aza.htm',
      'symptom':[ 'Head', 'Fever']
      },
      {
      'name':'BACILLINUM BURNETT (BACILLINUM)',
      'link':'http://homeoint.org/books/boericmm/b/bac.htm',
      'symptom':[ 'Head', 'Abdomen', 'Respiratory', 'Skin']
      },
      {
      'name':'BADIAGA',
      'link':'http://homeoint.org/books/boericmm/b/bad.htm',
      'symptom':[ 'Head', 'Eyes', 'Respiratory', 'Stomach', 'Female', 'Heart', 'Skin', 'Back']
      },
      {
      'name':'BALSAMUM PERUVIANUM',
      'link':'http://homeoint.org/books/boericmm/b/bals-p.htm',
      'symptom':[ 'Nose', 'Stomach', 'Chest', 'Urine']
      },
      {
      'name':'BAPTISIA TINCTORIA (BAPTISIA)',
      'link':'http://homeoint.org/books/boericmm/b/bapt.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Female', 'Respiratory', 'Back and Extremities', 'Sleep', 'Skin', 'Fever']
      },
      {
      'name':'BARYTA ACETICA',
      'link':'http://homeoint.org/books/boericmm/b/bar-act.htm',
      'symptom':[ 'Mind', 'Face', 'Extremities']
      },
      {
      'name':'BARYTA CARBONICA (BARYTA CARB)',
      'link':'http://homeoint.org/books/boericmm/b/bar-c.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep']
      },
      {
      'name':'BARYTA IODATA',
      'link':'http://homeoint.org/books/boericmm/b/bar-i.htm',
      'symptom':[]
      },
      {
      'name':'BARYTA MURIATICA',
      'link':'http://homeoint.org/books/boericmm/b/bar-m.htm',
      'symptom':[ 'Ears', 'Throat', 'Respiratory', 'Stomach', 'Urine', 'Abdomen']
      },
      {
      'name':'BAROSMA CRENULATUM (BAROSMA CRENATA)',
      'link':'http://homeoint.org/books/boericmm/b/baros.htm',
      'symptom':[]
      },
      {
      'name':'BELLADONNA',
      'link':'http://homeoint.org/books/boericmm/b/bell.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stools', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Back', 'Skin', 'Fever', 'Sleep']
      },
      {
      'name':'BELLIS PERENNIS',
      'link':'http://homeoint.org/books/boericmm/b/bell-p.htm',
      'symptom':[ 'Head', 'Female', 'Sleep', 'Abdomen', 'Skin', 'Extremities']
      },
      {
      'name':'BENZOICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/b/benz-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Face', 'Stomach', 'Abdomen', 'Rectum', 'Stool', 'Urine', 'Respiratory', 'Back', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'BENZOLUM (BENZENUM - COAL NAPHTHA)',
      'link':'http://homeoint.org/books/boericmm/b/benzol.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Male', 'Extremities', 'Skin']
      },
      {
      'name':'BERBERIS VULGARIS',
      'link':'http://homeoint.org/books/boericmm/b/berb.htm',
      'symptom':[ 'Head', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urinary', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'BERBERIS AQUIFOLIUM (BERBERIS AQUIFOLIUM - MAHONIA)',
      'link':'http://homeoint.org/books/boericmm/b/berb-a.htm',
      'symptom':[ 'Head', 'Face', 'Stomach', 'Urine', 'Skin']
      },
      {
      'name':'BETA VULGARIS',
      'link':'http://homeoint.org/books/boericmm/b/beta.htm',
      'symptom':[]
      },
      {
      'name':'BISMUTHUM SUBNITRICUM (BISMUTHUM)',
      'link':'http://homeoint.org/books/boericmm/b/bism-sn.htm',
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Stomach', 'Stool', 'Respiratory', 'Extremities', 'Sleep']
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
      'symptom':[ 'Head', 'Fever', 'Skin']
      },
      {
      'name':'BORICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/b/bor-ac.htm',
      'symptom':[ 'Skin', 'Female']
      },
      {
      'name':'BORAX VENETA (BORAX)',
      'link':'http://homeoint.org/books/boericmm/b/borx.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach and Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Extremities', 'Skin', 'Sleep']
      },
      {
      'name':'BOTHROPS LANCEOLATUS (BOTHROPS LANCIOLATUS - LACHESIS LANCIOLATUS)',
      'link':'http://homeoint.org/books/boericmm/b/both.htm',
      'symptom':[ 'Eyes', 'Face', 'Throat', 'Stomach', 'Skin']
      },
      {
      'name':'BOTULINUM',
      'link':'http://homeoint.org/books/boericmm/b/botul.htm',
      'symptom':[]
      },
      {
      'name':'BOVISTA LYCOPERDON (BOVISTA)',
      'link':'http://homeoint.org/books/boericmm/b/bov.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Stomach', 'Female', 'Abdomen', 'Extremities', 'Skin']
      },
      {
      'name':'BRACHYGLOTTIS REPENS (BRACHYGLOTTIS)',
      'link':'http://homeoint.org/books/boericmm/b/brach.htm',
      'symptom':[ 'Abdomen', 'Urinary', 'Extremities']
      },
      {
      'name':'BROMIUM (BROMUM)',
      'link':'http://homeoint.org/books/boericmm/b/brom.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Throat', 'Stomach and Abdomen', 'Respiratory', 'Male', 'Female', 'Sleep', 'Skin']
      },
      {
      'name':'BRYONIA ALBA (BRYONIA)',
      'link':'http://homeoint.org/books/boericmm/b/bry.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Ears', 'Eyes', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'BUFO RANA (BUFO)',
      'link':'http://homeoint.org/books/boericmm/b/bufo.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Heart', 'Female', 'Male', 'Extremities', 'Skin']
      },
      {
      'name':'BUTYRICUM ACIDUM (BUTYRIC ACID)',
      'link':'http://homeoint.org/books/boericmm/b/but-ac.htm',
      'symptom':[ 'Head', 'Stomach', 'Back', 'Sleep', 'Skin']
      },
      {
      'name':'CACTUS GRANDIFLORUS (SELENICEREUS SPINULOSUS)',
      'link':'http://homeoint.org/books/boericmm/c/cact.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Throat', 'Stomach', 'Stool', 'Urine', 'Female', 'Chest', 'Heart', 'Extremities', 'Sleep', 'Fever']
      },
      {
      'name':'CADMIUM SULPHURATUM',
      'link':'http://homeoint.org/books/boericmm/c/cadm-s.htm',
      'symptom':[ 'Mind and Head', 'Nose', 'Eyes', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Heart', 'Fever', 'Skin', 'Sleep']
      },
      {
      'name':'CAINCA (CAHINCA)',
      'link':'http://homeoint.org/books/boericmm/c/cain.htm',
      'symptom':[ 'Urinary', 'Male', 'Back']
      },
      {
      'name':'CAJUPUTUM (OLEUM WITTNEBIANUM)',
      'link':'http://homeoint.org/books/boericmm/c/caj.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Abdomen']
      },
      {
      'name':'CALADIUM SEGUINUM',
      'link':'http://homeoint.org/books/boericmm/c/calad.htm',
      'symptom':[ 'Head', 'Stomach', 'Male', 'Female', 'Skin', 'Respiratory']
      },
      {
      'name':'CALCAREA CARBONICA (CALCAREA CARBONICA - OSTREARUM)',
      'link':'http://homeoint.org/books/boericmm/c/calc.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'CALCAREA ACETICA',
      'link':'http://homeoint.org/books/boericmm/c/calc-act.htm',
      'symptom':[ 'Head', 'Female', 'Respiratory']
      },
      {
      'name':'CALCAREA ARSENICOSA (CALCAREA ARSENICA)',
      'link':'http://homeoint.org/books/boericmm/c/calc-ar.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Urinary', 'Heart', 'Female', 'Back', 'Extremities']
      },
      {
      'name':'CALCAREA FLUORICA (FLUOR SPAR)',
      'link':'http://homeoint.org/books/boericmm/c/calc-f.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Stool', 'Anus', 'Male', 'Respiratory', 'Circulatory Organs', 'Neck', 'Back', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'CALCAREA IODATA',
      'link':'http://homeoint.org/books/boericmm/c/calc-i.htm',
      'symptom':[ 'Head', 'Throat', 'Respiratory', 'Skin']
      },
      {
      'name':'CALCAREA PHOSPHORICA',
      'link':'http://homeoint.org/books/boericmm/c/calc-p.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Neck and Back', 'Extremities']
      },
      {
      'name':'CALCAREA SULPHURICA',
      'link':'http://homeoint.org/books/boericmm/c/calc-s.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Abdomen', 'Stool', 'Female', 'Respiratory', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'CALCAREA SILICATA',
      'link':'http://homeoint.org/books/boericmm/c/calc-sil.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Female', 'Respiratory', 'Skin']
      },
      {
      'name':'CALENDULA OFFICINALIS',
      'link':'http://homeoint.org/books/boericmm/c/calen.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Stomach', 'Respiratory', 'Female', 'Skin', 'Fever']
      },
      {
      'name':'CALOTROPIS GIGANTEA (CALOTROPIS)',
      'link':'http://homeoint.org/books/boericmm/c/calo.htm',
      'symptom':[]
      },
      {
      'name':'CALTHA PALUSTRIS',
      'link':'http://homeoint.org/books/boericmm/c/calth.htm',
      'symptom':[ 'Skin']
      },
      {
      'name':'CAMPHORA',
      'link':'http://homeoint.org/books/boericmm/c/camph.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Face', 'Stomach', 'Stool', 'Urine', 'Respiratory', 'Sleep', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'CAMPHORA BROMATA (CAMPHORA MONO-BROMATA)',
      'link':'http://homeoint.org/books/boericmm/c/camph-br.htm',
      'symptom':[ 'Mind']
      },
      {
      'name':'CANCHALAGUA',
      'link':'http://homeoint.org/books/boericmm/c/canch.htm',
      'symptom':[ 'Head', 'Fever', 'Skin']
      },
      {
      'name':'CANNABIS INDICA',
      'link':'http://homeoint.org/books/boericmm/c/cann-i.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Face', 'Stomach', 'Rectum', 'Urinary', 'Male', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Sleep']
      },
      {
      'name':'CANNABIS SATIVA',
      'link':'http://homeoint.org/books/boericmm/c/cann-s.htm',
      'symptom':[ 'Head', 'Eyes', 'Urine', 'Female', 'Respiratory', 'Heart', 'Sleep', 'Extremities']
      },
      {
      'name':'CANTHARIS VESICATORIA (CANTHARIS)',
      'link':'http://homeoint.org/books/boericmm/c/canth.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Face', 'Throat', 'Chest', 'Stomach', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'CAPSICUM ANNUUM (CAPSICUM)',
      'link':'http://homeoint.org/books/boericmm/c/caps.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Throat', 'Mouth', 'Stomach', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Extremities', 'Fever']
      },
      {
      'name':'CARBOLICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/c/carb-ac.htm',
      'symptom':[ 'Head', 'Nose', 'Throat', 'Stomach', 'Stool', 'Urine', 'Female', 'Extremities', 'Skin']
      },
      {
      'name':'CARBO ANIMALIS',
      'link':'http://homeoint.org/books/boericmm/c/carb-an.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Female', 'Respiratory', 'Skin', 'Extremities']
      },
      {
      'name':'CARBO VEGETABILIS',
      'link':'http://homeoint.org/books/boericmm/c/carb-v.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Stomach', 'Abdomen', 'Rectum and Stool', 'Male', 'Female', 'Respiratory', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'CARBONEUM HYDROGENISATUM',
      'link':'http://homeoint.org/books/boericmm/c/carbn-h.htm',
      'symptom':[ 'Mind', 'Eyes']
      },
      {
      'name':'CARBONEUM OXYGENISATUM',
      'link':'http://homeoint.org/books/boericmm/c/carbn-o.htm',
      'symptom':[ 'Head', 'Eyes', 'Skin', 'Sleep']
      },
      {
      'name':'CARBONEUM SULPHURATUM',
      'link':'http://homeoint.org/books/boericmm/c/carbn-s.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Abdomen', 'Male', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'CARCINOSINUM (CARCINOSIN)',
      'link':'http://homeoint.org/books/boericmm/c/carc.htm',
      'symptom':[]
      },
      {
      'name':'CARDUUS MARIANUS',
      'link':'http://homeoint.org/books/boericmm/c/card-m.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Chest', 'Skin', 'Extremities']
      },
      {
      'name':'CARLSBAD AQUA (CARLSBAD)',
      'link':'http://homeoint.org/books/boericmm/c/carl.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Stomach', 'Urine', 'Rectum']
      },
      {
      'name':'CASCARA SAGRADA (RHAMNUS PURSHIANA)',
      'link':'http://homeoint.org/books/boericmm/c/cas-s.htm',
      'symptom':[ 'Urine', 'Extremities']
      },
      {
      'name':'CASCARILLA',
      'link':'http://homeoint.org/books/boericmm/c/casc.htm',
      'symptom':[ 'Stomach', 'Rectum']
      },
      {
      'name':'CASTOREUM CANADENSE (CASTOREUM)',
      'link':'http://homeoint.org/books/boericmm/c/cast.htm',
      'symptom':[ 'Tongue', 'Female', 'Fever']
      },
      {
      'name':'CASTANEA VESCA',
      'link':'http://homeoint.org/books/boericmm/c/castn-v.htm',
      'symptom':[]
      },
      {
      'name':'CASTOR EQUI',
      'link':'http://homeoint.org/books/boericmm/c/castor-e.htm',
      'symptom':[ 'Chest']
      },
      {
      'name':'CATARIA NEPETA',
      'link':'http://homeoint.org/books/boericmm/c/catar.htm',
      'symptom':[]
      },
      {
      'name':'CAULOPHYLLUM THALICTROIDES (CAULOPHYLLUM)',
      'link':'http://homeoint.org/books/boericmm/c/caul.htm',
      'symptom':[ 'Stomach', 'Female', 'Skin', 'Extremities']
      },
      {
      'name':'CAUSTICUM',
      'link':'http://homeoint.org/books/boericmm/c/caust.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Stomach', 'Stool', 'Urine', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Sleep']
      },
      {
      'name':'CEANOTHUS AMERICANUS (CEANOTHUS)',
      'link':'http://homeoint.org/books/boericmm/c/cean.htm',
      'symptom':[ 'Abdomen', 'Rectum', 'Urine']
      },
      {
      'name':'CEDRON (SIMARUBA FERROGINEA)',
      'link':'http://homeoint.org/books/boericmm/c/cedr.htm',
      'symptom':[ 'Head', 'Eyes', 'Extremities', 'Fever']
      },
      {
      'name':'CENCHRIS CONTORTRIX (ANCISTRODON)',
      'link':'http://homeoint.org/books/boericmm/c/cench.htm',
      'symptom':[ 'Head', 'Heart', 'Sleep']
      },
      {
      'name':'CERIUM OXALICUM',
      'link':'http://homeoint.org/books/boericmm/c/cer-ox.htm',
      'symptom':[]
      },
      {
      'name':'CEREUS BONPLANDII',
      'link':'http://homeoint.org/books/boericmm/c/cere-b.htm',
      'symptom':[ 'Mind', 'Head', 'Chest', 'Skin', 'Extremities']
      },
      {
      'name':'CHAMOMILLA',
      'link':'http://homeoint.org/books/boericmm/c/cham.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Eyes', 'Nose', 'Face', 'Throat', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Respiratory', 'Back', 'Extremities', 'Sleep']
      },
      {
      'name':'CHAPARRO AMARGOSO',
      'link':'http://homeoint.org/books/boericmm/c/chap.htm',
      'symptom':[]
      },
      {
      'name':'CHELIDONIUM MAJUS',
      'link':'http://homeoint.org/books/boericmm/c/chel.htm',
      'symptom':[ 'Head', 'Nose', 'Eyes', 'Face', 'Stomach', 'Abdomen', 'Urine', 'Stool', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'CHELONE GLABRA (CHELONE)',
      'link':'http://homeoint.org/books/boericmm/c/chelo.htm',
      'symptom':[]
      },
      {
      'name':'CHENOPODIUM ANTHELMINTICUM',
      'link':'http://homeoint.org/books/boericmm/c/chen-a.htm',
      'symptom':[ 'Ears', 'Back', 'Urine']
      },
      {
      'name':'CHIMAPHILA UMBELLATA',
      'link':'http://homeoint.org/books/boericmm/c/chim.htm',
      'symptom':[ 'Head', 'Mouth', 'Urinary', 'Female', 'Male', 'Skin', 'Extremities']
      },
      {
      'name':'CHINA OFFICINALIS (CINCHONA OFFICINALIS)',
      'link':'http://homeoint.org/books/boericmm/c/chin.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'CHININUM ARSENICOSUM',
      'link':'http://homeoint.org/books/boericmm/c/chinin-a.htm',
      'symptom':[ 'Head', 'Eyes', 'Mouth', 'Stomach', 'Heart', 'Sleep', 'Extremities', 'Fever']
      },
      {
      'name':'CHININUM SULPHURICUM',
      'link':'http://homeoint.org/books/boericmm/c/chinin-s.htm',
      'symptom':[ 'Blood', 'Head', 'Ears', 'Face', 'Spine', 'Urine', 'Skin', 'Fever']
      },
      {
      'name':'CHIONANTHUS VIRGINICA (CHIONANTHUS)',
      'link':'http://homeoint.org/books/boericmm/c/chion.htm',
      'symptom':[ 'Head', 'Tongue', 'Mouth', 'Abdomen', 'Urine', 'Skin', 'Liver']
      },
      {
      'name':'CHLOROFORMIUM (CHLOROFORMUM)',
      'link':'http://homeoint.org/books/boericmm/c/chlf.htm',
      'symptom':[ 'Head']
      },
      {
      'name':'CHLORALUM HYDRATUM (CHLORALUM)',
      'link':'http://homeoint.org/books/boericmm/c/chlol.htm',
      'symptom':[ 'Head', 'Eyes', 'Skin', 'Respiratory', 'Sleep']
      },
      {
      'name':'CHLORUM',
      'link':'http://homeoint.org/books/boericmm/c/chlor.htm',
      'symptom':[ 'Mind', 'Respiratory']
      },
      {
      'name':'CHOLESTERINUM',
      'link':'http://homeoint.org/books/boericmm/c/chol.htm',
      'symptom':[]
      },
      {
      'name':'CHROMICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/c/chr-ac.htm',
      'symptom':[ 'Nose', 'Throat', 'Extremities', 'Stool']
      },
      {
      'name':'CHRYSAROBINUM',
      'link':'http://homeoint.org/books/boericmm/c/chrysar.htm',
      'symptom':[ 'Eyes', 'Ears']
      },
      {
      'name':'CICUTA VIROSA',
      'link':'http://homeoint.org/books/boericmm/c/cic.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Respiratory', 'Back and extremities', 'Skin']
      },
      {
      'name':'CIMICIFUGA RACEMOSA (CIMICIFUGA - ACTAEA RACEMOSA - MACROTYS)',
      'link':'http://homeoint.org/books/boericmm/c/cimic.htm',
      'symptom':[ 'Mental', 'Head', 'Eyes', 'Stomach', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'CIMEX LECTULARIUS (CIMEX - ACANTHIA)',
      'link':'http://homeoint.org/books/boericmm/c/cimx.htm',
      'symptom':[ 'Head', 'Female', 'Fever', 'Bowels']
      },
      {
      'name':'CINA MARITIMA (CINA)',
      'link':'http://homeoint.org/books/boericmm/c/cina.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Extremities', 'Sleep', 'Fever']
      },
      {
      'name':'CINERARIA MARITIMA (CINERARIA)',
      'link':'http://homeoint.org/books/boericmm/c/cine.htm',
      'symptom':[]
      },
      {
      'name':'CINNABARIS (MERCURIUS SULPHURATUS RUBER)',
      'link':'http://homeoint.org/books/boericmm/c/cinnb.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Throat', 'Male', 'Female', 'Extremities', 'Skin']
      },
      {
      'name':'CINNAMOMUM CEYLANICUM (CINNAMOMUM)',
      'link':'http://homeoint.org/books/boericmm/c/cinnm.htm',
      'symptom':[ 'Female']
      },
      {
      'name':'CISTUS CANADENSIS',
      'link':'http://homeoint.org/books/boericmm/c/cist.htm',
      'symptom':[ 'Face', 'Mouth', 'Ears', 'Throat', 'Stomach', 'Stool', 'Chest', 'Extremities', 'Sleep', 'Female', 'Respiratory', 'Skin']
      },
      {
      'name':'CITRUS VULGARIS',
      'link':'http://homeoint.org/books/boericmm/c/cit-v.htm',
      'symptom':[]
      },
      {
      'name':'CLEMATIS ERECTA',
      'link':'http://homeoint.org/books/boericmm/c/clem.htm',
      'symptom':[ 'Head', 'Eyes', 'Face', 'Teeth', 'Stomach', 'Male', 'Urinary', 'Skin']
      },
      {
      'name':'COBALTUM METALLICUM (COBALTUM)',
      'link':'http://homeoint.org/books/boericmm/c/cob.htm',
      'symptom':[ 'Mind', 'Head', 'Teeth', 'Abdomen', 'Rectum', 'Male', 'Back', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'COCCUS CACTI',
      'link':'http://homeoint.org/books/boericmm/c/coc-c.htm',
      'symptom':[ 'Mind', 'Head', 'Respiratory', 'Heart', 'Urinary', 'Female']
      },
      {
      'name':'COCA-ERYTHROXYLON COCA',
      'link':'http://homeoint.org/books/boericmm/c/coca.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Heart', 'Male', 'Respiratory', 'Sleep']
      },
      {
      'name':'COCAINUM HYDROCHLORICUM (COCAINA)',
      'link':'http://homeoint.org/books/boericmm/c/cocain.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Throat', 'Stomach', 'Nervous System', 'Sleep', 'Fever']
      },
      {
      'name':'COCCULUS INDICUS (COCCULUS)',
      'link':'http://homeoint.org/books/boericmm/c/cocc.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Stomach', 'Abdomen', 'Female', 'Respiratory', 'Back', 'Extremities', 'Sleep', 'Fever']
      },
      {
      'name':'COCCINELLA SEPTEMPUNCTATA',
      'link':'http://homeoint.org/books/boericmm/c/cocc-s.htm',
      'symptom':[ 'Head', 'Stomach', 'Back']
      },
      {
      'name':'COCHLEARIA ARMORACIA (ARMORACIA SATIVA)',
      'link':'http://homeoint.org/books/boericmm/c/coch.htm',
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Back', 'Respiratory', 'Urinary']
      },
      {
      'name':'CODEINUM',
      'link':'http://homeoint.org/books/boericmm/c/cod.htm',
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Respiratory']
      },
      {
      'name':'COFFEA CRUDA',
      'link':'http://homeoint.org/books/boericmm/c/coff.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Mouth', 'Stomach', 'Female', 'Sleep', 'Respiratory', 'Heart', 'Extremities']
      },
      {
      'name':'COLCHICUM AUTUMNALE (COLCHICUM)',
      'link':'http://homeoint.org/books/boericmm/c/colch.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Face', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Urine', 'Heart', 'Extremities', 'Back', 'Skin']
      },
      {
      'name':'COLLINSONIA CANADENSIS',
      'link':'http://homeoint.org/books/boericmm/c/coll.htm',
      'symptom':[ 'Head', 'Rectum', 'Female', 'Respiratory', 'Heart']
      },
      {
      'name':'COLOCYNTHIS',
      'link':'http://homeoint.org/books/boericmm/c/coloc.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Stomach', 'Abdomen', 'Female', 'Urine', 'Extremities']
      },
      {
      'name':'CONIUM MACULATUM (CONIUM)',
      'link':'http://homeoint.org/books/boericmm/c/con-m.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'COMOCLADIA DENTATA',
      'link':'http://homeoint.org/books/boericmm/c/com.htm',
      'symptom':[ 'Eyes', 'Face', 'Skin', 'Chest']
      },
      {
      'name':'CONVALLARIA MAJALIS',
      'link':'http://homeoint.org/books/boericmm/c/conv.htm',
      'symptom':[ 'Mind and Head', 'Face', 'Mouth', 'Throat', 'Abdomen', 'Urinary Organs', 'Female', 'Respiratory', 'Heart', 'Back and Extremities', 'Fever']
      },
      {
      'name':'COPAIVA OFFICINALIS (COPAIVA)',
      'link':'http://homeoint.org/books/boericmm/c/cop.htm',
      'symptom':[ 'Head', 'Nose', 'Stomach', 'Urinary', 'Rectum', 'Male', 'Female', 'Respiratory', 'Skin']
      },
      {
      'name':'CORALLIUM RUBRUM (CORALLIUM)',
      'link':'http://homeoint.org/books/boericmm/c/cor-r.htm',
      'symptom':[ 'Head', 'Nose', 'Mouth', 'Respiratory', 'Male', 'Skin']
      },
      {
      'name':'CORALLORHIZA ODONTORHIZA (CORALLORHIZA)',
      'link':'http://homeoint.org/books/boericmm/c/corh.htm',
      'symptom':[]
      },
      {
      'name':'CORNUS CIRCINATA',
      'link':'http://homeoint.org/books/boericmm/c/corn.htm',
      'symptom':[ 'Mouth', 'Stool', 'Skin']
      },
      {
      'name':'CORYDALIS FORMOSA (CORYDALIS - DICENTRA CANADENSIS)',
      'link':'http://homeoint.org/books/boericmm/c/cory.htm',
      'symptom':[ 'Skin']
      },
      {
      'name':'COTYLEDON UMBILICUS (COTYLEDON)',
      'link':'http://homeoint.org/books/boericmm/c/cot.htm',
      'symptom':[ 'Mind', 'Breast', 'Extremities']
      },
      {
      'name':'CRATAEGUS OXYACANTHA (CRATAEGUS)',
      'link':'http://homeoint.org/books/boericmm/c/crat.htm',
      'symptom':[ 'Head', 'Urinary', 'Heart', 'Skin', 'Sleep']
      },
      {
      'name':'CROCUS SATIVUS (CROCUS SATIA)',
      'link':'http://homeoint.org/books/boericmm/c/croc.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Abdomen', 'Female', 'Respiratory', 'Back', 'Extremities']
      },
      {
      'name':'CROTALUS HORRIDUS',
      'link':'http://homeoint.org/books/boericmm/c/crot-h.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Urinary', 'Heart', 'Respiratory', 'Extremities', 'Fever', 'Skin', 'Sleep']
      },
      {
      'name':'CROTON TIGLIUM',
      'link':'http://homeoint.org/books/boericmm/c/crot-t.htm',
      'symptom':[ 'Head', 'Eyes', 'Stool', 'Urine', 'Chest', 'Skin']
      },
      {
      'name':'CUBEBA OFFICINALIS (CUBEBA)',
      'link':'http://homeoint.org/books/boericmm/c/cub.htm',
      'symptom':[ 'Urine', 'Respiratory']
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
      'symptom':[ 'Stomach', 'Skin']
      },
      {
      'name':'CUPHEA VISCOSISSIMA (CUPHEA)',
      'link':'http://homeoint.org/books/boericmm/c/cuph.htm',
      'symptom':[]
      },
      {
      'name':'CUPRUM METALLICUM',
      'link':'http://homeoint.org/books/boericmm/c/cupr.htm',
      'symptom':[ 'Head', 'Eyes', 'Face', 'Nose', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Heart', 'Respiratory', 'Extremities', 'Skin', 'Sleep']
      },
      {
      'name':'CUPRUM ACETICUM',
      'link':'http://homeoint.org/books/boericmm/c/cupr-act.htm',
      'symptom':[ 'Head', 'Face', 'Stomach', 'Respiratory', 'Skin']
      },
      {
      'name':'CUPRUM ARSENICOSUM',
      'link':'http://homeoint.org/books/boericmm/c/cupr-ar.htm',
      'symptom':[ 'Mouth', 'Heart', 'Abdomen', 'Back', 'Urinary', 'Male', 'Extremities', 'Skin']
      },
      {
      'name':'CURARE (WOORARI)',
      'link':'http://homeoint.org/books/boericmm/c/cur.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Female', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'CYCLAMEN EUROPAEUM (CYCLAMEN)',
      'link':'http://homeoint.org/books/boericmm/c/cycl.htm',
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Rectum', 'Female', 'Extremities', 'Skin']
      },
      {
      'name':'CYPRIPEDIUM PUBESCENS (CYPRIPEDIUM)',
      'link':'http://homeoint.org/books/boericmm/c/cypr.htm',
      'symptom':[ 'Head']
      },
      {
      'name':'CYTISUS LABURNUM (LABURNUM)',
      'link':'http://homeoint.org/books/boericmm/c/cyt-l.htm',
      'symptom':[ 'Head', 'Stomach', 'Extremities']
      },
      {
      'name':'DAMIANA (TURNERA)',
      'link':'http://homeoint.org/books/boericmm/d/dam.htm',
      'symptom':[]
      },
      {
      'name':'DAPHNE INDICA',
      'link':'http://homeoint.org/books/boericmm/d/daph.htm',
      'symptom':[ 'Head', 'Urine', 'Extremities', 'Sleep']
      },
      {
      'name':'DIGITALIS PURPUREA (DIGITALIS)',
      'link':'http://homeoint.org/books/boericmm/d/dig.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Male', 'Respiratory', 'Heart', 'Extremities', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'DIOSCOREA VILLOSA',
      'link':'http://homeoint.org/books/boericmm/d/dios.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Abdomen', 'Heart', 'Rectum', 'Male', 'Female', 'Respiratory', 'Extremities']
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
      'symptom':[ 'Throat', 'Abdomen', 'Skin']
      },
      {
      'name':'DORYPHORA DECEMLINEATA (DORYPHORA)',
      'link':'http://homeoint.org/books/boericmm/d/dor.htm',
      'symptom':[ 'Urinary']
      },
      {
      'name':'DROSERA ROTUNDIFOLIA (DROSERA)',
      'link':'http://homeoint.org/books/boericmm/d/dros.htm',
      'symptom':[ 'Head', 'Stomach', 'Respiratory', 'Extremities', 'Fever']
      },
      {
      'name':'DUBOISIA MYOPOROIDES (DUBOISIA)',
      'link':'http://homeoint.org/books/boericmm/d/dubo-m.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Respiratory', 'Extremities']
      },
      {
      'name':'DULCAMARA',
      'link':'http://homeoint.org/books/boericmm/d/dulc.htm',
      'symptom':[ 'Head', 'Nose', 'Eyes', 'Ears', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'ECHINACEA ANGUSTIFOLIA (ECHINACEA - RUDBECKIA)',
      'link':'http://homeoint.org/books/boericmm/e/echi.htm',
      'symptom':[ 'Head', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Chest', 'Urine', 'Female', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'ELAPS CORALLINUS',
      'link':'http://homeoint.org/books/boericmm/e/elaps.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Throat', 'Chest', 'Stomach', 'Female', 'Sleep', 'Skin', 'Extremities', 'Fever']
      },
      {
      'name':'ELATERIUM OFFICINARUM (ELATERIUM - ECBALIUM)',
      'link':'http://homeoint.org/books/boericmm/e/elat.htm',
      'symptom':[ 'Stomach', 'Stool', 'Extremities', 'Skin', 'Fever']
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
      'symptom':[ 'Head']
      },
      {
      'name':'EQUISETUM HYEMALE (EQUISETUM)',
      'link':'http://homeoint.org/books/boericmm/e/equis-h.htm',
      'symptom':[ 'Urinary', 'Kidney']
      },
      {
      'name':'ERECHTHITES HIERACIFOLIA (ERECHTHITES)',
      'link':'http://homeoint.org/books/boericmm/e/erech.htm',
      'symptom':[ 'Skin']
      },
      {
      'name':'ERIGERON CANADENSE (ERIGERON - LEPTILON CANADENSE)',
      'link':'http://homeoint.org/books/boericmm/e/erig.htm',
      'symptom':[ 'Female']
      },
      {
      'name':'ERIODYCTION CALIFORNICUM (ERIODICTYON)',
      'link':'http://homeoint.org/books/boericmm/e/erio.htm',
      'symptom':[ 'Head', 'Respiratory', 'Male']
      },
      {
      'name':'ERYNGIUM AQUATICUM',
      'link':'http://homeoint.org/books/boericmm/e/ery-a.htm',
      'symptom':[ 'Respiratory', 'Urinary', 'Male']
      },
      {
      'name':'ESCHSCHOLTZIA CALIFORNICA',
      'link':'http://homeoint.org/books/boericmm/e/esch.htm',
      'symptom':[]
      },
      {
      'name':'EUCALYPTUS GLOBULUS',
      'link':'http://homeoint.org/books/boericmm/e/eucal.htm',
      'symptom':[ 'Head', 'Nose', 'Throat', 'Stomach', 'Abdomen', 'Urinary', 'Respiratory', 'Female', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'EUGENIA JAMBOS (JAMBOSA VULGARIS)',
      'link':'http://homeoint.org/books/boericmm/e/eug.htm',
      'symptom':[ 'Head', 'Extremities']
      },
      {
      'name':'EUONYMUS ATROPURPUREA',
      'link':'http://homeoint.org/books/boericmm/e/euon-a.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Abdomen', 'Urinary', 'Back', 'Extremities']
      },
      {
      'name':'EUPATORIUM AROMATICUM',
      'link':'http://homeoint.org/books/boericmm/e/eup-a.htm',
      'symptom':[]
      },
      {
      'name':'EUPATORIUM PERFOLIATUM',
      'link':'http://homeoint.org/books/boericmm/e/eup-per.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Stool', 'Respiratory', 'Fever', 'Extremities']
      },
      {
      'name':'EUPATORIUM PURPUREUM',
      'link':'http://homeoint.org/books/boericmm/e/eup-pur.htm',
      'symptom':[ 'Head', 'Urinary', 'Back', 'Female', 'Fever']
      },
      {
      'name':'EUPHORBIUM OFFICINARUM (EUPHORBIUM)',
      'link':'http://homeoint.org/books/boericmm/e/euph.htm',
      'symptom':[ 'Head', 'Face', 'Stomach', 'Abdomen', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'EUPHORBIA LATHYRIS',
      'link':'http://homeoint.org/books/boericmm/e/euph-l.htm',
      'symptom':[ 'Mind', 'Eyes', 'Nose', 'Face', 'Mouth', 'Stomach', 'Stool', 'Urine', 'Male', 'Respiratory', 'Heart', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'EUPHORBIA POLYCARPA (GOLONDRINA)',
      'link':'http://homeoint.org/books/boericmm/e/euph-po.htm',
      'symptom':[]
      },
      {
      'name':'EUPHRASIA OFFICINALIS (EYEBRIGHT)',
      'link':'http://homeoint.org/books/boericmm/e/euphr.htm',
      'symptom':[ 'Head', 'Nose', 'Eyes', 'Face', 'Stomach', 'Rectum', 'Female', 'Male', 'Respiratory', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'EUPIONUM (EUPION)',
      'link':'http://homeoint.org/books/boericmm/e/eupi.htm',
      'symptom':[ 'Head', 'Female', 'Extremities', 'Back']
      },
      {
      'name':'FABIANA IMBRICATA',
      'link':'http://homeoint.org/books/boericmm/f/fab.htm',
      'symptom':[]
      },
      {
      'name':'FAGOPYRUM ESCULENTUM (FAGOPYRUM)',
      'link':'http://homeoint.org/books/boericmm/f/fago.htm',
      'symptom':[ 'Head', 'Nose', 'Eyes', 'Throat', 'Stomach', 'Heart', 'Female', 'Extremities', 'Skin']
      },
      {
      'name':'FEL TAURI',
      'link':'http://homeoint.org/books/boericmm/f/fel.htm',
      'symptom':[ 'Stomach']
      },
      {
      'name':'FERRUM METALLICUM',
      'link':'http://homeoint.org/books/boericmm/f/ferr.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Nose', 'Mouth', 'Stomach', 'Stool', 'Urine', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'FERRUM IODATUM',
      'link':'http://homeoint.org/books/boericmm/f/ferr-i.htm',
      'symptom':[ 'Stomach', 'Abdomen', 'Throat', 'Respiratory', 'Urinary', 'Female']
      },
      {
      'name':'FERRUM MAGNETICUM',
      'link':'http://homeoint.org/books/boericmm/f/ferr-ma.htm',
      'symptom':[ 'Stomach', 'Abdomen']
      },
      {
      'name':'FERRUM PHOSPHORICUM',
      'link':'http://homeoint.org/books/boericmm/f/ferr-p.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Urinary', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Sleep', 'Fever']
      },
      {
      'name':'FERRUM PICRICUM',
      'link':'http://homeoint.org/books/boericmm/f/ferr-pic.htm',
      'symptom':[ 'Ears', 'Stomach', 'Urinary', 'Extremities']
      },
      {
      'name':'FICUS RELIGIOSA',
      'link':'http://homeoint.org/books/boericmm/f/fic-r.htm',
      'symptom':[ 'Head', 'Stomach', 'Respiratory']
      },
      {
      'name':'FILIX MAS (ASPIDIUM)',
      'link':'http://homeoint.org/books/boericmm/f/fil.htm',
      'symptom':[ 'Eyes', 'Abdomen']
      },
      {
      'name':'FLUORICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/f/fl-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Male', 'Urine', 'Female', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'FORMICA RUFA (MYRMEXINE)',
      'link':'http://homeoint.org/books/boericmm/f/form.htm',
      'symptom':[ 'Head', 'Ears', 'Stomach', 'Abdomen', 'Urine', 'Respiratory', 'Sexual', 'Extremities', 'Skin', 'Stool']
      },
      {
      'name':'FORMALINUM (FORMALIN)',
      'link':'http://homeoint.org/books/boericmm/f/formal.htm',
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Stomach', 'Abdomen', 'Urinary', 'Respiratory', 'Fever', 'Skin']
      },
      {
      'name':'FRAGARIA VESCA (FRAGARIA)',
      'link':'http://homeoint.org/books/boericmm/f/frag.htm',
      'symptom':[ 'Mouth', 'Skin']
      },
      {
      'name':'FRANCISCEA UNIFLORA (FRACISCEA)',
      'link':'http://homeoint.org/books/boericmm/f/franc.htm',
      'symptom':[]
      },
      {
      'name':'FRAXINUS AMERICANA',
      'link':'http://homeoint.org/books/boericmm/f/frax.htm',
      'symptom':[ 'Head', 'Female', 'Abdomen']
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
      'symptom':[ 'Mind', 'Head', 'Respiratory', 'Urinary', 'Rectum']
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
      'symptom':[ 'Head', 'Gastric']
      },
      {
      'name':'GAULTHERIA PROCUMBENS (GAULTHERIA)',
      'link':'http://homeoint.org/books/boericmm/g/gaul.htm',
      'symptom':[ 'Head', 'Stomach', 'Skin']
      },
      {
      'name':'GELSEMIUM SEMPERVIRENS (GELSEMIUM)',
      'link':'http://homeoint.org/books/boericmm/g/gels.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Stool', 'Urine', 'Female', 'Male', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'GENTIANA LUTEA',
      'link':'http://homeoint.org/books/boericmm/g/gent-l.htm',
      'symptom':[ 'Head', 'Throat', 'Stomach']
      },
      {
      'name':'GERANIUM MACULATUM',
      'link':'http://homeoint.org/books/boericmm/g/ger.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Stool', 'Female']
      },
      {
      'name':'GETTYSBURG WATER',
      'link':'http://homeoint.org/books/boericmm/g/get.htm',
      'symptom':[]
      },
      {
      'name':'GINSENG QUINQUEFOLIUM (GINSENG)',
      'link':'http://homeoint.org/books/boericmm/g/gins.htm',
      'symptom':[ 'Head', 'Throat', 'Abdomen', 'Male', 'Extremities']
      },
      {
      'name':'GLONOINUM',
      'link':'http://homeoint.org/books/boericmm/g/glon.htm',
      'symptom':[ 'Head', 'Eyes', 'Mouth', 'Ears', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Female', 'Heart', 'Extremities']
      },
      {
      'name':'GLYCERINUM',
      'link':'http://homeoint.org/books/boericmm/g/glyc.htm',
      'symptom':[ 'Head', 'Nose', 'Chest', 'Stomach', 'Urinary', 'Female', 'Extremities']
      },
      {
      'name':'GNAPHALIUM POLYCEPHALUM (GNAPHALIUM)',
      'link':'http://homeoint.org/books/boericmm/g/gnaph.htm',
      'symptom':[ 'Face', 'Abdomen', 'Female', 'Back', 'Extremities']
      },
      {
      'name':'GOSSYPIUM HERBACEUM (GOSSYPIUM)',
      'link':'http://homeoint.org/books/boericmm/g/goss.htm',
      'symptom':[ 'Head', 'Stomach', 'Female']
      },
      {
      'name':'GRANATUM',
      'link':'http://homeoint.org/books/boericmm/g/gran.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Chest', 'Skin', 'Extremities']
      },
      {
      'name':'GRAPHITES',
      'link':'http://homeoint.org/books/boericmm/g/graph.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Male', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'GRATIOLA OFFICINALIS (GRATIOLA)',
      'link':'http://homeoint.org/books/boericmm/g/grat.htm',
      'symptom':[ 'Head', 'Stomach', 'Stool', 'Sleep', 'Female']
      },
      {
      'name':'GRINDELIA ROBUSTA (GRINDELIA)',
      'link':'http://homeoint.org/books/boericmm/g/grin.htm',
      'symptom':[ 'Head', 'Respiratory', 'Spleen', 'Skin']
      },
      {
      'name':'GUACO',
      'link':'http://homeoint.org/books/boericmm/g/gua.htm',
      'symptom':[ 'Throat', 'Female', 'Urine', 'Back', 'Extremities']
      },
      {
      'name':'GUAJACUM OFFICINALE (GUAIACUM)',
      'link':'http://homeoint.org/books/boericmm/g/guaj.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Throat', 'Stomach', 'Abdomen', 'Urinary', 'Respiratory', 'Female', 'Back', 'Extremities']
      },
      {
      'name':'GUARANA (PAULLINIA SORBILIS)',
      'link':'http://homeoint.org/books/boericmm/g/guar.htm',
      'symptom':[ 'Head', 'Bowels', 'Skin', 'Sleep']
      },
      {
      'name':'GUAREA TRICHILOIDES (GUAREA)',
      'link':'http://homeoint.org/books/boericmm/g/guare.htm',
      'symptom':[ 'Eyes', 'Head', 'Respiratory']
      },
      {
      'name':'GYMNOCLADUS CANADENSIS (GYMNOCLADUS)',
      'link':'http://homeoint.org/books/boericmm/g/gymno.htm',
      'symptom':[ 'Face', 'Throat']
      },
      {
      'name':'HAEMATOXYLON CAMPECHIANUM (HAEMATOXYLON)',
      'link':'http://homeoint.org/books/boericmm/h/haem.htm',
      'symptom':[ 'Head', 'Stomach', 'Chest', 'Female']
      },
      {
      'name':'HAMAMELIS VIRGINIANA (HAMAMELIS VIRGINICA)',
      'link':'http://homeoint.org/books/boericmm/h/ham.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Throat', 'Stomach', 'Stool', 'Urine', 'Female', 'Male', 'Respiratory', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'HECLA LAVA (HEKLA LAVA)',
      'link':'http://homeoint.org/books/boericmm/h/hecla.htm',
      'symptom':[ 'Face']
      },
      {
      'name':'HEDEOMA PULEGIOIDES (HEDEOMA)',
      'link':'http://homeoint.org/books/boericmm/h/hedeo.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Urine', 'Female', 'Extremities']
      },
      {
      'name':'HELIANTHUS ANNUUS (HELIANTHUS)',
      'link':'http://homeoint.org/books/boericmm/h/helia.htm',
      'symptom':[]
      },
      {
      'name':'HELLEBORUS NIGER (HELLEBORUS)',
      'link':'http://homeoint.org/books/boericmm/h/hell.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Face', 'Mouth', 'Abdomen', 'Stool', 'Urine', 'Respiratory', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'HELODERMA',
      'link':'http://homeoint.org/books/boericmm/h/helo.htm',
      'symptom':[ 'Head', 'Face', 'Mouth', 'Chest', 'Back', 'Extremities', 'Fever']
      },
      {
      'name':'HELONIAS DIOICA (HELONIAS - CHAMAELIRIUM)',
      'link':'http://homeoint.org/books/boericmm/h/helon.htm',
      'symptom':[ 'Mind', 'Head', 'Back', 'Female', 'Urine', 'Extremities']
      },
      {
      'name':'HEPAR SULPHUR (HEPAR SULPHURIS CALCAREUM)',
      'link':'http://homeoint.org/books/boericmm/h/hep.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'HEPATICA TRILOBA (HEPATICA)',
      'link':'http://homeoint.org/books/boericmm/h/hepat.htm',
      'symptom':[]
      },
      {
      'name':'HERACLEUM SPHONDYLIUM (HERACLEUM - BRANCA URSINA)',
      'link':'http://homeoint.org/books/boericmm/h/hera.htm',
      'symptom':[ 'Head', 'Stomach']
      },
      {
      'name':'HIPPURICUM ACIDUM (HIPPURIC ACID)',
      'link':'http://homeoint.org/books/boericmm/h/hip-ac.htm',
      'symptom':[ 'Head', 'Throat', 'Stomach', 'Female', 'Extremities', 'Skin']
      },
      {
      'name':'HIPPOMANES',
      'link':'http://homeoint.org/books/boericmm/h/hipp.htm',
      'symptom':[ 'Stomach', 'Male', 'Extremities']
      },
      {
      'name':'HIPPOZAENINUM (HIPPOZAENIUM)',
      'link':'http://homeoint.org/books/boericmm/h/hippoz.htm',
      'symptom':[ 'Nose', 'Face', 'Respiratory', 'Skin']
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
      'symptom':[ 'Mind', 'Head', 'Ears', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Back', 'Rectum', 'Urine', 'Male', 'Female', 'Respiratory', 'Skin']
      },
      {
      'name':'HYDROCYANICUM ACIDUM (HYDROCYANIC ACID)',
      'link':'http://homeoint.org/books/boericmm/h/hydr-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Stomach', 'Respiratory', 'Heart', 'Sleep']
      },
      {
      'name':'HYDRANGEA ARBORESCENS (HYDRANGEA)',
      'link':'http://homeoint.org/books/boericmm/h/hydrang.htm',
      'symptom':[ 'Urine']
      },
      {
      'name':'HYDROCOTYLE ASIATICA (HYDROCOTYLE)',
      'link':'http://homeoint.org/books/boericmm/h/hydrc.htm',
      'symptom':[ 'Face', 'Female', 'Skin']
      },
      {
      'name':'HYOSCYAMUS NIGER (HYOSCYAMUS)',
      'link':'http://homeoint.org/books/boericmm/h/hyos.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Chest', 'Extremities', 'Sleep', 'Nervous System']
      },
      {
      'name':'HYPERICUM PERFORATUM (HYPERICUM)',
      'link':'http://homeoint.org/books/boericmm/h/hyper.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Rectum', 'Back', 'Extremities', 'Respiratory', 'Skin']
      },
      {
      'name':'IBERIS AMARA (IBERIS)',
      'link':'http://homeoint.org/books/boericmm/i/iber.htm',
      'symptom':[ 'Mind', 'Head', 'Heart', 'Extremities']
      },
      {
      'name':'ICHTHYOLUM',
      'link':'http://homeoint.org/books/boericmm/i/ichth.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Throat', 'Eyes', 'Nose', 'Stomach', 'Abdomen', 'Urine', 'Female', 'Respiratory', 'Skin', 'Extremities']
      },
      {
      'name':'ICTODES FOETIDA (POTHOS FOETIDUS)',
      'link':'http://homeoint.org/books/boericmm/i/ictod.htm',
      'symptom':[ 'Head', 'Abdomen', 'Respiratory']
      },
      {
      'name':'IGNATIA AMARA (IGNATIA)',
      'link':'http://homeoint.org/books/boericmm/i/ign.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Respiratory', 'Female', 'Extremities', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'ILEX AQUIFOLIUM',
      'link':'http://homeoint.org/books/boericmm/i/ilx-a.htm',
      'symptom':[ 'Eyes']
      },
      {
      'name':'INDIUM METALLICUM (INDIUM)',
      'link':'http://homeoint.org/books/boericmm/i/ind.htm',
      'symptom':[ 'Head', 'Face', 'Male', 'Throat', 'Extremities']
      },
      {
      'name':'INDIGO TINCTORIA (INDIGO)',
      'link':'http://homeoint.org/books/boericmm/i/indg.htm',
      'symptom':[ 'Head', 'Nose', 'Ears', 'Stomach', 'Rectum', 'Urinary', 'Extremities', 'Nervous System']
      },
      {
      'name':'INDOLUM (INDOL)',
      'link':'http://homeoint.org/books/boericmm/i/indol.htm',
      'symptom':[ 'Head', 'Stomach', 'Extremities', 'Sleep']
      },
      {
      'name':'INSULINUM (INSULIN)',
      'link':'http://homeoint.org/books/boericmm/i/ins.htm',
      'symptom':[]
      },
      {
      'name':'INULA HELENIUM (INULA)',
      'link':'http://homeoint.org/books/boericmm/i/inul.htm',
      'symptom':[ 'Head', 'Respiratory', 'Female', 'Rectum', 'Urinary', 'Extremities']
      },
      {
      'name':'IODIUM (IODUM)',
      'link':'http://homeoint.org/books/boericmm/i/iod.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'IODOFORMIUM (IODOFORMUM)',
      'link':'http://homeoint.org/books/boericmm/i/iodof.htm',
      'symptom':[ 'Head', 'Eyes', 'Chest', 'Abdomen', 'Extremities']
      },
      {
      'name':'IPECACUANHA (IPECA)',
      'link':'http://homeoint.org/books/boericmm/i/ip.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Nose', 'Stomach', 'Abdomen', 'Stools', 'Female', 'Respiratory', 'Fever', 'Sleep', 'Extremities', 'Skin']
      },
      {
      'name':'IRIDIUM METALLICUM (IRIDIUM)',
      'link':'http://homeoint.org/books/boericmm/i/irid-met.htm',
      'symptom':[ 'Head', 'Respiratory', 'Back and extremities']
      },
      {
      'name':'IRIS VERSICOLOR',
      'link':'http://homeoint.org/books/boericmm/i/iris.htm',
      'symptom':[ 'Head', 'Ears', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Extremities', 'Skin']
      },
      {
      'name':'JABORANDI (PILOCARPUS MICROPHYLLUS)',
      'link':'http://homeoint.org/books/boericmm/j/jab.htm',
      'symptom':[ 'Eyes', 'Ears', 'Mouth', 'Stomach', 'Abdomen', 'Urinary', 'Heart', 'Respiratory', 'Skin']
      },
      {
      'name':'JACARANDA CAROBA (JACARANDA)',
      'link':'http://homeoint.org/books/boericmm/j/jac-c.htm',
      'symptom':[ 'Head', 'Throat', 'Urinary', 'Male', 'Extremities']
      },
      {
      'name':'JALAPA (EXOGONIUM PURGA)',
      'link':'http://homeoint.org/books/boericmm/j/jal.htm',
      'symptom':[ 'Gastro-intestinal', 'Extremities']
      },
      {
      'name':'JATROPHA CURCAS (JATROPHA)',
      'link':'http://homeoint.org/books/boericmm/j/jatr.htm',
      'symptom':[ 'Stomach', 'Abdomen', 'Stool', 'Extremities']
      },
      {
      'name':'JOANESIA ASOCA (JONOSIA ASOCA)',
      'link':'http://homeoint.org/books/boericmm/j/joan.htm',
      'symptom':[ 'Head', 'Gastric', 'Female', 'Sleep', 'Back']
      },
      {
      'name':'JUGLANS CINEREA',
      'link':'http://homeoint.org/books/boericmm/j/jug-c.htm',
      'symptom':[ 'Head', 'Nose', 'Mouth', 'Stomach', 'Back', 'Skin', 'Stool']
      },
      {
      'name':'JUGLANS REGIA',
      'link':'http://homeoint.org/books/boericmm/j/jug-r.htm',
      'symptom':[ 'Head', 'Female', 'Skin']
      },
      {
      'name':'JUNCUS EFFUSUS',
      'link':'http://homeoint.org/books/boericmm/j/junc-e.htm',
      'symptom':[]
      },
      {
      'name':'JUNIPERUS COMMUNIS',
      'link':'http://homeoint.org/books/boericmm/j/juni-c.htm',
      'symptom':[ 'Urinary', 'Respiratory', 'Head', 'Throat', 'Respiratory']
      },
      {
      'name':'JUSTICIA ADHATODA (JUSTICIA ADHATODA BASAKA)',
      'link':'http://homeoint.org/books/boericmm/j/just.htm',
      'symptom':[ 'Head', 'Throat', 'Respiratory']
      },
      {
      'name':'KALIUM ARSENICOSUM (KALI ARSENICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-ar.htm',
      'symptom':[ 'Skin', 'Female']
      },
      {
      'name':'KALIUM BICHROMICUM (KALI BICHROMICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-bi.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urinary', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'KALIUM BROMATUM (KALI BROMATUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-br.htm',
      'symptom':[ 'Mind', 'Head', 'Throat', 'Stomach', 'Abdomen', 'Urinary', 'Male', 'Female', 'Respiratory', 'Extremities', 'Skin', 'Sleep']
      },
      {
      'name':'KALIUM CARBONICUM (KALI CARBONICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-c.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin', 'Sleep']
      },
      {
      'name':'KALIUM CHLORICUM (KALI CHLORICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-chl.htm',
      'symptom':[ 'Mouth', 'Stomach', 'Stool', 'Urine', 'Skin']
      },
      {
      'name':'KALIUM CYANATUM (KALI CYANATUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-cy.htm',
      'symptom':[ 'Tongue', 'Face', 'Respiratory']
      },
      {
      'name':'KALIUM IODATUM (KALI HYDRIODICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-i.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Eyes', 'Ears', 'Stomach', 'Female', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'KALIUM MURIATICUM (KALI MURIATICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-m.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'KALIUM NITRICUM (KALI NITRICUM - NITRUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-n.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Mouth', 'Stool', 'Female', 'Respiratory', 'Heart', 'Extremities']
      },
      {
      'name':'KALIUM PHOSPHORICUM (KALI PHOSPHORICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-p.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Female', 'Male', 'Urinary Organs', 'Respiratory', 'Extremities', 'Fever']
      },
      {
      'name':'KALIUM PERMANGANATUM (KALI PERMANGANICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-per.htm',
      'symptom':[ 'Respiratory', 'Throat']
      },
      {
      'name':'KALIUM SULPHURICUM (KALI SULPHURICUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-s.htm',
      'symptom':[ 'Head', 'Ears', 'Nose', 'Face', 'Stomach', 'Abdomen', 'Male', 'Female', 'Respiratory', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'KALIUM SILICICUM (KALI SILICATUM)',
      'link':'http://homeoint.org/books/boericmm/k/kali-sil.htm',
      'symptom':[ 'Head', 'Gastric', 'Extremities']
      },
      {
      'name':'KALMIA LATIFOLIA',
      'link':'http://homeoint.org/books/boericmm/k/kalm.htm',
      'symptom':[ 'Head', 'Eyes', 'Face', 'Stomach', 'Urinary', 'Heart', 'Female', 'Back', 'Extremities', 'Sleep']
      },
      {
      'name':'KAOLINUM (KAOLIN)',
      'link':'http://homeoint.org/books/boericmm/k/kaol.htm',
      'symptom':[ 'Nose', 'Respiratory']
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
      'symptom':[ 'Mental', 'Head', 'Eyes', 'Ears', 'Face', 'Mouth', 'Nose', 'Throat', 'Stomach', 'Abdomen', 'Urine', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Sleep']
      },
      {
      'name':'LACTICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/l/lac-ac.htm',
      'symptom':[ 'Stomach', 'Throat', 'Chest', 'Extremities', 'Urine']
      },
      {
      'name':'LAC CANINUM',
      'link':'http://homeoint.org/books/boericmm/l/lac-c.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Mouth', 'Throat', 'Female', 'Extremities', 'Sleep']
      },
      {
      'name':'LAC VACCINUM DEFLORATUM (LAC DEFLORATUM)',
      'link':'http://homeoint.org/books/boericmm/l/lac-d.htm',
      'symptom':[ 'Head', 'Stool']
      },
      {
      'name':'LACHESIS MUTUS (LACHESIS)',
      'link':'http://homeoint.org/books/boericmm/l/lach.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Male', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'LACHNANTHES TINCTORIA (LACHNANTHES)',
      'link':'http://homeoint.org/books/boericmm/l/lachn.htm',
      'symptom':[ 'Head', 'Chest', 'Back', 'Neck', 'Skin']
      },
      {
      'name':'LACTUCA VIROSA',
      'link':'http://homeoint.org/books/boericmm/l/lact-v.htm',
      'symptom':[ 'Mind', 'Head', 'Abdomen', 'Chest', 'Female', 'Sleep', 'Extremities']
      },
      {
      'name':'LAMIUM ALBUM (LAMIUM)',
      'link':'http://homeoint.org/books/boericmm/l/lam.htm',
      'symptom':[]
      },
      {
      'name':'LAPIS ALBUS',
      'link':'http://homeoint.org/books/boericmm/l/lap-a.htm',
      'symptom':[ 'Ears', 'Chest', 'Skin']
      },
      {
      'name':'LAPPA ARCTIUM',
      'link':'http://homeoint.org/books/boericmm/l/lappa.htm',
      'symptom':[ 'Extremities', 'Female']
      },
      {
      'name':'LATRODECTUS MACTANS',
      'link':'http://homeoint.org/books/boericmm/l/lat-m.htm',
      'symptom':[ 'Head', 'Respiratory', 'Chest', 'Extremities', 'Skin']
      },
      {
      'name':'LATHYRUS SATIVUS (LATHYRUS)',
      'link':'http://homeoint.org/books/boericmm/l/lath.htm',
      'symptom':[ 'Mind', 'Mouth', 'Extremities', 'Urine']
      },
      {
      'name':'LAUROCERASUS',
      'link':'http://homeoint.org/books/boericmm/l/laur.htm',
      'symptom':[ 'Fever', 'Respiratory', 'Heart', 'Sleep', 'Extremities']
      },
      {
      'name':'LECITHINUM (LECITHIN)',
      'link':'http://homeoint.org/books/boericmm/l/lec.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Urine', 'Sexual', 'Extremities']
      },
      {
      'name':'LEDUM PALUSTRE (LEDUM)',
      'link':'http://homeoint.org/books/boericmm/l/led.htm',
      'symptom':[ 'Head', 'Eyes', 'Face', 'Mouth', 'Respiratory', 'Rectum', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'LEMNA MINOR',
      'link':'http://homeoint.org/books/boericmm/l/lem-m.htm',
      'symptom':[ 'Nose', 'Mouth', 'Abdomen']
      },
      {
      'name':'LEPIDIUM BONARIENSE',
      'link':'http://homeoint.org/books/boericmm/l/lepi.htm',
      'symptom':[]
      },
      {
      'name':'LEPTANDRA VIRGINICA (LEPTANDRA)',
      'link':'http://homeoint.org/books/boericmm/l/lept.htm',
      'symptom':[ 'Head', 'Stomach', 'Stool']
      },
      {
      'name':'LIATRIS SPICATA (LIATRIS SPICATA - SERRATULA)',
      'link':'http://homeoint.org/books/boericmm/l/liat.htm',
      'symptom':[]
      },
      {
      'name':'LILIUM TIGRINUM',
      'link':'http://homeoint.org/books/boericmm/l/lil-t.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Stomach', 'Abdomen', 'Urinary', 'Stool', 'Heart', 'Female', 'Extremities', 'Sleep', 'Fever']
      },
      {
      'name':'LIMULUS CYCLOPS (LIMULUS - XIPHOSURA)',
      'link':'http://homeoint.org/books/boericmm/l/lim.htm',
      'symptom':[ 'Head', 'Nose', 'Abdomen', 'Respiratory', 'Extremities', 'Skin']
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
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Urine', 'Respiratory', 'Heart', 'Urinary', 'Extremities', 'Skin']
      },
      {
      'name':'LOBELIA INFLATA',
      'link':'http://homeoint.org/books/boericmm/l/lob.htm',
      'symptom':[ 'Head', 'Face', 'Ears', 'Mouth', 'Stomach', 'Respiratory', 'Back', 'Urinary', 'Skin']
      },
      {
      'name':'LOBELIA PURPURASCENS',
      'link':'http://homeoint.org/books/boericmm/l/lob-p.htm',
      'symptom':[ 'Head', 'Chest', 'Eyes']
      },
      {
      'name':'LOLEUM TEMULENTUM (LOLIUM TUMULENTUM)',
      'link':'http://homeoint.org/books/boericmm/l/lol.htm',
      'symptom':[ 'Head', 'Stomach', 'Extremities']
      },
      {
      'name':'LONICERA XYLOSTEUM',
      'link':'http://homeoint.org/books/boericmm/l/lon-x.htm',
      'symptom':[ 'Head', 'Extremities']
      },
      {
      'name':'LUPULUS HUMULUS',
      'link':'http://homeoint.org/books/boericmm/l/lup.htm',
      'symptom':[ 'Head', 'Sleep', 'Male', 'Skin']
      },
      {
      'name':'LYCOPODIUM CLAVATUM (LYCOPODIUM)',
      'link':'http://homeoint.org/books/boericmm/l/lyc.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Fever', 'Sleep', 'Skin']
      },
      {
      'name':'LYCOPERSICUM ESCULENTUM (SOLANUM LYCOPERSICUM)',
      'link':'http://homeoint.org/books/boericmm/l/lycpr.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Heart', 'Respiratory', 'Urine', 'Extremities']
      },
      {
      'name':'LYCOPUS VIRGINICUS',
      'link':'http://homeoint.org/books/boericmm/l/lycps-v.htm',
      'symptom':[ 'Head', 'Eyes', 'Mouth', 'Heart', 'Respiratory', 'Urine', 'Rectum', 'Sleep']
      },
      {
      'name':'LYSSINUM (HYDROPHOBINUM)',
      'link':'http://homeoint.org/books/boericmm/l/lyss.htm',
      'symptom':[ 'Head', 'Mouth', 'Male', 'Female', 'Respiratory', 'Stool']
      },
      {
      'name':'MAGNESIUM CARBONICUM (MAGNESIA CARBONICA)',
      'link':'http://homeoint.org/books/boericmm/m/mag-c.htm',
      'symptom':[ 'Head', 'Ears', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Respiratory', 'Extremities', 'Skin', 'Fever', 'Sleep']
      },
      {
      'name':'MAGNESIUM MURIATICUM (MAGNESIA MURIATICA)',
      'link':'http://homeoint.org/books/boericmm/m/mag-m.htm',
      'symptom':[ 'Head', 'Nose', 'Mouth', 'Stomach', 'Abdomen', 'Urine', 'Bowels', 'Female', 'Heart', 'Respiratory', 'Extremities', 'Sleep']
      },
      {
      'name':'MAGNESIUM PHOSPHORICUM (MAGNESIA PHOSPHORICA)',
      'link':'http://homeoint.org/books/boericmm/m/mag-p.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Female', 'Respiratory', 'Heart', 'Fever', 'Extremities']
      },
      {
      'name':'MAGNESIUM SULPHURICUM (MAGNESIA SULPHURICA)',
      'link':'http://homeoint.org/books/boericmm/m/mag-s.htm',
      'symptom':[ 'Head', 'Stomach', 'Urinary', 'Female', 'Neck and Back', 'Extremities', 'Skin', 'Fever', 'Physiologic Dosage']
      },
      {
      'name':'MAGNOLIA GRANDIFLORA',
      'link':'http://homeoint.org/books/boericmm/m/magn-gr.htm',
      'symptom':[ 'Heart', 'Extremities']
      },
      {
      'name':'MALANDRINUM',
      'link':'http://homeoint.org/books/boericmm/m/maland.htm',
      'symptom':[ 'Skin']
      },
      {
      'name':'MANCINELLA',
      'link':'http://homeoint.org/books/boericmm/m/manc.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Mouth', 'Stomach', 'Extremities', 'Skin']
      },
      {
      'name':'MANGANUM ACETICUM',
      'link':'http://homeoint.org/books/boericmm/m/mang-act.htm',
      'symptom':[ 'Head', 'Mouth', 'Nose', 'Ears', 'Alimentary Canal', 'Respiratory', 'Female', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'MANGIFERA INDICA',
      'link':'http://homeoint.org/books/boericmm/m/mangi.htm',
      'symptom':[ 'Skin']
      },
      {
      'name':'MEDORRHINUM',
      'link':'http://homeoint.org/books/boericmm/m/med.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Male', 'Respiratory', 'Extremities', 'Skin', 'Fever', 'Sleep']
      },
      {
      'name':'MEDUSA',
      'link':'http://homeoint.org/books/boericmm/m/medus.htm',
      'symptom':[ 'Skin', 'Female']
      },
      {
      'name':'MEL CUM SALE',
      'link':'http://homeoint.org/books/boericmm/m/mel-c-s.htm',
      'symptom':[]
      },
      {
      'name':'MELILOTUS OFFICINALIS (MELILOTUS)',
      'link':'http://homeoint.org/books/boericmm/m/meli.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Face', 'Stool', 'Female', 'Respiratory', 'Extremities']
      },
      {
      'name':'MENISPERMUM CANADENSE (MENISPERMUM)',
      'link':'http://homeoint.org/books/boericmm/m/menis.htm',
      'symptom':[ 'Head', 'Extremities']
      },
      {
      'name':'MENTHA PIPERITA',
      'link':'http://homeoint.org/books/boericmm/m/menth.htm',
      'symptom':[ 'Abdomen', 'Respiratory', 'Skin']
      },
      {
      'name':'MENTHOLUM',
      'link':'http://homeoint.org/books/boericmm/m/mentho.htm',
      'symptom':[ 'Head', 'Respiratory', 'Extremities']
      },
      {
      'name':'MENYANTHES TRIFOLIATA (MENYANTHES)',
      'link':'http://homeoint.org/books/boericmm/m/meny.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Extremities', 'Fever']
      },
      {
      'name':'MEPHITIS PUTORIUS (MEPHITIS)',
      'link':'http://homeoint.org/books/boericmm/m/meph.htm',
      'symptom':[ 'Mind', 'Eyes', 'Mouth', 'Respiratory', 'Sleep']
      },
      {
      'name':'MERCURIUS SOLUBILIS (MERCURIUS - HYDRARGYRUM)',
      'link':'http://homeoint.org/books/boericmm/m/merc.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'MERCURIUS CORROSIVUS',
      'link':'http://homeoint.org/books/boericmm/m/merc-c.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Ears', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Respiratory', 'Urine', 'Male', 'Fever']
      },
      {
      'name':'MERCURIUS CYANATUS',
      'link':'http://homeoint.org/books/boericmm/m/merc-cy.htm',
      'symptom':[ 'Head', 'Mouth', 'Throat', 'Stomach', 'Rectum', 'Urinary', 'Skin']
      },
      {
      'name':'MERCURIUS DULCIS',
      'link':'http://homeoint.org/books/boericmm/m/merc-d.htm',
      'symptom':[ 'Ears', 'Mouth', 'Stomach', 'Stool', 'Skin']
      },
      {
      'name':'MERCURIUS IODATUS FLAVUS',
      'link':'http://homeoint.org/books/boericmm/m/merc-i-f.htm',
      'symptom':[ 'Tongue', 'Throat']
      },
      {
      'name':'MERCURIUS IODATUS RUBER',
      'link':'http://homeoint.org/books/boericmm/m/merc-i-r.htm',
      'symptom':[ 'Throat', 'Nose', 'Mouth', 'Throat', 'Skin']
      },
      {
      'name':'MERCURIUS SULPHURICUS, DRARG, OXYD, SUB-SULPH',
      'link':'http://homeoint.org/books/boericmm/m/merc-sul.htm',
      'symptom':[]
      },
      {
      'name':'MERCURIALIS PERENNIS',
      'link':'http://homeoint.org/books/boericmm/m/merl.htm',
      'symptom':[ 'Head', 'Mouth', 'Female']
      },
      {
      'name':'METHYLENUM COERULEUM (METHYLENE BLUE)',
      'link':'http://homeoint.org/books/boericmm/m/methyl.htm',
      'symptom':[]
      },
      {
      'name':'MEZEREUM',
      'link':'http://homeoint.org/books/boericmm/m/mez.htm',
      'symptom':[ 'Head', 'Nose', 'Ears', 'Eyes', 'Face', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Female', 'Male', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'MICROMERIA DOUGLASII (MICROMERIA)',
      'link':'http://homeoint.org/books/boericmm/m/micr.htm',
      'symptom':[ 'Stomach']
      },
      {
      'name':'MILLEFOLIUM',
      'link':'http://homeoint.org/books/boericmm/m/mill.htm',
      'symptom':[ 'Head', 'Nose', 'Stool', 'Female', 'Respiratory']
      },
      {
      'name':'MITCHELLA REPENS (MITCHELLA)',
      'link':'http://homeoint.org/books/boericmm/m/mit.htm',
      'symptom':[ 'Urinary', 'Female']
      },
      {
      'name':'MOMORDICA BALSAMICA',
      'link':'http://homeoint.org/books/boericmm/m/mom-b.htm',
      'symptom':[ 'Head', 'Abdomen', 'Female']
      },
      {
      'name':'MORPHINUM',
      'link':'http://homeoint.org/books/boericmm/m/morph.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Face', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Male', 'Heart', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Nervous', 'Sleep', 'Fever']
      },
      {
      'name':'MOSCHUS',
      'link':'http://homeoint.org/books/boericmm/m/mosch.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Male', 'Female', 'Urine', 'Respiratory', 'Heart']
      },
      {
      'name':'MURIATICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/m/mur-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Rectum', 'Heart', 'Urine', 'Female', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'MUREX PURPUREA (MUREX)',
      'link':'http://homeoint.org/books/boericmm/m/murx.htm',
      'symptom':[ 'Mind', 'Stomach', 'Female', 'Urinary']
      },
      {
      'name':'MYGALE LASIODORA',
      'link':'http://homeoint.org/books/boericmm/m/mygal.htm',
      'symptom':[ 'Mind', 'Face', 'Stomach', 'Male', 'Extremities']
      },
      {
      'name':'MYOSOTIS SYMPHYTIFOLIA (MYOSOTIS)',
      'link':'http://homeoint.org/books/boericmm/m/myos-s.htm',
      'symptom':[ 'Respiratory']
      },
      {
      'name':'MYRICA CERIFERA (MYRICA)',
      'link':'http://homeoint.org/books/boericmm/m/myric.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urinary', 'Sleep', 'Extremities', 'Skin']
      },
      {
      'name':'MYRISTICA SEBIFERA',
      'link':'http://homeoint.org/books/boericmm/m/myris.htm',
      'symptom':[]
      },
      {
      'name':'MYRTUS COMMUNIS',
      'link':'http://homeoint.org/books/boericmm/m/myrt-c.htm',
      'symptom':[ 'Chest']
      },
      {
      'name':'NAJA TRIPUDIANS',
      'link':'http://homeoint.org/books/boericmm/n/naja.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Respiratory', 'Heart', 'Female', 'Sleep']
      },
      {
      'name':'NAPHTHALINUM (NAPHTHALINE)',
      'link':'http://homeoint.org/books/boericmm/n/naph.htm',
      'symptom':[ 'Head', 'Eyes', 'Urine', 'Respiratory', 'Skin']
      },
      {
      'name':'NARCISSUS PSEUDONARCISSUS (NARCISSUS)',
      'link':'http://homeoint.org/books/boericmm/n/narc-ps.htm',
      'symptom':[ 'Skin']
      },
      {
      'name':'NATRIUM ARSENICOSUM (NATRUM ARSENICUM)',
      'link':'http://homeoint.org/books/boericmm/n/nat-ar.htm',
      'symptom':[ 'Head', 'Nose', 'Ears', 'Throat', 'Respiratory', 'Extremities']
      },
      {
      'name':'NATRIUM CARBONICUM (NATRUM CARBONICUM)',
      'link':'http://homeoint.org/books/boericmm/n/nat-c.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Face', 'Stomach', 'Bowels', 'Female', 'Respiratory', 'Sleep', 'Extremities', 'Skin']
      },
      {
      'name':'NATRIUM HYPOCHLOROSUM (NATRUM CHLORATUM)',
      'link':'http://homeoint.org/books/boericmm/n/nat-hchl.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Urine', 'Female', 'Extremities']
      },
      {
      'name':'NATRIUM MURIATICUM (NATRUM MURIATICUM)',
      'link':'http://homeoint.org/books/boericmm/n/nat-m.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Sleep', 'Skin', 'Fever']
      },
      {
      'name':'NATRIUM NITRICUM (NATRUM NITRICUM)',
      'link':'http://homeoint.org/books/boericmm/n/nat-n.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Heart']
      },
      {
      'name':'NATRIUM PHOSPHORICUM',
      'link':'http://homeoint.org/books/boericmm/n/nat-p.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Male', 'Female', 'Extremities', 'Back', 'Skin']
      },
      {
      'name':'NATRIUM SULPHURICUM (NATRUM SULPHURICUM)',
      'link':'http://homeoint.org/books/boericmm/n/nat-s.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Nose', 'Eyes', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Urine', 'Female', 'Male', 'Respiratory', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'NATRIUM SALICYLICUM (NATRUM SALICYLICUM)',
      'link':'http://homeoint.org/books/boericmm/n/nat-sal.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Chest', 'Skin']
      },
      {
      'name':'NICCOLUM METALLICUM (NICCOLUM)',
      'link':'http://homeoint.org/books/boericmm/n/nicc-met.htm',
      'symptom':[ 'Head', 'Nose', 'Throat', 'Gastric', 'Female', 'Respiratory', 'Skin']
      },
      {
      'name':'NICCOLUM SULPHURICUM',
      'link':'http://homeoint.org/books/boericmm/n/nicc-s.htm',
      'symptom':[ 'Head', 'Back', 'Female']
      },
      {
      'name':'NITRICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/n/nit-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Eyes', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Urine', 'Male', 'Female', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'NITROMURIATICUM ACIDUM (NITRO-MURIATIC ACID)',
      'link':'http://homeoint.org/books/boericmm/n/nit-m-ac.htm',
      'symptom':[ 'Mouth', 'Stomach', 'Stool', 'Urine']
      },
      {
      'name':'NITRI SPIRITUS DULCIS',
      'link':'http://homeoint.org/books/boericmm/n/nit-s-d.htm',
      'symptom':[ 'Face', 'Respiratory']
      },
      {
      'name':'NUPHAR LUTEUM',
      'link':'http://homeoint.org/books/boericmm/n/nuph.htm',
      'symptom':[ 'Male', 'Stool']
      },
      {
      'name':'NUX MOSCHATA',
      'link':'http://homeoint.org/books/boericmm/n/nux-m.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Mouth', 'Stomach', 'Abdomen', 'Female', 'Respiratory', 'Heart', 'Extremities', 'Sleep', 'Fever']
      },
      {
      'name':'NUX VOMICA',
      'link':'http://homeoint.org/books/boericmm/n/nux-v.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Sleep', 'Skin', 'Fever']
      },
      {
      'name':'NYCTANTHES ARBOR TRISTIS',
      'link':'http://homeoint.org/books/boericmm/n/nyct.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Fever']
      },
      {
      'name':'OCIMUM CANUM',
      'link':'http://homeoint.org/books/boericmm/o/oci.htm',
      'symptom':[ 'Urine', 'Male', 'Female']
      },
      {
      'name':'OENANTHE CROCATA',
      'link':'http://homeoint.org/books/boericmm/o/oena.htm',
      'symptom':[ 'Head', 'Respiratory', 'Extremities']
      },
      {
      'name':'OLEUM ANIMALE AETHEREUM (OLEUM ANIMALE)',
      'link':'http://homeoint.org/books/boericmm/o/ol-an.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Urine', 'Male', 'Female', 'Respiratory', 'Extremities']
      },
      {
      'name':'OLEUM JECORIS ASELLI',
      'link':'http://homeoint.org/books/boericmm/o/ol-j.htm',
      'symptom':[ 'Chest', 'Extremities', 'Fever']
      },
      {
      'name':'OLEUM SANTALI',
      'link':'http://homeoint.org/books/boericmm/o/ol-sant.htm',
      'symptom':[ 'Male', 'Urine']
      },
      {
      'name':'OLEANDER (NERIUM ODORUM)',
      'link':'http://homeoint.org/books/boericmm/o/olnd.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Stomach', 'Abdomen', 'Chest', 'Extremities', 'Skin']
      },
      {
      'name':'ONISCUS ASELLUS (MILLEPEDES)',
      'link':'http://homeoint.org/books/boericmm/o/onis.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Urine']
      },
      {
      'name':'ONOSMODIUM VIRGINIANUM (ONOSMODIUM)',
      'link':'http://homeoint.org/books/boericmm/o/onos.htm',
      'symptom':[ 'Head', 'Eyes', 'Throat', 'Abdomen', 'Back', 'Chest', 'Male', 'Female', 'Extremities']
      },
      {
      'name':'OPIUM (PAPAVER SOMNIFERUM)',
      'link':'http://homeoint.org/books/boericmm/o/op.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Respiratory', 'Sleep', 'Fever', 'Back and Extremities', 'Skin', 'Non-Homeopathic Preparations and Uses']
      },
      {
      'name':'OPERCULINA TURPENTHUM (OPERCULINA TURPETHUM)',
      'link':'http://homeoint.org/books/boericmm/o/oper.htm',
      'symptom':[ 'Mind', 'Abdomen', 'Skin']
      },
      {
      'name':'OPUNTIA FICUS (OPUNTIA-FICUS INDICA)',
      'link':'http://homeoint.org/books/boericmm/o/opun-f.htm',
      'symptom':[]
      },
      {
      'name':'OREODAPHNE CALIFORNICA (OREODAPHNE)',
      'link':'http://homeoint.org/books/boericmm/o/oreo.htm',
      'symptom':[ 'Head', 'Stomach']
      },
      {
      'name':'ORIGANUM MAJORANA (ORIGANUM)',
      'link':'http://homeoint.org/books/boericmm/o/orig.htm',
      'symptom':[ 'Female']
      },
      {
      'name':'ORNITHOGALUM UMBELLATUM',
      'link':'http://homeoint.org/books/boericmm/o/orni.htm',
      'symptom':[ 'Stomach']
      },
      {
      'name':'OSMIUM',
      'link':'http://homeoint.org/books/boericmm/o/osm.htm',
      'symptom':[ 'Head', 'Nose', 'Eyes', 'Respiratory', 'Skin']
      },
      {
      'name':'OSTRYA VIRGINICA',
      'link':'http://homeoint.org/books/boericmm/o/ost.htm',
      'symptom':[ 'Gastric']
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
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Abdomen', 'Male', 'Urinary', 'Respiratory', 'Heart', 'Extremities', 'Skin']
      },
      {
      'name':'OXYDENDRON ARBOREUM (OXYDENDRON - ANDROMEDA ARBOREA)',
      'link':'http://homeoint.org/books/boericmm/o/oxyd.htm',
      'symptom':[]
      },
      {
      'name':'OXYTROPIS LAMBERTI (OXYTROPIS)',
      'link':'http://homeoint.org/books/boericmm/o/oxyt.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Stomach', 'Rectum', 'Urine', 'Male', 'Extremities', 'Sleep']
      },
      {
      'name':'PAEONIA OFFICINALIS (PAEONIA)',
      'link':'http://homeoint.org/books/boericmm/p/paeon.htm',
      'symptom':[ 'Head', 'Rectum', 'Chest', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'PALLADIUM METALLICUM (PALLADIUM)',
      'link':'http://homeoint.org/books/boericmm/p/pall.htm',
      'symptom':[ 'Mind', 'Head', 'Abdomen', 'Female', 'Extremities']
      },
      {
      'name':'PARIS QUADRIFOLIA',
      'link':'http://homeoint.org/books/boericmm/p/par.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Mouth', 'Respiratory', 'Extremities']
      },
      {
      'name':'PARAFFINUM (PARAFFINE)',
      'link':'http://homeoint.org/books/boericmm/p/paraf.htm',
      'symptom':[ 'Head', 'Eyes', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Female', 'Extremities', 'Skin']
      },
      {
      'name':'PAREIRA BRAVA (CHONDRODENDRON TOMENTOSUM)',
      'link':'http://homeoint.org/books/boericmm/p/pareir.htm',
      'symptom':[ 'Urinary']
      },
      {
      'name':'PARTHENIUM HYSTEROPHORUS (PARTHENIUM - ESCOBA AMARGO)',
      'link':'http://homeoint.org/books/boericmm/p/parth.htm',
      'symptom':[ 'Head', 'Abdomen']
      },
      {
      'name':'PASSIFLORA INCARNATA',
      'link':'http://homeoint.org/books/boericmm/p/passi.htm',
      'symptom':[ 'Head', 'Stomach', 'Sleep']
      },
      {
      'name':'PENTHORUM SEDOIDES (PENTHORUM)',
      'link':'http://homeoint.org/books/boericmm/p/pen.htm',
      'symptom':[ 'Nose']
      },
      {
      'name':'PERTUSSINUM (PERTUSSIN)',
      'link':'http://homeoint.org/books/boericmm/p/pert.htm',
      'symptom':[]
      },
      {
      'name':'PETROLEUM',
      'link':'http://homeoint.org/books/boericmm/p/petr.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Stomach', 'Abdomen', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'PETROSELINUM SATIVUM (PETROSELINUM)',
      'link':'http://homeoint.org/books/boericmm/p/petros.htm',
      'symptom':[ 'Urinary', 'Stomach']
      },
      {
      'name':'PHOSPHORICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/p/ph-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Face', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'PHASEOLUS NANUS (PHASEOLUS)',
      'link':'http://homeoint.org/books/boericmm/p/phase.htm',
      'symptom':[ 'Head', 'Eyes', 'Chest', 'Urinary', 'Heart']
      },
      {
      'name':'PHELLANDRIUM AQUATICUM (PHELLANDRIUM)',
      'link':'http://homeoint.org/books/boericmm/p/phel.htm',
      'symptom':[ 'Head', 'Eyes', 'Female', 'Chest', 'Fever', 'Extremities']
      },
      {
      'name':'PHOSPHORUS',
      'link':'http://homeoint.org/books/boericmm/p/phos.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'PHYSOSTIGMA VENENOSUM',
      'link':'http://homeoint.org/books/boericmm/p/phys.htm',
      'symptom':[ 'Head', 'Eyes', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Female', 'Heart', 'Extremities']
      },
      {
      'name':'PHYSALIS ALKEKENGI (PHYSALIS - SOLANUM VESICARIUM)',
      'link':'http://homeoint.org/books/boericmm/p/physal.htm',
      'symptom':[ 'Head', 'Extremities', 'Fever', 'Respiratory', 'Urinary', 'Skin']
      },
      {
      'name':'PHYTOLACCA DECANDRA (PHYTOLACCA)',
      'link':'http://homeoint.org/books/boericmm/p/phyt.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Mouth', 'Throat', 'Abdomen', 'Urine', 'Female', 'Male', 'Heart', 'Respiratory', 'Back', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'PICRICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/p/pic-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Stomach', 'Urinary', 'Male', 'Female', 'Extremities']
      },
      {
      'name':'PINUS SILVESTRIS',
      'link':'http://homeoint.org/books/boericmm/p/pin-s.htm',
      'symptom':[ 'Extremities', 'Skin']
      },
      {
      'name':'PIPER METHYSTICUM',
      'link':'http://homeoint.org/books/boericmm/p/pip-m.htm',
      'symptom':[ 'Mind', 'Urine', 'Skin', 'Extremities']
      },
      {
      'name':'PIPER NIGRUM',
      'link':'http://homeoint.org/books/boericmm/p/pip-n.htm',
      'symptom':[ 'Mind', 'Head', 'Throat', 'Stomach', 'Chest', 'Urinary']
      },
      {
      'name':'PITUITARIA GLANDULA (PITUITARY GLAND)',
      'link':'http://homeoint.org/books/boericmm/p/pitu-gl.htm',
      'symptom':[]
      },
      {
      'name':'PIX LIQUIDA',
      'link':'http://homeoint.org/books/boericmm/p/pix.htm',
      'symptom':[ 'Chest', 'Skin']
      },
      {
      'name':'PLANTAGO MAJOR',
      'link':'http://homeoint.org/books/boericmm/p/plan.htm',
      'symptom':[ 'Head', 'Ears', 'Nose', 'Mouth', 'Stool', 'Urine', 'Skin']
      },
      {
      'name':'PLATINUM METALLICUM (PLATINA)',
      'link':'http://homeoint.org/books/boericmm/p/plat.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Face', 'Stomach', 'Abdomen', 'Stool', 'Female', 'Extremities', 'Sleep']
      },
      {
      'name':'PLATANUS OCCIDENTALIS',
      'link':'http://homeoint.org/books/boericmm/p/platan.htm',
      'symptom':[]
      },
      {
      'name':'PLUMBUM METALLICUM',
      'link':'http://homeoint.org/books/boericmm/p/plb.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Male', 'Female', 'Heart', 'Back', 'Skin', 'Extremities']
      },
      {
      'name':'PODOPHYLLINUM (PODOPHYLLUM)',
      'link':'http://homeoint.org/books/boericmm/p/podo.htm',
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Female', 'Extremities', 'Fever']
      },
      {
      'name':'POLYGONUM HYDROPIPEROIDES (POLYGONUM PUNCTATUM)',
      'link':'http://homeoint.org/books/boericmm/p/polyg-h.htm',
      'symptom':[ 'Abdomen', 'Rectum', 'Urinary', 'Female', 'Skin']
      },
      {
      'name':'POLYPORUS PINICOLA',
      'link':'http://homeoint.org/books/boericmm/p/polyp-p.htm',
      'symptom':[ 'Fever']
      },
      {
      'name':'POPULUS TREMULOIDES',
      'link':'http://homeoint.org/books/boericmm/p/pop.htm',
      'symptom':[ 'Stomach', 'Urine']
      },
      {
      'name':'POPULUS CANDICANS',
      'link':'http://homeoint.org/books/boericmm/p/pop-c.htm',
      'symptom':[ 'Head', 'Respiratory', 'Doses']
      },
      {
      'name':'PRIMULA OBCONICA',
      'link':'http://homeoint.org/books/boericmm/p/prim-o.htm',
      'symptom':[ 'Face', 'Extremities', 'Skin']
      },
      {
      'name':'PRIMULA VERIS',
      'link':'http://homeoint.org/books/boericmm/p/prim-v.htm',
      'symptom':[ 'Head', 'Respiratory', 'Urinary', 'Extremities']
      },
      {
      'name':'PROPYLAMINUM (PROPYLAMIN - TRIMETHYLAMINUM)',
      'link':'http://homeoint.org/books/boericmm/p/prop.htm',
      'symptom':[ 'Extremities']
      },
      {
      'name':'PRUNUS SPINOSA',
      'link':'http://homeoint.org/books/boericmm/p/prun.htm',
      'symptom':[ 'Head', 'Eyes', 'Abdomen', 'Rectum', 'Urine', 'Respiratory', 'Skin']
      },
      {
      'name':'PSORINUM',
      'link':'http://homeoint.org/books/boericmm/p/psor.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Mouth', 'Nose', 'Ears', 'Face', 'Throat', 'Stomach', 'Stool', 'Female', 'Respiratory', 'Extremities', 'Skin', 'Fever', 'Sleep']
      },
      {
      'name':'PTELEA TRIFOLIATA (PTELEA)',
      'link':'http://homeoint.org/books/boericmm/p/ptel.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Abdomen', 'Respiratory', 'Sleep']
      },
      {
      'name':'PULSATILLA PRATENSIS (PULSATILLA)',
      'link':'http://homeoint.org/books/boericmm/p/puls.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Eyes', 'Nose', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Urine', 'Female', 'Male', 'Respiratory', 'Sleep', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'PULEX IRRITANS',
      'link':'http://homeoint.org/books/boericmm/p/pulx.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Urine', 'Female', 'Back', 'Fever', 'Skin']
      },
      {
      'name':'PYROGENIUM',
      'link':'http://homeoint.org/books/boericmm/p/pyrog.htm',
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Stomach', 'Abdomen', 'Stool', 'Heart', 'Female', 'Fever', 'Extremities', 'Skin', 'Sleep']
      },
      {
      'name':'QUASSIA AMARA (QUASSIA - PICRAENA EXCELSA)',
      'link':'http://homeoint.org/books/boericmm/q/quas.htm',
      'symptom':[ 'Stomach', 'Urinary', 'Extremities']
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
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Stomach', 'Abdomen', 'Urinary', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'RANUNCULUS BULBOSUS',
      'link':'http://homeoint.org/books/boericmm/r/ran-b.htm',
      'symptom':[ 'Head', 'Eyes', 'Chest', 'Skin']
      },
      {
      'name':'RANUNCULUS SCELERATUS',
      'link':'http://homeoint.org/books/boericmm/r/ran-s.htm',
      'symptom':[ 'Head', 'Mouth', 'Abdomen', 'Chest', 'Skin', 'Extremities']
      },
      {
      'name':'RAPHANUS SATIVUS (RAPHANUS)',
      'link':'http://homeoint.org/books/boericmm/r/raph.htm',
      'symptom':[ 'Head', 'Throat', 'Stomach', 'Abdomen', 'Female', 'Urine', 'Chest']
      },
      {
      'name':'RATANHIA PERUVIANA (RATANHIA)',
      'link':'http://homeoint.org/books/boericmm/r/rat.htm',
      'symptom':[ 'Head', 'Stomach', 'Rectum']
      },
      {
      'name':'RHAMNUS CALIFORNICA',
      'link':'http://homeoint.org/books/boericmm/r/rham-cal.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Face', 'Mouth', 'Throat', 'Bowels', 'Urinary', 'Respiratory', 'Heart', 'Extremities']
      },
      {
      'name':'RHEUM PALMATUM (RHEUM)',
      'link':'http://homeoint.org/books/boericmm/r/rheum.htm',
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Stomach', 'Abdomen', 'Rectum']
      },
      {
      'name':'RHODODENDRON FERRUGINEUM (RHODODENDRON)',
      'link':'http://homeoint.org/books/boericmm/r/rhod-f.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Face', 'Chest', 'Male', 'Extremities']
      },
      {
      'name':'RHODIUM METALLICUM (RHODIUM)',
      'link':'http://homeoint.org/books/boericmm/r/rhodi.htm',
      'symptom':[]
      },
      {
      'name':'RHUS AROMATICA',
      'link':'http://homeoint.org/books/boericmm/r/rhus-a.htm',
      'symptom':[ 'Urine']
      },
      {
      'name':'RHUS GLABRA',
      'link':'http://homeoint.org/books/boericmm/r/rhus-g.htm',
      'symptom':[ 'Mouth']
      },
      {
      'name':'RHUS TOXICODENDRON',
      'link':'http://homeoint.org/books/boericmm/r/rhus-t.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Fever', 'Skin', 'Sleep']
      },
      {
      'name':'RHUS VENENATA',
      'link':'http://homeoint.org/books/boericmm/r/rhus-v.htm',
      'symptom':[ 'Mind', 'Head', 'Tongue', 'Abdomen', 'Extremities', 'Skin']
      },
      {
      'name':'RICINUS COMMUNIS (RICINUS COMMUNIS - BOFAREIRA)',
      'link':'http://homeoint.org/books/boericmm/r/ric.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Stool']
      },
      {
      'name':'ROBINIA PSEUDACACIA (ROBINIA)',
      'link':'http://homeoint.org/books/boericmm/r/rob.htm',
      'symptom':[ 'Head', 'Stomach', 'Female']
      },
      {
      'name':'ROSA DAMASCENA',
      'link':'http://homeoint.org/books/boericmm/r/ros-d.htm',
      'symptom':[ 'Ears']
      },
      {
      'name':'RUMEX CRISPUS',
      'link':'http://homeoint.org/books/boericmm/r/rumx.htm',
      'symptom':[ 'Stomach', 'Respiratory', 'Stool', 'Skin']
      },
      {
      'name':'RUTA GRAVEOLENS',
      'link':'http://homeoint.org/books/boericmm/r/ruta.htm',
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Urinary', 'Rectum', 'Respiratory', 'Back', 'Extremities']
      },
      {
      'name':'SABADILLA',
      'link':'http://homeoint.org/books/boericmm/s/sabad.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Throat', 'Stomach', 'Female', 'Fever', 'Extremities', 'Skin']
      },
      {
      'name':'SABAL SERRULATA',
      'link':'http://homeoint.org/books/boericmm/s/sabal.htm',
      'symptom':[ 'Head', 'Stomach', 'Urinary', 'Male', 'Female', 'Respiratory']
      },
      {
      'name':'SABINA',
      'link':'http://homeoint.org/books/boericmm/s/sabin.htm',
      'symptom':[ 'Mind', 'Head', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Male', 'Female', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'SACCHARUM OFFICINALE (SUCROSE)',
      'link':'http://homeoint.org/books/boericmm/s/sacch.htm',
      'symptom':[]
      },
      {
      'name':'SALICYLICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/s/sal-ac.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Throat', 'Stomach', 'Stools', 'Extremities', 'Skin']
      },
      {
      'name':'SALIX NIGRA',
      'link':'http://homeoint.org/books/boericmm/s/sal-n.htm',
      'symptom':[ 'Face', 'Female', 'Male', 'Back']
      },
      {
      'name':'SALVIA OFFICINALIS',
      'link':'http://homeoint.org/books/boericmm/s/salv.htm',
      'symptom':[ 'Respiratory', 'Skin']
      },
      {
      'name':'SAMBUCUS NIGRA',
      'link':'http://homeoint.org/books/boericmm/s/samb.htm',
      'symptom':[ 'Mind', 'Face', 'Abdomen', 'Urine', 'Respiratory', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'SANGUINARIA CANADENSIS (SANGUINARIA)',
      'link':'http://homeoint.org/books/boericmm/s/sang.htm',
      'symptom':[ 'Head', 'Face', 'Nose', 'Ears', 'Throat', 'Stomach', 'Abdomen', 'Female', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'SANGUINARINUM NITRICUM (SANGUINARINA NITRICA)',
      'link':'http://homeoint.org/books/boericmm/s/sangin-n.htm',
      'symptom':[ 'Nose', 'Throat', 'Mouth', 'Respiratory']
      },
      {
      'name':'SANICULA AQUA (SANICULA)',
      'link':'http://homeoint.org/books/boericmm/s/sanic.htm',
      'symptom':[ 'Head', 'Throat', 'Mouth', 'Stomach', 'Rectum', 'Female', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'SANTONINUM',
      'link':'http://homeoint.org/books/boericmm/s/santin.htm',
      'symptom':[ 'Head', 'Eyes', 'Mouth', 'Urinary']
      },
      {
      'name':'SAPONARIA OFFICINALIS (SAPONARIA)',
      'link':'http://homeoint.org/books/boericmm/s/sapo.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Stomach', 'Heart']
      },
      {
      'name':'SARCOLACTICUM ACIDUM (SARCOLACTIC ACID)',
      'link':'http://homeoint.org/books/boericmm/s/sarcol-a.htm',
      'symptom':[ 'Throat', 'Stomach', 'Back and Extremities']
      },
      {
      'name':'SAROTHAMNUS SCOPARIUS (SPARTIUM SCOPARIUM - CYSTISUS SCOPARIUS)',
      'link':'http://homeoint.org/books/boericmm/s/saroth.htm',
      'symptom':[ 'Heart', 'Stomach', 'Urinary']
      },
      {
      'name':'SARRACENIA PURPUREA',
      'link':'http://homeoint.org/books/boericmm/s/sarr.htm',
      'symptom':[ 'Eyes', 'Stomach', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'SARSAPARILLA OFFICINALIS (SARSAPARILLA)',
      'link':'http://homeoint.org/books/boericmm/s/sars.htm',
      'symptom':[ 'Mind', 'Head', 'Mouth', 'Abdomen', 'Urinary', 'Male', 'Female', 'Skin', 'Extremities']
      },
      {
      'name':'SCROPHULARIA NODOSA',
      'link':'http://homeoint.org/books/boericmm/s/scroph-n.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Abdomen', 'Respiratory', 'Skin', 'Sleep']
      },
      {
      'name':'SCUTELLARIA LATERIFOLIA',
      'link':'http://homeoint.org/books/boericmm/s/scut.htm',
      'symptom':[ 'Mental', 'Head', 'Stomach', 'Abdomen', 'Male', 'Sleep', 'Extremities']
      },
      {
      'name':'SECALE CORNUTUM (CLAVICEPS PURPUREA)',
      'link':'http://homeoint.org/books/boericmm/s/sec.htm',
      'symptom':[ 'Head', 'Eyes', 'Face', 'Mouth', 'Stomach', 'Stool', 'Urine', 'Female', 'Chest', 'Sleep', 'Back', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'SEDUM ACRE',
      'link':'http://homeoint.org/books/boericmm/s/sed-ac.htm',
      'symptom':[]
      },
      {
      'name':'SELENIUM METALLICUM (SELENIUM)',
      'link':'http://homeoint.org/books/boericmm/s/sel.htm',
      'symptom':[ 'Mind', 'Head', 'Throat', 'Stomach', 'Abdomen', 'Urinary', 'Male', 'Skin', 'Extremities', 'Sleep']
      },
      {
      'name':'SEMPERVIVUM TECTORUM',
      'link':'http://homeoint.org/books/boericmm/s/semp.htm',
      'symptom':[ 'Mouth', 'Skin']
      },
      {
      'name':'SENECIO AUREUS',
      'link':'http://homeoint.org/books/boericmm/s/senec.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Stomach', 'Throat', 'Abdomen', 'Urinary', 'Male', 'Female', 'Respiratory', 'Sleep']
      },
      {
      'name':'SENEGA',
      'link':'http://homeoint.org/books/boericmm/s/seneg.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Face', 'Throat', 'Respiratory', 'Urinary']
      },
      {
      'name':'SENNA',
      'link':'http://homeoint.org/books/boericmm/s/senn.htm',
      'symptom':[ 'Stool', 'Urine']
      },
      {
      'name':'SEPIA OFFICINALIS (SEPIA)',
      'link':'http://homeoint.org/books/boericmm/s/sep.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Eyes', 'Ears', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Male', 'Female', 'Respiratory', 'Heart', 'Back', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'SERUM ANGUILLAE (SERUM ANGUILLAR ICHTHYOTOXIN)',
      'link':'http://homeoint.org/books/boericmm/s/ser-ang.htm',
      'symptom':[]
      },
      {
      'name':'SILICEA TERRA (SILICEA)',
      'link':'http://homeoint.org/books/boericmm/s/sil.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Male', 'Female', 'Respiratory', 'Back', 'Sleep', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'SILPHIUM LACINATUM (SILPHIUM)',
      'link':'http://homeoint.org/books/boericmm/s/silphu.htm',
      'symptom':[ 'Respiratory']
      },
      {
      'name':'SINAPIS NIGRA (BRASSICA NIGRA)',
      'link':'http://homeoint.org/books/boericmm/s/sin-n.htm',
      'symptom':[ 'Head', 'Nose', 'Respiratory', 'Throat', 'Stomach', 'Urinary', 'Back']
      },
      {
      'name':'SKATOLUM (SKATOL)',
      'link':'http://homeoint.org/books/boericmm/s/skat.htm',
      'symptom':[ 'Mind', 'Head', 'Gastric', 'Urinary', 'Sleep']
      },
      {
      'name':'SKOOKUM CHUCK AQUA (SKOOKUM - CHUCK)',
      'link':'http://homeoint.org/books/boericmm/s/skook.htm',
      'symptom':[]
      },
      {
      'name':'SOLANUM NIGRUM',
      'link':'http://homeoint.org/books/boericmm/s/sol-n.htm',
      'symptom':[ 'Head', 'Nose', 'Eyes', 'Respiratory', 'Fever']
      },
      {
      'name':'SOLIDAGO VIRGAUREA (SOLIDAGO VIRGA)',
      'link':'http://homeoint.org/books/boericmm/s/solid.htm',
      'symptom':[ 'Eyes', 'Nose', 'Stomach', 'Respiratory', 'Female', 'Urine', 'Back', 'Skin']
      },
      {
      'name':'SPIGELIA ANTHELMIA (SPIGELIA)',
      'link':'http://homeoint.org/books/boericmm/s/spig.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Mouth', 'Face', 'Heart', 'Rectum', 'Fever']
      },
      {
      'name':'SPIRANTHES AUTUMNALIS (SPIRANTHES)',
      'link':'http://homeoint.org/books/boericmm/s/spira.htm',
      'symptom':[ 'Female', 'Extremities', 'Fever']
      },
      {
      'name':'SPIRAEA ULMARIA',
      'link':'http://homeoint.org/books/boericmm/s/spirae.htm',
      'symptom':[]
      },
      {
      'name':'SPONGIA TOSTA',
      'link':'http://homeoint.org/books/boericmm/s/spong.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Male', 'Female', 'Respiratory', 'Heart', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'SQUILLA MARITIMA',
      'link':'http://homeoint.org/books/boericmm/s/squil.htm',
      'symptom':[ 'Eyes', 'Stomach', 'Respiratory', 'Heart', 'Urinary', 'Skin', 'Extremities']
      },
      {
      'name':'STACHYS BETONICA (BETONICA)',
      'link':'http://homeoint.org/books/boericmm/s/stach.htm',
      'symptom':[ 'Head', 'Abdomen', 'Extremities']
      },
      {
      'name':'STANNUM METALLICUM (STANNUM)',
      'link':'http://homeoint.org/books/boericmm/s/stann.htm',
      'symptom':[ 'Mind', 'Head', 'Throat', 'Stomach', 'Abdomen', 'Female', 'Respiratory', 'Sleep', 'Extremities', 'Fever']
      },
      {
      'name':'STAPHYSAGRIA',
      'link':'http://homeoint.org/books/boericmm/s/staph.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Throat', 'Mouth', 'Stomach', 'Abdomen', 'Male', 'Female', 'Urinary', 'Skin', 'Extremities']
      },
      {
      'name':'STELLARIA MEDIA',
      'link':'http://homeoint.org/books/boericmm/s/stel.htm',
      'symptom':[ 'Head', 'Abdomen', 'Extremities']
      },
      {
      'name':'STICTA PULMONARIA (STICTA)',
      'link':'http://homeoint.org/books/boericmm/s/stict.htm',
      'symptom':[ 'Mind', 'Head', 'Nose', 'Female', 'Abdomen', 'Respiratory', 'Extremities']
      },
      {
      'name':'STIGMATA MAYDIS (ZEA)',
      'link':'http://homeoint.org/books/boericmm/s/stigm.htm',
      'symptom':[ 'Urinary']
      },
      {
      'name':'STILLINGIA SILVATICA (STILLINGIA)',
      'link':'http://homeoint.org/books/boericmm/s/still.htm',
      'symptom':[ 'Mind', 'Respiratory', 'Urinary', 'Extremities', 'Skin']
      },
      {
      'name':'STRAMONIUM',
      'link':'http://homeoint.org/books/boericmm/s/stram.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Mouth', 'Stomach', 'Urine', 'Male', 'Female', 'Sleep', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'STRONTIUM CARBONICUM (STRONTIA)',
      'link':'http://homeoint.org/books/boericmm/s/stront-c.htm',
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Abdomen', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'STROPHANTHUS HISPIDUS',
      'link':'http://homeoint.org/books/boericmm/s/stroph-h.htm',
      'symptom':[ 'Head', 'Stomach', 'Urinary', 'Female', 'Respiratory', 'Heart', 'Skin', 'Extremities']
      },
      {
      'name':'STRYCHNINUM PURUM (STRYCHNINUM)',
      'link':'http://homeoint.org/books/boericmm/s/stry.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Female', 'Respiratory', 'Back', 'Extremities', 'Fever', 'Skin']
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
      'symptom':[ 'Head', 'Respiratory']
      },
      {
      'name':'SULPHURICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/s/sul-ac.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Female', 'Respiratory', 'Extremities', 'Skin']
      },
      {
      'name':'SULPHUR IODATUM',
      'link':'http://homeoint.org/books/boericmm/s/sul-i.htm',
      'symptom':[ 'Throat', 'Skin']
      },
      {
      'name':'SULFONALUM (SULFONAL)',
      'link':'http://homeoint.org/books/boericmm/s/sulfon.htm',
      'symptom':[ 'Mind', 'Head', 'Urinary', 'Respiratory', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'SULPHUROSUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/s/sulo-ac.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Respiratory', 'Female']
      },
      {
      'name':'SULPHUR',
      'link':'http://homeoint.org/books/boericmm/s/sulph.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Sleep', 'Fever', 'Skin']
      },
      {
      'name':'SUMBULUS MOSCHATUS (SUMBUL - FERULA SUMBUL)',
      'link':'http://homeoint.org/books/boericmm/s/sumb.htm',
      'symptom':[ 'Head', 'Throat', 'Heart', 'Female', 'Urinary']
      },
      {
      'name':'SYMPHORICARPUS RACEMOSUS (SYMPHORICARPUS RACEMOSA)',
      'link':'http://homeoint.org/books/boericmm/s/sym-r.htm',
      'symptom':[]
      },
      {
      'name':'SYMPHYTUM OFFICINALE (SYMPHYTUM)',
      'link':'http://homeoint.org/books/boericmm/s/symph.htm',
      'symptom':[ 'Head', 'Eyes']
      },
      {
      'name':'SYPHILINUM',
      'link':'http://homeoint.org/books/boericmm/s/syph.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Stomach', 'Rectum', 'Extremities', 'Female', 'Respiratory', 'Skin']
      },
      {
      'name':'SYZYGIUM JAMBOLANUM',
      'link':'http://homeoint.org/books/boericmm/s/syzyg.htm',
      'symptom':[]
      },
      {
      'name':'TABACUM',
      'link':'http://homeoint.org/books/boericmm/t/tab.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urinary', 'Heart', 'Respiratory', 'Extremities', 'Sleep', 'Fever']
      },
      {
      'name':'TANACETUM VULGARE',
      'link':'http://homeoint.org/books/boericmm/t/tanac.htm',
      'symptom':[ 'Head', 'Mental', 'Ears', 'Abdomen', 'Female', 'Respiratory']
      },
      {
      'name':'TANNICUM ACIDUM (TANNIC ACID)',
      'link':'http://homeoint.org/books/boericmm/t/tann-ac.htm',
      'symptom':[]
      },
      {
      'name':'TARAXACUM OFFICINALE',
      'link':'http://homeoint.org/books/boericmm/t/tarax.htm',
      'symptom':[ 'Head', 'Mouth', 'Abdomen', 'Extremities', 'Fever', 'Skin']
      },
      {
      'name':'TARENTULA HISPANICA',
      'link':'http://homeoint.org/books/boericmm/t/tarent.htm',
      'symptom':[ 'Mind', 'Head', 'Male', 'Heart', 'Female', 'Extremities']
      },
      {
      'name':'TARENTULA CUBENSIS',
      'link':'http://homeoint.org/books/boericmm/t/tarent-c.htm',
      'symptom':[ 'Head', 'Gastric', 'Back', 'Extremities', 'Urinary', 'Skin', 'Sleep']
      },
      {
      'name':'TARTARICUM ACIDUM',
      'link':'http://homeoint.org/books/boericmm/t/tart-ac.htm',
      'symptom':[ 'Stomach', 'Abdomen']
      },
      {
      'name':'TAXUS BACCATA',
      'link':'http://homeoint.org/books/boericmm/t/tax.htm',
      'symptom':[ 'Head', 'Stomach', 'Skin']
      },
      {
      'name':'TELLURIUM METALLICUM (TELLURIUM)',
      'link':'http://homeoint.org/books/boericmm/t/tell.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Stomach', 'Rectum', 'Back', 'Skin']
      },
      {
      'name':'TEREBINTHINIAE OLEUM (TEREBINTHINA)',
      'link':'http://homeoint.org/books/boericmm/t/ter.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Mouth', 'Stomach', 'Abdomen', 'Urinary', 'Female', 'Respiratory', 'Heart', 'Back', 'Skin', 'Fever']
      },
      {
      'name':'TEUCRIUM MARUM VERUM (TEUCRIUM MARUM)',
      'link':'http://homeoint.org/books/boericmm/t/teucr.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Nose', 'Stomach', 'Respiratory', 'Extremities', 'Rectum', 'Sleep', 'Skin']
      },
      {
      'name':'THALLIUM METALLICUM (THALLIUM)',
      'link':'http://homeoint.org/books/boericmm/t/thal-met.htm',
      'symptom':[ 'Extremities']
      },
      {
      'name':'THEA CHINENSIS (THEA)',
      'link':'http://homeoint.org/books/boericmm/t/thea.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Female', 'Heart', 'Sleep']
      },
      {
      'name':'THERIDION CURASSAVICUM (THERIDION)',
      'link':'http://homeoint.org/books/boericmm/t/ther.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Stomach', 'Respiratory', 'Back', 'Skin']
      },
      {
      'name':'THIOSINAMINUM (RHODALLIN)',
      'link':'http://homeoint.org/books/boericmm/t/thiosin.htm',
      'symptom':[ 'Ears']
      },
      {
      'name':'THLASPI BURSA PASTORIS (CAPSELLA)',
      'link':'http://homeoint.org/books/boericmm/t/thlas.htm',
      'symptom':[ 'Head', 'Nose', 'Male', 'Female', 'Urinary']
      },
      {
      'name':'THUJA OCCIDENTALIS',
      'link':'http://homeoint.org/books/boericmm/t/thuj.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Stomach', 'Abdomen', 'Urinary', 'Male', 'Female', 'Respiratory', 'Extremities', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'THYMOLUM (THYMOL)',
      'link':'http://homeoint.org/books/boericmm/t/thymol.htm',
      'symptom':[ 'Mental', 'Back', 'Male', 'Sleep']
      },
      {
      'name':'THYMUS SERPYLLUM',
      'link':'http://homeoint.org/books/boericmm/t/thymu.htm',
      'symptom':[]
      },
      {
      'name':'THYROIDINUM',
      'link':'http://homeoint.org/books/boericmm/t/thyr.htm',
      'symptom':[ 'Mind', 'Head', 'Heart', 'Eyes', 'Throat', 'Stomach', 'Urinary', 'Extremities', 'Respiratory', 'Skin']
      },
      {
      'name':'TILIA EUROPAEA (TILIA EUROPA)',
      'link':'http://homeoint.org/books/boericmm/t/til.htm',
      'symptom':[ 'Head', 'Eyes', 'Female', 'Skin']
      },
      {
      'name':'TITANIUM METALLICUM (TITANIUM)',
      'link':'http://homeoint.org/books/boericmm/t/titan.htm',
      'symptom':[]
      },
      {
      'name':'TONGO-DIPTERIX ODORATA (TONGO - DIPTRIX ODORATA)',
      'link':'http://homeoint.org/books/boericmm/t/tong.htm',
      'symptom':[ 'Head', 'Extremities']
      },
      {
      'name':'TORULA CEREVISIAE',
      'link':'http://homeoint.org/books/boericmm/t/tor.htm',
      'symptom':[ 'Head', 'Stomach', 'Extremities', 'Sleep', 'Skin']
      },
      {
      'name':'TRIBULUS TERRESTRIS',
      'link':'http://homeoint.org/books/boericmm/t/trib.htm',
      'symptom':[]
      },
      {
      'name':'TRIFOLIUM PRATENSE',
      'link':'http://homeoint.org/books/boericmm/t/trif-p.htm',
      'symptom':[ 'Head', 'Mouth', 'Respiratory', 'Back', 'Extremities']
      },
      {
      'name':'TRILLIUM PENDULUM',
      'link':'http://homeoint.org/books/boericmm/t/tril-p.htm',
      'symptom':[ 'Head', 'Mouth', 'Stomach', 'Rectum', 'Female', 'Respiratory']
      },
      {
      'name':'TRINITROTOLUENUM (TRINITROTOLUENE)',
      'link':'http://homeoint.org/books/boericmm/t/trinit.htm',
      'symptom':[ 'Head', 'Respiratory', 'Gastro-Intestinal', 'Cardio-Vascular', 'Urinary', 'Skin']
      },
      {
      'name':'TRIOSTEUM PERFOLIATUM',
      'link':'http://homeoint.org/books/boericmm/t/trios.htm',
      'symptom':[ 'Head', 'Stomach', 'Extremities', 'Skin']
      },
      {
      'name':'TRITICUM REPENS-AGROPYRON REPENS (TRITICUM)',
      'link':'http://homeoint.org/books/boericmm/t/tritic.htm',
      'symptom':[ 'Nose', 'Urinary']
      },
      {
      'name':'TROMBIDIUM MUSCAE DOMESTICAE (TROMBIDIUM)',
      'link':'http://homeoint.org/books/boericmm/t/trom.htm',
      'symptom':[ 'Abdomen']
      },
      {
      'name':'TUBERCULINUM',
      'link':'http://homeoint.org/books/boericmm/t/tub.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Stomach', 'Abdomen', 'Female', 'Respiratory', 'Back', 'Skin', 'Sleep', 'Fever']
      },
      {
      'name':'TUSSILAGO PETASITES',
      'link':'http://homeoint.org/books/boericmm/t/tus-p.htm',
      'symptom':[ 'Urinary', 'Male']
      },
      {
      'name':'UPAS TIEUT (UPAS TIENTE)',
      'link':'http://homeoint.org/books/boericmm/u/upa.htm',
      'symptom':[ 'Head', 'Eyes', 'Mouth', 'Male', 'Chest', 'Skin']
      },
      {
      'name':'URANIUM NITRICUM',
      'link':'http://homeoint.org/books/boericmm/u/uran-n.htm',
      'symptom':[ 'Head', 'Eyes', 'Stomach', 'Urinary', 'Male']
      },
      {
      'name':'UREA PURA (UREA)',
      'link':'http://homeoint.org/books/boericmm/u/urea.htm',
      'symptom':[]
      },
      {
      'name':'URTICA URENS',
      'link':'http://homeoint.org/books/boericmm/u/urt-u.htm',
      'symptom':[ 'Head', 'Abdomen', 'Male', 'Female', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'USNEA BARBATA',
      'link':'http://homeoint.org/books/boericmm/u/usn.htm',
      'symptom':[ 'Head']
      },
      {
      'name':'USTILAGO MAYDIS',
      'link':'http://homeoint.org/books/boericmm/u/ust.htm',
      'symptom':[ 'Head', 'Male', 'Female', 'Fever', 'Extremities', 'Skin']
      },
      {
      'name':'UVA URSI',
      'link':'http://homeoint.org/books/boericmm/u/uva.htm',
      'symptom':[ 'Urinary']
      },
      {
      'name':'VACCININUM',
      'link':'http://homeoint.org/books/boericmm/v/vac.htm',
      'symptom':[ 'Mind', 'Head', 'Skin']
      },
      {
      'name':'VALERIANA OFFICINALIS (VALERIANA)',
      'link':'http://homeoint.org/books/boericmm/v/valer.htm',
      'symptom':[ 'Mind', 'Head', 'Ears', 'Throat', 'Stomach', 'Abdomen', 'Respiratory', 'Female', 'Extremities', 'Sleep', 'Fever']
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
      'symptom':[ 'Head', 'Respiratory', 'Fever', 'Skin']
      },
      {
      'name':'VERATRUM ALBUM',
      'link':'http://homeoint.org/books/boericmm/v/verat.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Face', 'Mouth', 'Stomach', 'Abdomen', 'Rectum', 'Respiratory', 'Heart', 'Female', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'VERATRUM VIRIDE',
      'link':'http://homeoint.org/books/boericmm/v/verat-v.htm',
      'symptom':[ 'Mind', 'Head', 'Tongue', 'Stomach', 'Abdomen', 'Respiratory', 'Urine', 'Female', 'Heart', 'Extremities', 'Skin', 'Fever']
      },
      {
      'name':'VERBASCUM THAPSUS (VERBASCUM)',
      'link':'http://homeoint.org/books/boericmm/v/verb.htm',
      'symptom':[ 'Face', 'Ears', 'Abdomen', 'Rectum', 'Respiratory', 'Urinary', 'Extremities']
      },
      {
      'name':'VERBENA URTICAEFOLIA (VERBENA)',
      'link':'http://homeoint.org/books/boericmm/v/verbe-u.htm',
      'symptom':[]
      },
      {
      'name':'VESPA CRABRO',
      'link':'http://homeoint.org/books/boericmm/v/vesp.htm',
      'symptom':[ 'Face', 'Urinary', 'Female', 'Skin']
      },
      {
      'name':'VIBURNUM OPULUS',
      'link':'http://homeoint.org/books/boericmm/v/vib.htm',
      'symptom':[ 'Head', 'Stomach', 'Abdomen', 'Female', 'Urinary', 'Rectum', 'Extremities']
      },
      {
      'name':'VINCA MINOR',
      'link':'http://homeoint.org/books/boericmm/v/vinc.htm',
      'symptom':[ 'Head', 'Nose', 'Throat', 'Female', 'Skin']
      },
      {
      'name':'VIOLA ODORATA',
      'link':'http://homeoint.org/books/boericmm/v/viol-o.htm',
      'symptom':[ 'Head', 'Eyes', 'Ears', 'Respiratory', 'Extremities', 'Urinary']
      },
      {
      'name':'VIOLA TRICOLOR',
      'link':'http://homeoint.org/books/boericmm/v/viol-t.htm',
      'symptom':[ 'Head', 'Throat', 'Urinary', 'Male', 'Skin']
      },
      {
      'name':'VIPERA BERUS (VIPERA)',
      'link':'http://homeoint.org/books/boericmm/v/vip.htm',
      'symptom':[ 'Face', 'Liver', 'Extremities', 'Skin']
      },
      {
      'name':'VISCUM ALBUM',
      'link':'http://homeoint.org/books/boericmm/v/visc.htm',
      'symptom':[ 'Head', 'Respiratory', 'Female', 'Heart', 'Extremities']
      },
      {
      'name':'WYETHIA HELENOIDES (WYETHIA)',
      'link':'http://homeoint.org/books/boericmm/w/wye.htm',
      'symptom':[ 'Head', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Stool', 'Respiratory', 'Female', 'Extremities', 'Fever']
      },
      {
      'name':'X-RAY',
      'link':'http://homeoint.org/books/boericmm/x/x-ray.htm',
      'symptom':[ 'Head', 'Mouth', 'Male', 'Extremities', 'Skin']
      },
      {
      'name':'XANTOXYLUM FRAXINEUM (XANTHOXYLUM)',
      'link':'http://homeoint.org/books/boericmm/x/xan.htm',
      'symptom':[ 'Mind', 'Head', 'Face', 'Abdomen', 'Female', 'Respiratory', 'Extremities', 'Sleep']
      },
      {
      'name':'XEROPHYLLUM',
      'link':'http://homeoint.org/books/boericmm/x/xero.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Nose', 'Face', 'Throat', 'Stomach', 'Abdomen', 'Rectum', 'Urine', 'Female', 'Respiratory', 'Back', 'Extremities', 'Skin']
      },
      {
      'name':'YOHIMBINUM',
      'link':'http://homeoint.org/books/boericmm/y/yohim.htm',
      'symptom':[ 'Head', 'Sexual', 'Fever', 'Sleep']
      },
      {
      'name':'YUCCA FILAMENTOSA',
      'link':'http://homeoint.org/books/boericmm/y/yuc.htm',
      'symptom':[ 'Head', 'Face', 'Mouth', 'Throat', 'Abdomen', 'Male', 'Skin']
      },
      {
      'name':'ZINCUM METALLICUM (ZINC)',
      'link':'http://homeoint.org/books/boericmm/z/zinc.htm',
      'symptom':[ 'Mind', 'Head', 'Eyes', 'Ears', 'Nose', 'Face', 'Mouth', 'Throat', 'Stomach', 'Abdomen', 'Urine', 'Rectum', 'Male', 'Female', 'Respiratory', 'Back', 'Extremities', 'Sleep', 'Skin', 'Fever']
      },
      {
      'name':'ZINCUM VALERIANICUM (ZINCUM VALERIANUM)',
      'link':'http://homeoint.org/books/boericmm/z/zinc-val.htm',
      'symptom':[ 'Head', 'Female', 'Extremities']
      },
      {
      'name':'ZINGIBER OFFICINALE (ZINGIBER)',
      'link':'http://homeoint.org/books/boericmm/z/zing.htm',
      'symptom':[ 'Head', 'Nose', 'Stomach', 'Abdomen', 'Urinary', 'Male', 'Respiratory', 'Extremities']
      },
      {
      'name':'ZIZIA AUREA (THASPIUM AUREUM - ZIZIA)',
      'link':'http://homeoint.org/books/boericmm/z/ziz.htm',
      'symptom':[ 'Mind', 'Head', 'Male', 'Female', 'Respiratory', 'Extremities']
      }
];
  $scope.uncheckAll = function() {
    console.log("Filters Reset");
    $scope.search = {};
  };
}]);
