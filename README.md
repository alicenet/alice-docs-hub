# Documentation Lander

This is a documentation hub for all documentation pertaing to AliceNet and it's products, applications, and APIs.
#### Adding additional documentation sites

Documentation site entries are built off of `src/docConfig.json` where json entries correspond to documentation names, locations, and a repository if available

Documentation entries are broken into two categories: *User* and *Technical*.

- *User documentation* is cleaner hand tailored documentation for distrubuted applications such as the wallet.

- *Technical documentation* is more low level API documentation geared for internal and community developers to get a grasp of the code base.

An example of a documentation file would be: 

```
{
    "user": [
        {
            "name": "ProductName General Documentation",
            "url": "http://productname.docs.mywebsite.com",
            "github": "http://github.com/company/productCode"
        }
    ],
    "technical": [
        {
            "name": "TechnicalAPI",
            "url": "http://technicalapi.docs.mywebsite.com",
            "github": "http://github.com/company/technicalAPI"
        },
    ]
}
```
## Running

You can run the hub locally for development with:

1. `npm i`
2. `npm run start`
## Automated Building

Currently this hub is automatically built and deployed to *http://docs.alicenet.duckdns.org* ( To be changed ) anytime a PR is merged or commit it applied to 'main'

To build the application locally run `npm run build` to get a dist folder.