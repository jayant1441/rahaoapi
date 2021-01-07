"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const admin = require("firebase-admin");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const adminConfig = {
        "projectId": 'rahao-school-of-life',
        "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAtZEFqLRqo1U8\nh8UdlDhaCc4Hihh2t3J7ssz3YQnJLTLz4X3gHPXSMMtsqfkoU/+k+FG4K3u2g/a0\n2w+EvySADIYB9Q8kk8DnmnCjkJI4i1l4WetklX+q7CRTV7P7SkOhU9rn9C4vb+yf\nZGtKqdCrmB4h1ipj4zgC0B7ftzBh5JYxfQdjIw7iefjrHOX3Dx9UXeIzSl2Bq81N\n8cT+EhSAI489TdDqCv60zPP2IZW8CYwxcws/sGi4JJR8KdJAIUi02Qg78zUMEpdl\n0CRKff2cLRxT+QvTd8YSF/MY4agt9KgpYDacOjHj5mGAa3bBXWoJIgl8y+UOqZfe\nuFbiwfsjAgMBAAECggEAIEQGRRlLI/O3CMx+v4YarVCo83A2ymHKxFVapizUM5/i\nwRzHM6gFrKzI0qfe9Najnh6JqDl3nEaaHwvynDpYxSvToC5E2831ZZHhPDGvmdIT\nJ+h+VjgFyTuClYXAt9lmW3Or2lxzAzRNPR7WLAkkzCZLHUU7kb/wl9/622BTtIAE\nFPhHJcIZX/dQNg3rwExbF278YumaYTWo5cgOKnOryMBn6rJjp7q01dB1GYPB9s4w\nENBQld1TZ7TvuHLAam026QMgSBCUxthXTAx3uzWqTnAqMCeIQspzGIPB38AdefEp\noDjo48OOetP2K4tIwOkuIJgVifn5Jhs6mGw+9Ina6QKBgQDiq0xw8bTIgX/E5iKz\niUaJylat2JQZEUTphoSPh+fzBU8X/lT+g/ONv3g9sBt9nw92J5E1coAvTZNvHmPf\ni9r1xZsglNPoPZMIWpmgPflci1rrq5wYj3Q4bF2sGVty0X9cIC7YdusfDdo/O7r+\nMmWXVKTHErPZfnTDxjcIfyZcPQKBgQDZpU25XgOzThZbvek9mUqdzYsX2PNojuqn\nsakrC2kL19GglZbN6qrfpaD60VScnUnOw/QL7EQYW18F7oxTfwVdi12Cmy42KqYk\nrFvTWuXJWqw9qxlmdi4cH90TnRhjjZ924lX+RF+/s8/fXpM1SyY5vEzGz4tK2xBB\nCBWhJUZK3wKBgQCMUhUpWkhbU+fAAeP7lwDm7i7Iwmm0Nv+dPZw0qqLJzECRju4Y\n/aC54I1USwBJvT06HPaEytRV9EVQJdUYH6E2QtVszxV8ERpDsqqmC5eiVda8TGl+\nvtfo0hUPJEd7hfu9EWNOuBeICvBP8u8ozBQeIdU8M/TIsMMiK0QIa4ZY1QKBgHda\n87jIGfdmx1QgXZxuSEEpyzGUxEd+uKimAUOdykm4XTlXT5A1NOfZCOMDkQciKqu9\nQkSXmPBSi1XRcBsJ+YNHPky1lS4XTW2nJ+RMYN9/Xh2jixZpkPfTcYWkDQ/rRpwH\nm2kJTgjvLvwr/Uaoo5nd7azJfHXclJlVOadZraa5AoGBAIsRD+XkwenFoERZ9jVE\nrfNHYrQ6dItHmm4QCNWJ3RcYeMZb8Vzwh/MtASPn27OBp58HfFkTtqJUgiWawjZ2\nIao2M9toBMnI17GK24d/4Dsn33rpx9NEYJvtFt2ULYCNH3Ge8+igKt2XORGW90bp\nV4kxaRBquC3AXe+Do/VhLEyx\n-----END PRIVATE KEY-----\n",
        "clientEmail": 'firebase-adminsdk-9j36i@rahao-school-of-life.iam.gserviceaccount.com'
    };
    admin.initializeApp({
        credential: admin.credential.cert(adminConfig),
        databaseURL: "https://rahao-school-of-life.firebaseio.com"
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map