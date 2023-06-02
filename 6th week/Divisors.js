const getDivisors = num =>
{
    const arr1 = [];
    const arr2 = [];

    for (let i = 1; i*i <= num; i++)
    {
        if (i * i === num) {
            arr1.push(i); break;
        }
        else if (num % i === 0) {
            arr1.push(i);
            arr2.unshift(num / i);
        }
    }
    return arr1.concat(arr2);
};
