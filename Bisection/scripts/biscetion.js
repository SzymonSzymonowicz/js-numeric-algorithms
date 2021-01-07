// function to bisect
function func(x){
    // 4x^3 + 3x^2 - 1
    // return 4 * Math.pow(x, 3) + 3 * Math.pow(x, 2) - 1;

    // our func from assignment
    return Math.pow(x, 5) + 3 * Math.pow(x, 2) + (1/2) * Math.sin(2 * x + 1);
}

// perform biscetion on given interval a, b with accuracy equal to epsilon
function biscetion(a, b, epsilon){
    if (func(a) * func(b) >= 0)
    {
        // also verified before with alert
        return;
    }

    let c = a;

    // Amount of steps done
    var k = 0;

    while ((b-a) >= epsilon)
    {
        // Find middle point
        c = (a+b)/2;

        // Check if middle point is root
        if (func(c) == 0.0)
            break;

        // Decide the side to repeat the steps
        else if (func(c)*func(a) < 0)
            b = c;
        else
            a = c;

        // Increasing steps count
        k++;
    }

    return {c: c, k: k, val: func(c)};
}