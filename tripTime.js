const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [],
        segmentTimes: [],
        totalTime: null,
    };

    const calculateTime = (distance, speedLimit) => Math.round(distance / speedLimit);

    const totalDistances = arr.map((stop) =>
        stop.speedLimits.reduce((total, { distance }) => total + distance, 0)
    );

    const totalTimes = arr.map((stop, i) =>
        stop.speedLimits.reduce((total, { distance, speedLimit }) => total + calculateTime(distance, speedLimit), 0)
    );

    const totalAvgSpeedLimits = arr.map((stop, i) =>
        stop.speedLimits.reduce(
            (total, { distance, speedLimit }) => total + (distance / totalDistances[i]) * speedLimit,
            0
        )
    );

    result.segmentTimes = totalTimes.map((time) => Math.round(time));
    result.avgSpeedLimits = totalAvgSpeedLimits.map((avg) => Math.round(avg));
    result.totalTime = result.segmentTimes.reduce((total, time) => total + time, 0);

    return result;
};

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


const result = tripTime(stops);
console.log(result);