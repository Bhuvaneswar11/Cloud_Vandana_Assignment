const numbers =[5,2,8,3,6,7];
function Descending(arr){
    const n=arr.length;
    for(let i=0;i<n-i;i++)
    {
        for(let j=0;j<n-i-1;j++)
        {
            if(arr[j]<arr[j+1])
            {
                const temp=arr[j];
                arr[j] =arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}
Descending(numbers);
console.log(numbers);
