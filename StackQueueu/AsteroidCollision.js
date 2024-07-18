var asteroidCollision = function(asteroids) {
    let n = asteroids.length;
    let stack = []
    for (let i = 0;i<n;i++)
    {
         asteroid = asteroids[i];
         while(stack.length>0 && stack[stack.length-1] >0 && asteroid<0) // collision (when stack.top>0 asteroid<0 and   stack.length>0)
         {
            if (Math.abs(asteroid) ===Math.abs(stack[stack.length-1])){
                asteroid = 0;
                stack.pop();
                }// equal mass
            else if(Math.abs(asteroid) > Math.abs(stack[stack.length-1])){
                stack.pop();
            }// asteroid is greater
            
            else{
                asteroid = 0
                }// stack asteroid is greater
         }
         if (asteroid !== 0)
         {
            stack.push(asteroid);
        }
            // no collision
    }
    return stack;
};

const asteroids = [4,7,1,1,2,-3,-7,17,-18,-19];
console.log(asteroidCollision(asteroids));