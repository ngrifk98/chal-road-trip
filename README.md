# Road Trip Time

## Description

This code challenge involves planning a road trip and calculating the time for each segment of the trip. Given an array of stop objects, the goal is to calculate the time taken for each segment based on the distance and speed limits. Additionally, we calculate the weighted average speed limit for each segment and the total time of the entire trip.

## Stop Object Structure

Each stop object in the array has the following structure:

```javascript
{
    name: "Stop Name",
    speedLimits: [
        {
            distance: 100,
            speedLimit: 75
        },
        // ... more speed limit objects
    ],
    traffic: 30 // minutes of traffic delay at this stop (not used in current implementation)
}
```

## Implementation Details

The `tripTime` function is provided, and it performs the following steps:

1. Calculate the time taken for each segment of the trip based on the distance and speed limits.
2. Calculate the weighted average speed limit for each segment of the trip.
3. Calculate the total time of the entire trip by summing up the segment times.

## Usage

To use the `tripTime` function, follow these steps:

1. Clone this repository.
2. Open the `tripTime.js` file.
3. Uncomment the function call at the bottom of the file (line 122).
4. Run the script using Node.js:

```
node tripTime.js
```

## Example Output

The `tripTime` function will return an object with the following structure:

```javascript
{
  avgSpeedLimits: [ 64, 70, 73, 70 ],
  segmentTimes: [ 3, 3, 2, 1 ],
  totalTime: 9
}
```

The `avgSpeedLimits` array contains the weighted average speed limits for each segment, the `segmentTimes` array contains the times for each segment in hours (rounded to whole numbers), and the `totalTime` property represents the total time of the entire trip in hours.

## Note

- The current implementation does not take the "traffic" property into account. If you want to include traffic in your calculations, you can modify the `tripTime` function accordingly.

## Contributing

Contributions to improve this code challenge or add new features are welcome! Please create a pull request.

## License

This code challenge is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
