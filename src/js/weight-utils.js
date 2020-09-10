
const barbell = 20;

export const defaultAvailablePlates = [
    { weight: 0.5 },
    { weight: 1.25 },
    { weight: 2.5 },
    { weight: 5 },
    { weight: 10 },
    { weight: 15 },
    { weight: 20 },
    { weight: 25 }
];

function clamp(value, max, min = 0) {
    const clampedMin = Math.min(value, max);
    return Math.max(clampedMin, min);
}

export function getPlates(weight, availablePlates = defaultAvailablePlates) {
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
        if(availablePlates[plateIndex].count <= 0) plateCount = clamp(plateCount, availablePlates[plateIndex].count);
        
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
        next = getPlates(search).closestWeight;
        search++;
    }

    return next;
}