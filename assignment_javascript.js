
//problem 1
class resturantManager
{
    resturantlist =[{name:"my cafe",address:"12th cross,basavanagudi",city:"banglore"},
    {name:"come to drink",address:"rajajinagar 11th cross",city:"shivmoga city"},
    { name:"free coffee shop",address:"ranginagudda near kanmani circle",city:"mysore"
    }
        
        ];
        printAllResturantsNames(){
            this.resturantlist.forEach((item) => {
                console.log(item.name);
                  
            })
        }

        filterRestaurantByCity(city){
             this.resturantlist.filter((item) => {
                if (item.city==city){
                    console.log(city);
                }
            })

        }

        
        



}
let obj = new resturantManager();
obj.printAllResturantsNames();
obj.filterRestaurantByCity("mysore");




 //problem 2    
  //to calculate total number of orders placed
     orderData = {
        'Below 500': 20,
        '500-1000': 29,
        '1000-1500': 30,
        '1500-2000': 44,
        'Above 2000': 76
     }
    var arr = Object.values(orderData);
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log("total orders is "+sum);
    
    //to calculate total number of orders placed

   var arr1=Object.keys(orderData);
   
   count = 0;
   for(var i=0;i<arr1.length;i++){
       var s = arr1[i];
       for(var j=0;j<s.length;j++){
              if(s[j]=="-")
              {
                  console.log(s);
                  count = count + 1 ;
              }
       }

   }
   console.log("number of order that is in proportion is "+count);//which has value range
   console.log("total number of proportins present is  "+ arr1.length);


   // to give order percentage in expected format
     var inn=[];
    for(var i=0;i<arr.length;i++)
    {
    var old ={
        id: i+1,
        order:arr1[i],
        orderpercentage:((arr[i]/sum)*100),
        resturant:'punjabi tadak'
    }
    inn.push(old)//to append elements
}
console.log(inn);






















   


   


  
   

  















