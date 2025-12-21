export function avergeOfMassege(list_objects) {
    let new_list_danger = []
    for (let object of list_objects) {
        let total = 0;
        for (let danger_value of object.danger) {
            total += danger_value;

        }
        const averge = object.danger.length > 0 ? total / object.danger.length : 0;

        new_list_danger.push({
            age: object.age,
            average_danger: averge
        });
    }
    // console.log(new_list_danger);
    return new_list_danger;
}

export function getThreeHighestAverageDanger(list_objects) {
    const sorted_list = list_objects.sort((a, b) => b.average_danger - a.average_danger);
    return sorted_list.slice(0, 3);
}