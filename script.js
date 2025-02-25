const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('input', calculate));

function calculate() {
    // Get input values
    const hourlySalary = parseFloat(document.getElementById('hourly-salary').value);
    const hoursPerWeek = parseFloat(document.getElementById('hours-week').value);
    const daysPerWeek = parseFloat(document.getElementById('days-week').value);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    // Validate inputs
    if (isNaN(hourlySalary) || hourlySalary <= 0 ||
        isNaN(hoursPerWeek) || hoursPerWeek <= 0 ||
        isNaN(daysPerWeek) || daysPerWeek <= 0 ||
        isNaN(itemPrice)) {
        document.querySelectorAll('.result').forEach(el => el.textContent = 'N/A');
        return;
    }

    // Calculate intermediate values
    const dailyHours = hoursPerWeek / daysPerWeek;
    const dailyWage = hourlySalary * dailyHours;
    const weeklyWage = hourlySalary * hoursPerWeek;
    const monthlyWage = weeklyWage * 4;

    // Calculate time needed
    const hoursNeeded = itemPrice / hourlySalary;
    const daysNeeded = itemPrice / dailyWage;
    const weeksNeeded = itemPrice / weeklyWage;
    const monthsNeeded = itemPrice / monthlyWage;

    // Calculate percentages
    const hourlyPct = (itemPrice / hourlySalary) * 100;
    const dailyPct = (itemPrice / dailyWage) * 100;
    const weeklyPct = (itemPrice / weeklyWage) * 100;
    const monthlyPct = (itemPrice / monthlyWage) * 100;

    // Update results
    document.getElementById('hours-needed').textContent = hoursNeeded.toFixed(2);
    document.getElementById('days-needed').textContent = daysNeeded.toFixed(2);
    document.getElementById('weeks-needed').textContent = weeksNeeded.toFixed(2);
    document.getElementById('months-needed').textContent = monthsNeeded.toFixed(2);
    
    document.getElementById('hourly-pct').textContent = hourlyPct.toFixed(2) + '%';
    document.getElementById('daily-pct').textContent = dailyPct.toFixed(2) + '%';
    document.getElementById('weekly-pct').textContent = weeklyPct.toFixed(2) + '%';
    document.getElementById('monthly-pct').textContent = monthlyPct.toFixed(2) + '%';

    // Update More Maths section
