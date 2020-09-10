
const barbell = 20;

const defaultAvailablePlates = [
    { weight: 0.5, count: 2 },
    { weight: 1.25, count: 2 },
    { weight: 2.5, count: 2 },
    { weight: 5, count: 2 },
    { weight: 10, count: 2 },
    { weight: 15, count: 2 },
    { weight: 20, count: 2 }
];

function clamp(value, max, min = 0) {
    const clampedMin = Math.min(value, max);
    return Math.max(clampedMin, min);
}

export function calcPlates(weight, limitPlates = true, availablePlates = defaultAvailablePlates) {
    let remainingWeight = weight - barbell;
    let plateIndex = availablePlates.length - 1;

    const output = {
        closestWeight: barbell,
        plates: []
    };

    while(remainingWeight > 0 && plateIndex >= 0) {
        const weight = availablePlates[plateIndex].weight;

        const pairCount = Math.floor(remainingWeight / (weight * 2));

        let plateCount = pairCount * 2;
        if(limitPlates) plateCount = clamp(plateCount, availablePlates[plateIndex].count);
        
        remainingWeight -= plateCount * weight;

        if(plateCount > 0) {
            output.plates.push({
                weight,
                count: plateCount
            });
        }
        
        --plateIndex;
    }

    output.plates.forEach(plate => output.closestWeight += plate.weight * plate.count);
    
    return output;
}

export function getNextIncrement(weight) {

    let search = weight;
    let next = weight;

    while(next <= weight) {
        next = calcPlates(search).closestWeight;
        search++;
    }

    return next;
}