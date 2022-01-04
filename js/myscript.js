const URL = "https://covid19.mathdro.id/api";

let app=angular.module("Myapp",[]);

app.controller("Mycontroller",($scope,$http)=>{

    $scope.hellow="Stay Home Stay Safe";

   $http.get(URL).then(
       (response)=>{
console.log(response.data);

        $scope.all_data = response.data;
    
    
    },
       (error)=>{
console.log(error.data)
       }
       );

       $scope.county_data=()=>{
              let country=$scope.c;
              if(country==""){
                     $scope.data_of_countries=undefined;
                     return;
              }
              $http.get(`${URL}/countries/${country}`).then(
                     (response)=>{
                            console.log(response.data);
                            $scope.data_of_countries=response.data;
                     },
                     (error)=>{
                            console.log(error.data);
                     }
              )
       };
       

      
});