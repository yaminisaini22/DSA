var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    let r = [];
    let ri = 0;
    let q = [];
    for (i=0;i<n;i++){
      if( q.length>0 && q[0] == i-k){
          q.shift();
      }
      while( q.length>0 && nums[q[q.length-1]] < nums[i]){
          q.pop();
      }
      q.push(i);
      if (i>=k-1){
          r[ri++] = nums[q[0]];
      }
    }
    return r;
  };