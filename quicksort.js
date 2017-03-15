var quicksort = function(arr,left,right){
  if(left>=right)return;
  var i = left,j = right;
  var curV = arr[left];
  while(i < j){
    while(i < j){
      if(curV > arr[j]){
        arr[i] = arr[j];
        break;
      }
      j--;
    }

    while(i < j){
      if(curV < arr[i]){
        arr[j] = arr[i];
        break;
      }
      i++;

    }
  }
  arr[i] = curV;
  quicksort(arr,left,i-1);
  quicksort(arr,i+1,right);
};

var a = [1,5,8,3,0,4,6]
quicksort(a,0,6)
console.log(a)