let person = {
    'name': 'asdfasdfaMuhammad Bilal Akbar',
    'age': 28,
    'isMarried': false,
    'test case': 'testing',
};
console.log(person);
console.log(person.name);
person.name = 'Muhammad Bilal Akbar';
console.log(person.name);
console.log(person.isMarried);
console.log(person['test case']);
person['test case'] = 'Ghulam Akbar';
console.log(person['test case']);
delete person.name;
console.log(person);
console.log(person.name);

let youtubeChannel = {
    'videoPublished': 714,
    'subscribers': 29900,
    'name': 'The Tech Brother',
    'image': 'https://alskdjf/lakjdf;als.com',
    'detail': {
        'description': 'This is my channel',
        'fbLink': 'https://www.facebook/alskdf',
        'instaLink': 'www.insta.com/lka;sdf'
    }
};
console.log(youtubeChannel.name);
console.log(youtubeChannel.detail.description);
console.log(youtubeChannel);
