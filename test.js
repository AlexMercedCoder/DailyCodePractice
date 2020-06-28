const getData = async () => {
    try {
        userRes = await fetch(url);
        userJson = await userRes.json();

        desRes = await fetch(url);
        desJson = await desRes.json();

        return await [userJson, desJson];
    } catch (err) {
        console.log(err);
    }
};

const [users, descriptions] = getData();

console.log(users);
console.log(descriptions);
