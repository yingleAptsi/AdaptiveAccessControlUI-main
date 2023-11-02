# ApMEDUI

This repository will contain the UI component of the platform for responsive media. It will connect to the underlying platform

https://www.pgadmin.org/

### Extra steps for setting up project

1. Run `npm i` in the `server` directory
2. Modify the `.env` file generated in the `server` directory with your correct credentials
3. Run `npx prisma pull db`
4. Run `npx prsima generate`

`.env` file format:

Put your username for `USERNAME` and password for `PASSWORD`

```
DATABASE_URL="postgresql://USERNAME:PASSWORD@aptsi.postgres.database.azure.com:5432/soasense?schema=adaptive_access_control"
PGSSLMODE="verify-full"
PGSSLCERT="path/to/cert/sent/over/whatsapp"
```

How to add the certifcate to pgAdmin:

<img width="495" alt="Screen Shot 2023-06-16 at 9 24 18 AM" src="https://github.com/Applied-Technology-Solutions-Inc/AdaptiveAccessControlUI/assets/127143090/3146be37-ec87-4229-9d92-151231fb1ab1">
