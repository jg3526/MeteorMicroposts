# MeteorMicroposts
A twitter-like app that allowing users to create microposts with pictures, utilizing packages like Iron Router, Collection2, Accounts Entry, etc.

## Features

* **Routing:** [iron:router](https://github.com/iron-meteor/iron-router)
* **Front end:** [twbs:bootstrap](https://github.com/twbs/bootstrap)
* **User Accounts:** [accounts-ui](https://atmospherejs.com/meteor/accounts-ui), [accounts-password](https://atmospherejs.com/meteor/accounts-password), [joshowens:accounts-entry](https://github.com/Differential/accounts-entry)
* **File Uploading:** [CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS)
* **Adding a Schema to a Collection:** [aldeed:collection2](https://github.com/aldeed/meteor-collection2)
* **Creating Forms Easily:** [aldeed:autoform](https://github.com/aldeed/meteor-autoform)

## Notes
* Reset local database:
```
meteor reset
```

## Structure
```
MeteorMicroposts/
├── server/
│   └── common.js
├── client/
│   ├── common.js
│   ├── templates/
│   │   ├── head.html
│   │   ├── navbar.html
│   │   ├── layout.html
│   │   ├── posts/
│   │   │   ├── posts.html
│   │   │   └── posts.js
│   │   ├── profile/
│   │   │   ├── profile.html
│   │   │   └── profile.js
│   │   └── about/
│   │       ├── about.html
│   │       └── about.js
│   └── stylesheets/
│       └── MeteorMicroposts.css
├── lib/
│   ├── collection.js
│   └── router.js
└── public/
    ├── fonts/
    └── img/
```
