// Write a Python script to concatenate following dictionaries to create a 
Dictionary :
dic1={1:10, 2:20}
dic2={3:30, 4:40}
dic3={5:50,6:60}

for (i in dic1){
    for (j in dic2){
      if (i==j){
          dic3[i]=dic1[i]+dic2[j]
          break
      }
       else{
          dic3[i]=dic1[i]
          dic3[j]=dic2[j]
       }
    } 
  }
  console.log(dic3);
