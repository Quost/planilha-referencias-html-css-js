var commentsArray = [{
        "id": 1,
        "parent": null,
        "created": "2015-01-01",
        "modified": "2015-01-01",
        "content": "Nossa, gostei bastante deste conteúdo. Me ajudou bastante nas aulas de desenvolvimento web I. Continue se esforçando e ajudando pessoas como eu.",
        "attachments": [],
        "pings": [],
        "creator": 2,
        "fullname": "Matheus",
        "profile_picture_url": "img/perfil-8bit.jpeg",
        "created_by_admin": false,
        "created_by_current_user": false,
        "upvote_count": 198,
        "user_has_upvoted": false,
        "is_new": false
    },
    {
        "id": 2,
        "parent": null,
        "created": "2015-01-02",
        "modified": "2015-01-02",
        "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
        "attachments": [],
        "pings": [],
        "creator": 4,
        "fullname": "Administrator",
        "profile_picture_url": "img/adm.jpg",
        "created_by_admin": true,
        "created_by_current_user": false,
        "upvote_count": 2,
        "user_has_upvoted": false,
        "is_new": false
    },
    {
        "id": 3,
        "parent": null,
        "created": "2015-01-03",
        "modified": "2015-01-03",
        "content": "@Hank Smith sed posuere interdum sem.\nQuisque ligula eros ullamcorper https://www.google.com/ quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget #velit.",
        "attachments": [],
        "pings": {
            3: 'Hank Smith',
        },
        "creator": 1,
        "fullname": "You",
        "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
        "created_by_admin": false,
        "created_by_current_user": true,
        "upvote_count": 2,
        "user_has_upvoted": true,
        "is_new": false
    },
    {
        "id": 4,
        "parent": 3,
        "created": "2015-01-04",
        "modified": "2015-01-04",
        "content": "",
        "attachments": [{
            "id": 1,
            "file": "http://www.w3schools.com/html/mov_bbb.mp4",
            "mime_type": "video/mp4",
        }, ],
        "creator": 3,
        "fullname": "João Carlos",
        "profile_picture_url": "img/8bit2.png",
        "created_by_admin": false,
        "created_by_current_user": false,
        "upvote_count": 0,
        "user_has_upvoted": false,
        "is_new": true
    },
    {
        "id": 5,
        "parent": 4,
        "created": "2015-01-05",
        "modified": "2015-01-05",
        "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
        "attachments": [],
        "pings": [],
        "creator": 3,
        "fullname": "João Carlos",
        "profile_picture_url": "img/8bit2.png",
        "created_by_admin": false,
        "created_by_current_user": false,
        "upvote_count": 0,
        "user_has_upvoted": false,
        "is_new": true
    },
    {
        "id": 6,
        "parent": 1,
        "created": "2015-01-06",
        "modified": "2015-01-06",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
        "attachments": [],
        "pings": [],
        "creator": 2,
        "fullname": "Matheus",
        "profile_picture_url": "img/perfil-8bit.jpeg",
        "created_by_admin": false,
        "created_by_current_user": false,
        "upvote_count": 1,
        "user_has_upvoted": false,
        "is_new": false
    },
    {
        "id": 7,
        "parent": 1,
        "created": "2015-01-07",
        "modified": "2015-01-07",
        "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
        "attachments": [],
        "pings": [],
        "creator": 4,
        "fullname": "Administrator",
        "profile_picture_url": "img/adm.jpg",
        "created_by_admin": true,
        "created_by_current_user": false,
        "upvote_count": 0,
        "user_has_upvoted": false,
        "is_new": false
    },
    {
        "id": 8,
        "parent": 6,
        "created": "2015-01-08",
        "modified": "2015-01-08",
        "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
        "attachments": [],
        "pings": [],
        "creator": 1,
        "fullname": "You",
        "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
        "created_by_admin": false,
        "created_by_current_user": true,
        "upvote_count": 0,
        "user_has_upvoted": false,
        "is_new": false
    },
    {
        "id": 9,
        "parent": 8,
        "created": "2015-01-09",
        "modified": "2015-01-10",
        "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
        "attachments": [],
        "pings": [],
        "creator": 2,
        "fullname": "João Carlos",
        "profile_picture_url": "img/8bit2.png",
        "created_by_admin": false,
        "created_by_current_user": false,
        "upvote_count": 0,
        "user_has_upvoted": false,
        "is_new": false
    },
    {
        "id": 10,
        "parent": 9,
        "created": "2015-01-10",
        "modified": "2015-01-10",
        "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
        "attachments": [{
            "id": 2,
            "file": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUt0iVktwHtAoOOlAQrl6aTZUmzdYV9-46Zg&usqp=CAU",
            "mime_type": "image/jpeg",
        }, ],
        "pings": [],
        "creator": 1,
        "fullname": "You",
        "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
        "created_by_admin": false,
        "created_by_current_user": true,
        "upvote_count": 0,
        "user_has_upvoted": false,
        "is_new": false
    }
]

var usersArray = [{
        id: 1,
        fullname: "Current User",
        email: "current.user@viima.com",
        profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
    },
    {
        id: 2,
        fullname: "Matheus",
        email: "matheusquost@yahoo.com",
        profile_picture_url: "img/perfil-8bit.jpeg"
    },
    {
        id: 3,
        fullname: "João Carlos",
        email: "hank.smith@viima.com",
        profile_picture_url: "img/8bit2.png"
    },
    {
        id: 4,
        fullname: "Administrator",
        email: "administrator@viima.com",
        profile_picture_url: "img/adm.jpeg"
    }
]