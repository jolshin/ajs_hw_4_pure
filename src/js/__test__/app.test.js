import healthCheck from "../app";

test.each([ [{name: 'Маг', health: 90}, 'healthy'],
            [{name: 'Маг 2', health: 40}, 'wounded'],
            [{name: 'Маг 3', health: 10}, 'critical'],
])(('test health %s'), 
(data, expected) => {
    const result = healthCheck(data);

    expect(result).toBe(expected);
});